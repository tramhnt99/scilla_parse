// test.js
import antlr4 from 'antlr4';
import fs from 'fs';
import ScillaLexer from './scillaLexer.js';
import ScillaParser from './scillaParser.js';


const expressions = [
    'ackermann.scilexp',
    'addr.scilexp',
    'app.scilexp',
    'app2.scilexp',
    'app3.scilexp',
    'app4.scilexp',
    'app5.scilexp',
    'dyn_check1.scilexp',
    'builtin-alt-bn128-2.scilexp',
    'builtin-alt-bn128.scilexp',
    'builtin-badd.scilexp',
    'builtin-bech32-1.scilexp',
    'builtin-bech32-2.scilexp',
    'builtin-bsub.scilexp',
    'builtin-div.scilexp',
    'builtin-div2.scilexp',
    'builtin-div3.scilexp',
    'builtin-div4.scilexp',
    'builtin-ecdsa_recover.scilexp',
    'builtin-eq-bystr.scilexp',
    'builtin-isqrt.scilexp',
    'builtin-pow.scilexp',
    'builtin-rem.scilexp',
    'builtin-rem2.scilexp',
    'builtin-rem3.scilexp',
    'builtin-schnorr_get_address.scilexp',
    'builtin-strings.scilexp',
    'builtin1.scilexp',
    'builtin2.scilexp',
    'builtin3.scilexp',
    'builtin5.scilexp',
    'builtin6.scilexp',
    'builtin_type_args.scilexp',
    'cons.scilexp',
    'crypto-neg-eq.scilexp',
    'crypto_g.scilexp',
    'crypto_zero.scilexp',
    'dyn_check1.scilexp',
    'endian_test128.scilexp',
    'endian_test256.scilexp',
    'endian_test32.scilexp',
    'endian_test64.scilexp',
    'fib.scilexp',
    'func_pair.scilexp',
    'hash1.scilexp',
    'hash2.scilexp',
    'hash3.scilexp',
    'hash4.scilexp',
    'hash5.scilexp',
    'hash_map_stable1.scilexp',
    'hash_map_stable2.scilexp',
    'hash_map_stable3.scilexp',
    'hof.scilexp',
    'hof2.scilexp',
    'hof3.scilexp',
    'id.scilexp',
    'int_conversions.scilexp',
    'int_lits.scilexp',
    'int_to_nat.scilexp',
    'keccak256_1.scilexp',
    'keccak256_2.scilexp',
    'keccak256_3.scilexp',
    'keccak256_4.scilexp',
    'keccak256_5.scilexp',
    'let-builtin.scilexp',
    'let.scilexp',
    'let_in_let_in.scilexp',
    'list_append.scilexp',
    'list_eq.scilexp',
    'list_exists.scilexp',
    'list_filter.scilexp',
    'list_find.scilexp',
    'list_flatten.scilexp',
    'list_foldl.scilexp',
    'list_foldl_while.scilexp',
    'list_foldr.scilexp',
    'list_forall.scilexp',
    'list_head.scilexp',
    'list_length.scilexp',
    'list_map.scilexp',
    'list_mem.scilexp',
    'list_nth.scilexp',
    'list_product.scilexp',
    'list_reverse.scilexp',
    'list_sort.scilexp',
    'list_sort_eq.scilexp',
    'list_tail.scilexp',
    'list_tail1.scilexp',
    'list_tail2.scilexp',
    'list_unzip.scilexp',
    'list_zip.scilexp',
    'list_zip_with.scilexp',
    'map1.scilexp',
    'map2.scilexp',
    'map3.scilexp',
    'map4.scilexp',
    'map5.scilexp',
    'map6.scilexp',
    'map_no_keeping_old_bindings.scilexp',
    'map_remove_no_exception.scilexp',
    'map_to_list.scilexp',
    'msg.scilexp',
    'nat_eq_false.scilexp',
    'nat_eq_foldl.scilexp',
    'nat_fold_stress.scilexp',
    'nat_to_int.scilexp',
    'option.scilexp',
    'pair1.scilexp',
    'pair2.scilexp', 
    'pair3.scilexp',
    'pm1.scilexp',
    'pm2.scilexp',
    'pm3.scilexp',
    'pm_app.scilexp',
    'pm_nesting.scilexp',
    'polynetwork_deserialize_proof.scilexp',
    'polynetwork_extract_bystr1.scilexp',
    'polynetwork_extract_bystr2.scilexp',
    'polynetwork_extract_bystr3.scilexp',
    'polynetwork_getBookKeeper.scilexp',
    'polynetwork_header.scilexp',
    'polynetwork_next_var_uint1.scilexp',
    'polynetwork_next_var_uint2.scilexp',
    'polynetwork_next_var_uint3.scilexp',
    'polynetwork_next_var_uint4.scilexp',
    'polynetwork_next_var_uint5.scilexp',
    'polynetwork_next_var_uint6.scilexp',
    'polynetwork_next_var_uint7.scilexp',
    'polynetwork_txparam.scilexp',
    'ripemd160_1.scilexp',
    'ripemd160_2.scilexp',
    'ripemd160_5.scilexp',
    'str-char-1.scilexp',
    'string1.scilexp',
    'string2.scilexp',
    'times_two.scilexp',
    'to_bystr.scilexp',
    'type_subst1.scilexp',
    'type_subst2.scilexp',
    'uint_conversions.scilexp'
]

const contracts = [
    'Polynetwork.scilla',
    'UintParam.scilla',
    'addfunds.scilla',
    'addfunds_proxy.scilla',
    'address_eq_test.scilla',
    'address_list_as_cparam.scilla',
    'address_list_traversal.scilla',
    'auction.scilla',
    'bookstore.scilla',
    'cfinvoke.scilla',
    'chain-call-balance-1.scilla',
    'chain-call-balance-2.scilla',
    'chain-call-balance-3.scilla',
    'constraint.scilla',
    'creationtest.scilla',
    'creationtest.scilla',
    'crowdfunding.scilla',
    'crowdfunding_proc.scilla',
    'dead_code_test1.scilla',
    'dead_code_test2.scilla',
    'dead_code_test3.scilla',
    'dead_code_test4.scilla',
    'dyn-seman.scilla',
    'earmarked-coin.scilla',
    'ecdsa.scilla',
    'empty.scilla',
    'exception-example.scilla',
    'fungible-token.scilla',
    'helloWorld.scilla',
    'inplace-map.scilla',
    'listiter.scilla',
    'loopy-tree-call.scilla',
    'map_as_cparam.scilla',
    'map_corners_test.scilla',
    'map_corners_test_combined.scilla',
    'mappair.scilla',
    'multiple-msgs.scilla',
    'nonfungible-token.scilla',
    'one-msg.scilla',
    'one-msg1.scilla',
    'ping.scilla',
    'polymorphic_address.scilla',
    'pong.scilla',
    'remote_state_reads.scilla',
    'remote_state_reads_2.scilla',
    'salarybot.scilla',
    'schnorr.scilla',
    'shadow_import.scilla',
    'shogi.scilla',
    'shogi_proc.scilla',
    'simple-dex-remote-reads.scilla',
    'simple-dex.scilla',
    'type_casts.scilla',
    'ud-proxy.scilla',
    'ud-registry.scilla',
    'wallet.scilla',
    'wallet_2.scilla',
    'zil-game.scilla'
]

const stdlib = [
    'BoolUtils',
    'Conversions',
    'CryptoUtils',
    'IntUtils',
    'ListUtils',
    'NatUtils',
    'PairUtils',
    'Polynetwork',
    'ShogiLib'
]

import SyntaxVisitor from './syntaxVisitor.js';
// for (let i = 0; i < expressions.length; i++) {
//     const input = fs.readFileSync('scilexp/'.concat(expressions[i])).toString();
//     console.log("Input: " + 'scilexp/'.concat(expressions[i]));
//     const chars = new antlr4.InputStream(input);
//     const lexer = new ScillaLexer(chars);
//     const tokens = new antlr4.CommonTokenStream(lexer);
//     const parser = new ScillaParser(tokens);
//     const tree = parser.simple_exp();
//     tree.accept(new SyntaxVisitor());
// }
import TranslateVisitor from './translate.js';
for (let i = 0; i < contracts.length; i++) {
    const input = fs.readFileSync('contracts/'.concat(contracts[i])).toString();
    console.log("Input: " + 'contracts/'.concat(contracts[i]));
    const chars = new antlr4.InputStream(input);
    const lexer = new ScillaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ScillaParser(tokens);
    const tree = parser.cmodule();
    tree.accept(new TranslateVisitor());
}
for (let i = 0; i < stdlib.length; i++) {
    const input = fs.readFileSync('stdlib/'.concat(stdlib[i]).concat('.scillib')).toString();
    console.log("Input: " + 'stdlib/'.concat(stdlib[i]).concat('.scillib'));
    const chars = new antlr4.InputStream(input);
    const lexer = new ScillaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ScillaParser(tokens);
    const tree = parser.lmodule();
    tree.accept(new TranslateVisitor());
}


// Single test debugging
// const input = fs.readFileSync('contracts/address_list_traversal.scilla').toString();
// const chars = new antlr4.InputStream(input);
// const lexer = new ScillaLexer(chars);
// const tokens = new antlr4.CommonTokenStream(lexer);
// export const parser = new ScillaParser(tokens);
// // const tree = parser.simple_exp();
// const tree = parser.cmodule();

//Testing Type Checking
import ScillaTypeChecker from './typechecker.js';
const input = fs.readFileSync('scilexp/app4.scilexp').toString();
const chars = new antlr4.InputStream(input);
const lexer = new ScillaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
export const parser = new ScillaParser(tokens);
const tree = parser.simple_exp();
const exprAst = tree.accept(new SyntaxVisitor());
const STC = new ScillaTypeChecker();
const typed = STC.typeExpr(exprAst, {});
console.log(typed);



// tree.accept(new SyntaxVisitor);
tree.accept(new TranslateVisitor());




