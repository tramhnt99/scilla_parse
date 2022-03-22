/**
 * Scilla Static Type Checker
 */
import * as SS from './syntax.js';
import { ScillaLiterals } from './literals.js';
import { Error } from './syntax.js';
import * as ST from './types.js';


const SL = new ScillaLiterals();

export default class ScillaTypeChecker{
    constructor(){
        this.error_msg = "";
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
    }

    typeEqual(ty1, ty2) {
        //TODO
        return true;
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

    functionTypeApplies() {
        //TODO
    }

    //Typing Expressions
    //Returns the expression paired with type
    //[ScillaExpr, ScillaType]
    //If fails, returns undefined - with error message
    //found in this.error
    /**
     * 
     * @param {ScillaExpr} e 
     * @param {(String * SType){}} tenv
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
            const isWF = isWellFormed(e.ty, tenv);
            if (isWF instanceof Error) {
                return isWF;
            }
            //Extend environment to include the argument type
            const tenv_ = Object.assign({}, tenv); 
            tenv_[e.id] = e.ty;
            //Recursively run function with the updated environment
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
            const resType = this.functionTypeApplies(ty, actualsTy);
            if (resType instanceof Error) {
                return resType;
            }
            const resTypeWF = isWellFormed(resType, tenv);
            if (resType instanceof Error) {
                return resType;
            }
            return this.makeRes(e, resType);
        }
    }
}

