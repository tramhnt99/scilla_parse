/**
 * Type information on Builtin Functions
 */
import * as ST from './types.js';
import {Error} from './syntax.js';

/**
 * Each BI class includes the arity of the builtin function.
 * The types of arguments it would accept.
 * It's function type.
 */

/** 
 * Polymorphic Builtins
*/
export class BI_eq {
    constructor() {
        this.arity = 2;
        this.types = [new ST.String(), new ST.BNum(), new ST.Int(), 
                        new ST.Uint(), new ST.ByStrTyp(), new ST.ByStrTyp()];
        this.funTyp = 
            new ST.PolyFun("'A", 
                new ST.FunType(new ST.TypeVar("'A"), 
                    new ST.FunType(new ST.TypeVar("'A"), new ST.ADT("Bool", []))));
    }
}

export class BI_concat {
    constructor() {
        this.arity = 2;
        this.types = [new ST.String(), new ST.ByStrTyp(), new ST.ByStrXTyp()]
        this.funTyp = new ST.PolyFun("'A", 
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.ADT("Bool", []))));
    }
}

export class BI_substr {
    constructor() {
        this.arity = 3;
        this.types = [new ST.String(), new ST.ByStrTyp(), new ST.ByStrXTyp()]
        this.funTyp = 
            new ST.PolyFun("'A", 
                new ST.FunType(new ST.TypeVar("'A"), 
                    new ST.FunType(new ST.Uint32(), 
                        new ST.FunType(new ST.Uint32(), new ST.TypeVar("'A")))));
    }
}

export class BI_strlen{
    constructor() {
        this.arity = 1;
        this.types = [new ST.String()];
        this.funTyp = new ST.FunType(new ST.String(), new ST.Uint32());
    }
}

export class BI_to_string {
    constructor() {
        this.arity = 1;
        this.types = [new ST.String()];
        this.funTyp = new ST.PolyFun("'A", new ST.FunType(new ST.TypeVar("'A"), new ST.String));
    }
}

export class BI_to_ascii{
    constructor() {
        this.arity = 1;
        this.types = [new ST.String()];
        this.funTyp = new ST.PolyFun("'A", new ST.FunType(new ST.TypeVar("'A"), new ST.String));
    }
}

export class BI_strrev {
    constructor() {
        this.arity = 1;
        this.types = [new ST.String()];
        this.funTyp = new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))
    }
}

export class BI_to_bystrx {} //TODO

/** 
 * Block Numbers (skip)
*/

/** 
 * CryptoBuiltins (skip)
*/

/** 
 * MapBuiltins
*/
export class BI_contains {
    constructor() {
        this.arity = 2;
        this.types = [new ST.MapType()];
        this.funTyp = 
        new ST.PolyFun("'K", 
            new ST.PolyFun("'V",
                new ST.FunType(new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V")),
                    new ST.FunType(new ST.TypeVar("'K"), new ST.ADT("Bool", [])))));
    }
}

export class BI_put {
    constructor() {
        this.arity = 3;
        this.types = [new ST.MapType()];
        this.funTyp = 
        new ST.PolyFun("'K", new ST.PolyFun("'V",
                new ST.FunType(new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V")),
                    new ST.FunType(new ST.TypeVar("'K"), 
                        new ST.FunType(new ST.TypeVar("'V"), new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V")))))));
    }
}

export class BI_get {
    constructor() {
        this.arity = 2;
        this.types = [new ST.MapType()];
        this.funTyp = 
        new ST.PolyFun("'K", 
            new ST.PolyFun("'V",
                new ST.FunType(new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V")),
                    new ST.FunType(new ST.TypeVar("'K"), new ST.ADT("Option", [new ST.TypeVar("'V")])))));
    }
}

export class BI_remove {
    constructor() {
        this.arity = 2;
        this.types = [new ST.MapType()];
        this.funTyp =
        new ST.PolyFun("'K", 
            new ST.PolyFun("'V",
                new ST.FunType(new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V")),
                    new ST.FunType(new ST.TypeVar("'K"), new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V"))))));
    }
}

export class BI_to_list {
    constructor() {
        this.arity = 1;
        this.types = [new ST.MapType()];
        this.funTyp =
        new ST.PolyFun("'K",
            new ST.PolyFun("'V",
                new ST.FunType(new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V")),
                    new ST.ADT("List", [new ST.ADT("Pair", [new ST.TypeVar("'K"), new ST.TypeVar("'V")])]))));
    }
}

export class BI_size {
    constructor() {
        this.arity = 1;
        this.types = [new ST.MapType()];
        this.funTyp = 
        new ST.PolyFun("'K",
            new ST.PolyFun("'V",
                new ST.FunType(new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V")),
                    new ST.Uint32)));
    }
}

/**
 * Integers
 */
export class BI_lt {
    constructor() {
        this.arity = 2;
        this.types = [new ST.Int(),new ST.Uint()];
        this.funTyp =
        new ST.PolyFun("'A", 
        new ST.FunType(new ST.TypeVar("'A"), 
            new ST.FunType(new ST.TypeVar("'A"), new ST.ADT("Bool", []))));
    }
}

export class BI_add {
    constructor() {
        this.arity = 2;
        this.types = [new ST.Int(), new ST.Uint()];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_sub {
    constructor() {
        this.arity = 2;
        this.types = [new ST.Int(), new ST.Uint()];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_mul {
    constructor() {
        this.arity = 2;
        this.types = [new ST.Int(), new ST.Uint()];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_div {
    constructor() {
        this.arity = 2;
        this.types = [new ST.Int(), new ST.Uint()];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_rem {
    constructor() {
        this.arity = 2;
        this.types = [new ST.Int(), new ST.Uint()];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_pow {
    constructor() {
        this.arity = 2;
        this.types = [new ST.Int(), new ST.Uint()];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.Uint32(), new ST.TypeVar("'A"))));
    }
}

export class BI_isqrt {
    constructor() {
        this.arity = 2;
        this.types = [new ST.Uint()];
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A")));
    }
}

/**
 * Signed integers specific builtins (skip)
 */

/** 
 * Unsigned integers specific builtins (skip)
*/


export const BuiltInDict = {
    "eq": new BI_eq(),
    "concat": new BI_concat(),
    "susbtr": new BI_substr(),
    "strlen": new BI_strlen(),
    "to_string": new BI_to_string(),
    "to_ascii": new BI_to_ascii(),
    "strrev": new BI_strrev(),
    "to_bystrx": new BI_to_bystrx(),
    "contains": new BI_contains(),
    "put": new BI_put(),
    "get": new BI_get(),
    "remove": new BI_remove(),
    "to_list": new BI_to_list(),
    "size": new BI_size(),
    "lt": new BI_lt(),
    "add": new BI_add(),
    "sub": new BI_sub(),
    "mul": new BI_mul(),
    "lt": new BI_lt(),
    "div": new BI_div(),
    "rem": new BI_rem(),
    "pow": new BI_pow(),
    "isqrt": new BI_isqrt()
}

/**
 * 
 * @param {String} fname - Builtin function name
 * @param {SType[]} targs - Types of arguments
 * Returns: FunType or an Error
 */
//Note: Function also type checks - making sure targs are valid
export function resolveBIFunType(fname, targs) {
    function checkBasics(info) {
        if (targs.length !== info.arity) {
            return new Error("resolveBIFunType: Wrong arity for function.");
        }
        //Update: We only look at the first targ and if it's allowed
        //Eg. contains allows only type Map - but we would also have a type like Int32 of what the map contains.
        if (info.types.find(ty => ty.constructor === targs[0].constructor) === undefined) {
            return new Error("resolveBIFunType: Type of arguments are not allowed to this function.");
        } else {
            return true;
        }
    }

    if (fname === "eq" || fname === "concat" || fname === "substr" ||
        fname === "to_string" || fname === "to_ascii" || fname === "lt" ||
        fname === "add" || fname === "sub" || fname === "mul" || fname === "div" ||
        fname === "rem" || fname === "pow" || fname === "isqrt") 
    {
        const info = this.BuiltInDict[fname];
        const basicsOk = checkBasics(info);
        if (basicsOk instanceof Error) {
            return basicsOk;
        }
        const fType = info.funTyp;
        return ST.substTypeinType(fType.name, targs[0], fType.t);
    }

    //Map builtins
    if (fname === "contains" || fname === "put" || fname === "get" ||
        fname === "remove" || fname === "to_list" || fname === "size")
    {
        const info = this.BuiltInDict[fname];
        const basicsOk = checkBasics(info);
        if (basicsOk instanceof Error) {
            return basicsOk;
        }
        const fType = info.funTyp;
        const mapArg = targs[0]; //Map argument is always the first
        //Substitute t1 (key type)
        const fType_ = ST.substTypeinType(fType.name, mapArg.t1, fType.t);
        //Substitute t2 (value type)
        const fType__ = ST.substTypeinType(fType_.name, mapArg.t2, fType_.t);
        return fType__;
    }
}