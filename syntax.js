//Syntax of Scilla programs


//Scilla expressions
export default class ScillaExpr {}

//@x: String
//@f: ScillaExpr
//@e: ScillaExpr
class Let extends ScillaExpr{
    constructor(x, f, e) {
        this.x = x;
        this.ty = null;
        this.lhs = f;
        this.rhs = e;
    }
}

export class ScillaStmt {}

class Load extends ScillaStmt {
    /** 
     * @param {String} x
     * @param {String} r
     */
    constructor(x, r) {
        this.x = x;
        this.r = r;
    }
}

class RemoteLoad extends ScillaStmt {
    /**
     * @param {String} x
     * @param {String} adr
     * @param {String} r
     */
    constructor(x, r, addr) {
        this.x = x;
        this.r = r;
        this.addr = addr;
    }
}

class Store extends ScillaStmt {
    /**
     * @param {String} x
     * @param {String} r
     */
    constructor(x, r) {
        this.x = x;
        this.r = r;
    }
}

class Bind extends ScillaStmt {
    /**
     * @param {String} x
     * @param {ScillaExpr} e
     */
    constructor(x, e) {
        this.x = x;
        this.e = e;
    }
}

class MapUpdate extends ScillaStmt {
    /**
     * @param {String} m
     * @param {String[]} klist
     * @param {Option String} ropt
     */
    constructor(x, klist, ropt) {
        this.x = x;
        this.klist = klist;
        this.ropt = ropt;
    }
}

class MapGet extends ScillaStmt{
    /**
     * @param {String} x
     * @param {String} m
     * @param {String[]} klist
     * @param {Bool} fetchval
     */
    constructor(x, m, klist, fetchval) {
        this.x = x;
        this.m = m;
        this.klist = klist;
        this.fetchval = fetchval;
    }
}

class RemoteMapGet extends ScillaStmt {
    /**
     * @param {String} x
     * @param {String} adr
     * @param {String} m
     * @param {String[]} klist
     * @param {Bool} fetchval
     */
    constructor(x, adr, m, list, fetchval) {
        this.x = x;
        this.adr = adr; 
        this.m = m;
        this.list = list;
        this.fetchval = fetchval;
    }
}

class ReadFromBC extends ScillaStmt {
    /**
     * @param {String} x
     * @param {BCInfoQuery} bf
     */
    constructor(x, bf) {
        this.x = x;
        this.bf = bf;
    }
}

class TypeCast extends ScillaStmt {
    /**
     * @param {String} x
     * @param {String} r
     * @param {Stype} t
     */
    constructor(x, r, t) {
        this.x = x;
        this.r = r;
        this.t = t;
    }
}

class MatchStmt extends ScillaStmt {
    /**
     * @param {String} x
     * @param {(StmtPattern * ScillaStmt[])[]} clauses
     */
    constructor(x, clauses) {
        this.x = x;
        this.clauses = clauses;
    }
}

class AcceptPayment extends ScillaStmt {}

class SendMsgs extends ScillaStmt {
    /**
     * @param {String} ms
     */
    constructor(ms) {
        this.ms = ms;
    }
}

class CreateEvnt extends ScillaStmt {
    /**
     * @param {String} params
     */
    constructor(params) {
        this.params = params;
    }
}

class CallProc extends ScillaStmt {
    /**
     * @param {String} p
     * @param {String[]} actuals
     */
    constructor(p, actuals) {
        this.p = p;
        this.actuals = actuals;
    }
}

class Iterate extends ScillaStmt {
    /**
     * @param {String} l
     * @param {String} p
     */
    constructor(l, p) {
        this.l = l;
        this.p = p;
    }
}

class Throw extends ScillaStmt {
    /**
     * @param {Option String} eopt
     */
    constructor(eopt) {
        this.eopt = eopt;
    }
}