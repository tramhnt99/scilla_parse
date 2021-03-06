// Generated from /Users/tramhoang/Desktop/Y5/cs4215/scilla_parse/miniScilla.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class miniScillaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, FORALL=2, BUILTIN=3, LIBRARY=4, IMPORT=5, LET=6, IN=7, MATCH=8, 
		WITH=9, END=10, FUN=11, TFUN=12, CONTRACT=13, TRANSITION=14, SEND=15, 
		EVENT=16, FIELD=17, ACCEPT=18, EXISTS=19, DELETE=20, EMP=21, MAP=22, SCILLA_VERSION=23, 
		TYPE=24, OF=25, TRY=26, CATCH=27, AS=28, PROCEDURE=29, THROW=30, SEMICOLON=31, 
		COLON=32, PERIOD=33, BAR=34, LSQB=35, RSQB=36, LPAREN=37, RPAREN=38, LBRACE=39, 
		RBRACE=40, COMMA=41, ARROW=42, TARROW=43, EQ=44, AND=45, FETCH=46, ASSIGN=47, 
		AT=48, UNDERSCORE=49, BlockComment=50, NUMBER=51, STRING=52, FLOAT=53, 
		BOOLEAN=54, OPTION=55, HEX=56, INTTY=57, BYSTR=58, BNUM=59, MESSAGE=60, 
		EVENT_TY=61, WS=62, TOSKIP=63, ID=64, SPID=65, CID=66, TID=67;
	public static final int
		RULE_int_ = 0, RULE_prim_types = 1, RULE_t_map_key = 2, RULE_t_map_value_args = 3, 
		RULE_t_map_value = 4, RULE_t_map_value_allow_targs = 5, RULE_address_typ = 6, 
		RULE_typ = 7, RULE_targ = 8, RULE_address_type_field = 9, RULE_exp = 10, 
		RULE_simple_exp = 11, RULE_atomic_exp = 12, RULE_lit = 13, RULE_ctargs = 14, 
		RULE_map_access = 15, RULE_pattern = 16, RULE_arg_pattern = 17, RULE_exp_pm_clause = 18, 
		RULE_msg_entry = 19, RULE_builtin_args = 20, RULE_exp_term = 21, RULE_type_term = 22, 
		RULE_identifier = 23, RULE_sid = 24, RULE_scid = 25, RULE_cid = 26, RULE_type_annot = 27, 
		RULE_id_with_typ = 28, RULE_stmt = 29, RULE_remote_fetch_stmt = 30, RULE_stmt_pm_clause = 31, 
		RULE_stmts = 32, RULE_stmts_term = 33, RULE_param_pair = 34, RULE_component = 35, 
		RULE_procedure = 36, RULE_transition = 37, RULE_component_id = 38, RULE_component_params = 39, 
		RULE_component_body = 40, RULE_field = 41, RULE_with_constraint = 42, 
		RULE_contract = 43, RULE_tconstr = 44, RULE_libentry = 45, RULE_library = 46, 
		RULE_lmodule = 47, RULE_importname = 48, RULE_imports = 49, RULE_cmodule = 50;
	private static String[] makeRuleNames() {
		return new String[] {
			"int_", "prim_types", "t_map_key", "t_map_value_args", "t_map_value", 
			"t_map_value_allow_targs", "address_typ", "typ", "targ", "address_type_field", 
			"exp", "simple_exp", "atomic_exp", "lit", "ctargs", "map_access", "pattern", 
			"arg_pattern", "exp_pm_clause", "msg_entry", "builtin_args", "exp_term", 
			"type_term", "identifier", "sid", "scid", "cid", "type_annot", "id_with_typ", 
			"stmt", "remote_fetch_stmt", "stmt_pm_clause", "stmts", "stmts_term", 
			"param_pair", "component", "procedure", "transition", "component_id", 
			"component_params", "component_body", "field", "with_constraint", "contract", 
			"tconstr", "libentry", "library", "lmodule", "importname", "imports", 
			"cmodule"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'-'", "'forall'", "'builtin'", "'library'", "'import'", "'let'", 
			"'in'", "'match'", "'with'", "'end'", "'fun'", "'tfun'", "'contract'", 
			"'transition'", "'send'", "'event'", "'field'", "'accept'", "'exists'", 
			"'delete'", "'Emp'", "'Map'", "'scilla_version'", "'type'", "'of'", "'try'", 
			"'catch'", "'as'", "'procedure'", "'throw'", "';'", "':'", "'.'", "'|'", 
			"'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'=>'", "'->'", "'='", 
			"'&'", "'<-'", "':='", "'@'", "'_'", null, null, null, null, null, null, 
			null, null, null, "'BNum'", "'Message'", "'Event'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "FORALL", "BUILTIN", "LIBRARY", "IMPORT", "LET", "IN", "MATCH", 
			"WITH", "END", "FUN", "TFUN", "CONTRACT", "TRANSITION", "SEND", "EVENT", 
			"FIELD", "ACCEPT", "EXISTS", "DELETE", "EMP", "MAP", "SCILLA_VERSION", 
			"TYPE", "OF", "TRY", "CATCH", "AS", "PROCEDURE", "THROW", "SEMICOLON", 
			"COLON", "PERIOD", "BAR", "LSQB", "RSQB", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "COMMA", "ARROW", "TARROW", "EQ", "AND", "FETCH", "ASSIGN", 
			"AT", "UNDERSCORE", "BlockComment", "NUMBER", "STRING", "FLOAT", "BOOLEAN", 
			"OPTION", "HEX", "INTTY", "BYSTR", "BNUM", "MESSAGE", "EVENT_TY", "WS", 
			"TOSKIP", "ID", "SPID", "CID", "TID"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "miniScilla.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public miniScillaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class Int_Context extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(miniScillaParser.NUMBER, 0); }
		public Int_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_int_; }
	}

	public final Int_Context int_() throws RecognitionException {
		Int_Context _localctx = new Int_Context(_ctx, getState());
		enterRule(_localctx, 0, RULE_int_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(102);
				match(T__0);
				}
			}

			setState(105);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Prim_typesContext extends ParserRuleContext {
		public TerminalNode INTTY() { return getToken(miniScillaParser.INTTY, 0); }
		public TerminalNode BYSTR() { return getToken(miniScillaParser.BYSTR, 0); }
		public TerminalNode BNUM() { return getToken(miniScillaParser.BNUM, 0); }
		public TerminalNode MESSAGE() { return getToken(miniScillaParser.MESSAGE, 0); }
		public TerminalNode EVENT_TY() { return getToken(miniScillaParser.EVENT_TY, 0); }
		public Prim_typesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prim_types; }
	}

	public final Prim_typesContext prim_types() throws RecognitionException {
		Prim_typesContext _localctx = new Prim_typesContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_prim_types);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INTTY) | (1L << BYSTR) | (1L << BNUM) | (1L << MESSAGE) | (1L << EVENT_TY))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class T_map_keyContext extends ParserRuleContext {
		public ScidContext kt_to_map;
		public Address_typContext kt;
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public Address_typContext address_typ() {
			return getRuleContext(Address_typContext.class,0);
		}
		public T_map_keyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_t_map_key; }
	}

	public final T_map_keyContext t_map_key() throws RecognitionException {
		T_map_keyContext _localctx = new T_map_keyContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_t_map_key);
		try {
			setState(119);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(109);
				((T_map_keyContext)_localctx).kt_to_map = scid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(110);
				match(LPAREN);
				setState(111);
				((T_map_keyContext)_localctx).kt_to_map = scid();
				setState(112);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(114);
				match(LPAREN);
				setState(115);
				((T_map_keyContext)_localctx).kt = address_typ();
				setState(116);
				match(RPAREN);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(118);
				((T_map_keyContext)_localctx).kt = address_typ();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class T_map_value_argsContext extends ParserRuleContext {
		public T_map_value_allow_targsContext t;
		public ScidContext d;
		public T_map_keyContext k;
		public T_map_valueContext v;
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public T_map_value_allow_targsContext t_map_value_allow_targs() {
			return getRuleContext(T_map_value_allow_targsContext.class,0);
		}
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public TerminalNode MAP() { return getToken(miniScillaParser.MAP, 0); }
		public T_map_keyContext t_map_key() {
			return getRuleContext(T_map_keyContext.class,0);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
		public T_map_value_argsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_t_map_value_args; }
	}

	public final T_map_value_argsContext t_map_value_args() throws RecognitionException {
		T_map_value_argsContext _localctx = new T_map_value_argsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_t_map_value_args);
		try {
			setState(130);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(121);
				match(LPAREN);
				setState(122);
				((T_map_value_argsContext)_localctx).t = t_map_value_allow_targs();
				setState(123);
				match(RPAREN);
				}
				break;
			case BOOLEAN:
			case OPTION:
			case HEX:
			case INTTY:
			case BYSTR:
			case BNUM:
			case MESSAGE:
			case EVENT_TY:
			case CID:
				enterOuterAlt(_localctx, 2);
				{
				setState(125);
				((T_map_value_argsContext)_localctx).d = scid();
				}
				break;
			case MAP:
				enterOuterAlt(_localctx, 3);
				{
				setState(126);
				match(MAP);
				setState(127);
				((T_map_value_argsContext)_localctx).k = t_map_key();
				setState(128);
				((T_map_value_argsContext)_localctx).v = t_map_value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class T_map_valueContext extends ParserRuleContext {
		public ScidContext d;
		public T_map_keyContext k;
		public T_map_valueContext v;
		public T_map_value_allow_targsContext t;
		public Address_typContext vt;
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public TerminalNode MAP() { return getToken(miniScillaParser.MAP, 0); }
		public T_map_keyContext t_map_key() {
			return getRuleContext(T_map_keyContext.class,0);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public T_map_value_allow_targsContext t_map_value_allow_targs() {
			return getRuleContext(T_map_value_allow_targsContext.class,0);
		}
		public Address_typContext address_typ() {
			return getRuleContext(Address_typContext.class,0);
		}
		public Prim_typesContext prim_types() {
			return getRuleContext(Prim_typesContext.class,0);
		}
		public T_map_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_t_map_value; }
	}

	public final T_map_valueContext t_map_value() throws RecognitionException {
		T_map_valueContext _localctx = new T_map_valueContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_t_map_value);
		try {
			setState(143);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				((T_map_valueContext)_localctx).d = scid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
				match(MAP);
				setState(134);
				((T_map_valueContext)_localctx).k = t_map_key();
				setState(135);
				((T_map_valueContext)_localctx).v = t_map_value();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(137);
				match(LPAREN);
				setState(138);
				((T_map_valueContext)_localctx).t = t_map_value_allow_targs();
				setState(139);
				match(RPAREN);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(141);
				((T_map_valueContext)_localctx).vt = address_typ();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(142);
				prim_types();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class T_map_value_allow_targsContext extends ParserRuleContext {
		public ScidContext d;
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public List<T_map_value_argsContext> t_map_value_args() {
			return getRuleContexts(T_map_value_argsContext.class);
		}
		public T_map_value_argsContext t_map_value_args(int i) {
			return getRuleContext(T_map_value_argsContext.class,i);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
		public T_map_value_allow_targsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_t_map_value_allow_targs; }
	}

	public final T_map_value_allow_targsContext t_map_value_allow_targs() throws RecognitionException {
		T_map_value_allow_targsContext _localctx = new T_map_value_allow_targsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_t_map_value_allow_targs);
		int _la;
		try {
			setState(152);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(145);
				((T_map_value_allow_targsContext)_localctx).d = scid();
				setState(147); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(146);
					t_map_value_args();
					}
					}
					setState(149); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( ((((_la - 22)) & ~0x3f) == 0 && ((1L << (_la - 22)) & ((1L << (MAP - 22)) | (1L << (LPAREN - 22)) | (1L << (BOOLEAN - 22)) | (1L << (OPTION - 22)) | (1L << (HEX - 22)) | (1L << (INTTY - 22)) | (1L << (BYSTR - 22)) | (1L << (BNUM - 22)) | (1L << (MESSAGE - 22)) | (1L << (EVENT_TY - 22)) | (1L << (CID - 22)))) != 0) );
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(151);
				t_map_value();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Address_typContext extends ParserRuleContext {
		public CidContext d;
		public Address_type_fieldContext address_type_field;
		public List<Address_type_fieldContext> fs = new ArrayList<Address_type_fieldContext>();
		public Param_pairContext param_pair;
		public List<Param_pairContext> ps = new ArrayList<Param_pairContext>();
		public TerminalNode WITH() { return getToken(miniScillaParser.WITH, 0); }
		public TerminalNode END() { return getToken(miniScillaParser.END, 0); }
		public CidContext cid() {
			return getRuleContext(CidContext.class,0);
		}
		public TerminalNode CONTRACT() { return getToken(miniScillaParser.CONTRACT, 0); }
		public List<Address_type_fieldContext> address_type_field() {
			return getRuleContexts(Address_type_fieldContext.class);
		}
		public Address_type_fieldContext address_type_field(int i) {
			return getRuleContext(Address_type_fieldContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(miniScillaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(miniScillaParser.COMMA, i);
		}
		public List<TerminalNode> LPAREN() { return getTokens(miniScillaParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(miniScillaParser.LPAREN, i);
		}
		public List<Param_pairContext> param_pair() {
			return getRuleContexts(Param_pairContext.class);
		}
		public Param_pairContext param_pair(int i) {
			return getRuleContext(Param_pairContext.class,i);
		}
		public Address_typContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_address_typ; }
	}

	public final Address_typContext address_typ() throws RecognitionException {
		Address_typContext _localctx = new Address_typContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_address_typ);
		int _la;
		try {
			setState(199);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(154);
				((Address_typContext)_localctx).d = cid();
				setState(155);
				match(WITH);
				setState(156);
				match(END);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(158);
				((Address_typContext)_localctx).d = cid();
				setState(159);
				match(WITH);
				setState(160);
				match(CONTRACT);
				setState(171);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==FIELD) {
					{
					{
					setState(161);
					((Address_typContext)_localctx).address_type_field = address_type_field();
					((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
					setState(166);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(162);
						match(COMMA);
						setState(163);
						((Address_typContext)_localctx).address_type_field = address_type_field();
						((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
						}
						}
						setState(168);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
					}
					setState(173);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(174);
				match(END);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(176);
				((Address_typContext)_localctx).d = cid();
				setState(177);
				match(WITH);
				setState(178);
				match(CONTRACT);
				setState(179);
				match(LPAREN);
				setState(180);
				((Address_typContext)_localctx).param_pair = param_pair();
				((Address_typContext)_localctx).ps.add(((Address_typContext)_localctx).param_pair);
				setState(185);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(181);
					match(COMMA);
					setState(182);
					((Address_typContext)_localctx).param_pair = param_pair();
					((Address_typContext)_localctx).ps.add(((Address_typContext)_localctx).param_pair);
					}
					}
					setState(187);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(188);
				match(LPAREN);
				setState(189);
				((Address_typContext)_localctx).address_type_field = address_type_field();
				((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
				setState(194);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(190);
					match(COMMA);
					setState(191);
					((Address_typContext)_localctx).address_type_field = address_type_field();
					((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
					}
					}
					setState(196);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(197);
				match(END);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypContext extends ParserRuleContext {
		public TypContext t1;
		public ScidContext d;
		public TargContext targ;
		public List<TargContext> targs = new ArrayList<TargContext>();
		public T_map_keyContext k;
		public T_map_valueContext v;
		public TypContext t;
		public Address_typContext t_to_map;
		public Token tv;
		public Token t_var;
		public TypContext t2;
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public List<TargContext> targ() {
			return getRuleContexts(TargContext.class);
		}
		public TargContext targ(int i) {
			return getRuleContext(TargContext.class,i);
		}
		public TerminalNode MAP() { return getToken(miniScillaParser.MAP, 0); }
		public T_map_keyContext t_map_key() {
			return getRuleContext(T_map_keyContext.class,0);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public List<TypContext> typ() {
			return getRuleContexts(TypContext.class);
		}
		public TypContext typ(int i) {
			return getRuleContext(TypContext.class,i);
		}
		public Address_typContext address_typ() {
			return getRuleContext(Address_typContext.class,0);
		}
		public TerminalNode FORALL() { return getToken(miniScillaParser.FORALL, 0); }
		public TerminalNode PERIOD() { return getToken(miniScillaParser.PERIOD, 0); }
		public TerminalNode TID() { return getToken(miniScillaParser.TID, 0); }
		public Prim_typesContext prim_types() {
			return getRuleContext(Prim_typesContext.class,0);
		}
		public TerminalNode TARROW() { return getToken(miniScillaParser.TARROW, 0); }
		public TypContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typ; }
	}

	public final TypContext typ() throws RecognitionException {
		return typ(0);
	}

	private TypContext typ(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypContext _localctx = new TypContext(_ctx, _parentState);
		TypContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_typ, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(202);
				((TypContext)_localctx).d = scid();
				setState(206);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(203);
						((TypContext)_localctx).targ = targ();
						((TypContext)_localctx).targs.add(((TypContext)_localctx).targ);
						}
						} 
					}
					setState(208);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
				}
				}
				break;
			case 2:
				{
				setState(209);
				match(MAP);
				setState(210);
				((TypContext)_localctx).k = t_map_key();
				setState(211);
				((TypContext)_localctx).v = t_map_value();
				}
				break;
			case 3:
				{
				setState(213);
				match(LPAREN);
				setState(214);
				((TypContext)_localctx).t = typ(0);
				setState(215);
				match(RPAREN);
				}
				break;
			case 4:
				{
				setState(217);
				((TypContext)_localctx).t_to_map = address_typ();
				}
				break;
			case 5:
				{
				setState(218);
				match(FORALL);
				setState(219);
				((TypContext)_localctx).tv = match(TID);
				setState(220);
				match(PERIOD);
				setState(221);
				((TypContext)_localctx).t = typ(3);
				}
				break;
			case 6:
				{
				setState(222);
				((TypContext)_localctx).t_var = match(TID);
				}
				break;
			case 7:
				{
				setState(223);
				prim_types();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(231);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypContext(_parentctx, _parentState);
					_localctx.t1 = _prevctx;
					_localctx.t1 = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_typ);
					setState(226);
					if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
					setState(227);
					match(TARROW);
					setState(228);
					((TypContext)_localctx).t2 = typ(7);
					}
					} 
				}
				setState(233);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TargContext extends ParserRuleContext {
		public TypContext t;
		public ScidContext d;
		public Token t_var;
		public Address_typContext t_to_map;
		public T_map_keyContext k;
		public T_map_valueContext v;
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public TerminalNode TID() { return getToken(miniScillaParser.TID, 0); }
		public Address_typContext address_typ() {
			return getRuleContext(Address_typContext.class,0);
		}
		public TerminalNode MAP() { return getToken(miniScillaParser.MAP, 0); }
		public T_map_keyContext t_map_key() {
			return getRuleContext(T_map_keyContext.class,0);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
		public TargContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_targ; }
	}

	public final TargContext targ() throws RecognitionException {
		TargContext _localctx = new TargContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_targ);
		try {
			setState(245);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(234);
				match(LPAREN);
				setState(235);
				((TargContext)_localctx).t = typ(0);
				setState(236);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(238);
				((TargContext)_localctx).d = scid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(239);
				((TargContext)_localctx).t_var = match(TID);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(240);
				((TargContext)_localctx).t_to_map = address_typ();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(241);
				match(MAP);
				setState(242);
				((TargContext)_localctx).k = t_map_key();
				setState(243);
				((TargContext)_localctx).v = t_map_value();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Address_type_fieldContext extends ParserRuleContext {
		public IdentifierContext id;
		public TypContext ty;
		public TerminalNode FIELD() { return getToken(miniScillaParser.FIELD, 0); }
		public TerminalNode COLON() { return getToken(miniScillaParser.COLON, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public Address_type_fieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_address_type_field; }
	}

	public final Address_type_fieldContext address_type_field() throws RecognitionException {
		Address_type_fieldContext _localctx = new Address_type_fieldContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_address_type_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			match(FIELD);
			setState(248);
			((Address_type_fieldContext)_localctx).id = identifier();
			setState(249);
			match(COLON);
			setState(250);
			((Address_type_fieldContext)_localctx).ty = typ(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpContext extends ParserRuleContext {
		public Simple_expContext f;
		public Simple_expContext simple_exp() {
			return getRuleContext(Simple_expContext.class,0);
		}
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	}

	public final ExpContext exp() throws RecognitionException {
		ExpContext _localctx = new ExpContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_exp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(252);
			((ExpContext)_localctx).f = simple_exp();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Simple_expContext extends ParserRuleContext {
		public Simple_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simple_exp; }
	 
		public Simple_expContext() { }
		public void copyFrom(Simple_expContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AppContext extends Simple_expContext {
		public SidContext f_var;
		public SidContext sid;
		public List<SidContext> args = new ArrayList<SidContext>();
		public List<SidContext> sid() {
			return getRuleContexts(SidContext.class);
		}
		public SidContext sid(int i) {
			return getRuleContext(SidContext.class,i);
		}
		public AppContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class MessageContext extends Simple_expContext {
		public Msg_entryContext msg_entry;
		public List<Msg_entryContext> es = new ArrayList<Msg_entryContext>();
		public TerminalNode LBRACE() { return getToken(miniScillaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(miniScillaParser.RBRACE, 0); }
		public List<Msg_entryContext> msg_entry() {
			return getRuleContexts(Msg_entryContext.class);
		}
		public Msg_entryContext msg_entry(int i) {
			return getRuleContext(Msg_entryContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(miniScillaParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(miniScillaParser.SEMICOLON, i);
		}
		public MessageContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class LetContext extends Simple_expContext {
		public IdentifierContext x;
		public TypContext ty;
		public Simple_expContext f;
		public ExpContext e;
		public TerminalNode LET() { return getToken(miniScillaParser.LET, 0); }
		public TerminalNode EQ() { return getToken(miniScillaParser.EQ, 0); }
		public TerminalNode IN() { return getToken(miniScillaParser.IN, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Simple_expContext simple_exp() {
			return getRuleContext(Simple_expContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode COLON() { return getToken(miniScillaParser.COLON, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public LetContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class AtomicContext extends Simple_expContext {
		public Atomic_expContext a;
		public Atomic_expContext atomic_exp() {
			return getRuleContext(Atomic_expContext.class,0);
		}
		public AtomicContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class TAppContext extends Simple_expContext {
		public SidContext f;
		public TargContext targ;
		public List<TargContext> targs = new ArrayList<TargContext>();
		public TerminalNode AT() { return getToken(miniScillaParser.AT, 0); }
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public List<TargContext> targ() {
			return getRuleContexts(TargContext.class);
		}
		public TargContext targ(int i) {
			return getRuleContext(TargContext.class,i);
		}
		public TAppContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class TFunContext extends Simple_expContext {
		public Token i;
		public ExpContext e;
		public TerminalNode TFUN() { return getToken(miniScillaParser.TFUN, 0); }
		public TerminalNode ARROW() { return getToken(miniScillaParser.ARROW, 0); }
		public TerminalNode TID() { return getToken(miniScillaParser.TID, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TFunContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class DataConstructorAppContext extends Simple_expContext {
		public ScidContext c;
		public CtargsContext ts;
		public SidContext sid;
		public List<SidContext> args = new ArrayList<SidContext>();
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public CtargsContext ctargs() {
			return getRuleContext(CtargsContext.class,0);
		}
		public List<SidContext> sid() {
			return getRuleContexts(SidContext.class);
		}
		public SidContext sid(int i) {
			return getRuleContext(SidContext.class,i);
		}
		public DataConstructorAppContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class FunContext extends Simple_expContext {
		public IdentifierContext id;
		public TypContext ty;
		public ExpContext e;
		public TerminalNode FUN() { return getToken(miniScillaParser.FUN, 0); }
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode COLON() { return getToken(miniScillaParser.COLON, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public TerminalNode ARROW() { return getToken(miniScillaParser.ARROW, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public FunContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class BuiltinContext extends Simple_expContext {
		public IdentifierContext b;
		public CtargsContext ctargs;
		public List<CtargsContext> targs = new ArrayList<CtargsContext>();
		public Builtin_argsContext xs;
		public TerminalNode BUILTIN() { return getToken(miniScillaParser.BUILTIN, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Builtin_argsContext builtin_args() {
			return getRuleContext(Builtin_argsContext.class,0);
		}
		public List<CtargsContext> ctargs() {
			return getRuleContexts(CtargsContext.class);
		}
		public CtargsContext ctargs(int i) {
			return getRuleContext(CtargsContext.class,i);
		}
		public BuiltinContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class MatchContext extends Simple_expContext {
		public SidContext x_sid;
		public Exp_pm_clauseContext cs;
		public TerminalNode MATCH() { return getToken(miniScillaParser.MATCH, 0); }
		public TerminalNode WITH() { return getToken(miniScillaParser.WITH, 0); }
		public TerminalNode END() { return getToken(miniScillaParser.END, 0); }
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public List<Exp_pm_clauseContext> exp_pm_clause() {
			return getRuleContexts(Exp_pm_clauseContext.class);
		}
		public Exp_pm_clauseContext exp_pm_clause(int i) {
			return getRuleContext(Exp_pm_clauseContext.class,i);
		}
		public MatchContext(Simple_expContext ctx) { copyFrom(ctx); }
	}

	public final Simple_expContext simple_exp() throws RecognitionException {
		Simple_expContext _localctx = new Simple_expContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_simple_exp);
		int _la;
		try {
			int _alt;
			setState(334);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				_localctx = new LetContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(254);
				match(LET);
				setState(255);
				((LetContext)_localctx).x = identifier();
				setState(258);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(256);
					match(COLON);
					setState(257);
					((LetContext)_localctx).ty = typ(0);
					}
				}

				setState(260);
				match(EQ);
				setState(261);
				((LetContext)_localctx).f = simple_exp();
				setState(262);
				match(IN);
				setState(263);
				((LetContext)_localctx).e = exp();
				}
				break;
			case 2:
				_localctx = new FunContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(265);
				match(FUN);
				setState(266);
				match(LPAREN);
				setState(267);
				((FunContext)_localctx).id = identifier();
				setState(268);
				match(COLON);
				setState(269);
				((FunContext)_localctx).ty = typ(0);
				setState(270);
				match(RPAREN);
				setState(271);
				match(ARROW);
				setState(272);
				((FunContext)_localctx).e = exp();
				}
				break;
			case 3:
				_localctx = new AppContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(274);
				((AppContext)_localctx).f_var = sid();
				setState(276); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(275);
						((AppContext)_localctx).sid = sid();
						((AppContext)_localctx).args.add(((AppContext)_localctx).sid);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(278); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case 4:
				_localctx = new AtomicContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(280);
				((AtomicContext)_localctx).a = atomic_exp();
				}
				break;
			case 5:
				_localctx = new BuiltinContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(281);
				match(BUILTIN);
				setState(282);
				((BuiltinContext)_localctx).b = identifier();
				setState(286);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==LBRACE) {
					{
					{
					setState(283);
					((BuiltinContext)_localctx).ctargs = ctargs();
					((BuiltinContext)_localctx).targs.add(((BuiltinContext)_localctx).ctargs);
					}
					}
					setState(288);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(289);
				((BuiltinContext)_localctx).xs = builtin_args();
				}
				break;
			case 6:
				_localctx = new MessageContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(291);
				match(LBRACE);
				setState(292);
				((MessageContext)_localctx).msg_entry = msg_entry();
				((MessageContext)_localctx).es.add(((MessageContext)_localctx).msg_entry);
				setState(297);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEMICOLON) {
					{
					{
					setState(293);
					match(SEMICOLON);
					setState(294);
					((MessageContext)_localctx).msg_entry = msg_entry();
					((MessageContext)_localctx).es.add(((MessageContext)_localctx).msg_entry);
					}
					}
					setState(299);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(300);
				match(RBRACE);
				}
				break;
			case 7:
				_localctx = new MatchContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(302);
				match(MATCH);
				setState(303);
				((MatchContext)_localctx).x_sid = sid();
				setState(304);
				match(WITH);
				setState(308);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==BAR) {
					{
					{
					setState(305);
					((MatchContext)_localctx).cs = exp_pm_clause();
					}
					}
					setState(310);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(311);
				match(END);
				}
				break;
			case 8:
				_localctx = new DataConstructorAppContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(313);
				((DataConstructorAppContext)_localctx).c = scid();
				setState(315);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACE) {
					{
					setState(314);
					((DataConstructorAppContext)_localctx).ts = ctargs();
					}
				}

				setState(320);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(317);
						((DataConstructorAppContext)_localctx).sid = sid();
						((DataConstructorAppContext)_localctx).args.add(((DataConstructorAppContext)_localctx).sid);
						}
						} 
					}
					setState(322);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
				}
				}
				break;
			case 9:
				_localctx = new TFunContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(323);
				match(TFUN);
				setState(324);
				((TFunContext)_localctx).i = match(TID);
				setState(325);
				match(ARROW);
				setState(326);
				((TFunContext)_localctx).e = exp();
				}
				break;
			case 10:
				_localctx = new TAppContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(327);
				match(AT);
				setState(328);
				((TAppContext)_localctx).f = sid();
				setState(330); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(329);
						((TAppContext)_localctx).targ = targ();
						((TAppContext)_localctx).targs.add(((TAppContext)_localctx).targ);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(332); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Atomic_expContext extends ParserRuleContext {
		public SidContext i;
		public LitContext l;
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public LitContext lit() {
			return getRuleContext(LitContext.class,0);
		}
		public Atomic_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atomic_exp; }
	}

	public final Atomic_expContext atomic_exp() throws RecognitionException {
		Atomic_expContext _localctx = new Atomic_expContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_atomic_exp);
		try {
			setState(338);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(336);
				((Atomic_expContext)_localctx).i = sid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(337);
				((Atomic_expContext)_localctx).l = lit();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LitContext extends ParserRuleContext {
		public CidContext i;
		public Int_Context i_int;
		public Token i_number;
		public Token n;
		public Token h;
		public Token s;
		public T_map_keyContext kt;
		public T_map_valueContext vt;
		public Token b;
		public CidContext cid() {
			return getRuleContext(CidContext.class,0);
		}
		public TerminalNode INTTY() { return getToken(miniScillaParser.INTTY, 0); }
		public Int_Context int_() {
			return getRuleContext(Int_Context.class,0);
		}
		public TerminalNode BNUM() { return getToken(miniScillaParser.BNUM, 0); }
		public TerminalNode NUMBER() { return getToken(miniScillaParser.NUMBER, 0); }
		public TerminalNode HEX() { return getToken(miniScillaParser.HEX, 0); }
		public TerminalNode STRING() { return getToken(miniScillaParser.STRING, 0); }
		public TerminalNode EMP() { return getToken(miniScillaParser.EMP, 0); }
		public T_map_keyContext t_map_key() {
			return getRuleContext(T_map_keyContext.class,0);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
		public TerminalNode BOOLEAN() { return getToken(miniScillaParser.BOOLEAN, 0); }
		public LitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lit; }
	}

	public final LitContext lit() throws RecognitionException {
		LitContext _localctx = new LitContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_lit);
		try {
			setState(353);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BYSTR:
			case CID:
				enterOuterAlt(_localctx, 1);
				{
				setState(340);
				((LitContext)_localctx).i = cid();
				}
				break;
			case INTTY:
				enterOuterAlt(_localctx, 2);
				{
				setState(341);
				match(INTTY);
				setState(342);
				((LitContext)_localctx).i_int = int_();
				}
				break;
			case BNUM:
				enterOuterAlt(_localctx, 3);
				{
				setState(343);
				match(BNUM);
				setState(344);
				((LitContext)_localctx).i_number = match(NUMBER);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 4);
				{
				setState(345);
				((LitContext)_localctx).n = match(NUMBER);
				}
				break;
			case HEX:
				enterOuterAlt(_localctx, 5);
				{
				setState(346);
				((LitContext)_localctx).h = match(HEX);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 6);
				{
				setState(347);
				((LitContext)_localctx).s = match(STRING);
				}
				break;
			case EMP:
				enterOuterAlt(_localctx, 7);
				{
				setState(348);
				match(EMP);
				setState(349);
				((LitContext)_localctx).kt = t_map_key();
				setState(350);
				((LitContext)_localctx).vt = t_map_value();
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 8);
				{
				setState(352);
				((LitContext)_localctx).b = match(BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CtargsContext extends ParserRuleContext {
		public TargContext ts;
		public TerminalNode LBRACE() { return getToken(miniScillaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(miniScillaParser.RBRACE, 0); }
		public List<TargContext> targ() {
			return getRuleContexts(TargContext.class);
		}
		public TargContext targ(int i) {
			return getRuleContext(TargContext.class,i);
		}
		public CtargsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ctargs; }
	}

	public final CtargsContext ctargs() throws RecognitionException {
		CtargsContext _localctx = new CtargsContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_ctargs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			match(LBRACE);
			setState(359);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 22)) & ~0x3f) == 0 && ((1L << (_la - 22)) & ((1L << (MAP - 22)) | (1L << (LPAREN - 22)) | (1L << (BOOLEAN - 22)) | (1L << (OPTION - 22)) | (1L << (HEX - 22)) | (1L << (INTTY - 22)) | (1L << (BYSTR - 22)) | (1L << (BNUM - 22)) | (1L << (MESSAGE - 22)) | (1L << (EVENT_TY - 22)) | (1L << (CID - 22)) | (1L << (TID - 22)))) != 0)) {
				{
				{
				setState(356);
				((CtargsContext)_localctx).ts = targ();
				}
				}
				setState(361);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(362);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Map_accessContext extends ParserRuleContext {
		public SidContext i;
		public TerminalNode LSQB() { return getToken(miniScillaParser.LSQB, 0); }
		public TerminalNode RSQB() { return getToken(miniScillaParser.RSQB, 0); }
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public Map_accessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_map_access; }
	}

	public final Map_accessContext map_access() throws RecognitionException {
		Map_accessContext _localctx = new Map_accessContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_map_access);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(LSQB);
			setState(365);
			((Map_accessContext)_localctx).i = sid();
			setState(366);
			match(RSQB);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PatternContext extends ParserRuleContext {
		public PatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pattern; }
	 
		public PatternContext() { }
		public void copyFrom(PatternContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class BinderContext extends PatternContext {
		public IdentifierContext x;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public BinderContext(PatternContext ctx) { copyFrom(ctx); }
	}
	public static class WildcardContext extends PatternContext {
		public TerminalNode UNDERSCORE() { return getToken(miniScillaParser.UNDERSCORE, 0); }
		public WildcardContext(PatternContext ctx) { copyFrom(ctx); }
	}
	public static class ConstructorContext extends PatternContext {
		public ScidContext c;
		public Arg_patternContext ps;
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public List<Arg_patternContext> arg_pattern() {
			return getRuleContexts(Arg_patternContext.class);
		}
		public Arg_patternContext arg_pattern(int i) {
			return getRuleContext(Arg_patternContext.class,i);
		}
		public ConstructorContext(PatternContext ctx) { copyFrom(ctx); }
	}

	public final PatternContext pattern() throws RecognitionException {
		PatternContext _localctx = new PatternContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_pattern);
		int _la;
		try {
			setState(377);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				_localctx = new WildcardContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(368);
				match(UNDERSCORE);
				}
				break;
			case ID:
				_localctx = new BinderContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(369);
				((BinderContext)_localctx).x = identifier();
				}
				break;
			case BOOLEAN:
			case OPTION:
			case HEX:
			case INTTY:
			case BYSTR:
			case BNUM:
			case MESSAGE:
			case EVENT_TY:
			case CID:
				_localctx = new ConstructorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(370);
				((ConstructorContext)_localctx).c = scid();
				setState(374);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (((((_la - 37)) & ~0x3f) == 0 && ((1L << (_la - 37)) & ((1L << (LPAREN - 37)) | (1L << (UNDERSCORE - 37)) | (1L << (BOOLEAN - 37)) | (1L << (OPTION - 37)) | (1L << (HEX - 37)) | (1L << (INTTY - 37)) | (1L << (BYSTR - 37)) | (1L << (BNUM - 37)) | (1L << (MESSAGE - 37)) | (1L << (EVENT_TY - 37)) | (1L << (ID - 37)) | (1L << (CID - 37)))) != 0)) {
					{
					{
					setState(371);
					((ConstructorContext)_localctx).ps = arg_pattern();
					}
					}
					setState(376);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Arg_patternContext extends ParserRuleContext {
		public IdentifierContext x;
		public ScidContext c;
		public PatternContext p;
		public TerminalNode UNDERSCORE() { return getToken(miniScillaParser.UNDERSCORE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public Arg_patternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg_pattern; }
	}

	public final Arg_patternContext arg_pattern() throws RecognitionException {
		Arg_patternContext _localctx = new Arg_patternContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_arg_pattern);
		try {
			setState(386);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				enterOuterAlt(_localctx, 1);
				{
				setState(379);
				match(UNDERSCORE);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(380);
				((Arg_patternContext)_localctx).x = identifier();
				}
				break;
			case BOOLEAN:
			case OPTION:
			case HEX:
			case INTTY:
			case BYSTR:
			case BNUM:
			case MESSAGE:
			case EVENT_TY:
			case CID:
				enterOuterAlt(_localctx, 3);
				{
				setState(381);
				((Arg_patternContext)_localctx).c = scid();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 4);
				{
				setState(382);
				match(LPAREN);
				setState(383);
				((Arg_patternContext)_localctx).p = pattern();
				setState(384);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exp_pm_clauseContext extends ParserRuleContext {
		public PatternContext p;
		public ExpContext e;
		public TerminalNode BAR() { return getToken(miniScillaParser.BAR, 0); }
		public TerminalNode ARROW() { return getToken(miniScillaParser.ARROW, 0); }
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public Exp_pm_clauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp_pm_clause; }
	}

	public final Exp_pm_clauseContext exp_pm_clause() throws RecognitionException {
		Exp_pm_clauseContext _localctx = new Exp_pm_clauseContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_exp_pm_clause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(388);
			match(BAR);
			setState(389);
			((Exp_pm_clauseContext)_localctx).p = pattern();
			setState(390);
			match(ARROW);
			setState(391);
			((Exp_pm_clauseContext)_localctx).e = exp();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Msg_entryContext extends ParserRuleContext {
		public SidContext i;
		public LitContext l;
		public SidContext v;
		public TerminalNode COLON() { return getToken(miniScillaParser.COLON, 0); }
		public List<SidContext> sid() {
			return getRuleContexts(SidContext.class);
		}
		public SidContext sid(int i) {
			return getRuleContext(SidContext.class,i);
		}
		public LitContext lit() {
			return getRuleContext(LitContext.class,0);
		}
		public Msg_entryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_msg_entry; }
	}

	public final Msg_entryContext msg_entry() throws RecognitionException {
		Msg_entryContext _localctx = new Msg_entryContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_msg_entry);
		try {
			setState(401);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(393);
				((Msg_entryContext)_localctx).i = sid();
				setState(394);
				match(COLON);
				setState(395);
				((Msg_entryContext)_localctx).l = lit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(397);
				((Msg_entryContext)_localctx).i = sid();
				setState(398);
				match(COLON);
				setState(399);
				((Msg_entryContext)_localctx).v = sid();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Builtin_argsContext extends ParserRuleContext {
		public SidContext args;
		public List<SidContext> sid() {
			return getRuleContexts(SidContext.class);
		}
		public SidContext sid(int i) {
			return getRuleContext(SidContext.class,i);
		}
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public Builtin_argsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_builtin_args; }
	}

	public final Builtin_argsContext builtin_args() throws RecognitionException {
		Builtin_argsContext _localctx = new Builtin_argsContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_builtin_args);
		try {
			int _alt;
			setState(410);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BYSTR:
			case ID:
			case SPID:
			case CID:
				enterOuterAlt(_localctx, 1);
				{
				setState(404); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(403);
						((Builtin_argsContext)_localctx).args = sid();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(406); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(408);
				match(LPAREN);
				setState(409);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exp_termContext extends ParserRuleContext {
		public ExpContext e;
		public TerminalNode EOF() { return getToken(miniScillaParser.EOF, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public Exp_termContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp_term; }
	}

	public final Exp_termContext exp_term() throws RecognitionException {
		Exp_termContext _localctx = new Exp_termContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_exp_term);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			((Exp_termContext)_localctx).e = exp();
			setState(413);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Type_termContext extends ParserRuleContext {
		public TypContext t;
		public TerminalNode EOF() { return getToken(miniScillaParser.EOF, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public Type_termContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_term; }
	}

	public final Type_termContext type_term() throws RecognitionException {
		Type_termContext _localctx = new Type_termContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_type_term);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(415);
			((Type_termContext)_localctx).t = typ(0);
			setState(416);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(miniScillaParser.ID, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(418);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SidContext extends ParserRuleContext {
		public IdentifierContext name;
		public Token name_spid;
		public CidContext ns;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SPID() { return getToken(miniScillaParser.SPID, 0); }
		public TerminalNode PERIOD() { return getToken(miniScillaParser.PERIOD, 0); }
		public CidContext cid() {
			return getRuleContext(CidContext.class,0);
		}
		public SidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sid; }
	}

	public final SidContext sid() throws RecognitionException {
		SidContext _localctx = new SidContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_sid);
		try {
			setState(426);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(420);
				((SidContext)_localctx).name = identifier();
				}
				break;
			case SPID:
				enterOuterAlt(_localctx, 2);
				{
				setState(421);
				((SidContext)_localctx).name_spid = match(SPID);
				}
				break;
			case BYSTR:
			case CID:
				enterOuterAlt(_localctx, 3);
				{
				setState(422);
				((SidContext)_localctx).ns = cid();
				setState(423);
				match(PERIOD);
				setState(424);
				((SidContext)_localctx).name = identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScidContext extends ParserRuleContext {
		public CidContext name;
		public CidContext ns;
		public Token ns_hex;
		public Token bool;
		public Token option;
		public Prim_typesContext prim;
		public List<CidContext> cid() {
			return getRuleContexts(CidContext.class);
		}
		public CidContext cid(int i) {
			return getRuleContext(CidContext.class,i);
		}
		public TerminalNode PERIOD() { return getToken(miniScillaParser.PERIOD, 0); }
		public TerminalNode HEX() { return getToken(miniScillaParser.HEX, 0); }
		public TerminalNode BOOLEAN() { return getToken(miniScillaParser.BOOLEAN, 0); }
		public TerminalNode OPTION() { return getToken(miniScillaParser.OPTION, 0); }
		public Prim_typesContext prim_types() {
			return getRuleContext(Prim_typesContext.class,0);
		}
		public ScidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scid; }
	}

	public final ScidContext scid() throws RecognitionException {
		ScidContext _localctx = new ScidContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_scid);
		try {
			setState(439);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(428);
				((ScidContext)_localctx).name = cid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(429);
				((ScidContext)_localctx).ns = cid();
				setState(430);
				match(PERIOD);
				setState(431);
				((ScidContext)_localctx).name = cid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(433);
				((ScidContext)_localctx).ns_hex = match(HEX);
				setState(434);
				match(PERIOD);
				setState(435);
				((ScidContext)_localctx).name = cid();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(436);
				((ScidContext)_localctx).bool = match(BOOLEAN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(437);
				((ScidContext)_localctx).option = match(OPTION);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(438);
				((ScidContext)_localctx).prim = prim_types();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CidContext extends ParserRuleContext {
		public TerminalNode CID() { return getToken(miniScillaParser.CID, 0); }
		public TerminalNode BYSTR() { return getToken(miniScillaParser.BYSTR, 0); }
		public CidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cid; }
	}

	public final CidContext cid() throws RecognitionException {
		CidContext _localctx = new CidContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_cid);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(441);
			_la = _input.LA(1);
			if ( !(_la==BYSTR || _la==CID) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Type_annotContext extends ParserRuleContext {
		public TypContext t;
		public TerminalNode COLON() { return getToken(miniScillaParser.COLON, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public Type_annotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_annot; }
	}

	public final Type_annotContext type_annot() throws RecognitionException {
		Type_annotContext _localctx = new Type_annotContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_type_annot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(443);
			match(COLON);
			setState(444);
			((Type_annotContext)_localctx).t = typ(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Id_with_typContext extends ParserRuleContext {
		public IdentifierContext n;
		public Type_annotContext t;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Type_annotContext type_annot() {
			return getRuleContext(Type_annotContext.class,0);
		}
		public Id_with_typContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id_with_typ; }
	}

	public final Id_with_typContext id_with_typ() throws RecognitionException {
		Id_with_typContext _localctx = new Id_with_typContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_id_with_typ);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			((Id_with_typContext)_localctx).n = identifier();
			setState(447);
			((Id_with_typContext)_localctx).t = type_annot();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StmtContext extends ParserRuleContext {
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	 
		public StmtContext() { }
		public void copyFrom(StmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LoadContext extends StmtContext {
		public IdentifierContext l;
		public SidContext r;
		public TerminalNode FETCH() { return getToken(miniScillaParser.FETCH, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public LoadContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class BindContext extends StmtContext {
		public IdentifierContext l;
		public ExpContext r;
		public TerminalNode EQ() { return getToken(miniScillaParser.EQ, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public BindContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class RemoteFetchContext extends StmtContext {
		public Remote_fetch_stmtContext r;
		public Remote_fetch_stmtContext remote_fetch_stmt() {
			return getRuleContext(Remote_fetch_stmtContext.class,0);
		}
		public RemoteFetchContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class MapUpdateContext extends StmtContext {
		public IdentifierContext l;
		public Map_accessContext map_access;
		public List<Map_accessContext> keys = new ArrayList<Map_accessContext>();
		public SidContext r;
		public TerminalNode ASSIGN() { return getToken(miniScillaParser.ASSIGN, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public List<Map_accessContext> map_access() {
			return getRuleContexts(Map_accessContext.class);
		}
		public Map_accessContext map_access(int i) {
			return getRuleContext(Map_accessContext.class,i);
		}
		public MapUpdateContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class AcceptContext extends StmtContext {
		public TerminalNode ACCEPT() { return getToken(miniScillaParser.ACCEPT, 0); }
		public AcceptContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class MatchStmtContext extends StmtContext {
		public SidContext x;
		public Stmt_pm_clauseContext stmt_pm_clause;
		public List<Stmt_pm_clauseContext> cs = new ArrayList<Stmt_pm_clauseContext>();
		public TerminalNode MATCH() { return getToken(miniScillaParser.MATCH, 0); }
		public TerminalNode WITH() { return getToken(miniScillaParser.WITH, 0); }
		public TerminalNode END() { return getToken(miniScillaParser.END, 0); }
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public List<Stmt_pm_clauseContext> stmt_pm_clause() {
			return getRuleContexts(Stmt_pm_clauseContext.class);
		}
		public Stmt_pm_clauseContext stmt_pm_clause(int i) {
			return getRuleContext(Stmt_pm_clauseContext.class,i);
		}
		public MatchStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class IterateContext extends StmtContext {
		public SidContext l;
		public Component_idContext p;
		public TerminalNode FORALL() { return getToken(miniScillaParser.FORALL, 0); }
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public Component_idContext component_id() {
			return getRuleContext(Component_idContext.class,0);
		}
		public IterateContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class StoreContext extends StmtContext {
		public IdentifierContext l;
		public SidContext r;
		public TerminalNode ASSIGN() { return getToken(miniScillaParser.ASSIGN, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public StoreContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class MapGetContext extends StmtContext {
		public IdentifierContext l;
		public IdentifierContext r;
		public Map_accessContext map_access;
		public List<Map_accessContext> keys = new ArrayList<Map_accessContext>();
		public TerminalNode FETCH() { return getToken(miniScillaParser.FETCH, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<Map_accessContext> map_access() {
			return getRuleContexts(Map_accessContext.class);
		}
		public Map_accessContext map_access(int i) {
			return getRuleContext(Map_accessContext.class,i);
		}
		public MapGetContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class SendContext extends StmtContext {
		public SidContext m;
		public TerminalNode SEND() { return getToken(miniScillaParser.SEND, 0); }
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public SendContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class MapGetExistsContext extends StmtContext {
		public IdentifierContext l;
		public IdentifierContext r;
		public Map_accessContext map_access;
		public List<Map_accessContext> keys = new ArrayList<Map_accessContext>();
		public TerminalNode FETCH() { return getToken(miniScillaParser.FETCH, 0); }
		public TerminalNode EXISTS() { return getToken(miniScillaParser.EXISTS, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<Map_accessContext> map_access() {
			return getRuleContexts(Map_accessContext.class);
		}
		public Map_accessContext map_access(int i) {
			return getRuleContext(Map_accessContext.class,i);
		}
		public MapGetExistsContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class CreateEvntContext extends StmtContext {
		public SidContext m;
		public TerminalNode EVENT() { return getToken(miniScillaParser.EVENT, 0); }
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public CreateEvntContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ReadFromBCContext extends StmtContext {
		public IdentifierContext l;
		public CidContext c;
		public TerminalNode FETCH() { return getToken(miniScillaParser.FETCH, 0); }
		public TerminalNode AND() { return getToken(miniScillaParser.AND, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public CidContext cid() {
			return getRuleContext(CidContext.class,0);
		}
		public ReadFromBCContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ThrowContext extends StmtContext {
		public SidContext mopt;
		public TerminalNode THROW() { return getToken(miniScillaParser.THROW, 0); }
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public ThrowContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class CallProcContext extends StmtContext {
		public Component_idContext p;
		public SidContext sid;
		public List<SidContext> args = new ArrayList<SidContext>();
		public Component_idContext component_id() {
			return getRuleContext(Component_idContext.class,0);
		}
		public List<SidContext> sid() {
			return getRuleContexts(SidContext.class);
		}
		public SidContext sid(int i) {
			return getRuleContext(SidContext.class,i);
		}
		public CallProcContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class MapUpdateDeleteContext extends StmtContext {
		public IdentifierContext l;
		public Map_accessContext map_access;
		public List<Map_accessContext> keys = new ArrayList<Map_accessContext>();
		public TerminalNode DELETE() { return getToken(miniScillaParser.DELETE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<Map_accessContext> map_access() {
			return getRuleContexts(Map_accessContext.class);
		}
		public Map_accessContext map_access(int i) {
			return getRuleContext(Map_accessContext.class,i);
		}
		public MapUpdateDeleteContext(StmtContext ctx) { copyFrom(ctx); }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_stmt);
		int _la;
		try {
			int _alt;
			setState(530);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				_localctx = new LoadContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(449);
				((LoadContext)_localctx).l = identifier();
				setState(450);
				match(FETCH);
				setState(451);
				((LoadContext)_localctx).r = sid();
				}
				break;
			case 2:
				_localctx = new RemoteFetchContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(453);
				((RemoteFetchContext)_localctx).r = remote_fetch_stmt();
				}
				break;
			case 3:
				_localctx = new StoreContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(454);
				((StoreContext)_localctx).l = identifier();
				setState(455);
				match(ASSIGN);
				setState(456);
				((StoreContext)_localctx).r = sid();
				}
				break;
			case 4:
				_localctx = new BindContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(458);
				((BindContext)_localctx).l = identifier();
				setState(459);
				match(EQ);
				setState(460);
				((BindContext)_localctx).r = exp();
				}
				break;
			case 5:
				_localctx = new ReadFromBCContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(462);
				((ReadFromBCContext)_localctx).l = identifier();
				setState(463);
				match(FETCH);
				setState(464);
				match(AND);
				setState(465);
				((ReadFromBCContext)_localctx).c = cid();
				}
				break;
			case 6:
				_localctx = new MapGetContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(467);
				((MapGetContext)_localctx).l = identifier();
				setState(468);
				match(FETCH);
				setState(469);
				((MapGetContext)_localctx).r = identifier();
				setState(471); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(470);
					((MapGetContext)_localctx).map_access = map_access();
					((MapGetContext)_localctx).keys.add(((MapGetContext)_localctx).map_access);
					}
					}
					setState(473); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==LSQB );
				}
				break;
			case 7:
				_localctx = new MapGetExistsContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(475);
				((MapGetExistsContext)_localctx).l = identifier();
				setState(476);
				match(FETCH);
				setState(477);
				match(EXISTS);
				setState(478);
				((MapGetExistsContext)_localctx).r = identifier();
				setState(480); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(479);
					((MapGetExistsContext)_localctx).map_access = map_access();
					((MapGetExistsContext)_localctx).keys.add(((MapGetExistsContext)_localctx).map_access);
					}
					}
					setState(482); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==LSQB );
				}
				break;
			case 8:
				_localctx = new MapUpdateContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(484);
				((MapUpdateContext)_localctx).l = identifier();
				setState(486); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(485);
					((MapUpdateContext)_localctx).map_access = map_access();
					((MapUpdateContext)_localctx).keys.add(((MapUpdateContext)_localctx).map_access);
					}
					}
					setState(488); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==LSQB );
				setState(490);
				match(ASSIGN);
				setState(491);
				((MapUpdateContext)_localctx).r = sid();
				}
				break;
			case 9:
				_localctx = new MapUpdateDeleteContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(493);
				match(DELETE);
				setState(494);
				((MapUpdateDeleteContext)_localctx).l = identifier();
				setState(496); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(495);
					((MapUpdateDeleteContext)_localctx).map_access = map_access();
					((MapUpdateDeleteContext)_localctx).keys.add(((MapUpdateDeleteContext)_localctx).map_access);
					}
					}
					setState(498); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==LSQB );
				}
				break;
			case 10:
				_localctx = new AcceptContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(500);
				match(ACCEPT);
				}
				break;
			case 11:
				_localctx = new SendContext(_localctx);
				enterOuterAlt(_localctx, 11);
				{
				setState(501);
				match(SEND);
				setState(502);
				((SendContext)_localctx).m = sid();
				}
				break;
			case 12:
				_localctx = new CreateEvntContext(_localctx);
				enterOuterAlt(_localctx, 12);
				{
				setState(503);
				match(EVENT);
				setState(504);
				((CreateEvntContext)_localctx).m = sid();
				}
				break;
			case 13:
				_localctx = new ThrowContext(_localctx);
				enterOuterAlt(_localctx, 13);
				{
				setState(505);
				match(THROW);
				setState(507);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
				case 1:
					{
					setState(506);
					((ThrowContext)_localctx).mopt = sid();
					}
					break;
				}
				}
				break;
			case 14:
				_localctx = new MatchStmtContext(_localctx);
				enterOuterAlt(_localctx, 14);
				{
				setState(509);
				match(MATCH);
				setState(510);
				((MatchStmtContext)_localctx).x = sid();
				setState(511);
				match(WITH);
				setState(513); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(512);
					((MatchStmtContext)_localctx).stmt_pm_clause = stmt_pm_clause();
					((MatchStmtContext)_localctx).cs.add(((MatchStmtContext)_localctx).stmt_pm_clause);
					}
					}
					setState(515); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==BAR );
				setState(517);
				match(END);
				}
				break;
			case 15:
				_localctx = new CallProcContext(_localctx);
				enterOuterAlt(_localctx, 15);
				{
				setState(519);
				((CallProcContext)_localctx).p = component_id();
				setState(523);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(520);
						((CallProcContext)_localctx).sid = sid();
						((CallProcContext)_localctx).args.add(((CallProcContext)_localctx).sid);
						}
						} 
					}
					setState(525);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
				}
				}
				break;
			case 16:
				_localctx = new IterateContext(_localctx);
				enterOuterAlt(_localctx, 16);
				{
				setState(526);
				match(FORALL);
				setState(527);
				((IterateContext)_localctx).l = sid();
				setState(528);
				((IterateContext)_localctx).p = component_id();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Remote_fetch_stmtContext extends ParserRuleContext {
		public IdentifierContext l;
		public IdentifierContext adr_id;
		public SidContext r;
		public Token adr_spid;
		public IdentifierContext r_id;
		public Map_accessContext map_access;
		public List<Map_accessContext> keys = new ArrayList<Map_accessContext>();
		public SidContext adr;
		public Address_typContext t;
		public TerminalNode FETCH() { return getToken(miniScillaParser.FETCH, 0); }
		public TerminalNode AND() { return getToken(miniScillaParser.AND, 0); }
		public TerminalNode PERIOD() { return getToken(miniScillaParser.PERIOD, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public List<TerminalNode> SPID() { return getTokens(miniScillaParser.SPID); }
		public TerminalNode SPID(int i) {
			return getToken(miniScillaParser.SPID, i);
		}
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public List<Map_accessContext> map_access() {
			return getRuleContexts(Map_accessContext.class);
		}
		public Map_accessContext map_access(int i) {
			return getRuleContext(Map_accessContext.class,i);
		}
		public TerminalNode EXISTS() { return getToken(miniScillaParser.EXISTS, 0); }
		public TerminalNode AS() { return getToken(miniScillaParser.AS, 0); }
		public Address_typContext address_typ() {
			return getRuleContext(Address_typContext.class,0);
		}
		public Remote_fetch_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_remote_fetch_stmt; }
	}

	public final Remote_fetch_stmtContext remote_fetch_stmt() throws RecognitionException {
		Remote_fetch_stmtContext _localctx = new Remote_fetch_stmtContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_remote_fetch_stmt);
		int _la;
		try {
			setState(585);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(532);
				((Remote_fetch_stmtContext)_localctx).l = identifier();
				setState(533);
				match(FETCH);
				setState(534);
				match(AND);
				setState(535);
				((Remote_fetch_stmtContext)_localctx).adr_id = identifier();
				setState(536);
				match(PERIOD);
				setState(537);
				((Remote_fetch_stmtContext)_localctx).r = sid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(539);
				((Remote_fetch_stmtContext)_localctx).l = identifier();
				setState(540);
				match(FETCH);
				setState(541);
				match(AND);
				setState(542);
				((Remote_fetch_stmtContext)_localctx).adr_spid = match(SPID);
				setState(543);
				match(PERIOD);
				setState(544);
				match(SPID);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(546);
				((Remote_fetch_stmtContext)_localctx).l = identifier();
				setState(547);
				match(FETCH);
				setState(548);
				match(AND);
				setState(549);
				((Remote_fetch_stmtContext)_localctx).adr_id = identifier();
				setState(550);
				match(PERIOD);
				setState(551);
				match(LPAREN);
				setState(552);
				((Remote_fetch_stmtContext)_localctx).r = sid();
				setState(553);
				match(RPAREN);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(555);
				((Remote_fetch_stmtContext)_localctx).l = identifier();
				setState(556);
				match(FETCH);
				setState(557);
				match(AND);
				setState(558);
				((Remote_fetch_stmtContext)_localctx).adr_id = identifier();
				setState(559);
				match(PERIOD);
				setState(560);
				((Remote_fetch_stmtContext)_localctx).r_id = identifier();
				setState(562); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(561);
					((Remote_fetch_stmtContext)_localctx).map_access = map_access();
					((Remote_fetch_stmtContext)_localctx).keys.add(((Remote_fetch_stmtContext)_localctx).map_access);
					}
					}
					setState(564); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==LSQB );
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(566);
				((Remote_fetch_stmtContext)_localctx).l = identifier();
				setState(567);
				match(FETCH);
				setState(568);
				match(AND);
				setState(569);
				match(EXISTS);
				setState(570);
				((Remote_fetch_stmtContext)_localctx).adr_id = identifier();
				setState(571);
				match(PERIOD);
				setState(572);
				((Remote_fetch_stmtContext)_localctx).r_id = identifier();
				setState(574); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(573);
					((Remote_fetch_stmtContext)_localctx).map_access = map_access();
					((Remote_fetch_stmtContext)_localctx).keys.add(((Remote_fetch_stmtContext)_localctx).map_access);
					}
					}
					setState(576); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==LSQB );
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(578);
				((Remote_fetch_stmtContext)_localctx).l = identifier();
				setState(579);
				match(FETCH);
				setState(580);
				match(AND);
				setState(581);
				((Remote_fetch_stmtContext)_localctx).adr = sid();
				setState(582);
				match(AS);
				setState(583);
				((Remote_fetch_stmtContext)_localctx).t = address_typ();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stmt_pm_clauseContext extends ParserRuleContext {
		public PatternContext p;
		public StmtContext stmt;
		public List<StmtContext> ss = new ArrayList<StmtContext>();
		public TerminalNode BAR() { return getToken(miniScillaParser.BAR, 0); }
		public TerminalNode ARROW() { return getToken(miniScillaParser.ARROW, 0); }
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(miniScillaParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(miniScillaParser.SEMICOLON, i);
		}
		public Stmt_pm_clauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt_pm_clause; }
	}

	public final Stmt_pm_clauseContext stmt_pm_clause() throws RecognitionException {
		Stmt_pm_clauseContext _localctx = new Stmt_pm_clauseContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_stmt_pm_clause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(587);
			match(BAR);
			setState(588);
			((Stmt_pm_clauseContext)_localctx).p = pattern();
			setState(589);
			match(ARROW);
			setState(600);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FORALL) | (1L << MATCH) | (1L << SEND) | (1L << EVENT) | (1L << ACCEPT) | (1L << DELETE) | (1L << THROW) | (1L << BYSTR))) != 0) || _la==ID || _la==CID) {
				{
				{
				setState(590);
				((Stmt_pm_clauseContext)_localctx).stmt = stmt();
				((Stmt_pm_clauseContext)_localctx).ss.add(((Stmt_pm_clauseContext)_localctx).stmt);
				setState(595);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEMICOLON) {
					{
					{
					setState(591);
					match(SEMICOLON);
					setState(592);
					((Stmt_pm_clauseContext)_localctx).stmt = stmt();
					((Stmt_pm_clauseContext)_localctx).ss.add(((Stmt_pm_clauseContext)_localctx).stmt);
					}
					}
					setState(597);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(602);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StmtsContext extends ParserRuleContext {
		public StmtContext stmt;
		public List<StmtContext> ss = new ArrayList<StmtContext>();
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(miniScillaParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(miniScillaParser.SEMICOLON, i);
		}
		public StmtsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmts; }
	}

	public final StmtsContext stmts() throws RecognitionException {
		StmtsContext _localctx = new StmtsContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_stmts);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(603);
			((StmtsContext)_localctx).stmt = stmt();
			((StmtsContext)_localctx).ss.add(((StmtsContext)_localctx).stmt);
			setState(608);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEMICOLON) {
				{
				{
				setState(604);
				match(SEMICOLON);
				setState(605);
				((StmtsContext)_localctx).stmt = stmt();
				((StmtsContext)_localctx).ss.add(((StmtsContext)_localctx).stmt);
				}
				}
				setState(610);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stmts_termContext extends ParserRuleContext {
		public StmtsContext ss;
		public TerminalNode EOF() { return getToken(miniScillaParser.EOF, 0); }
		public StmtsContext stmts() {
			return getRuleContext(StmtsContext.class,0);
		}
		public Stmts_termContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmts_term; }
	}

	public final Stmts_termContext stmts_term() throws RecognitionException {
		Stmts_termContext _localctx = new Stmts_termContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_stmts_term);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(611);
			((Stmts_termContext)_localctx).ss = stmts();
			setState(612);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Param_pairContext extends ParserRuleContext {
		public Id_with_typContext iwt;
		public Id_with_typContext id_with_typ() {
			return getRuleContext(Id_with_typContext.class,0);
		}
		public Param_pairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param_pair; }
	}

	public final Param_pairContext param_pair() throws RecognitionException {
		Param_pairContext _localctx = new Param_pairContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_param_pair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(614);
			((Param_pairContext)_localctx).iwt = id_with_typ();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentContext extends ParserRuleContext {
		public TransitionContext t;
		public ProcedureContext p;
		public TransitionContext transition() {
			return getRuleContext(TransitionContext.class,0);
		}
		public ProcedureContext procedure() {
			return getRuleContext(ProcedureContext.class,0);
		}
		public ComponentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_component; }
	}

	public final ComponentContext component() throws RecognitionException {
		ComponentContext _localctx = new ComponentContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_component);
		try {
			setState(618);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TRANSITION:
				enterOuterAlt(_localctx, 1);
				{
				setState(616);
				((ComponentContext)_localctx).t = transition();
				}
				break;
			case PROCEDURE:
				enterOuterAlt(_localctx, 2);
				{
				setState(617);
				((ComponentContext)_localctx).p = procedure();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcedureContext extends ParserRuleContext {
		public Component_idContext t;
		public Component_paramsContext params;
		public Component_bodyContext ss;
		public TerminalNode PROCEDURE() { return getToken(miniScillaParser.PROCEDURE, 0); }
		public Component_idContext component_id() {
			return getRuleContext(Component_idContext.class,0);
		}
		public Component_paramsContext component_params() {
			return getRuleContext(Component_paramsContext.class,0);
		}
		public Component_bodyContext component_body() {
			return getRuleContext(Component_bodyContext.class,0);
		}
		public ProcedureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedure; }
	}

	public final ProcedureContext procedure() throws RecognitionException {
		ProcedureContext _localctx = new ProcedureContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_procedure);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(620);
			match(PROCEDURE);
			setState(621);
			((ProcedureContext)_localctx).t = component_id();
			setState(622);
			((ProcedureContext)_localctx).params = component_params();
			setState(623);
			((ProcedureContext)_localctx).ss = component_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TransitionContext extends ParserRuleContext {
		public Component_idContext t;
		public Component_paramsContext params;
		public Component_bodyContext ss;
		public TerminalNode TRANSITION() { return getToken(miniScillaParser.TRANSITION, 0); }
		public Component_idContext component_id() {
			return getRuleContext(Component_idContext.class,0);
		}
		public Component_paramsContext component_params() {
			return getRuleContext(Component_paramsContext.class,0);
		}
		public Component_bodyContext component_body() {
			return getRuleContext(Component_bodyContext.class,0);
		}
		public TransitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transition; }
	}

	public final TransitionContext transition() throws RecognitionException {
		TransitionContext _localctx = new TransitionContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_transition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(625);
			match(TRANSITION);
			setState(626);
			((TransitionContext)_localctx).t = component_id();
			setState(627);
			((TransitionContext)_localctx).params = component_params();
			setState(628);
			((TransitionContext)_localctx).ss = component_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Component_idContext extends ParserRuleContext {
		public CidContext c;
		public IdentifierContext i;
		public CidContext cid() {
			return getRuleContext(CidContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Component_idContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_component_id; }
	}

	public final Component_idContext component_id() throws RecognitionException {
		Component_idContext _localctx = new Component_idContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_component_id);
		try {
			setState(632);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BYSTR:
			case CID:
				enterOuterAlt(_localctx, 1);
				{
				setState(630);
				((Component_idContext)_localctx).c = cid();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(631);
				((Component_idContext)_localctx).i = identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Component_paramsContext extends ParserRuleContext {
		public Param_pairContext param_pair;
		public List<Param_pairContext> params = new ArrayList<Param_pairContext>();
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public List<Param_pairContext> param_pair() {
			return getRuleContexts(Param_pairContext.class);
		}
		public Param_pairContext param_pair(int i) {
			return getRuleContext(Param_pairContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(miniScillaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(miniScillaParser.COMMA, i);
		}
		public Component_paramsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_component_params; }
	}

	public final Component_paramsContext component_params() throws RecognitionException {
		Component_paramsContext _localctx = new Component_paramsContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_component_params);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(634);
			match(LPAREN);
			setState(645);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(635);
				((Component_paramsContext)_localctx).param_pair = param_pair();
				((Component_paramsContext)_localctx).params.add(((Component_paramsContext)_localctx).param_pair);
				setState(640);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(636);
					match(COMMA);
					setState(637);
					((Component_paramsContext)_localctx).param_pair = param_pair();
					((Component_paramsContext)_localctx).params.add(((Component_paramsContext)_localctx).param_pair);
					}
					}
					setState(642);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(647);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(648);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Component_bodyContext extends ParserRuleContext {
		public StmtsContext ss;
		public TerminalNode END() { return getToken(miniScillaParser.END, 0); }
		public StmtsContext stmts() {
			return getRuleContext(StmtsContext.class,0);
		}
		public Component_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_component_body; }
	}

	public final Component_bodyContext component_body() throws RecognitionException {
		Component_bodyContext _localctx = new Component_bodyContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_component_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(651);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FORALL) | (1L << MATCH) | (1L << SEND) | (1L << EVENT) | (1L << ACCEPT) | (1L << DELETE) | (1L << THROW) | (1L << BYSTR))) != 0) || _la==ID || _la==CID) {
				{
				setState(650);
				((Component_bodyContext)_localctx).ss = stmts();
				}
			}

			setState(653);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldContext extends ParserRuleContext {
		public Id_with_typContext iwt;
		public ExpContext rhs;
		public TerminalNode FIELD() { return getToken(miniScillaParser.FIELD, 0); }
		public TerminalNode EQ() { return getToken(miniScillaParser.EQ, 0); }
		public Id_with_typContext id_with_typ() {
			return getRuleContext(Id_with_typContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(655);
			match(FIELD);
			setState(656);
			((FieldContext)_localctx).iwt = id_with_typ();
			setState(657);
			match(EQ);
			setState(658);
			((FieldContext)_localctx).rhs = exp();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class With_constraintContext extends ParserRuleContext {
		public ExpContext f;
		public TerminalNode WITH() { return getToken(miniScillaParser.WITH, 0); }
		public TerminalNode ARROW() { return getToken(miniScillaParser.ARROW, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public With_constraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_with_constraint; }
	}

	public final With_constraintContext with_constraint() throws RecognitionException {
		With_constraintContext _localctx = new With_constraintContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_with_constraint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(660);
			match(WITH);
			setState(661);
			((With_constraintContext)_localctx).f = exp();
			setState(662);
			match(ARROW);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContractContext extends ParserRuleContext {
		public CidContext c;
		public Param_pairContext param_pair;
		public List<Param_pairContext> params = new ArrayList<Param_pairContext>();
		public With_constraintContext ct;
		public FieldContext field;
		public List<FieldContext> fs = new ArrayList<FieldContext>();
		public ComponentContext component;
		public List<ComponentContext> comps = new ArrayList<ComponentContext>();
		public TerminalNode CONTRACT() { return getToken(miniScillaParser.CONTRACT, 0); }
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public CidContext cid() {
			return getRuleContext(CidContext.class,0);
		}
		public List<Param_pairContext> param_pair() {
			return getRuleContexts(Param_pairContext.class);
		}
		public Param_pairContext param_pair(int i) {
			return getRuleContext(Param_pairContext.class,i);
		}
		public With_constraintContext with_constraint() {
			return getRuleContext(With_constraintContext.class,0);
		}
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public List<ComponentContext> component() {
			return getRuleContexts(ComponentContext.class);
		}
		public ComponentContext component(int i) {
			return getRuleContext(ComponentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(miniScillaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(miniScillaParser.COMMA, i);
		}
		public ContractContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contract; }
	}

	public final ContractContext contract() throws RecognitionException {
		ContractContext _localctx = new ContractContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_contract);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(664);
			match(CONTRACT);
			setState(665);
			((ContractContext)_localctx).c = cid();
			setState(666);
			match(LPAREN);
			setState(677);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(667);
				((ContractContext)_localctx).param_pair = param_pair();
				((ContractContext)_localctx).params.add(((ContractContext)_localctx).param_pair);
				setState(672);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(668);
					match(COMMA);
					setState(669);
					((ContractContext)_localctx).param_pair = param_pair();
					((ContractContext)_localctx).params.add(((ContractContext)_localctx).param_pair);
					}
					}
					setState(674);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(679);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(680);
			match(RPAREN);
			setState(682);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WITH) {
				{
				setState(681);
				((ContractContext)_localctx).ct = with_constraint();
				}
			}

			setState(687);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FIELD) {
				{
				{
				setState(684);
				((ContractContext)_localctx).field = field();
				((ContractContext)_localctx).fs.add(((ContractContext)_localctx).field);
				}
				}
				setState(689);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(693);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TRANSITION || _la==PROCEDURE) {
				{
				{
				setState(690);
				((ContractContext)_localctx).component = component();
				((ContractContext)_localctx).comps.add(((ContractContext)_localctx).component);
				}
				}
				setState(695);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TconstrContext extends ParserRuleContext {
		public CidContext tn;
		public TargContext targ;
		public List<TargContext> t = new ArrayList<TargContext>();
		public TerminalNode BAR() { return getToken(miniScillaParser.BAR, 0); }
		public CidContext cid() {
			return getRuleContext(CidContext.class,0);
		}
		public TerminalNode OF() { return getToken(miniScillaParser.OF, 0); }
		public List<TargContext> targ() {
			return getRuleContexts(TargContext.class);
		}
		public TargContext targ(int i) {
			return getRuleContext(TargContext.class,i);
		}
		public TconstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tconstr; }
	}

	public final TconstrContext tconstr() throws RecognitionException {
		TconstrContext _localctx = new TconstrContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_tconstr);
		int _la;
		try {
			setState(706);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(696);
				match(BAR);
				setState(697);
				((TconstrContext)_localctx).tn = cid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(698);
				match(BAR);
				setState(699);
				((TconstrContext)_localctx).tn = cid();
				setState(700);
				match(OF);
				setState(702); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(701);
					((TconstrContext)_localctx).targ = targ();
					((TconstrContext)_localctx).t.add(((TconstrContext)_localctx).targ);
					}
					}
					setState(704); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( ((((_la - 22)) & ~0x3f) == 0 && ((1L << (_la - 22)) & ((1L << (MAP - 22)) | (1L << (LPAREN - 22)) | (1L << (BOOLEAN - 22)) | (1L << (OPTION - 22)) | (1L << (HEX - 22)) | (1L << (INTTY - 22)) | (1L << (BYSTR - 22)) | (1L << (BNUM - 22)) | (1L << (MESSAGE - 22)) | (1L << (EVENT_TY - 22)) | (1L << (CID - 22)) | (1L << (TID - 22)))) != 0) );
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LibentryContext extends ParserRuleContext {
		public IdentifierContext ns;
		public Type_annotContext t;
		public ExpContext e;
		public CidContext tname;
		public TconstrContext tconstr;
		public List<TconstrContext> constrs = new ArrayList<TconstrContext>();
		public TerminalNode LET() { return getToken(miniScillaParser.LET, 0); }
		public TerminalNode EQ() { return getToken(miniScillaParser.EQ, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public Type_annotContext type_annot() {
			return getRuleContext(Type_annotContext.class,0);
		}
		public TerminalNode TYPE() { return getToken(miniScillaParser.TYPE, 0); }
		public CidContext cid() {
			return getRuleContext(CidContext.class,0);
		}
		public List<TconstrContext> tconstr() {
			return getRuleContexts(TconstrContext.class);
		}
		public TconstrContext tconstr(int i) {
			return getRuleContext(TconstrContext.class,i);
		}
		public LibentryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_libentry; }
	}

	public final LibentryContext libentry() throws RecognitionException {
		LibentryContext _localctx = new LibentryContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_libentry);
		int _la;
		try {
			setState(726);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(708);
				match(LET);
				setState(709);
				((LibentryContext)_localctx).ns = identifier();
				setState(711);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(710);
					((LibentryContext)_localctx).t = type_annot();
					}
				}

				setState(713);
				match(EQ);
				setState(714);
				((LibentryContext)_localctx).e = exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(716);
				match(TYPE);
				setState(717);
				((LibentryContext)_localctx).tname = cid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(718);
				match(TYPE);
				setState(719);
				((LibentryContext)_localctx).tname = cid();
				setState(720);
				match(EQ);
				setState(722); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(721);
					((LibentryContext)_localctx).tconstr = tconstr();
					((LibentryContext)_localctx).constrs.add(((LibentryContext)_localctx).tconstr);
					}
					}
					setState(724); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==BAR );
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LibraryContext extends ParserRuleContext {
		public CidContext n;
		public LibentryContext libentry;
		public List<LibentryContext> ls = new ArrayList<LibentryContext>();
		public TerminalNode LIBRARY() { return getToken(miniScillaParser.LIBRARY, 0); }
		public CidContext cid() {
			return getRuleContext(CidContext.class,0);
		}
		public List<LibentryContext> libentry() {
			return getRuleContexts(LibentryContext.class);
		}
		public LibentryContext libentry(int i) {
			return getRuleContext(LibentryContext.class,i);
		}
		public LibraryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_library; }
	}

	public final LibraryContext library() throws RecognitionException {
		LibraryContext _localctx = new LibraryContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_library);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(728);
			match(LIBRARY);
			setState(729);
			((LibraryContext)_localctx).n = cid();
			setState(733);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LET || _la==TYPE) {
				{
				{
				setState(730);
				((LibraryContext)_localctx).libentry = libentry();
				((LibraryContext)_localctx).ls.add(((LibraryContext)_localctx).libentry);
				}
				}
				setState(735);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LmoduleContext extends ParserRuleContext {
		public Token cver;
		public ImportsContext els;
		public LibraryContext l;
		public TerminalNode SCILLA_VERSION() { return getToken(miniScillaParser.SCILLA_VERSION, 0); }
		public TerminalNode EOF() { return getToken(miniScillaParser.EOF, 0); }
		public TerminalNode NUMBER() { return getToken(miniScillaParser.NUMBER, 0); }
		public ImportsContext imports() {
			return getRuleContext(ImportsContext.class,0);
		}
		public LibraryContext library() {
			return getRuleContext(LibraryContext.class,0);
		}
		public LmoduleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lmodule; }
	}

	public final LmoduleContext lmodule() throws RecognitionException {
		LmoduleContext _localctx = new LmoduleContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_lmodule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(736);
			match(SCILLA_VERSION);
			setState(737);
			((LmoduleContext)_localctx).cver = match(NUMBER);
			setState(738);
			((LmoduleContext)_localctx).els = imports();
			setState(739);
			((LmoduleContext)_localctx).l = library();
			setState(740);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportnameContext extends ParserRuleContext {
		public CidContext c;
		public CidContext c1;
		public CidContext c2;
		public List<CidContext> cid() {
			return getRuleContexts(CidContext.class);
		}
		public CidContext cid(int i) {
			return getRuleContext(CidContext.class,i);
		}
		public TerminalNode AS() { return getToken(miniScillaParser.AS, 0); }
		public ImportnameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importname; }
	}

	public final ImportnameContext importname() throws RecognitionException {
		ImportnameContext _localctx = new ImportnameContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_importname);
		try {
			setState(747);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,65,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(742);
				((ImportnameContext)_localctx).c = cid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(743);
				((ImportnameContext)_localctx).c1 = cid();
				setState(744);
				match(AS);
				setState(745);
				((ImportnameContext)_localctx).c2 = cid();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportsContext extends ParserRuleContext {
		public ImportnameContext importname;
		public List<ImportnameContext> els = new ArrayList<ImportnameContext>();
		public TerminalNode IMPORT() { return getToken(miniScillaParser.IMPORT, 0); }
		public List<ImportnameContext> importname() {
			return getRuleContexts(ImportnameContext.class);
		}
		public ImportnameContext importname(int i) {
			return getRuleContext(ImportnameContext.class,i);
		}
		public ImportsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imports; }
	}

	public final ImportsContext imports() throws RecognitionException {
		ImportsContext _localctx = new ImportsContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_imports);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(749);
			match(IMPORT);
			setState(753);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BYSTR || _la==CID) {
				{
				{
				setState(750);
				((ImportsContext)_localctx).importname = importname();
				((ImportsContext)_localctx).els.add(((ImportsContext)_localctx).importname);
				}
				}
				setState(755);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CmoduleContext extends ParserRuleContext {
		public Token cver;
		public ImportsContext els;
		public LibraryContext ls;
		public ContractContext c;
		public TerminalNode SCILLA_VERSION() { return getToken(miniScillaParser.SCILLA_VERSION, 0); }
		public TerminalNode EOF() { return getToken(miniScillaParser.EOF, 0); }
		public TerminalNode NUMBER() { return getToken(miniScillaParser.NUMBER, 0); }
		public ContractContext contract() {
			return getRuleContext(ContractContext.class,0);
		}
		public ImportsContext imports() {
			return getRuleContext(ImportsContext.class,0);
		}
		public LibraryContext library() {
			return getRuleContext(LibraryContext.class,0);
		}
		public CmoduleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cmodule; }
	}

	public final CmoduleContext cmodule() throws RecognitionException {
		CmoduleContext _localctx = new CmoduleContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_cmodule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(756);
			match(SCILLA_VERSION);
			setState(757);
			((CmoduleContext)_localctx).cver = match(NUMBER);
			setState(759);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPORT) {
				{
				setState(758);
				((CmoduleContext)_localctx).els = imports();
				}
			}

			setState(762);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIBRARY) {
				{
				setState(761);
				((CmoduleContext)_localctx).ls = library();
				}
			}

			setState(764);
			((CmoduleContext)_localctx).c = contract();
			setState(765);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 7:
			return typ_sempred((TypContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean typ_sempred(TypContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3E\u0302\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\3\2\5\2j\n\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\5\4z\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5\u0085\n\5\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u0092\n\6\3\7\3\7\6\7\u0096\n"+
		"\7\r\7\16\7\u0097\3\7\5\7\u009b\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\7\b\u00a7\n\b\f\b\16\b\u00aa\13\b\7\b\u00ac\n\b\f\b\16\b\u00af"+
		"\13\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u00ba\n\b\f\b\16\b\u00bd"+
		"\13\b\3\b\3\b\3\b\3\b\7\b\u00c3\n\b\f\b\16\b\u00c6\13\b\3\b\3\b\5\b\u00ca"+
		"\n\b\3\t\3\t\3\t\7\t\u00cf\n\t\f\t\16\t\u00d2\13\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u00e3\n\t\3\t\3\t\3\t\7\t"+
		"\u00e8\n\t\f\t\16\t\u00eb\13\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\5\n\u00f8\n\n\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\r\5"+
		"\r\u0105\n\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\6\r\u0117\n\r\r\r\16\r\u0118\3\r\3\r\3\r\3\r\7\r\u011f\n\r\f\r"+
		"\16\r\u0122\13\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u012a\n\r\f\r\16\r\u012d"+
		"\13\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u0135\n\r\f\r\16\r\u0138\13\r\3\r\3"+
		"\r\3\r\3\r\5\r\u013e\n\r\3\r\7\r\u0141\n\r\f\r\16\r\u0144\13\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\6\r\u014d\n\r\r\r\16\r\u014e\5\r\u0151\n\r\3\16\3"+
		"\16\5\16\u0155\n\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\5\17\u0164\n\17\3\20\3\20\7\20\u0168\n\20\f\20\16\20\u016b"+
		"\13\20\3\20\3\20\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\7\22\u0177\n"+
		"\22\f\22\16\22\u017a\13\22\5\22\u017c\n\22\3\23\3\23\3\23\3\23\3\23\3"+
		"\23\3\23\5\23\u0185\n\23\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\3\25\5\25\u0194\n\25\3\26\6\26\u0197\n\26\r\26\16\26\u0198"+
		"\3\26\3\26\5\26\u019d\n\26\3\27\3\27\3\27\3\30\3\30\3\30\3\31\3\31\3\32"+
		"\3\32\3\32\3\32\3\32\3\32\5\32\u01ad\n\32\3\33\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\3\33\3\33\3\33\3\33\5\33\u01ba\n\33\3\34\3\34\3\35\3\35\3\35\3\36"+
		"\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\6\37\u01da\n\37\r\37"+
		"\16\37\u01db\3\37\3\37\3\37\3\37\3\37\6\37\u01e3\n\37\r\37\16\37\u01e4"+
		"\3\37\3\37\6\37\u01e9\n\37\r\37\16\37\u01ea\3\37\3\37\3\37\3\37\3\37\3"+
		"\37\6\37\u01f3\n\37\r\37\16\37\u01f4\3\37\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\5\37\u01fe\n\37\3\37\3\37\3\37\3\37\6\37\u0204\n\37\r\37\16\37\u0205"+
		"\3\37\3\37\3\37\3\37\7\37\u020c\n\37\f\37\16\37\u020f\13\37\3\37\3\37"+
		"\3\37\3\37\5\37\u0215\n\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3"+
		" \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \6 \u0235\n \r \16 \u0236"+
		"\3 \3 \3 \3 \3 \3 \3 \3 \6 \u0241\n \r \16 \u0242\3 \3 \3 \3 \3 \3 \3"+
		" \5 \u024c\n \3!\3!\3!\3!\3!\3!\7!\u0254\n!\f!\16!\u0257\13!\7!\u0259"+
		"\n!\f!\16!\u025c\13!\3\"\3\"\3\"\7\"\u0261\n\"\f\"\16\"\u0264\13\"\3#"+
		"\3#\3#\3$\3$\3%\3%\5%\u026d\n%\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3(\3"+
		"(\5(\u027b\n(\3)\3)\3)\3)\7)\u0281\n)\f)\16)\u0284\13)\7)\u0286\n)\f)"+
		"\16)\u0289\13)\3)\3)\3*\5*\u028e\n*\3*\3*\3+\3+\3+\3+\3+\3,\3,\3,\3,\3"+
		"-\3-\3-\3-\3-\3-\7-\u02a1\n-\f-\16-\u02a4\13-\7-\u02a6\n-\f-\16-\u02a9"+
		"\13-\3-\3-\5-\u02ad\n-\3-\7-\u02b0\n-\f-\16-\u02b3\13-\3-\7-\u02b6\n-"+
		"\f-\16-\u02b9\13-\3.\3.\3.\3.\3.\3.\6.\u02c1\n.\r.\16.\u02c2\5.\u02c5"+
		"\n.\3/\3/\3/\5/\u02ca\n/\3/\3/\3/\3/\3/\3/\3/\3/\3/\6/\u02d5\n/\r/\16"+
		"/\u02d6\5/\u02d9\n/\3\60\3\60\3\60\7\60\u02de\n\60\f\60\16\60\u02e1\13"+
		"\60\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\62\5\62\u02ee"+
		"\n\62\3\63\3\63\7\63\u02f2\n\63\f\63\16\63\u02f5\13\63\3\64\3\64\3\64"+
		"\5\64\u02fa\n\64\3\64\5\64\u02fd\n\64\3\64\3\64\3\64\3\64\2\3\20\65\2"+
		"\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJL"+
		"NPRTVXZ\\^`bdf\2\4\3\2;?\4\2<<DD\2\u034b\2i\3\2\2\2\4m\3\2\2\2\6y\3\2"+
		"\2\2\b\u0084\3\2\2\2\n\u0091\3\2\2\2\f\u009a\3\2\2\2\16\u00c9\3\2\2\2"+
		"\20\u00e2\3\2\2\2\22\u00f7\3\2\2\2\24\u00f9\3\2\2\2\26\u00fe\3\2\2\2\30"+
		"\u0150\3\2\2\2\32\u0154\3\2\2\2\34\u0163\3\2\2\2\36\u0165\3\2\2\2 \u016e"+
		"\3\2\2\2\"\u017b\3\2\2\2$\u0184\3\2\2\2&\u0186\3\2\2\2(\u0193\3\2\2\2"+
		"*\u019c\3\2\2\2,\u019e\3\2\2\2.\u01a1\3\2\2\2\60\u01a4\3\2\2\2\62\u01ac"+
		"\3\2\2\2\64\u01b9\3\2\2\2\66\u01bb\3\2\2\28\u01bd\3\2\2\2:\u01c0\3\2\2"+
		"\2<\u0214\3\2\2\2>\u024b\3\2\2\2@\u024d\3\2\2\2B\u025d\3\2\2\2D\u0265"+
		"\3\2\2\2F\u0268\3\2\2\2H\u026c\3\2\2\2J\u026e\3\2\2\2L\u0273\3\2\2\2N"+
		"\u027a\3\2\2\2P\u027c\3\2\2\2R\u028d\3\2\2\2T\u0291\3\2\2\2V\u0296\3\2"+
		"\2\2X\u029a\3\2\2\2Z\u02c4\3\2\2\2\\\u02d8\3\2\2\2^\u02da\3\2\2\2`\u02e2"+
		"\3\2\2\2b\u02ed\3\2\2\2d\u02ef\3\2\2\2f\u02f6\3\2\2\2hj\7\3\2\2ih\3\2"+
		"\2\2ij\3\2\2\2jk\3\2\2\2kl\7\65\2\2l\3\3\2\2\2mn\t\2\2\2n\5\3\2\2\2oz"+
		"\5\64\33\2pq\7\'\2\2qr\5\64\33\2rs\7(\2\2sz\3\2\2\2tu\7\'\2\2uv\5\16\b"+
		"\2vw\7(\2\2wz\3\2\2\2xz\5\16\b\2yo\3\2\2\2yp\3\2\2\2yt\3\2\2\2yx\3\2\2"+
		"\2z\7\3\2\2\2{|\7\'\2\2|}\5\f\7\2}~\7(\2\2~\u0085\3\2\2\2\177\u0085\5"+
		"\64\33\2\u0080\u0081\7\30\2\2\u0081\u0082\5\6\4\2\u0082\u0083\5\n\6\2"+
		"\u0083\u0085\3\2\2\2\u0084{\3\2\2\2\u0084\177\3\2\2\2\u0084\u0080\3\2"+
		"\2\2\u0085\t\3\2\2\2\u0086\u0092\5\64\33\2\u0087\u0088\7\30\2\2\u0088"+
		"\u0089\5\6\4\2\u0089\u008a\5\n\6\2\u008a\u0092\3\2\2\2\u008b\u008c\7\'"+
		"\2\2\u008c\u008d\5\f\7\2\u008d\u008e\7(\2\2\u008e\u0092\3\2\2\2\u008f"+
		"\u0092\5\16\b\2\u0090\u0092\5\4\3\2\u0091\u0086\3\2\2\2\u0091\u0087\3"+
		"\2\2\2\u0091\u008b\3\2\2\2\u0091\u008f\3\2\2\2\u0091\u0090\3\2\2\2\u0092"+
		"\13\3\2\2\2\u0093\u0095\5\64\33\2\u0094\u0096\5\b\5\2\u0095\u0094\3\2"+
		"\2\2\u0096\u0097\3\2\2\2\u0097\u0095\3\2\2\2\u0097\u0098\3\2\2\2\u0098"+
		"\u009b\3\2\2\2\u0099\u009b\5\n\6\2\u009a\u0093\3\2\2\2\u009a\u0099\3\2"+
		"\2\2\u009b\r\3\2\2\2\u009c\u009d\5\66\34\2\u009d\u009e\7\13\2\2\u009e"+
		"\u009f\7\f\2\2\u009f\u00ca\3\2\2\2\u00a0\u00a1\5\66\34\2\u00a1\u00a2\7"+
		"\13\2\2\u00a2\u00ad\7\17\2\2\u00a3\u00a8\5\24\13\2\u00a4\u00a5\7+\2\2"+
		"\u00a5\u00a7\5\24\13\2\u00a6\u00a4\3\2\2\2\u00a7\u00aa\3\2\2\2\u00a8\u00a6"+
		"\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8\3\2\2\2\u00ab"+
		"\u00a3\3\2\2\2\u00ac\u00af\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ad\u00ae\3\2"+
		"\2\2\u00ae\u00b0\3\2\2\2\u00af\u00ad\3\2\2\2\u00b0\u00b1\7\f\2\2\u00b1"+
		"\u00ca\3\2\2\2\u00b2\u00b3\5\66\34\2\u00b3\u00b4\7\13\2\2\u00b4\u00b5"+
		"\7\17\2\2\u00b5\u00b6\7\'\2\2\u00b6\u00bb\5F$\2\u00b7\u00b8\7+\2\2\u00b8"+
		"\u00ba\5F$\2\u00b9\u00b7\3\2\2\2\u00ba\u00bd\3\2\2\2\u00bb\u00b9\3\2\2"+
		"\2\u00bb\u00bc\3\2\2\2\u00bc\u00be\3\2\2\2\u00bd\u00bb\3\2\2\2\u00be\u00bf"+
		"\7\'\2\2\u00bf\u00c4\5\24\13\2\u00c0\u00c1\7+\2\2\u00c1\u00c3\5\24\13"+
		"\2\u00c2\u00c0\3\2\2\2\u00c3\u00c6\3\2\2\2\u00c4\u00c2\3\2\2\2\u00c4\u00c5"+
		"\3\2\2\2\u00c5\u00c7\3\2\2\2\u00c6\u00c4\3\2\2\2\u00c7\u00c8\7\f\2\2\u00c8"+
		"\u00ca\3\2\2\2\u00c9\u009c\3\2\2\2\u00c9\u00a0\3\2\2\2\u00c9\u00b2\3\2"+
		"\2\2\u00ca\17\3\2\2\2\u00cb\u00cc\b\t\1\2\u00cc\u00d0\5\64\33\2\u00cd"+
		"\u00cf\5\22\n\2\u00ce\u00cd\3\2\2\2\u00cf\u00d2\3\2\2\2\u00d0\u00ce\3"+
		"\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00e3\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d3"+
		"\u00d4\7\30\2\2\u00d4\u00d5\5\6\4\2\u00d5\u00d6\5\n\6\2\u00d6\u00e3\3"+
		"\2\2\2\u00d7\u00d8\7\'\2\2\u00d8\u00d9\5\20\t\2\u00d9\u00da\7(\2\2\u00da"+
		"\u00e3\3\2\2\2\u00db\u00e3\5\16\b\2\u00dc\u00dd\7\4\2\2\u00dd\u00de\7"+
		"E\2\2\u00de\u00df\7#\2\2\u00df\u00e3\5\20\t\5\u00e0\u00e3\7E\2\2\u00e1"+
		"\u00e3\5\4\3\2\u00e2\u00cb\3\2\2\2\u00e2\u00d3\3\2\2\2\u00e2\u00d7\3\2"+
		"\2\2\u00e2\u00db\3\2\2\2\u00e2\u00dc\3\2\2\2\u00e2\u00e0\3\2\2\2\u00e2"+
		"\u00e1\3\2\2\2\u00e3\u00e9\3\2\2\2\u00e4\u00e5\f\b\2\2\u00e5\u00e6\7-"+
		"\2\2\u00e6\u00e8\5\20\t\t\u00e7\u00e4\3\2\2\2\u00e8\u00eb\3\2\2\2\u00e9"+
		"\u00e7\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\21\3\2\2\2\u00eb\u00e9\3\2\2"+
		"\2\u00ec\u00ed\7\'\2\2\u00ed\u00ee\5\20\t\2\u00ee\u00ef\7(\2\2\u00ef\u00f8"+
		"\3\2\2\2\u00f0\u00f8\5\64\33\2\u00f1\u00f8\7E\2\2\u00f2\u00f8\5\16\b\2"+
		"\u00f3\u00f4\7\30\2\2\u00f4\u00f5\5\6\4\2\u00f5\u00f6\5\n\6\2\u00f6\u00f8"+
		"\3\2\2\2\u00f7\u00ec\3\2\2\2\u00f7\u00f0\3\2\2\2\u00f7\u00f1\3\2\2\2\u00f7"+
		"\u00f2\3\2\2\2\u00f7\u00f3\3\2\2\2\u00f8\23\3\2\2\2\u00f9\u00fa\7\23\2"+
		"\2\u00fa\u00fb\5\60\31\2\u00fb\u00fc\7\"\2\2\u00fc\u00fd\5\20\t\2\u00fd"+
		"\25\3\2\2\2\u00fe\u00ff\5\30\r\2\u00ff\27\3\2\2\2\u0100\u0101\7\b\2\2"+
		"\u0101\u0104\5\60\31\2\u0102\u0103\7\"\2\2\u0103\u0105\5\20\t\2\u0104"+
		"\u0102\3\2\2\2\u0104\u0105\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u0107\7."+
		"\2\2\u0107\u0108\5\30\r\2\u0108\u0109\7\t\2\2\u0109\u010a\5\26\f\2\u010a"+
		"\u0151\3\2\2\2\u010b\u010c\7\r\2\2\u010c\u010d\7\'\2\2\u010d\u010e\5\60"+
		"\31\2\u010e\u010f\7\"\2\2\u010f\u0110\5\20\t\2\u0110\u0111\7(\2\2\u0111"+
		"\u0112\7,\2\2\u0112\u0113\5\26\f\2\u0113\u0151\3\2\2\2\u0114\u0116\5\62"+
		"\32\2\u0115\u0117\5\62\32\2\u0116\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118"+
		"\u0116\3\2\2\2\u0118\u0119\3\2\2\2\u0119\u0151\3\2\2\2\u011a\u0151\5\32"+
		"\16\2\u011b\u011c\7\5\2\2\u011c\u0120\5\60\31\2\u011d\u011f\5\36\20\2"+
		"\u011e\u011d\3\2\2\2\u011f\u0122\3\2\2\2\u0120\u011e\3\2\2\2\u0120\u0121"+
		"\3\2\2\2\u0121\u0123\3\2\2\2\u0122\u0120\3\2\2\2\u0123\u0124\5*\26\2\u0124"+
		"\u0151\3\2\2\2\u0125\u0126\7)\2\2\u0126\u012b\5(\25\2\u0127\u0128\7!\2"+
		"\2\u0128\u012a\5(\25\2\u0129\u0127\3\2\2\2\u012a\u012d\3\2\2\2\u012b\u0129"+
		"\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u012e\3\2\2\2\u012d\u012b\3\2\2\2\u012e"+
		"\u012f\7*\2\2\u012f\u0151\3\2\2\2\u0130\u0131\7\n\2\2\u0131\u0132\5\62"+
		"\32\2\u0132\u0136\7\13\2\2\u0133\u0135\5&\24\2\u0134\u0133\3\2\2\2\u0135"+
		"\u0138\3\2\2\2\u0136\u0134\3\2\2\2\u0136\u0137\3\2\2\2\u0137\u0139\3\2"+
		"\2\2\u0138\u0136\3\2\2\2\u0139\u013a\7\f\2\2\u013a\u0151\3\2\2\2\u013b"+
		"\u013d\5\64\33\2\u013c\u013e\5\36\20\2\u013d\u013c\3\2\2\2\u013d\u013e"+
		"\3\2\2\2\u013e\u0142\3\2\2\2\u013f\u0141\5\62\32\2\u0140\u013f\3\2\2\2"+
		"\u0141\u0144\3\2\2\2\u0142\u0140\3\2\2\2\u0142\u0143\3\2\2\2\u0143\u0151"+
		"\3\2\2\2\u0144\u0142\3\2\2\2\u0145\u0146\7\16\2\2\u0146\u0147\7E\2\2\u0147"+
		"\u0148\7,\2\2\u0148\u0151\5\26\f\2\u0149\u014a\7\62\2\2\u014a\u014c\5"+
		"\62\32\2\u014b\u014d\5\22\n\2\u014c\u014b\3\2\2\2\u014d\u014e\3\2\2\2"+
		"\u014e\u014c\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u0151\3\2\2\2\u0150\u0100"+
		"\3\2\2\2\u0150\u010b\3\2\2\2\u0150\u0114\3\2\2\2\u0150\u011a\3\2\2\2\u0150"+
		"\u011b\3\2\2\2\u0150\u0125\3\2\2\2\u0150\u0130\3\2\2\2\u0150\u013b\3\2"+
		"\2\2\u0150\u0145\3\2\2\2\u0150\u0149\3\2\2\2\u0151\31\3\2\2\2\u0152\u0155"+
		"\5\62\32\2\u0153\u0155\5\34\17\2\u0154\u0152\3\2\2\2\u0154\u0153\3\2\2"+
		"\2\u0155\33\3\2\2\2\u0156\u0164\5\66\34\2\u0157\u0158\7;\2\2\u0158\u0164"+
		"\5\2\2\2\u0159\u015a\7=\2\2\u015a\u0164\7\65\2\2\u015b\u0164\7\65\2\2"+
		"\u015c\u0164\7:\2\2\u015d\u0164\7\66\2\2\u015e\u015f\7\27\2\2\u015f\u0160"+
		"\5\6\4\2\u0160\u0161\5\n\6\2\u0161\u0164\3\2\2\2\u0162\u0164\78\2\2\u0163"+
		"\u0156\3\2\2\2\u0163\u0157\3\2\2\2\u0163\u0159\3\2\2\2\u0163\u015b\3\2"+
		"\2\2\u0163\u015c\3\2\2\2\u0163\u015d\3\2\2\2\u0163\u015e\3\2\2\2\u0163"+
		"\u0162\3\2\2\2\u0164\35\3\2\2\2\u0165\u0169\7)\2\2\u0166\u0168\5\22\n"+
		"\2\u0167\u0166\3\2\2\2\u0168\u016b\3\2\2\2\u0169\u0167\3\2\2\2\u0169\u016a"+
		"\3\2\2\2\u016a\u016c\3\2\2\2\u016b\u0169\3\2\2\2\u016c\u016d\7*\2\2\u016d"+
		"\37\3\2\2\2\u016e\u016f\7%\2\2\u016f\u0170\5\62\32\2\u0170\u0171\7&\2"+
		"\2\u0171!\3\2\2\2\u0172\u017c\7\63\2\2\u0173\u017c\5\60\31\2\u0174\u0178"+
		"\5\64\33\2\u0175\u0177\5$\23\2\u0176\u0175\3\2\2\2\u0177\u017a\3\2\2\2"+
		"\u0178\u0176\3\2\2\2\u0178\u0179\3\2\2\2\u0179\u017c\3\2\2\2\u017a\u0178"+
		"\3\2\2\2\u017b\u0172\3\2\2\2\u017b\u0173\3\2\2\2\u017b\u0174\3\2\2\2\u017c"+
		"#\3\2\2\2\u017d\u0185\7\63\2\2\u017e\u0185\5\60\31\2\u017f\u0185\5\64"+
		"\33\2\u0180\u0181\7\'\2\2\u0181\u0182\5\"\22\2\u0182\u0183\7(\2\2\u0183"+
		"\u0185\3\2\2\2\u0184\u017d\3\2\2\2\u0184\u017e\3\2\2\2\u0184\u017f\3\2"+
		"\2\2\u0184\u0180\3\2\2\2\u0185%\3\2\2\2\u0186\u0187\7$\2\2\u0187\u0188"+
		"\5\"\22\2\u0188\u0189\7,\2\2\u0189\u018a\5\26\f\2\u018a\'\3\2\2\2\u018b"+
		"\u018c\5\62\32\2\u018c\u018d\7\"\2\2\u018d\u018e\5\34\17\2\u018e\u0194"+
		"\3\2\2\2\u018f\u0190\5\62\32\2\u0190\u0191\7\"\2\2\u0191\u0192\5\62\32"+
		"\2\u0192\u0194\3\2\2\2\u0193\u018b\3\2\2\2\u0193\u018f\3\2\2\2\u0194)"+
		"\3\2\2\2\u0195\u0197\5\62\32\2\u0196\u0195\3\2\2\2\u0197\u0198\3\2\2\2"+
		"\u0198\u0196\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u019d\3\2\2\2\u019a\u019b"+
		"\7\'\2\2\u019b\u019d\7(\2\2\u019c\u0196\3\2\2\2\u019c\u019a\3\2\2\2\u019d"+
		"+\3\2\2\2\u019e\u019f\5\26\f\2\u019f\u01a0\7\2\2\3\u01a0-\3\2\2\2\u01a1"+
		"\u01a2\5\20\t\2\u01a2\u01a3\7\2\2\3\u01a3/\3\2\2\2\u01a4\u01a5\7B\2\2"+
		"\u01a5\61\3\2\2\2\u01a6\u01ad\5\60\31\2\u01a7\u01ad\7C\2\2\u01a8\u01a9"+
		"\5\66\34\2\u01a9\u01aa\7#\2\2\u01aa\u01ab\5\60\31\2\u01ab\u01ad\3\2\2"+
		"\2\u01ac\u01a6\3\2\2\2\u01ac\u01a7\3\2\2\2\u01ac\u01a8\3\2\2\2\u01ad\63"+
		"\3\2\2\2\u01ae\u01ba\5\66\34\2\u01af\u01b0\5\66\34\2\u01b0\u01b1\7#\2"+
		"\2\u01b1\u01b2\5\66\34\2\u01b2\u01ba\3\2\2\2\u01b3\u01b4\7:\2\2\u01b4"+
		"\u01b5\7#\2\2\u01b5\u01ba\5\66\34\2\u01b6\u01ba\78\2\2\u01b7\u01ba\79"+
		"\2\2\u01b8\u01ba\5\4\3\2\u01b9\u01ae\3\2\2\2\u01b9\u01af\3\2\2\2\u01b9"+
		"\u01b3\3\2\2\2\u01b9\u01b6\3\2\2\2\u01b9\u01b7\3\2\2\2\u01b9\u01b8\3\2"+
		"\2\2\u01ba\65\3\2\2\2\u01bb\u01bc\t\3\2\2\u01bc\67\3\2\2\2\u01bd\u01be"+
		"\7\"\2\2\u01be\u01bf\5\20\t\2\u01bf9\3\2\2\2\u01c0\u01c1\5\60\31\2\u01c1"+
		"\u01c2\58\35\2\u01c2;\3\2\2\2\u01c3\u01c4\5\60\31\2\u01c4\u01c5\7\60\2"+
		"\2\u01c5\u01c6\5\62\32\2\u01c6\u0215\3\2\2\2\u01c7\u0215\5> \2\u01c8\u01c9"+
		"\5\60\31\2\u01c9\u01ca\7\61\2\2\u01ca\u01cb\5\62\32\2\u01cb\u0215\3\2"+
		"\2\2\u01cc\u01cd\5\60\31\2\u01cd\u01ce\7.\2\2\u01ce\u01cf\5\26\f\2\u01cf"+
		"\u0215\3\2\2\2\u01d0\u01d1\5\60\31\2\u01d1\u01d2\7\60\2\2\u01d2\u01d3"+
		"\7/\2\2\u01d3\u01d4\5\66\34\2\u01d4\u0215\3\2\2\2\u01d5\u01d6\5\60\31"+
		"\2\u01d6\u01d7\7\60\2\2\u01d7\u01d9\5\60\31\2\u01d8\u01da\5 \21\2\u01d9"+
		"\u01d8\3\2\2\2\u01da\u01db\3\2\2\2\u01db\u01d9\3\2\2\2\u01db\u01dc\3\2"+
		"\2\2\u01dc\u0215\3\2\2\2\u01dd\u01de\5\60\31\2\u01de\u01df\7\60\2\2\u01df"+
		"\u01e0\7\25\2\2\u01e0\u01e2\5\60\31\2\u01e1\u01e3\5 \21\2\u01e2\u01e1"+
		"\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e2\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5"+
		"\u0215\3\2\2\2\u01e6\u01e8\5\60\31\2\u01e7\u01e9\5 \21\2\u01e8\u01e7\3"+
		"\2\2\2\u01e9\u01ea\3\2\2\2\u01ea\u01e8\3\2\2\2\u01ea\u01eb\3\2\2\2\u01eb"+
		"\u01ec\3\2\2\2\u01ec\u01ed\7\61\2\2\u01ed\u01ee\5\62\32\2\u01ee\u0215"+
		"\3\2\2\2\u01ef\u01f0\7\26\2\2\u01f0\u01f2\5\60\31\2\u01f1\u01f3\5 \21"+
		"\2\u01f2\u01f1\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f2\3\2\2\2\u01f4\u01f5"+
		"\3\2\2\2\u01f5\u0215\3\2\2\2\u01f6\u0215\7\24\2\2\u01f7\u01f8\7\21\2\2"+
		"\u01f8\u0215\5\62\32\2\u01f9\u01fa\7\22\2\2\u01fa\u0215\5\62\32\2\u01fb"+
		"\u01fd\7 \2\2\u01fc\u01fe\5\62\32\2\u01fd\u01fc\3\2\2\2\u01fd\u01fe\3"+
		"\2\2\2\u01fe\u0215\3\2\2\2\u01ff\u0200\7\n\2\2\u0200\u0201\5\62\32\2\u0201"+
		"\u0203\7\13\2\2\u0202\u0204\5@!\2\u0203\u0202\3\2\2\2\u0204\u0205\3\2"+
		"\2\2\u0205\u0203\3\2\2\2\u0205\u0206\3\2\2\2\u0206\u0207\3\2\2\2\u0207"+
		"\u0208\7\f\2\2\u0208\u0215\3\2\2\2\u0209\u020d\5N(\2\u020a\u020c\5\62"+
		"\32\2\u020b\u020a\3\2\2\2\u020c\u020f\3\2\2\2\u020d\u020b\3\2\2\2\u020d"+
		"\u020e\3\2\2\2\u020e\u0215\3\2\2\2\u020f\u020d\3\2\2\2\u0210\u0211\7\4"+
		"\2\2\u0211\u0212\5\62\32\2\u0212\u0213\5N(\2\u0213\u0215\3\2\2\2\u0214"+
		"\u01c3\3\2\2\2\u0214\u01c7\3\2\2\2\u0214\u01c8\3\2\2\2\u0214\u01cc\3\2"+
		"\2\2\u0214\u01d0\3\2\2\2\u0214\u01d5\3\2\2\2\u0214\u01dd\3\2\2\2\u0214"+
		"\u01e6\3\2\2\2\u0214\u01ef\3\2\2\2\u0214\u01f6\3\2\2\2\u0214\u01f7\3\2"+
		"\2\2\u0214\u01f9\3\2\2\2\u0214\u01fb\3\2\2\2\u0214\u01ff\3\2\2\2\u0214"+
		"\u0209\3\2\2\2\u0214\u0210\3\2\2\2\u0215=\3\2\2\2\u0216\u0217\5\60\31"+
		"\2\u0217\u0218\7\60\2\2\u0218\u0219\7/\2\2\u0219\u021a\5\60\31\2\u021a"+
		"\u021b\7#\2\2\u021b\u021c\5\62\32\2\u021c\u024c\3\2\2\2\u021d\u021e\5"+
		"\60\31\2\u021e\u021f\7\60\2\2\u021f\u0220\7/\2\2\u0220\u0221\7C\2\2\u0221"+
		"\u0222\7#\2\2\u0222\u0223\7C\2\2\u0223\u024c\3\2\2\2\u0224\u0225\5\60"+
		"\31\2\u0225\u0226\7\60\2\2\u0226\u0227\7/\2\2\u0227\u0228\5\60\31\2\u0228"+
		"\u0229\7#\2\2\u0229\u022a\7\'\2\2\u022a\u022b\5\62\32\2\u022b\u022c\7"+
		"(\2\2\u022c\u024c\3\2\2\2\u022d\u022e\5\60\31\2\u022e\u022f\7\60\2\2\u022f"+
		"\u0230\7/\2\2\u0230\u0231\5\60\31\2\u0231\u0232\7#\2\2\u0232\u0234\5\60"+
		"\31\2\u0233\u0235\5 \21\2\u0234\u0233\3\2\2\2\u0235\u0236\3\2\2\2\u0236"+
		"\u0234\3\2\2\2\u0236\u0237\3\2\2\2\u0237\u024c\3\2\2\2\u0238\u0239\5\60"+
		"\31\2\u0239\u023a\7\60\2\2\u023a\u023b\7/\2\2\u023b\u023c\7\25\2\2\u023c"+
		"\u023d\5\60\31\2\u023d\u023e\7#\2\2\u023e\u0240\5\60\31\2\u023f\u0241"+
		"\5 \21\2\u0240\u023f\3\2\2\2\u0241\u0242\3\2\2\2\u0242\u0240\3\2\2\2\u0242"+
		"\u0243\3\2\2\2\u0243\u024c\3\2\2\2\u0244\u0245\5\60\31\2\u0245\u0246\7"+
		"\60\2\2\u0246\u0247\7/\2\2\u0247\u0248\5\62\32\2\u0248\u0249\7\36\2\2"+
		"\u0249\u024a\5\16\b\2\u024a\u024c\3\2\2\2\u024b\u0216\3\2\2\2\u024b\u021d"+
		"\3\2\2\2\u024b\u0224\3\2\2\2\u024b\u022d\3\2\2\2\u024b\u0238\3\2\2\2\u024b"+
		"\u0244\3\2\2\2\u024c?\3\2\2\2\u024d\u024e\7$\2\2\u024e\u024f\5\"\22\2"+
		"\u024f\u025a\7,\2\2\u0250\u0255\5<\37\2\u0251\u0252\7!\2\2\u0252\u0254"+
		"\5<\37\2\u0253\u0251\3\2\2\2\u0254\u0257\3\2\2\2\u0255\u0253\3\2\2\2\u0255"+
		"\u0256\3\2\2\2\u0256\u0259\3\2\2\2\u0257\u0255\3\2\2\2\u0258\u0250\3\2"+
		"\2\2\u0259\u025c\3\2\2\2\u025a\u0258\3\2\2\2\u025a\u025b\3\2\2\2\u025b"+
		"A\3\2\2\2\u025c\u025a\3\2\2\2\u025d\u0262\5<\37\2\u025e\u025f\7!\2\2\u025f"+
		"\u0261\5<\37\2\u0260\u025e\3\2\2\2\u0261\u0264\3\2\2\2\u0262\u0260\3\2"+
		"\2\2\u0262\u0263\3\2\2\2\u0263C\3\2\2\2\u0264\u0262\3\2\2\2\u0265\u0266"+
		"\5B\"\2\u0266\u0267\7\2\2\3\u0267E\3\2\2\2\u0268\u0269\5:\36\2\u0269G"+
		"\3\2\2\2\u026a\u026d\5L\'\2\u026b\u026d\5J&\2\u026c\u026a\3\2\2\2\u026c"+
		"\u026b\3\2\2\2\u026dI\3\2\2\2\u026e\u026f\7\37\2\2\u026f\u0270\5N(\2\u0270"+
		"\u0271\5P)\2\u0271\u0272\5R*\2\u0272K\3\2\2\2\u0273\u0274\7\20\2\2\u0274"+
		"\u0275\5N(\2\u0275\u0276\5P)\2\u0276\u0277\5R*\2\u0277M\3\2\2\2\u0278"+
		"\u027b\5\66\34\2\u0279\u027b\5\60\31\2\u027a\u0278\3\2\2\2\u027a\u0279"+
		"\3\2\2\2\u027bO\3\2\2\2\u027c\u0287\7\'\2\2\u027d\u0282\5F$\2\u027e\u027f"+
		"\7+\2\2\u027f\u0281\5F$\2\u0280\u027e\3\2\2\2\u0281\u0284\3\2\2\2\u0282"+
		"\u0280\3\2\2\2\u0282\u0283\3\2\2\2\u0283\u0286\3\2\2\2\u0284\u0282\3\2"+
		"\2\2\u0285\u027d\3\2\2\2\u0286\u0289\3\2\2\2\u0287\u0285\3\2\2\2\u0287"+
		"\u0288\3\2\2\2\u0288\u028a\3\2\2\2\u0289\u0287\3\2\2\2\u028a\u028b\7("+
		"\2\2\u028bQ\3\2\2\2\u028c\u028e\5B\"\2\u028d\u028c\3\2\2\2\u028d\u028e"+
		"\3\2\2\2\u028e\u028f\3\2\2\2\u028f\u0290\7\f\2\2\u0290S\3\2\2\2\u0291"+
		"\u0292\7\23\2\2\u0292\u0293\5:\36\2\u0293\u0294\7.\2\2\u0294\u0295\5\26"+
		"\f\2\u0295U\3\2\2\2\u0296\u0297\7\13\2\2\u0297\u0298\5\26\f\2\u0298\u0299"+
		"\7,\2\2\u0299W\3\2\2\2\u029a\u029b\7\17\2\2\u029b\u029c\5\66\34\2\u029c"+
		"\u02a7\7\'\2\2\u029d\u02a2\5F$\2\u029e\u029f\7+\2\2\u029f\u02a1\5F$\2"+
		"\u02a0\u029e\3\2\2\2\u02a1\u02a4\3\2\2\2\u02a2\u02a0\3\2\2\2\u02a2\u02a3"+
		"\3\2\2\2\u02a3\u02a6\3\2\2\2\u02a4\u02a2\3\2\2\2\u02a5\u029d\3\2\2\2\u02a6"+
		"\u02a9\3\2\2\2\u02a7\u02a5\3\2\2\2\u02a7\u02a8\3\2\2\2\u02a8\u02aa\3\2"+
		"\2\2\u02a9\u02a7\3\2\2\2\u02aa\u02ac\7(\2\2\u02ab\u02ad\5V,\2\u02ac\u02ab"+
		"\3\2\2\2\u02ac\u02ad\3\2\2\2\u02ad\u02b1\3\2\2\2\u02ae\u02b0\5T+\2\u02af"+
		"\u02ae\3\2\2\2\u02b0\u02b3\3\2\2\2\u02b1\u02af\3\2\2\2\u02b1\u02b2\3\2"+
		"\2\2\u02b2\u02b7\3\2\2\2\u02b3\u02b1\3\2\2\2\u02b4\u02b6\5H%\2\u02b5\u02b4"+
		"\3\2\2\2\u02b6\u02b9\3\2\2\2\u02b7\u02b5\3\2\2\2\u02b7\u02b8\3\2\2\2\u02b8"+
		"Y\3\2\2\2\u02b9\u02b7\3\2\2\2\u02ba\u02bb\7$\2\2\u02bb\u02c5\5\66\34\2"+
		"\u02bc\u02bd\7$\2\2\u02bd\u02be\5\66\34\2\u02be\u02c0\7\33\2\2\u02bf\u02c1"+
		"\5\22\n\2\u02c0\u02bf\3\2\2\2\u02c1\u02c2\3\2\2\2\u02c2\u02c0\3\2\2\2"+
		"\u02c2\u02c3\3\2\2\2\u02c3\u02c5\3\2\2\2\u02c4\u02ba\3\2\2\2\u02c4\u02bc"+
		"\3\2\2\2\u02c5[\3\2\2\2\u02c6\u02c7\7\b\2\2\u02c7\u02c9\5\60\31\2\u02c8"+
		"\u02ca\58\35\2\u02c9\u02c8\3\2\2\2\u02c9\u02ca\3\2\2\2\u02ca\u02cb\3\2"+
		"\2\2\u02cb\u02cc\7.\2\2\u02cc\u02cd\5\26\f\2\u02cd\u02d9\3\2\2\2\u02ce"+
		"\u02cf\7\32\2\2\u02cf\u02d9\5\66\34\2\u02d0\u02d1\7\32\2\2\u02d1\u02d2"+
		"\5\66\34\2\u02d2\u02d4\7.\2\2\u02d3\u02d5\5Z.\2\u02d4\u02d3\3\2\2\2\u02d5"+
		"\u02d6\3\2\2\2\u02d6\u02d4\3\2\2\2\u02d6\u02d7\3\2\2\2\u02d7\u02d9\3\2"+
		"\2\2\u02d8\u02c6\3\2\2\2\u02d8\u02ce\3\2\2\2\u02d8\u02d0\3\2\2\2\u02d9"+
		"]\3\2\2\2\u02da\u02db\7\6\2\2\u02db\u02df\5\66\34\2\u02dc\u02de\5\\/\2"+
		"\u02dd\u02dc\3\2\2\2\u02de\u02e1\3\2\2\2\u02df\u02dd\3\2\2\2\u02df\u02e0"+
		"\3\2\2\2\u02e0_\3\2\2\2\u02e1\u02df\3\2\2\2\u02e2\u02e3\7\31\2\2\u02e3"+
		"\u02e4\7\65\2\2\u02e4\u02e5\5d\63\2\u02e5\u02e6\5^\60\2\u02e6\u02e7\7"+
		"\2\2\3\u02e7a\3\2\2\2\u02e8\u02ee\5\66\34\2\u02e9\u02ea\5\66\34\2\u02ea"+
		"\u02eb\7\36\2\2\u02eb\u02ec\5\66\34\2\u02ec\u02ee\3\2\2\2\u02ed\u02e8"+
		"\3\2\2\2\u02ed\u02e9\3\2\2\2\u02eec\3\2\2\2\u02ef\u02f3\7\7\2\2\u02f0"+
		"\u02f2\5b\62\2\u02f1\u02f0\3\2\2\2\u02f2\u02f5\3\2\2\2\u02f3\u02f1\3\2"+
		"\2\2\u02f3\u02f4\3\2\2\2\u02f4e\3\2\2\2\u02f5\u02f3\3\2\2\2\u02f6\u02f7"+
		"\7\31\2\2\u02f7\u02f9\7\65\2\2\u02f8\u02fa\5d\63\2\u02f9\u02f8\3\2\2\2"+
		"\u02f9\u02fa\3\2\2\2\u02fa\u02fc\3\2\2\2\u02fb\u02fd\5^\60\2\u02fc\u02fb"+
		"\3\2\2\2\u02fc\u02fd\3\2\2\2\u02fd\u02fe\3\2\2\2\u02fe\u02ff\5X-\2\u02ff"+
		"\u0300\7\2\2\3\u0300g\3\2\2\2Giy\u0084\u0091\u0097\u009a\u00a8\u00ad\u00bb"+
		"\u00c4\u00c9\u00d0\u00e2\u00e9\u00f7\u0104\u0118\u0120\u012b\u0136\u013d"+
		"\u0142\u014e\u0150\u0154\u0163\u0169\u0178\u017b\u0184\u0193\u0198\u019c"+
		"\u01ac\u01b9\u01db\u01e4\u01ea\u01f4\u01fd\u0205\u020d\u0214\u0236\u0242"+
		"\u024b\u0255\u025a\u0262\u026c\u027a\u0282\u0287\u028d\u02a2\u02a7\u02ac"+
		"\u02b1\u02b7\u02c2\u02c4\u02c9\u02d6\u02d8\u02df\u02ed\u02f3\u02f9\u02fc";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}