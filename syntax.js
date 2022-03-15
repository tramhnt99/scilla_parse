//Syntax of Scilla programs

class ScillaProgram {}

//Scilla expressions
// export default class ScillaExpr {}
class ScillaExpr extends ScillaProgram {}
//@x: String
//@f: ScillaExpr
//@e: ScillaExpr
export class Let extends ScillaExpr {
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

export class Fun extends ScillaExpr {
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

export class App extends ScillaExpr {
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

export class Atomic extends ScillaExpr {
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

export class Literal extends Atomic {
    constructor(a) {
        super(a);
    }
}
ScillaExpr.Literal = Literal;

export class Var extends Atomic {
    constructor(a) {
        super(a);
    }
}
ScillaExpr.Var = Var;


export class Builtin extends ScillaExpr {
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

export class Message extends ScillaExpr {
    constructor(es) {
        super();
        this.es = es;
    }
}
ScillaExpr.Message = Message;

export class Match extends ScillaExpr {
    constructor(x_sid, cs) {
        super();
        this.x_sid = x_sid;
        this.cs = cs;
    }
}
ScillaExpr.Match = Match;

export class DataConstructorApp extends ScillaExpr {
    constructor(c, ts, args) {
        super();
        this.c = c;
        this.ts = ts;
        this.args = args;
    }
}
ScillaExpr.DataConstructorApp = DataConstructorApp;

export class TFun extends ScillaExpr {
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

export class TApp extends ScillaExpr {
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

export class Pattern extends ScillaProgram {
    constructor(x, c, ps) {
        super();
    }
}
