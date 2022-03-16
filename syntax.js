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

export class Pattern {}

class WildCard extends Pattern {}
Pattern.WildCard = WildCard;

class Binder extends Pattern {
    /**
     * @param {String} x
     */
    constructor(x) {
        super();
        this.x = x;
    }
}
Pattern.Binder = Binder;

class ConstructorPat extends Pattern {
    /**
     * @param {String} c
     * @param {Pattern[]} ps
     */
    constructor(c, ps) {
        super();
        this.c = c;
        this.ps = ps;
    }
}
Pattern.ConstructorPat = ConstructorPat;

/* ******************************************************
 *
 * Scilla Statements
 *
 ****************************************************** */

export class ScillaStmt {}

class Load extends ScillaStmt {
    /** 
     * @param {String} x
     * @param {String} r
     */
    constructor(x, r) {
        super();
        this.x = x;
        this.r = r;
    }
}
ScillaStmt.Load = Load;

class RemoteLoad extends ScillaStmt {
    /**
     * @param {String} x
     * @param {String} adr
     * @param {String} r
     */
    constructor(x, r, addr) {
        super();
        this.x = x;
        this.r = r;
        this.addr = addr;
    }
}
ScillaStmt.RemoteLoad = RemoteLoad;


class Store extends ScillaStmt {
    /**
     * @param {String} x
     * @param {String} r
     */
    constructor(x, r) {
        super();
        this.x = x;
        this.r = r;
    }
}
ScillaStmt.Store = Store;

class Bind extends ScillaStmt {
    /**
     * @param {String} x
     * @param {ScillaExpr} e
     */
    constructor(x, e) {
        super();
        this.x = x;
        this.e = e;
    }
}
ScillaStmt.Bind = Bind;

class MapUpdate extends ScillaStmt {
    /**
     * @param {String} m
     * @param {String[]} klist
     * @param {Option String} ropt
     */
    constructor(x, klist, ropt) {
        super();
        this.x = x;
        this.klist = klist;
        this.ropt = ropt;
    }
}
ScillaStmt.MapUpdate = MapUpdate;

class MapGet extends ScillaStmt{
    /**
     * @param {String} x
     * @param {String} m
     * @param {String[]} klist
     * @param {Bool} fetchval
     */
    constructor(x, m, klist, fetchval) {
        super();
        this.x = x;
        this.m = m;
        this.klist = klist;
        this.fetchval = fetchval;
    }
}
ScillaStmt.MapGet = MapGet;

class RemoteMapGet extends ScillaStmt {
    /**
     * @param {String} x
     * @param {String} adr
     * @param {String} m
     * @param {String[]} klist
     * @param {Bool} fetchval
     */
    constructor(x, adr, m, list, fetchval) {
        super();
        this.x = x;
        this.adr = adr; 
        this.m = m;
        this.list = list;
        this.fetchval = fetchval;
    }
}
ScillaStmt.RemoteMapGet = RemoteMapGet;

class ReadFromBC extends ScillaStmt {
    /**
     * @param {String} x
     * @param {BCInfoQuery} bf
     */
    constructor(x, bf) {
        super();
        this.x = x;
        this.bf = bf;
    }
}
ScillaStmt.ReadFromBC = ReadFromBC;

class TypeCast extends ScillaStmt {
    /**
     * @param {String} x
     * @param {String} r
     * @param {Stype} t
     */
    constructor(x, r, t) {
        super();
        this.x = x;
        this.r = r;
        this.t = t;
    }
}
ScillaStmt.TypeCast = TypeCast;

export class Clause {
    /**
     * 
     * @param {Pattern} pat 
     * @param {ScillaStmt[]} stmts 
     */
    constructor(pat, stmts) {
        this.pat = pat;
        this.stmts = stmts;
    }
}
ScillaStmt.Clause = Clause;

class MatchStmt extends ScillaStmt {
    /**
     * @param {String} x
     * @param {Clause[]} clauses
     */
    constructor(x, clauses) {
        super();
        this.x = x;
        this.clauses = clauses;
    }
}
ScillaStmt.MatchStmt = MatchStmt;


class AcceptPayment extends ScillaStmt {}
ScillaStmt.AcceptPayment = AcceptPayment;

class SendMsgs extends ScillaStmt {
    /**
     * @param {String} ms
     */
    constructor(ms) {
        super();
        this.ms = ms;
    }
}
ScillaStmt.SendMsgs = SendMsgs;

class CreateEvnt extends ScillaStmt {
    /**
     * @param {String} params
     */
    constructor(params) {
        super();
        this.params = params;
    }
}
ScillaStmt.CreateEvnt = CreateEvnt;


class CallProc extends ScillaStmt {
    /**
     * @param {String} p
     * @param {String[]} actuals
     */
    constructor(p, actuals) {
        super();
        this.p = p;
        this.actuals = actuals;
    }
}
ScillaStmt.CallProc = CallProc;

class Iterate extends ScillaStmt {
    /**
     * @param {String} l
     * @param {String} p
     */
    constructor(l, p) {
        super();
        this.l = l;
        this.p = p;
    }
}
ScillaStmt.Iterate = Iterate;

class Throw extends ScillaStmt {
    /**
     * @param {Option String} eopt
     */
    constructor(eopt) {
        super();
        this.eopt = eopt;
    }
}
ScillaStmt.Throw = Throw;

/* ******************************************************
 *
 * Scilla Contracts
 *
 ****************************************************** */

export class Field {
    /**
     * @param {String} name;
     * @param {SType} type;
     * @param {ScillaExpr} e;
     */
    constructor(name, type, e) {
        this.name = name;
        this.type = type;
        this.e = e;
    }
}

export class ComponentType {}

//Transition component
export class CompTrans extends ComponentType {}
ComponentType.CompTrans = CompTrans;

//Procedure component 
export class CompProc extends ComponentType {}
ComponentType.CompProc = CompProc;

export class Component {
    /**
     * @param {ComponentType} compType;
     * @param {String} compName;
     * @param {(String * SType)[]} compParams;
     * @param {ScillaStmt[]} compBody;
     */
    constructor(compType, compName, compParams, compBody) {
        this.compType = compType;
        this.compName = compName;
        this.compParams = compParams;
        this.compBody = compBody;
    }
}

export class ContractDef {
    /**
     * @param {String} cname
     * @param {SType[]} cArgTypes
     */
    constructor(cname, cArgTypes) {
        this.cname = cname;
        this.cArgTypes = cArgTypes;
    }
}

export class LibEntry {}

class LibVar extends LibEntry {
    /**
     * @param {String} x
     * @param {Option SType} tyopt
     * @param {ScillaExpr} e
     */
    constructor(x, tyopt, e) {
        super();
        this.x = x;
        this.tyopt = tyopt;
        this.e = e;
    }
}
LibEntry.LibVar = LibVar;

class LibType extends LibEntry {
    /**
     * @param {String} x
     * @param {ContractDef[]} c
     */
    constructor(x, c) {
        super();
        this.x = x;
        this.c = c;
    }
}
LibEntry.LibType = LibType;

export class Library {
    /**
     * @param {String} lname
     * @param {LibEntry[]} lentries
     */
    constructor(lname, lentries) {
        this.lname = lname;
        this.lentries = lentries;
    }
}

export class Contract {
    /**
     * @param {String} cname
     * @param {(Strign * SType)[]} cparams
     * @param {ScillaExpr} cconstraint
     * @param {Fields[]} cfields
     * @param {Component[]} ccomps
     */
    constructor(cname, cparams, cconstraint, cfields, ccomps) {
        this.cname = cname;
        this.cparams = cparams;
        this.cconstraint = cconstraint;
        this.cfields = cfields;
        this.ccomps = ccomps;
    }
}

//Contract module: library + contract definition
export class Cmodule {
    /**
     * @param {Int} smver
     * @param {Option Library} libs 
     * @param {(String * Option String)[]} elibs;
     * @param {Contract} contr
     */
    constructor(smver, libs, elibs, contr) {
        this.smver = smver;
        //Scilla major version of the contract.
        this.libs = libs;
        //lib functions defined in the module
        this.elibs = elibs;
        //List of imports / external libs with an optional namespace.
        this.contr = contr;
    }
}

//Library module: 
export class Lmodule {
    /**
     * @param {Int} smver
     * @param {Option Library} libs 
     * @param {(String * Option String)[]} elibs;
     * @param {Contract} contr
     */
    constructor(smver, libs, elibs, contr) {
        this.smver = smver;
        this.libs = libs;
        this.elibs = elibs;
    }
}

export class LibTree {
    /**
     * @param {Library} libn
     * @param {LibTree[]} deps
     */
    constructor(libn, deps) {
        this.libn = libn;
        this.deps = deps;
    }
}