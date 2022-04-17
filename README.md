To regenerate the Scilla Parser and Lexer in JS run
`antlr4 -Dlanguage=JavaScript scilla.g4`

To run the tests for the Type Checker
`node testingTC.js`

To run the tests for the Definitional Interpreter
_tests for different files currently have to be manually changed on line 275_
_of testingEvaluator.js_
`node testingEvaluator.js`

To install on ANTLR using Homebrew
`brew install antlr`
