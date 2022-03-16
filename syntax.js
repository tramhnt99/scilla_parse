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

class Pattern {}

class WildCard extends Pattern {}

class Binder extends Pattern {
    /**
     * @param {String} x
     */
    constructor(x) {
        this.x = x;
    }
}

class ConstructorPat extends Pattern {
    /**
     * @param {String} c
     * @param {Pattern[]} ps
     */
    constructor(c, ps) {
        this.c = c;
        this.ps = ps;
    }
}

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

class Clause {
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

class MatchStmt extends ScillaStmt {
    /**
     * @param {String} x
     * @param {Clause[]} clauses
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

/* ******************************************************
 *
 * Scilla Contracts
 *
 ****************************************************** */

class Field {
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

class ComponentType {}

//Transition component
class CompTrans extends ComponentType {}

//Procedure component 
class CompProc extends ComponentType {}

class Component {
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

class ContractDef {
    /**
     * @param {String} cname
     * @param {SType[]} cArgTypes
     */
    constructor(cname, cArgTypes) {
        this.cname = cname;
        this.cArgTypes = cArgTypes;
    }
}

class LibEntry {}

class LibVar extends LibEntry {
    /**
     * @param {String} x
     * @param {Option SType} tyopt
     * @param {ScillaExpr} e
     */
    constructor(x, tyopt, e) {
        this.x = x;
        this.tyopt = tyopt;
        this.e = e;
    }
}

class LibType extends LibEntry {
    /**
     * @param {String} x
     * @param {ContractDef[]} c
     */
    constructor(x, c) {
        this.x = x;
        this.c = c;
    }
}

class Library {
    /**
     * @param {String} lname
     * @param {LibEntry[]} lentries
     */
    constructor(lname, lentries) {
        this.lname = lname;
        this.lentries = lentries;
    }
}

class Contract {
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
class Cmodule {
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
class Lmodule {
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

class LibTree {
    /**
     * @param {Library} libn
     * @param {LibTree[]} deps
     */
    constructor(libn, deps) {
        this.libn = libn;
        this.deps = deps;
    }
}