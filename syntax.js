//Syntax of Scilla programs

//Scilla expressions
// export default class ScillaExpr {}
export class ScillaExpr {}
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
     * @param {SType} ty
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
     * @param {String[]} args 
     */
    constructor(f_var, args) {
        super();
        this.f_var = f_var;
        this.args = args;
    }
}
ScillaExpr.App = App;

export class Literal extends ScillaExpr {}

export class Var extends ScillaExpr {
    constructor(s) {
        super();
        this.s = s;
    }
}
ScillaExpr.Var = Var;


export class Builtin extends ScillaExpr {
    /**
     * 
     * @param {String} b 
     * @param {SType[]} targs 
     * @param {String[]} xs 
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
    /**
     * 
     * @param {{id: String, l: ScillaLiterals}[]
     *            or
     *          {id: String, v: String}[]
     *        } es 
     */
    constructor(es) {
        super();
        this.es = es;
    }
}
ScillaExpr.Message = Message;

export class ClauseExp {
    /**
     * @param {Pattern} pat 
     * @param {ScillaExpr} exp 
     */
    constructor(pat, exp) {
        this.pat = pat;
        this.exp = exp;
    }
}

export class Match extends ScillaExpr {
    /**
     * @param {String} x 
     * @param {ClauseExp[]} clauses 
     */
    constructor(x, clauses) {
        super();
        this.x = x;
        this.clauses = clauses;
    }
}
ScillaExpr.Match = Match;

export class DataConstructor extends ScillaExpr {
    /**
     * 
     * @param {String} c 
     * @param {SType[]} ts 
     * @param {String[]} args 
     */
    constructor(c, ts, args) {
        super();
        this.c = c;
        this.ts = ts;
        this.args = args;
    }
}
ScillaExpr.DataConstructor = DataConstructor;

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
     * @param {SType[]} targs 
     */
    constructor(f, targs) {
        super();
        this.f = f;
        this.targs = targs;
    }
}
ScillaExpr.TApp = TApp;

/* ******************************************************
 *
 * General
 *
 ****************************************************** */

//Can be returned as a result any functions
export class Error{
    constructor(error_msg) {
        this.s = error_msg;
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

export class Load extends ScillaStmt {
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

export class RemoteLoad extends ScillaStmt {
    /**
     * @param {String} x
     * @param {String} adr
     * @param {String} r
     */
    constructor(x, addr, r) {
        super();
        this.x = x;
        this.r = r;
        this.addr = addr;
    }
}
ScillaStmt.RemoteLoad = RemoteLoad;


export class Store extends ScillaStmt {
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

export class Bind extends ScillaStmt {
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

export class MapUpdate extends ScillaStmt {
    /**
     * @param {String} m
     * @param {String[]} klist
     * @param {Option String} ropt
     */
    constructor(m, klist, ropt) {
        super();
        this.m = m;
        this.klist = klist;
        this.ropt = ropt;
    }
}
ScillaStmt.MapUpdate = MapUpdate;

export class MapGet extends ScillaStmt{
    /**
     * @param {String} x
     * @param {String} m
     * @param {String[]} klist
     * @param {JS Bool} fetchval
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

export class RemoteMapGet extends ScillaStmt {
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
        this.klist = list;
        this.fetchval = fetchval;
    }
}
ScillaStmt.RemoteMapGet = RemoteMapGet;

export class BCInfoQuery {}

export class CurBlockNum extends BCInfoQuery {}

export class ChainID extends BCInfoQuery {}

export class TimeStamp extends BCInfoQuery {
    /**
     * @param {String} x 
     */
    constructor(x) {
        super();
        this.x = x;
    }
}

export class ReadFromBC extends ScillaStmt {
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

export class TypeCast extends ScillaStmt {
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

export class MatchStmt extends ScillaStmt {
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


export class AcceptPayment extends ScillaStmt {}
ScillaStmt.AcceptPayment = AcceptPayment;

export class SendMsgs extends ScillaStmt {
    /**
     * @param {String} ms
     */
    constructor(ms) {
        super();
        this.ms = ms;
    }
}
ScillaStmt.SendMsgs = SendMsgs;

export class CreateEvnt extends ScillaStmt {
    /**
     * @param {String} param
     */
    constructor(param) {
        super();
        this.param = param;
    }
}
ScillaStmt.CreateEvnt = CreateEvnt;


export class CallProc extends ScillaStmt {
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

export class Iterate extends ScillaStmt {
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

export class Throw extends ScillaStmt {
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

//Messages sent to initiate transition
export class ContrMessage {
    /**
     * 
     * @param {String} tname //Name of transition
     * @param {Uint128L} amount 
     * @param {BystrX} sender 
     * @param {(String * Literal)[]} params 
     * @param {BytrX} origin 
     */
    constructor(tname, amount, sender, params, origin) {
        this.tname = tname;
        this.amount = amount;
        this.sender = sender;
        this.params = params;
        this.origin = origin;
    }
}

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

export class LibVar extends LibEntry {
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

export class LibType extends LibEntry {
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
     * @param {(String * SType)[]} cparams
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
     * @param {(String * String * Lmodule)[]} elibs;
     * @param {Contract} contr
     */
    constructor(smver, libs, elibs, contr) {
        this.smver = smver;
        //Scilla major version of the contract.
        this.lib = libs;
        //lib functions defined in the module
        this.elibs = elibs ? elibs : [];
        //List of imports / external libs with an optional namespace.
        this.contr = contr;
    }
}

//Library module: 
export class Lmodule {
    /**
     * @param {Int} smver
     * @param {Library} lib
     * @param {(String * String Option * Lmodule)[] Option} elibs;
     */
    constructor(smver, lib, elibs) {
        this.smver = smver;
        this.lib = lib;
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