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
            ? new ByStr()
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
            ? new ByStrX(parseInt(str.substr(5, str.length - 1)))
            : console.log("[ERROR]parseStringToPrimType: Couldn't match Prim Type: " + str);
    }

    //@n: string
    //returns ScillaType
    to_type(n) {
        const is_prim = this.parseStringToPrimType(n);
        if (is_prim !== undefined) {
            return is_prim;
        } else {
            return new ADT(n, []);
        }
    }

    //Returns ScillaType
    resolveTMapKey(ctx) {
        if (ctx.scid() !== undefined) {
            return this.to_type(ctx.scid().getText());
        }

        if (ctx.address_typ() !== undefined) {
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
            ? new TypeVar(ctx.t_var.getText())
            : ctx instanceof SP.AddrTargContext
            ? new AddressType()
            : ctx instanceof SP.MapTargContext
            ? new MapType(resolveTMapKey(ctx.k), resoleTMapValue(ctx.v))
            : console.log("resolveTArg: Couldn't resolve TArg");
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

    generateSType(ctx) {
        if (ctx instanceof SP.PrimorADTTypeContext) {
            if (this.parseStringToPrimType(ctx.d.getText()) !== undefined) {
                return this.parseStringToPrimType(ctx.d.getText());
            } else {
                const argTList = ctx.targs.map(targ =>
                    this.resolveTArg(targ)
                );
                return new ADT(ctx.d.getText(), argTList);
            }
        }
        if (ctx instanceof SP.MapTypeContext) {
            return new MapType(this.generateSType(ctx.v), this.generateSType(ctx.k));
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
            return new PolyFun(ctx.tv.getText(), this.generateSType(ctx.t));
        }
        if (ctx instanceof SP.TypeVarTypeContext) {
            return new TypeVar(ctx.getText());
        }
        if (ctx instanceof SP.PrimTypeContext) {
            return parseStringToPrimType(ctx.getText());
        }
    }
}

//Primitive Types
class PrimType extends ScillaType {}

class Int64 extends PrimType {}

class Int32 extends PrimType {}

class Int128 extends PrimType {}

class Int256 extends PrimType {}

class Uint32 extends PrimType {}

class Uint64 extends PrimType {}

class Uint128 extends PrimType {}

class Uint256 extends PrimType {}

class ByStr extends PrimType {}

class ByStrX extends PrimType {
    constructor(i) {
        super();
        this.i = i; //Bystr20 then i = 20;
    }
}

class Bool extends PrimType {}

class String extends PrimType {}

class BNum extends PrimType {}

class Message extends PrimType {}

class Event extends PrimType {}

class Exception extends PrimType {}



//Unit
class Unit extends ScillaType {}

//MapType t * t
class MapType extends ScillaType {
    constructor(t1, t2) {
        super();
        this.t1 = t1;
        this.t2 = t2;
    }
}

//FunType t -> t
class FunType extends ScillaType {
    constructor(t1, t2) {
        super();
        this.t1 = t1;
        this.t2 = t2;
    }
}

//TypeVar string
class TypeVar extends ScillaType {
    constructor(name) {
        super();
        this.name = name;
    }
}

//PolyFun string -> t
class PolyFun extends ScillaType {
    constructor(name, t) {
        super();
        this.name = name;
        this.t = t
    }
}

//ADT string -> t list
class ADT extends ScillaType {
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
class AddressType extends ScillaType {}

class AnyAddr extends AddressType {}

class ContrAddr extends AddressType {
    //Contains addresses of other contract
    //@fs: list of fields in contract
    constructor(fs) {
        super();
        this.fs = fs;
    }
}

class LibAddr extends AddressType {}

class CodeAddr extends AddressType {}