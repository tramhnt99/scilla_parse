/**
 * Scilla Static Type Checker
 */
import * as SS from './syntax.js';
import { ScillaLiterals, literalType } from './literals.js';
import { Error } from './syntax.js';
import ScillaType, * as ST from './types.js';
import _ from 'lodash';
import * as BI from './builtin.js';
import * as DT from './datatypes.js';
import { isError, getError, setError, resetErrorSettings, parseLib } from './general.js';
import * as TCU from './typecheckerUtil.js'; //Type Checker Utilities

/*
 * Type Library Entry
 */
//Returns updated tenv and ADTDict in STC
export function typeLentry(lentry, tenv, STC) {
    if (isError()) {return;}
    if (lentry instanceof SS.LibVar) {
        const tenv_ = _.cloneDeep(tenv);
        const funTy = STC.typeExpr(lentry.e, tenv_);
        if (lentry.tyopt) {
            const typAssign = TCU.typeAssignable(lentry.tyopt, STC.getTy(funTy));
            if (typAssign) {
                tenv[lentry.x] = STC.getTy(funTy);
                return {tenv: tenv, STC: STC};
            } else {
                setError(new Error("startingTenv: Type of function is not assinable to declared type."));
                return {tenv: tenv, STC: STC};
            }
        } else {
            if (!(funTy instanceof Error)) {
                tenv[lentry.x] = STC.getTy(funTy);
                return {tenv: tenv, STC: STC};
            }
            setError(new Error("Library Entry is not type checking."));
        }
    }

    if (lentry instanceof SS.LibType) {
        //We add the new ADT
        const adt = new DT.ScillaDataTypes();
        adt.tname = lentry.x;
        var constrs = []; //constructors - contain name and arity
        lentry.c.forEach(c => {
            const constr = new DT.Constructor();
            constr.cname = c.cname;
            constr.arity = c.cArgTypes.length;
            adt.tmap[c.cname] = _.cloneDeep(c.cArgTypes);
            constrs.push(constr);
        });
        adt.tconstr = constrs;
        //adt.tparams seem to always be empty for libraries

        //Update ADT dictionaries in this instance of Scilla Type Checker
        STC.ADTDict.ADTDict[adt.tname] = adt;
        constrs.forEach(c => {
            STC.ADTDict.ConstrDict[c.cname] = [c, adt];
        });
        return {tenv: tenv, STC: STC};;
    }
}

/*
 * Type Library Module
 */
//Returns updated tenv and ADTDict in STC, and also all the lmods it typechecked
export function typeLmod(lmod, tenv, STC) {
    const lmodDone = [];
    //Type Check elibs first to add function types and ADTs in tenv and STC
    if (lmod.elibs) {
        lmod.elibs.forEach(elib => {
            if (lmodDone.find(l => l === elib[0])) {
                return {tenv: tenv, STC: STC, lmodDone: lmodDone};
            }
            typeLmod(elib[2], tenv, STC);
            lmodDone.push(elib[0]);
        });
    }

    //Now type check the lmod
    const lentries = lmod.lib.lentries;
    for (let i = 0; i < lentries.length; i++) {
        const lentry = lentries[i];
        // resetErrorSettings();
        typeLentry(lentry, tenv, STC);
        if (isError()) { return; }
    }
    lmodDone.push(lmod.lib.lname);
    return {tenv: tenv, STC: STC, lmodDone: lmodDone};
}

/*
 * Type Contract Module
 */
export function typeCMod(cmod, tenv, STC) {
    //Type elibs - elibs are already parsed and stored
    if (cmod.elibs.length > 0) {
        var lmodDone = [];
        for (let i = 0; i < cmod.elibs.length; i++) {
            if (cmod.elibs[i][0] in lmodDone) { continue; }
            const res = typeLmod(cmod.elibs[i][2], tenv, STC);
            if (isError()) { return; }
            tenv = res.tenv;
            STC = res.STC;
            lmodDone.concat(res.lmodDone);
        }
    }

    //Type library
    if (cmod.lib) {
        const lentries = cmod.lib.lentries;
        for (let i = 0; i < lentries.length; i++) {
            const lentry = lentries[i];
            typeLentry(lentry, tenv, STC);
            if (isError()) { return; }
        }
    }

    //Type Contract
    if (cmod.contr) {
        typeContract(cmod.contr, tenv, STC);
    }

    if (isError()) {
        console.log(getError());
        if (getError().s.search("builtin") !== -1 ) {
                return; //do not print those
            }
        console.log(getError());
    }
}


/*
 * Type Contract
 */
export function typeContract(contract, tenv, STC) {
    //Add implicit parameters before evaluating component
    tenv["_amount"] = new ST.Uint128();
    tenv["_sender"] = new ST.AnyAddr();
    tenv["_origin"] = new ST.AnyAddr();
    tenv["_this_address"] = new ST.ByStrXTyp(20);
    tenv["_creation_block"] = new ST.BNum();


    //Type contract parameters
    for (let i = 0; i < contract.cparams.length; i++) {
        const cparam = contract.cparams[i];
        const isWF = TCU.isWellFormedType(cparam[1], tenv, STC.ADTDict.ADTDict);
        if (!isWF) {
            setError(new Error("typeContract: Type of contract param is not well formed"));
            return;
        }
        //Check if it's of a legal type
        if (cparam[1] instanceof ST.MessageTyp || cparam[1] instanceof ST.PolyFun ||
            cparam[1] instanceof ST.Unit) {
            setError(new Error("typeContract: Type of contract param is illegal."));
            return;
        }
        TCU.setTenv(tenv, cparam[0], cparam[1]);
    }

    //Type constraint
    if (contract.cconstraint) {
        const tenv_ = _.cloneDeep(tenv);
        const ty = STC.typeExpr(contract.cconstraint, tenv_);
        if (isError()) {return;}
        //Check constraint of assignable to type Bool
        const check = TCU.typeAssignable(new ST.ADT("Bool", []), ty.ty);
        if (!check) {
            setError(new Error("typeContract: Constraint is not assignable to type Bool."));
            return;
        }
    }

    //Type fields
    if (contract.cfields) {
        //For each field, check if the expression type checks and is assignable to its declared types
        //Also check if legal field type
        for (let i = 0; i < contract.cfields.length; i++) {
            const field = contract.cfields[i];
            const tenv_ = _.cloneDeep(tenv);
            const eTy = STC.typeExpr(field.e, tenv_);
            if (isError()) { return; }
            const check = TCU.typeAssignable(field.type, eTy.ty);
            if (!check) {
                setError(new Error("typeContract: Field's expressions type is not assignable to its declared type."));
                return;
            }
            if (eTy.ty instanceof ST.MessageTyp || eTy.ty instanceof ST.PolyFun ||
                eTy.ty instanceof ST.Unit) {
                setError(new Error("typeContract: Type of field is illegal."));
                return;
            }
            TCU.setTenv(tenv, field.name, field.type);
        }
        //Add a balance field
        TCU.setTenv(tenv, "_balance", new ST.Uint128());
    }

    //Type components - check all return true
    if (contract.ccomps) {
        contract.ccomps.every(ccomp => {
            const res = typeComponent(ccomp, tenv, STC);
            //Bind procedures in the environemnt to the list of arguments they take
            if (ccomp.compType instanceof SS.CompProc) {
                tenv[ccomp.compName] = ccomp.compParams.map(p => p[1]);
            }
            return res;
        });
    }
    
}

export function typeComponent(component, tenv, STC) {
    //Type componant parameters
    if (component.compParams) {
        for (let i = 0; i < component.compParams.length; i++) {
            const cparam = component.compParams[i];
            
            //Check if param has legal types for its respective component type
            if (component.compType instanceof SS.CompTrans) {
                const ty = cparam[1];
                if (ty instanceof ST.MessageTyp || ty instanceof ST.PolyFun ||
                    ty instanceof ST.Unit || ty instanceof ST.MapType) {
                        setError(new Error("typeComponent: Transition component param is of illegal type"));
                        return;
                    }
                const tyWF = TCU.isWellFormedType(ty, tenv, STC.ADTDict.ADTDict);
                if (!tyWF) {
                    setError(new Error("typeComponent: Transition component param is not well formed."));
                }
                TCU.setTenv(tenv, cparam[0], cparam[1]);
            }
            if (component.compType instanceof SS.CompProc) {
                const ty = cparam[1];
                if (ty instanceof ST.PolyFun ||
                    ty instanceof ST.Unit || ty instanceof ST.MapType) {
                        setError(new Error("typeComponent: Procedure component param is of illegal type"));
                        return;
                }
                const tyWF = TCU.isWellFormedType(ty, tenv, STC.ADTDict.ADTDict);
                if (!tyWF) {
                    setError(new Error("typeComponent: Procedure component param is not well formed."));
                }
                TCU.setTenv(tenv, cparam[0], cparam[1]);
            }
        }
    }

    //Type component body
    // console.log("Component: " + component.compName);
    typeStmts(component.compBody, tenv, STC);
    return true;
}

//Returns undefined (we just update tenv)
export function typeStmts(stmts, tenv, STC) {
    if (isError()) { return; }
    if (stmts.length === 0) { return ; }
    const s = stmts[0];
    const sts = stmts.slice(1);
    if (s instanceof SS.Load) {
        const ty = tenv[s.r];
        if (!ty) {
            setError(new Error("typeStmts: " + s.r + " is not bound in type environment."));
            return;
        }
        const tenv_ = _.cloneDeep(tenv);
        tenv_[s.x] = ty;
        return typeStmts(sts, tenv_, STC);
    }
    if (s instanceof SS.RemoteLoad) {
        const adr_ty = tenv[s.addr];
        if (!adr_ty) {
            setError(new Error("typeStmts: " + s.addr + " is not bound in type environment."));
            return;
        }
        const ty = TCU.addressFieldType(s.r, adr_ty);
        if (isError()) { return; }
        const tenv_ = _.cloneDeep(tenv);
        tenv_[s.x] = ty;
        return typeStmts(sts, tenv_, STC);
    }
    if (s instanceof SS.Store) {
        if (s.x === "_balance") {
            setError(new Error("typeStmts: We are not allowed to store in the _balance field."));
            return;
        }
        const fty = tenv[s.x];
        const rty = tenv[s.r];
        if (fty === undefined || rty === undefined) {
            console.log(s.x);
            console.log(fty);
            console.log(s.r);
            console.log(rty);
            setError(new Error("typeStmts: Either the field or the argument is not bound."));
            return;
        }
        const check = TCU.typeAssignable(fty, rty);
        if (!check) {
            console.log(s.x);
            console.log(fty);
            console.log(s.r);
            console.log(rty);
            setError(new Error("typeStmts: Argument is not assignable to field"));
            return;
        }
        const tenv_ = _.cloneDeep(tenv);
        return typeStmts(sts, tenv_, STC);
    }
    if (s instanceof SS.Bind) {
        const tenv_ = _.cloneDeep(tenv);
        const tyExp = STC.typeExpr(s.e, tenv_);
        if (isError()) {return;}
        const tenv__ = _.cloneDeep(tenv);
        tenv__[s.x] = tyExp.ty;
        return typeStmts(sts, tenv__, STC);
    }

    if (s instanceof SS.MapUpdate) {
        //Type map access
        const mtype = tenv[s.m];
        if (!mtype) {
            setError(new Error("typeStmts: Type of map " + s.m + " is not bound."));
            return;
        }
        const kltype = s.klist.map(k => tenv[k]);
        if (undefined in kltype) {
            setError(new Error("typeStmts: Some key is not bound."));
            return;
        }
        const resTy = TCU.typeMapAccess(mtype, kltype);
        if (isError()) { return; }
        if (s.ropt) {
            const r = tenv[s.ropt];
            if (!r) {
                setError(new Error("typeStmts: MapUpdate value is not bound."));
                return;
            }
            const check = TCU.typeAssignable(resTy, r);
            if (!check) {
                console.log(r);
                console.log(resTy);
                console.log(s);
                setError(new Error("typeStmts: MapUpdate value is not assignable."));
                return;
            }
        }
        const tenv_ = _.cloneDeep(tenv);
        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.MapGet) {
        const mtype = tenv[s.m];
        if (!mtype) {
            setError(new Error("typeStmts: Type of map " + s.m + " is not bound in MapGet."));
            return;
        }
        const kltype = s.klist.map(k => tenv[k]);
        if (undefined in kltype) {
            setError(new Error("typeStmts: Some key is not bound in MapGet."));
            return;
        }
        const resTy = TCU.typeMapAccess(mtype, kltype);
        if (isError()) { return; }
        const resTy_ = s.fetchval ? new ST.ADT("Option", [resTy]) : new ST.ADT("Bool", []);
        const tenv_ = _.cloneDeep(tenv);
        tenv_[s.x] = resTy_;
        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.RemoteMapGet) {
        const kltype = s.klist.map(k => tenv[k]);
        if (undefined in kltype) {
            setError(new Error("typeStmts: Some key is not bound in RemoteMapGet."));
            return;
        }
        const adrtype = tenv[s.adr];
        if (!adrtype) {
            setError(new Error("typeSTmts: AdrType not bound."));
            return;
        }
        const mtype = TCU.addressFieldType(s.m, adrtype);
        if (isError()) { return; }
        const resTy = TCU.typeMapAccess(mtype, kltype);
        if (isError()) { return; }
        const resTy_ = s.fetchval ? new ST.ADT("Option", [resTy]) : new ST.ADT("Bool", []);
        const tenv_ = _.cloneDeep(tenv);
        tenv_[s.x] = resTy_;
        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.TypeCast) {
        //Only allow casts to address types
        const check1 = TCU.typeAssignable(new ST.AnyAddr, s.t);
        if (!check1) {
            setError(new Error("typeStmts: Type casting to a non-address type."));
            return;
        }
        const rtyp = tenv[s.r];
        if (!rtyp) {
            setError(new Error("typeStmts: rtyp is not bound."));
            return;
        }
        //Only allow casts of types that could be an address type
        const check2 = TCU.typeAssignable(new ST.ByStrXTyp(20), rtyp);
        if (!check2) {
            setError(new Error("typeStmts: Did not pass check2."));
            return;
        }
        const resTyp = new ST.ADT("Option", [s.t]);
        if (isError()) { return; }
        const tenv_ = _.cloneDeep(tenv);
        tenv_[s.x] = resTyp;
        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.MatchStmt) {
        if (s.clauses.length === 0) {
            setError("typeStmts: Match statement has no clauses.");
            return;
        }
        const xtyp = tenv[s.x];
        if (!xtyp) {
            setError(new Error("typeStmts: Match x is not bound"));
        }

        //Run just to see if we get any errors
        for (let i = 0; i < s.clauses.length; i++) {
            const clause = s.clauses[i];
            const tenv_ = _.cloneDeep(tenv);
            const tenv__ = TCU.updateTenvOfPattern(clause.pat, xtyp, tenv_, STC.ADTDict);
            if (!tenv__) {
                setError(new Error("typeStmts: Failed to update tenv in MatchStmt."));
                return;
            }
            typeStmts(clause.stmts, tenv__, STC);
            if (isError()) { return; }
        }
        if (isError()) { return; }
        const tenv_ = _.cloneDeep(tenv);
        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.AcceptPayment) {
        const tenv_ = _.cloneDeep(tenv);
        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.ReadFromBC) {
        var bf = undefined;
        if (s.bf instanceof SS.CurBlockNum) {
            bf = new ST.BNum();
        } else if (s.bf instanceof SS.ChainID) {
            bf = new ST.Uint32();
        } else if (s.bf instanceof SS.TimeStamp) {
            const targ = tenv[s.bf];
            if (!targ) {
                setError(new Error("typeStmts: Time Stamp targ is not bound."));
                return;
            }
            const check = TCU.typeAssignable(new ST.BNum(), targ);
            if (!check) {
                setError(new Error("typeStmts: Time Stamp targ is not assignable to Bnum type."));
                return;
            }
            bf = new ST.ADT("Option", [new ST.Uint64()]);
        } else {
            setError(new Error("typeStmts: Couldn't match s.bf"));
            return;
        }
        const tenv_ = _.cloneDeep(tenv);
        tenv_[s.x] = bf;

        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.SendMsgs) {
        const ty = tenv[s.ms];
        if (!ty) {
            setError(new Error("typeStmts: Message variable is not bound"));
            return;
        }
        const ty_expected = new ST.ADT("List", [new ST.MessageTyp]);
        const check = TCU.typeAssignable(ty_expected, ty);
        if (!check) {
            setError(new Error("typeStmts: SendMsgs message did not pass the check"));
            return;
        }
        const tenv_ = _.cloneDeep(tenv);
        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.CreateEvnt) {
        const ty = tenv[s.param];
        if (!ty) {
            setError(new Error("typeStmts: Even variable is not bound."));
            return;
        }
        const check = TCU.typeAssignable(new ST.EventTyp, ty);
        if (!check) {
            setError(new Error("typeStmts: CreateEvnt is not of type event."));
            return;
        }
        const tenv_ = _.cloneDeep(tenv);
        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.CallProc) {
        const procArgs = tenv[s.p];
        if (!procArgs) {
            setError(new Error("typeStmts: Procedure is not bound."));
            return;
        }
        const actualsTy = s.actuals.map(a => tenv[a]);
        if (undefined in actualsTy) {
            setError(new Error("typeStmts: Some CallProc arg is not bound."));
            return;
        }
        const check = procArgs.reduce((is_true, argTy, index) => {
            const check = TCU.typeAssignable(argTy, actualsTy[index]);
            return is_true && check;
        }, true);
        if (!check) {
            setError(new Error("typeStmts: Some actual is not assignable to proc arg."));
            return;
        }
        const tenv_ = _.cloneDeep(tenv);
        return typeStmts(sts, tenv_, STC);
    }

    if (s instanceof SS.Throw) {
        if (!s.eopt) {
            return;
        } else {
            const ty = tenv[s.eopt];
            if (!ty) {
                setError(new Error("typeStmts: Throw variable is not bound."));
                return;
            }
            const check = TCU.typeAssignable(new ST.ExceptionTyp, ty);
            if (!check) {
                setError(new Error("typeStmts: Throw is not of type event."));
                return;
            }
            const tenv_ = _.cloneDeep(tenv);
            return typeStmts(sts, tenv_, STC);
        }
    }
    
    if (s instanceof SS.Iterate) {
        const tyl = tenv[s.l];
        if (!tyl) {
            setError(new Error("typeStmts: Iterate l is not bound"));
            return;
        }
        const proc = tenv[s.p];
        if (!proc) {
            setError(new Error("typeStmts: Proc is not found"));
            return;
        }
        const check = TCU.typeAssignable(new ST.ADT("List", proc), tyl);
        if (!check) {
            setError(new Error("typeStmts: Iterate didn't pass check"));
            return;
        }
        const tenv_ = _.cloneDeep(tenv);
        return typeStmts(sts, tenv_, STC);
    }
    setError(new Error("typeStmts: Couldn't match a statement"));
    return;
}


//Handles Pure Scilla
export default class ScillaTypeChecker{
    constructor(){
        this.error_msg = undefined;
        this.ADTDict = new DT.DataTypeDict();
    }

    getType(v) {
        if (isError()) { return; }
        return this.tyEnv[v];
    }

    updateEnv(v, ty) {
        if (isError()) { return; }
        this.tyEnv[v] = ty;
    }

    //Results of all functions will be an object containing the expressions
    //and its type (unless it was an Error)
    makeRes(e, ty) {
        if (isError()) { return; }
        return {e: e, ty: ty};
    }

    getExpr(res) {
        if (isError()) { return; }
        return res.e;
    }

    getTy(res) {
        if (isError()) { return; }
        return res.ty;
    }

    //Typing Expressions
    //Returns the expression paired with type
    //[ScillaExpr, ScillaType]
    //If fails, returns undefined - with error message
    //found in this.error
    /**
     * 
     * @param {ScillaExpr} e 
     * @param {(String * SType){}} tenv //Contains both type vars and vars
     */
    typeExpr(e, tenv){
        if (isError()) {
            return;;
        }

        if (e instanceof SS.Literal) {
            const res = literalType(e);
            if (isError()) { return; }
            return this.makeRes(e, res);
        }
        if (e instanceof SS.Var) {
            const ty = tenv[e.s];
            if (ty === undefined) {
                console.log(tenv);
                setError(new Error("typeExpr: Variable " + e.s + " not found in Type Environment."));
                return;;
            }
            return this.makeRes(e, ty);
        }
        if (e instanceof SS.Fun) {
            const isWF = TCU.isWellFormedType(e.ty, tenv, this.ADTDict.ADTDict);
            if (!isWF) { 
                setError(new Error("typeExpr: Function Argument Type is not well formed."));
                return;; 
            }

            //Extend environment to include the argument type
            const tenv_ = _.cloneDeep(tenv); 
            TCU.setTenv(tenv_, e.id, e.ty);
            if (isError()) { return; }

            //Recursively run function with the updated environment
            const typedBody = this.typeExpr(e.e, tenv_);  
            if (isError()) { return; }

            return this.makeRes(e, new ST.FunType(e.ty, this.getTy(typedBody)));
        }

        if (e instanceof SS.App) {
            const fty = tenv[e.f_var];
            if (!fty) {
                setError(new Error("typeExpr: Type of function " + e.f_var + " is not bound"));
                return;;
            }

            //Arguments Type - undefined arg types are checked in TCU.functionTypeApplies
            const actualsTy = e.args.map(arg => tenv[arg]);
            const resType = TCU.functionTypeApplies(fty, actualsTy);
            if (isError()) {
                console.log(tenv["foldl_while"].t1);
            }
            
            const resTypeWF = TCU.isWellFormedType(resType, tenv, this.ADTDict.ADTDict);
            if (!resTypeWF) {
                setError(new Error("typeExpr: Result Type of App is not well formed."));
                return;;
            }

            return this.makeRes(e, resType);
        }

        if (e instanceof SS.Let) {
            const typedLhs = this.typeExpr(e.lhs, tenv);
            if (isError()) { return; }
            const actualTyp = 
                e.ty === null
                ? this.getTy(typedLhs)
                : TCU.typeAssignable(e.ty, this.getTy(typedLhs))
                ? e.ty  
                : new Error("typeExpr: Typing in Let is not assignable ");
            if (actualTyp instanceof Error) { setError(actualTyp); return;}

            const tenv_ = _.cloneDeep(tenv); 
            TCU.setTenv(tenv_, e.x, actualTyp);
            const typedRhs = this.typeExpr(e.rhs, tenv_);
            if (isError()) { return; }
            return this.makeRes(e, this.getTy(typedRhs));
        }

        if (e instanceof SS.Builtin) {
            if (e.targs) {
                const tyArgsWF = e.targs.reduce((is_true, targ) => 
                is_true && TCU.isWellFormedType(targ, tenv, this.ADTDict.ADTDict), true);
                if (!tyArgsWF) {
                    setError(new Error("typeExpr: Builtin Type Arguments are not well formed."));
                    return;
                }
            }
            //Resolve the actuals and get the type of arguments
            const resolvedTypArgs = e.xs.map(arg => {
                if (tenv[arg] === undefined) {                    
                    setError(new Error("typeExpr: Builtin Argument " + arg + " is not in environment."));
                } else {
                    return tenv[arg];
                }
            });
            if (isError()) { return; }

            //Get Function Type
            const func = BI.BuiltInDict[e.b];
            if (func === undefined) {
                //We do not handle type check this specific builtin
                setError(new Error("typeExpr: We do not handle builtin " + e.b));
            }
            //Remove TFuns
            const func_ = BI.resolveBIFunType(e.b, resolvedTypArgs);
            const resolvedTypArgs_ = BI.resolveBITargs(e.b, resolvedTypArgs);
            if (isError()) { return; }
            const resType = TCU.functionTypeApplies(func_, resolvedTypArgs_);
            if (isError()) { return; }

            const resTypeWF = TCU.isWellFormedType(resType, tenv, this.ADTDict.ADTDict);
            if (!resTypeWF) { 
                setError(new Error("typeExpr: Builtin result type is not well formed."));
                return;
            }

            return this.makeRes(e, resType);
        }

        if (e instanceof SS.DataConstructor) {
            const tyArgsWF = e.ts.reduce((is_true, targ) =>
                is_true && TCU.isWellFormedType(targ, tenv, this.ADTDict.ADTDict), true);
            if (!tyArgsWF) {
                setError(new Error("typeExpr: DataConstructor type arguments are not well formed"));
                return;;
            }
            
            const constr = this.ADTDict.ConstrDict[e.c][0];
            const noOfArg = e.args.length;
            if (constr.arity !== noOfArg) {
                setError(new Error("typeExpr: Constructor arity mismatch"));
                return;;
            }

            const adt = this.ADTDict.ConstrDict[e.c][1];
            if (constr.arity === 0) {
                //We do not need to type check args
                return this.makeRes(e, new ST.ADT(adt.tname, e.ts));
            }

            //Apply types to type functions and check arguments
            //1. Get Data Type and then tparams and make sure there's no shadowing.
            const cparams = adt.tmap[e.c]; //SType[] - constructor parameters
            const ADTparams = adt.tparams; //String[] - what we might rename
            const refresh = TCU.refereshADTTVars(cparams, ADTparams, tenv);
            const ADTParams_ = refresh.newap;
            const cparamsNoShadow = refresh.newcp;

            //2. Apply type params and update tenv accordingly
            const appliedCParams = cparamsNoShadow.map(cparam => {
                return ADTParams_.reduce((stype, str_tvar, index) => {
                    TCU.setTenv(tenv, str_tvar, e.ts[index]);
                    return ST.substTypeinType(str_tvar, e.ts[index], stype)
                }, cparam);
            });
            if (isError()) {return;};

            //3. Ensure arguments applied type check
            const typesOfArgs = e.args.map(arg => {
                const tenv_ = _.cloneDeep(tenv);
                const res = this.typeExpr(new SS.Var(arg), tenv_);
                if (!res) {return;}
                return this.typeExpr(new SS.Var(arg), tenv_).ty;
            });
            const argTC = appliedCParams.reduce((is_true, cparam, index) => {
                return is_true && TCU.typeAssignable(cparam, typesOfArgs[index]);
            }, true);
            if (!argTC) {
                setError(new Error("typeExpr: Arguments of Constructor do not type check"));
            }
            if (isError()) { return; }
            return this.makeRes(e, new ST.ADT(adt.tname, e.ts));
        }

        if (e instanceof SS.Match) {
            if (e.clauses.length === 0) {
                setError(new Error("typeExpr: List of pattern matching is empty."));
            }
            const xTyp = tenv[e.x];

            //Ensure all clauses have the same type
            var clausesTyp = [];
            const tenv_ = _.cloneDeep(tenv);
            
            for (let i = 0; i < e.clauses.length; i++) {
                const clause = e.clauses[i];
                const clauseTyp = this.typeExpr(clause.exp, TCU.updateTenvOfPattern(clause.pat, xTyp, tenv_, this.ADTDict));
                if (!clauseTyp) {
                    setError("typeExpr: Match clauses's type is met an error");
                    return;
                }
                clausesTyp.push(clauseTyp.ty);
            }
            if (isError()) { return; }
            const allEqual = clausesTyp.every((ty => TCU.typeAssignable(ty, clausesTyp[0])));
            if (!allEqual) {
                setError(new Error("typeExpr: Match clauses are not of the same type"));
            }
            if (isError()) { return; }
            return this.makeRes(e, clausesTyp[0]);
        }

        if (e instanceof SS.TFun) {
            //According to Scilla TC, it is illegal to declare a type variable
            //with the same name as an existing one in the scope
            if (tenv[e.i] !== undefined) {
                setError(new Error("typeExpr: Type Variable is already in use"));
            }
            const tenv_ = _.cloneDeep(tenv);
            TCU.setTenv(tenv_, e.i, new ST.TypeVar(e.i));
            const typedE = this.typeExpr(e.e, tenv_);
            return this.makeRes(e, new ST.PolyFun(e.i, this.getTy(typedE)));
        }

        if (e instanceof SS.TApp) { 
            //Check all type arguments are WF
            const tArgsWF = e.targs.reduce((is_true, targ) => is_true && TCU.isWellFormedType(targ, tenv, this.ADTDict.ADTDict));
            if (!tArgsWF) {
                setError(new Error("typeExpr: TApp type arguments are not well formed."));
                return;;
            }
            const funTy = BI.BuiltInDict[e.f] 
                        ? BI.BuiltInDict[e.f].funTyp
                        : tenv[e.f];
            if (!funTy) {
                setError(new Error("typeExpr: TApp's function type of function " + e.f + " is not bound"));
                return;
            }
            function applyToTFun(tfun, targs) {
                if (isError()) {return;}
                if (tfun instanceof ST.PolyFun) {
                    if (targs.length > 0) {
                        const tenv_ = _.cloneDeep(tenv);
                        TCU.setTenv(tenv_, tfun.name, targs[0]);
                        const tfun_ = ST.substTypeinType(tfun.name, targs[0], tfun.t);
                        return applyToTFun(tfun_, targs.slice(1, targs.length));
                    } else {
                        return tfun;
                    }
                } else {
                    return tfun;
                }
            }
            const funTy_ = TCU.refreshPolyFun(funTy, tenv);
            const funTy__ = applyToTFun(TCU.refreshPolyFun(funTy_, tenv), e.targs);
            if (!funTy__) {
                console.log(funTy);
                console.log(e.targs);
                console.log(funTy_);
                setError(new Error("typeExpr: TApp's funTy is undefined"));
                return;
            }
            if (isError()) {return;};
            return this.makeRes(e, funTy__);
        }

        if (e instanceof SS.Message) {
            //Find the type of the message
            function msgTyp(e) {
                if (e.es.find(e => e.i === "_tag") !== undefined) {
                    return new ST.MessageTyp();
                }
                if (e.es.find(e => e.i === "_eventname") !== undefined) {
                    return new ST.EventTyp();
                }
                if (e.es.find(e => e.i === "_exception") !== undefined) {
                    return new ST.ExceptionTyp();
                }
                setError(new Error("msgTyp: Ill built message"));
            }
            const msgTy = msgTyp(e);
            if (isError()) {return;};

            function payloadTyp(es, ADTDict) {
                if (isError()) {return;};
                const STC =  new ScillaTypeChecker(); //not sure why this is a bug
                STC.ADTDict = ADTDict;
                function checkFieldType(seenTyp) {
                    //If the field is a mandatory field
                    //We check the literal passed to it is of the right type
                    if (ST.msgFieldTypes[es.i] !== undefined) {
                        if (!TCU.typeAssignable(ST.msgFieldTypes[es.i], seenTyp)) {
                            setError(new Error("checkFieldType: Message field type is not assignable."));
                            return; 
                        }
                    }
                }

                if (es.l !== undefined) {
                    //A literal is passed to message
                    const tenv_ = _.cloneDeep(tenv);
                    const ty = STC.typeExpr(es.l, tenv_).ty;
                    checkFieldType(ty);
                    if (isError()) {return;};
                    return STC.makeRes(es, ty);
                }

                if (es.v !== undefined) {
                    //A variable is passed to message
                    const ty = tenv[es.v];
                    if (ty === undefined) {
                        setError(new Error("payloadTyp: Message variable " + es.v + " is not in the environemt."));
                        return;;
                    }
                    checkFieldType(ty);
                    if (ty instanceof ST.MapType || ty instanceof ST.EventTyp || ty instanceof ST.PolyFun || ty instanceof ST.Unit) {
                        setError(new Error("payloadTyp: Message variables are of illegal type."));
                        return;;
                    }
                    return STC.makeRes(es, ty);
                }
            }
            for (let i = 0; i < e.es.length; i++) {
                payloadTyp(e.es[i], this.ADTDict);
                //Ignore results, we just type check payloads
            }
            if (isError()) { return; }
            return this.makeRes(e, msgTy);
        }
    }
}

