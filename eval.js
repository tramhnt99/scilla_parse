// Evaluator Class
// https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
import antlr4 from 'antlr4';
import fs from 'fs';
import SP from './scillaParser.js'; //short for ScillaParser
import ST from './types.js'; //ScillaTypes
import {parser} from './test.js';
import { get } from 'http';

export default class EvalVisitor {
    constructor(env) {
        this.globalEnv = env;
    }

    lookup(x, env) {
        return env[x]
            ? env[x]
            : console.log("Look up didn't find " + x);
    }

    setEnv(k, v, env) {
        console.log("Binding " + k + " with " + v);
        env[k] = v;
        return env;
    }

    getGlobalEnv() {
        return this.globalEnv;
    }

    wrap(value, env) {
        console.log("Wrapping value " + value);
        console.log(env);
        return {value: value, env: env};
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


    substTypeInExpr(tvar, tp, expr) {
        

    }

    visitSid(ctx, env) {
        // console.log("Looking for SID " + ctx.getText());
        return ctx instanceof SP.SidNameContext
            ? this.visitID(ctx.identifier(), env)
            : ctx instanceof SP.SidSPIDContext
            ? undefined 
            : ctx instanceof SP.SidCidContext
            ? undefined 
            : console.log("visitSid: Coulnd't match sid!");
    }

    visitID(ctx, env) {
        // console.log("Looking for ID " + ctx.getText());
        return ctx.ID().getText()
            ? this.wrap(this.lookup(ctx.ID().getText(), env), env)
            : console.log("visitID: Couldn't find ID");
    }

    visitLet(ctx, env) {
        if (!ctx) {return;}
        const x = ctx.identifier().getText();
        const value = this.visitSimpleExp(ctx.f, env);
        const env_ = this.setEnv(x, value.value, env);
        return this.visitExp(ctx.exp(), env_);
    }

    //Returns a closure
    visitFun(ctx, env) {
        const param = ctx.identifier();
        const clo = 
            function(x) {
                const newVisitor = new EvalVisitor(env);
                const env_ = newVisitor.setEnv(param, x, env);
                return newVisitor.visitExp(ctx.exp(), env_);
            };
        return this.wrap(clo, env);
    }

    //Note, this is written in a slightly convoluted way because the keyword
    //`this` doesn't operate properly inside `reduce` since reduce is also
    //a closure.
    visitApp(ctx, env) {
        console.log("Env at visitApp ");
        console.log(env);
        const func = this.visitSid(ctx.f_var, env);
        const argsLit = ctx.args.map(arg => this.lookup(arg.getText(), env));

        //Make a seperate copy of env, avoid issues with shadowing
        //local env doesn't become global
        const fullyAppliedRes = argsLit.reduce(function(res, arg) {
                //Apply closure to arg
                const partialRes = res.value(arg);
                return partialRes;
            }, func);
        return fullyAppliedRes;
    }

    visitAtomicExp(ctx, env) {
        console.log("oh atomic exp!");
        return ctx.a instanceof SP.AtomicLitContext //Literal
            ? this.visitLiteral(ctx.a.lit(), env)
            : ctx.a instanceof SP.AtomicSidContext //Indentifier TODO
            ? this.visitSid(ctx.a.sid(), env)
            : console.log("visitAtomicExp: Couldn't match atomic expression!");
    }

    visitMatchExp(ctx, env) {
        const value = this.lookup(ctx.sid());
        for (const clause of ctx.exp_pm_clause()) {
            const binds = this.matchClause(value, clause.pattern());
            if (binds === undefined) {} //continue
            else {
                //We update env for the branch
                let env_ = env;
                for (let k in binds) {
                    env_ = this.setEnv(k, binds[k], env_);
                }
                this.visitExp(clause.exp(), env_);
            }
        }
    }

    visitTFun(ctx, env) {

    }

    visitLiteral(ctx, env) {
        // console.log("oh literal! " + ctx.getText());
        const val =  ctx instanceof SP.LitCidContext
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
        return this.wrap(val, env)
    }
    
    visitSimpleExp(ctx, env) {
        if (!ctx) {return;}
        return ctx instanceof SP.LetContext
            ? this.visitLet(ctx, env)
            : ctx instanceof SP.AtomicContext
            ? this.visitAtomicExp(ctx, env)
            : ctx instanceof SP.FunContext
            ? this.visitFun(ctx, env)
            : ctx instanceof SP.AppContext
            ? this.visitApp(ctx, env)
            : ctx instanceof SP.MessageContext
            ? console.log("TODO: Resolve Message")
            : ctx instanceof SP.BuiltinContext
            ? console.log("TODO: Builtin") //All builtins will be saved as closures
            : ctx instanceof SP.ConstructorContext
            ? console.log("TODO: DataConstructorApp")
            : ctx instanceof SP.MatchContext
            ? this.visitMatchExp(ctx, env)
            : ctx instanceof SP.TFunContext
            ? this.visitTFun(ctx, env)
            : undefined;
    }

    visitExp(ctx, env) {
        return (this.visitSimpleExp(ctx.simple_exp(), env));
    }

    visitChildren(ctx) {
        if (!ctx) {return;}
        return ctx instanceof SP.Simple_expContext
            ? console.log(this.visitSimpleExp(ctx, {}))
            : undefined;
    }

}