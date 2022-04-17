import antlr4 from "antlr4";
import fs from "fs";
import ScillaLexer from "./scillaLexer.js";
import ScillaParser from "./scillaParser.js";
import ScillaTypeChecker, * as TC from "./typechecker.js";
import _ from "lodash";
import { stdlib } from "./constants.js";
import TranslateVisitor from "./translate.js";
import Evaluator from "./evalSyntax.js";
import { evalLmod } from "./evalImpure.js";

export var tcerror = undefined;
export var hideError = false;

export function setError(er) {
  // console.log(er);
  if (tcerror === undefined) {
    tcerror = er;
  }
}

export function isError() {
  if (!hideError) {
    return tcerror !== undefined;
  } else {
    return false;
  }
}

export function setHideError(t) {
  hideError = t;
  return;
}

export function getError() {
  return tcerror;
}

export function resetErrorSettings() {
  hideError = false;
  tcerror = undefined;
}

//Parse all standard libraries
export function parseAllStdLibs() {
  const parsedLibs = {};

  //1. Parse all libraries
  for (let i = 0; i < stdlib.length; i++) {
    const input = fs
      .readFileSync("stdlib/".concat(stdlib[i]).concat(".scillib"))
      .toString();
    const chars = new antlr4.InputStream(input);
    const lexer = new ScillaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ScillaParser(tokens);
    const tree = parser.lmodule();
    const lmod = tree.accept(new TranslateVisitor());
    parsedLibs[stdlib[i]] = lmod;
  }
  return parsedLibs;
}

export function parseLib(libname) {
  const input = fs
    .readFileSync("stdlib/".concat(libname).concat(".scillib"))
    .toString();
  const chars = new antlr4.InputStream(input);
  const lexer = new ScillaLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ScillaParser(tokens);
  const tree = parser.lmodule();
  const lmod = tree.accept(new TranslateVisitor());
  return lmod;
}

//Starting type environment that contains all library functions and library ADTs
//Which also type checks the library functions
//Return the tenv and the typechecker with updated ADTs
//Note: currently ignores all lentries that fail because of unimplemented stdlibs
export function startingTEnv() {
  const parsedLibs = parseAllStdLibs();
  var tenv = {};
  var STC = new ScillaTypeChecker();
  var lmodDone = []; //String[] //IMPORTANT: we skip those named

  //2. Type check all modules
  //Note: the function currently doesn't fail with error.
  for (const lmod in parsedLibs) {
    console.log("Input: " + lmod);
    if (lmodDone.find((l) => l === lmod)) {
      continue;
    }
    const res = TC.typeLmod(parsedLibs[lmod], tenv, STC);
    if (isError()) {
      resetErrorSettings();
      continue;
    }
    tenv = res.tenv;
    STC = res.STC;
    lmodDone.concat(res.lmodDone);
  }

  //Return the tenv and the typechecker with updated ADTs
  return [tenv, STC];
}

export var printLog = false;
export var logOutput = "";
export function setPrintFalse() {
  printLog = false;
}
export function setPrintTrue() {
  printLog = true;
}
export function resetLogOutput() {
  logOutput = "";
}
export function addLineToLogOutput(line) {
  logOutput = logOutput + "\n" + line;
}

export function startingEEnv() {
  const parsedLibs = parseAllStdLibs();
  let env = {};
  let ScillaEvaluator = new Evaluator(env);

  let lmodDone = [];
  for (const lmod in parsedLibs) {
    //stdlib.length
    // console.log("Input: " + lmod);
    if (parsedLibs[lmod].lib.lname in lmodDone) {
      continue;
    } else {
      const res = evalLmod(parsedLibs[lmod], env, ScillaEvaluator.ADTDict);
      if (isError()) {
        console.log(getError());
      }
      lmodDone = lmodDone.concat(res.lmodDone);
    }
  }

  return [env, ScillaEvaluator];
}
