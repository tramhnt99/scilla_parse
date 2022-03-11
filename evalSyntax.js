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
            : this.printError("lookup", "didn't find " + x);
    }

    setEnv(k, v, env) {
        // console.log("Binding " + k + " with " + v);
        env[k] = v;
        return env;
    }

    getGlobalEnv() {
        return this.globalEnv;
    }

    wrap(value, env) {
        // console.log("Wrapping value " + value);
        return {value: value, env: env};
    }

    printError(funcname, msg) {
        console.log("[ERROR]" + funcname + ": " + msg);
    }

    //Returns bindings
    matchClause(v, p) {
        if (p instanceof SP.WildcardContext) {
            return {};
        } 
        if (p instanceof SP.BinderContext) {
            const x = p.x;
            return {x : v}
        }
        if (p instanceof SP.ConstructorContext) {
            return; //TODO
        }
        this.printError("matchClause", "Didn't match match clause.");
        return undefined;
    }

    //Takes in a context that can become a type
    //or if already turned into ST, then just return
    antlrTypetoScillaType(ctx){
        if (ctx instanceof ST) {return ctx;}
        else {

        }

    }

    substTypeInLit(tvar, type, lit) {
        //TODO: Handles only Map and ADT literals
        //Update the context - global
        return;
    }

    substTypeInType(tvar, type, t) {
        //TODO: substitite type in type
        //Update the context t - returns unit.
        return;
    }

    //Since we will be returning updated contex in this case,
    //we must only use constructor fields instead of methods like identifier()
    //in the rest of the code
    //Return updated Expr
    substTypeInExpr(tvar, tp, expr) {
        if (expr instanceof SP.AtomicContext) {
            //If Var, change nothing
            if (expr.a instanceof SP.AtomicSidContext) {return expr;} 

            //If Lit, update the lit
            if (expr.a instanceof SP.AtomicLitContext) {
                substTypeInLit(tvar, tp, expr.a.l);
                return expr;
            }
            this.printError("substTypeInExpr", "Couldn't match Atomic");
            return expr;
        }

        if (expr instanceof SP.FunContext) {
            //Update type in fun type - Note: doesn't do anything yet
            this.substTypeInType(tvar, tp, expr.ty);
            this.substTypeInExpr(tvar, tp, expr.e);
            return expr;
        }

        if (expr instanceof SP.TFunContext) {
            if (expr.i.getText() === tvar) {
                return expr;
            }
            else {
               this.substTypeInExpr(tvar, tv, expr.e); 
               return expr;
            }
        }

        if (expr instanceof SP.ConstructorContext) {
            return expr; //TODO: implement constructors
        }

        if (expr instanceof SP.AppContext) {return expr;}
        if (expr instanceof SP.BuiltinContext) {return expr;}
        if (expr instanceof SP.MessageContext) {return expr;}

        if (expr instanceof SP.LetContext) {
            if (expr.ty !== undefined) {
                this.substTypeInType(tvar, tp, expr,ty);
            }
            this.substTypeInExpr(tvar, tp, expr.f); //lhs
            this.substTypeInExpr(tvar, tp, expr.e.f); //rhs
            return expr;
        }

        if (expr instanceof SP.TAppContext) {
            this.substTypeInType(tvar, tp, expr.f);
            return expr;
        }
    }

    visitCid(ctx, env) {
        return ctx instanceof SP.CidCidContext
            ? this.visitCID(ctx.id, env)
            : ctx instanceof SP.CidBystrContext
            ? console.log("TODO: CID Bystr")
            : this.printError("visitCid", "Couldn't match cid type");
    }

    visitSid(ctx, env) {
        // console.log("Looking for SID " + ctx.getText());
        return ctx instanceof SP.SidNameContext
            ? this.visitID(ctx.name, env)
            : ctx instanceof SP.SidSPIDContext
            ? undefined 
            : ctx instanceof SP.SidCidContext
            ? undefined 
            : this.printError("visitSid", "Couldn't match sid");
    }

    visitCID(ctx, env) {
        return ctx.CID().getText()
            ? this.wrap(this.lookup(ctx.CID().getText(), env), env)
            : this.printError("visitCID", "Couldn't match CID");
    }

    visitID(ctx, env) {
        // console.log("Looking for ID " + ctx.getText());
        return ctx.ID().getText()
            ? this.wrap(this.lookup(ctx.ID().getText(), env), env)
            : this.printError("visitID", "Couldn't match ID");
    }

    visitLet(ctx, env) {
        if (!ctx) {return;}
        const x = ctx.x.getText();
        const value = this.visitSimpleExp(ctx.f, env);
        const env_ = this.setEnv(x, value.value, env);
        return this.visitExp(ctx.e, env_);
    }

    //Returns a closure
    visitFun(ctx, env) {
        if (ctx === undefined) {
            this.visitExpprintError("visitFun", "Ctx is undefined.");
        }

        if (env === undefined) {
            this.printError("visitFun", "Env is undefined.");
        }

        const param = ctx.id.getText();
        const clo = 
            function(x) {
                const newVisitor = new EvalVisitor(env);
                const env_ = newVisitor.setEnv(param, x, env);
                return newVisitor.visitExp(ctx.e, env_);
            };
        return this.wrap(clo, env);
    }

    //Note, this is written in a slightly convoluted way because the keyword
    //`this` doesn't operate properly inside `reduce` since reduce is also
    //a closure.
    visitApp(ctx, env) {
        const func = this.visitSid(ctx.f_var, env);
        const argsLit = ctx.args.map(arg => this.lookup(arg.getText(), env));
        const fullyAppliedRes = argsLit.reduce(function(res, arg) {
                //Apply closure to arg
                const partialRes = res.value(arg);
                return partialRes;
            }, func);
        return fullyAppliedRes;
    }

    visitAtomic(ctx, env) {
        // console.log("oh atomic exp!");
        return ctx.a instanceof SP.AtomicLitContext //Literal
            ? this.visitLiteral(ctx.a.l, env)
            : ctx.a instanceof SP.AtomicSidContext //Indentifier TODO
            ? this.visitSid(ctx.a.i, env)
            : this.printError("visitAtomic", "Couldn't match atomic expression.")
    }

    visitMatchExp(ctx, env) {
        const value = this.lookup(ctx.x_sid);
        for (const clause of ctx.cs) {
            const binds = this.matchClause(value, clause.p);
            if (binds === undefined) {} //continue
            else {
                //We update env for the branch
                let env_ = env;
                for (let k in binds) {
                    env_ = this.setEnv(k, binds[k], env_);
                }
                this.visitExp(clause.e, env_);
            }
        }
    }

    visitTFun(ctx, env) {
        const tvar = ctx.TID().getText();
        const clo = 
            function(tp) {
                const newVisitor = new EvalVisitor(env);
                const exp = newVisitor.substTypeInExpr(tvar, tp, ctx.e.f);
                return newVisitor.visitSimpleExp(exp, env);
            }
        return this.wrap(clo, env);
    }

    visitTApp(ctx, env) {
        // console.log("At Tapp for " + ctx.getText());
        const tfunc = this.visitSid(ctx.f, env);
        const argsLit = ctx.targs.map(targ => targ.getText());

        const fullyAppliedTRes = argsLit.reduce(function(tres, arg) {
            //Apply closure to arg
            const partialRes = tres.value(arg);
            return partialRes;
        }, tfunc);

        return fullyAppliedTRes;
    }

    visitLiteral(ctx, env) {
        // console.log("oh literal! " + ctx.getText());
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
            ? ctx.s.getText() //string
            : ctx instanceof SP.LitEmpContext
            ? undefined //empty map TODO
            : ctx instanceof SP.LitBoolContext
            ? (ctx.b.getText() === "True")
            : this.printError("visitLiteral", "Couldn't match literal.");
        return this.wrap(val, env)
    }
    
    visitSimpleExp(ctx, env) {
        if (!ctx) {return;}
        return ctx instanceof SP.LetContext
            ? this.visitLet(ctx, env)
            : ctx instanceof SP.AtomicContext
            ? this.visitAtomic(ctx, env)
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
            : ctx instanceof SP.TAppContext
            ? this.visitTApp(ctx, env)
            : undefined;
    }

    visitExp(ctx, env) {
        return (this.visitSimpleExp(ctx.f, env));
    }

    visitChildren(ctx) {
        if (!ctx) {return;}
        const syntaxTree = {}
        return ctx instanceof SP.Simple_expContext
            ? console.log(
                this.visitSimpleExp(ctx, {}))
            : undefined;
    }

}