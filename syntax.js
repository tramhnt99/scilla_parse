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
    constructor(x, ty, f, e) {
        super();
        this.x = x;
        this.ty = ty;
        this.lhs = f;
        this.rhs = e;
    }
}
ScillaExpr.Let = Let;

class Fun extends ScillaExpr {
    /**
     * 
     * @param {String} id 
     * @param {*} ty // should be from Types?
     * @param {ScillaExpr} e 
     */
    constructor(id, ty, e) {
        super();
        this.id = id;
        this.ty = ty;
        this.e = e;
    }
}
ScillaExpr.Fun = Fun;

class App extends ScillaExpr {
    /**
     * 
     * @param {String} f_var 
     * @param {*} args 
     */
    constructor(f_var, args) {
        super();
        this.f_var = f_var;
        this.args = args;
    }
}
ScillaExpr.App = App;

class Atomic extends ScillaExpr {
    /**
     * 
     * @param {AtomicExpr} a 
     */
    constructor(a) {
        super();
        this.a = a;
    }
}
ScillaExpr.Atomic = Atomic;

class Literal extends Atomic {
    constructor(a) {
        super(a);
    }
}
ScillaExpr.Literal = Literal;

class Var extends Atomic {
    constructor(a) {
        super(a);
    }
}
ScillaExpr.Var = Var;


class Builtin extends ScillaExpr {
    /**
     * 
     * @param {String} b 
     * @param {*} targs 
     * @param {String} xs 
     */
    constructor(b, targs, xs) {
        super();
        this.b = b;
        this.targs = targs;
        this.xs = xs;
    }
}
ScillaExpr.Builtin = Builtin;

class Message extends ScillaExpr {
    constructor(es) {
        super();
        this.es = es;
    }
}
ScillaExpr.Message = Message;

class Match extends ScillaExpr {
    constructor(x_sid, cs) {
        super();
        this.x_sid = x_sid;
        this.cs = cs;
    }
}
ScillaExpr.Match = Match;

class DataConstructorApp extends ScillaExpr {
    constructor(c, ts, args) {
        super();
        this.c = c;
        this.ts = ts;
        this.args = args;
    }
}
ScillaExpr.DataConstructorApp = DataConstructorApp;

class TFun extends ScillaExpr {
    /**
     * 
     * @param {String} i 
     * @param {ScillaExpr} e 
     */
    constructor(i, e) {
        super();
        this.i = i;
        this.e = e;
    }
}
ScillaExpr.TFun = TFun;

class TApp extends ScillaExpr {
    /**
     * 
     * @param {String} f 
     * @param {*} targs 
     */
    constructor(f, targs) {
        super();
        this.f = f;
        this.targs = targs;
    }
}
ScillaExpr.TApp = TApp;