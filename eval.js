// Evaluator Class
// https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
import antlr4 from 'antlr4';
import fs from 'fs';
import SP from './scillaParser.js'; //short for ScillaParser
import ST from './types.js'; //ScillaTypes
import {parser} from './test.js';
import { get } from 'http';

// const visitor = new Visitor();
export default class EvalVisitor {
    constructor(env) {
        this.globalEnv = env;
    }

    lookup(x) {
        return this.globalEnv[x];
    }

    setEnv(k, v) {
        console.log("Binding " + k + " with " + v);
        this.globalEnv[k] = v;
        return;
    }

    getEnv() {
        return this.globalEnv;
    }

    //Returns bindings
    matchClause(v, p) {
        if (p instanceof SP.WildcardContext) {
            return {};
        } 
        if (p instanceof SP.BinderContext) {
            const x = p.identifier;
            return {x : v}
        }
        if (p instanceof SP.ConstructorContext) {
            return; //TODO
        }
        console.log("matchClause: Didn't match match clause");
        return undefined;
    }

    visitLet(ctx) {
        if (!ctx) {return;}
        const x = ctx.identifier().getText();
        const value = this.visitSimpleExp(ctx.f);
        this.setEnv(x, value);
        return this.visitExp(ctx.exp());
    }

    //Returns a closure
    visitFun(ctx) {
        const param = ctx.identifier();
        const clo = 
            function(x, env) {
                const newVisitor = new EvalVisitor(env);
                newVisitor.setEnv(param, x);
                return {res: newVisitor.visitExp(ctx.exp()),
                        env: newVisitor.getEnv()};
            };
        return clo;
    }

    //Note, this is written in a slightly convoluted way because the keyword
    //`this` doesn't operate properly inside `reduce` since reduce is also
    //a closure.
    visitApp(ctx) {
        console.log(ctx.f_var.getText());
        const func = this.visitSid(ctx.f_var);
        const argsLit = ctx.args.map(arg => this.lookup(arg));

        //Make a separate copy of env, avoid issues with shadowing
        //local env doesn't become global
        var env = Object.assign({}, this.getEnv());
        const fullyAppliedRes = argsLit.reduce(function(res, arg) {
                //Apply closure to argument
                const partialRes = res(arg, env);
                env = partialRes.env;
                return partialRes.res;
            }, func);
        return fullyAppliedRes;
    }

    visitAtomicExp(ctx) {
        console.log("oh atomic exp!");
        return ctx.a instanceof SP.AtomicLitContext //Literal
            ? this.visitLiteral(ctx.a.lit())
            : ctx.a instanceof SP.AtomicSidContext //Indentifier TODO
            ? this.visitSid(ctx.a.sid())
            : console.log("visitAtomicExp: Couldn't match atomic expression!");
    }

    visitMatchExp(ctx) {
        const value = this.lookup(ctx.sid());
        for (const clause of ctx.exp_pm_clause()) {
            const found = this.matchClause(value, clause.pattern());
            if (found === undefined) {} //continue
            else {
                //We update env for the branch
                var env = Object.assign({}, this.getEnv());
            }
        }
    }

    visitSid(ctx) {
        // console.log("Looking for SID " + ctx.getText());
        return ctx instanceof SP.SidNameContext
            ? this.visitID(ctx.identifier())
            : ctx instanceof SP.SidSPIDContext
            ? undefined 
            : ctx instanceof SP.SidCidContext
            ? undefined 
            : console.log("visitSid: Coulnd't match sid!");
    }

    visitID(ctx) {
        console.log("Looking for ID " + ctx.getText());
        return ctx.ID().getText()
            ? this.lookup(ctx.ID().getText())
            : console.log("visitID: Couldn't find ID");
    }

    visitLiteral(ctx) {
        // console.log("oh literal! " + ctx.getText());
        return ctx instanceof SP.LitCidContext
            ? undefined //cid
            : ctx instanceof SP.LitIntContext
            ? parseInt(ctx.int_().getText()) //integer
            : ctx instanceof SP.LitBNumContext
            ? parseInt(ctx.NUMBER().getText()) //BNUM number (> 0)
            : ctx instanceof SP.LitNumContext
            ? parseInt(ctx.NUMBER().getText()) //number
            : ctx instanceof SP.LitHexContext
            ? undefined //hex TODO
            : ctx instanceof SP.LitStringContext
            ? ctx.s.getText() //string
            : ctx instanceof SP.LitEmpContext
            ? undefined //empty map TODO
            : ctx instanceof SP.LitBoolContext
            ? (ctx.b.getText() === "True")
            : console.log("visitLiteral: Couldn't match literal");
    }
    
    visitSimpleExp(ctx) {
        if (!ctx) {return;}
        return ctx instanceof SP.LetContext
            ? this.visitLet(ctx)
            : ctx instanceof SP.AtomicContext
            ? this.visitAtomicExp(ctx)
            : ctx instanceof SP.FunContext
            ? this.visitFun(ctx)
            : ctx instanceof SP.AppContext
            ? this.visitApp(ctx)
            : ctx instanceof SP.MessageContext
            ? console.log("TODO: Resolve Message")
            : ctx instanceof SP.BuiltinContext
            ? console.log("TODO: Builtin") //All builtins will be saved as closures
            : ctx instanceof SP.MatchContext
            ? this.visitMatchExp(ctx)
            : undefined;
    }

    visitExp(ctx) {
        return (this.visitSimpleExp(ctx.simple_exp()));
    }

    visitChildren(ctx) {
        if (!ctx) {return;}
        return ctx instanceof SP.Simple_expContext
            ? console.log(this.visitSimpleExp(ctx))
            : undefined;
    }

}