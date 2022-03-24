// Generator for custom syntax constructed when traversing through
// the ANTLR AST
// https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f
import SP from "./scillaParser.js"; //short for ScillaParser
import ScillaType from "./types.js";
import { ScillaExpr as SE, Pattern, ClauseExp } from "./syntax.js";
// import { Map } from './literals.js'; //Scilla Literals
import { ScillaLiterals } from "./literals.js";

const ST = new ScillaType();
const SL = new ScillaLiterals();

export default class SyntaxVisitor {
  printError(funcname, msg) {
    console.log("[ERROR]" + funcname + ": " + msg);
  }

  translateSid(ctx) {
    return ctx instanceof SP.SidNameContext
      ? ctx.name.getText()
      : ctx instanceof SP.SidSPIDContext
      ? ctx.SPID().getText()
      : ctx instanceof SP.SidCidContext
      ? console.log("[ERROR]SicCid") //TODO
      : this.printError("translateSid", "Couldn't match sid " + ctx.getText());
  }

  translateScid(ctx) {
    return ctx instanceof SP.ScidNameContext
      ? ctx.name.getText()
      : ctx instanceof SP.ScidCidContext
      ? console.log("TODO: ScidCid")
      : ctx instanceof SP.ScidHexContext
      ? console.log("TODO: ScidHex")
      : this.printError("translateScid", "Couldn't match Scid");
  }

  translateArgPattern(ctx) {
    if (ctx instanceof SP.WildcardArgContext) {
      return new Pattern.WildCard();
    } else if (ctx instanceof SP.BinderArgContext) {
      return new Pattern.Binder(ctx.x.getText());
    } else if (ctx instanceof SP.ConstructorArgContext) {
      return new Pattern.ConstructorPat(ctx.c.getText(), []);
    } else if (ctx instanceof SP.PatternArgContext) {
      return this.translatePattern(ctx.p);
    }
  }

  translateBuiltinArgs(ctx) {
    if (ctx instanceof SP.BuiltinArgsSidContext) {
      return ctx.args.map((arg) => arg.getText());
    }

    if (ctx instanceof SP.BuildinArgsParenContext) {
      return [];
    }
  }

  translatePattern(ctx) {
    if (ctx instanceof SP.WildcardContext) {
      return new Pattern.WildCard();
    }

    if (ctx instanceof SP.BinderContext) {
      return new Pattern.Binder(ctx.x.getText());
    }

    if (ctx instanceof SP.ConstructorContext) {
      const c = ctx.c.getText();
      const ps = ctx.ps.map((p) => this.translateArgPattern(p));
      return new Pattern.ConstructorPat(c, ps);
    }
  }

  translateLet(ctx) {
    if (!ctx) {
      return;
    }
    const x = ctx.x.getText();
    const type = ctx.ty !== null ? ST.generateSType(ctx.ty) : null;
    const value = this.translateSimpleExp(ctx.f);
    return new SE.Let(x, type, value, this.translateExp(ctx.e));
  }

  //Returns a closure
  translateFun(ctx) {
    if (ctx === undefined) {
      this.printError("translateFun", "Ctx is undefined.");
    }
    const param = ctx.id.getText();
    const type = ST.generateSType(ctx.ty);
    const expr = this.translateExp(ctx.e);

    return new SE.Fun(param, type, expr);
  }

  translateApp(ctx) {
    const func = this.translateSid(ctx.f_var);
    const argsLit = ctx.args.map((arg) => this.translateSid(arg));

    return new SE.App(func, argsLit);
  }

  translateAtomic(ctx) {
    return ctx.a instanceof SP.AtomicLitContext
      ? this.translateLiteral(ctx.a.l)
      : ctx.a instanceof SP.AtomicSidContext
      ? new SE.Var(this.translateSid(ctx.a.i))
      : this.printError("translateAtomic", "Couldn't match atomic expression.");
  }

  translateMessage(ctx) {
    const es = ctx.es.map((pair) => {
      return pair.l !== null
        ? { i: this.translateSid(pair.i), l: this.translateLiteral(pair.l) }
        : pair.v !== null
        ? { i: this.translateSid(pair.i), v: this.translateSid(pair.v) }
        : this.printError("translateMessage", "Message not defined correctly.");
    });
    return new SE.Message(es);
  }

  translateBuiltin(ctx) {
    const id = ctx.b.getText();
    const typeArgs =
      ctx.targs === null
        ? undefined
        : ctx.targs.ts.map((targ) => ST.resolveTArg(targ));
    const builtinArgs = this.translateBuiltinArgs(ctx.xs);

    return new SE.Builtin(id, typeArgs, builtinArgs);
  }

  translateDataConstructor(ctx) {
    const c = this.translateScid(ctx.c);
    const targs =
      ctx.ts === null ? [] : ctx.ts.ts.map((t) => ST.resolveTArg(t));
    const args = ctx.args.map((arg) => this.translateSid(arg));

    return new SE.DataConstructor(c, targs, args);
  }

  translateMatchExp(ctx) {
    const x = this.translateSid(ctx.x_sid);
    const cs = ctx.cs.map((clause) => this.translateExpPattern(clause));
    return new SE.Match(x, cs);
  }

  translateExpPattern(ctx) {
    const pat = this.translatePattern(ctx.p);
    const exp = this.translateExp(ctx.e);
    return new ClauseExp(pat, exp);
  }

  translateTFun(ctx) {
    const tvar = ctx.TID().getText();
    return new SE.TFun(tvar, this.translateSimpleExp(ctx.e.f));
  }

  translateTApp(ctx) {
    const tfunc = this.translateSid(ctx.f);
    const argsLit = ctx.targs.map((targ) => targ.getText());

    return new SE.TApp(tfunc, argsLit);
  }

  translateLiteral(ctx) {
    return SL.generateLiteral(ctx);
  }

  translateSimpleExp(ctx) {
    if (!ctx) {
      return;
    }
    return ctx instanceof SP.LetContext
      ? this.translateLet(ctx)
      : ctx instanceof SP.AtomicContext
      ? this.translateAtomic(ctx)
      : ctx instanceof SP.FunContext
      ? this.translateFun(ctx)
      : ctx instanceof SP.AppContext
      ? this.translateApp(ctx)
      : ctx instanceof SP.MessageContext
      ? this.translateMessage(ctx)
      : ctx instanceof SP.BuiltinContext
      ? this.translateBuiltin(ctx)
      : ctx instanceof SP.DataConstructorAppContext
      ? this.translateDataConstructor(ctx)
      : ctx instanceof SP.MatchContext
      ? this.translateMatchExp(ctx)
      : ctx instanceof SP.TFunContext
      ? this.translateTFun(ctx)
      : ctx instanceof SP.TAppContext
      ? this.translateTApp(ctx)
      : undefined;
  }

  translateExp(ctx) {
    return this.translateSimpleExp(ctx.f);
  }

  visitChildren(ctx) {
    if (!ctx) {
      return;
    }
    return ctx instanceof SP.Simple_expContext
      ? this.translateSimpleExp(ctx)
      : undefined;
  }
}
