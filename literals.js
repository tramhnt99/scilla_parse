import SP from './scillaParser.js';
import * as ST from './types.js';
import { Error } from './syntax.js';

export class ScillaLiterals {

    printError(funcname, msg) {
        console.log("[ERROR]" + funcname + ": " + msg);
    }

    generateLiteral(ctx) {
        if (ctx instanceof SP.LitIntContext) {
            const i = parseInt(ctx.int_().getText());
            return ctx.i.getText() === "Int32"
            ? new Int32L(i)
            : ctx.i.getText() === "Int64"
            ? new Int64L(i)
            : ctx.i.getText() === "Int128"
            ? new Int128L(i)
            : ctx.i.getText() === "Int256"
            ? new Int256L(i)
            : ctx.i.getText() === "Uint32"
            ? new Uint32L(i)
            : ctx.i.getText() === "Uint64"
            ? new Uint64L(i)
            : ctx.i.getText() === "Uint128"
            ? new Uint128L(i)
            : ctx.i.getText() === "Uint256"
            ? new Uint256L(i)
            : ctx.i.getText() === "BNum"
            ? new BNumLit(i)
            : this.printError("generateLiteral", "Couldn't match Int type: " + ctx.i.getText());
        }
        if (ctx instanceof SP.LitHexContext) {
            return new BystrX(ctx.HEX().getText());
        }
        if (ctx instanceof SP.LitStringContext) {
            return new StringLit(ctx.STRING().getText());
        }
        if (ctx instanceof SP.LitEmpContext) {
            return new Map({});
        }
        this.printError("generateLiteral", "Couldn't match literal.");
        return undefined;
    }

    literalType(l) {
        return l instanceof Int32L
        ? new ST.Int32()
        : l instanceof Int64L
        ? new ST.Int64()
        : l instanceof Int128L
        ? new ST.Int128()
        : l instanceof Int256L
        ? new ST.Int256()
        : l instanceof Uint32L
        ? new ST.Uint32
        : l instanceof Uint64L
        ? new ST.Uint64
        : l instanceof Uint128L
        ? new ST.Uint128
        : l instanceof Uint256L
        ? new ST.Uint256
        : l instanceof BNumLit
        ? new ST.BNum
        : l instanceof StringLit
        ? new ST.String
        : l instanceof Bystr
        ? new ST.Bystr
        : l instanceof BystrX
        ? new ST.ByStrX
        : l instanceof Msg
        ? new ST.Message
        : l instanceof Map
        ? l.mtyp
        : l instanceof ADTValue
        ? new ST.ADT(l.name, l.typl)
        : l instanceof CLo 
        ? new Error("Cannot type runtime closure")
        : l instanceof TAbs 
        ? new Error("Cannot type runtime type function")
        : this.printError("literalType", "Couldn't match literal to a type");
    }

}

/**
 * IntLit
 */
export class IntLit extends ScillaLiterals {
    /**
     * @param {int} i 
     */
    constructor(i) {
        super();
        this.i = i;
    }
}

export class Int32L extends IntLit {}
export class Int64L extends IntLit {}
export class Int128L extends IntLit {}
export class Int256L extends IntLit {}


/**
 * UintLit
 */
export class UintLit extends ScillaLiterals{
    /**
     * @param {int} i 
     */
    constructor(i) {
        super();
        this.i = i;
    }
}

export class Uint32L extends UintLit {}
export class Uint64L extends UintLit {}
export class Uint128L extends UintLit {}
export class Uint256L extends UintLit {}

/**
 * BNumLit
 */
export class BNumLit extends ScillaLiterals {
    constructor(i) {
        super();
        this.i = i;
    }
}

/**
 * StringLit
 */
export class StringLit extends ScillaLiterals {
    constructor(s) {
        super();
        this.s = s;
    }
}

/**
 * Bystr - without statically known length
 */
export class Bystr extends ScillaLiterals {
    //For now, let us not perform hex encoding and keep values as strings - nor byte encoding
    constructor(s) {
        super();
        this.s = s;
    }

    width() {
        return this.s.length;
    }

    equal(s) {
        return s === s;
    }
}

/**
 * BystrX - with statically known length
 */
export class BystrX extends Bystr {
    constructor(s) {
        super();
        this.s = s;
    }
}

/**
 * Msg
 */
export class Msg extends ScillaLiterals {
    /**
     * 
     * @param {String} s 
     * @param {SType} ty 
     * @param {ScillaLiterals} t 
     */
    constructor(s, ty, t) {
        super();
        this.s = s;
        this.ty = ty;
        this.t = t;
    }
}

/**
 * Map
 */
export class Map extends ScillaLiterals {
    /**
     * 
     * @param {SType} mtyp 
     * @param {Stype[]} kv 
     */
    constructor(mtyp, kv) {
        super();
        this.mtyp = mtyp;
        this.kv = kv;
    }

    remove(k) {
        this.kv[k] = undefined;
    }

    update(k,v) {
        this.kv[k] = v;
    }

}

/**
 * ADTValue
 */
export class ADTValue extends ScillaLiterals {
    /**
     * 
     * @param {String} name 
     * @param {SType[]} typl 
     * @param {ScillaLiterals[]} ll 
     */
    constructor(name, typl, ll){
        super();
        this.name = name;
        this.typl = typl;
        this.ll = ll;
    }
}

/**
 * Clo - function closures
 */
export class Clo extends ScillaLiterals {
    /**
     * 
     * @param {JS Closures} clo 
     */
    constructor(clo){
        this.clo = clo;
    }
}

/**
 * TAbs - type abstractions
 */
export class TAbs extends ScillaLiterals {
    constructor(tabs) {
        super();
        this.tabs = tabs;
    }
}



