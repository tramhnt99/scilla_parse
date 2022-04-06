// test.js
import antlr4 from "antlr4";
import fs from "fs";
import Evaluator from "./evalSyntax.js";
import ScillaLexer from "./scillaLexer.js";
import ScillaParser from "./scillaParser.js";
import { Error } from "./syntax.js";
import { getError, isError, resetErrorSettings, startingTEnv } from "./general.js";
import _ from 'lodash';
import * as TC from './typechecker.js';

const expressions = [
  "ackermann.scilexp",
  "addr.scilexp",
  "app.scilexp",
  "app2.scilexp",
  "app3.scilexp",
  "app4.scilexp",
  "app5.scilexp",
  "dyn_check1.scilexp",
  "builtin-alt-bn128-2.scilexp",
  "builtin-alt-bn128.scilexp",
  "builtin-badd.scilexp",
  "builtin-bech32-1.scilexp",
  "builtin-bech32-2.scilexp",
  "builtin-bsub.scilexp",
  "builtin-div.scilexp",
  "builtin-div2.scilexp",
  "builtin-div3.scilexp",
  "builtin-div4.scilexp",
  "builtin-ecdsa_recover.scilexp",
  "builtin-eq-bystr.scilexp",
  "builtin-isqrt.scilexp",
  "builtin-pow.scilexp",
  "builtin-rem.scilexp",
  "builtin-rem2.scilexp",
  "builtin-rem3.scilexp",
  "builtin-schnorr_get_address.scilexp",
  "builtin-strings.scilexp",
  "builtin1.scilexp",
  "builtin2.scilexp",
  "builtin3.scilexp",
  "builtin5.scilexp",
  "builtin6.scilexp",
  "builtin_type_args.scilexp",
  "cons.scilexp",
  "crypto-neg-eq.scilexp",
  "crypto_g.scilexp",
  "crypto_zero.scilexp",
  "dyn_check1.scilexp",
  "endian_test128.scilexp",
  "endian_test256.scilexp",
  "endian_test32.scilexp",
  "endian_test64.scilexp",
  "fib.scilexp",
  "func_pair.scilexp",
  "hash1.scilexp",
  "hash2.scilexp",
  "hash3.scilexp",
  "hash4.scilexp",
  "hash5.scilexp",
  "hash_map_stable1.scilexp",
  "hash_map_stable2.scilexp",
  "hash_map_stable3.scilexp",
  "hof.scilexp",
  "hof2.scilexp",
  "hof3.scilexp",
  "id.scilexp",
  "int_conversions.scilexp",
  "int_lits.scilexp",
  "int_to_nat.scilexp",
  "keccak256_1.scilexp",
  "keccak256_2.scilexp",
  "keccak256_3.scilexp",
  "keccak256_4.scilexp",
  "keccak256_5.scilexp",
  "let-builtin.scilexp",
  "let.scilexp",
  "let_in_let_in.scilexp",
  "list_append.scilexp",
  "list_eq.scilexp",
  "list_exists.scilexp",
  "list_filter.scilexp",
  "list_find.scilexp",
  "list_flatten.scilexp",
  "list_foldl.scilexp",
  "list_foldl_while.scilexp",
  "list_foldr.scilexp",
  "list_forall.scilexp",
  "list_head.scilexp",
  "list_length.scilexp",
  "list_map.scilexp",
  "list_mem.scilexp",
  "list_nth.scilexp",
  "list_product.scilexp",
  "list_reverse.scilexp",
  "list_sort.scilexp",
  "list_sort_eq.scilexp",
  "list_tail.scilexp",
  "list_tail1.scilexp",
  "list_tail2.scilexp",
  "list_unzip.scilexp",
  "list_zip.scilexp",
  "list_zip_with.scilexp",
  "map1.scilexp",
  "map2.scilexp",
  "map3.scilexp",
  "map4.scilexp",
  "map5.scilexp",
  "map6.scilexp",
  "map_no_keeping_old_bindings.scilexp",
  "map_remove_no_exception.scilexp",
  "map_to_list.scilexp",
  "msg.scilexp",
  "nat_eq_false.scilexp",
  "nat_eq_foldl.scilexp",
  "nat_fold_stress.scilexp",
  "nat_to_int.scilexp",
  "option.scilexp",
  "pair1.scilexp",
  "pair2.scilexp",
  "pair3.scilexp",
  "pm1.scilexp",
  "pm2.scilexp",
  "pm3.scilexp",
  "pm_app.scilexp",
  "pm_nesting.scilexp",
  "polynetwork_deserialize_proof.scilexp",
  "polynetwork_extract_bystr1.scilexp",
  "polynetwork_extract_bystr2.scilexp",
  "polynetwork_extract_bystr3.scilexp",
  "polynetwork_getBookKeeper.scilexp",
  "polynetwork_header.scilexp",
  "polynetwork_next_var_uint1.scilexp",
  "polynetwork_next_var_uint2.scilexp",
  "polynetwork_next_var_uint3.scilexp",
  "polynetwork_next_var_uint4.scilexp",
  "polynetwork_next_var_uint5.scilexp",
  "polynetwork_next_var_uint6.scilexp",
  "polynetwork_next_var_uint7.scilexp",
  "polynetwork_txparam.scilexp",
  "ripemd160_1.scilexp",
  "ripemd160_2.scilexp",
  "ripemd160_5.scilexp",
  "str-char-1.scilexp",
  "string1.scilexp",
  "string2.scilexp",
  "times_two.scilexp",
  "to_bystr.scilexp",
  "type_subst1.scilexp",
  "type_subst2.scilexp",
  "uint_conversions.scilexp",
];


//Many expressions above are not written with proper typing
const expressionsTC = [
  "ackermann.scilexp",
  "addr.scilexp",
  "app.scilexp",
  "app2.scilexp",
  "app3.scilexp",
  "app4.scilexp",
  "app5.scilexp",
  "dyn_check1.scilexp",
  "builtin-alt-bn128-2.scilexp",
  "builtin-alt-bn128.scilexp",
  "builtin-badd.scilexp",
  "builtin-bech32-1.scilexp",
  "builtin-bech32-2.scilexp",
  "builtin-bsub.scilexp",
  "builtin-div.scilexp",
  "builtin-div2.scilexp",
  "builtin-div3.scilexp",
  "builtin-div4.scilexp",
  "builtin-ecdsa_recover.scilexp",
  "builtin-eq-bystr.scilexp",
  "builtin-isqrt.scilexp",
  "builtin-pow.scilexp",
  "builtin-rem.scilexp",
  "builtin-rem2.scilexp",
  "builtin-rem3.scilexp",
  "builtin-schnorr_get_address.scilexp",
  "builtin-strings.scilexp",
  "builtin1.scilexp",
  "builtin2.scilexp",
  "builtin3.scilexp",
  "builtin5.scilexp",
  "builtin6.scilexp",
  "builtin_type_args.scilexp",
  "cons.scilexp",
  "crypto-neg-eq.scilexp",
  "crypto_g.scilexp",
  "crypto_zero.scilexp",
  "dyn_check1.scilexp",
  "endian_test128.scilexp",
  "endian_test256.scilexp",
  "endian_test32.scilexp",
  "endian_test64.scilexp",
  "fib.scilexp",
  "func_pair.scilexp",
  "hash1.scilexp",
  "hash2.scilexp",
  "hash3.scilexp",
  "hash4.scilexp",
  "hash5.scilexp",
  "hash_map_stable1.scilexp",
  "hash_map_stable2.scilexp",
  "hash_map_stable3.scilexp",
  "hof.scilexp",
  "id.scilexp",
  "int_conversions.scilexp",
  "int_lits.scilexp",
  "int_to_nat.scilexp",
  "keccak256_1.scilexp",
  "keccak256_2.scilexp",
  "keccak256_3.scilexp",
  "keccak256_4.scilexp",
  "keccak256_5.scilexp",
  "let-builtin.scilexp",
  "let.scilexp",
  "let_in_let_in.scilexp",
  "list_append.scilexp",
  "list_eq.scilexp",
  "list_exists.scilexp",
  "list_filter.scilexp",
  "list_find.scilexp",
  "list_flatten.scilexp",
  "list_foldl.scilexp",
  "list_foldr.scilexp",
  "list_forall.scilexp",
  "list_head.scilexp",
  "list_length.scilexp",
  "list_map.scilexp",
  "list_mem.scilexp",
  "list_nth.scilexp",
  "list_product.scilexp",
  "list_reverse.scilexp",
  "list_sort.scilexp",
  "list_sort_eq.scilexp",
  "list_tail.scilexp",
  "list_tail1.scilexp",
  "list_tail2.scilexp",
  "list_unzip.scilexp",
  "list_zip.scilexp",
  "list_zip_with.scilexp",
  "map1.scilexp",
  "map2.scilexp",
  "map3.scilexp",
  "map4.scilexp",
  "map5.scilexp",
  "map6.scilexp",
  "map_no_keeping_old_bindings.scilexp",
  "map_remove_no_exception.scilexp",
  "map_to_list.scilexp",
  "msg.scilexp",
  "nat_eq_false.scilexp",
  "nat_eq_foldl.scilexp",
  "nat_fold_stress.scilexp",
  "nat_to_int.scilexp",
  "option.scilexp",
  "pair1.scilexp",
  "pair2.scilexp",
  "pair3.scilexp",
  "pm1.scilexp",
  "pm2.scilexp",
  "pm3.scilexp",
  "pm_app.scilexp",
  "pm_nesting.scilexp",
  "polynetwork_deserialize_proof.scilexp",
  "polynetwork_extract_bystr1.scilexp",
  "polynetwork_extract_bystr2.scilexp",
  "polynetwork_extract_bystr3.scilexp",
  "polynetwork_getBookKeeper.scilexp",
  "polynetwork_header.scilexp",
  "polynetwork_next_var_uint1.scilexp",
  "polynetwork_next_var_uint2.scilexp",
  "polynetwork_next_var_uint3.scilexp",
  "polynetwork_next_var_uint4.scilexp",
  "polynetwork_next_var_uint5.scilexp",
  "polynetwork_next_var_uint6.scilexp",
  "polynetwork_next_var_uint7.scilexp",
  "polynetwork_txparam.scilexp",
  "ripemd160_1.scilexp",
  "ripemd160_2.scilexp",
  "ripemd160_5.scilexp",
  "str-char-1.scilexp",
  "string1.scilexp",
  "string2.scilexp",
  "times_two.scilexp",
  "to_bystr.scilexp",
  "type_subst1.scilexp",
  "type_subst2.scilexp",
  "uint_conversions.scilexp",
];

export const contracts = [
  "Polynetwork.scilla",
  "UintParam.scilla",
  "addfunds.scilla",
  "addfunds_proxy.scilla",
  "address_eq_test.scilla",
  "address_list_as_cparam.scilla",
  "address_list_traversal.scilla",
  "auction.scilla",
  "bookstore.scilla",
  "cfinvoke.scilla",
  "chain-call-balance-1.scilla",
  "chain-call-balance-2.scilla",
  "chain-call-balance-3.scilla",
  "constraint.scilla",
  "creationtest.scilla",
  "creationtest.scilla",
  "crowdfunding.scilla",
  "crowdfunding_proc.scilla",
  "dead_code_test1.scilla",
  "dead_code_test2.scilla",
  "dead_code_test3.scilla",
  "dead_code_test4.scilla",
  "dyn-seman.scilla",
  "earmarked-coin.scilla",
  "ecdsa.scilla",
  "empty.scilla",
  "exception-example.scilla",
  "fungible-token.scilla",
  "helloWorld.scilla",
  "inplace-map.scilla",
  "listiter.scilla",
  "loopy-tree-call.scilla",
  "map_as_cparam.scilla",
  "map_corners_test.scilla",
  "map_corners_test_combined.scilla",
  "mappair.scilla",
  "multiple-msgs.scilla",
  "nonfungible-token.scilla",
  "one-msg.scilla",
  "one-msg1.scilla",
  "ping.scilla",
  "polymorphic_address.scilla",
  "pong.scilla",
  "remote_state_reads.scilla",
  "remote_state_reads_2.scilla",
  "salarybot.scilla",
  "schnorr.scilla",
  "shadow_import.scilla",
  "shogi.scilla",
  "shogi_proc.scilla",
  "simple-dex-remote-reads.scilla",
  "simple-dex.scilla",
  "type_casts.scilla",
  "ud-proxy.scilla",
  "ud-registry.scilla",
  "wallet.scilla",
  "wallet_2.scilla",
  "zil-game.scilla",
];

export const stdlib = [
  'BoolUtils',
  'Conversions',
  'CryptoUtils',
  'IntUtils',
  'ListUtils',
  'NatUtils',
  'PairUtils',
  'Polynetwork',
  'ShogiLib'
];

import SyntaxVisitor from "./syntaxVisitor.js";
import ScillaTypeChecker from "./typechecker.js";
import TranslateVisitor from "./translate.js";

/**
 * 
 * Typechecking expressions
 * 
 */
const runTCexp = false;
if (runTCexp) {
  const tenvSTC = startingTEnv();
  resetErrorSettings();
  const tenv = tenvSTC[0];
  const STC = tenvSTC[1];
  for (let i = 0; i < expressionsTC.length; i++) {
      const input = fs.readFileSync('scilexp/'.concat(expressionsTC[i])).toString();
      console.log("Input: " + 'scilexp/'.concat(expressionsTC[i]));
      const chars = new antlr4.InputStream(input);
      const lexer = new ScillaLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new ScillaParser(tokens);
      const tree = parser.simple_exp();
      const exprAst = tree.accept(new SyntaxVisitor());
      const tenv_ = _.cloneDeep(tenv);
      const typed = STC.typeExpr(exprAst, tenv_);
      if (!typed) {

        console.log(getError());
        if (getError().s 
            && (getError().s.search("fold") !== -1
            || getError().s.search("We do not handle builtin") !== -1
            || getError().s.search("gt") !== -1
            || getError().s.search("alt_bn") !== -1
            || getError().s.search("list_") !== -1
            || getError().s.search("nat_") !== -1
            || getError().s.search("extract") !== -1
            || getError().s.search("Book") !== -1)) { //We don't have folding, so we don't have list ops
          //If an error occurs because a stdlib has not been implemented - we allow it
          resetErrorSettings();
          continue;
        }
        resetErrorSettings();
        break;
      } else {
        // console.log(typed);
      }
  }
}
const testSingle = false;
if (testSingle) {
  const tenvSTC = startingTEnv();
  if (isError()) { console.log(getError())};
  const tenv = tenvSTC[0];
  const STC = tenvSTC[1];
  const input = fs.readFileSync('scilexp/church_nat2.scilexp').toString();
  const chars = new antlr4.InputStream(input);
  const lexer = new ScillaLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ScillaParser(tokens);
  const tree = parser.simple_exp();
  const exprAst = tree.accept(new SyntaxVisitor());
  const tenv_ = _.cloneDeep(tenv);
  const typed = STC.typeExpr(exprAst, tenv_);
  if (isError()) { console.log(getError())};
  console.log(typed.ty.t.t1);
}

/**
 * 
 * Typechecking cmods
 * 
 */
const runTCcmod = false;
if (runTCcmod) {
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
    const STC = new ScillaTypeChecker();
    TC.typeCMod(cmod, {}, STC);
  }
}
// const input = fs.readFileSync('contracts/'.concat("address_list_traversal.scilla")).toString();
// const chars = new antlr4.InputStream(input);
// const lexer = new ScillaLexer(chars);
// const tokens = new antlr4.CommonTokenStream(lexer);
// const parser = new ScillaParser(tokens);
// const tree = parser.cmodule();
// const cmod = tree.accept(new TranslateVisitor());
// const STC = new ScillaTypeChecker();
// TC.typeCMod(cmod, {}, STC);
// if (isError()) { console.log(getError());}

// for (let i = 0; i < stdlib.length; i++) {
//     const input = fs.readFileSync('stdlib/'.concat(stdlib[i]).concat('.scillib')).toString();
//     console.log("Input: " + 'stdlib/'.concat(stdlib[i]).concat('.scillib'));
//     const chars = new antlr4.InputStream(input);
//     const lexer = new ScillaLexer(chars);
//     const tokens = new antlr4.CommonTokenStream(lexer);
//     const parser = new ScillaParser(tokens);
//     const tree = parser.lmodule();
//     const lmod = tree.accept(new TranslateVisitor());
//     console.log(lmod);
// }

// // Single test debugging contracts
// const input = fs.readFileSync('contracts/address_list_traversal.scilla').toString();
// const chars = new antlr4.InputStream(input);
// const lexer = new ScillaLexer(chars);
// const tokens = new antlr4.CommonTokenStream(lexer);
// export const parser = new ScillaParser(tokens);
// // const tree = parser.simple_exp();
// const tree = parser.cmodule();

//Testing Type Checking
// const input = fs.readFileSync("scilexp/id.scilexp").toString();
// const chars = new antlr4.InputStream(input);
// const lexer = new ScillaLexer(chars);
// const tokens = new antlr4.CommonTokenStream(lexer);
// export const parser = new ScillaParser(tokens);
// const tree = parser.simple_exp();
// const exprAst = tree.accept(new SyntaxVisitor());
// const STC = new ScillaTypeChecker();
// const typed = STC.typeExpr(exprAst, {});
// console.log(typed);
