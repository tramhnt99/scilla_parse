// Evaluator Class
// https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
import ScillaType, {
  MapType,
  ppType,
  resolveTMapKey,
  resolveTMapValue,
  substTypeinType,
} from "./types.js";
import { ScillaExpr as SE, Pattern, Error } from "./syntax.js";
import SyntaxVisitor from "./syntaxVisitor.js";
import * as SL from "./literals.js";
import Builtins from "./builtins.js";
import _ from "lodash";
import * as DT from "./datatypes.js";
import {
  addLineToLogOutput,
  isError,
  logOutput,
  printLog,
  setError,
} from "./general.js";
import util from "util";

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
        new MapType(resolveTMapKey(kts), resolveTMapValue(vts))
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
      cloneLit.typl = lit.typl.map((typ) => {
        return substTypeinType(tvar, type, typ);
      });
      cloneLit.ll = lit.ll.map((l) => this.substTypeInLit(tvar, type, l));
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
    if (expr instanceof SL.ScillaLiterals) {
      expr = this.substTypeInLit(tvar, tp, expr);
      return expr;
    }
    //If Lit, update the lit
    // if (expr.a instanceof SL.ScillaLiterals) {
    //   this.substTypeInLit(tvar, tp, expr.a.l);
    //   return expr;
    // }
    // this.printError("substTypeInExpr", "Couldn't match Atomic");
    // return expr;

    if (expr instanceof SE.Fun) {
      //Update type in fun type - Note: doesn't do anything yet
      // if (printLog) {
      //   addLineToLogOutput(
      //     `before type substitution ${util.inspect(expr.ty, false, null, true)}`
      //   );
      // }
      expr.ty = substTypeinType(tvar, tp, expr.ty);
      expr.e = this.substTypeInExpr(tvar, tp, expr.e);
      // if (printLog) {
      //   addLineToLogOutput(
      //     `after type substitution ${util.inspect(expr.ty, false, null, true)}`
      //   );
      // }
      return expr;
    }

    if (expr instanceof SE.Match) {
      //Update type in fun type - Note: doesn't do anything yet
      expr.clauses = expr.clauses.map((expPm) => {
        expPm.exp = this.substTypeInExpr(tvar, tp, expPm.exp);
        return expPm;
      });
      return expr;
    }

    if (expr instanceof SE.TFun) {
      if (expr.i === tvar) {
        return expr;
      } else {
        expr.e = this.substTypeInExpr(tvar, tp, expr.e);
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
      expr.lhs = this.substTypeInExpr(tvar, tp, expr.lhs); //lhs
      expr.rhs = this.substTypeInExpr(tvar, tp, expr.rhs); //rhs
      return expr;
    }

    if (expr instanceof SE.TApp) {
      expr.targs = expr.targs.map((ty) => substTypeinType(tvar, tp, ty));
      return expr;
    }
  }

  evalCid(ctx, env) {
    return ctx;
  }

  evalSid(ctx, env) {
    return ctx; // does not account for SidCid
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

  // evalExpPmClause(ctx, env) {
  //   const p = this.evalPattern(ctx.p, env);
  //   const e = this.evalExp(ctx.e, env);
  //   return new ExpPmClause(p, e);
  // }

  evalLet(ctx, env) {
    const x = ctx.x;
    const value = this.evalSimpleExp(ctx.lhs, env);
    // return if evaluation of lhs produced an error

    if (isError()) {
      return;
    }

    env[x] = value;
    return this.evalExp(ctx.rhs, env);
  }

  //Returns a closure
  evalFun(ctx, env) {
    const param = ctx.id;
    const clo = (x) => {
      const env_ = _.cloneDeep(env);
      // if (printLog) {
      //   addLineToLogOutput(
      //     `Binding ${param} to ${x.constructor.name}: ${JSON.stringify(x)}`
      //   );
      // }
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
        return new SL.MsgEntry(
          pair.i,
          SL.literalType(pair.l),
          this.evalLiteral(pair.l, env)
        );
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
    // console.log(this.lookup(ctx.xs[0], env));

    const builtinFunc = BI.parseBuiltinIdentifier(id);
    if (builtinFunc === undefined) {
      setError(
        new Error(`Error: ${id} is not recognised as a builtin function`)
      );
      return;
    }

    // const typeArgs =
    //   ctx.targs !== undefined
    //     ? ctx.targs.map((targ) =>
    //         targ.ts !== null ? ST.resolveTArg(targ) : targ.getText()
    //       )
    //     : undefined;

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
    } else if (ctx instanceof Pattern.ConstructorPat) {
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
          if (isError()) {
            return undefined;
          }
          const nextEnv = this.evalArgPattern(value.ll[a], ctx.ps[a], env);
          if (nextEnv === undefined) {
            return undefined;
          } else {
            _.merge(env, nextEnv);
          }
        }
        return env;
      }
    } else {
      return undefined;
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

  checkMatchExp(value, ctx, env) {
    /**
     * A pattern-match must be exhaustive,
     * i.e., every legal (type-safe) value of x must be matched by a pattern.
     * Additionally, every pattern must be reachable,
     * i.e., for each pattern there must be a legal (type-safe) value of x
     * that matches that pattern, and which does not match
     * any pattern preceding it.
     *
     * Current implementation does an under estimate of a well
     * formed match expression by only checking the value provided during run
     * time and not all possible values (which would require enumeration
     * of the types of the literals of the ADTValue)
     */
    const checkPattern = (value, ctx) => {
      if (ctx instanceof Pattern.WildCard) {
        // no binding required
        return true;
      } else if (ctx instanceof Pattern.Binder) {
        // bind value to variable to environment
        return true;
      } else if (ctx instanceof Pattern.ConstructorPat) {
        // ConstructorPat case
        const valueADTConstr = this.ADTDict.lookUpConstr(value.name);
        const ctxADTConstr = this.ADTDict.lookUpConstr(ctx.c);

        if (valueADTConstr.cname !== ctxADTConstr.cname) {
          return false;
        } else {
          if (value.ll.length !== ctxADTConstr.arity) {
            setError(
              new Error(
                `Error: ${ctx.constructor.name} pattern matching arity mismatch for ADT.`
              )
            );
            return false;
          }

          for (let a = 0; a < ctxADTConstr.arity; a++) {
            if (isError()) {
              return false;
            }
            const nextEnv = checkArgPattern(value.ll[a], ctx.ps[a], env);
            if (nextEnv === false) {
              return false;
            } else {
            }
          }
          return true;
        }
      } else {
        return false;
      }
    };

    const checkArgPattern = (value, ctx) => {
      if (ctx instanceof Pattern.WildCard) {
        // no binding required
        return true;
      } else if (ctx instanceof Pattern.Binder) {
        return true;
      } else if (ctx instanceof Pattern.ConstructorPat) {
        if (ctx.ps !== []) {
          return checkPattern(value, ctx);
        }

        if (value.name === ctx.c) {
          return true;
        } else {
          return false;
        }
      } else {
        // currently this case will not occur due to the syntax translation
        // layer
        return checkPattern(value, ctx);
      }
    };

    const clauseReachability = ctx.clauses.map(() => 0); // initialize empty array
    for (const [index, clause] of ctx.clauses.entries()) {
      const isReachable = checkPattern(value, clause.pat);
      if (isReachable) {
        clauseReachability[index] = clauseReachability[index] + 1;
      }
    }

    if (!clauseReachability.every((reached) => reached <= 1)) {
      setError(new Error("Duplicate pattern found in pattern match"));
      return undefined;
    }

    if (clauseReachability.every((reached) => reached === 0)) {
      setError(new Error("Non-exhaustive pattern matching found"));
      return undefined;
    }

    return true;
  }

  enumerateExpectedPatterns(value) {
    /**
     * This function should enumerate all expected patterns
     * using the type of the value to enumerate
     * the kind of types and hence constructors that must appear
     * in the match expression for it to be well-formed.
     */
  }

  evalMatchExp(ctx, env) {
    const value = this.lookup(ctx.x, env);

    const wellFormedMatch = this.checkMatchExp(value, ctx, env);
    if (!wellFormedMatch) {
      return;
    }

    let nextEnv = undefined;
    for (const clause of ctx.clauses) {
      nextEnv = this.evalPattern(value, clause.pat, env);
      if (nextEnv !== undefined) {
        return this.evalExp(clause.exp, nextEnv);
      }
    }

    // reaching this point would be due to an error
    // no clauses matched
    setError(new Error("Couldn't find a matching clause"));

    if (isError()) {
      return;
    }
  }

  evalTFun(ctx, env) {
    const tvar = ctx.i;
    const clo = (tp) => {
      const env_ = _.cloneDeep(env);
      // if (printLog) {
      //   addLineToLogOutput(`Instantiating ${tvar} as ${ppType(tp)}`);
      // }
      const exp = this.substTypeInExpr(tvar, tp, ctx.e);
      return this.evalSimpleExp(exp, env_);
    };
    return new SL.Clo(clo);
  }

  evalTApp(ctx, env) {
    // console.log("At Tapp for " + this.evalSid(ctx.f, env));
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

  evalLiteral(ctx, env) {
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
