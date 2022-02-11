grammar miniScilla;

/****************************
 * Keywords
 ****************************/
FORALL: 'forall';
BUILTIN: 'builtin';
LIBRARY: 'library';
IMPORT: 'import';
LET: 'let';
IN: 'in';
MATCH: 'match';
WITH: 'with';
END: 'end';
FUN: 'fun';
TFUN: 'tfun';
CONTRACT: 'contract';
TRANSITION: 'transition';
SEND: 'send';
EVENT: 'event';
FIELD: 'field';
ACCEPT: 'accept';
EXISTS: 'exists';
DELETE: 'delete';
EMP: 'emp';
MAP: 'map';
SCILLA_VERSION: 'scilla_version';
TYPE: 'type';
OF: 'of';
TRY: 'try';
CATCH: 'catch';
AS: 'as'; 
PROCEDURE: 'procedure';
THROW: 'throw';

/****************************
 * Seperators
 ****************************/
SEMICOLON: ';';
COLON: ':';
PERIOD: '.';
BAR: '|';
LSQB: '[';
RSQB: ']';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
COMMA: ',';
ARROW: '=>';
TARROW: '->';
EQ: '=';
AND: '&';
FETCH: '<-';
ASSIGN: ':=';
AT: '@';
UNDERSCORE: '_';
BlockComment: '(*' .*? '*)' -> skip;

NUMBER: [0-9]+;
INT: [-]? NUMBER;
WS: [ ]+ -> skip;
TOSKIP: [\r\n\t]+ -> skip;
STRING: '"' ~[\r\n"]* '"';
FLOAT: ('0'..'9')+ '.' ('0'..'9')*;
BOOLEAN: 'True' | 'False';
HEX: [0][x]([a-fA-F0-9] [a-fA-F0-9])*;
INTTY: 'Int32' | 'Int64' | 'Int128' | 'Int256' | 'Uint32' | 'Uint64' | 'Uint128' | 'Uint256';

ID: [a-z_] [a-zA-Z0-9_]*;
SPID: [_] [a-zA-Z0-9_]*;
CID: [A-Z] [a-zA-Z0-9_]*;
TID: ['] [A-Z] [a-zA-Z0-9_]*; //[\] gives parsing issues

/****************************
 * Types
 ****************************/
t_map_key 
    : kt_to_map=scid
    | LPAREN kt_to_map=scid RPAREN
    | LPAREN kt=address_typ RPAREN
    | kt=address_typ
    ;

t_map_value_args
    : LPAREN t=t_map_value_allow_targs RPAREN
    | d=scid
    | MAP k=t_map_key v=t_map_value;

t_map_value
    : d=scid
    | MAP k=t_map_key v=t_map_value LPAREN t=t_map_value_allow_targs RPAREN
    | vt = address_typ
    ;

t_map_value_allow_targs
    : d=scid t_map_value_args+
    | t_map_value
    ;

address_typ 
    : d=CID WITH END
    | d=CID WITH CONTRACT fs+=address_type_field (COMMA fs+=address_type_field)* END
    // | d=CID WITH CONTRACT LPAREN ps+=param_pair (COMMA ps+=param_pair)* LPAREN fs+=address_type_field (COMMA fs+=address_type_field)* END
    ;

typ
    : d=scid (targs+=targ)* //TODO:support list of targs to make ADTs
    | MAP k=t_map_key v=t_map_value 
    | t1=typ TARROW t2=typ 
    | LPAREN t=typ RPAREN
    | t_to_map=address_typ
    | FORALL tv=TID PERIOD t=typ
    | t_var=TID
    | INTTY
    ;

targ 
    : LPAREN t=typ RPAREN
    | d=scid
    | t_var=TID
    | t_to_map=address_typ
    | MAP k=t_map_key v=t_map_value
    ;

address_type_field
    : FIELD id=identifier COLON ty=typ
    ;


/****************************
 * Expressions
 ****************************/

exp : 
    f=simple_exp 
    ;

simple_exp
    : LET x=identifier EQ f=simple_exp IN e=exp #Let
    | FUN LPAREN id=identifier COLON ty=typ RPAREN ARROW e=exp #Fun
    | f_var=sid (args+=sident)+ #App
    | a=atomic_exp #Atomic
    | BUILTIN b=ID (targs+=ctargs)* xs=builtin_args #Builtin
    ;

atomic_exp
    : i=sid
    | l=lit
    ;

lit
    : i=CID
    | INTTY i_number=NUMBER
    | n=NUMBER
    | h=HEX 
    | s=STRING
    | EMP kt=t_map_key vt=t_map_value
    | b=BOOLEAN
    ;

ctargs
    : LBRACE ts=targ* RBRACE
    ;


map_access
    : LSQB i=sident RSQB
    ;

pattern
    : UNDERSCORE #Wildcard
    | x=ID #Binder
    | c=scid ps=arg_pattern* #Constructor
    ;

arg_pattern
    : UNDERSCORE
    | x=ID 
    | c=scid 
    | LPAREN p=pattern RPAREN
    ;

exp_pm_clause
    : BAR p=pattern ARROW e=exp
    ;

msg_entry
    : i=sid COLON l=lit 
    | i=sid COLON v=sid
    ;

builtin_args 
    : args=sident+
    | LPAREN RPAREN
    ;

exp_term
    : e=exp EOF 
    ; 

type_term
    : t=typ EOF 
    ;


/****************************
 * Identifiers
 ****************************/

identifier
    : ID
    ;

sid 
    : name=ID
    | name=SPID
    | ns=CID PERIOD name=ID
    ;

sident
    :  name=ID 
    |  name=SPID 
    |  ns=CID PERIOD name=ID 
    ;

scid 
    : name=CID
    | ns=CID PERIOD name=CID
    | ns=HEX PERIOD name=CID
    ;

// //TODO: See how to build types and ADTs
// type_annot
//     : COLON t=typ
//     ;

// id_with_typ
//     : n=identifier t=type_annot
//     ;

