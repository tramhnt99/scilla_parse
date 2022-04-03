// Evaluator Class
// https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
import antlr4 from "antlr4";
import fs from "fs";
import SP from "./scillaParser.js"; //short for ScillaParser
// import { ScillaType as ST } from './types.js'; //ScillaTypes
import ScillaType, { Int, substTypeinType, to_type } from "./types.js";
import { get } from "http";
import { ScillaExpr as SE, Pattern, ClauseExp, TFun } from "./syntax.js";
import exp from "constants";
import { inspect } from "util";
import SyntaxVisitor from "./syntaxVisitor.js";
import * as SL from "./literals.js";
import Builtins from "./builtins.js";
import { allowedNodeEnvironmentFlags } from "process";
import _ from "lodash";
import { DataTypeDict } from "./datatypes.js";

const ST = new ScillaType();
const SV = new SyntaxVisitor();
const BI = new Builtins();
const DT = new DataTypeDict();
const SL_ = new SL.ScillaLiterals();

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

  //Returns match context
  matchClause(v, p) {
    if (p instanceof Pattern.WildCard) {
      return "Wildcard";
    }
    if (p instanceof Pattern.Binder) {
      // const x = p.x;
      // return { x: v };
      return "Binder";
    }
    if (p instanceof Pattern.ConstructorPat) {
      if (v.name === p.c) {
        return "ConstructorPat";
      }
    }
    // this.printError("matchClause", "Didn't match match clause.");
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
    if (lit instanceof SL.Map) {
      console.log("substTypeInLit Map TODO", lit);
    } else if (lit instanceof SL.ADTValue) {
      const cloneLit = new SL.ADTValue(lit.name, null, null);
      cloneLit.typl = lit.typl.map((typ) => ST.substTypeinType(typ));
      cloneLit.ll = lit.ll.map((l) => this.substTypeInLit(l));
      return cloneLit;
    } else {
      return lit;
    }
  }

  //Since we will be returning updated context in this case,
  //we must only use constructor fields instead of methods like identifier()
  //in the rest of the code
  //Return updated Expr
  substTypeInExpr(tvar, tp, expr) {
    if (expr instanceof SE.Var) {
      //If Var, change nothing
      return expr;
    }

    //If Lit, update the lit
    if (expr.a instanceof SL.ScillaLiterals) {
      this.substTypeInLit(tvar, tp, expr.a.l);
      return expr;
    }
    // this.printError("substTypeInExpr", "Couldn't match Atomic");
    // return expr;

    if (expr instanceof SE.Fun) {
      //Update type in fun type - Note: doesn't do anything yet
      substTypeinType(tvar, tp, expr.ty);
      this.substTypeInExpr(tvar, tp, expr.e);
      return expr;
    }

    if (expr instanceof SE.TFun) {
      if (expr.i === tvar) {
        return expr;
      } else {
        this.substTypeInExpr(tvar, tp, expr.e);
        return expr;
      }
    }

    if (expr instanceof SE.DataConstructor) {
      expr.ts = expr.ts.map((ty) => substTypeinType(tvar, tp, ty));
      return expr; //TODO: implement constructors
    }

    if (expr instanceof SE.App) {
      return expr;
    }
    if (expr instanceof SE.Builtin) {
      return expr;
    }
    if (expr instanceof SE.Message) {
      return expr;
    }

    if (expr instanceof SE.Let) {
      if (expr.ty !== undefined) {
        substTypeinType(tvar, tp, expr.ty);
      }
      this.substTypeInExpr(tvar, tp, expr.f); //lhs
      this.substTypeInExpr(tvar, tp, expr.e.f); //rhs
      return expr;
    }

    if (expr instanceof SE.TApp) {
      substTypeInType(tvar, tp, expr.f);
      return expr;
    }
  }

  evalCid(ctx, env) {
    return ctx;
    // return ctx instanceof SP.CidCidContext
    //   ? this.evalCID(ctx.id)
    //   : ctx instanceof SP.CidBystrContext
    //   ? this.evalCIDBystr(ctx.bystr)
    //   : this.printError("evalCid", "Couldn't match cid type");
  }

  evalSid(ctx, env) {
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

  evalScid(ctx, env) {
    return ctx;
  }

  evalCIDBystr(ctx, env) {
    return ctx.BYSTR().getText()
      ? ctx.BYSTR().getText()
      : this.printError("evalCIDBystr", "Couldn't match CIDBystr");
  }

  evalCID(ctx, env) {
    return ctx.CID().getText()
      ? ctx.CID().getText()
      : this.printError("evalCID", "Couldn't match CID");
  }

  evalID(ctx, env) {
    // console.log("Looking for ID " + ctx.getText());
    return ctx;
    // return ctx.ID().getText()
    //   ? ctx.ID().getText()
    //   : this.printError("evalID", "Couldn't match ID");
  }

  evalTArg(ctx, env) {
    return ctx;
    // return to_type(ctx);
    // if (ctx instanceof TypTarg)
  }

  evalWildcard(ctx, env) {
    return ctx.getText();
  }

  evalBuiltinArgs(ctx, env) {
    return ctx.map((arg) => this.evalSid(arg));
  }

  evalExpPmClause(ctx, env) {
    const p = this.evalPattern(ctx.p, env);
    const e = this.evalExp(ctx.e, env);
    return new ExpPmClause(p, e);
  }

  evalPattern(value, ctx, env) {
    if (ctx instanceof Pattern.WildCard) {
      //continue, Wildcard
    } else if (ctx instanceof Pattern.Binder) {
      // bind value to variable to environment
      env[ctx.x] = value;
    } else {
      // ConstructorPat case
      const adt = DT.lookUpConstr(ctx.c);
      if (adt.arity > 0) {
        for (let a = 0; a < adt.arity; a++) {
          if (value instanceof SL.ADTValue) {
            value = value.ll;
          }
          _.merge(
            env,
            this.evalPattern(this.lookup(value[a], env), ctx.ps[a], env)
          );
        }
      }
    }
    return env;
  }

  evalLet(ctx, env) {
    if (!ctx) {
      return;
    }
    const x = ctx.x;
    const value = this.evalSimpleExp(ctx.lhs, env);
    env[x] = value;
    // this.setEnv(x, value);
    return this.evalExp(ctx.rhs, env);
  }

  //Returns a closure
  evalFun(ctx, env) {
    if (ctx === undefined) {
      this.printError("evalFun", "Ctx is undefined.");
    }
    const param = ctx.id;
    const clo = (x, env) => {
      env[param] = x;
      return this.evalExp(ctx.e, env);
    };
    // const clo = function (x, env) {
    //   // const newEvaluator = new Evaluator(env); // evaluate in new environment
    //   // newEvaluator.setEnv(param, x); // set param binding
    //   // return newEvaluator.evalExp(ctx.e);
    //   console.log("param", param);
    //   env[param] = x;
    //   console.log(this.value);
    //   return E_.evalExp(ctx.e, env);
    // };
    return new SL.Clo(this.wrap(clo, _.cloneDeep(env)));
  }

  //Note, this is written in a slightly convoluted way because the keyword
  //`this` doesn't operate properly inside `reduce` since reduce is also
  //a closure.
  evalApp(ctx, env) {
    const func_id = this.evalSid(ctx.f_var, env); // gets the identifier
    const func = this.lookup(func_id, env);
    const argsLit = ctx.args.map((arg) =>
      this.lookup(this.evalSid(arg, env), env)
    );

    const fullyAppliedRes = argsLit.reduce(function (res, arg) {
      //Apply closure to argument
      const partialRes = res.clo.value(arg, res.clo.env);
      //   env = partialRes.env;
      return partialRes;
    }, func);
    return fullyAppliedRes;
  }

  evalMessage(ctx, env) {
    if (ctx === undefined) {
      this.printError("evalMessage", "Ctx is undefined.");
    }
    const messageKVPairs = ctx.es.map((pair) => {
      if (pair?.i !== undefined && pair?.l !== undefined) {
        return new SL.MsgEntry(pair.i, SL_.literalType(pair.l), pair.l);
      } else if (pair?.i !== undefined && pair?.v !== undefined) {
        pair.v = this.lookup(pair.v, env);
        return new SL.MsgEntry(pair.i, SL_.literalType(pair.v), pair.v);
      } else {
        return `Error: evalMessage ${pair}`;
      }
    });

    return new SL.Msg(messageKVPairs);
  }

  evalBuiltin(ctx, env) {
    const id = this.evalID(ctx.b);
    const builtinFunc = BI.parseBuiltinIdentifier(id);
    if (builtinFunc === undefined) {
      return `Error: ${id} is not recognised as a builtin function`;
    }
    const typeArgs =
      ctx.targs !== undefined
        ? ctx.targs.map((targ) =>
            targ.ts !== null ? ST.resolveTArg(targ) : targ.getText()
          )
        : undefined;

    const builtinArgs = this.evalBuiltinArgs(ctx.xs).map((arg) => {
      return this.lookup(arg, env);
    });
    // console.log("typeArgs", typeArgs);
    // console.log("ctx.xs", ctx.xs);
    // console.log("builtinArgs", builtinArgs);
    const builtinFuncResult = builtinArgs.reduce(function (res, arg) {
      //Apply closure to argument
      const partialRes = res(arg);
      return partialRes;
    }, builtinFunc);

    return builtinFuncResult;
  }

  evalDataConstructor(ctx, env) {
    const c = this.evalScid(ctx.c, env);
    const targs = ctx.ts;
    const args = ctx.args.map((arg) => this.evalSid(arg, env));
    return new SL.ADTValue(c, targs, args);
  }

  // NOT USED DUE TO ARGPATTERN BEING TRANSLATED TO PATTERN
  // evalArgPattern(ctx) {
  //   if (ctx instanceof Pattern.Wildcard) {
  //     return new ArgPattern(this.evalWildcard(ctx), null, null, null);
  //   } else if (ctx instanceof Pattern.Binder) {
  //     return new ArgPattern(null, this.evalID(ctx.x), null, null);
  //   } else if (ctx instanceof Pattern.ConstructorPat) {
  //     // const ps = ctx.ps !== null ? this.evalArgPattern(ctx.ps) : null;
  //     return new ArgPattern(null, null, this.evalScid(ctx.c), null);
  //   } else {
  //     return `ERROR[ evalArgPattern ]: ctx provided was ${ctx} `;
  //   }
  // }

  evalMatchExp(ctx, env) {
    const value = this.lookup(ctx.x, env);
    // Scilla requires exhaustive match statements, we do a check for this
    // current assumption is that if expecting an ADT constructor
    // only ADT constructors are used as patterns
    if (value instanceof SL.ADTValue) {
      const adt = DT.lookUpADTByConstr(value.name);
      const clausePatterns = ctx.clauses.map((clause) => clause.pat);

      // check for reachable pattern
      if (clausePatterns.length > 1) {
        for (let i = 0; i < clausePatterns.length - 1; i++) {
          if (clausePatterns[i] instanceof Pattern.WildCard) {
            return `Error: Wildcard cannot be used before last pattern in a match statement`;
          }
        }
        // check if last pattern is Wildcard, if so, we need to ensure that
        // the prior sequence of patterns come from the ADT constructor
        // and has at least 1 more pattern to match (otherwise Wildcard is
        // useless)
        if (
          clausePatterns[clausePatterns.length - 1] instanceof Pattern.WildCard
        ) {
          const typesArr = adt.tconstr.map((constr) => constr.cname);
          for (let i = 0; i < clausePatterns.length - 1; i++) {
            if (typesArr.includes(clausePatterns[i].c)) {
              _.remove(typesArr, function (a) {
                return a === clausePatterns[i].c;
              });
              // return `Error: Wildcard cannot be used before last pattern in a match statement`;
            } else {
              return `Error: Unreachable pattern or incorrect ADT constructor detected.`;
            }
          }
          if (typesArr.length === 0) {
            return `Error: Unreachable Wildcard pattern detected.`;
          }
        } else {
          // in this case, no Wildcard used, it must be that
          // the number of the clause patterns matches the
          // number of ADT constructors
          // check for arity match
          const adtConstructors = adt.tconstr;
          if (clausePatterns.length !== adtConstructors.length) {
            return `Error: Pattern matching arity mismatch for ADT`;
          }

          // check that all ADT constructors are provided as patterns to match
          for (let j = 0; j < adtConstructors.length; j++) {
            let foundFlag = false;
            for (let k = 0; k < clausePatterns.length; k++) {
              if (adtConstructors[j].cname === clausePatterns[k].c) {
                foundFlag = true;
              }
            }
            if (!foundFlag) {
              console.log(adtConstructors);
              return `Error: Invalid constructor provided in pattern match`;
            }
          }
        }
      }
    }

    for (const clause of ctx.clauses) {
      const found = this.matchClause(value, clause.pat);
      if (found === undefined) {
      } //continue
      else {
        // evalPattern returns an env for evaluating the expression
        // of the pattern
        const nextEnv = this.evalPattern(value, clause.pat, env);
        return this.evalExp(clause.exp, nextEnv);
        // return new Evaluator(env).evalExp(clause.exp);
      }
    }
  }

  evalTFun(ctx, env) {
    if (ctx === undefined) {
      this.printError("evalTFun", "Ctx is undefined.");
    }
    const tvar = ctx.i;
    const clo = (tp, env) => {
      const exp = this.substTypeInExpr(tvar, tp, ctx.e);
      return this.evalSimpleExp(exp, env);
    };
    return new SL.Clo(this.wrap(clo, _.cloneDeep(env)));
  }

  evalTApp(ctx, env) {
    // console.log("At Tapp for " + ctx.getText());
    const tfunc_id = this.evalSid(ctx.f, env);
    const tfunc = this.lookup(tfunc_id, env);
    const argsLit = ctx.targs.map((targ) => this.evalTArg(targ, env));

    const fullyAppliedTRes = argsLit.reduce(function (tres, arg) {
      //Apply closure to arg
      const partialRes = tres.clo.value(arg, tres.clo.env);

      return partialRes;
    }, tfunc);

    return fullyAppliedTRes;
    // return new TApp(tfunc, argsLit);
  }

  // evalAtomic(ctx) {
  //   return ctx instanceof SE.Literal //Literal
  //     ? this.evalLiteral(ctx.a)
  //     : ctx instanceof SE.Var //Identifier
  //     ? this.lookup(this.evalSid(ctx.a), this.globalEnv)
  //     : this.printError("evalAtomic", "Couldn't match atomic expression.");
  // }

  evalLiteral(ctx, env) {
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

  evalVar(ctx, env) {
    return this.lookup(this.evalSid(ctx.s), env);
  }

  evalSimpleExp(ctx, env) {
    if (!ctx) {
      return;
    }

    return ctx instanceof SE.Let
      ? this.evalLet(ctx, env)
      : ctx instanceof SL.ScillaLiterals
      ? this.evalLiteral(ctx, env)
      : ctx instanceof SE.Var
      ? this.evalVar(ctx, env)
      : ctx instanceof SE.Fun
      ? this.evalFun(ctx, env)
      : ctx instanceof SE.App
      ? this.evalApp(ctx, env)
      : ctx instanceof SE.Message
      ? this.evalMessage(ctx, env)
      : ctx instanceof SE.Builtin
      ? this.evalBuiltin(ctx, env) //All builtins will be saved as closures
      : ctx instanceof SE.DataConstructor
      ? this.evalDataConstructor(ctx, env)
      : ctx instanceof SE.Match
      ? this.evalMatchExp(ctx, env)
      : ctx instanceof SE.TFun
      ? this.evalTFun(ctx, env)
      : ctx instanceof SE.TApp
      ? this.evalTApp(ctx, env)
      : undefined;
  }

  evalExp(ctx, env) {
    return this.evalSimpleExp(ctx, env);
  }

  evalChildren(ctx) {
    if (!ctx) {
      return;
    }
    const env = this.getEnv();
    return ctx instanceof SE ? this.evalSimpleExp(ctx, env) : undefined;
  }
}
