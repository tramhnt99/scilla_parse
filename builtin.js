/**
 * Type information on Builtin Functions
 */
import * as ST from './types.js';

/** 
 * Polymorphic Builtins
*/
export class BI_eq {
    constructor() {
        this.arity = 2;
        this.types = [ST.String, ST.BNum, ST.Int, ST.Uint, ST.ByStrTyp, ST.ByStrTyp];
        this.funTyp = 
            new ST.PolyFun("'A", 
                new ST.FunType(new ST.TypeVar("'A"), 
                    new ST.FunType(new ST.TypeVar("'A"), new ST.Bool())));
    }
}

export class BI_concat {
    constructor() {
        this.arity = 2;
        this.types = [ST.String, ST.ByStrTyp, ST.ByStrXTyp]
        this.funTyp = new ST.PolyFun("'A", 
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.Bool())));
    }
}

export class BI_substr {
    constructor() {
        this.arity = 3;
        this.types = [ST.String, ST.ByStrTyp, ST.ByStrXTyp]
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
        this.types = [ST.String];
        this.funTyp = new ST.FunType(new ST.String(), new ST.Uint32());
    }
}

export class BI_to_string {
    constructor() {
        this.arity = 1;
        this.types = [ST.String];
        this.funTyp = new ST.PolyFun("'A", new ST.FunType(new ST.TypeVar("'A"), new ST.String));
    }
}

export class BI_to_ascii{
    constructor() {
        this.arity = 1;
        this.types = [ST.String];
        this.funTyp = new ST.PolyFun("'A", new ST.FunType(new ST.TypeVar("'A"), new ST.String));
    }
}

export class BI_strrev {
    constructor() {
        this.arity = 1;
        this.types = [ST.String];
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
        this.types = [ST.MapType];
        this.funTyp = 
        new ST.PolyFun("'K", 
            new ST.PolyFun("'V",
                new ST.FunType(new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V")),
                    new ST.FunType(new ST.TypeVar("'K"), new ST.Bool))));
    }
}

export class BI_put {
    constructor() {
        this.arity = 2;
        this.types = [ST.MapType];
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
        this.types = [ST.MapType];
        this.funTyp = 
        new ST.PolyFun("'K", 
            new ST.PolyFun("'V",
                new ST.FunType(new ST.MapType(new ST.TypeVar("'K"), new ST.TypeVar("'V")),
                    new ST.FunType(new ST.TypeVar("'K"), new ST.ADT("Option", [new TypeVar("'V")])))));
    }
}

export class BI_remove {
    constructor() {
        this.arity = 2;
        this.types = [ST.MapType];
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
        this.types = [ST.MapType];
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
        this.types = [ST.MapType];
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
        this.types = [ST.Int, ST.Uint];
        this.funTyp =
        new ST.PolyFun("'A", 
        new ST.FunType(new ST.TypeVar("'A"), 
            new ST.FunType(new ST.TypeVar("'A"), new ST.Bool)));
    }
}

export class BI_add {
    constructor() {
        this.arity = 2;
        this.types = [ST.Int, ST.Uint];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_sub {
    constructor() {
        this.arity = 2;
        this.types = [ST.Int, ST.Uint];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_mul {
    constructor() {
        this.arity = 2;
        this.types = [ST.Int, ST.Uint];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_div {
    constructor() {
        this.arity = 2;
        this.types = [ST.Int, ST.Uint];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_rem {
    constructor() {
        this.arity = 2;
        this.types = [ST.Int, ST.Uint];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_pow {
    constructor() {
        this.arity = 2;
        this.types = [ST.Int, ST.Uint];
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.Uint32(), new ST.TypeVar("'A"))));
    }
}

export class BI_isqrt {
    constructor() {
        this.arity = 2;
        this.types = [ST.Uint];
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