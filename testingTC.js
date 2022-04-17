// test.js
import antlr4 from "antlr4";
import fs from "fs";
import ScillaLexer from "./scillaLexer.js";
import ScillaParser from "./scillaParser.js";
import {
  getError,
  isError,
  resetErrorSettings,
  startingTEnv,
} from "./general.js";
import _ from "lodash";
import * as TC from "./typechecker.js";
import {expressionsTC, contracts, stdlib } from "./contracts.js";

import SyntaxVisitor from "./syntaxVisitor.js";
import ScillaTypeChecker from "./typechecker.js";
import TranslateVisitor from "./translate.js";

var runTCexp = true;
var runSingleExp = false;
var runTCcmod = true;
var runSingleCmod = false;

export function toggleTCTesterOff() {
  runTCexp = false;
  runSingleExp = false;
  runTCMod = false;
  runSingleCMod = false;
}

/**
 *
 * Typechecking expressions
 *
 */
if (runTCexp) {
  const tenvSTC = startingTEnv();
  resetErrorSettings();
  const tenv = tenvSTC[0];
  const STC = tenvSTC[1];
  for (let i = 0; i < expressionsTC.length; i++) {
    const input = fs
      .readFileSync("scilexp/".concat(expressionsTC[i]))
      .toString();
    console.log("Input: " + "scilexp/".concat(expressionsTC[i]));
    const chars = new antlr4.InputStream(input);
    const lexer = new ScillaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ScillaParser(tokens);
    const tree = parser.simple_exp();
    const exprAst = tree.accept(new SyntaxVisitor());
    const tenv_ = _.cloneDeep(tenv);
    const typed = STC.typeExpr(exprAst, tenv_);
    if (!typed) {
      if (getError().s && getError().s.search("We do not handle builtin") !== -1) {
        //We allow errors that have to do with builtins
        resetErrorSettings();
        continue;
      }
      console.log(getError());
      break;
    }
  }
}
if (runSingleExp) {
  const tenvSTC = startingTEnv();
  if (isError()) {
    console.log(getError());
  }
  const tenv = tenvSTC[0];
  const STC = tenvSTC[1];
  try {
    const input = fs.readFileSync("scilexp/church_nat2.scilexp").toString();
    const chars = new antlr4.InputStream(input);
    const lexer = new ScillaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ScillaParser(tokens);
    const tree = parser.simple_exp();
    const exprAst = tree.accept(new SyntaxVisitor());
    const tenv_ = _.cloneDeep(tenv);
    const typed = STC.typeExpr(exprAst, tenv_);
    if (isError()) {
      console.log(getError());
    }
  } catch (e) {
    console.log("Parsing Error");
  }
  
}

/**
 *
 * Typechecking cmods
 *
 */
if (runTCcmod) {
  for (let i = 0; i < contracts.length; i++) {
    resetErrorSettings();
    const input = fs.readFileSync("contracts/".concat(contracts[i])).toString();
    console.log("Input: " + "contracts/".concat(contracts[i]));
    const chars = new antlr4.InputStream(input);
    const lexer = new ScillaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ScillaParser(tokens);
    const tree = parser.cmodule();
    const cmod = tree.accept(new TranslateVisitor());
    const STC = new ScillaTypeChecker();
    TC.typeCMod(cmod, {}, STC);
    
    if (isError()) {
      const error_msg = getError();
      console.log(error_msg);
      if (!(error_msg.s.search("We do not handle builtin") !== -1)) {
        console.log(getError());
      }
      resetErrorSettings();
    }
  }
}
if (runSingleCmod) {
  const input = fs.readFileSync('contracts/'.concat("mappair.scilla")).toString();
  const chars = new antlr4.InputStream(input);
  const lexer = new ScillaLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ScillaParser(tokens);
  const tree = parser.cmodule();
  const cmod = tree.accept(new TranslateVisitor());
  const STC = new ScillaTypeChecker();
  const typed = TC.typeCMod(cmod, {}, STC);
  if (isError() && !(getError().s.search("We do not handle builtin") !== -1)) { 
    console.log(getError());
  }
}

