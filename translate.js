/*
 *
 * Translating ATLR abstract syntax into Scilla Syntax
 *
 */

import SP from './scillaParser.js'; //short for ScillaParser
import ScillaTypes from './types.js'; //ScillaTypes
import { Cmodule, Library, ContractDef,
        Field, Component, Clause, Contract,
        Pattern as Pat,
        ComponentType as CT,
        ScillaStmt as SS,
        LibEntry as LE} from './syntax.js';
import ScillaType from './types.js';

export default class TranslateVisitor{

    constructor(){
        this.ST = new ScillaType();
    }

    printError(funcname, msg) {
        console.log("[ERROR]" + funcname + ": " + msg);
    }

    translateStmt(ctx) {
        if (ctx instanceof SP.LoadContext){
            const x = ctx.l.getText();
            const r = ctx.r.getText();
            return new SS.Load(x ,r);
        }
        if (ctx instanceof SP.RemoteFetchContext){
            if (ctx.r instanceof SP.RemoteLoadSidContext ||
                ctx.r instanceof SP.RemoteLoadSidContext) {
                const x = ctx.r.l.getText();
                const adr = ctx.r.adr_id.getText();
                const r = ctx.r.r.getText();
                return new SS.RemoteLoad(x, adr, r);
            }
            if (ctx.r instanceof SP.RemoteMapGetTrueContext) {
                const x = ctx.r.l.getText();
                const adr = ctx.r.adr_id.getText();
                const m = ctx.r.r_id.getText();
                const klist = ctx.r.keys.map(key => key.getText());
                return new SS.RemoteMapGet(x, adr, m, klist, true);
            }
            if (ctx.r instanceof SP.RemoteMapGetFalseContext) {
                const x = ctx.r.l.getText();
                const adr = ctx.r.adr_id.getText();
                const m = ctx.r.r_id.getText();
                const klist = ctx.r.keys.map(key => key.getText());
                return new SS.RemoteMapGet(x, adr, m, klist, false);
            }
            if (ctx.r instanceof SP.TypeCastContext) {
                const x = ctx.r.l.getText();
                const r = ctx.r.adr.getText();
                const t = ctx.r.t.getText();
                return new SS.TypeCast(x, r, t);
            }
        }

        if (ctx instanceof SP.StoreContext) {
            const x = ctx.l.getText();
            const r = ctx.r.getText();
            return new SS.Store(x, r);
        }

        if (ctx instanceof SP.BindContext) {
            const x = ctx.l.getText();
            const e = undefined; //TODO: expr
            return new SS.Bind(x, e);
        }

        if (ctx instanceof SP.MapUpdateContext) {
            const m = ctx.l.getText();
            const klist = ctx.keys.map(key => key.i.getText());
            const r = ctx.r.getText();
            return new SS.MapUpdate(m, klist, r);
        }

        if (ctx instanceof SP.MapUpdateDeleteContext) {
            const m = ctx.l.getText();
            const klist = ctx.keys.map(key => key.i.getText());
            return new SS.MapUpdate(m, klist, undefined);
        }

        if (ctx instanceof SP.MapGetContext) {
            const x = ctx.l.getText();
            const m = ctx.r.getText();
            const klist = ctx.keys.map(key => key.i.getText());
            return new SS.MapGet(x, m, klist, true);
        }

        if (ctx instanceof SP.MapGetExistsContext) {
            const x = ctx.l.getText();
            const m = ctx.r.getText();
            const klist = ctx.keys.map(key => key.i.getText());
            return new SS.MapGet(x, m, klist, false);
        }

        if (ctx instanceof SP.ReadFromBCContext) {
            const x = ctx.l.getText();
            const bf = ctx.c.getText(); //TODO: Create BCInfoQuery
            return new SS.ReadFromBC(x, bf);
        }

        if (ctx instanceof SP.AcceptContext) {
            return new SS.AcceptPayment();
        }

        if (ctx instanceof SP.SendContext) {
            const ms = ctx.m.getText();
            return new SS.SendMsgs(ms);
        }

        if (ctx instanceof SP.CreateEvntContext) {
            const param = ctx.m.getText();
            return new SS.CreateEvnt(param);
        }

        if (ctx instanceof SP.CallProcContext) {
            const p = ctx.p.getText();
            const actuals = ctx.args.map(arg => arg.getText());
            return new SS.CallProc(p, actuals);
        }

        if (ctx instanceof SP.IterateContext) {
            const l = ctx.l.getText();
            const p = ctx.p.getText();
            return new SS.Iterate(l, p);
        }

        if (ctx instanceof SP.ThrowContext) {
            const eopt = ctx.mopt === null ? undefined : ctx.mopt.getText();
            return new SS.Throw(eopt);
        }
        
        if (ctx instanceof SP.MatchStmtContext) {
            const x = ctx.x.getText();
            const clauses = ctx.cs.map(c => this.translateStmtPattern(c));
            return new SS.MatchStmt(x, clauses);
        }
    }

    translateStmtPattern(ctx) {
        const pat = this.translatePattern(ctx.p);
        const stmts = this.translateStmts(ctx);
        return new Clause(pat, stmts);
    }

    translatePattern(ctx) {
        if (ctx instanceof SP.WildcardContext) {
            return new Pat.WildCard();
        }
        if (ctx instanceof SP.BinderContext) {
            return new Pat.Binder(ctx.x.getText());
        }
        if (ctx instanceof SP.ConstructorContext) {
            const c = ctx.c.getText();
            const ps = ctx.ps.map(p => this.translateArgPattern(p));
            return new Pat.ConstructorPat(c, ps);
        }
    }

    translateArgPattern(ctx) {
        if (ctx instanceof SP.WildcardArgContext) {
            return new Pat.WildCard();
        }
        if (ctx instanceof SP.BinderArgContext) {
            return new Pat.Binder(ctx.x.getText());
        }
        if (ctx instanceof SP.ConstructorArgContext) {
            return new Pat.ConstructorPat(ctx.c.getText(), []);
        }
        if (ctx instanceof SP.PatternArgContext) {
            return this.translatePattern(ctx.p);
        }
        this.printError("translateArgPattern", "Couldn't match Context");
    }

    translateStmts(ctx) {
        return ctx.ss.map(s => this.translateStmt(s));
    }

    translateIdWithType(ctx) {
        const param = ctx.n.getText();
        const type = this.ST.generateSType(ctx.t.t);
        return [param, type]; 
    }

    translateField(ctx) {
        const parampair = this.translateIdWithType(ctx.iwt);
        const e = undefined; //TODO: expr
        return new Field(parampair[0], parampair[1], e);
    }

    translateComponentParams(ctx) {
        return ctx.params.map(param => this.translateIdWithType(param.iwt));
    }

    translateComp(ctx) {
        if (ctx instanceof SP.TransitionCompContext) {
            const compType = new CT.CompTrans;
            const compName = ctx.t.t.getText();
            const compParams = this.translateComponentParams(ctx.t.params);
            const compBody = ctx.t.ss.ss === null ? [] : this.translateStmts(ctx.t.ss.ss);
            return new Component(compType, compName, compParams, compBody);
        }

        if (ctx instanceof SP.ProcedureCompContext) {
            const compType = new CT.CompProc;
            const compName = ctx.p.t.getText();
            const compParams = this.translateComponentParams(ctx.p.params);
            const compBody = ctx.p.ss.ss === null ? [] :  this.translateStmts(ctx.p.ss.ss);
            return new Component(compType, compName, compParams, compBody);
        }
        this.printError("translateComp", "Didn't not match Context");
    } 

    translateContract(ctx){
        const cname = ctx.c.getText();
        const cparams = ctx.params.map(param => this.translateIdWithType(param.iwt));
        const cconstraint = undefined; //TODO: use translate expr
        const cfields = ctx.fs.map(field => this.translateField(field));
        const ccomps = ctx.comps.map(comp => this.translateComp(comp));
        return new Contract(cname, cparams, cconstraint, cfields, ccomps);
    }

    translateContractDef(ctx) {
        const cname = ctx.cid().getText();
        const cArgTypes = ctx.t.map(targ => this.ST.resolveTArg(targ));
        return new ContractDef(cname, cArgTypes);
    }

    translateLibEntry(ctx) {
        if (ctx instanceof SP.LibVarContext) {
            const x = ctx.ns.getText();
            const tyopt = ctx.t === null ? undefined : this.ST.generateSType(ctx.t);
            const e = undefined;; //TODO: Use translate expression
            return new LE.LibVar(x, tyopt, e);
        } 
        
        if (ctx instanceof SP.LibTypEmptContext) {
            const x = ctx.tname.getText();
            return new LE.LibType(x, []);
        }

        if (ctx instanceof SP.LibTypContext) {
            const x = ctx.tname.getText();
            const cntrDef = ctx.constrs.map(constr => 
                this.translateContractDef(constr));
            return new LE.LibType(x, cntrDef);
        }

        printError("translateLibEntry", "Did not match Context");
    }

    translateLibrary(ctx) {
        const lname = ctx.n.getText();
        const lentries = ctx.ls.map(libentry => 
                this.translateLibEntry(libentry)
            );
        return new Library(lname, lentries);
    }

    translateELibraries(ctx) {
        const elibs = ctx.els.map(function(importname) {
            //Import the external library by name
            if (importname instanceof SP.NoShadowELibContext) {
                [importname.c.getText(), undefined];
            } else if (importname instanceof SP.ShadowELibContext) {
                [importname.c1.getText(), importname.c2.getText()];
            }
        });
        return elibs;
    }

    translateCModule(ctx) {
        const scillaVer = parseInt(ctx.NUMBER().getText());
        var elibs = undefined;
        var libs = undefined;
        if (ctx.els !== null) {
            elibs = this.translateELibraries(ctx.els);
        }
        if (ctx.ls !== null) {
            libs = this.translateLibrary(ctx.ls);
        }
        const contract = this.translateContract(ctx.c);
        return new Cmodule(scillaVer, libs, elibs, contract);
    }

    visitChildren(ctx) {
        if (!ctx) {return;}
        return ctx instanceof SP.CmoduleContext
        ? console.log(
            this.translateCModule(ctx))
        : undefined;
    }

}