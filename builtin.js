/**
 * Type information on Builtin Functions
 */
import * as ST from './types.js';
import {Error, Fun} from './syntax.js';
import * as ER from './general.js';
import { Bystr, BystrX } from './literals.js';
import { typeAssignable } from './typecheckerUtil.js';

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
        this.types = [new ST.String(), new ST.BNum()].concat(ST.allInts).concat(ST.allUints).concat(ST.allBystr).concat(ST.allAddr);
        this.funTyp = 
            new ST.PolyFun("'A", 
                new ST.FunType(new ST.TypeVar("'A"), 
                    new ST.FunType(new ST.TypeVar("'A"), new ST.ADT("Bool", []))));
    }
}

export class BI_concat {
    constructor() {
        this.arity = 2;
        this.types = [new ST.String()].concat(ST.allBystr).concat(ST.allAddr);
        this.funTyp = new ST.PolyFun("'A", 
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_substr {
    constructor() {
        this.arity = 3;
        this.types = [new ST.String()].concat(ST.allBystr).concat(ST.allAddr);
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
        this.types = [new ST.String()].concat(ST.allBystr).concat(ST.allAddr);
        this.funTyp = new ST.PolyFun("'A", new ST.FunType(new ST.TypeVar("'A"), new ST.Uint32()));
    }
}

export class BI_to_string {
    constructor() {
        this.arity = 1;
        this.types = [new ST.String()].concat(ST.allBystr).concat(ST.allAddr).concat(ST.allInts).concat(ST.allUints);
        this.funTyp = new ST.PolyFun("'A", new ST.FunType(new ST.TypeVar("'A"), new ST.String));
    }
}

export class BI_to_ascii{
    constructor() {
        this.arity = 1;
        this.types = [new ST.String()].concat(ST.allBystr).concat(ST.allAddr);
        this.funTyp = new ST.PolyFun("'A", new ST.FunType(new ST.TypeVar("'A"), new ST.String));
    }
}

export class BI_strrev {
    constructor() {
        this.arity = 1;
        this.types = [new ST.String()].concat(ST.allBystr).concat(ST.allAddr);
        this.funTyp = new ST.PolyFun("'A", new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A")));
    }
}

export class BI_to_bystrx {
    constructor(i) {
        this.arity = 1;
        this.types = ST.allBystr.concat(ST.allUints);
        this.funTyp = new ST.PolyFun("'A", new ST.FunType(new ST.TypeVar("'A"), new ST.ADT("Option", new ST.ByStrXTyp(i))));
    }
}

export class BI_to_bystr {
    constructor() {
        this.arity = 1;
        this.types = [new ST.ByStrXTyp(20)];
        this.funTyp = new ST.FunType(new ST.ByStrXTyp(20), new ST.ByStrTyp());
    }
}

/** 
 * Block Numbers (skip most)
*/
export class BI_blt {
    constructor() {
        this.arity = 2;
        this.types = [ST.BNum];
        this.funTyp = new ST.FunType(new ST.BNum, new ST.FunType(new ST.BNum, new ST.ADT("Bool", [])));
    }
}

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
        this.types = ST.allInts.concat(ST.allUints);
        this.funTyp =
        new ST.PolyFun("'A", 
        new ST.FunType(new ST.TypeVar("'A"), 
            new ST.FunType(new ST.TypeVar("'A"), new ST.ADT("Bool", []))));
    }
}

export class BI_add {
    constructor() {
        this.arity = 2;
        this.types = ST.allInts.concat(ST.allUints);
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_sub {
    constructor() {
        this.arity = 2;
        this.types = ST.allInts.concat(ST.allUints);
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_mul {
    constructor() {
        this.arity = 2;
        this.types = ST.allInts.concat(ST.allUints);
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_div {
    constructor() {
        this.arity = 2;
        this.types = ST.allInts.concat(ST.allUints);
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_rem {
    constructor() {
        this.arity = 2;
        this.types = ST.allInts.concat(ST.allUints);
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'A"))));
    }
}

export class BI_pow {
    constructor() {
        this.arity = 2;
        this.types = ST.allInts.concat(ST.allUints);
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), 
                new ST.FunType(new ST.Uint32(), new ST.TypeVar("'A"))));
    }
}

export class BI_isqrt {
    constructor() {
        this.arity = 1;
        this.types = ST.allUints;
        this.funTyp =
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
export class BI_to_uint256 {
    constructor() {
        this.arity = 1;
        this.types = ST.allUints.concat(ST.allBystr.concat([new ST.AnyAddr()]));
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), new ST.Uint256()));
    }
}

export class BI_to_uint32 {
    constructor() {
        this.arity = 1;
        this.types = ST.allUints.concat(ST.allBystr.concat([new ST.AnyAddr()])).concat(ST.allInts);
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), new ST.ADT("Option", [new ST.Uint32()])));
    }
}



export class BI_badd {
    constructor() {
        this.arity = 2;
        this.types =  [new ST.BNum()].concat(ST.allUints);
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.PolyFun("'B", 
            new ST.FunType(new ST.TypeVar("'A"), new ST.FunType(new ST.TypeVar("'B"), new ST.BNum()))));
    }
}

export class BI_sha256hash {
    constructor() {
        this.arity = 1;
        this.types = [new ST.ADT(), new ST.String].concat(ST.allBystr.concat(ST.allAddr)).concat(ST.allInts);
        this.funTyp =
        new ST.PolyFun("'A",
            new ST.FunType(new ST.TypeVar("'A"), new ST.ByStrXTyp(32))
        );
    }
}

/**
 * Recursive Functions
 */
export class BI_list_foldl {
    constructor() {
        this.arity = 3;
        this.types = [new ST.String()].concat(ST.allUints.concat(ST.allInts.concat(ST.allAddr.concat(ST.allBystr))))
        this.funTyp = 
        new ST.PolyFun("'A", 
        new ST.PolyFun("'B",
            new ST.FunType(
                new ST.FunType(new ST.TypeVar("'B"), new ST.FunType(new ST.TypeVar("'A"), new ST.TypeVar("'B"))),
                new ST.FunType(new ST.TypeVar("'B"), 
                new ST.FunType(new ST.ADT("List", [new ST.TypeVar("'A")]), 
                new ST.TypeVar("'B"))))));
        //('B -> 'A -> 'B) -> 'B -> (List 'A) -> 'B
    }
}

export class BI_list_foldr {
    constructor() {
        this.arity = 3;
        this.types = [new ST.String()].concat(ST.allUints.concat(ST.allInts.concat(ST.allAddr.concat(ST.allBystr))))
        this.funTyp = 
        new ST.PolyFun("'A",
        new ST.PolyFun("'B",
            new ST.FunType(
                new ST.FunType(new ST.TypeVar("'A"), new ST.FunType(new ST.TypeVar("'B"), new ST.TypeVar("'B"))),
                new ST.FunType(new ST.TypeVar("'B"), 
                new ST.FunType(new ST.ADT("List", [new ST.TypeVar("'A")]), 
                new ST.TypeVar("'B"))))));
        //('A -> 'B -> 'B) -> 'B -> (List 'A) -> 'B
    }
}

export class BI_list_foldk {
    constructor() {
        this.arity = 3;
        this.types = [new ST.String()].concat(ST.allUints.concat(ST.allInts.concat(ST.allAddr.concat(ST.allBystr))))
        this.funTyp = 
        new ST.PolyFun("'A", 
        new ST.PolyFun("'B",
            new ST.FunType(
                //('B -> 'A -> ('B -> 'B) -> 'B)      
                new ST.FunType(
                    new ST.TypeVar("'B"), 
                    new ST.FunType(new ST.TypeVar("'A"), 
                    new ST.FunType(new ST.FunType(new ST.TypeVar("'B"), new ST.TypeVar("'B")), 
                    new ST.TypeVar("'B")))), 
                new ST.FunType(new ST.TypeVar("'B"), new ST.FunType(new ST.ADT("List", [new ST.TypeVar("'A")]), new ST.TypeVar("'B")))
                
            )));
        //('B -> 'A -> ('B -> 'B) -> 'B) -> 'B -> (List 'A) -> 'B
    }
}

export class BI_nat_fold {
    constructor() {
        this.arity = 3;
        this.types = [new ST.String()].concat(ST.allUints.concat(ST.allInts.concat(ST.allAddr.concat(ST.allBystr))));
        this.funTyp = 
        new ST.PolyFun("'T",
        new ST.FunType(
            new ST.FunType(new ST.TypeVar("'T"), new ST.FunType(new ST.ADT("Nat", []), new ST.TypeVar("'T"))),
            new ST.FunType(new ST.TypeVar("'T"), 
                new ST.FunType(new ST.ADT("Nat", []), new ST.TypeVar("'T")))
        ));
        //('T -> Nat -> 'T) -> 'T -> Nat -> 'T

    }
}

export class BI_nat_foldk {
    constructor() {
        this.arity = 3;
        this.types = [new ST.String()].concat(ST.allUints.concat(ST.allInts.concat(ST.allAddr.concat(ST.allBystr))));
        this.funTyp = 
        new ST.PolyFun("'T",
            new ST.FunType(
                new ST.FunType(
                    new ST.TypeVar("'T"),
                    new ST.FunType(
                        new ST.ADT("Nat", []),
                        new ST.FunType(
                            new ST.FunType(new ST.TypeVar("'T"), new ST.TypeVar("'T")),
                            new ST.TypeVar("'T")
                        )
                    )
                ),
                new ST.FunType(
                    new ST.TypeVar("'T"), 
                    new ST.FunType(new ST.ADT("Nat", []), new ST.TypeVar("'T")))
                )
        );
        //('T -> Nat -> ('T -> 'T) -> 'T) -> 'T -> Nat -> 'T
    }
}

export class BI_to_nat{
    constructor() {
        this.arity = 1;
        this.types = [new ST.Uint32];
        this.funTyp = new ST.FunType(new ST.Uint32, new ST.ADT("Nat", []));
    }
}


export const BuiltInDict = {
    "eq": new BI_eq(),
    "concat": new BI_concat(),
    "substr": new BI_substr(),
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
    "isqrt": new BI_isqrt(),
    "blt": new BI_blt(),
    "list_foldl": new BI_list_foldl(),
    "list_foldr": new BI_list_foldr(),
    "list_foldk": new BI_list_foldk(),
    "nat_fold": new BI_nat_fold(),
    "to_nat": new BI_to_nat(),
    "to_bystr": new BI_to_bystr(),
    "to_uint256": new BI_to_uint256(),
    "to_uint32": new BI_to_uint32(),
    "badd": new BI_badd(),
    "nat_foldk": new BI_nat_foldk(),
    "sha256hash": new BI_sha256hash()
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
            return ER.setError(new Error("resolveBIFunType: Wrong arity for function."));
        }
        //Update: We only look at the first targ and if it's allowed
        //Eg. contains allows only type Map - but we would also have a type like Int32 of what the map contains.
        if (info.types.find(ty => ty.constructor === targs[0].constructor) === undefined) {
            console.log(fname);
            console.log(info.types);
            console.log(targs[0]);
            return ER.setError(new Error("resolveBIFunType: Type of arguments are not allowed to this function."));
        } else {
            return true;
        }
    }

    if (fname === "eq") {
        const info = BuiltInDict[fname];
        const basicsOk = checkBasics(info);
        if (ER.isError()) { return;};
        const fType = info.funTyp;

        //All address types are compared as bystr
        if (targs[0] instanceof ST.AddressType) {
            targs[0] = new ST.ByStrXTyp(20);
        }
        return ST.substTypeinType(fType.name, targs[0], fType.t);
    }

    if (fname === "badd") {
        const info = BuiltInDict[fname];
        const basicsOk = checkBasics(info);
        if (ER.isError()) { return; }
        const fType = info.funTyp;

        //Instantiate both 'A and 'B
        const ty1 = ST.substTypeinType(fType.name, targs[0], fType.t);
        const ty2 = ST.substTypeinType(ty1.name, targs[1], ty1.t);
        return ty2;
    }

    if (fname === "concat" || fname === "substr" ||
        fname === "to_string" || fname === "to_ascii" || fname === "lt" ||
        fname === "add" || fname === "sub" || fname === "mul" || fname === "div" ||
        fname === "rem" || fname === "pow" || fname === "isqrt" ||
        fname === "strlen" || fname === "strrev" || fname === "to_bystrx" || fname === "to_uint256" ||
        fname === "to_uint32" || fname === "sha256hash") 
    {
        const info = BuiltInDict[fname];
        const basicsOk = checkBasics(info);
        if (ER.isError()) { return;};
        const fType = info.funTyp;
        return ST.substTypeinType(fType.name, targs[0], fType.t);
    }

    //Map builtins
    if (fname === "contains" || fname === "put" || fname === "get" ||
        fname === "remove" || fname === "to_list" || fname === "size")
    {
        const info = BuiltInDict[fname];
        const basicsOk = checkBasics(info);
        if (ER.isError()) { return; };
        
        const fType = info.funTyp;
        const mapArg = targs[0]; //Map argument is always the first
        //Substitute t1 (key type)
        const fType_ = ST.substTypeinType(fType.name, mapArg.t1, fType.t);
        //Substitute t2 (value type)
        const fType__ = ST.substTypeinType(fType_.name, mapArg.t2, fType_.t);
        return fType__;
    }

    //Other builtins
    if (BuiltInDict[fname]) {
        return BuiltInDict[fname].funTyp;
    }
}


export function resolveBITargs(fname, targs) {
    if (fname === "eq") {
        //Arity is already checked in resolveBIFunType
        targs.map(targ => {
            if (targ instanceof ST.AddressType) {
                return new ST.ByStrXTyp(20);
            }
            return targ;
        })
        return targs;
    }
    return targs;
}