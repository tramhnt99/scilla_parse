// Evaluator Class
// https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
import antlr4 from "antlr4";
import fs from "fs";
import SP from "./scillaParser.js"; //short for ScillaParser
// import { ScillaType as ST } from './types.js'; //ScillaTypes
import ScillaType from "./types.js";
import { parser } from "./test.js";
import { get } from "http";
import { ScillaExpr as SE, Pattern, ClauseExp } from "./syntax.js";
import exp from "constants";
import { inspect } from "util";
import SyntaxVisitor from "./syntaxVisitor.js";
import * as SL from "./literals.js";
import Builtins from "./builtins.js";
import { allowedNodeEnvironmentFlags } from "process";
import _ from "lodash";

const ST = new ScillaType();
const SV = new SyntaxVisitor();
const BI = new Builtins();

export default class Evaluator {
  constructor(env) {
    this.globalEnv = env;
  }

  lookup(x, env) {
    // console.log("lookup", env, x, env[x]);
    return _.has(env, x)
      ? env[x]
      : this.printError("lookup", "didn't find " + x);
  }

  setEnv(k, v) {
    // console.log("Binding " + k + " with " + v);
    this.globalEnv[k] = v;
  }

  getEnv() {
    return this.globalEnv;
  }

  wrap(value, env) {
    // console.log("Wrapping value " + value);
    return { value: value, env: env };
  }

  printError(funcname, msg) {
    console.log("[ERROR]" + funcname + ": " + msg);
  }

  parseJSON(env) {
    try {
      const result = JSON.parse(env);
      return result;
    } catch (err) {
      // 👇️ This runs
      console.log("Error: ", err.message);
    }
  }

  //Returns bindings
  matchClause(v, p) {
    if (p instanceof Pattern.WildCard) {
      return true;
    }
    if (p instanceof Pattern.Binder) {
      const x = p.x;
      return { x: v };
    }
    if (p instanceof Pattern.ConstructorPat) {
      console.log("ConstructorPat", p.c);
      console.log(v);
      return v === p.c;
    }
    this.printError("matchClause", "Didn't match match clause.");
    return undefined;
  }

  //Takes in a context that can become a type
  //or if already turned into ST, then just return
  antlrTypetoScillaType(ctx) {
    if (ctx instanceof ST) {
      return ctx;
    } else {
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

  //Since we will be returning updated context in this case,
  //we must only use constructor fields instead of methods like identifier()
  //in the rest of the code
  //Return updated Expr
  substTypeInExpr(tvar, tp, expr) {
    if (expr instanceof SP.AtomicContext) {
      //If Var, change nothing
      if (expr.a instanceof SP.AtomicSidContext) {
        return expr;
      }

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
      } else {
        this.substTypeInExpr(tvar, tv, expr.e);
        return expr;
      }
    }

    if (expr instanceof SP.ConstructorContext) {
      return expr; //TODO: implement constructors
    }

    if (expr instanceof SP.AppContext) {
      return expr;
    }
    if (expr instanceof SP.BuiltinContext) {
      return expr;
    }
    if (expr instanceof SP.MessageContext) {
      return expr;
    }

    if (expr instanceof SP.LetContext) {
      if (expr.ty !== undefined) {
        this.substTypeInType(tvar, tp, expr, ty);
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

  evalCid(ctx) {
    return ctx;
    // return ctx instanceof SP.CidCidContext
    //   ? this.evalCID(ctx.id)
    //   : ctx instanceof SP.CidBystrContext
    //   ? this.evalCIDBystr(ctx.bystr)
    //   : this.printError("evalCid", "Couldn't match cid type");
  }

  evalSid(ctx) {
    return ctx; // does not account for SidCid

    // console.log("Looking for SID " + ctx.getText());
    // return ctx instanceof SP.SidNameContext
    //   ? this.evalID(ctx.name)
    //   : ctx instanceof SP.SidSPIDContext
    //   ? undefined
    //   : ctx instanceof SP.SidCidContext
    //   ? undefined
    //   : this.printError("evalSid", "Couldn't match sid");
  }

  evalScid(ctx) {
    return ctx;
  }

  evalCIDBystr(ctx) {
    return ctx.BYSTR().getText()
      ? ctx.BYSTR().getText()
      : this.printError("evalCIDBystr", "Couldn't match CIDBystr");
  }

  evalCID(ctx) {
    return ctx.CID().getText()
      ? ctx.CID().getText()
      : this.printError("evalCID", "Couldn't match CID");
  }

  evalID(ctx) {
    // console.log("Looking for ID " + ctx.getText());
    return ctx;
    // return ctx.ID().getText()
    //   ? ctx.ID().getText()
    //   : this.printError("evalID", "Couldn't match ID");
  }

  evalWildcard(ctx) {
    return ctx.getText();
  }

  evalArgPattern(ctx) {
    if (ctx instanceof SP.ArgPatternWildcardContext) {
      return new ArgPattern(this.evalWildcard(ctx), null, null, null);
    } else if (ctx instanceof SP.ArgPatternBinderContext) {
      return new ArgPattern(null, this.evalID(ctx.x), null, null);
    } else if (ctx instanceof SP.ArgPatternConstructorContext) {
      // const ps = ctx.ps !== null ? this.evalArgPattern(ctx.ps) : null;
      return new ArgPattern(null, null, this.evalScid(ctx.c), null);
    } else if (ctx instanceof SP.ArgPatternPatternContext) {
      return new ArgPattern(null, null, null, this.evalPattern(ctx.p));
    }
  }

  evalBuiltinArgs(ctx) {
    return ctx.map((arg) => this.evalSid(arg));
  }

  evalExpPmClause(ctx) {
    const p = this.evalPattern(ctx.p);
    const e = this.evalExp(ctx.e);
    return new ExpPmClause(p, e);
  }

  evalPattern(ctx) {
    console.log("PAT TODO");
    // console.log(ctx);
    // if (ctx instanceof SP.WildcardContext) {
    //   return new Pattern(this.evalWildcard(ctx), null, null, null);
    // } else if (ctx instanceof SP.BinderContext) {
    //   return new Pattern(null, this.evalID(ctx.x), null, null);
    // } else if (ctx instanceof SP.ConstructorContext) {
    //   const c = this.evalScid(ctx.c);
    //   const ps = ctx.ps !== null ? this.evalArgPattern(ctx.ps) : null;
    //   return new Pattern(null, null, c, ps);
    // }
  }

  evalLet(ctx) {
    if (!ctx) {
      return;
    }
    const x = ctx.x;
    const value = this.evalSimpleExp(ctx.lhs);
    this.setEnv(x, value);
    return this.evalExp(ctx.rhs);
  }

  //Returns a closure
  evalFun(ctx) {
    if (ctx === undefined) {
      this.printError("evalFun", "Ctx is undefined.");
    }
    const param = ctx.id;
    const clo = function (x, env) {
      const newEvaluator = new Evaluator(env); // evaluate in new environment
      const env_ = newEvaluator.setEnv(param, x); // set param binding
      return newEvaluator.evalExp(ctx.e, env_);
    };
    return this.wrap(clo, _.cloneDeep(this.getEnv()));
  }

  //Note, this is written in a slightly convoluted way because the keyword
  //`this` doesn't operate properly inside `reduce` since reduce is also
  //a closure.
  evalApp(ctx) {
    const func_id = this.evalSid(ctx.f_var); // gets the identifier
    const func = this.lookup(func_id, this.getEnv());
    const argsLit = ctx.args.map((arg) => this.lookup(arg, this.getEnv()));
    // let env = Object.assign({}, this.getEnv());
    const fullyAppliedRes = argsLit.reduce(function (res, arg) {
      //Apply closure to argument
      const partialRes = res.value(arg, res.env);
      //   env = partialRes.env;
      return partialRes;
    }, func);
    return fullyAppliedRes;
  }

  evalMessage(ctx) {
    const es = ctx.es.map((pair) => {
      return pair.l !== null
        ? { i: this.evalSid(pair.i), l: this.evalLiteral(pair.l) }
        : pair.v !== null
        ? { i: this.evalSid(pair.i), v: this.evalSid(pair.v) }
        : this.printError("evalMessage", "Message not defined correctly.");
    });
    return new Message(es);
  }

  evalBuiltin(ctx) {
    const id = this.evalID(ctx.b);
    const builtinFunc = BI.parseBuiltinIdentifier(id);
    const typeArgs =
      ctx.targs !== undefined
        ? ctx.targs.map((targ) =>
            targ.ts !== null ? ST.resolveTArg(targ) : targ.getText()
          )
        : undefined;

    console.group(this.getEnv(), ctx.xs);
    const builtinArgs = this.evalBuiltinArgs(ctx.xs).map((arg) => {
      return this.lookup(arg, this.getEnv());
    });

    const builtinFuncResult = builtinArgs.reduce(function (res, arg) {
      //Apply closure to argument
      const partialRes = res(arg);
      return partialRes;
    }, builtinFunc);

    return builtinFuncResult;
  }

  evalDataConstructor(ctx) {
    console.log("datacons", ctx);
    const c = this.evalScid(ctx.c);
    const targs = ctx.ts;
    const args = ctx.args.map((arg) => this.evalSid(arg));
    return new SL.ADTValue(c, targs, args);
  }

  // evalADTConstructor(ctx)

  evalMatchExp(ctx) {
    const value = this.lookup(ctx.x, this.getEnv());
    // console.log("value", value, value.constructor.name);
    for (const clause of ctx.clauses) {
      const found = this.matchClause(value, clause.pat);
      if (found === false) {
      } //continue
      else {
        //We update env for the branch
        console.log("clause", clause);
        console.log("found", found);
        console.log(this.getEnv());
        let env = Object.assign({}, this.getEnv());
        return this.evalExp(clause.exp);
      }
    }
  }

  evalTFun(ctx) {
    const tvar = ctx.TID().getText();
    const clo = function (tp) {
      const newEvaluator = new Evaluator(env);
      const exp = newEvaluator.substTypeInExpr(tvar, tp, ctx.e.f);
      return newEvaluator.evalSimpleExp(exp, env);
    };
    return this.wrap(clo, env);
    // return new TFun(tvar, this.evalSimpleExp(ctx.e.f));
  }

  evalTApp(ctx) {
    // console.log("At Tapp for " + ctx.getText());
    const tfunc = this.evalSid(ctx.f);
    const argsLit = ctx.targs.map((targ) => targ.getText());

    // const fullyAppliedTRes = argsLit.reduce(function(tres, arg) {
    //     //Apply closure to arg
    //     const partialRes = tres.value(arg);
    //     return partialRes;
    // }, tfunc);

    // return fullyAppliedTRes;
    return new TApp(tfunc, argsLit);
  }

  // evalAtomic(ctx) {
  //   return ctx instanceof SE.Literal //Literal
  //     ? this.evalLiteral(ctx.a)
  //     : ctx instanceof SE.Var //Identifier
  //     ? this.lookup(this.evalSid(ctx.a), this.globalEnv)
  //     : this.printError("evalAtomic", "Couldn't match atomic expression.");
  // }

  evalLiteral(ctx) {
    // console.log("oh literal! ", ctx);
    return ctx;
    // const val =
    //   ctx instanceof SL.StringLit // SP.LitCidContext
    //     ? this.evalCid(ctx.s)
    //     : ctx instanceof SL.IntLit
    //     ? parseInt(ctx.i) //integer
    //     : ctx instanceof SL.UintLit
    //     ? parseInt(ctx.i) //integer
    //     : ctx instanceof SL.BNumLit // SP.LitBNumContext
    //     ? parseInt(ctx.i_number.getText()) //BNUM number (> 0)
    //     : // : ctx instanceof // SP.LitNumContext
    //     // ? parseInt(ctx.n.getText()) //number
    //     ctx instanceof SP.LitHexContext
    //     ? console.log(ctx, "HEX TODO") //hex TODOA
    //     : ctx instanceof SL.StringLit // SP.LitStringContext
    //     ? console.log("SL.StringLit TODO", ctx) //string
    //     : ctx instanceof SL.Map // SP.LitEmpContext
    //     ? console.log("SL.Map TODO", ctx) //empty map TODO
    //     : ctx instanceof SP.LitBoolContext
    //     ? ctx.getText() //(ctx.b.getText() === "True")
    //     : this.printError("evalLiteral", "Couldn't match literal.");
    // return val;
  }

  evalVar(ctx) {
    return this.lookup(this.evalSid(ctx.s), this.globalEnv);
  }

  evalSimpleExp(ctx) {
    if (!ctx) {
      return;
    }

    return ctx instanceof SE.Let
      ? this.evalLet(ctx)
      : ctx instanceof SL.ScillaLiterals
      ? this.evalLiteral(ctx)
      : ctx instanceof SE.Var
      ? this.evalVar(ctx)
      : ctx instanceof SE.Fun
      ? this.evalFun(ctx)
      : ctx instanceof SE.App
      ? this.evalApp(ctx)
      : ctx instanceof SE.Message
      ? this.evalMessage(ctx)
      : ctx instanceof SE.Builtin
      ? this.evalBuiltin(ctx) //All builtins will be saved as closures
      : ctx instanceof SE.DataConstructor
      ? this.evalDataConstructor(ctx)
      : ctx instanceof SE.Match
      ? this.evalMatchExp(ctx)
      : ctx instanceof SE.TFun
      ? this.evalTFun(ctx)
      : ctx instanceof SE.TApp
      ? this.evalTApp(ctx)
      : undefined;
  }

  evalExp(ctx) {
    return this.evalSimpleExp(ctx);
  }

  evalChildren(ctx) {
    if (!ctx) {
      return;
    }
    return ctx instanceof SE ? this.evalSimpleExp(ctx) : undefined;
  }
}
