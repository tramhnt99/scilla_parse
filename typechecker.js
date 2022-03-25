/**
 * Scilla Static Type Checker
 */
import * as SS from './syntax.js';
import { ScillaLiterals } from './literals.js';
import { Error } from './syntax.js';
import ScillaType, * as ST from './types.js';
import TranslateVisitor from './translate.js';
import _ from 'lodash';
import * as BI from './builtin.js';
import * as DT from './datatypes.js';


const SL = new ScillaLiterals();

export default class ScillaTypeChecker{
    constructor(){
        this.error_msg = "";
        this.ADTDict = new DT.DataTypeDict();
    }

    getType(v) {
        return this.tyEnv[v];
    }

    updateEnv(v, ty) {
        this.tyEnv[v] = ty;
    }

    //Results of all functions will be an object containing the expressions
    //and its type (unless it was an Error)
    makeRes(e, ty) {
        return {e: e, ty: ty};
    }

    getExpr(res) {
        return res.e;
    }

    getTy(res) {
        return res.ty;
    }

    //Checks whether the type is well-formed
    //given an environment
    isWellFormedType(ty, tenv) {
        //TODO
        return true;
    }

    //Checking type equality
    typeEqual(ty1, ty2) {
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
                is_true && (this.typeEqual(t1, ty2.t[index]))
            , true);
            return eqNames && eqArgLength && eqArgs;
        }
        if ((ty1 instanceof ST.MapType && ty2 instanceof ST.MapType) 
            || (ty1 instanceof ST.FunType && ty2 instanceof ST.FunType)) {
            return this.typeEqual(ty1.t1, ty2.t1) && this.typeEqual(ty1.t2, ty2.t2);
        }
        if (ty1 instanceof ST.PolyFun && ty2 instanceof ST.PolyFun) {
            return (ty1.name === ty2.name && this.typeEqual(ty1.t, ty2.t));
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
                return is_true && this.typeEqual(t1.typ, t2.typ);
            }, true)
        }
        return false;
    }

    //Checks whether one type is assignable to another
    typeAssignable(tyTo, tyFrom) {
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
            if (tyTo instanceof SS.ContrAddr && tyFrom instanceof SS.ContrAddr) {
                //Check all fields from tyTo.fs are a subset of tyFrom.fs
                //and that their types are assignable
                const res = tyTo.fs.reduce((is_true, toF) => {
                    const fromF = toFrom.fs.find(fromF => fromF.id === toF.id);
                    if (fromF === undefined) {return false;}
                    return is_true && (this.typeAssignable(toF.typ, fromF.typ));
                }
                , true)
            }
        }
        if (tyTo instanceof ST.ByStrXTyp && tyFrom instanceof ST.AddressType) {
            if (tyFrom.i === 20) {
                //Any address is assignable to ByStr20.
                return true;
            }
        }
        if (tyTo instanceof ST.MapType && tyFrom instanceof ST.MapType) {
            return this.typeAssignable(tyTo.t1, tyFrom.t1)
                && this.typeAssignable(tyTo.t2, tyFrom.t2);
        }
        if (tyTo instanceof ST.FunType && tyFrom instanceof ST.FunType) {
            //Contravariant in argument type!
            return this.typeAssignable(tyFrom.t1, tyTo.t1)
                && this.typeAssignable(tyTo.t2, tyFrom.t2);
        }
        if (tyTo instanceof ST.ADT && tyFrom instanceof ST.ADT) {
            //Assume ADT args order is always in covariant positions (the same)
            const eqName = tyTo.name === tyFrom.name;
            const eqArgs = tyTo.tlist.reduce((is_true, tTo, index) =>
                is_true && (this.typeAssignable(tTo, tyFrom.tlist[index]))
            , true);
            return eqName && eqArgs;
        }
        if (tyTo instanceof ST.PolyFun && tyFrom instanceof ST.PolyFun) {
            return this.typeEqual(ST.TypeVar(tyTo.name), ST.TypeVar(tyFrom.name))
                && this.typeAssignable(tyTo.t, tyFrom.t);
        }
        //Else we have PrimTypes, Unit, and TypeVar
        return this.typeEqual(tyFrom, tyTo);
    }

    //Check that a function type applies for a given arity n
    //to a list of argument types. Returns result type or Error().
    functionTypeApplies(fty, actualsty) {
        if (fty instanceof ST.FunType) {
            if (fty.t1 instanceof ST.Unit && actualsty.length === 0) {
                return fty.t2;
            }
            if (actualsty.length > 0) {
                const assignable = this.typeAssignable(fty.t1, actualsty[0]);
                if (assignable) {
                    return this.functionTypeApplies(fty.t2, actualsty.slice(1, actualsty.length));
                } else {
                    return new Error("functionTypeApplies: Argument type is not assignable to function parameter.");
                }
            }
        }
        if (fty instanceof ScillaType && actualsty.length === 0) {
            return fty;
        }
        return new Error("Ill-typed function application.");
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
        if (e instanceof SS.Literal) {
            const res = SL.literalType(e);
            if (res instanceof Error) {
                return res;
            } else {
                return this.makeRes(e, res);
            }
        }
        if (e instanceof SS.Var) {
            const ty = tenv[e.s];
            if (ty === undefined) {
                return new Error("typeExpr: Variable not found in Type Environment");
            }
            return this.makeRes(e, ty);
        }
        if (e instanceof SS.Fun) {
            const isWF = this.isWellFormedType(e.ty, tenv);
            if (isWF instanceof Error) {
                return isWF;
            }
            //Extend environment to include the argument type
            const tenv_ = _.cloneDeep(tenv); 
            tenv_[e.id] = e.ty;
            //Recursively run function with the updated environment
            //TODO: make a deep copy with lodash
            const typedBody = this.typeExpr(e.e, tenv_);  
            if (typedBody instanceof Error) {
                return typedBody;
            }
            return this.makeRes(e, new ST.FunType(e.ty, this.getTy(typedBody)));
        }

        if (e instanceof SS.App) {
            //Function Type - TODO: check WF?
            const fty = tenv[e.f_var];
            if (!fty) {return new Error("typeExpr: Function type is not bound");}
            //Arguments Type - undefined arg types are checked in functionTypeApplies
            const actualsTy = e.args.map(arg => tenv[arg]);
            const resType = this.functionTypeApplies(fty, actualsTy);
            if (resType instanceof Error) {
                return resType;
            }
            const resTypeWF = this.isWellFormedType(resType, tenv);
            if (resTypeWF instanceof Error) {
                return resTypeWF;
            }

            return this.makeRes(e, resType);
        }

        if (e instanceof SS.Let) {
            const typedLhs = this.typeExpr(e.lhs, tenv);
            if (typedLhs instanceof Error) { return typedLhs; }
            const actualTyp = 
                e.ty === null
                ? this.getTy(typedLhs)
                : this.typeAssignable(e.ty, this.getTy(typedLhs))
                ? e.ty  
                : new Error("typeExpr: Typing in Let is not assignable ");
            if (actualTyp instanceof Error) { return actualTyp; }
            const tenv_ = _.cloneDeep(tenv); 
            tenv_[e.x] = actualTyp;
            const typedRhs = this.typeExpr(e.rhs, tenv_);
            if (typedRhs instanceof Error) { return typedRhs; }
            return this.makeRes(e, this.getTy(typedRhs));
        }

        if (e instanceof SS.Builtin) {
            const tyArgsWF = e.targs.reduce((is_true, targ) => 
                is_true && this.isWellFormedType(targ, tenv), true);
            if (!tyArgsWF) {
                return new Error("typeExpr: Builtin Type Arguments are not well formed");
            }
            //TODO: Fix resolving type args
            //First, type application doesn't happen, so we need to know which functions
            //require typeApp - and how to handle them.
            //functionTypeApplies only typecheckes from FunType on

            //Resolve the actuals and get the type of arguments
            const resolvedTypArgs = e.targs.map(targ => {
                if (targ instanceof ST.TypeVar) {
                    return tenv[targ.name];
                } else {
                    return targ;
                }
            });
            //Get Function Type
            const func = BI.BuiltInDict[e.b];
            if (func === undefined) {
                //We do not handle type check this specific builtin
                return new ScillaType();
            }
            const resType = this.functionTypeApplies(func.funTyp, resolvedTypArgs);
            if (resType instanceof Error) {
                return resType;
            }
            const resTypeWF = this.isWellFormedType(resType, tenv);
            if (resTypeWF instanceof Error) {
                return resTypeWF;
            }

            return this.makeRes(e, resType);
        }

        if (e instanceof SS.DataConstructor) {
            const tyArgsWF = e.targs.reduce((is_true, targ) =>
                is_true && this.isWellFormedType(targ, tenv), true);
            if (!tyArgsWF) {
                return new Error("typeExpr: DataConstructor type arguments are not well formed");
            }
            const constr = this.ADTDict.ConstrDict[e.c];
            const noOfArg = e.args.length;
            if (constr.arity !== noOfArg) {
                return new Error("typeExpr: Constructor arity mismatch");
            }

        }
    }
}

