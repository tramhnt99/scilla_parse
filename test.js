// test.js
import antlr4 from 'antlr4';
import MyGrammarLexer from './scillaLexer.js';
import MyGrammarParser from './scillaParser.js';

const input = "let x = 1 in x";
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);



