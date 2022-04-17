import {contracts, stdlib} from "./constants.js";
import antlr4 from "antlr4";
import fs from "fs";
import Evaluator from "./evalSyntax.js";
import ScillaLexer from "./scillaLexer.js";
import ScillaParser from "./scillaParser.js";
import { Error } from "./syntax.js";
import { getError, isError, resetErrorSettings, startingTEnv } from "./general.js";
import _ from 'lodash';
import * as EIS from './evalImpure.js'; //Evaluate Impure Scilla
import * as D from './datatypes.js';
import * as SL from './literals.js';
import * as ST from './types.js';


/**
 * Initial Arguments for Different Contracts
 */

const initArgs = {
  "Polynetwork.scilla": {
    "thisChainID" : new SL.Uint64L(2)
  },
  "UintParam.scilla": {},
  "addfunds.scilla": {},
  "addfunds_proxy.scilla": {
    "init_implementation" : new SL.BystrX("0xff345678901234567890123456789012345678ab")
  },
  "address_eq_test.scilla": {},
  "address_list_as_cparam.scilla": {
    "x" : new SL.ADTValue("Cons", 
                          new ST.ADT("List", [new ST.ByStrXTyp(20)]), 
                          [new SL.BystrX("0x1234567890123456789012345678901234567890"),
                          new SL.ADTValue("Nil", new ST.ADT("List", [new ST.ByStrXTyp(20)]), [])])
  },
  "address_list_traversal.scilla" : {
    "cparam": new SL.BystrX("0x1234567890123456789012345678901234567890")
  },
  "auction.scilla": {
    "beneficiary": new SL.BystrX("0x1234567890123456789012345678901234567890"),
    "auctionStart": new SL.BNumLit(199),
    "biddingTime": new SL.Uint128L(50)
  },
  "bookstore.scilla": {
    "owner": new SL.BystrX("0x1234567890123456789012345678901234567890"),
    "store_name": new SL.StringLit("Bob's bookstore")
  }
}


/**
 * 
 *
 * Testing Evaluator of Impure Scilla
 * 
 * 
 */

import TranslateVisitor from "./translate.js";

const runEvalcmod = false;
if (runEvalcmod) {
  for (let i = 0; i < contracts.length; i++) {
    resetErrorSettings();
    const input = fs.readFileSync('contracts/'.concat(contracts[i])).toString();
    console.log("Input: " + 'contracts/'.concat(contracts[i]));
    const chars = new antlr4.InputStream(input);
    const lexer = new ScillaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ScillaParser(tokens);
    const tree = parser.cmodule();
    const cmod = tree.accept(new TranslateVisitor());
    EIS.evalCMod(cmod, {}, new D.DataTypeDict());
  }
}

const contract = "Polynetwork.scilla";
const input = fs.readFileSync('contracts/'.concat(contract)).toString();
const chars = new antlr4.InputStream(input);
const lexer = new ScillaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ScillaParser(tokens);
const tree = parser.cmodule();
const cmod = tree.accept(new TranslateVisitor());
const initArg = initArgs[contract];
EIS.evalCMod(cmod, {}, new D.DataTypeDict(), initArg);