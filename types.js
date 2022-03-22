//Types that exist in Scilla
import SP from './scillaParser.js'; //short for ScillaParser
// import ScillaExpr from './syntax.js';

export default class ScillaType {
    parseStringToPrimType(str) {
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
            : str === 'Bystr'
            ? new ByStrTyp()
            : str === 'Bool'
            ? new Bool()
            : str === 'String'
            ? new String()
            : str === 'BNum'
            ? new BNum()
            : str === 'Message'
            ? new Message()
            : str === 'Event'
            ? new Event()
            : str === 'Exception'
            ? new Exception
            : str.indexOf("ByStr") !== -1 && str.length > 5
            ? new ByStrXTyp(parseInt(str.substr(5, str.length - 1)))
            : str.substr(0, 6) === "Option" 
            ? new Option(this.parseStringToPrimType(str.substr(7, str.length - 1)))
            : undefined
            // : console.log("[ERROR]parseStringToPrimType: Couldn't match Prim Type: " + str);
    }

    //@n: string
    //returns ScillaType
    to_type(n) {
        const is_prim = this.parseStringToPrimType(n);
        // console.log("parseStringToPrimType error is okay.");
        if (is_prim !== undefined) {
            return is_prim;
        } else {
            return new ADT(n, []);
        }
    }

    //Returns ScillaType
    resolveTMapKey(ctx) {
        if (ctx.scid() !== null) {
            return this.to_type(ctx.scid().getText());
        }
        if (ctx.address_typ() !== null) {
            return new AddressType();
        }
        console.log("resolveTMapKey: Couldn't resolve type of map's key");
    }

    //Returns ScillaType
    resolveTMapValue(ctx) {
        if (ctx.scid() !== undefined) {
            return this.to_type(ctx.scid().getText());
        }
        //TODO: the rest - got distracted
    }

    //Returns ScillaType
    resolveTArg(ctx) {
        return ctx instanceof SP.TypTargContext
            ? this.generateSType(ctx.t)
            : ctx instanceof SP.ScidTargContext
            ? this.to_type(ctx.d.getText())
            : ctx instanceof SP.TvarTargContext
            ? new TypeVar(ctx.TID().getText())
            : ctx instanceof SP.AddrTargContext
            ? new AddressType()
            : ctx instanceof SP.MapTargContext
            ? new MapType(this.resolveTMapKey(ctx.k), this.resolveTMapValue(ctx.v))
            : console.log("resolveTArg: Couldn't resolve TArg " + ctx.getText());
    }

    //return ScillaType
    resolveAddressTyp(ctx) {
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
                    {id: field.id.getText(); typ: this.generateSType(field.ty)}
                );
            return new ContrAddr(fields);
        }
    }

    resolveTMapValueTArgs(ctx) {
        if (ctx.t instanceof SP.TMP1Context) {
            if (ctx.targs === []) {
                return this.to_type(ctx.d.getText());
            } else {
                const argTList = ctx.targs.map(targ =>
                    this.resolveTMapValueArgs(targ)
                );
                return new ADT(ctx.d.getText(), argTList);
            }
        }
        if (ctx.t instanceof SP.TMP2Context) {
            return this.resolveTMapValue(ctx.t_map_value());
        }
    }

    resolveTMapValueArgs(ctx){
        if (ctx instanceof SP.TMP3Context) {
            this.resolveTMapValueTArgs(ctx.t);
        }
        if (ctx instanceof SP.TMP4Context) {
            return this.to_type(ctx.d.getText());
        }
        if (ctx instanceof SP.TMP5Context) {
            return this.resolveMapType(ctx);
        }
    }

    resolveTMapValue(ctx){
        if (ctx instanceof SP.TMPScidContext) {
            return this.to_type(ctx.d.getText());
        }
        if (ctx instanceof SP.TMPMapContext) {
            return this.resolveMapType(ctx);
        }
        if (ctx instanceof SP.TMPParenContext) {
            return this.resolveTMapValueTArgs(ctx.t);
        }
        if (ctx instanceof SP.TMPAddrContext) {
            return this.resolveAddressTyp(ctx.vt);
        }
    }

    resolveMapType(ctx) {
        //Map keys can only be prim types (scid) or address types
        const map_k_t = 
            ctx.k.kt_to_map !== null 
            ? this.to_type(ctx.k.kt_to_map.getText()) 
            : this.resolveAddressTyp(ctx.k.kt.getText());
        
        //Map Value can only be another prim (scid), map, 
        const map_v_t = this.resolveTMapValue(ctx.v);

        return new MapType(map_k_t, map_v_t);
    }

    generateSType(ctx) {
        if (ctx instanceof SP.PrimorADTTypeContext) {
            if (ctx.targs === []) {
                return this.to_type(ctx.d.getText());
            } else {
                const argTList = ctx.targs.map(targ =>
                    this.resolveTArg(targ)
                );
                return new ADT(ctx.d.getText(), argTList);
            }
        }
        if (ctx instanceof SP.MapTypeContext) {
            return this.resolveMapType(ctx);
        }
        if (ctx instanceof SP.FunTypeContext) {
            return new FunType(this.generateSType(ctx.t1), this.generateSType(ctx.t2));
        }
        if (ctx instanceof SP.ParenTypeContext) {
            return this.generateSType(ctx.t)
        }
        if (ctx instanceof SP.AddrTypeContext) {
            return this.resolveAddressTyp(ctx.t_to_map)
        }
        if (ctx instanceof SP.PolyFunTyContext) {
            return new PolyFun(ctx.TID().getText(), this.generateSType(ctx.t));
        }
        if (ctx instanceof SP.TypeVarTypeContext) {
            return new TypeVar(ctx.getText());
        }
        console.log("[ERROR]generateSType: Couldn't match type " + ctx.getText());
        return undefined;
    }
}

//Primitive Types
export class PrimType extends ScillaType {}

export class Int64 extends PrimType {}

export class Int32 extends PrimType {}

export class Int128 extends PrimType {}

export class Int256 extends PrimType {}

export class Uint32 extends PrimType {}

export class Uint64 extends PrimType {}

export class Uint128 extends PrimType {}

export class Uint256 extends PrimType {}

export class ByStrTyp extends PrimType {}

export class ByStrXTyp extends PrimType {
    constructor(i) {
        super();
        this.i = i; //Bystr20 then i = 20; i is the length
    }
}

export class Bool extends PrimType {}

export class String extends PrimType {}

export class BNum extends PrimType {}

export class Message extends PrimType {}

export class Event extends PrimType {}

export class Exception extends PrimType {}



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

//ADT string -> t list
export class ADT extends ScillaType {
    constructor(id, tlist) {
        super();
        this.name = id;
        this.t = tlist;
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