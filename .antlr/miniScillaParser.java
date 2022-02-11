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
		FORALL=1, BUILTIN=2, LIBRARY=3, IMPORT=4, LET=5, IN=6, MATCH=7, WITH=8, 
		END=9, FUN=10, TFUN=11, CONTRACT=12, TRANSITION=13, SEND=14, EVENT=15, 
		FIELD=16, ACCEPT=17, EXISTS=18, DELETE=19, EMP=20, MAP=21, SCILLA_VERSION=22, 
		TYPE=23, OF=24, TRY=25, CATCH=26, AS=27, PROCEDURE=28, THROW=29, SEMICOLON=30, 
		COLON=31, PERIOD=32, BAR=33, LSQB=34, RSQB=35, LPAREN=36, RPAREN=37, LBRACE=38, 
		RBRACE=39, COMMA=40, ARROW=41, TARROW=42, EQ=43, AND=44, FETCH=45, ASSIGN=46, 
		AT=47, UNDERSCORE=48, BlockComment=49, NUMBER=50, INT=51, WS=52, TOSKIP=53, 
		STRING=54, FLOAT=55, BOOLEAN=56, HEX=57, INTTY=58, ID=59, SPID=60, CID=61, 
		TID=62;
	public static final int
		RULE_t_map_key = 0, RULE_t_map_value_args = 1, RULE_t_map_value = 2, RULE_t_map_value_allow_targs = 3, 
		RULE_address_typ = 4, RULE_typ = 5, RULE_targ = 6, RULE_address_type_field = 7, 
		RULE_exp = 8, RULE_simple_exp = 9, RULE_atomic_exp = 10, RULE_lit = 11, 
		RULE_ctargs = 12, RULE_map_access = 13, RULE_pattern = 14, RULE_arg_pattern = 15, 
		RULE_exp_pm_clause = 16, RULE_msg_entry = 17, RULE_builtin_args = 18, 
		RULE_exp_term = 19, RULE_type_term = 20, RULE_identifier = 21, RULE_sid = 22, 
		RULE_sident = 23, RULE_scid = 24;
	private static String[] makeRuleNames() {
		return new String[] {
			"t_map_key", "t_map_value_args", "t_map_value", "t_map_value_allow_targs", 
			"address_typ", "typ", "targ", "address_type_field", "exp", "simple_exp", 
			"atomic_exp", "lit", "ctargs", "map_access", "pattern", "arg_pattern", 
			"exp_pm_clause", "msg_entry", "builtin_args", "exp_term", "type_term", 
			"identifier", "sid", "sident", "scid"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'forall'", "'builtin'", "'library'", "'import'", "'let'", "'in'", 
			"'match'", "'with'", "'end'", "'fun'", "'tfun'", "'contract'", "'transition'", 
			"'send'", "'event'", "'field'", "'accept'", "'exists'", "'delete'", "'emp'", 
			"'map'", "'scilla_version'", "'type'", "'of'", "'try'", "'catch'", "'as'", 
			"'procedure'", "'throw'", "';'", "':'", "'.'", "'|'", "'['", "']'", "'('", 
			"')'", "'{'", "'}'", "','", "'=>'", "'->'", "'='", "'&'", "'<-'", "':='", 
			"'@'", "'_'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FORALL", "BUILTIN", "LIBRARY", "IMPORT", "LET", "IN", "MATCH", 
			"WITH", "END", "FUN", "TFUN", "CONTRACT", "TRANSITION", "SEND", "EVENT", 
			"FIELD", "ACCEPT", "EXISTS", "DELETE", "EMP", "MAP", "SCILLA_VERSION", 
			"TYPE", "OF", "TRY", "CATCH", "AS", "PROCEDURE", "THROW", "SEMICOLON", 
			"COLON", "PERIOD", "BAR", "LSQB", "RSQB", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "COMMA", "ARROW", "TARROW", "EQ", "AND", "FETCH", "ASSIGN", 
			"AT", "UNDERSCORE", "BlockComment", "NUMBER", "INT", "WS", "TOSKIP", 
			"STRING", "FLOAT", "BOOLEAN", "HEX", "INTTY", "ID", "SPID", "CID", "TID"
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
		enterRule(_localctx, 0, RULE_t_map_key);
		try {
			setState(60);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(50);
				((T_map_keyContext)_localctx).kt_to_map = scid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(51);
				match(LPAREN);
				setState(52);
				((T_map_keyContext)_localctx).kt_to_map = scid();
				setState(53);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(55);
				match(LPAREN);
				setState(56);
				((T_map_keyContext)_localctx).kt = address_typ();
				setState(57);
				match(RPAREN);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(59);
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
		enterRule(_localctx, 2, RULE_t_map_value_args);
		try {
			setState(71);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(62);
				match(LPAREN);
				setState(63);
				((T_map_value_argsContext)_localctx).t = t_map_value_allow_targs();
				setState(64);
				match(RPAREN);
				}
				break;
			case HEX:
			case CID:
				enterOuterAlt(_localctx, 2);
				{
				setState(66);
				((T_map_value_argsContext)_localctx).d = scid();
				}
				break;
			case MAP:
				enterOuterAlt(_localctx, 3);
				{
				setState(67);
				match(MAP);
				setState(68);
				((T_map_value_argsContext)_localctx).k = t_map_key();
				setState(69);
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
		public T_map_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_t_map_value; }
	}

	public final T_map_valueContext t_map_value() throws RecognitionException {
		T_map_valueContext _localctx = new T_map_valueContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_t_map_value);
		try {
			setState(82);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(73);
				((T_map_valueContext)_localctx).d = scid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(74);
				match(MAP);
				setState(75);
				((T_map_valueContext)_localctx).k = t_map_key();
				setState(76);
				((T_map_valueContext)_localctx).v = t_map_value();
				setState(77);
				match(LPAREN);
				setState(78);
				((T_map_valueContext)_localctx).t = t_map_value_allow_targs();
				setState(79);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(81);
				((T_map_valueContext)_localctx).vt = address_typ();
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
		enterRule(_localctx, 6, RULE_t_map_value_allow_targs);
		int _la;
		try {
			setState(91);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(84);
				((T_map_value_allow_targsContext)_localctx).d = scid();
				setState(86); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(85);
					t_map_value_args();
					}
					}
					setState(88); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MAP) | (1L << LPAREN) | (1L << HEX) | (1L << CID))) != 0) );
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(90);
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
		enterRule(_localctx, 8, RULE_address_typ);
		int _la;
		try {
			setState(109);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(93);
				((Address_typContext)_localctx).d = match(CID);
				setState(94);
				match(WITH);
				setState(95);
				match(END);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(96);
				((Address_typContext)_localctx).d = match(CID);
				setState(97);
				match(WITH);
				setState(98);
				match(CONTRACT);
				setState(99);
				((Address_typContext)_localctx).address_type_field = address_type_field();
				((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
				setState(104);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(100);
					match(COMMA);
					setState(101);
					((Address_typContext)_localctx).address_type_field = address_type_field();
					((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
					}
					}
					setState(106);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(107);
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
		public TerminalNode INTTY() { return getToken(miniScillaParser.INTTY, 0); }
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
		int _startState = 10;
		enterRecursionRule(_localctx, 10, RULE_typ, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(112);
				((TypContext)_localctx).d = scid();
				setState(116);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(113);
						((TypContext)_localctx).targ = targ();
						((TypContext)_localctx).targs.add(((TypContext)_localctx).targ);
						}
						} 
					}
					setState(118);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
				}
				}
				break;
			case 2:
				{
				setState(119);
				match(MAP);
				setState(120);
				((TypContext)_localctx).k = t_map_key();
				setState(121);
				((TypContext)_localctx).v = t_map_value();
				}
				break;
			case 3:
				{
				setState(123);
				match(LPAREN);
				setState(124);
				((TypContext)_localctx).t = typ(0);
				setState(125);
				match(RPAREN);
				}
				break;
			case 4:
				{
				setState(127);
				((TypContext)_localctx).t_to_map = address_typ();
				}
				break;
			case 5:
				{
				setState(128);
				match(FORALL);
				setState(129);
				((TypContext)_localctx).tv = match(TID);
				setState(130);
				match(PERIOD);
				setState(131);
				((TypContext)_localctx).t = typ(3);
				}
				break;
			case 6:
				{
				setState(132);
				((TypContext)_localctx).t_var = match(TID);
				}
				break;
			case 7:
				{
				setState(133);
				match(INTTY);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(141);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
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
					setState(136);
					if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
					setState(137);
					match(TARROW);
					setState(138);
					((TypContext)_localctx).t2 = typ(7);
					}
					} 
				}
				setState(143);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
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
		enterRule(_localctx, 12, RULE_targ);
		try {
			setState(155);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(144);
				match(LPAREN);
				setState(145);
				((TargContext)_localctx).t = typ(0);
				setState(146);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(148);
				((TargContext)_localctx).d = scid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(149);
				((TargContext)_localctx).t_var = match(TID);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(150);
				((TargContext)_localctx).t_to_map = address_typ();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(151);
				match(MAP);
				setState(152);
				((TargContext)_localctx).k = t_map_key();
				setState(153);
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
		enterRule(_localctx, 14, RULE_address_type_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(FIELD);
			setState(158);
			((Address_type_fieldContext)_localctx).id = identifier();
			setState(159);
			match(COLON);
			setState(160);
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
		enterRule(_localctx, 16, RULE_exp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
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
		public SidentContext sident;
		public List<SidentContext> args = new ArrayList<SidentContext>();
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public List<SidentContext> sident() {
			return getRuleContexts(SidentContext.class);
		}
		public SidentContext sident(int i) {
			return getRuleContext(SidentContext.class,i);
		}
		public AppContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class LetContext extends Simple_expContext {
		public IdentifierContext x;
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
		public LetContext(Simple_expContext ctx) { copyFrom(ctx); }
	}
	public static class AtomicContext extends Simple_expContext {
		public Atomic_expContext a;
		public Atomic_expContext atomic_exp() {
			return getRuleContext(Atomic_expContext.class,0);
		}
		public AtomicContext(Simple_expContext ctx) { copyFrom(ctx); }
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

	public final Simple_expContext simple_exp() throws RecognitionException {
		Simple_expContext _localctx = new Simple_expContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_simple_exp);
		int _la;
		try {
			setState(196);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				_localctx = new LetContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(164);
				match(LET);
				setState(165);
				((LetContext)_localctx).x = identifier();
				setState(166);
				match(EQ);
				setState(167);
				((LetContext)_localctx).f = simple_exp();
				setState(168);
				match(IN);
				setState(169);
				((LetContext)_localctx).e = exp();
				}
				break;
			case 2:
				_localctx = new FunContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(171);
				match(FUN);
				setState(172);
				match(LPAREN);
				setState(173);
				((FunContext)_localctx).id = identifier();
				setState(174);
				match(COLON);
				setState(175);
				((FunContext)_localctx).ty = typ(0);
				setState(176);
				match(RPAREN);
				setState(177);
				match(ARROW);
				setState(178);
				((FunContext)_localctx).e = exp();
				}
				break;
			case 3:
				_localctx = new AppContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(180);
				((AppContext)_localctx).f_var = sid();
				setState(182); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(181);
					((AppContext)_localctx).sident = sident();
					((AppContext)_localctx).args.add(((AppContext)_localctx).sident);
					}
					}
					setState(184); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << SPID) | (1L << CID))) != 0) );
				}
				break;
			case 4:
				_localctx = new AtomicContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(186);
				((AtomicContext)_localctx).a = atomic_exp();
				}
				break;
			case 5:
				_localctx = new BuiltinContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(187);
				match(BUILTIN);
				setState(188);
				((BuiltinContext)_localctx).b = match(ID);
				setState(192);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==LBRACE) {
					{
					{
					setState(189);
					((BuiltinContext)_localctx).ctargs = ctargs();
					((BuiltinContext)_localctx).targs.add(((BuiltinContext)_localctx).ctargs);
					}
					}
					setState(194);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(195);
				((BuiltinContext)_localctx).xs = builtin_args();
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
		enterRule(_localctx, 20, RULE_atomic_exp);
		try {
			setState(200);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(198);
				((Atomic_expContext)_localctx).i = sid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(199);
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
		public Token i_number;
		public Token n;
		public Token h;
		public Token s;
		public T_map_keyContext kt;
		public T_map_valueContext vt;
		public Token b;
		public TerminalNode CID() { return getToken(miniScillaParser.CID, 0); }
		public TerminalNode INTTY() { return getToken(miniScillaParser.INTTY, 0); }
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
		enterRule(_localctx, 22, RULE_lit);
		try {
			setState(213);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CID:
				enterOuterAlt(_localctx, 1);
				{
				setState(202);
				((LitContext)_localctx).i = match(CID);
				}
				break;
			case INTTY:
				enterOuterAlt(_localctx, 2);
				{
				setState(203);
				match(INTTY);
				setState(204);
				((LitContext)_localctx).i_number = match(NUMBER);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(205);
				((LitContext)_localctx).n = match(NUMBER);
				}
				break;
			case HEX:
				enterOuterAlt(_localctx, 4);
				{
				setState(206);
				((LitContext)_localctx).h = match(HEX);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 5);
				{
				setState(207);
				((LitContext)_localctx).s = match(STRING);
				}
				break;
			case EMP:
				enterOuterAlt(_localctx, 6);
				{
				setState(208);
				match(EMP);
				setState(209);
				((LitContext)_localctx).kt = t_map_key();
				setState(210);
				((LitContext)_localctx).vt = t_map_value();
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 7);
				{
				setState(212);
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
		enterRule(_localctx, 24, RULE_ctargs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			match(LBRACE);
			setState(219);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MAP) | (1L << LPAREN) | (1L << HEX) | (1L << CID) | (1L << TID))) != 0)) {
				{
				{
				setState(216);
				((CtargsContext)_localctx).ts = targ();
				}
				}
				setState(221);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(222);
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
		public SidentContext i;
		public TerminalNode LSQB() { return getToken(miniScillaParser.LSQB, 0); }
		public TerminalNode RSQB() { return getToken(miniScillaParser.RSQB, 0); }
		public SidentContext sident() {
			return getRuleContext(SidentContext.class,0);
		}
		public Map_accessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_map_access; }
	}

	public final Map_accessContext map_access() throws RecognitionException {
		Map_accessContext _localctx = new Map_accessContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_map_access);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			match(LSQB);
			setState(225);
			((Map_accessContext)_localctx).i = sident();
			setState(226);
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
		enterRule(_localctx, 28, RULE_pattern);
		int _la;
		try {
			setState(237);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				_localctx = new WildcardContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(228);
				match(UNDERSCORE);
				}
				break;
			case ID:
				_localctx = new BinderContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(229);
				((BinderContext)_localctx).x = match(ID);
				}
				break;
			case HEX:
			case CID:
				_localctx = new ConstructorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(230);
				((ConstructorContext)_localctx).c = scid();
				setState(234);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << UNDERSCORE) | (1L << HEX) | (1L << ID) | (1L << CID))) != 0)) {
					{
					{
					setState(231);
					((ConstructorContext)_localctx).ps = arg_pattern();
					}
					}
					setState(236);
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
		enterRule(_localctx, 30, RULE_arg_pattern);
		try {
			setState(246);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				enterOuterAlt(_localctx, 1);
				{
				setState(239);
				match(UNDERSCORE);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(240);
				((Arg_patternContext)_localctx).x = match(ID);
				}
				break;
			case HEX:
			case CID:
				enterOuterAlt(_localctx, 3);
				{
				setState(241);
				((Arg_patternContext)_localctx).c = scid();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 4);
				{
				setState(242);
				match(LPAREN);
				setState(243);
				((Arg_patternContext)_localctx).p = pattern();
				setState(244);
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
		enterRule(_localctx, 32, RULE_exp_pm_clause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			match(BAR);
			setState(249);
			((Exp_pm_clauseContext)_localctx).p = pattern();
			setState(250);
			match(ARROW);
			setState(251);
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
		enterRule(_localctx, 34, RULE_msg_entry);
		try {
			setState(261);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(253);
				((Msg_entryContext)_localctx).i = sid();
				setState(254);
				match(COLON);
				setState(255);
				((Msg_entryContext)_localctx).l = lit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(257);
				((Msg_entryContext)_localctx).i = sid();
				setState(258);
				match(COLON);
				setState(259);
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
		public SidentContext args;
		public List<SidentContext> sident() {
			return getRuleContexts(SidentContext.class);
		}
		public SidentContext sident(int i) {
			return getRuleContext(SidentContext.class,i);
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
		enterRule(_localctx, 36, RULE_builtin_args);
		int _la;
		try {
			setState(270);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
			case SPID:
			case CID:
				enterOuterAlt(_localctx, 1);
				{
				setState(264); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(263);
					((Builtin_argsContext)_localctx).args = sident();
					}
					}
					setState(266); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << SPID) | (1L << CID))) != 0) );
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(268);
				match(LPAREN);
				setState(269);
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
		enterRule(_localctx, 38, RULE_exp_term);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			((Exp_termContext)_localctx).e = exp();
			setState(273);
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
		enterRule(_localctx, 40, RULE_type_term);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
			((Type_termContext)_localctx).t = typ(0);
			setState(276);
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
		enterRule(_localctx, 42, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
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
		enterRule(_localctx, 44, RULE_sid);
		try {
			setState(285);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(280);
				((SidContext)_localctx).name = match(ID);
				}
				break;
			case SPID:
				enterOuterAlt(_localctx, 2);
				{
				setState(281);
				((SidContext)_localctx).name = match(SPID);
				}
				break;
			case CID:
				enterOuterAlt(_localctx, 3);
				{
				setState(282);
				((SidContext)_localctx).ns = match(CID);
				setState(283);
				match(PERIOD);
				setState(284);
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

	public static class SidentContext extends ParserRuleContext {
		public Token name;
		public Token ns;
		public TerminalNode ID() { return getToken(miniScillaParser.ID, 0); }
		public TerminalNode SPID() { return getToken(miniScillaParser.SPID, 0); }
		public TerminalNode PERIOD() { return getToken(miniScillaParser.PERIOD, 0); }
		public TerminalNode CID() { return getToken(miniScillaParser.CID, 0); }
		public SidentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sident; }
	}

	public final SidentContext sident() throws RecognitionException {
		SidentContext _localctx = new SidentContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_sident);
		try {
			setState(292);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(287);
				((SidentContext)_localctx).name = match(ID);
				}
				break;
			case SPID:
				enterOuterAlt(_localctx, 2);
				{
				setState(288);
				((SidentContext)_localctx).name = match(SPID);
				}
				break;
			case CID:
				enterOuterAlt(_localctx, 3);
				{
				setState(289);
				((SidentContext)_localctx).ns = match(CID);
				setState(290);
				match(PERIOD);
				setState(291);
				((SidentContext)_localctx).name = match(ID);
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
		public List<TerminalNode> CID() { return getTokens(miniScillaParser.CID); }
		public TerminalNode CID(int i) {
			return getToken(miniScillaParser.CID, i);
		}
		public TerminalNode PERIOD() { return getToken(miniScillaParser.PERIOD, 0); }
		public TerminalNode HEX() { return getToken(miniScillaParser.HEX, 0); }
		public ScidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scid; }
	}

	public final ScidContext scid() throws RecognitionException {
		ScidContext _localctx = new ScidContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_scid);
		try {
			setState(301);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(294);
				((ScidContext)_localctx).name = match(CID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(295);
				((ScidContext)_localctx).ns = match(CID);
				setState(296);
				match(PERIOD);
				setState(297);
				((ScidContext)_localctx).name = match(CID);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(298);
				((ScidContext)_localctx).ns = match(HEX);
				setState(299);
				match(PERIOD);
				setState(300);
				((ScidContext)_localctx).name = match(CID);
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
		case 5:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3@\u0132\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\5\2?\n\2\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3J\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\5\4U\n\4\3\5\3\5\6\5Y\n\5\r\5\16\5Z\3\5\5\5^\n\5\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\7\6i\n\6\f\6\16\6l\13\6\3\6\3\6\5\6p\n\6\3\7\3\7\3"+
		"\7\7\7u\n\7\f\7\16\7x\13\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\5\7\u0089\n\7\3\7\3\7\3\7\7\7\u008e\n\7\f\7\16\7\u0091"+
		"\13\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u009e\n\b\3\t\3"+
		"\t\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\6\13\u00b9\n\13\r\13\16\13"+
		"\u00ba\3\13\3\13\3\13\3\13\7\13\u00c1\n\13\f\13\16\13\u00c4\13\13\3\13"+
		"\5\13\u00c7\n\13\3\f\3\f\5\f\u00cb\n\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\5\r\u00d8\n\r\3\16\3\16\7\16\u00dc\n\16\f\16\16\16\u00df"+
		"\13\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\7\20\u00eb\n"+
		"\20\f\20\16\20\u00ee\13\20\5\20\u00f0\n\20\3\21\3\21\3\21\3\21\3\21\3"+
		"\21\3\21\5\21\u00f9\n\21\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\5\23\u0108\n\23\3\24\6\24\u010b\n\24\r\24\16\24\u010c"+
		"\3\24\3\24\5\24\u0111\n\24\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\30"+
		"\3\30\3\30\3\30\3\30\5\30\u0120\n\30\3\31\3\31\3\31\3\31\3\31\5\31\u0127"+
		"\n\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\5\32\u0130\n\32\3\32\2\3\f\33"+
		"\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\2\2\2\u014c\2>"+
		"\3\2\2\2\4I\3\2\2\2\6T\3\2\2\2\b]\3\2\2\2\no\3\2\2\2\f\u0088\3\2\2\2\16"+
		"\u009d\3\2\2\2\20\u009f\3\2\2\2\22\u00a4\3\2\2\2\24\u00c6\3\2\2\2\26\u00ca"+
		"\3\2\2\2\30\u00d7\3\2\2\2\32\u00d9\3\2\2\2\34\u00e2\3\2\2\2\36\u00ef\3"+
		"\2\2\2 \u00f8\3\2\2\2\"\u00fa\3\2\2\2$\u0107\3\2\2\2&\u0110\3\2\2\2(\u0112"+
		"\3\2\2\2*\u0115\3\2\2\2,\u0118\3\2\2\2.\u011f\3\2\2\2\60\u0126\3\2\2\2"+
		"\62\u012f\3\2\2\2\64?\5\62\32\2\65\66\7&\2\2\66\67\5\62\32\2\678\7\'\2"+
		"\28?\3\2\2\29:\7&\2\2:;\5\n\6\2;<\7\'\2\2<?\3\2\2\2=?\5\n\6\2>\64\3\2"+
		"\2\2>\65\3\2\2\2>9\3\2\2\2>=\3\2\2\2?\3\3\2\2\2@A\7&\2\2AB\5\b\5\2BC\7"+
		"\'\2\2CJ\3\2\2\2DJ\5\62\32\2EF\7\27\2\2FG\5\2\2\2GH\5\6\4\2HJ\3\2\2\2"+
		"I@\3\2\2\2ID\3\2\2\2IE\3\2\2\2J\5\3\2\2\2KU\5\62\32\2LM\7\27\2\2MN\5\2"+
		"\2\2NO\5\6\4\2OP\7&\2\2PQ\5\b\5\2QR\7\'\2\2RU\3\2\2\2SU\5\n\6\2TK\3\2"+
		"\2\2TL\3\2\2\2TS\3\2\2\2U\7\3\2\2\2VX\5\62\32\2WY\5\4\3\2XW\3\2\2\2YZ"+
		"\3\2\2\2ZX\3\2\2\2Z[\3\2\2\2[^\3\2\2\2\\^\5\6\4\2]V\3\2\2\2]\\\3\2\2\2"+
		"^\t\3\2\2\2_`\7?\2\2`a\7\n\2\2ap\7\13\2\2bc\7?\2\2cd\7\n\2\2de\7\16\2"+
		"\2ej\5\20\t\2fg\7*\2\2gi\5\20\t\2hf\3\2\2\2il\3\2\2\2jh\3\2\2\2jk\3\2"+
		"\2\2km\3\2\2\2lj\3\2\2\2mn\7\13\2\2np\3\2\2\2o_\3\2\2\2ob\3\2\2\2p\13"+
		"\3\2\2\2qr\b\7\1\2rv\5\62\32\2su\5\16\b\2ts\3\2\2\2ux\3\2\2\2vt\3\2\2"+
		"\2vw\3\2\2\2w\u0089\3\2\2\2xv\3\2\2\2yz\7\27\2\2z{\5\2\2\2{|\5\6\4\2|"+
		"\u0089\3\2\2\2}~\7&\2\2~\177\5\f\7\2\177\u0080\7\'\2\2\u0080\u0089\3\2"+
		"\2\2\u0081\u0089\5\n\6\2\u0082\u0083\7\3\2\2\u0083\u0084\7@\2\2\u0084"+
		"\u0085\7\"\2\2\u0085\u0089\5\f\7\5\u0086\u0089\7@\2\2\u0087\u0089\7<\2"+
		"\2\u0088q\3\2\2\2\u0088y\3\2\2\2\u0088}\3\2\2\2\u0088\u0081\3\2\2\2\u0088"+
		"\u0082\3\2\2\2\u0088\u0086\3\2\2\2\u0088\u0087\3\2\2\2\u0089\u008f\3\2"+
		"\2\2\u008a\u008b\f\b\2\2\u008b\u008c\7,\2\2\u008c\u008e\5\f\7\t\u008d"+
		"\u008a\3\2\2\2\u008e\u0091\3\2\2\2\u008f\u008d\3\2\2\2\u008f\u0090\3\2"+
		"\2\2\u0090\r\3\2\2\2\u0091\u008f\3\2\2\2\u0092\u0093\7&\2\2\u0093\u0094"+
		"\5\f\7\2\u0094\u0095\7\'\2\2\u0095\u009e\3\2\2\2\u0096\u009e\5\62\32\2"+
		"\u0097\u009e\7@\2\2\u0098\u009e\5\n\6\2\u0099\u009a\7\27\2\2\u009a\u009b"+
		"\5\2\2\2\u009b\u009c\5\6\4\2\u009c\u009e\3\2\2\2\u009d\u0092\3\2\2\2\u009d"+
		"\u0096\3\2\2\2\u009d\u0097\3\2\2\2\u009d\u0098\3\2\2\2\u009d\u0099\3\2"+
		"\2\2\u009e\17\3\2\2\2\u009f\u00a0\7\22\2\2\u00a0\u00a1\5,\27\2\u00a1\u00a2"+
		"\7!\2\2\u00a2\u00a3\5\f\7\2\u00a3\21\3\2\2\2\u00a4\u00a5\5\24\13\2\u00a5"+
		"\23\3\2\2\2\u00a6\u00a7\7\7\2\2\u00a7\u00a8\5,\27\2\u00a8\u00a9\7-\2\2"+
		"\u00a9\u00aa\5\24\13\2\u00aa\u00ab\7\b\2\2\u00ab\u00ac\5\22\n\2\u00ac"+
		"\u00c7\3\2\2\2\u00ad\u00ae\7\f\2\2\u00ae\u00af\7&\2\2\u00af\u00b0\5,\27"+
		"\2\u00b0\u00b1\7!\2\2\u00b1\u00b2\5\f\7\2\u00b2\u00b3\7\'\2\2\u00b3\u00b4"+
		"\7+\2\2\u00b4\u00b5\5\22\n\2\u00b5\u00c7\3\2\2\2\u00b6\u00b8\5.\30\2\u00b7"+
		"\u00b9\5\60\31\2\u00b8\u00b7\3\2\2\2\u00b9\u00ba\3\2\2\2\u00ba\u00b8\3"+
		"\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00c7\3\2\2\2\u00bc\u00c7\5\26\f\2\u00bd"+
		"\u00be\7\4\2\2\u00be\u00c2\7=\2\2\u00bf\u00c1\5\32\16\2\u00c0\u00bf\3"+
		"\2\2\2\u00c1\u00c4\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3"+
		"\u00c5\3\2\2\2\u00c4\u00c2\3\2\2\2\u00c5\u00c7\5&\24\2\u00c6\u00a6\3\2"+
		"\2\2\u00c6\u00ad\3\2\2\2\u00c6\u00b6\3\2\2\2\u00c6\u00bc\3\2\2\2\u00c6"+
		"\u00bd\3\2\2\2\u00c7\25\3\2\2\2\u00c8\u00cb\5.\30\2\u00c9\u00cb\5\30\r"+
		"\2\u00ca\u00c8\3\2\2\2\u00ca\u00c9\3\2\2\2\u00cb\27\3\2\2\2\u00cc\u00d8"+
		"\7?\2\2\u00cd\u00ce\7<\2\2\u00ce\u00d8\7\64\2\2\u00cf\u00d8\7\64\2\2\u00d0"+
		"\u00d8\7;\2\2\u00d1\u00d8\78\2\2\u00d2\u00d3\7\26\2\2\u00d3\u00d4\5\2"+
		"\2\2\u00d4\u00d5\5\6\4\2\u00d5\u00d8\3\2\2\2\u00d6\u00d8\7:\2\2\u00d7"+
		"\u00cc\3\2\2\2\u00d7\u00cd\3\2\2\2\u00d7\u00cf\3\2\2\2\u00d7\u00d0\3\2"+
		"\2\2\u00d7\u00d1\3\2\2\2\u00d7\u00d2\3\2\2\2\u00d7\u00d6\3\2\2\2\u00d8"+
		"\31\3\2\2\2\u00d9\u00dd\7(\2\2\u00da\u00dc\5\16\b\2\u00db\u00da\3\2\2"+
		"\2\u00dc\u00df\3\2\2\2\u00dd\u00db\3\2\2\2\u00dd\u00de\3\2\2\2\u00de\u00e0"+
		"\3\2\2\2\u00df\u00dd\3\2\2\2\u00e0\u00e1\7)\2\2\u00e1\33\3\2\2\2\u00e2"+
		"\u00e3\7$\2\2\u00e3\u00e4\5\60\31\2\u00e4\u00e5\7%\2\2\u00e5\35\3\2\2"+
		"\2\u00e6\u00f0\7\62\2\2\u00e7\u00f0\7=\2\2\u00e8\u00ec\5\62\32\2\u00e9"+
		"\u00eb\5 \21\2\u00ea\u00e9\3\2\2\2\u00eb\u00ee\3\2\2\2\u00ec\u00ea\3\2"+
		"\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00f0\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ef"+
		"\u00e6\3\2\2\2\u00ef\u00e7\3\2\2\2\u00ef\u00e8\3\2\2\2\u00f0\37\3\2\2"+
		"\2\u00f1\u00f9\7\62\2\2\u00f2\u00f9\7=\2\2\u00f3\u00f9\5\62\32\2\u00f4"+
		"\u00f5\7&\2\2\u00f5\u00f6\5\36\20\2\u00f6\u00f7\7\'\2\2\u00f7\u00f9\3"+
		"\2\2\2\u00f8\u00f1\3\2\2\2\u00f8\u00f2\3\2\2\2\u00f8\u00f3\3\2\2\2\u00f8"+
		"\u00f4\3\2\2\2\u00f9!\3\2\2\2\u00fa\u00fb\7#\2\2\u00fb\u00fc\5\36\20\2"+
		"\u00fc\u00fd\7+\2\2\u00fd\u00fe\5\22\n\2\u00fe#\3\2\2\2\u00ff\u0100\5"+
		".\30\2\u0100\u0101\7!\2\2\u0101\u0102\5\30\r\2\u0102\u0108\3\2\2\2\u0103"+
		"\u0104\5.\30\2\u0104\u0105\7!\2\2\u0105\u0106\5.\30\2\u0106\u0108\3\2"+
		"\2\2\u0107\u00ff\3\2\2\2\u0107\u0103\3\2\2\2\u0108%\3\2\2\2\u0109\u010b"+
		"\5\60\31\2\u010a\u0109\3\2\2\2\u010b\u010c\3\2\2\2\u010c\u010a\3\2\2\2"+
		"\u010c\u010d\3\2\2\2\u010d\u0111\3\2\2\2\u010e\u010f\7&\2\2\u010f\u0111"+
		"\7\'\2\2\u0110\u010a\3\2\2\2\u0110\u010e\3\2\2\2\u0111\'\3\2\2\2\u0112"+
		"\u0113\5\22\n\2\u0113\u0114\7\2\2\3\u0114)\3\2\2\2\u0115\u0116\5\f\7\2"+
		"\u0116\u0117\7\2\2\3\u0117+\3\2\2\2\u0118\u0119\7=\2\2\u0119-\3\2\2\2"+
		"\u011a\u0120\7=\2\2\u011b\u0120\7>\2\2\u011c\u011d\7?\2\2\u011d\u011e"+
		"\7\"\2\2\u011e\u0120\7=\2\2\u011f\u011a\3\2\2\2\u011f\u011b\3\2\2\2\u011f"+
		"\u011c\3\2\2\2\u0120/\3\2\2\2\u0121\u0127\7=\2\2\u0122\u0127\7>\2\2\u0123"+
		"\u0124\7?\2\2\u0124\u0125\7\"\2\2\u0125\u0127\7=\2\2\u0126\u0121\3\2\2"+
		"\2\u0126\u0122\3\2\2\2\u0126\u0123\3\2\2\2\u0127\61\3\2\2\2\u0128\u0130"+
		"\7?\2\2\u0129\u012a\7?\2\2\u012a\u012b\7\"\2\2\u012b\u0130\7?\2\2\u012c"+
		"\u012d\7;\2\2\u012d\u012e\7\"\2\2\u012e\u0130\7?\2\2\u012f\u0128\3\2\2"+
		"\2\u012f\u0129\3\2\2\2\u012f\u012c\3\2\2\2\u0130\63\3\2\2\2\34>ITZ]jo"+
		"v\u0088\u008f\u009d\u00ba\u00c2\u00c6\u00ca\u00d7\u00dd\u00ec\u00ef\u00f8"+
		"\u0107\u010c\u0110\u011f\u0126\u012f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}