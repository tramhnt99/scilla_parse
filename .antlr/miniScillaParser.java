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
		AT=48, UNDERSCORE=49, BlockComment=50, NUMBER=51, WS=52, TOSKIP=53, STRING=54, 
		FLOAT=55, BOOLEAN=56, OPTION=57, HEX=58, INTTY=59, BYSTR=60, BNUM=61, 
		MESSAGE=62, EVENT_TY=63, ID=64, SPID=65, CID=66, TID=67;
	public static final int
		RULE_int_ = 0, RULE_prim_types = 1, RULE_t_map_key = 2, RULE_t_map_value_args = 3, 
		RULE_t_map_value = 4, RULE_t_map_value_allow_targs = 5, RULE_address_typ = 6, 
		RULE_typ = 7, RULE_targ = 8, RULE_address_type_field = 9, RULE_exp = 10, 
		RULE_simple_exp = 11, RULE_atomic_exp = 12, RULE_lit = 13, RULE_ctargs = 14, 
		RULE_map_access = 15, RULE_pattern = 16, RULE_arg_pattern = 17, RULE_exp_pm_clause = 18, 
		RULE_msg_entry = 19, RULE_builtin_args = 20, RULE_exp_term = 21, RULE_type_term = 22, 
		RULE_identifier = 23, RULE_sid = 24, RULE_scid = 25;
	private static String[] makeRuleNames() {
		return new String[] {
			"int_", "prim_types", "t_map_key", "t_map_value_args", "t_map_value", 
			"t_map_value_allow_targs", "address_typ", "typ", "targ", "address_type_field", 
			"exp", "simple_exp", "atomic_exp", "lit", "ctargs", "map_access", "pattern", 
			"arg_pattern", "exp_pm_clause", "msg_entry", "builtin_args", "exp_term", 
			"type_term", "identifier", "sid", "scid"
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
			null, null, null, null, null, "'BNum'", "'Message'", "'Event'"
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
			"AT", "UNDERSCORE", "BlockComment", "NUMBER", "WS", "TOSKIP", "STRING", 
			"FLOAT", "BOOLEAN", "OPTION", "HEX", "INTTY", "BYSTR", "BNUM", "MESSAGE", 
			"EVENT_TY", "ID", "SPID", "CID", "TID"
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
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(52);
				match(T__0);
				}
			}

			setState(55);
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
			setState(57);
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
			setState(69);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(59);
				((T_map_keyContext)_localctx).kt_to_map = scid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(60);
				match(LPAREN);
				setState(61);
				((T_map_keyContext)_localctx).kt_to_map = scid();
				setState(62);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(64);
				match(LPAREN);
				setState(65);
				((T_map_keyContext)_localctx).kt = address_typ();
				setState(66);
				match(RPAREN);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(68);
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
			setState(80);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(71);
				match(LPAREN);
				setState(72);
				((T_map_value_argsContext)_localctx).t = t_map_value_allow_targs();
				setState(73);
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
				setState(75);
				((T_map_value_argsContext)_localctx).d = scid();
				}
				break;
			case MAP:
				enterOuterAlt(_localctx, 3);
				{
				setState(76);
				match(MAP);
				setState(77);
				((T_map_value_argsContext)_localctx).k = t_map_key();
				setState(78);
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
		public TerminalNode LPAREN() { return getToken(miniScillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(miniScillaParser.RPAREN, 0); }
		public T_map_keyContext t_map_key() {
			return getRuleContext(T_map_keyContext.class,0);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
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
			setState(92);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(82);
				((T_map_valueContext)_localctx).d = scid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(83);
				match(MAP);
				setState(84);
				((T_map_valueContext)_localctx).k = t_map_key();
				setState(85);
				((T_map_valueContext)_localctx).v = t_map_value();
				setState(86);
				match(LPAREN);
				setState(87);
				((T_map_valueContext)_localctx).t = t_map_value_allow_targs();
				setState(88);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(90);
				((T_map_valueContext)_localctx).vt = address_typ();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(91);
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
			setState(101);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(94);
				((T_map_value_allow_targsContext)_localctx).d = scid();
				setState(96); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(95);
					t_map_value_args();
					}
					}
					setState(98); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( ((((_la - 22)) & ~0x3f) == 0 && ((1L << (_la - 22)) & ((1L << (MAP - 22)) | (1L << (LPAREN - 22)) | (1L << (BOOLEAN - 22)) | (1L << (OPTION - 22)) | (1L << (HEX - 22)) | (1L << (INTTY - 22)) | (1L << (BYSTR - 22)) | (1L << (BNUM - 22)) | (1L << (MESSAGE - 22)) | (1L << (EVENT_TY - 22)) | (1L << (CID - 22)))) != 0) );
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(100);
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
		public Token d;
		public Address_type_fieldContext address_type_field;
		public List<Address_type_fieldContext> fs = new ArrayList<Address_type_fieldContext>();
		public TerminalNode WITH() { return getToken(miniScillaParser.WITH, 0); }
		public TerminalNode END() { return getToken(miniScillaParser.END, 0); }
		public TerminalNode CID() { return getToken(miniScillaParser.CID, 0); }
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
			setState(119);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(103);
				((Address_typContext)_localctx).d = match(CID);
				setState(104);
				match(WITH);
				setState(105);
				match(END);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(106);
				((Address_typContext)_localctx).d = match(CID);
				setState(107);
				match(WITH);
				setState(108);
				match(CONTRACT);
				setState(109);
				((Address_typContext)_localctx).address_type_field = address_type_field();
				((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
				setState(114);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(110);
					match(COMMA);
					setState(111);
					((Address_typContext)_localctx).address_type_field = address_type_field();
					((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
					}
					}
					setState(116);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(117);
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
			setState(144);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(122);
				((TypContext)_localctx).d = scid();
				setState(126);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(123);
						((TypContext)_localctx).targ = targ();
						((TypContext)_localctx).targs.add(((TypContext)_localctx).targ);
						}
						} 
					}
					setState(128);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
				}
				}
				break;
			case 2:
				{
				setState(129);
				match(MAP);
				setState(130);
				((TypContext)_localctx).k = t_map_key();
				setState(131);
				((TypContext)_localctx).v = t_map_value();
				}
				break;
			case 3:
				{
				setState(133);
				match(LPAREN);
				setState(134);
				((TypContext)_localctx).t = typ(0);
				setState(135);
				match(RPAREN);
				}
				break;
			case 4:
				{
				setState(137);
				((TypContext)_localctx).t_to_map = address_typ();
				}
				break;
			case 5:
				{
				setState(138);
				match(FORALL);
				setState(139);
				((TypContext)_localctx).tv = match(TID);
				setState(140);
				match(PERIOD);
				setState(141);
				((TypContext)_localctx).t = typ(3);
				}
				break;
			case 6:
				{
				setState(142);
				((TypContext)_localctx).t_var = match(TID);
				}
				break;
			case 7:
				{
				setState(143);
				prim_types();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(151);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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
					setState(146);
					if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
					setState(147);
					match(TARROW);
					setState(148);
					((TypContext)_localctx).t2 = typ(7);
					}
					} 
				}
				setState(153);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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
			setState(165);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(154);
				match(LPAREN);
				setState(155);
				((TargContext)_localctx).t = typ(0);
				setState(156);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(158);
				((TargContext)_localctx).d = scid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(159);
				((TargContext)_localctx).t_var = match(TID);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(160);
				((TargContext)_localctx).t_to_map = address_typ();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(161);
				match(MAP);
				setState(162);
				((TargContext)_localctx).k = t_map_key();
				setState(163);
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
			setState(167);
			match(FIELD);
			setState(168);
			((Address_type_fieldContext)_localctx).id = identifier();
			setState(169);
			match(COLON);
			setState(170);
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
			setState(172);
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
		public Token b;
		public CtargsContext ctargs;
		public List<CtargsContext> targs = new ArrayList<CtargsContext>();
		public Builtin_argsContext xs;
		public TerminalNode BUILTIN() { return getToken(miniScillaParser.BUILTIN, 0); }
		public TerminalNode ID() { return getToken(miniScillaParser.ID, 0); }
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
			setState(253);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				_localctx = new LetContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(174);
				match(LET);
				setState(175);
				((LetContext)_localctx).x = identifier();
				setState(178);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(176);
					match(COLON);
					setState(177);
					((LetContext)_localctx).ty = typ(0);
					}
				}

				setState(180);
				match(EQ);
				setState(181);
				((LetContext)_localctx).f = simple_exp();
				setState(182);
				match(IN);
				setState(183);
				((LetContext)_localctx).e = exp();
				}
				break;
			case 2:
				_localctx = new FunContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(185);
				match(FUN);
				setState(186);
				match(LPAREN);
				setState(187);
				((FunContext)_localctx).id = identifier();
				setState(188);
				match(COLON);
				setState(189);
				((FunContext)_localctx).ty = typ(0);
				setState(190);
				match(RPAREN);
				setState(191);
				match(ARROW);
				setState(192);
				((FunContext)_localctx).e = exp();
				}
				break;
			case 3:
				_localctx = new AppContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(194);
				((AppContext)_localctx).f_var = sid();
				setState(196); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(195);
					((AppContext)_localctx).sid = sid();
					((AppContext)_localctx).args.add(((AppContext)_localctx).sid);
					}
					}
					setState(198); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ID - 64)) | (1L << (SPID - 64)) | (1L << (CID - 64)))) != 0) );
				}
				break;
			case 4:
				_localctx = new AtomicContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(200);
				((AtomicContext)_localctx).a = atomic_exp();
				}
				break;
			case 5:
				_localctx = new BuiltinContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(201);
				match(BUILTIN);
				setState(202);
				((BuiltinContext)_localctx).b = match(ID);
				setState(206);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==LBRACE) {
					{
					{
					setState(203);
					((BuiltinContext)_localctx).ctargs = ctargs();
					((BuiltinContext)_localctx).targs.add(((BuiltinContext)_localctx).ctargs);
					}
					}
					setState(208);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(209);
				((BuiltinContext)_localctx).xs = builtin_args();
				}
				break;
			case 6:
				_localctx = new MessageContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(210);
				match(LBRACE);
				setState(211);
				((MessageContext)_localctx).msg_entry = msg_entry();
				((MessageContext)_localctx).es.add(((MessageContext)_localctx).msg_entry);
				setState(216);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEMICOLON) {
					{
					{
					setState(212);
					match(SEMICOLON);
					setState(213);
					((MessageContext)_localctx).msg_entry = msg_entry();
					((MessageContext)_localctx).es.add(((MessageContext)_localctx).msg_entry);
					}
					}
					setState(218);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(219);
				match(RBRACE);
				}
				break;
			case 7:
				_localctx = new MatchContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(221);
				match(MATCH);
				setState(222);
				((MatchContext)_localctx).x_sid = sid();
				setState(223);
				match(WITH);
				setState(227);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==BAR) {
					{
					{
					setState(224);
					((MatchContext)_localctx).cs = exp_pm_clause();
					}
					}
					setState(229);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(230);
				match(END);
				}
				break;
			case 8:
				_localctx = new DataConstructorAppContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(232);
				((DataConstructorAppContext)_localctx).c = scid();
				setState(234);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACE) {
					{
					setState(233);
					((DataConstructorAppContext)_localctx).ts = ctargs();
					}
				}

				setState(239);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ID - 64)) | (1L << (SPID - 64)) | (1L << (CID - 64)))) != 0)) {
					{
					{
					setState(236);
					((DataConstructorAppContext)_localctx).sid = sid();
					((DataConstructorAppContext)_localctx).args.add(((DataConstructorAppContext)_localctx).sid);
					}
					}
					setState(241);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 9:
				_localctx = new TFunContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(242);
				match(TFUN);
				setState(243);
				((TFunContext)_localctx).i = match(TID);
				setState(244);
				match(ARROW);
				setState(245);
				((TFunContext)_localctx).e = exp();
				}
				break;
			case 10:
				_localctx = new TAppContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(246);
				match(AT);
				setState(247);
				((TAppContext)_localctx).f = sid();
				setState(249); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(248);
					((TAppContext)_localctx).targ = targ();
					((TAppContext)_localctx).targs.add(((TAppContext)_localctx).targ);
					}
					}
					setState(251); 
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
			setState(257);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(255);
				((Atomic_expContext)_localctx).i = sid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(256);
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
		public Token i;
		public Int_Context i_int;
		public Token i_number;
		public Token n;
		public Token h;
		public Token s;
		public T_map_keyContext kt;
		public T_map_valueContext vt;
		public Token b;
		public TerminalNode CID() { return getToken(miniScillaParser.CID, 0); }
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
			setState(272);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CID:
				enterOuterAlt(_localctx, 1);
				{
				setState(259);
				((LitContext)_localctx).i = match(CID);
				}
				break;
			case INTTY:
				enterOuterAlt(_localctx, 2);
				{
				setState(260);
				match(INTTY);
				setState(261);
				((LitContext)_localctx).i_int = int_();
				}
				break;
			case BNUM:
				enterOuterAlt(_localctx, 3);
				{
				setState(262);
				match(BNUM);
				setState(263);
				((LitContext)_localctx).i_number = match(NUMBER);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 4);
				{
				setState(264);
				((LitContext)_localctx).n = match(NUMBER);
				}
				break;
			case HEX:
				enterOuterAlt(_localctx, 5);
				{
				setState(265);
				((LitContext)_localctx).h = match(HEX);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 6);
				{
				setState(266);
				((LitContext)_localctx).s = match(STRING);
				}
				break;
			case EMP:
				enterOuterAlt(_localctx, 7);
				{
				setState(267);
				match(EMP);
				setState(268);
				((LitContext)_localctx).kt = t_map_key();
				setState(269);
				((LitContext)_localctx).vt = t_map_value();
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 8);
				{
				setState(271);
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
			setState(274);
			match(LBRACE);
			setState(278);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 22)) & ~0x3f) == 0 && ((1L << (_la - 22)) & ((1L << (MAP - 22)) | (1L << (LPAREN - 22)) | (1L << (BOOLEAN - 22)) | (1L << (OPTION - 22)) | (1L << (HEX - 22)) | (1L << (INTTY - 22)) | (1L << (BYSTR - 22)) | (1L << (BNUM - 22)) | (1L << (MESSAGE - 22)) | (1L << (EVENT_TY - 22)) | (1L << (CID - 22)) | (1L << (TID - 22)))) != 0)) {
				{
				{
				setState(275);
				((CtargsContext)_localctx).ts = targ();
				}
				}
				setState(280);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(281);
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
			setState(283);
			match(LSQB);
			setState(284);
			((Map_accessContext)_localctx).i = sid();
			setState(285);
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
		public Token x;
		public TerminalNode ID() { return getToken(miniScillaParser.ID, 0); }
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
			setState(296);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				_localctx = new WildcardContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(287);
				match(UNDERSCORE);
				}
				break;
			case ID:
				_localctx = new BinderContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(288);
				((BinderContext)_localctx).x = match(ID);
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
				setState(289);
				((ConstructorContext)_localctx).c = scid();
				setState(293);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (((((_la - 37)) & ~0x3f) == 0 && ((1L << (_la - 37)) & ((1L << (LPAREN - 37)) | (1L << (UNDERSCORE - 37)) | (1L << (BOOLEAN - 37)) | (1L << (OPTION - 37)) | (1L << (HEX - 37)) | (1L << (INTTY - 37)) | (1L << (BYSTR - 37)) | (1L << (BNUM - 37)) | (1L << (MESSAGE - 37)) | (1L << (EVENT_TY - 37)) | (1L << (ID - 37)) | (1L << (CID - 37)))) != 0)) {
					{
					{
					setState(290);
					((ConstructorContext)_localctx).ps = arg_pattern();
					}
					}
					setState(295);
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
		public Token x;
		public ScidContext c;
		public PatternContext p;
		public TerminalNode UNDERSCORE() { return getToken(miniScillaParser.UNDERSCORE, 0); }
		public TerminalNode ID() { return getToken(miniScillaParser.ID, 0); }
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
			setState(305);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				enterOuterAlt(_localctx, 1);
				{
				setState(298);
				match(UNDERSCORE);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(299);
				((Arg_patternContext)_localctx).x = match(ID);
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
				setState(300);
				((Arg_patternContext)_localctx).c = scid();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 4);
				{
				setState(301);
				match(LPAREN);
				setState(302);
				((Arg_patternContext)_localctx).p = pattern();
				setState(303);
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
			setState(307);
			match(BAR);
			setState(308);
			((Exp_pm_clauseContext)_localctx).p = pattern();
			setState(309);
			match(ARROW);
			setState(310);
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
			setState(320);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(312);
				((Msg_entryContext)_localctx).i = sid();
				setState(313);
				match(COLON);
				setState(314);
				((Msg_entryContext)_localctx).l = lit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(316);
				((Msg_entryContext)_localctx).i = sid();
				setState(317);
				match(COLON);
				setState(318);
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
		int _la;
		try {
			setState(329);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
			case SPID:
			case CID:
				enterOuterAlt(_localctx, 1);
				{
				setState(323); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(322);
					((Builtin_argsContext)_localctx).args = sid();
					}
					}
					setState(325); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ID - 64)) | (1L << (SPID - 64)) | (1L << (CID - 64)))) != 0) );
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(327);
				match(LPAREN);
				setState(328);
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
			setState(331);
			((Exp_termContext)_localctx).e = exp();
			setState(332);
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
			setState(334);
			((Type_termContext)_localctx).t = typ(0);
			setState(335);
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
			setState(337);
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
		public Token name;
		public Token ns;
		public TerminalNode ID() { return getToken(miniScillaParser.ID, 0); }
		public TerminalNode SPID() { return getToken(miniScillaParser.SPID, 0); }
		public TerminalNode PERIOD() { return getToken(miniScillaParser.PERIOD, 0); }
		public TerminalNode CID() { return getToken(miniScillaParser.CID, 0); }
		public SidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sid; }
	}

	public final SidContext sid() throws RecognitionException {
		SidContext _localctx = new SidContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_sid);
		try {
			setState(344);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(339);
				((SidContext)_localctx).name = match(ID);
				}
				break;
			case SPID:
				enterOuterAlt(_localctx, 2);
				{
				setState(340);
				((SidContext)_localctx).name = match(SPID);
				}
				break;
			case CID:
				enterOuterAlt(_localctx, 3);
				{
				setState(341);
				((SidContext)_localctx).ns = match(CID);
				setState(342);
				match(PERIOD);
				setState(343);
				((SidContext)_localctx).name = match(ID);
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
		public Token name;
		public Token ns;
		public Token bool;
		public Token option;
		public Prim_typesContext prim;
		public List<TerminalNode> CID() { return getTokens(miniScillaParser.CID); }
		public TerminalNode CID(int i) {
			return getToken(miniScillaParser.CID, i);
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
			setState(356);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(346);
				((ScidContext)_localctx).name = match(CID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(347);
				((ScidContext)_localctx).ns = match(CID);
				setState(348);
				match(PERIOD);
				setState(349);
				((ScidContext)_localctx).name = match(CID);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(350);
				((ScidContext)_localctx).ns = match(HEX);
				setState(351);
				match(PERIOD);
				setState(352);
				((ScidContext)_localctx).name = match(CID);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(353);
				((ScidContext)_localctx).bool = match(BOOLEAN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(354);
				((ScidContext)_localctx).option = match(OPTION);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(355);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3E\u0169\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\3\2\5\28\n\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\5\4H\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5"+
		"S\n\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6_\n\6\3\7\3\7\6\7c\n"+
		"\7\r\7\16\7d\3\7\5\7h\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\bs\n\b"+
		"\f\b\16\bv\13\b\3\b\3\b\5\bz\n\b\3\t\3\t\3\t\7\t\177\n\t\f\t\16\t\u0082"+
		"\13\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t"+
		"\u0093\n\t\3\t\3\t\3\t\7\t\u0098\n\t\f\t\16\t\u009b\13\t\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u00a8\n\n\3\13\3\13\3\13\3\13\3\13"+
		"\3\f\3\f\3\r\3\r\3\r\3\r\5\r\u00b5\n\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\6\r\u00c7\n\r\r\r\16\r\u00c8\3\r\3\r"+
		"\3\r\3\r\7\r\u00cf\n\r\f\r\16\r\u00d2\13\r\3\r\3\r\3\r\3\r\3\r\7\r\u00d9"+
		"\n\r\f\r\16\r\u00dc\13\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u00e4\n\r\f\r\16"+
		"\r\u00e7\13\r\3\r\3\r\3\r\3\r\5\r\u00ed\n\r\3\r\7\r\u00f0\n\r\f\r\16\r"+
		"\u00f3\13\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\6\r\u00fc\n\r\r\r\16\r\u00fd\5"+
		"\r\u0100\n\r\3\16\3\16\5\16\u0104\n\16\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u0113\n\17\3\20\3\20\7\20\u0117"+
		"\n\20\f\20\16\20\u011a\13\20\3\20\3\20\3\21\3\21\3\21\3\21\3\22\3\22\3"+
		"\22\3\22\7\22\u0126\n\22\f\22\16\22\u0129\13\22\5\22\u012b\n\22\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\5\23\u0134\n\23\3\24\3\24\3\24\3\24\3\24"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\5\25\u0143\n\25\3\26\6\26\u0146"+
		"\n\26\r\26\16\26\u0147\3\26\3\26\5\26\u014c\n\26\3\27\3\27\3\27\3\30\3"+
		"\30\3\30\3\31\3\31\3\32\3\32\3\32\3\32\3\32\5\32\u015b\n\32\3\33\3\33"+
		"\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\5\33\u0167\n\33\3\33\2\3\20\34"+
		"\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\2\3\3\2=A\2"+
		"\u0191\2\67\3\2\2\2\4;\3\2\2\2\6G\3\2\2\2\bR\3\2\2\2\n^\3\2\2\2\fg\3\2"+
		"\2\2\16y\3\2\2\2\20\u0092\3\2\2\2\22\u00a7\3\2\2\2\24\u00a9\3\2\2\2\26"+
		"\u00ae\3\2\2\2\30\u00ff\3\2\2\2\32\u0103\3\2\2\2\34\u0112\3\2\2\2\36\u0114"+
		"\3\2\2\2 \u011d\3\2\2\2\"\u012a\3\2\2\2$\u0133\3\2\2\2&\u0135\3\2\2\2"+
		"(\u0142\3\2\2\2*\u014b\3\2\2\2,\u014d\3\2\2\2.\u0150\3\2\2\2\60\u0153"+
		"\3\2\2\2\62\u015a\3\2\2\2\64\u0166\3\2\2\2\668\7\3\2\2\67\66\3\2\2\2\67"+
		"8\3\2\2\289\3\2\2\29:\7\65\2\2:\3\3\2\2\2;<\t\2\2\2<\5\3\2\2\2=H\5\64"+
		"\33\2>?\7\'\2\2?@\5\64\33\2@A\7(\2\2AH\3\2\2\2BC\7\'\2\2CD\5\16\b\2DE"+
		"\7(\2\2EH\3\2\2\2FH\5\16\b\2G=\3\2\2\2G>\3\2\2\2GB\3\2\2\2GF\3\2\2\2H"+
		"\7\3\2\2\2IJ\7\'\2\2JK\5\f\7\2KL\7(\2\2LS\3\2\2\2MS\5\64\33\2NO\7\30\2"+
		"\2OP\5\6\4\2PQ\5\n\6\2QS\3\2\2\2RI\3\2\2\2RM\3\2\2\2RN\3\2\2\2S\t\3\2"+
		"\2\2T_\5\64\33\2UV\7\30\2\2VW\5\6\4\2WX\5\n\6\2XY\7\'\2\2YZ\5\f\7\2Z["+
		"\7(\2\2[_\3\2\2\2\\_\5\16\b\2]_\5\4\3\2^T\3\2\2\2^U\3\2\2\2^\\\3\2\2\2"+
		"^]\3\2\2\2_\13\3\2\2\2`b\5\64\33\2ac\5\b\5\2ba\3\2\2\2cd\3\2\2\2db\3\2"+
		"\2\2de\3\2\2\2eh\3\2\2\2fh\5\n\6\2g`\3\2\2\2gf\3\2\2\2h\r\3\2\2\2ij\7"+
		"D\2\2jk\7\13\2\2kz\7\f\2\2lm\7D\2\2mn\7\13\2\2no\7\17\2\2ot\5\24\13\2"+
		"pq\7+\2\2qs\5\24\13\2rp\3\2\2\2sv\3\2\2\2tr\3\2\2\2tu\3\2\2\2uw\3\2\2"+
		"\2vt\3\2\2\2wx\7\f\2\2xz\3\2\2\2yi\3\2\2\2yl\3\2\2\2z\17\3\2\2\2{|\b\t"+
		"\1\2|\u0080\5\64\33\2}\177\5\22\n\2~}\3\2\2\2\177\u0082\3\2\2\2\u0080"+
		"~\3\2\2\2\u0080\u0081\3\2\2\2\u0081\u0093\3\2\2\2\u0082\u0080\3\2\2\2"+
		"\u0083\u0084\7\30\2\2\u0084\u0085\5\6\4\2\u0085\u0086\5\n\6\2\u0086\u0093"+
		"\3\2\2\2\u0087\u0088\7\'\2\2\u0088\u0089\5\20\t\2\u0089\u008a\7(\2\2\u008a"+
		"\u0093\3\2\2\2\u008b\u0093\5\16\b\2\u008c\u008d\7\4\2\2\u008d\u008e\7"+
		"E\2\2\u008e\u008f\7#\2\2\u008f\u0093\5\20\t\5\u0090\u0093\7E\2\2\u0091"+
		"\u0093\5\4\3\2\u0092{\3\2\2\2\u0092\u0083\3\2\2\2\u0092\u0087\3\2\2\2"+
		"\u0092\u008b\3\2\2\2\u0092\u008c\3\2\2\2\u0092\u0090\3\2\2\2\u0092\u0091"+
		"\3\2\2\2\u0093\u0099\3\2\2\2\u0094\u0095\f\b\2\2\u0095\u0096\7-\2\2\u0096"+
		"\u0098\5\20\t\t\u0097\u0094\3\2\2\2\u0098\u009b\3\2\2\2\u0099\u0097\3"+
		"\2\2\2\u0099\u009a\3\2\2\2\u009a\21\3\2\2\2\u009b\u0099\3\2\2\2\u009c"+
		"\u009d\7\'\2\2\u009d\u009e\5\20\t\2\u009e\u009f\7(\2\2\u009f\u00a8\3\2"+
		"\2\2\u00a0\u00a8\5\64\33\2\u00a1\u00a8\7E\2\2\u00a2\u00a8\5\16\b\2\u00a3"+
		"\u00a4\7\30\2\2\u00a4\u00a5\5\6\4\2\u00a5\u00a6\5\n\6\2\u00a6\u00a8\3"+
		"\2\2\2\u00a7\u009c\3\2\2\2\u00a7\u00a0\3\2\2\2\u00a7\u00a1\3\2\2\2\u00a7"+
		"\u00a2\3\2\2\2\u00a7\u00a3\3\2\2\2\u00a8\23\3\2\2\2\u00a9\u00aa\7\23\2"+
		"\2\u00aa\u00ab\5\60\31\2\u00ab\u00ac\7\"\2\2\u00ac\u00ad\5\20\t\2\u00ad"+
		"\25\3\2\2\2\u00ae\u00af\5\30\r\2\u00af\27\3\2\2\2\u00b0\u00b1\7\b\2\2"+
		"\u00b1\u00b4\5\60\31\2\u00b2\u00b3\7\"\2\2\u00b3\u00b5\5\20\t\2\u00b4"+
		"\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b7\7."+
		"\2\2\u00b7\u00b8\5\30\r\2\u00b8\u00b9\7\t\2\2\u00b9\u00ba\5\26\f\2\u00ba"+
		"\u0100\3\2\2\2\u00bb\u00bc\7\r\2\2\u00bc\u00bd\7\'\2\2\u00bd\u00be\5\60"+
		"\31\2\u00be\u00bf\7\"\2\2\u00bf\u00c0\5\20\t\2\u00c0\u00c1\7(\2\2\u00c1"+
		"\u00c2\7,\2\2\u00c2\u00c3\5\26\f\2\u00c3\u0100\3\2\2\2\u00c4\u00c6\5\62"+
		"\32\2\u00c5\u00c7\5\62\32\2\u00c6\u00c5\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8"+
		"\u00c6\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u0100\3\2\2\2\u00ca\u0100\5\32"+
		"\16\2\u00cb\u00cc\7\5\2\2\u00cc\u00d0\7B\2\2\u00cd\u00cf\5\36\20\2\u00ce"+
		"\u00cd\3\2\2\2\u00cf\u00d2\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00d1\3\2"+
		"\2\2\u00d1\u00d3\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d3\u0100\5*\26\2\u00d4"+
		"\u00d5\7)\2\2\u00d5\u00da\5(\25\2\u00d6\u00d7\7!\2\2\u00d7\u00d9\5(\25"+
		"\2\u00d8\u00d6\3\2\2\2\u00d9\u00dc\3\2\2\2\u00da\u00d8\3\2\2\2\u00da\u00db"+
		"\3\2\2\2\u00db\u00dd\3\2\2\2\u00dc\u00da\3\2\2\2\u00dd\u00de\7*\2\2\u00de"+
		"\u0100\3\2\2\2\u00df\u00e0\7\n\2\2\u00e0\u00e1\5\62\32\2\u00e1\u00e5\7"+
		"\13\2\2\u00e2\u00e4\5&\24\2\u00e3\u00e2\3\2\2\2\u00e4\u00e7\3\2\2\2\u00e5"+
		"\u00e3\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\u00e8\3\2\2\2\u00e7\u00e5\3\2"+
		"\2\2\u00e8\u00e9\7\f\2\2\u00e9\u0100\3\2\2\2\u00ea\u00ec\5\64\33\2\u00eb"+
		"\u00ed\5\36\20\2\u00ec\u00eb\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00f1\3"+
		"\2\2\2\u00ee\u00f0\5\62\32\2\u00ef\u00ee\3\2\2\2\u00f0\u00f3\3\2\2\2\u00f1"+
		"\u00ef\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\u0100\3\2\2\2\u00f3\u00f1\3\2"+
		"\2\2\u00f4\u00f5\7\16\2\2\u00f5\u00f6\7E\2\2\u00f6\u00f7\7,\2\2\u00f7"+
		"\u0100\5\26\f\2\u00f8\u00f9\7\62\2\2\u00f9\u00fb\5\62\32\2\u00fa\u00fc"+
		"\5\22\n\2\u00fb\u00fa\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00fb\3\2\2\2"+
		"\u00fd\u00fe\3\2\2\2\u00fe\u0100\3\2\2\2\u00ff\u00b0\3\2\2\2\u00ff\u00bb"+
		"\3\2\2\2\u00ff\u00c4\3\2\2\2\u00ff\u00ca\3\2\2\2\u00ff\u00cb\3\2\2\2\u00ff"+
		"\u00d4\3\2\2\2\u00ff\u00df\3\2\2\2\u00ff\u00ea\3\2\2\2\u00ff\u00f4\3\2"+
		"\2\2\u00ff\u00f8\3\2\2\2\u0100\31\3\2\2\2\u0101\u0104\5\62\32\2\u0102"+
		"\u0104\5\34\17\2\u0103\u0101\3\2\2\2\u0103\u0102\3\2\2\2\u0104\33\3\2"+
		"\2\2\u0105\u0113\7D\2\2\u0106\u0107\7=\2\2\u0107\u0113\5\2\2\2\u0108\u0109"+
		"\7?\2\2\u0109\u0113\7\65\2\2\u010a\u0113\7\65\2\2\u010b\u0113\7<\2\2\u010c"+
		"\u0113\78\2\2\u010d\u010e\7\27\2\2\u010e\u010f\5\6\4\2\u010f\u0110\5\n"+
		"\6\2\u0110\u0113\3\2\2\2\u0111\u0113\7:\2\2\u0112\u0105\3\2\2\2\u0112"+
		"\u0106\3\2\2\2\u0112\u0108\3\2\2\2\u0112\u010a\3\2\2\2\u0112\u010b\3\2"+
		"\2\2\u0112\u010c\3\2\2\2\u0112\u010d\3\2\2\2\u0112\u0111\3\2\2\2\u0113"+
		"\35\3\2\2\2\u0114\u0118\7)\2\2\u0115\u0117\5\22\n\2\u0116\u0115\3\2\2"+
		"\2\u0117\u011a\3\2\2\2\u0118\u0116\3\2\2\2\u0118\u0119\3\2\2\2\u0119\u011b"+
		"\3\2\2\2\u011a\u0118\3\2\2\2\u011b\u011c\7*\2\2\u011c\37\3\2\2\2\u011d"+
		"\u011e\7%\2\2\u011e\u011f\5\62\32\2\u011f\u0120\7&\2\2\u0120!\3\2\2\2"+
		"\u0121\u012b\7\63\2\2\u0122\u012b\7B\2\2\u0123\u0127\5\64\33\2\u0124\u0126"+
		"\5$\23\2\u0125\u0124\3\2\2\2\u0126\u0129\3\2\2\2\u0127\u0125\3\2\2\2\u0127"+
		"\u0128\3\2\2\2\u0128\u012b\3\2\2\2\u0129\u0127\3\2\2\2\u012a\u0121\3\2"+
		"\2\2\u012a\u0122\3\2\2\2\u012a\u0123\3\2\2\2\u012b#\3\2\2\2\u012c\u0134"+
		"\7\63\2\2\u012d\u0134\7B\2\2\u012e\u0134\5\64\33\2\u012f\u0130\7\'\2\2"+
		"\u0130\u0131\5\"\22\2\u0131\u0132\7(\2\2\u0132\u0134\3\2\2\2\u0133\u012c"+
		"\3\2\2\2\u0133\u012d\3\2\2\2\u0133\u012e\3\2\2\2\u0133\u012f\3\2\2\2\u0134"+
		"%\3\2\2\2\u0135\u0136\7$\2\2\u0136\u0137\5\"\22\2\u0137\u0138\7,\2\2\u0138"+
		"\u0139\5\26\f\2\u0139\'\3\2\2\2\u013a\u013b\5\62\32\2\u013b\u013c\7\""+
		"\2\2\u013c\u013d\5\34\17\2\u013d\u0143\3\2\2\2\u013e\u013f\5\62\32\2\u013f"+
		"\u0140\7\"\2\2\u0140\u0141\5\62\32\2\u0141\u0143\3\2\2\2\u0142\u013a\3"+
		"\2\2\2\u0142\u013e\3\2\2\2\u0143)\3\2\2\2\u0144\u0146\5\62\32\2\u0145"+
		"\u0144\3\2\2\2\u0146\u0147\3\2\2\2\u0147\u0145\3\2\2\2\u0147\u0148\3\2"+
		"\2\2\u0148\u014c\3\2\2\2\u0149\u014a\7\'\2\2\u014a\u014c\7(\2\2\u014b"+
		"\u0145\3\2\2\2\u014b\u0149\3\2\2\2\u014c+\3\2\2\2\u014d\u014e\5\26\f\2"+
		"\u014e\u014f\7\2\2\3\u014f-\3\2\2\2\u0150\u0151\5\20\t\2\u0151\u0152\7"+
		"\2\2\3\u0152/\3\2\2\2\u0153\u0154\7B\2\2\u0154\61\3\2\2\2\u0155\u015b"+
		"\7B\2\2\u0156\u015b\7C\2\2\u0157\u0158\7D\2\2\u0158\u0159\7#\2\2\u0159"+
		"\u015b\7B\2\2\u015a\u0155\3\2\2\2\u015a\u0156\3\2\2\2\u015a\u0157\3\2"+
		"\2\2\u015b\63\3\2\2\2\u015c\u0167\7D\2\2\u015d\u015e\7D\2\2\u015e\u015f"+
		"\7#\2\2\u015f\u0167\7D\2\2\u0160\u0161\7<\2\2\u0161\u0162\7#\2\2\u0162"+
		"\u0167\7D\2\2\u0163\u0167\7:\2\2\u0164\u0167\7;\2\2\u0165\u0167\5\4\3"+
		"\2\u0166\u015c\3\2\2\2\u0166\u015d\3\2\2\2\u0166\u0160\3\2\2\2\u0166\u0163"+
		"\3\2\2\2\u0166\u0164\3\2\2\2\u0166\u0165\3\2\2\2\u0167\65\3\2\2\2\"\67"+
		"GR^dgty\u0080\u0092\u0099\u00a7\u00b4\u00c8\u00d0\u00da\u00e5\u00ec\u00f1"+
		"\u00fd\u00ff\u0103\u0112\u0118\u0127\u012a\u0133\u0142\u0147\u014b\u015a"+
		"\u0166";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}