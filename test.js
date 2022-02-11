// test.js
import antlr4 from 'antlr4';
// import MyGrammarLexer from './scillaLexer.js';
// import MyGrammarParser from './scillaParser.js';

// const input = "let x = 2 in x";
// const chars = new antlr4.InputStream(input);
// const lexer = new MyGrammarLexer(chars);
// const tokens = new antlr4.CommonTokenStream(lexer);
// const parser = new MyGrammarParser(tokens);
// const tree = parser.simple_exp();
// console.log(tree.toString(parser.ruleNames));

// import MyGrammarLexer from './MiniOCamlLexer.js';
// import MyGrammarParser from './MiniOCamlParser.js';

// const input = "let x = 2 in x";
// const chars = new antlr4.InputStream(input);
// const lexer = new MyGrammarLexer(chars);
// const tokens = new antlr4.CommonTokenStream(lexer);
// const parser = new MyGrammarParser(tokens);
// const tree = parser.expression();
// console.log(tree.toString(parser.ruleNames));

import fs from 'fs';
const fileContents = fs.readFileSync('scilexp/dyn_check1.scilexp').toString();

import MyGrammarLexer from './miniScillaLexer.js';
import MyGrammarParser from './miniScillaParser.js';

const input = fileContents;
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
const tree = parser.simple_exp();
console.log(tree.toString(parser.ruleNames));

