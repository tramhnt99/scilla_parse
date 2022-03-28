//Types that exist in Scilla
import { Constructor, ScillaDataTypes } from './datatypes.js';
import { BystrX } from './literals.js';
import SP from './scillaParser.js'; //short for ScillaParser

/***************************************************
 * 
 * Type Utility Functions
 * 
 **************************************************/
export function parseStringToPrimType(str) {
    return str === 'Int64' 
        ? new Int64()
        : str === 'Int32' 
        ? new Int32()
        : str === 'Int128'
        ? new Int128()
        : str === 'Int256'
        ? new Int256()
        : str === 'Uint32'
        ? new Uint32()
        : str === 'Uint64'
        ? new Uint64()
        : str === 'Uint128'
        ? new Uint128()
        : str === 'Uint256'
        ? new Uint256()
        : str === 'ByStr'
        ? new ByStrTyp()
        : str === 'String'
        ? new String()
        : str === 'BNum'
        ? new BNum()
        : str === 'Message'
        ? new MessageTyp()
        : str === 'Event'
        ? new Event()
        : str === 'Exception'
        ? new Exception
        : str.indexOf("ByStr") !== -1 && str.length > 5
        ? new ByStrXTyp(parseInt(str.substr(5, str.length - 1)))
        // : str.substr(0, 6) === "Option" 
        // ? new Option(parseStringToPrimType(str.substr(7, str.length - 1)))
        : undefined
        // : console.log("[ERROR]parseStringToPrimType: Couldn't match Prim Type: " + str);
}

//@n: string
//returns ScillaType
export function to_type(n) {
    const is_prim = parseStringToPrimType(n);
    if (is_prim !== undefined) {
        return is_prim;
    } else {
        return new ADT(n, []);
    }
}

//Returns ScillaType
export function resolveTMapKey(ctx) {
    if (ctx.scid() !== null) {
        return to_type(ctx.scid().getText());
    }
    if (ctx.address_typ() !== null) {
        return new AddressType();
    }
    console.log("resolveTMapKey: Couldn't resolve type of map's key");
}

//Returns ScillaType
export function resolveTArg(ctx) {
    return ctx instanceof SP.TypTargContext
        ? generateSType(ctx.t)
        : ctx instanceof SP.ScidTargContext
        ? to_type(ctx.d.getText())
        : ctx instanceof SP.TvarTargContext
        ? new TypeVar(ctx.TID().getText())
        : ctx instanceof SP.AddrTargContext
        ? new AddressType()
        : ctx instanceof SP.MapTargContext
        ? new MapType(resolveTMapKey(ctx.k), resolveTMapValue(ctx.v))
        : console.log("resolveTArg: Couldn't resolve TArg " + ctx.getText());
}

//return ScillaType
export function resolveAddressTyp(ctx) {
    if (ctx instanceof SP.AnyAdressContext) {
        return new AnyAddr();
    }
    if (ctx instanceof SP.LibAddrContext) {
        return new LibAddr();
    }
    if (ctx instanceof SP.CodeAddrContext) {
        return new CodeAddr();
    }
    if (ctx instanceof SP.ContrAddrContext) {
        const fields = ctx.fs.map(field => 
                {id: field.id.getText(); typ: generateSType(field.ty)}
            );
        return new ContrAddr(fields);
    }
}

export function resolveTMapValueTArgs(ctx) {
    if (ctx.t instanceof SP.TMP1Context) {
        if (ctx.targs === []) {
            return to_type(ctx.d.getText());
        } else {
            const argTList = ctx.targs.map(targ =>
                resolveTMapValueArgs(targ)
            );
            return new ADT(ctx.d.getText(), argTList);
        }
    }
    if (ctx.t instanceof SP.TMP2Context) {
        return resolveTMapValue(ctx.t_map_value());
    }
}

export function resolveTMapValueArgs(ctx){
    if (ctx instanceof SP.TMP3Context) {
        resolveTMapValueTArgs(ctx.t);
    }
    if (ctx instanceof SP.TMP4Context) {
        return to_type(ctx.d.getText());
    }
    if (ctx instanceof SP.TMP5Context) {
        return resolveMapType(ctx);
    }
}

export function resolveTMapValue(ctx){
    if (ctx instanceof SP.TMPScidContext) {
        return to_type(ctx.d.getText());
    }
    if (ctx instanceof SP.TMPMapContext) {
        return resolveMapType(ctx);
    }
    if (ctx instanceof SP.TMPParenContext) {
        return resolveTMapValueTArgs(ctx.t);
    }
    if (ctx instanceof SP.TMPAddrContext) {
        return resolveAddressTyp(ctx.vt);
    }
}

export function resolveMapType(ctx) {
    //Map keys can only be prim types (scid) or address types
    const map_k_t = 
        ctx.k.kt_to_map !== null 
        ? to_type(ctx.k.kt_to_map.getText()) 
        : resolveAddressTyp(ctx.k.kt.getText());
    
    //Map Value can only be another prim (scid), map, 
    const map_v_t = resolveTMapValue(ctx.v);

    return new MapType(map_k_t, map_v_t);
}

export function generateSType(ctx) {
    if (ctx instanceof SP.PrimorADTTypeContext) {
        if (ctx.targs.length === 0) {
            return to_type(ctx.d.getText());
        } else {
            const argTList = ctx.targs.map(targ =>
                resolveTArg(targ)
            );
            return new ADT(ctx.d.getText(), argTList);
        }
    }
    if (ctx instanceof SP.MapTypeContext) {
        return resolveMapType(ctx);
    }
    if (ctx instanceof SP.FunTypeContext) {
        return new FunType(generateSType(ctx.t1), generateSType(ctx.t2));
    }
    if (ctx instanceof SP.ParenTypeContext) {
        return generateSType(ctx.t)
    }
    if (ctx instanceof SP.AddrTypeContext) {
        return resolveAddressTyp(ctx.t_to_map)
    }
    if (ctx instanceof SP.PolyFunTyContext) {
        return new PolyFun(ctx.TID().getText(), generateSType(ctx.t));
    }
    if (ctx instanceof SP.TypeVarTypeContext) {
        return new TypeVar(ctx.getText());
    }
    console.log("[ERROR]generateSType: Couldn't match type " + ctx.getText());
    return undefined;
}

// tm[tvar := tp]
export function substTypeinType(tvar, tp, tm) {
    if (tm instanceof PrimType || tm instanceof Unit) {
        return tm;
    }
    if (tm instanceof MapType) {
        const kt = this.substTypeinType(tvar, tp, tm.t1);
        const vt = this.substTypeinType(tvar, tp, tm.t2);
        return new MapType(kt, vt);
    }
    if (tm instanceof FunType) {
        const t1 = this.substTypeinType(tvar, tp, tm.t1);
        const t2 = this.substTypeinType(tvar, tp, tm.t2);
        return new FunType(t1, t2);
    }
    if (tm instanceof TypeVar) {
        return tm.name === tvar ? tp : tm;
    }
    if (tm instanceof ADT) {
        const tlist = tm.t.map(t => this.substTypeinType(tvar, tp, t));
        return new ADT(tm.name, tlist);
    }
    if (tm instanceof PolyFun) {
        if (tvar === tm.name) {return tm;}
        return new PolyFun(tm.name, this.substTypeinType(tvar, tp, tm.t));
    }
    if (tm instanceof AnyAddr || tm instanceof LibAddr || tm instanceof CodeAddr) {
        return tm;
    }
    if (tm instanceof ContrAddr) {
        const fs = tm.fs.map(f => {
            const ST = new ScillaType();
            return {id: f.id, typ: ST.substTypeinType(tvar, tp, f.typ)}
        });
        return new ContrAddr(fs);
    }
}

export default class ScillaType {}

//Primitive Types
export class PrimType extends ScillaType {}

export class Int extends PrimType{}

export class Int64 extends Int {}

export class Int32 extends Int {}

export class Int128 extends Int {}

export class Int256 extends Int {}

export const allInts = [new Int32(), new Int64(), new Int128(), new Int256()]

export class Uint extends PrimType {}

export class Uint32 extends Uint {}

export class Uint64 extends Uint {}

export class Uint128 extends Uint {}

export class Uint256 extends Uint {}

export const allUints = [new Uint32(), new Uint64(), new Uint128(), new Uint256()]

export class ByStrTyp extends PrimType {}

export class ByStrXTyp extends PrimType {
    constructor(i) {
        super();
        this.i = i; //Bystr20 then i = 20; i is the length
    }
}

export const allBystr = [new ByStrTyp(), new ByStrXTyp()];

export class String extends PrimType {}

export class BNum extends PrimType {}

export class MessageTyp extends PrimType {}

export class EventTyp extends PrimType {}

export class ExceptionTyp extends PrimType {}

export const msgFieldTypes = 
    {
        "_tag" : new String(),
        "_amount" : new Uint128(),
        "_recipient": new ByStrXTyp(20)
    }

//Unit
export class Unit extends ScillaType {}

//MapType t * t
export class MapType extends ScillaType {
    constructor(t1, t2) {
        super();
        this.t1 = t1;
        this.t2 = t2;
    }
}

//FunType t -> t
export class FunType extends ScillaType {
    constructor(t1, t2) {
        super();
        this.t1 = t1;
        this.t2 = t2;
    }
}

//TypeVar string
export class TypeVar extends ScillaType {
    constructor(name) {
        super();
        this.name = name;
    }
}

//PolyFun string -> t
export class PolyFun extends ScillaType {
    constructor(name, t) {
        super();
        this.name = name;
        this.t = t
    }
}

//ADT string -> SType list
export class ADT extends ScillaType {
    constructor(name, t) {
        super();
        this.name = name;
        this.t = t;
    }
}

//AddressType
    // The types of addresses we care about.
    // Lattice:
    //      AnyAddr
    //         |
    //      CodeAddr
    //        / \
    //  LibAddr ContrAddr
export class AddressType extends ScillaType {}

export class AnyAddr extends AddressType {}

export class ContrAddr extends AddressType {
    //Contains addresses of other contract
    /**
     * 
     * @param {{id: String, typ: SType}[]} fs 
     */
    constructor(fs) {
        super();
        this.fs = fs;
    }
}

export class LibAddr extends AddressType {}

export class CodeAddr extends AddressType {}