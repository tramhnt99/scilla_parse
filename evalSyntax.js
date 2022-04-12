// Evaluator Class
// https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
import antlr4 from "antlr4";
import fs from "fs";
import SP from "./scillaParser.js"; //short for ScillaParser
// import { ScillaType as ST } from './types.js'; //ScillaTypes
import ScillaType, { Int, substTypeinType, to_type } from "./types.js";
import { ScillaExpr as SE, Pattern, ClauseExp, TFun, Error } from "./syntax.js";
import SyntaxVisitor from "./syntaxVisitor.js";
import * as SL from "./literals.js";
import Builtins from "./builtins.js";
import _ from "lodash";
import * as DT from "./datatypes.js";
import { isError, setError } from "./general.js";

const ST = new ScillaType();
const SV = new SyntaxVisitor();
const BI = new Builtins();

export default class Evaluator {
  constructor(env) {
    this.globalEnv = env;
    this.ADTDict = new DT.DataTypeDict();
  }

  lookup(x, env) {
    // console.log("lookup", env, x, env[x]);
    return _.has(env, x)
      ? env[x]
      : setError(new Error(`Error: environment lookup, didn't find ${x}`));
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
    // Handles only Map and ADT literals
    // Update the context - global
    if (lit instanceof SL.Map) {
      const kts = substTypeinType(tvar, type, lit.mtyp.t1);
      const vts = substTypeinType(tvar, type, lit.mtyp.t2);
      const newMap = new Map(
        new ST.MapType(ST.resolveTMapKey(kts), ST.resolveTMapValue(lts))
      );
      const ltsKeys = Object.keys(lit.kv);
      ltsKeys.forEach((lKey) => {
        const keySubst = this.substTypeInLit(tvar, type, lKey);
        const valSubst = this.substTypeInLit(tvar, type, lit.kv[lKey]);
        newMap[keySubst] = valSubst;
      });
      return newMap;
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
      return expr;
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
      this.substTypeInExpr(tvar, tp, expr.lhs); //lhs
      this.substTypeInExpr(tvar, tp, expr.rhs); //rhs
      return expr;
    }

    if (expr instanceof SE.TApp) {
      substTypeinType(tvar, tp, expr.f);
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
    return ctx;
  }

  evalTArg(ctx, env) {
    return ctx;
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

  evalLet(ctx, env) {
    const x = ctx.x;
    const value = this.evalSimpleExp(ctx.lhs, env);
    // return if evaluation of lhs produced an error

    if (isError()) {
      return;
    }
    // this.setEnv(x, value);
    // return this.evalExp(ctx.rhs, this.globalEnv);
    env[x] = value;
    return this.evalExp(ctx.rhs, env);
  }

  //Returns a closure
  evalFun(ctx, env) {
    const param = ctx.id;
    const clo = (x) => {
      const env_ = _.cloneDeep(env);
      env_[param] = x;
      return this.evalExp(ctx.e, env_);
    };
    return new SL.Clo(clo);
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

    // check for an error at lookup
    if (isError()) {
      return;
    }

    let fullyAppliedRes = argsLit.reduce(function (res, arg) {
      //Apply closure to argument
      const partialRes = res.clo(arg);
      //   env = partialRes.env;
      return partialRes;
    }, func);

    return fullyAppliedRes;
  }

  evalMessage(ctx, env) {
    const messageKVPairs = ctx.es.map((pair) => {
      if (pair?.i !== undefined && pair?.l !== undefined) {
        return new SL.MsgEntry(pair.i, SL.literalType(pair.l), pair.l);
      } else if (pair?.i !== undefined && pair?.v !== undefined) {
        pair.v = this.lookup(pair.v, env);
        return new SL.MsgEntry(pair.i, SL.literalType(pair.v), pair.v);
      } else {
        setError(new Error(`Error: ${ctx.constructor.name} ${pair}`));
        return;
      }
    });

    return new SL.Msg(messageKVPairs);
  }

  evalBuiltin(ctx, env) {
    const id = this.evalID(ctx.b);
    const builtinFunc = BI.parseBuiltinIdentifier(id);
    if (builtinFunc === undefined) {
      setError(
        new Error(`Error: ${id} is not recognised as a builtin function`)
      );
      return;
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

    // check if an error occurred during lookup
    if (isError()) {
      return;
    }

    const builtinFuncResult = builtinArgs.reduce(function (res, arg) {
      //Apply closure to argument
      const partialRes = res(arg);
      return partialRes;
    }, builtinFunc);

    return builtinFuncResult;
  }

  evalDataConstructor(ctx, env) {
    const c = this.evalScid(ctx.c, env);
    const constr = this.ADTDict.lookUpConstr(c);
    if (constr === undefined) {
      setError(
        new Error(`${ctx.constructor.name}: ADT constructor does not exist`)
      );
      return;
    }
    if (constr.arity !== ctx.args.length) {
      setError(
        new Error(`${ctx.constructor.name}: Constructor arity mismatch`)
      );
      return;
    }
    const targs = ctx.ts;
    const args = ctx.args.map((arg) =>
      this.lookup(this.evalSid(arg, env), env)
    );
    return new SL.ADTValue(c, targs, args);
  }

  evalPattern(value, ctx, env) {
    if (ctx instanceof Pattern.WildCard) {
      // no binding required
      return env;
    } else if (ctx instanceof Pattern.Binder) {
      // bind value to variable to environment
      env[ctx.x] = value;
      return env;
    } else {
      // ConstructorPat case
      const valueADTConstr = this.ADTDict.lookUpConstr(value.name);
      const ctxADTConstr = this.ADTDict.lookUpConstr(ctx.c);
      if (valueADTConstr.cname !== ctxADTConstr.cname) {
        return undefined;
      } else {
        if (value.ll.length !== ctxADTConstr.arity) {
          setError(
            new Error(
              `Error: ${ctx.constructor.name} pattern matching arity mismatch for ADT.`
            )
          );
          return undefined;
        }

        for (let a = 0; a < ctxADTConstr.arity; a++) {
          const currentADTvalue = value.ll[a];
          if (isError()) {
            return undefined;
          }
          const nextEnv = this.evalArgPattern(currentADTvalue, ctx.ps[a], env);
          if (nextEnv === undefined) {
            return undefined;
          } else {
            _.merge(env, nextEnv);
          }
        }
        return env;
      }
    }
  }

  evalArgPattern(value, ctx, env) {
    if (ctx instanceof Pattern.WildCard) {
      // no binding required
      return env;
    } else if (ctx instanceof Pattern.Binder) {
      env[ctx.x] = value;
      return env;
    } else if (ctx instanceof Pattern.ConstructorPat) {
      if (ctx.ps !== []) {
        return this.evalPattern(value, ctx, env);
      }

      if (value.name === ctx.c) {
        return env;
      } else {
        return undefined;
      }
    } else {
      // currently this case will not occur due to the syntax translation
      // layer
      return this.evalPattern(value, ctx, env);
    }
  }

  evalMatchExp(ctx, env) {
    const value = this.lookup(ctx.x, env);
    // Scilla requires exhaustive match statements, we do a check for this
    // current assumption is that if expecting an ADT constructor
    // only ADT constructors are used as patterns
    if (value instanceof SL.ADTValue) {
      const adt = this.ADTDict.lookUpADTByConstr(value.name);
      const clausePatterns = ctx.clauses.map((clause) => clause.pat);

      // check for reachable pattern
      if (clausePatterns.length > 1) {
        for (let i = 0; i < clausePatterns.length - 1; i++) {
          if (clausePatterns[i] instanceof Pattern.WildCard) {
            setError(
              new Error(
                `Error: ${ctx.constructor.name} Wildcard cannot be used before 
                last pattern in a match statement`
              )
            );
            return;
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
            } else {
              setError(
                new Error(
                  `Error: ${ctx.constructor.name} Unreachable pattern or
                  incorrect ADT constructor detected.`
                )
              );
              return;
            }
          }
          if (typesArr.length === 0) {
            setError(
              new Error(
                `Error: ${ctx.constructor.name} Unreachable Wildcard pattern
                detected.`
              )
            );
            return;
          }
        } else {
          // in this case, no Wildcard used, it must be that
          // the number of the clause patterns matches the
          // number of ADT constructors
          // check for arity match
          const checkExhaustiveADTMatch = (adtVal) => {
            const adt = this.ADTDict.lookUpADTByConstr(adtVal.name);
            const tconstr = adt.tconstr;
            for (let i = 0; i < adt.tconstr.length; i++) {
              // console.log(tconstr[i]);
            }
          };
          const typl = value.typl;
          const adtConstructors = adt; // arit
          checkExhaustiveADTMatch(value);
          // console.log("cp", clausePatterns);

          // if (clausePatterns.length !== adtConstructors.length) {
          //   setError(
          //     new Error(
          //       `Error: ${ctx.constructor.name} pattern matching arity mismatch
          //        for ADT.`
          //     )
          //   );
          //   return;
          // }

          // check that all ADT constructors are provided as patterns to match
          for (let j = 0; j < adtConstructors.length; j++) {
            let foundFlag = false;
            for (let k = 0; k < clausePatterns.length; k++) {
              if (adtConstructors[j].cname === clausePatterns[k].c) {
                foundFlag = true;
              }
            }
            if (!foundFlag) {
              setError(
                new Error(
                  `Error: ${ctx.constructor.name} Invalid constructor provided 
                  in pattern match.`
                )
              );
              return;
            }
          }
        }
      }
    }

    let matchedPat = undefined;
    let matchedExp = undefined;
    let nextEnv = undefined;
    for (const clause of ctx.clauses) {
      nextEnv = this.evalPattern(value, clause.pat, env);
      if (nextEnv !== undefined) {
        matchedPat = clause.pat;
        matchedExp = clause.exp;
        // console.log("matchedExp", matchedExp);
        return this.evalExp(matchedExp, nextEnv);
      }
    }

    // reaching this point would be due to an error
    // no clauses matched
    setError(new Error("Couldn't find a matching clause"));

    if (isError()) {
      return;
    }

    /*
    let found = undefined;
    let matchedPat = undefined;
    let matchedExp = undefined;
    for (const clause of ctx.clauses) {
      found = this.matchClause(value, clause.pat);
      if (found !== undefined) {
        matchedPat = clause.pat;
        matchedExp = clause.exp;
        break;
      }
    }
    // check if an error occurred while matching clauses
    if (found === undefined) {
      setError(new Error("matchClause: didn't find a matching clause."));
      return;
    }
    // evalPattern returns an env for evaluating the expression
    // of the pattern
    const nextEnv = this.evalPattern(value, matchedPat, env);

    // error occurred durng evaluation of pattern
    if (isError()) {
      return;
    }

    return this.evalExp(matchedExp, nextEnv);
    */
    // for (const clause of ctx.clauses) {
    //   const found = this.matchClause(value, clause.pat);
    //   // check if an error occurred while matching clauses

    //   if (found === undefined) {
    //   } //continue
    //   else {
    //     // evalPattern returns an env for evaluating the expression
    //     // of the pattern
    //     const nextEnv = this.evalPattern(value, clause.pat, env);
    //     return this.evalExp(clause.exp, nextEnv);
    //     // return new Evaluator(env).evalExp(clause.exp);
    //   }
    // }
  }

  evalTFun(ctx, env) {
    const tvar = ctx.i;
    const clo = (tp) => {
      const env_ = _.cloneDeep(env);
      const exp = this.substTypeInExpr(tvar, tp, ctx.e);
      return this.evalSimpleExp(exp, env_);
    };
    return new SL.Clo(clo);
  }

  evalTApp(ctx, env) {
    // console.log("At Tapp for " + ctx.getText());
    const tfunc_id = this.evalSid(ctx.f, env);
    const tfunc = this.lookup(tfunc_id, env);
    // check if an error occurred during lookup
    if (isError()) {
      return;
    }

    const argsLit = ctx.targs.map((targ) => this.evalTArg(targ, env));
    const fullyAppliedTRes = argsLit.reduce(function (tres, arg) {
      //Apply closure to arg
      const partialRes = tres.clo(arg);
      return partialRes;
    }, tfunc);

    return fullyAppliedTRes;
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
    // if (!(ctx instanceof SL.ADTValue)) {
    //   return ctx;
    // } else {
    //   for (let i = 0; i < ctx.ll.length; i++) {
    //     console.log("evalLit", ctx.ll, this.lookup(ctx.ll[i], env));
    //     ctx.ll[i] = this.lookup(ctx.ll[i], env);
    //     if (ctx.ll[i] instanceof SL.ADTValue) {
    //       return this.evalLiteral(ctx.ll[i], env);
    //     }
    //   }
    //   return ctx;
    // }
    return ctx;
  }

  evalVar(ctx, env) {
    const variable = this.lookup(this.evalSid(ctx.s), env);

    // check if an error occurred during lookup
    if (isError()) {
      return;
    }
    return variable;
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
