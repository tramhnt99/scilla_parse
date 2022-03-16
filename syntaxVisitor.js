// Generator for custom syntax constructed when traversing through
// the ANTLR AST
// https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
import SP from './scillaParser.js'; //short for ScillaParser
import ScillaType from './types.js';
import { Let, Fun, App, Atomic, Literal, Var, Builtin, Message, Match,
DataConstructorApp, TFun, TApp, Pattern, ExpPmClause, ArgPattern } from './syntax.js';

const ST = new ScillaType();

export default class SyntaxVisitor {
    visitCid(ctx) {
        return ctx instanceof SP.CidCidContext
            ? this.visitCID(ctx.id)
            : ctx instanceof SP.CidBystrContext
            ? this.visitCIDBystr(ctx.bystr)
            : this.printError("visitCid", "Couldn't match cid type");
    }

    visitSid(ctx) {
        return ctx instanceof SP.SidNameContext
            ? this.visitID(ctx.name)
            : ctx instanceof SP.SidSPIDContext
            ? undefined 
            : ctx instanceof SP.SidCidContext
            ? undefined 
            : this.printError("visitSid", "Couldn't match sid");
    }

    visitScid(ctx) {
        // need to check for context?
        return ctx.getText();
    }

    visitCIDBystr(ctx) {
        return ctx.BYSTR().getText()
            ? ctx.BYSTR().getText()
            :  this.printError("visitCIDBystr", "Couldn't match CIDBystr");
    }

    visitCID(ctx) {
        return ctx.CID().getText()
            ? ctx.CID().getText()
            : this.printError("visitCID", "Couldn't match CID");
    }

    visitID(ctx) {
        // console.log("Looking for ID " + ctx.getText());
        return ctx.ID().getText()
            ? ctx.ID().getText()
            : this.printError("visitID", "Couldn't match ID");
    }

    visitWildcard(ctx) {
        return ctx.getText();
    }

    visitArgPattern(ctx) {
        if (ctx instanceof SP.ArgPatternWildcardContext) {
            return new ArgPattern(this.visitWildcard(ctx), null, null, null);
        } else if (ctx instanceof SP.ArgPatternBinderContext) {
            return new ArgPattern(null, this.visitID(ctx.x), null, null);
        } else if (ctx instanceof SP.ArgPatternConstructorContext) {
            return new ArgPattern(null, null, this.visitScid(ctx.c), null);
        } else if (ctx instanceof SP.ArgPatternPatternContext) {
            return new ArgPattern(null, null, null, this.visitPattern(ctx.p))
        }
    }

    visitBuiltinArgs(ctx) {
        // console.log(ctx.xs)
        // console.log(this.visitSid(ctx.args))
        return this.visitSid(ctx.args)
        // console.log(ctx.args.getText())
        // console.log(ctx.LPAREN())
    }

    visitExpPmClause(ctx) {
        const p = this.visitPattern(ctx.p)
        const e = this.visitExp(ctx.e)
        return new ExpPmClause(p, e)
    }

    visitPattern(ctx) {
        if (ctx instanceof SP.WildcardContext) {
            return new Pattern(this.visitWildcard(ctx), null, null, null);
        } else if (ctx instanceof SP.BinderContext) {
            return new Pattern(null, this.visitID(ctx.x), null, null);
        } else if (ctx instanceof SP.ConstructorContext) {
            const c = this.visitScid(ctx.c)
            const ps = ctx.ps !== null ? this.visitArgPattern(ctx.ps) : null;
            return new Pattern(null, null, c, ps);
        }
    }

    visitLet(ctx) {
        if (!ctx) {return;}
        const x = ctx.x.getText();
        const type = ctx.ty !== null ? ST.generateSType(ctx.ty) : null;
        const value = this.visitSimpleExp(ctx.f);
        return new Let(x, type, value, this.visitExp(ctx.e));
    }

    //Returns a closure
    visitFun(ctx) {
        if (ctx === undefined) {
            this.visitExpprintError("visitFun", "Ctx is undefined.");
        }
        const param = ctx.id.getText();
        const type = ST.generateSType(ctx.ty)
        const expr = this.visitExp(ctx.e)

        return new Fun(param, type, expr);
    }

    visitApp(ctx) {
        const func = this.visitSid(ctx.f_var);
        const argsLit = ctx.args.map(arg => this.visitSid(arg))

        return new App(func, argsLit);
    }

    visitAtomic(ctx) {
        return ctx.a instanceof SP.AtomicLitContext
            ? new Literal(this.visitLiteral(ctx.a.l))
            : ctx.a instanceof SP.AtomicSidContext
            ? new Var(this.visitSid(ctx.a.i))
            : this.printError("visitAtomic", "Couldn't match atomic expression.")
    }

    visitMessage(ctx) {
        const es = ctx.es.map((pair)=>{
            return pair.l !== null
            ? {i: this.visitSid(pair.i), l: this.visitLiteral(pair.l)}
            : pair.v !== null
            ? {i: this.visitSid(pair.i), v: this.visitSid(pair.v)}
            : this.printError("visitMessage", "Message not defined correctly.")
        })
        return new Message(es);
    }

    visitBuiltin(ctx) {
        const id = this.visitID(ctx.b);
        const typeArgs = ctx.targs.map(targ => targ.ts !== null ? ST.resolveTArg(targ) : targ.getText());
        const builtinArgs = this.visitBuiltinArgs(ctx.xs);

        return new Builtin(id, typeArgs, builtinArgs);
    }

    visitDataConstructorApp(ctx) {
        const c = this.visitScid(ctx.c);
        const targ =ctx.ts.getText();
        const args = ctx.args.map((arg) => this.visitSid(arg));
        
        return new DataConstructorApp(c, targ, args);
    }

    visitMatchExp(ctx) {
        const x_sid = this.visitSid(ctx.x_sid);
        const cs = ctx.cs.map((clause) => {
            const { p, e } = this.visitExpPmClause(clause)
            const pattern = {
                p: p,
                e: e,
            }
            return pattern
        });
        return new Match(x_sid,cs)
    }

    visitTFun(ctx) {
        const tvar = ctx.TID().getText();

        return new TFun(tvar, this.visitSimpleExp(ctx.e.f));
    }

    visitTApp(ctx) {
        const tfunc = this.visitSid(ctx.f);
        const argsLit = ctx.targs.map(targ => targ.getText());

        return new TApp(tfunc, argsLit);
    }

    visitLiteral(ctx) {
        const val =  ctx instanceof SP.LitCidContext
            ? this.visitCid(ctx.i, env)
            : ctx instanceof SP.LitIntContext
            ? parseInt(ctx.i_int.getText()) //integer
            : ctx instanceof SP.LitBNumContext
            ? parseInt(ctx.i_number.getText()) //BNUM number (> 0)
            : ctx instanceof SP.LitNumContext
            ? parseInt(ctx.n.getText()) //number
            : ctx instanceof SP.LitHexContext
            ? undefined //hex TODO
            : ctx instanceof SP.LitStringContext
            ? ctx.getText() //string
            : ctx instanceof SP.LitEmpContext
            ? undefined //empty map TODO
            : ctx instanceof SP.LitBoolContext
            ? ctx.getText()//(ctx.b.getText() === "True")
            : this.printError("visitLiteral", "Couldn't match literal.");
        return val
    }
    
    visitSimpleExp(ctx) {
        if (!ctx) {return;}
        return ctx instanceof SP.LetContext
            ? this.visitLet(ctx)
            : ctx instanceof SP.AtomicContext
            ? this.visitAtomic(ctx)
            : ctx instanceof SP.FunContext
            ? this.visitFun(ctx)
            : ctx instanceof SP.AppContext
            ? this.visitApp(ctx)
            : ctx instanceof SP.MessageContext
            ? this.visitMessage(ctx)
            : ctx instanceof SP.BuiltinContext
            ? this.visitBuiltin(ctx) //All builtins will be saved as closures
            : ctx instanceof SP.DataConstructorAppContext
            ? this.visitDataConstructorApp(ctx)
            : ctx instanceof SP.MatchContext
            ? this.visitMatchExp(ctx)
            : ctx instanceof SP.TFunContext
            ? this.visitTFun(ctx)
            : ctx instanceof SP.TAppContext
            ? this.visitTApp(ctx)
            : undefined;
    }

    visitExp(ctx) {
        return (this.visitSimpleExp(ctx.f));
    }

    visitChildren(ctx) {
        if (!ctx) {return;}
        const syntaxTree = {}
        syntaxTree['program'] = this.visitSimpleExp(ctx)
        console.log(syntaxTree.program.rhs.rhs.rhs.constructor.name)
        return ctx instanceof SP.Simple_expContext
            ? console.log(
                //this.visitSimpleExp(ctx, {}), 
                syntaxTree['program'] = this.visitSimpleExp(ctx)
                )
            : undefined;

    }

}