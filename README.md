Build the project
`node intall`

To run the tests for the Type Checker, gives an output print of passing tests.
`node testingTC.js`

To run the tests for the Definitional Interpreter  
_tests for different files currently have to be manually changed on line 275_
_of testingEvaluator.js_  
`node testingEvaluator.js`

Online IDE can be found at https://granada.ulysseskee.software/

To install on ANTLR using Homebrew
`brew install antlr`

To regenerate the Scilla Parser and Lexer in JS after updating the grammar
`antlr4 -Dlanguage=JavaScript scilla.g4`
