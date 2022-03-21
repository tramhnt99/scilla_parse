export class ScillaLiterals {}

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

export class UInt32L extends UintLit {}
export class UInt64L extends UintLit {}
export class UInt128L extends UintLit {}
export class UInt256L extends UintLit {}

/**
 * StringLit
 */
export class StringLit extends ScillaLiterals {
    constructor(s) {
        this.s = s;
    }
}

/**
 * BNumLit
 */
export class BNumLit extends ScillaLiterals {
    constructor(i) {
        this.i = i;
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
     * @param {(Stype * Stype)[]} kv 
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




