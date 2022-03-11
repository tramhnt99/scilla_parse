//Syntax of Scilla programs


//Scilla expressions
export default class ScillaExpr {}

//@x: String
//@f: ScillaExpr
//@e: ScillaExpr
class Let extends ScillaExpr {
    /**
     * 
     * @param {String} x
     * @param {ScillaExpr} f
     * @param {ScillaExpr} e 
     */
    constructor(x, f, e) {
        this.x = x;
        this.ty = null;
        this.lhs = f;
        this.rhs = e;
    }
}

class Fun extends ScillaExpr {
    /**
     * 
     * @param {String} id 
     * @param {*} ty // should be from Types?
     * @param {ScillaExpr} e 
     */
    constructor(id, ty, e) {
        this.id = id;
        this.ty = ty;
        this.e = e;
    }
}

class App extends ScillaExpr {
    /**
     * 
     * @param {String} f_var 
     * @param {*} args 
     */
    constructor(f_var, args) {
        this.f_var = f_var;
        this.args = args;
    }
}

class Atomic extends ScillaExpr {
    /**
     * 
     * @param {AtomicExpr} a 
     */
    constructor(a) {
        this.a = a;
    }
}

class Builtin extends ScillaExpr {
    /**
     * 
     * @param {String} b 
     * @param {*} targs 
     * @param {String} xs 
     */
    constructor(b, targs, xs) {
        this.b = b;
        this.targs = targs;
        this.xs = xs;
    }
}

class Message extends ScillaExpr {
    constructor(es) {
        this.es = es;
    }
}

class Match extends ScillaExpr {
    constructor(x_sid, cs) {
        this.x_sid = x_sid;
        this.cs = cs;
    }
}
class DataConstructorApp extends ScillaExpr {
    constructor(c, ts, args) {
        this.c = c;
        this.ts = ts;
        this.args = args;
    }
}
class TFun extends ScillaExpr {
    /**
     * 
     * @param {String} i 
     * @param {ScillaExpr} e 
     */
    constructor(i, e) {
        this.i = i;
        this.e = e;
    }
}
class TApp extends ScillaExpr {
    /**
     * 
     * @param {String} f 
     * @param {*} targs 
     */
    constructor(f, targs) {
        this.f = f;
        this.targs = targs;
    }
}
