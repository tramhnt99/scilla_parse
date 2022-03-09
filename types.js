//Types that exist in Scilla
import SP from './scillaParser.js'; //short for ScillaParser

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
            ? console.log("TODO bystr")
            : str === 'Bool'
            ? new Bool()
            : str === 'String'
            ? new String()
            : console.log("parseStringToPrimType: Couldn't match Prim Type");
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
        // skip a few
        if (ctx instanceof SP.TypeVarTypeContext) {
            return new TypeVar(ctx.t_var.getText());
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

class Bystr extends PrimType {}

class Bool extends PrimType {}

class String extends PrimType {}

class AddressType extends PrimType {
    //TODO: Understand how to build
}

//Unit
class Unit extends ScillaType {}

//MapType t * t
class MapType extends ScillaType {
    constructor(t1, t2) {
        this.t1 = t1;
        this.t2 = t2;
    }
}

//FunType t -> t
class FunType extends ScillaType {
    constructor(t1, t2) {
        this.t1 = t1;
        this.t2 = t2;
    }
}

//TypeVar string
class TypeVar extends ScillaType {
    constructor(name) {
        this.name = name;
    }
}

//PolyFun string -> t
class PolyFun extends ScillaType {
    constructor(name, t) {
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

//Address : TODO