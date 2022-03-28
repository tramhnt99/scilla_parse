import ScillaType, * as ST from './types.js';
import {setError, getError, isError} from './general.js';
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
            ) { //workaround
            tenv[x] = v;
            return tenv;
        } else {
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



//Checks whether the type is well-formed
//given an environment
export function isWellFormedType(ty, tenv, ADTDict) {
    if (isError()) { return; }

    function isWellFormedType_(t_, tb) {
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
            return isWellFormedType_(t_.t, tb.push(t_.name));
        }
        if (t_ instanceof ST.ContrAddr) {
            const res = t_.tlist.reduce((is_true, t) => is_true && isWellFormedType_(t.typ, tb));
            return res;
        }
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
        if (tyTo instanceof SS.ContrAddr && tyFrom instanceof SS.ContrAddr) {
            //Check all fields from tyTo.fs are a subset of tyFrom.fs
            //and that their types are assignable
            const res = tyTo.fs.reduce((is_true, toF) => {
                const fromF = toFrom.fs.find(fromF => fromF.id === toF.id);
                if (fromF === undefined) {return false;}
                return is_true && (typeAssignable(toF.typ, fromF.typ));
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
                return setError(new Error("functionTypeApplies: Argument type is not assignable to function parameter."));
            }
        }
    }
    if (isError()) { return; }
    if (fty instanceof ScillaType && actualsty.length === 0) {
        return fty;
    }
    setError(new Error("Ill-typed function application."));
    return;;
}
