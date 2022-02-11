grammar scilla;

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
EMP: 'Emp';
MAP: 'Map';
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
int_: '-'? NUMBER;
STRING: '"' ~[\r\n"]* '"';
FLOAT: ('0'..'9')+ '.' ('0'..'9')*;
BOOLEAN: 'True' | 'False';
OPTION: 'None' | 'Some';
HEX: [0][x]([a-fA-F0-9] [a-fA-F0-9])*;
INTTY: 'Int32' | 'Int64' | 'Int128' | 'Int256' | 'Uint32' | 'Uint64' | 'Uint128' | 'Uint256';
BYSTR: 'ByStr' [0-9]*;
BNUM: 'BNum';
MESSAGE: 'Message';
EVENT_TY: 'Event';
prim_types: (INTTY | BYSTR | BNUM | MESSAGE | EVENT_TY);
WS: [ ]+ -> skip;
TOSKIP: [\r\n\t]+ -> skip;


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
    | MAP k=t_map_key v=t_map_value
    ;

t_map_value
    : d=scid
    | MAP k=t_map_key v=t_map_value 
    | LPAREN t=t_map_value_allow_targs RPAREN
    | vt=address_typ
    | prim_types
    ;

t_map_value_allow_targs
    : d=scid t_map_value_args+
    | t_map_value
    ;

address_typ 
    : d=cid WITH END
    | d=cid WITH CONTRACT (fs+=address_type_field (COMMA fs+=address_type_field)*)* END
    | d=cid WITH CONTRACT LPAREN ps+=param_pair (COMMA ps+=param_pair)* LPAREN fs+=address_type_field (COMMA fs+=address_type_field)* END
    ;

typ
    : d=scid (targs+=targ)*
    | MAP k=t_map_key v=t_map_value 
    | t1=typ TARROW t2=typ 
    | LPAREN t=typ RPAREN
    | t_to_map=address_typ
    | FORALL tv=TID PERIOD t=typ
    | t_var=TID
    | prim_types
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
    : LET x=identifier (COLON ty=typ)? EQ f=simple_exp IN e=exp #Let
    | FUN LPAREN id=identifier COLON ty=typ RPAREN ARROW e=exp #Fun
    | f_var=sid (args+=sid)+ #App
    | a=atomic_exp #Atomic
    | BUILTIN b=identifier (targs+=ctargs)* xs=builtin_args #Builtin
    | LBRACE es+=msg_entry (SEMICOLON es+=msg_entry)* RBRACE #Message
    | MATCH x_sid=sid WITH cs=exp_pm_clause* END #Match
    | c=scid ts=ctargs? (args+=sid)* #DataConstructorApp //I THINK STUCK HERE
    | TFUN i=TID ARROW e=exp #TFun
    | AT f=sid (targs+=targ)+ #TApp
    ;

atomic_exp
    : i=sid
    | l=lit
    ;

lit
    : i=cid
    | INTTY i_int=int_
    | BNUM i_number=NUMBER
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
    : LSQB i=sid RSQB
    ;

pattern
    : UNDERSCORE #Wildcard
    | x=identifier #Binder
    | c=scid ps=arg_pattern* #Constructor
    ;

arg_pattern
    : UNDERSCORE
    | x=identifier 
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
    : args=sid+
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
    : name=identifier
    | name_spid=SPID
    | ns=cid PERIOD name=identifier
    ;

scid 
    : name=cid
    | ns=cid PERIOD name=cid
    | ns_hex=HEX PERIOD name=cid
    | bool=BOOLEAN
    | option=OPTION
    | prim=prim_types
    ;

cid 
    : CID
    | BYSTR
    ;

// //TODO: See how to build types and ADTs
type_annot
    : COLON t=typ
    ;

id_with_typ
    : n=identifier t=type_annot
    ;


/****************************
 * Statements
 ****************************/    
stmt
    : l=identifier FETCH r=sid #Load 
    | r=remote_fetch_stmt #RemoteFetch
    | l=identifier ASSIGN r=sid #Store 
    | l=identifier EQ r=exp #Bind 
    | l=identifier FETCH AND c=cid #ReadFromBC
    | l=identifier FETCH r=identifier (keys+=map_access)+ #MapGet
    | l=identifier FETCH EXISTS r=identifier (keys+=map_access)+ #MapGetExists
    | l=identifier (keys+=map_access)+ ASSIGN r=sid #MapUpdate
    | DELETE l=identifier (keys+=map_access)+ #MapUpdateDelete
    | ACCEPT #Accept 
    | SEND m=sid #Send 
    | EVENT m=sid #CreateEvnt 
    | THROW (mopt=sid)? #Throw 
    | MATCH x=sid WITH (cs+=stmt_pm_clause)+ END #MatchStmt
    | p=component_id (args+=sid)* #CallProc
    | FORALL l=sid p=component_id #Iterate
    ;

remote_fetch_stmt 
    : l=identifier FETCH AND adr_id=identifier PERIOD r=sid
    | l=identifier FETCH AND adr_spid=SPID PERIOD SPID 
    | l=identifier FETCH AND adr_id=identifier PERIOD LPAREN r=sid RPAREN
    | l=identifier FETCH AND adr_id=identifier PERIOD r_id=identifier (keys+=map_access)+
    | l=identifier FETCH AND EXISTS adr_id=identifier PERIOD r_id=identifier (keys+=map_access)+
    | l=identifier FETCH AND adr=sid AS t=address_typ
    ;

stmt_pm_clause
    : BAR p=pattern ARROW (ss+=stmt (SEMICOLON ss+=stmt)*)*
    ;

stmts
    : ss+=stmt (SEMICOLON ss+=stmt)*
    ;

stmts_term
    : ss=stmts EOF
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
    : c=cid 
    | i=identifier
    ;

component_params
    : LPAREN (params+=param_pair (COMMA params+=param_pair)*)* RPAREN
    ; 

component_body 
    : (ss=stmts)? END 
    ;

field
    : FIELD iwt=id_with_typ EQ rhs=exp
    ;

with_constraint
    : WITH f=exp ARROW 
    ;

contract 
    : CONTRACT c=cid LPAREN (params+=param_pair (COMMA params+=param_pair)*)* RPAREN ct=with_constraint? (fs+=field)* (comps+=component)*
    ;

tconstr 
    : BAR tn=cid 
    | BAR tn=cid OF (t+=targ)+
    ;

libentry
    : LET ns=identifier t=type_annot? EQ e=exp 
    | TYPE tname=cid 
    | TYPE tname=cid EQ (constrs+=tconstr)+
    ; 

library
    : LIBRARY n=cid (ls+=libentry)*
    ;

lmodule
    : SCILLA_VERSION cver=NUMBER els=imports l=library EOF
    ; //TODO: lookup EOF

importname
    : c=cid 
    | c1=cid AS c2=cid 
    ;

imports
    : IMPORT (els+=importname)*
    ;

cmodule
    : SCILLA_VERSION cver=NUMBER (els=imports)? ls=library? c=contract EOF
    ;
