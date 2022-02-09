grammar MiniOCaml;

/*
 * Tokens (terminal)
 */
POW: '**';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
MOD: 'mod';
ADDFLOAT: '+.';
SUBFLOAT: '-.';
MULFLOAT: '*.';
DIVFLOAT: '/.';
LESSTHAN: '<';
LESSTHANOREQUAL: '<=';
GREATERTHAN: '>';
GREATERTHANOREQUAL: '>=';
EQUALSTRUC: '=';
NOTEQUALSTRUC: '<>';
EQUALPHYS: '==';
NOTEQUALPHYS: '!=';
CONCAT: '^';
AND: '&&';
OR: '||';
NOT: 'not';

NUMBER: [0-9]+;
WS: [ ]+;
TOSKIP: [\r\n\t]+ -> skip;
CHAR: '\'' ~[\])] '\'';
STRING: '"' ~[\r\n"]* '"';
FLOAT: ('0'..'9')+ '.' ('0'..'9')*;
BOOLEAN: 'true' | 'false';

IF: 'if';
THEN: 'then';
ELSE: 'else';
FUN: 'fun';
ARROW: '->';
PIPE: '|>';
LET: 'let';
IN: 'in';
REC: 'rec';

LISTSTART: '[';
LISTEND: ']';
SEMICOLON: ';';

// pattern matching related tokens
MATCH: 'match';
WITH: 'with';

// match the last
IDENTIFIER: [a-z_] [a-zA-Z0-9_]*;
/*
 * Productions
 */
start : expression;

// TODO: how to define letGlobalBinding as not an expression so that (let x = 1) + 1 and let x = let y = 1 will not pass the parser?

// TODO: add support let parser trim leading and trailing whitespaces so that it does not return console error when parsing
expression
   : patternMatching # PatternMatchingExpression
   | arrowFunction   # ArrowFunctionExpression 
   | caller=expression WS arg=expression          #CallExpression
   | arg=expression WS? PIPE WS? caller=expression    #PipedCallExpression
   | LISTSTART listContent WS? LISTEND                       # ListDeclaration
   | WS? NUMBER WS?                                      # Number
   | WS? FLOAT WS?                                         # Float
   | WS? BOOLEAN WS?                                       # Boolean
   | WS? CHAR WS?                                         # Char
   | WS? STRING WS?                                        # String
   | parenthesesExpression                     # Parentheses
   | <assoc=right> left=expression WS? operator=POW WS? right=expression       # Power
   | left=expression WS? operator=MUL WS? right=expression    # Multiplication
   | left=expression WS? operator=DIV WS? right=expression    # Division
   | left=expression WS? operator=MULFLOAT WS? right=expression # MultiplicationFloat
   | left=expression WS? operator=DIVFLOAT WS? right=expression # DivisionFloat
   | left=expression WS? operator=MOD WS?right=expression    # Modulus
   | left=expression WS? operator=ADD WS? right=expression    # Addition
   | left=expression WS? operator=SUB WS? right=expression    # Subtraction
   | left=expression WS? operator=ADDFLOAT WS? right=expression # AdditionFloat
   | left=expression WS? operator=SUBFLOAT WS? right=expression # SubtractionFloat
   | left=expression WS? operator=LESSTHAN WS? right=expression  # LessThan
   | left=expression WS? operator=LESSTHANOREQUAL WS? right=expression # LessThanOrEqual
   | left=expression WS? operator=GREATERTHAN WS? right=expression # GreaterThan
   | left=expression WS? operator=GREATERTHANOREQUAL WS? right=expression  # GreaterThanOrEqual
   | left=expression WS? operator=EQUALSTRUC WS? right=expression  # EqualStructural
   | left=expression WS? operator=NOTEQUALSTRUC WS? right=expression  # NotEqualStructural
   | left=expression WS? operator=EQUALPHYS WS? right=expression  # EqualPhysical
   | left=expression WS? operator=NOTEQUALPHYS WS? right=expression  # NotEqualPhysical
   | left=expression WS? operator=CONCAT WS? right=expression  # Concatenation
   | operator=NOT WS? argument=expression  # Not
   | left=expression WS? operator=AND WS? right=expression  # And
   | left=expression WS? operator=OR WS? right=expression  # Or
   | <assoc=right> letLocalBinding                           # LetLocalBindingExpression
   | letGlobalBinding                                 # LetGlobalBindingExpression
   | functionDeclaration                              # FunctionDeclarationExpression
   | condExp # ConditionalExpression
   | identifier                                 # IdentifierExpression
   | expression WS? '::' WS? expression (WS? '::' WS? expression)*  #DeconstructionExpression
   ;

identifier // want identifier to be a node in the parser tree which can be visited
   : WS? IDENTIFIER WS?
   ;

arrowFunctionBody // need arrowFunctionBody be a child node of ArrowFunctionExpression
   : expression
   ;

parenthesesExpression
   : WS? '(' WS? inner=expression WS? ')' WS? 
   ;
   
arrowFunction
   : WS? FUN WS param=identifier WS? ARROW WS? body=arrowFunctionBody WS?
   ;

condExp
   : WS? IF WS test=expression WS THEN WS consequent=expression WS ELSE WS alternate=expression WS?
   ;

letGlobalBinding
	: LET WS REC? WS? id=identifier WS? EQUALSTRUC WS? init=expression // TODO: any expression other than letGlobalBinding itself!!
   ;

letLocalBinding
   : (letGlobalBinding | functionDeclaration) WS IN WS exp2=expression
   ;

listElement
   : WS? value=expression WS? SEMICOLON
   ;

listContent
   : listElement*
   ;

patternMatching
   : MATCH WS subject=expression WS WITH patternBranch+
   ;

patternBranch
   : WS? '|' WS? pattern=expression WS? ARROW WS? result=expression WS?
   ;
identifierList
	: WS? identifier (WS identifier)*
   ;
functionDeclaration
   : LET WS REC? WS? ids=identifierList '=' body=expression
   ;
