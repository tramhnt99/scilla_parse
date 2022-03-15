/*
 *
 * Translating ATLR abstract syntax into Scilla Syntax
 *
 */

import SP from './scillaParser.js'; //short for ScillaParser
import ST from './types.js'; //ScillaTypes
import { Cmodule, Library, LibEntry, Field, ComponentType, Component,

} from './syntax.js';

export default class Translatetranslateor{

    printError(funcname, msg) {
        console.log("[ERROR]" + funcname + ": " + msg);
    }

    translateStmt(ctx) {
        if (ctx instanceof SP.LoadContext){
            const x = ctx.l.getText();
            const r = ctx.r.getText();
            return new Load(x ,r);
        }
        if (ctx instanceof SP.RemoteFetchContext){
            //TODO
        }

        if (ctx instanceof SP.StoreContext) {
            const x = ctx.l.getText();
            const r = ctx.r.getText();
            return new Store(x, r);
        }

        if (ctx instanceof SP.BindContext) {
            const x = ctx.l.getText();
            const e = undefined; //TODO: expr
            return new Bind(x, e);
        }

        if (ctx instanceof SP.MapUpdateContext) {
            const m = ctx.l.getText();
            const klist = ctx.keys.map(key => key.i.getText());
            const r = ctx.r.getText();
            return new MapUpdate(m, klist, ropt);
        }

        if (ctx instanceof SP.MapUpdateDeleteContext) {
            const m = ctx.l.getText();
            const klist = ctx.keys.map(key => key.i.getText());
            return new MapUpdate(m, klist, undefined);
        }

        if (ctx instanceof SP.MapGetContext) {
            const x = ctx.l.getText();
            const m = ctx.r.getText();
            const klist = ctx.keys.map(key => key.i.getText());
            return new MapGet(x, m, klist, true);
        }

        if (ctx instanceof SP.MapGetExistsContext) {
            const x = ctx.l.getText();
            const m = ctx.r.getText();
            const klist = ctx.keys.map(key => key.i.getText());
            return new MapGet(x, m, klist, false);
        }

        if (ctx instanceof SP.ReadFromBCContext) {
            const x = ctx.l.getText();
            const bf = ctx.c.getText(); //TODO: Create BCInfoQuery
            return new ReadFromBC(x, bf);
        }

        if (ctx instanceof SP.AcceptContext) {
            return new AcceptPayment();
        }

        if (ctx instanceof SP.SendContext) {
            const ms = ctx.m.getText();
            return new SendMsgs(ms);
        }

        if (ctx instanceof SP.CreateEvntContext) {
            const param = ctx.m.getText();
            return new CreateEvnt(param);
        }

        if (ctx instanceof SP.CallProcContext) {
            const p = ctx.p.getText();
            const actuals = ctx.args.map(arg => arg.getText());
            return new CallProc(p, actuals);
        }

        if (ctx instanceof SP.IterateContext) {
            const l = ctx.l.getText();
            const p = ctx.p.getText();
            return new Iterate(l, p);
        }

        if (ctx instanceof SP.ThrowContext) {
            const eopt = ctx.mopt === null ? undefined : ctx.mopt.getText();
            return new Throw(eopt);
        }
        //TODO: RemoteMapGet, TypeCast, MatchStmt, 

    }

    translateStmts(ctx) {
        return ctx.ss.map(s => this.translateStmt(s));
    }

    translateIdWithType(ctx) {
        const param = ctx.n.getText();
        const type = SP.generateSType(ctx.t);
        return [param, type]; 
    }

    translateField(ctx) {
        const parampair = this.translateIdWithType(ctx.iwt);
        const e = undefined; //TODO: expr
        return new Field(parampair[0], parampair[1], e);
    }

    translateComponentParams(ctx) {
        return params === [] 
            ? []
            : ctx.params.map(param => translateIdWithType(param.iwt));
    }

    translateComp(ctx) {
        const compName = ctx.t.t.getText();
        const compParams = translateComponentParams(ctx.t.params);
        const compBody = ctx.ss.ss === [] ? [] : translateStmts(ctx.ss.ss);

        if (ctx instanceof TransitionComp) {
            const compType = new CompTrans;
            return new Component(compType, compName, compParams, compBody);
        }

        if (ctx instanceof ProcedureComp) {
            const compType = new CompProc;
            return new Component(compType, compName, compParams, compBody);
        }
        this.printError("translateComp", "Didn't not match Context");
    } 

    translateContract(ctx){
        const cname = ctx.c.getText();
        const cparams = ctx.params === [] ? [] :
            ctx.params.map(param => this.translateIdWithType(param.iwt));
        const cconstraint = undefined; //TODO: use translate expr
        const cfields = ctx.fs === [] ? [] : 
            ctx.fs.map(field => translateField(field));
        const ccomps = ctx.comps === [] ? [] :
            ctx.comps.map(comp => translateComp(comp));
        return new Contract(cname, cparams, cconstraint, cfields, ccomps);
    }

    translateContractDef(ctx) {
        const cname = ctx.tn.getText();
        const cArgTypes = ctx.t === [] ? [] : 
            ctx.t.map(targ => ST.resolveTArg(targ));
        return new this.translateContractDef(cname, cArgTypes);
    }

    translateLibEntry(ctx) {
        if (ctx instanceof SP.LibVarContext) {
            const x = ctx.ns.getText();
            const t = t === null ? undefined : generateSType(ctx.t);
            const e = undefined;; //TODO: Use translate expression
            return new LibVar(x, tyopt);
        } 
        
        if (ctx instanceof SP.LibTypEmptContext) {
            const x = ctx.tname.getText();
            return new LibType(x, []);
        }

        if (ctx instanceof SP.LibTypContext) {
            const x = ctx.tname.getText();
            const cntrDef = ctx.constrs.map(constr => 
                this.translateContractDef(constr));
            return new LibType(x, cntrDef);
        }

        printError("translateLibEntry", "Did not match Context");
    }

    translateLibrary(ctx) {
        const lname = ctx.n.getText();
        const lentries = ctx.ls.map(libentry => 
                translateLibEntry(libentry)
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
        const scillaVer = parseInt(ctx.cver.getText());
        var elibs = undefined;
        var libs = undefined;
        if (ctx.els !== null) {
            elibs = translateELibraries(ctx.els.els);
        }
        if (ctx.ls !== null) {
            libs = translateLibrary(ctx.ls);
        }
        const contract = translateContract(ctx.c);
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