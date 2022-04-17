import ScillaType, * as ST from './types.js';
import {setError, getError, isError} from './general.js';
import * as SS from './syntax.js';
import _ from 'lodash';
/**
 * 
 * 
 * Utility functions for the Scilla TypeChecker
 * 
 * 
 */

//Controled way of setting values in the type enviroment
export function setTenv(tenv, x, v) {
    if (isError()) { return; }
    if (tenv[x]) {
        if (tenv[x].constructor === v.constructor //workaround
            || x.search("'") === -1 //Allow reassigning of variables - not type variables
            || tenv[x].constructor === (new ST.TypeVar(x)).constructor //TypeVar is used as a place holder
            ) { //workaround
            tenv[x] = v;
            return tenv;
        } else {
            console.log('tenv error:');
            console.log(tenv[x]);
            console.log(v);
            setError(new Error("setTenv: " + x + " already exists in tenv"));
        }
    } else {
        tenv[x] = v;
        return tenv;
    }
}

//Returns an object mapping from a previous tvar name, to a new one
export function makeFreshTVars(tvars, taken) {
    if (isError()) { return; }
    var counter = 0;
    var res = {};
    const newTVars = tvars.map(tvar => {
        var tvar_ = tvar;
        while (tvar_ in taken) {
            counter = counter + 1;
            tvar_  = "'" + counter.toString();
        };
        res[tvar] = tvar_;
        return tvar_;
    });
    return {new: newTVars, map: res};
}

//Generate new adt's tvars and contrustctor's param types respectively
//Which allows no shadowing
//Eg. If ADT has tparams "'A", and a constructor takes a parameter of type ST.TypeVar("'A"),
//but "'A" is already bound in env, then we create a new one called "'1" and bind it to that instead
export function refereshADTTVars(cparams, adtParams, tenv) {
    if (isError()) { return; }
    const renaming = makeFreshTVars(adtParams, tenv).map; //(String * String){}
    const cparamsNoShadow = cparams.map(t => {
            return adtParams.reduce((stype, str_tvar) => {
                return ST.substTypeinType(str_tvar, new ST.TypeVar(renaming[str_tvar]), stype);
            }, t);
        });
    const ADTParams_ = makeFreshTVars(adtParams, tenv).new;
    return {newcp: cparamsNoShadow, newap: ADTParams_};
}


//Refresh a polymorphic function type for type variables to be unique
export function refreshPolyFun(tfun, tenv) {
    if (tfun instanceof ST.PolyFun) {
        const tvar = tfun.name;
        if (tvar in tenv) {
            const newTvar = makeFreshTVars([tvar], tenv).new[0]; //String[]
            const newFun = ST.substTypeinType(tvar, new ST.TypeVar(newTvar), tfun.t);
            const tenv_ = _.cloneDeep(tenv);
            tenv_[newTvar] = new ST.TypeVar(newTvar); //Random place holder
            const newNewFun = refreshPolyFun(newFun, tenv_);
            return new ST.PolyFun(newTvar, newNewFun);
        } else {
            return new ST.PolyFun(tvar, refreshPolyFun(tfun.t, tenv));
        }
    } else {
        return tfun;
    }
}



//Checks whether the type is well-formed
//given an environment
export function isWellFormedType(ty, tenv, ADTDict) {
    if (isError()) { return false; }
    function isWellFormedType_(t_, tb) {
        if (t_ === undefined) {
            setError(new Error("isWellFormedType_: type is undefined"));
            return false;
        }
        if (t_ instanceof ST.PrimType || t_ instanceof ST.Unit || t_ instanceof ST.AnyAddr 
            || t_ instanceof ST.CodeAddr || t_ instanceof ST.LibAddr) {
            return true;
        }
        if (t_ instanceof ST.MapType) {
            return isWellFormedType_(t_.t1, tb) && isWellFormedType_(t_.t2, tb);
        }
        if (t_ instanceof ST.FunType) {
            return isWellFormedType_(t_.t1, tb) && isWellFormedType_(t_.t2, tb);
        }
        if (t_ instanceof ST.ADT) {
            //Check arity of ADT tvars
            const adt = ADTDict[t_.name];
            if (!adt) {
                console.log(ADTDict);
                setError(new Error("isWellFormedType_: Couldn't find adt " + t_.name + "."));
                return false;
            }
            if (t_.t.length !== adt.tparams.length) {
                setError(new Error("isWellFormedType_: ADT type constructor arity mismatch"));
                return false;
            }
            const res = t_.t.reduce((is_true, t) => is_true && isWellFormedType_(t, tb), true);
            return res;
        }
        if (t_ instanceof ST.TypeVar) {
            //Check if bound locally
            if (tb.find(t => t === t_.name) !== undefined) {
                return true;
            }
            //Check if bound in environment
            if (tenv[t_.name] !== undefined) {
                return true;
            }
            setError(new Error("isWellFormedType_: Unbound type variable " + t_.name + "."));
            return false;
        }
        if (t_ instanceof ST.PolyFun) {
            return isWellFormedType_(t_.t, tb.concat([t_.name]));
        }
        if (t_ instanceof ST.ContrAddr) {
            const res = t_.fs.reduce((is_true, t) => is_true && isWellFormedType_(t.typ, tb), true);
            return res;
        }
        console.log(t_);
        setError(new Error("isWellFormedType_: Missed a type."));
        return false;
    }
    return isWellFormedType_(ty, []);
}


//Checking type equality
export function typeEqual(ty1, ty2) {
    if (isError()) { return; }
    if (ty1 instanceof ST.PrimType && ty2 instanceof ST.PrimType) {
        return ty1.constructor === ty2.constructor;
    }
    if (ty1 instanceof ST.TypeVar && ty2 instanceof ST.TypeVar) {
        return ty1.name === ty2.name;
    }
    if (ty1 instanceof ST.Unit && ty2 instanceof ST.Unit) {
        return true;
    }
    if (ty1 instanceof ST.ADT && ty2 instanceof ST.ADT) {
        const eqNames = ty1.id === ty2.id;
        const eqArgLength = ty1.t.length === ty2.t.length;
        const eqArgs = ty1.t.reduce((is_true, t1, index) => 
            is_true && (typeEqual(t1, ty2.t[index]))
        , true);
        return eqNames && eqArgLength && eqArgs;
    }
    if ((ty1 instanceof ST.MapType && ty2 instanceof ST.MapType) 
        || (ty1 instanceof ST.FunType && ty2 instanceof ST.FunType)) {
        return typeEqual(ty1.t1, ty2.t1) && typeEqual(ty1.t2, ty2.t2);
    }
    if (ty1 instanceof ST.PolyFun && ty2 instanceof ST.PolyFun) {
        return (ty1.name === ty2.name && typeEqual(ty1.t, ty2.t));
    }
    if ((ty1 instanceof ST.AnyAddr && ty2 instanceof ST.AnyAddr)
        || (ty1 instanceof ST.LibAddr && ty2 instanceof ST.LibAddr)
        || (ty1 instanceof ST.CodeAddr && ty2 instanceof ST.CodeAddr)) {
        return true;
    }
    if (ty1 instanceof ST.ContrAddr && ty2 instanceof ST.ContrAddr) {
        return ty1.fs.reduce((is_true, t1) => {
            const t2 = ty2.fs.find(t2 => t2.id === t1.id);
            if (!t2) {return false;}
            return is_true && typeEqual(t1.typ, t2.typ);
        }, true)
    }
    return false;
}



//Checks whether one type is assignable to another
//tyTo :> toFrom
export function typeAssignable(tyTo, tyFrom) {
    if (tyTo instanceof ST.AddressType && tyFrom instanceof ST.AddressType) {
        if (tyTo instanceof ST.AnyAddr) {
            return true;
        }
        if (tyTo instanceof ST.LibAddr && tyFrom instanceof ST.LibAddr) {
            return true;
        }
        if (tyTo instanceof ST.CodeAddr && 
            (tyFrom instanceof ST.CodeAddr 
            || tyFrom instanceof ST.LibAddr 
            || tyFrom instanceof ST.ContrAddr)) {
            return true;
        }
        if (tyTo instanceof ST.ContrAddr && tyFrom instanceof ST.ContrAddr) {
            //Check all fields from tyTo.fs are a subset of tyFrom.fs
            //and that their types are assignable
            const res = tyTo.fs.reduce((is_true, toF) => {
                const fromF = tyFrom.fs.find(fromF => fromF.id === toF.id);
                if (fromF === undefined) {return false;}
                return is_true && (typeAssignable(toF.typ, fromF.typ));
            }
            , true)
            return res;
        }
    }
    if (tyTo instanceof ST.ByStrXTyp && tyFrom instanceof ST.AddressType) {
        if (tyTo.i === 20) {
            //Any address is assignable to ByStr20.
            return true;
        }
    }
    if (tyTo instanceof ST.MapType && tyFrom instanceof ST.MapType) {
        return typeAssignable(tyTo.t1, tyFrom.t1)
            && typeAssignable(tyTo.t2, tyFrom.t2);
    }
    if (tyTo instanceof ST.FunType && tyFrom instanceof ST.FunType) {
        //Contravariant in argument type!
        return typeAssignable(tyFrom.t1, tyTo.t1)
            && typeAssignable(tyTo.t2, tyFrom.t2);
    }
    if (tyTo instanceof ST.ADT && tyFrom instanceof ST.ADT) {
        //Assume ADT args order is always in covariant positions (the same)
        const eqName = tyTo.name === tyFrom.name;
        const eqArgs = tyTo.t.reduce((is_true, tTo, index) =>
            is_true && (typeAssignable(tTo, tyFrom.t[index]))
        , true);
        return eqName && eqArgs;
    }
    if (tyTo instanceof ST.PolyFun && tyFrom instanceof ST.PolyFun) {
        return typeEqual(new ST.TypeVar(tyTo.name), new ST.TypeVar(tyFrom.name))
            && typeAssignable(tyTo.t, tyFrom.t);
    }
    //Else we have PrimTypes, Unit, and TypeVar
    return typeEqual(tyFrom, tyTo);
}


//Check that a function type applies for a given arity n
//to a list of argument types. Returns result type or Error().
export function functionTypeApplies(fty, actualsty) {
    if (fty instanceof ST.FunType) {
        if (fty.t1 instanceof ST.Unit && actualsty.length === 0) {
            return fty.t2;
        }
        if (actualsty.length > 0) {
            const assignable = typeAssignable(fty.t1, actualsty[0]);
            if (assignable) {
                return functionTypeApplies(fty.t2, actualsty.slice(1, actualsty.length));
            } else {
                console.log(fty.t1);
                console.log(actualsty[0]);
                return setError(new Error("functionTypeApplies: Argument type is not assignable to function parameter."));
            }
        }
    }
    if (isError()) { return; }
    if (fty instanceof ScillaType && actualsty.length === 0) {
        return fty;
    }
    console.log(fty);
    console.log(actualsty);
    setError(new Error("Ill-typed function application."));
    return;;
}

//Access the type of a field in an address type
export function addressFieldType(fname, addr_ty) {
    const preKnownType = fname === "_balance" 
                        ? new ST.Uint128()
                        : fname === "_codehash" 
                        ? new ST.ByStrXTyp(32)
                        : undefined;
    if (addr_ty instanceof ST.AnyAddr && fname === "_balance") {
        return new ST.Uint128();
    }
    if (preKnownType !== undefined && 
        (addr_ty instanceof ST.LibAddr || addr_ty instanceof ST.CodeAddr 
        || addr_ty instanceof ST.ContrAddr)) {
        return preKnownType;
    }
    if (addr_ty instanceof ST.ContrAddr) {
        const res = addr_ty.fs.find(f => f.id === fname);
        if (res !== undefined) { 
            return res.typ;
        } else {
            setError(new Error("addressFieldType: Field" + fname + "is not declared."))
            return;
        }
    }
}

//Type check multiple keys indexing into a map type
export function typeMapAccess(m, kl) {
    if (kl.length === 0) { return m; }
    if (m instanceof ST.MapType) {
        const check = typeAssignable(m.t1, kl[0]);
        if (!check) {
            setError(new Error("typeMapAccess: Key type is not assignable to its map."));
            return;
        }
        return typeMapAccess(m.t2, kl.slice(1));
    }
    if (kl.length > 0) {
        setError("typeMapAccess: Cannot index into key.")
        return;
    }
}


//Depending on the binder clause, we update the environment and run
//typechecking on the respective expressions
export function updateTenvOfPattern(pat, xty, tenv, ADTDict) {
    if (isError()) { return; }
    if (pat instanceof SS.Pattern.WildCard) {
        const tenv_ = _.cloneDeep(tenv); 
        return tenv_;
    }
    if (pat instanceof SS.Pattern.Binder) {
        const tenv_ = _.cloneDeep(tenv);
        setTenv(tenv_, pat.x, xty);
        return tenv_;
    }
    if (pat instanceof SS.Pattern.ConstructorPat) {
        //1. Find the constructor by name and its respective ADT
        const constr = ADTDict.ConstrDict[pat.c][0];  
        const adt = ADTDict.ConstrDict[pat.c][1]; 

        //2. Extract args that it needs. Check length vs. arity
        if (constr.arity !== pat.ps.length) {
            return setError(new Error("typeExpr: Constructor Type Arguments Pattern arity mismatch."));
        }

        //3. Find the actual types and run with updated tenv
        //Since it's mapped to a contructor, its type is definitely ADT
        if (!(xty instanceof ST.ADT)) {
            return setError(new Error("typeExpr: Constructor Pattern is not of type ADT"));
        }

        //4. xty is the ADT type - includes any application to tparams of a adt
        //   adt.map[pat.c] (call tyToInit) would give us what a constructor's argument types are
        //   we initialise tyToInit with info in xty
        //   then update respective argument type of construtor
        if (constr.arity === 0) {
            const tenv_ = _.cloneDeep(tenv); 
            return tenv_; //No more bindings
        } else {
            const tenv_ = _.cloneDeep(tenv);
            const tyToInit = adt.tmap[pat.c];
            const fresh = refereshADTTVars(tyToInit, adt.tparams, tenv_); //No shadowing
            const ADTParams = fresh.newap;
            const cparams = fresh.newcp;
            const appliedCParams = cparams.map(cparam => {
                return ADTParams.reduce((stype, str_tvar, index) => {
                    setTenv(tenv_, str_tvar, xty.t[index]);
                    return ST.substTypeinType(str_tvar, xty.t[index], stype);
                }, cparam);
            });
            if (isError()) {return;}
            return pat.ps.reduce((tenv_, pat_, index) => updateTenvOfPattern(pat_, appliedCParams[index], tenv_, ADTDict), tenv_);
        }
    }
}