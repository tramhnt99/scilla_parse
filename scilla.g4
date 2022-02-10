grammar scilla;

/*
 * Tokens
 */

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


/****************************
 * Literals
 ****************************/
NUMBER: [0-9]+;
INT: [-]? NUMBER;
WS: [ ]+;
TOSKIP: [\r\n\t]+ -> skip;
STRING: '"' ~[\r\n"]* '"';
FLOAT: ('0'..'9')+ '.' ('0'..'9')*;
BOOLEAN: 'True' | 'False';
HEXDIGIT: [a-fA-F0-9];
HEX: [0][x] (HEXDIGIT HEXDIGIT)*;
INTTY: 'Int32' | 'Int64' | 'Int128' | 'Int256' | 'Uint32' | 'Uint64' | 'Uint128' | 'Uint256';


/****************************
 * Identifiers
 ****************************/
ALPHANUM: [a-zA-Z0-9_];
ID: [a-z] ALPHANUM*;
SPID: [_] ALPHANUM*;
CID: [A-Z] ALPHANUM*;
TID: [\] [A-Z] ALPHANUM*;

identifier
    : WS? ID WS?
    ;

sid 
    : WS? name=ID WS?
    | WS? name=SPID WS?
    | WS? ns=CID PERIOD name=ID WS?
    ;

sident
    : WS* name=ID WS*
    | WS* name=SPID WS*
    | WS* ns=CID PERIOD name=ID WS*
    ;

scid 
    : WS? name=CID WS?
    | WS? ns=CID PERIOD name=CID WS?
    | WS? ns=HEX PERIOD name=CID WS?
    ;

//TODO: See how to build types and ADTs
type_annot
    : COLON t=ID 
    ;

id_with_typ
    : n=ID t=type_annot
    ;



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
    | MAP WS? k=t_map_key WS? v=t_map_value;

t_map_value
    : d=scid
    | MAP WS? k=t_map_key WS? v=t_map_value LPAREN t=t_map_value_allow_targs RPAREN
    | vt = address_typ
    ;

t_map_value_allow_targs
    : d=scid WS? t_map_value_args+
    | t_map_value
    ;

address_typ 
    : d=CID WITH END
    | d=CID WITH CONTRACT fs+=address_type_field (COMMA fs+=address_type_field)* END
    | d=CID WITH CONTRACT LPAREN ps+=param_pair (COMMA ps+=param_pair)* LPAREN fs+=address_type_field (COMMA fs+=address_type_field)* END
    ;

typ
    : d=scid WS? targs=targ //TODO:support list of targs to make ADTs
    | MAP WS? k=t_map_key WS? v=t_map_value 
    | t1=typ WS? TARROW t2=typ 
    | LPAREN WS? t=typ RPAREN
    | t_to_map=address_typ
    | FORALL WS? tv=TID PERIOD t=typ
    | t_var=TID
    ;

targ 
    : LPAREN WS? t=typ WS? RPAREN
    | d=scid
    | t_var=TID 
    | t_to_map=address_typ
    | MAP WS? k=t_map_key WS? v=t_map_value
    ;

address_type_field
    : FIELD WS? ft=id_with_typ
    ;


/****************************
 * Expressions
 ****************************/

exp : 
    f = simple_exp 
    ;

simple_exp
    : 
    // Let expression
     LET WS x=ID WS? EQ WS? f=simple_exp WS IN WS e=exp
    // Function
    | FUN WS? LPAREN iwt=id_with_typ WS? RPAREN WS? ARROW e=exp
    //Application
    | f_var=sid WS? (args+=sident)+
    // Atomic Expression
    | a=atomic_exp
    // Builtin call
    | BUILTIN WS? b=ID (targs+=ctargs)* xs=builtin_args 
    //Message construction 
    | LBRACE WS?  es+=msg_entry (COMMA es+=msg_entry)* RBRACE
    //Match expression 
    | MATCH WS? x_sid=sid WITH cs=exp_pm_clause* END
    //TODO: data constructor app, type func, type app
    ;

atomic_exp
    : i=sid
    | l=lit
    ;

lit
    : i=CID
    | n=NUMBER
    | h=HEX 
    | s=STRING
    | EMP WS? kt=t_map_key vt=t_map_value
    ;

ctargs
    : LBRACE WS? ts=targ* RBRACE
    ;

map_access
    : LSQB WS? i=sident RSQB
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
    | LPAREN WS? p=pattern WS? RPAREN
    ;

exp_pm_clause
    : BAR WS? p=pattern WS? ARROW e=exp
    ;

msg_entry
    : i=sid WS? COLON WS? l=lit 
    | i=sid WS? COLON WS? v=sid
    ;

builtin_args 
    : args=sident+
    | LPAREN RPAREN
    ;


/****************************
 * Statements
 ****************************/    
stmt
    : l=ID FETCH r=sid #Load 
    | r=remote_fetch_stmt #RemoteFetch
    | l=ID ASSIGN r=sid #Store 
    | l=ID EQ r=exp #Bind 
    | l=ID FETCH AND c=CID #ReadFromBC
    | l=ID FETCH r=ID (keys+=map_access)+ #MapGet
    | l=ID FETCH EXISTS r=ID (keys+=map_access)+ #MapGetExists
    | l=ID (keys+=map_access)+ ASSIGN r=sid #MapUpdate
    | DELETE l=ID (keys+=map_access)+ #MapUpdateDelete
    | ACCEPT #Accept 
    | SEND m=sid #Send 
    | EVENT m=sid #CreateEvnt 
    | THROW (mopt=sid)? #Throw 
    | MATCH x=sid WITH (cs+=stmt_pm_clause)+ END #MatchStmt
    | p=component_id (args+=sident)* #CallProc
    | FORALL l=sident p=component_id #Iterate
    ;

remote_fetch_stmt 
    : l=ID FETCH AND adr_id=ID PERIOD r=sident
    | l=ID FETCH AND adr_spid=SPID PERIOD SPID 
    | l=ID FETCH AND adr_id=ID PERIOD LPAREN r=sident RPAREN
    | l=ID FETCH AND adr_id=ID PERIOD r_id=ID (keys+=map_access)+
    | l=ID FETCH AND EXISTS adr_id=ID PERIOD r_id=ID (keys+=map_access)+
    | l=ID FETCH AND adr=sident AS t=address_typ
    ;

stmt_pm_clause
    : BAR p=pattern ARROW ss+=stmt (SEMICOLON ss+=stmt)*
    ;

stmts
    : ss+=stmt (SEMICOLON ss+=stmt)*
    ;

stmts_term
    : ss=stmts
    ;

/****************************
 * Contracts and Modules
 ****************************/ 

param_pair
    : iwt=id_with_typ
    ;

component
    : t=transition
    | p=procedure 
    ;

procedure 
    : PROCEDURE t=component_id params=component_params ss=component_body
    ;

transition 
    : TRANSITION t=component_id params=component_params ss=component_body
    ;

component_id
    : c=CID 
    | i=ID
    ;

component_params
    : LPAREN params+=param_pair (COMMA params+=param_pair)* RPAREN
    ; 

component_body 
    : ss=stmts END 
    ;

field
    : FIELD iwt=id_with_typ EQ rhs=exp
    ;

with_constraint
    : WITH f=exp ARROW 
    ;

contract 
    : CONTRACT c=CID LPAREN params+=param_pair (COMMA params+=param_pair)* RPAREN ct=with_constraint? (fs+=field)* (comps+=component)*
    ;

tconstr 
    : BAR tn=CID 
    | BAR tn=CID OF (t+=targ)+
    ;

libentry
    : LET ns=ID t=type_annot? EQ e=exp 
    | TYPE tname=CID 
    | TYPE tname=CID EQ (constrs+=tconstr)+
    ; 

library
    : LIBRARY n=CID (ls+=libentry)*
    ;

lmodule
    : SCILLA_VERSION cver=NUMBER els=imports l=library 
    ; //TODO: lookup EOF

importname
    : c=CID 
    | c1=CID AS c2=CID 
    ;

imports
    : IMPORT (els+=importname)*
    | WS
    ;

cmodule
    : SCILLA_VERSION cver=NUMBER els=imports ls=library? c=contract 
    ;
