// Generated from /Users/tramhoang/Desktop/Y5/cs4215/scilla_parse/scilla.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class scillaParser extends Parser {
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
		AT=47, UNDERSCORE=48, NUMBER=49, INT=50, WS=51, STRING=52, FLOAT=53, BOOLEAN=54, 
		HEXDIGIT=55, HEX=56, INTTY=57, ID=58, ALPHANUM=59, SPID=60, CID=61, TID=62;
	public static final int
		RULE_t_map_key = 0, RULE_t_map_value_args = 1, RULE_t_map_value = 2, RULE_t_map_value_allow_targs = 3, 
		RULE_address_typ = 4, RULE_typ = 5, RULE_targ = 6, RULE_address_type_field = 7, 
		RULE_exp = 8, RULE_simple_exp = 9, RULE_atomic_exp = 10, RULE_lit = 11, 
		RULE_map_access = 12, RULE_pattern = 13, RULE_arg_pattern = 14, RULE_exp_pm_clause = 15, 
		RULE_msg_entry = 16, RULE_builtin_args = 17, RULE_exp_term = 18, RULE_identifier = 19, 
		RULE_sid = 20, RULE_sident = 21, RULE_scid = 22, RULE_type_annot = 23, 
		RULE_id_with_typ = 24;
	private static String[] makeRuleNames() {
		return new String[] {
			"t_map_key", "t_map_value_args", "t_map_value", "t_map_value_allow_targs", 
			"address_typ", "typ", "targ", "address_type_field", "exp", "simple_exp", 
			"atomic_exp", "lit", "map_access", "pattern", "arg_pattern", "exp_pm_clause", 
			"msg_entry", "builtin_args", "exp_term", "identifier", "sid", "sident", 
			"scid", "type_annot", "id_with_typ"
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
			"AT", "UNDERSCORE", "NUMBER", "INT", "WS", "STRING", "FLOAT", "BOOLEAN", 
			"HEXDIGIT", "HEX", "INTTY", "ID", "ALPHANUM", "SPID", "CID", "TID"
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
	public String getGrammarFileName() { return "scilla.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public scillaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class T_map_keyContext extends ParserRuleContext {
		public ScidContext kt_to_map;
		public Address_typContext kt;
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(scillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(scillaParser.RPAREN, 0); }
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
		public TerminalNode LPAREN() { return getToken(scillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(scillaParser.RPAREN, 0); }
		public T_map_value_allow_targsContext t_map_value_allow_targs() {
			return getRuleContext(T_map_value_allow_targsContext.class,0);
		}
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public TerminalNode MAP() { return getToken(scillaParser.MAP, 0); }
		public T_map_keyContext t_map_key() {
			return getRuleContext(T_map_keyContext.class,0);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
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
			setState(77);
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
			case WS:
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
				setState(69);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
				case 1:
					{
					setState(68);
					match(WS);
					}
					break;
				}
				setState(71);
				((T_map_value_argsContext)_localctx).k = t_map_key();
				setState(73);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
				case 1:
					{
					setState(72);
					match(WS);
					}
					break;
				}
				setState(75);
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
		public TerminalNode MAP() { return getToken(scillaParser.MAP, 0); }
		public TerminalNode LPAREN() { return getToken(scillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(scillaParser.RPAREN, 0); }
		public T_map_keyContext t_map_key() {
			return getRuleContext(T_map_keyContext.class,0);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
		public T_map_value_allow_targsContext t_map_value_allow_targs() {
			return getRuleContext(T_map_value_allow_targsContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
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
			setState(94);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(79);
				((T_map_valueContext)_localctx).d = scid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(80);
				match(MAP);
				setState(82);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(81);
					match(WS);
					}
					break;
				}
				setState(84);
				((T_map_valueContext)_localctx).k = t_map_key();
				setState(86);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(85);
					match(WS);
					}
					break;
				}
				setState(88);
				((T_map_valueContext)_localctx).v = t_map_value();
				setState(89);
				match(LPAREN);
				setState(90);
				((T_map_valueContext)_localctx).t = t_map_value_allow_targs();
				setState(91);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(93);
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
		public TerminalNode WS() { return getToken(scillaParser.WS, 0); }
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
			setState(106);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(96);
				((T_map_value_allow_targsContext)_localctx).d = scid();
				setState(98);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(97);
					match(WS);
					}
					break;
				}
				setState(101); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(100);
					t_map_value_args();
					}
					}
					setState(103); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MAP) | (1L << LPAREN) | (1L << WS) | (1L << HEX) | (1L << CID))) != 0) );
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(105);
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
		public TerminalNode WITH() { return getToken(scillaParser.WITH, 0); }
		public TerminalNode END() { return getToken(scillaParser.END, 0); }
		public TerminalNode CID() { return getToken(scillaParser.CID, 0); }
		public TerminalNode CONTRACT() { return getToken(scillaParser.CONTRACT, 0); }
		public List<Address_type_fieldContext> address_type_field() {
			return getRuleContexts(Address_type_fieldContext.class);
		}
		public Address_type_fieldContext address_type_field(int i) {
			return getRuleContext(Address_type_fieldContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(scillaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(scillaParser.COMMA, i);
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
			setState(124);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(108);
				((Address_typContext)_localctx).d = match(CID);
				setState(109);
				match(WITH);
				setState(110);
				match(END);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(111);
				((Address_typContext)_localctx).d = match(CID);
				setState(112);
				match(WITH);
				setState(113);
				match(CONTRACT);
				setState(114);
				((Address_typContext)_localctx).address_type_field = address_type_field();
				((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
				setState(119);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(115);
					match(COMMA);
					setState(116);
					((Address_typContext)_localctx).address_type_field = address_type_field();
					((Address_typContext)_localctx).fs.add(((Address_typContext)_localctx).address_type_field);
					}
					}
					setState(121);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(122);
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
		public TargContext targs;
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
		public TargContext targ() {
			return getRuleContext(TargContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public TerminalNode MAP() { return getToken(scillaParser.MAP, 0); }
		public T_map_keyContext t_map_key() {
			return getRuleContext(T_map_keyContext.class,0);
		}
		public T_map_valueContext t_map_value() {
			return getRuleContext(T_map_valueContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(scillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(scillaParser.RPAREN, 0); }
		public List<TypContext> typ() {
			return getRuleContexts(TypContext.class);
		}
		public TypContext typ(int i) {
			return getRuleContext(TypContext.class,i);
		}
		public Address_typContext address_typ() {
			return getRuleContext(Address_typContext.class,0);
		}
		public TerminalNode FORALL() { return getToken(scillaParser.FORALL, 0); }
		public TerminalNode PERIOD() { return getToken(scillaParser.PERIOD, 0); }
		public TerminalNode TID() { return getToken(scillaParser.TID, 0); }
		public TerminalNode TARROW() { return getToken(scillaParser.TARROW, 0); }
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
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(127);
				((TypContext)_localctx).d = scid();
				setState(129);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
				case 1:
					{
					setState(128);
					match(WS);
					}
					break;
				}
				setState(131);
				((TypContext)_localctx).targs = targ();
				}
				break;
			case 2:
				{
				setState(133);
				match(MAP);
				setState(135);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
				case 1:
					{
					setState(134);
					match(WS);
					}
					break;
				}
				setState(137);
				((TypContext)_localctx).k = t_map_key();
				setState(139);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
				case 1:
					{
					setState(138);
					match(WS);
					}
					break;
				}
				setState(141);
				((TypContext)_localctx).v = t_map_value();
				}
				break;
			case 3:
				{
				setState(143);
				match(LPAREN);
				setState(145);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(144);
					match(WS);
					}
					break;
				}
				setState(147);
				((TypContext)_localctx).t = typ(0);
				setState(148);
				match(RPAREN);
				}
				break;
			case 4:
				{
				setState(150);
				((TypContext)_localctx).t_to_map = address_typ();
				}
				break;
			case 5:
				{
				setState(151);
				match(FORALL);
				setState(153);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(152);
					match(WS);
					}
				}

				setState(155);
				((TypContext)_localctx).tv = match(TID);
				setState(156);
				match(PERIOD);
				setState(157);
				((TypContext)_localctx).t = typ(2);
				}
				break;
			case 6:
				{
				setState(158);
				((TypContext)_localctx).t_var = match(TID);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(169);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
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
					setState(161);
					if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
					setState(163);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==WS) {
						{
						setState(162);
						match(WS);
						}
					}

					setState(165);
					match(TARROW);
					setState(166);
					((TypContext)_localctx).t2 = typ(6);
					}
					} 
				}
				setState(171);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
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
		public TerminalNode LPAREN() { return getToken(scillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(scillaParser.RPAREN, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public TerminalNode TID() { return getToken(scillaParser.TID, 0); }
		public Address_typContext address_typ() {
			return getRuleContext(Address_typContext.class,0);
		}
		public TerminalNode MAP() { return getToken(scillaParser.MAP, 0); }
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
		int _la;
		try {
			setState(195);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(172);
				match(LPAREN);
				setState(174);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
				case 1:
					{
					setState(173);
					match(WS);
					}
					break;
				}
				setState(176);
				((TargContext)_localctx).t = typ(0);
				setState(178);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(177);
					match(WS);
					}
				}

				setState(180);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(182);
				((TargContext)_localctx).d = scid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(183);
				((TargContext)_localctx).t_var = match(TID);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(184);
				((TargContext)_localctx).t_to_map = address_typ();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(185);
				match(MAP);
				setState(187);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
				case 1:
					{
					setState(186);
					match(WS);
					}
					break;
				}
				setState(189);
				((TargContext)_localctx).k = t_map_key();
				setState(191);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
				case 1:
					{
					setState(190);
					match(WS);
					}
					break;
				}
				setState(193);
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
		public Id_with_typContext ft;
		public TerminalNode FIELD() { return getToken(scillaParser.FIELD, 0); }
		public Id_with_typContext id_with_typ() {
			return getRuleContext(Id_with_typContext.class,0);
		}
		public TerminalNode WS() { return getToken(scillaParser.WS, 0); }
		public Address_type_fieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_address_type_field; }
	}

	public final Address_type_fieldContext address_type_field() throws RecognitionException {
		Address_type_fieldContext _localctx = new Address_type_fieldContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_address_type_field);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(FIELD);
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(198);
				match(WS);
				}
			}

			setState(201);
			((Address_type_fieldContext)_localctx).ft = id_with_typ();
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
			setState(203);
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
		public IdentifierContext x;
		public Simple_expContext f;
		public ExpContext e;
		public Id_with_typContext iwt;
		public SidContext f_var;
		public SidentContext sident;
		public List<SidentContext> args = new ArrayList<SidentContext>();
		public Atomic_expContext a;
		public Msg_entryContext msg_entry;
		public List<Msg_entryContext> es = new ArrayList<Msg_entryContext>();
		public SidContext x_sid;
		public Exp_pm_clauseContext cs;
		public TerminalNode LET() { return getToken(scillaParser.LET, 0); }
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public TerminalNode EQ() { return getToken(scillaParser.EQ, 0); }
		public TerminalNode IN() { return getToken(scillaParser.IN, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Simple_expContext simple_exp() {
			return getRuleContext(Simple_expContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode FUN() { return getToken(scillaParser.FUN, 0); }
		public TerminalNode LPAREN() { return getToken(scillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(scillaParser.RPAREN, 0); }
		public TerminalNode ARROW() { return getToken(scillaParser.ARROW, 0); }
		public Id_with_typContext id_with_typ() {
			return getRuleContext(Id_with_typContext.class,0);
		}
		public SidContext sid() {
			return getRuleContext(SidContext.class,0);
		}
		public List<SidentContext> sident() {
			return getRuleContexts(SidentContext.class);
		}
		public SidentContext sident(int i) {
			return getRuleContext(SidentContext.class,i);
		}
		public Atomic_expContext atomic_exp() {
			return getRuleContext(Atomic_expContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(scillaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(scillaParser.RBRACE, 0); }
		public List<Msg_entryContext> msg_entry() {
			return getRuleContexts(Msg_entryContext.class);
		}
		public Msg_entryContext msg_entry(int i) {
			return getRuleContext(Msg_entryContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(scillaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(scillaParser.COMMA, i);
		}
		public TerminalNode MATCH() { return getToken(scillaParser.MATCH, 0); }
		public TerminalNode WITH() { return getToken(scillaParser.WITH, 0); }
		public TerminalNode END() { return getToken(scillaParser.END, 0); }
		public List<Exp_pm_clauseContext> exp_pm_clause() {
			return getRuleContexts(Exp_pm_clauseContext.class);
		}
		public Exp_pm_clauseContext exp_pm_clause(int i) {
			return getRuleContext(Exp_pm_clauseContext.class,i);
		}
		public Simple_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simple_exp; }
	}

	public final Simple_expContext simple_exp() throws RecognitionException {
		Simple_expContext _localctx = new Simple_expContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_simple_exp);
		int _la;
		try {
			int _alt;
			setState(272);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(205);
				match(LET);
				setState(206);
				match(WS);
				setState(207);
				((Simple_expContext)_localctx).x = identifier();
				setState(208);
				match(EQ);
				setState(210);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
				case 1:
					{
					setState(209);
					match(WS);
					}
					break;
				}
				setState(212);
				((Simple_expContext)_localctx).f = simple_exp();
				setState(213);
				match(WS);
				setState(214);
				match(IN);
				setState(215);
				match(WS);
				setState(216);
				((Simple_expContext)_localctx).e = exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(218);
				match(FUN);
				setState(220);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(219);
					match(WS);
					}
				}

				setState(222);
				match(LPAREN);
				setState(223);
				((Simple_expContext)_localctx).iwt = id_with_typ();
				setState(225);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(224);
					match(WS);
					}
				}

				setState(227);
				match(RPAREN);
				setState(229);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(228);
					match(WS);
					}
				}

				setState(231);
				match(ARROW);
				setState(232);
				((Simple_expContext)_localctx).e = exp();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(234);
				((Simple_expContext)_localctx).f_var = sid();
				setState(236);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
				case 1:
					{
					setState(235);
					match(WS);
					}
					break;
				}
				setState(239); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(238);
						((Simple_expContext)_localctx).sident = sident();
						((Simple_expContext)_localctx).args.add(((Simple_expContext)_localctx).sident);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(241); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(243);
				((Simple_expContext)_localctx).a = atomic_exp();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(244);
				match(LBRACE);
				setState(246);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
				case 1:
					{
					setState(245);
					match(WS);
					}
					break;
				}
				setState(248);
				((Simple_expContext)_localctx).msg_entry = msg_entry();
				((Simple_expContext)_localctx).es.add(((Simple_expContext)_localctx).msg_entry);
				setState(253);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(249);
					match(COMMA);
					setState(250);
					((Simple_expContext)_localctx).msg_entry = msg_entry();
					((Simple_expContext)_localctx).es.add(((Simple_expContext)_localctx).msg_entry);
					}
					}
					setState(255);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(256);
				match(RBRACE);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(258);
				match(MATCH);
				setState(260);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
				case 1:
					{
					setState(259);
					match(WS);
					}
					break;
				}
				setState(262);
				((Simple_expContext)_localctx).x_sid = sid();
				setState(263);
				match(WITH);
				setState(267);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==BAR) {
					{
					{
					setState(264);
					((Simple_expContext)_localctx).cs = exp_pm_clause();
					}
					}
					setState(269);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(270);
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
			setState(276);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(274);
				((Atomic_expContext)_localctx).i = sid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(275);
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
		public Token n;
		public Token h;
		public Token s;
		public TerminalNode CID() { return getToken(scillaParser.CID, 0); }
		public TerminalNode NUMBER() { return getToken(scillaParser.NUMBER, 0); }
		public TerminalNode HEX() { return getToken(scillaParser.HEX, 0); }
		public TerminalNode STRING() { return getToken(scillaParser.STRING, 0); }
		public LitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lit; }
	}

	public final LitContext lit() throws RecognitionException {
		LitContext _localctx = new LitContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_lit);
		try {
			setState(282);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CID:
				enterOuterAlt(_localctx, 1);
				{
				setState(278);
				((LitContext)_localctx).i = match(CID);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(279);
				((LitContext)_localctx).n = match(NUMBER);
				}
				break;
			case HEX:
				enterOuterAlt(_localctx, 3);
				{
				setState(280);
				((LitContext)_localctx).h = match(HEX);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 4);
				{
				setState(281);
				((LitContext)_localctx).s = match(STRING);
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

	public static class Map_accessContext extends ParserRuleContext {
		public SidentContext i;
		public TerminalNode LSQB() { return getToken(scillaParser.LSQB, 0); }
		public TerminalNode RSQB() { return getToken(scillaParser.RSQB, 0); }
		public SidentContext sident() {
			return getRuleContext(SidentContext.class,0);
		}
		public TerminalNode WS() { return getToken(scillaParser.WS, 0); }
		public Map_accessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_map_access; }
	}

	public final Map_accessContext map_access() throws RecognitionException {
		Map_accessContext _localctx = new Map_accessContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_map_access);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			match(LSQB);
			setState(286);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				{
				setState(285);
				match(WS);
				}
				break;
			}
			setState(288);
			((Map_accessContext)_localctx).i = sident();
			setState(289);
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
		public TerminalNode ID() { return getToken(scillaParser.ID, 0); }
		public BinderContext(PatternContext ctx) { copyFrom(ctx); }
	}
	public static class WildcardContext extends PatternContext {
		public TerminalNode UNDERSCORE() { return getToken(scillaParser.UNDERSCORE, 0); }
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
		enterRule(_localctx, 26, RULE_pattern);
		try {
			int _alt;
			setState(300);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				_localctx = new WildcardContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(291);
				match(UNDERSCORE);
				}
				break;
			case ID:
				_localctx = new BinderContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(292);
				((BinderContext)_localctx).x = match(ID);
				}
				break;
			case WS:
			case HEX:
			case CID:
				_localctx = new ConstructorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(293);
				((ConstructorContext)_localctx).c = scid();
				setState(297);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(294);
						((ConstructorContext)_localctx).ps = arg_pattern();
						}
						} 
					}
					setState(299);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
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
		public TerminalNode UNDERSCORE() { return getToken(scillaParser.UNDERSCORE, 0); }
		public TerminalNode ID() { return getToken(scillaParser.ID, 0); }
		public ScidContext scid() {
			return getRuleContext(ScidContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(scillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(scillaParser.RPAREN, 0); }
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public Arg_patternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg_pattern; }
	}

	public final Arg_patternContext arg_pattern() throws RecognitionException {
		Arg_patternContext _localctx = new Arg_patternContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_arg_pattern);
		int _la;
		try {
			setState(315);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				enterOuterAlt(_localctx, 1);
				{
				setState(302);
				match(UNDERSCORE);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(303);
				((Arg_patternContext)_localctx).x = match(ID);
				}
				break;
			case WS:
			case HEX:
			case CID:
				enterOuterAlt(_localctx, 3);
				{
				setState(304);
				((Arg_patternContext)_localctx).c = scid();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 4);
				{
				setState(305);
				match(LPAREN);
				setState(307);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
				case 1:
					{
					setState(306);
					match(WS);
					}
					break;
				}
				setState(309);
				((Arg_patternContext)_localctx).p = pattern();
				setState(311);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(310);
					match(WS);
					}
				}

				setState(313);
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
		public TerminalNode BAR() { return getToken(scillaParser.BAR, 0); }
		public TerminalNode ARROW() { return getToken(scillaParser.ARROW, 0); }
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public Exp_pm_clauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp_pm_clause; }
	}

	public final Exp_pm_clauseContext exp_pm_clause() throws RecognitionException {
		Exp_pm_clauseContext _localctx = new Exp_pm_clauseContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_exp_pm_clause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(BAR);
			setState(319);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				{
				setState(318);
				match(WS);
				}
				break;
			}
			setState(321);
			((Exp_pm_clauseContext)_localctx).p = pattern();
			setState(323);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(322);
				match(WS);
				}
			}

			setState(325);
			match(ARROW);
			setState(326);
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
		public TerminalNode COLON() { return getToken(scillaParser.COLON, 0); }
		public List<SidContext> sid() {
			return getRuleContexts(SidContext.class);
		}
		public SidContext sid(int i) {
			return getRuleContext(SidContext.class,i);
		}
		public LitContext lit() {
			return getRuleContext(LitContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public Msg_entryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_msg_entry; }
	}

	public final Msg_entryContext msg_entry() throws RecognitionException {
		Msg_entryContext _localctx = new Msg_entryContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_msg_entry);
		int _la;
		try {
			setState(348);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(328);
				((Msg_entryContext)_localctx).i = sid();
				setState(330);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(329);
					match(WS);
					}
				}

				setState(332);
				match(COLON);
				setState(334);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(333);
					match(WS);
					}
				}

				setState(336);
				((Msg_entryContext)_localctx).l = lit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(338);
				((Msg_entryContext)_localctx).i = sid();
				setState(340);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(339);
					match(WS);
					}
				}

				setState(342);
				match(COLON);
				setState(344);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
				case 1:
					{
					setState(343);
					match(WS);
					}
					break;
				}
				setState(346);
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
		public TerminalNode LPAREN() { return getToken(scillaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(scillaParser.RPAREN, 0); }
		public Builtin_argsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_builtin_args; }
	}

	public final Builtin_argsContext builtin_args() throws RecognitionException {
		Builtin_argsContext _localctx = new Builtin_argsContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_builtin_args);
		int _la;
		try {
			setState(357);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WS:
			case ID:
			case SPID:
			case CID:
				enterOuterAlt(_localctx, 1);
				{
				setState(351); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(350);
					((Builtin_argsContext)_localctx).args = sident();
					}
					}
					setState(353); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << WS) | (1L << ID) | (1L << SPID) | (1L << CID))) != 0) );
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(355);
				match(LPAREN);
				setState(356);
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
		public TerminalNode EOF() { return getToken(scillaParser.EOF, 0); }
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
		enterRule(_localctx, 36, RULE_exp_term);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(359);
			((Exp_termContext)_localctx).e = exp();
			setState(360);
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
		public TerminalNode ID() { return getToken(scillaParser.ID, 0); }
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_identifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(362);
				match(WS);
				}
			}

			setState(365);
			match(ID);
			setState(367);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(366);
				match(WS);
				}
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

	public static class SidContext extends ParserRuleContext {
		public Token name;
		public Token ns;
		public TerminalNode ID() { return getToken(scillaParser.ID, 0); }
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public TerminalNode SPID() { return getToken(scillaParser.SPID, 0); }
		public TerminalNode PERIOD() { return getToken(scillaParser.PERIOD, 0); }
		public TerminalNode CID() { return getToken(scillaParser.CID, 0); }
		public SidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sid; }
	}

	public final SidContext sid() throws RecognitionException {
		SidContext _localctx = new SidContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_sid);
		int _la;
		try {
			setState(392);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(370);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(369);
					match(WS);
					}
				}

				setState(372);
				((SidContext)_localctx).name = match(ID);
				setState(374);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
				case 1:
					{
					setState(373);
					match(WS);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(377);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(376);
					match(WS);
					}
				}

				setState(379);
				((SidContext)_localctx).name = match(SPID);
				setState(381);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
				case 1:
					{
					setState(380);
					match(WS);
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(384);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(383);
					match(WS);
					}
				}

				setState(386);
				((SidContext)_localctx).ns = match(CID);
				setState(387);
				match(PERIOD);
				setState(388);
				((SidContext)_localctx).name = match(ID);
				setState(390);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,61,_ctx) ) {
				case 1:
					{
					setState(389);
					match(WS);
					}
					break;
				}
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

	public static class SidentContext extends ParserRuleContext {
		public Token name;
		public Token ns;
		public TerminalNode ID() { return getToken(scillaParser.ID, 0); }
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public TerminalNode SPID() { return getToken(scillaParser.SPID, 0); }
		public TerminalNode PERIOD() { return getToken(scillaParser.PERIOD, 0); }
		public TerminalNode CID() { return getToken(scillaParser.CID, 0); }
		public SidentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sident; }
	}

	public final SidentContext sident() throws RecognitionException {
		SidentContext _localctx = new SidentContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_sident);
		int _la;
		try {
			int _alt;
			setState(435);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(397);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WS) {
					{
					{
					setState(394);
					match(WS);
					}
					}
					setState(399);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(400);
				((SidentContext)_localctx).name = match(ID);
				setState(404);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,64,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(401);
						match(WS);
						}
						} 
					}
					setState(406);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,64,_ctx);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(410);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WS) {
					{
					{
					setState(407);
					match(WS);
					}
					}
					setState(412);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(413);
				((SidentContext)_localctx).name = match(SPID);
				setState(417);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,66,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(414);
						match(WS);
						}
						} 
					}
					setState(419);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,66,_ctx);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(423);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WS) {
					{
					{
					setState(420);
					match(WS);
					}
					}
					setState(425);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(426);
				((SidentContext)_localctx).ns = match(CID);
				setState(427);
				match(PERIOD);
				setState(428);
				((SidentContext)_localctx).name = match(ID);
				setState(432);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(429);
						match(WS);
						}
						} 
					}
					setState(434);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
				}
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

	public static class ScidContext extends ParserRuleContext {
		public Token name;
		public Token ns;
		public List<TerminalNode> CID() { return getTokens(scillaParser.CID); }
		public TerminalNode CID(int i) {
			return getToken(scillaParser.CID, i);
		}
		public List<TerminalNode> WS() { return getTokens(scillaParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(scillaParser.WS, i);
		}
		public TerminalNode PERIOD() { return getToken(scillaParser.PERIOD, 0); }
		public TerminalNode HEX() { return getToken(scillaParser.HEX, 0); }
		public ScidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scid; }
	}

	public final ScidContext scid() throws RecognitionException {
		ScidContext _localctx = new ScidContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_scid);
		int _la;
		try {
			setState(462);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,76,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(438);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(437);
					match(WS);
					}
				}

				setState(440);
				((ScidContext)_localctx).name = match(CID);
				setState(442);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
				case 1:
					{
					setState(441);
					match(WS);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(445);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(444);
					match(WS);
					}
				}

				setState(447);
				((ScidContext)_localctx).ns = match(CID);
				setState(448);
				match(PERIOD);
				setState(449);
				((ScidContext)_localctx).name = match(CID);
				setState(451);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,73,_ctx) ) {
				case 1:
					{
					setState(450);
					match(WS);
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(454);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(453);
					match(WS);
					}
				}

				setState(456);
				((ScidContext)_localctx).ns = match(HEX);
				setState(457);
				match(PERIOD);
				setState(458);
				((ScidContext)_localctx).name = match(CID);
				setState(460);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
				case 1:
					{
					setState(459);
					match(WS);
					}
					break;
				}
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

	public static class Type_annotContext extends ParserRuleContext {
		public Token t;
		public TerminalNode COLON() { return getToken(scillaParser.COLON, 0); }
		public TerminalNode ID() { return getToken(scillaParser.ID, 0); }
		public Type_annotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_annot; }
	}

	public final Type_annotContext type_annot() throws RecognitionException {
		Type_annotContext _localctx = new Type_annotContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_type_annot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(464);
			match(COLON);
			setState(465);
			((Type_annotContext)_localctx).t = match(ID);
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
		public Token n;
		public Type_annotContext t;
		public TerminalNode ID() { return getToken(scillaParser.ID, 0); }
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
		enterRule(_localctx, 48, RULE_id_with_typ);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(467);
			((Id_with_typContext)_localctx).n = match(ID);
			setState(468);
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
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3@\u01d9\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\5\2?\n\2\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\5\3H\n\3\3\3\3\3\5\3L\n\3\3\3\3\3\5\3P\n\3\3\4\3\4"+
		"\3\4\5\4U\n\4\3\4\3\4\5\4Y\n\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4a\n\4\3\5\3"+
		"\5\5\5e\n\5\3\5\6\5h\n\5\r\5\16\5i\3\5\5\5m\n\5\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\7\6x\n\6\f\6\16\6{\13\6\3\6\3\6\5\6\177\n\6\3\7\3\7\3\7"+
		"\5\7\u0084\n\7\3\7\3\7\3\7\3\7\5\7\u008a\n\7\3\7\3\7\5\7\u008e\n\7\3\7"+
		"\3\7\3\7\3\7\5\7\u0094\n\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7\u009c\n\7\3\7\3"+
		"\7\3\7\3\7\5\7\u00a2\n\7\3\7\3\7\5\7\u00a6\n\7\3\7\3\7\7\7\u00aa\n\7\f"+
		"\7\16\7\u00ad\13\7\3\b\3\b\5\b\u00b1\n\b\3\b\3\b\5\b\u00b5\n\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\5\b\u00be\n\b\3\b\3\b\5\b\u00c2\n\b\3\b\3\b\5\b\u00c6"+
		"\n\b\3\t\3\t\5\t\u00ca\n\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\13\5"+
		"\13\u00d5\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u00df\n\13"+
		"\3\13\3\13\3\13\5\13\u00e4\n\13\3\13\3\13\5\13\u00e8\n\13\3\13\3\13\3"+
		"\13\3\13\3\13\5\13\u00ef\n\13\3\13\6\13\u00f2\n\13\r\13\16\13\u00f3\3"+
		"\13\3\13\3\13\5\13\u00f9\n\13\3\13\3\13\3\13\7\13\u00fe\n\13\f\13\16\13"+
		"\u0101\13\13\3\13\3\13\3\13\3\13\5\13\u0107\n\13\3\13\3\13\3\13\7\13\u010c"+
		"\n\13\f\13\16\13\u010f\13\13\3\13\3\13\5\13\u0113\n\13\3\f\3\f\5\f\u0117"+
		"\n\f\3\r\3\r\3\r\3\r\5\r\u011d\n\r\3\16\3\16\5\16\u0121\n\16\3\16\3\16"+
		"\3\16\3\17\3\17\3\17\3\17\7\17\u012a\n\17\f\17\16\17\u012d\13\17\5\17"+
		"\u012f\n\17\3\20\3\20\3\20\3\20\3\20\5\20\u0136\n\20\3\20\3\20\5\20\u013a"+
		"\n\20\3\20\3\20\5\20\u013e\n\20\3\21\3\21\5\21\u0142\n\21\3\21\3\21\5"+
		"\21\u0146\n\21\3\21\3\21\3\21\3\22\3\22\5\22\u014d\n\22\3\22\3\22\5\22"+
		"\u0151\n\22\3\22\3\22\3\22\3\22\5\22\u0157\n\22\3\22\3\22\5\22\u015b\n"+
		"\22\3\22\3\22\5\22\u015f\n\22\3\23\6\23\u0162\n\23\r\23\16\23\u0163\3"+
		"\23\3\23\5\23\u0168\n\23\3\24\3\24\3\24\3\25\5\25\u016e\n\25\3\25\3\25"+
		"\5\25\u0172\n\25\3\26\5\26\u0175\n\26\3\26\3\26\5\26\u0179\n\26\3\26\5"+
		"\26\u017c\n\26\3\26\3\26\5\26\u0180\n\26\3\26\5\26\u0183\n\26\3\26\3\26"+
		"\3\26\3\26\5\26\u0189\n\26\5\26\u018b\n\26\3\27\7\27\u018e\n\27\f\27\16"+
		"\27\u0191\13\27\3\27\3\27\7\27\u0195\n\27\f\27\16\27\u0198\13\27\3\27"+
		"\7\27\u019b\n\27\f\27\16\27\u019e\13\27\3\27\3\27\7\27\u01a2\n\27\f\27"+
		"\16\27\u01a5\13\27\3\27\7\27\u01a8\n\27\f\27\16\27\u01ab\13\27\3\27\3"+
		"\27\3\27\3\27\7\27\u01b1\n\27\f\27\16\27\u01b4\13\27\5\27\u01b6\n\27\3"+
		"\30\5\30\u01b9\n\30\3\30\3\30\5\30\u01bd\n\30\3\30\5\30\u01c0\n\30\3\30"+
		"\3\30\3\30\3\30\5\30\u01c6\n\30\3\30\5\30\u01c9\n\30\3\30\3\30\3\30\3"+
		"\30\5\30\u01cf\n\30\5\30\u01d1\n\30\3\31\3\31\3\31\3\32\3\32\3\32\3\32"+
		"\2\3\f\33\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\2\2\2"+
		"\u0223\2>\3\2\2\2\4O\3\2\2\2\6`\3\2\2\2\bl\3\2\2\2\n~\3\2\2\2\f\u00a1"+
		"\3\2\2\2\16\u00c5\3\2\2\2\20\u00c7\3\2\2\2\22\u00cd\3\2\2\2\24\u0112\3"+
		"\2\2\2\26\u0116\3\2\2\2\30\u011c\3\2\2\2\32\u011e\3\2\2\2\34\u012e\3\2"+
		"\2\2\36\u013d\3\2\2\2 \u013f\3\2\2\2\"\u015e\3\2\2\2$\u0167\3\2\2\2&\u0169"+
		"\3\2\2\2(\u016d\3\2\2\2*\u018a\3\2\2\2,\u01b5\3\2\2\2.\u01d0\3\2\2\2\60"+
		"\u01d2\3\2\2\2\62\u01d5\3\2\2\2\64?\5.\30\2\65\66\7&\2\2\66\67\5.\30\2"+
		"\678\7\'\2\28?\3\2\2\29:\7&\2\2:;\5\n\6\2;<\7\'\2\2<?\3\2\2\2=?\5\n\6"+
		"\2>\64\3\2\2\2>\65\3\2\2\2>9\3\2\2\2>=\3\2\2\2?\3\3\2\2\2@A\7&\2\2AB\5"+
		"\b\5\2BC\7\'\2\2CP\3\2\2\2DP\5.\30\2EG\7\27\2\2FH\7\65\2\2GF\3\2\2\2G"+
		"H\3\2\2\2HI\3\2\2\2IK\5\2\2\2JL\7\65\2\2KJ\3\2\2\2KL\3\2\2\2LM\3\2\2\2"+
		"MN\5\6\4\2NP\3\2\2\2O@\3\2\2\2OD\3\2\2\2OE\3\2\2\2P\5\3\2\2\2Qa\5.\30"+
		"\2RT\7\27\2\2SU\7\65\2\2TS\3\2\2\2TU\3\2\2\2UV\3\2\2\2VX\5\2\2\2WY\7\65"+
		"\2\2XW\3\2\2\2XY\3\2\2\2YZ\3\2\2\2Z[\5\6\4\2[\\\7&\2\2\\]\5\b\5\2]^\7"+
		"\'\2\2^a\3\2\2\2_a\5\n\6\2`Q\3\2\2\2`R\3\2\2\2`_\3\2\2\2a\7\3\2\2\2bd"+
		"\5.\30\2ce\7\65\2\2dc\3\2\2\2de\3\2\2\2eg\3\2\2\2fh\5\4\3\2gf\3\2\2\2"+
		"hi\3\2\2\2ig\3\2\2\2ij\3\2\2\2jm\3\2\2\2km\5\6\4\2lb\3\2\2\2lk\3\2\2\2"+
		"m\t\3\2\2\2no\7?\2\2op\7\n\2\2p\177\7\13\2\2qr\7?\2\2rs\7\n\2\2st\7\16"+
		"\2\2ty\5\20\t\2uv\7*\2\2vx\5\20\t\2wu\3\2\2\2x{\3\2\2\2yw\3\2\2\2yz\3"+
		"\2\2\2z|\3\2\2\2{y\3\2\2\2|}\7\13\2\2}\177\3\2\2\2~n\3\2\2\2~q\3\2\2\2"+
		"\177\13\3\2\2\2\u0080\u0081\b\7\1\2\u0081\u0083\5.\30\2\u0082\u0084\7"+
		"\65\2\2\u0083\u0082\3\2\2\2\u0083\u0084\3\2\2\2\u0084\u0085\3\2\2\2\u0085"+
		"\u0086\5\16\b\2\u0086\u00a2\3\2\2\2\u0087\u0089\7\27\2\2\u0088\u008a\7"+
		"\65\2\2\u0089\u0088\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u008b\3\2\2\2\u008b"+
		"\u008d\5\2\2\2\u008c\u008e\7\65\2\2\u008d\u008c\3\2\2\2\u008d\u008e\3"+
		"\2\2\2\u008e\u008f\3\2\2\2\u008f\u0090\5\6\4\2\u0090\u00a2\3\2\2\2\u0091"+
		"\u0093\7&\2\2\u0092\u0094\7\65\2\2\u0093\u0092\3\2\2\2\u0093\u0094\3\2"+
		"\2\2\u0094\u0095\3\2\2\2\u0095\u0096\5\f\7\2\u0096\u0097\7\'\2\2\u0097"+
		"\u00a2\3\2\2\2\u0098\u00a2\5\n\6\2\u0099\u009b\7\3\2\2\u009a\u009c\7\65"+
		"\2\2\u009b\u009a\3\2\2\2\u009b\u009c\3\2\2\2\u009c\u009d\3\2\2\2\u009d"+
		"\u009e\7@\2\2\u009e\u009f\7\"\2\2\u009f\u00a2\5\f\7\4\u00a0\u00a2\7@\2"+
		"\2\u00a1\u0080\3\2\2\2\u00a1\u0087\3\2\2\2\u00a1\u0091\3\2\2\2\u00a1\u0098"+
		"\3\2\2\2\u00a1\u0099\3\2\2\2\u00a1\u00a0\3\2\2\2\u00a2\u00ab\3\2\2\2\u00a3"+
		"\u00a5\f\7\2\2\u00a4\u00a6\7\65\2\2\u00a5\u00a4\3\2\2\2\u00a5\u00a6\3"+
		"\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a8\7,\2\2\u00a8\u00aa\5\f\7\b\u00a9"+
		"\u00a3\3\2\2\2\u00aa\u00ad\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ab\u00ac\3\2"+
		"\2\2\u00ac\r\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ae\u00b0\7&\2\2\u00af\u00b1"+
		"\7\65\2\2\u00b0\u00af\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\u00b2\3\2\2\2"+
		"\u00b2\u00b4\5\f\7\2\u00b3\u00b5\7\65\2\2\u00b4\u00b3\3\2\2\2\u00b4\u00b5"+
		"\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b7\7\'\2\2\u00b7\u00c6\3\2\2\2\u00b8"+
		"\u00c6\5.\30\2\u00b9\u00c6\7@\2\2\u00ba\u00c6\5\n\6\2\u00bb\u00bd\7\27"+
		"\2\2\u00bc\u00be\7\65\2\2\u00bd\u00bc\3\2\2\2\u00bd\u00be\3\2\2\2\u00be"+
		"\u00bf\3\2\2\2\u00bf\u00c1\5\2\2\2\u00c0\u00c2\7\65\2\2\u00c1\u00c0\3"+
		"\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c4\5\6\4\2\u00c4"+
		"\u00c6\3\2\2\2\u00c5\u00ae\3\2\2\2\u00c5\u00b8\3\2\2\2\u00c5\u00b9\3\2"+
		"\2\2\u00c5\u00ba\3\2\2\2\u00c5\u00bb\3\2\2\2\u00c6\17\3\2\2\2\u00c7\u00c9"+
		"\7\22\2\2\u00c8\u00ca\7\65\2\2\u00c9\u00c8\3\2\2\2\u00c9\u00ca\3\2\2\2"+
		"\u00ca\u00cb\3\2\2\2\u00cb\u00cc\5\62\32\2\u00cc\21\3\2\2\2\u00cd\u00ce"+
		"\5\24\13\2\u00ce\23\3\2\2\2\u00cf\u00d0\7\7\2\2\u00d0\u00d1\7\65\2\2\u00d1"+
		"\u00d2\5(\25\2\u00d2\u00d4\7-\2\2\u00d3\u00d5\7\65\2\2\u00d4\u00d3\3\2"+
		"\2\2\u00d4\u00d5\3\2\2\2\u00d5\u00d6\3\2\2\2\u00d6\u00d7\5\24\13\2\u00d7"+
		"\u00d8\7\65\2\2\u00d8\u00d9\7\b\2\2\u00d9\u00da\7\65\2\2\u00da\u00db\5"+
		"\22\n\2\u00db\u0113\3\2\2\2\u00dc\u00de\7\f\2\2\u00dd\u00df\7\65\2\2\u00de"+
		"\u00dd\3\2\2\2\u00de\u00df\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\u00e1\7&"+
		"\2\2\u00e1\u00e3\5\62\32\2\u00e2\u00e4\7\65\2\2\u00e3\u00e2\3\2\2\2\u00e3"+
		"\u00e4\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5\u00e7\7\'\2\2\u00e6\u00e8\7\65"+
		"\2\2\u00e7\u00e6\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9"+
		"\u00ea\7+\2\2\u00ea\u00eb\5\22\n\2\u00eb\u0113\3\2\2\2\u00ec\u00ee\5*"+
		"\26\2\u00ed\u00ef\7\65\2\2\u00ee\u00ed\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef"+
		"\u00f1\3\2\2\2\u00f0\u00f2\5,\27\2\u00f1\u00f0\3\2\2\2\u00f2\u00f3\3\2"+
		"\2\2\u00f3\u00f1\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4\u0113\3\2\2\2\u00f5"+
		"\u0113\5\26\f\2\u00f6\u00f8\7(\2\2\u00f7\u00f9\7\65\2\2\u00f8\u00f7\3"+
		"\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00ff\5\"\22\2\u00fb"+
		"\u00fc\7*\2\2\u00fc\u00fe\5\"\22\2\u00fd\u00fb\3\2\2\2\u00fe\u0101\3\2"+
		"\2\2\u00ff\u00fd\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\u0102\3\2\2\2\u0101"+
		"\u00ff\3\2\2\2\u0102\u0103\7)\2\2\u0103\u0113\3\2\2\2\u0104\u0106\7\t"+
		"\2\2\u0105\u0107\7\65\2\2\u0106\u0105\3\2\2\2\u0106\u0107\3\2\2\2\u0107"+
		"\u0108\3\2\2\2\u0108\u0109\5*\26\2\u0109\u010d\7\n\2\2\u010a\u010c\5 "+
		"\21\2\u010b\u010a\3\2\2\2\u010c\u010f\3\2\2\2\u010d\u010b\3\2\2\2\u010d"+
		"\u010e\3\2\2\2\u010e\u0110\3\2\2\2\u010f\u010d\3\2\2\2\u0110\u0111\7\13"+
		"\2\2\u0111\u0113\3\2\2\2\u0112\u00cf\3\2\2\2\u0112\u00dc\3\2\2\2\u0112"+
		"\u00ec\3\2\2\2\u0112\u00f5\3\2\2\2\u0112\u00f6\3\2\2\2\u0112\u0104\3\2"+
		"\2\2\u0113\25\3\2\2\2\u0114\u0117\5*\26\2\u0115\u0117\5\30\r\2\u0116\u0114"+
		"\3\2\2\2\u0116\u0115\3\2\2\2\u0117\27\3\2\2\2\u0118\u011d\7?\2\2\u0119"+
		"\u011d\7\63\2\2\u011a\u011d\7:\2\2\u011b\u011d\7\66\2\2\u011c\u0118\3"+
		"\2\2\2\u011c\u0119\3\2\2\2\u011c\u011a\3\2\2\2\u011c\u011b\3\2\2\2\u011d"+
		"\31\3\2\2\2\u011e\u0120\7$\2\2\u011f\u0121\7\65\2\2\u0120\u011f\3\2\2"+
		"\2\u0120\u0121\3\2\2\2\u0121\u0122\3\2\2\2\u0122\u0123\5,\27\2\u0123\u0124"+
		"\7%\2\2\u0124\33\3\2\2\2\u0125\u012f\7\62\2\2\u0126\u012f\7<\2\2\u0127"+
		"\u012b\5.\30\2\u0128\u012a\5\36\20\2\u0129\u0128\3\2\2\2\u012a\u012d\3"+
		"\2\2\2\u012b\u0129\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u012f\3\2\2\2\u012d"+
		"\u012b\3\2\2\2\u012e\u0125\3\2\2\2\u012e\u0126\3\2\2\2\u012e\u0127\3\2"+
		"\2\2\u012f\35\3\2\2\2\u0130\u013e\7\62\2\2\u0131\u013e\7<\2\2\u0132\u013e"+
		"\5.\30\2\u0133\u0135\7&\2\2\u0134\u0136\7\65\2\2\u0135\u0134\3\2\2\2\u0135"+
		"\u0136\3\2\2\2\u0136\u0137\3\2\2\2\u0137\u0139\5\34\17\2\u0138\u013a\7"+
		"\65\2\2\u0139\u0138\3\2\2\2\u0139\u013a\3\2\2\2\u013a\u013b\3\2\2\2\u013b"+
		"\u013c\7\'\2\2\u013c\u013e\3\2\2\2\u013d\u0130\3\2\2\2\u013d\u0131\3\2"+
		"\2\2\u013d\u0132\3\2\2\2\u013d\u0133\3\2\2\2\u013e\37\3\2\2\2\u013f\u0141"+
		"\7#\2\2\u0140\u0142\7\65\2\2\u0141\u0140\3\2\2\2\u0141\u0142\3\2\2\2\u0142"+
		"\u0143\3\2\2\2\u0143\u0145\5\34\17\2\u0144\u0146\7\65\2\2\u0145\u0144"+
		"\3\2\2\2\u0145\u0146\3\2\2\2\u0146\u0147\3\2\2\2\u0147\u0148\7+\2\2\u0148"+
		"\u0149\5\22\n\2\u0149!\3\2\2\2\u014a\u014c\5*\26\2\u014b\u014d\7\65\2"+
		"\2\u014c\u014b\3\2\2\2\u014c\u014d\3\2\2\2\u014d\u014e\3\2\2\2\u014e\u0150"+
		"\7!\2\2\u014f\u0151\7\65\2\2\u0150\u014f\3\2\2\2\u0150\u0151\3\2\2\2\u0151"+
		"\u0152\3\2\2\2\u0152\u0153\5\30\r\2\u0153\u015f\3\2\2\2\u0154\u0156\5"+
		"*\26\2\u0155\u0157\7\65\2\2\u0156\u0155\3\2\2\2\u0156\u0157\3\2\2\2\u0157"+
		"\u0158\3\2\2\2\u0158\u015a\7!\2\2\u0159\u015b\7\65\2\2\u015a\u0159\3\2"+
		"\2\2\u015a\u015b\3\2\2\2\u015b\u015c\3\2\2\2\u015c\u015d\5*\26\2\u015d"+
		"\u015f\3\2\2\2\u015e\u014a\3\2\2\2\u015e\u0154\3\2\2\2\u015f#\3\2\2\2"+
		"\u0160\u0162\5,\27\2\u0161\u0160\3\2\2\2\u0162\u0163\3\2\2\2\u0163\u0161"+
		"\3\2\2\2\u0163\u0164\3\2\2\2\u0164\u0168\3\2\2\2\u0165\u0166\7&\2\2\u0166"+
		"\u0168\7\'\2\2\u0167\u0161\3\2\2\2\u0167\u0165\3\2\2\2\u0168%\3\2\2\2"+
		"\u0169\u016a\5\22\n\2\u016a\u016b\7\2\2\3\u016b\'\3\2\2\2\u016c\u016e"+
		"\7\65\2\2\u016d\u016c\3\2\2\2\u016d\u016e\3\2\2\2\u016e\u016f\3\2\2\2"+
		"\u016f\u0171\7<\2\2\u0170\u0172\7\65\2\2\u0171\u0170\3\2\2\2\u0171\u0172"+
		"\3\2\2\2\u0172)\3\2\2\2\u0173\u0175\7\65\2\2\u0174\u0173\3\2\2\2\u0174"+
		"\u0175\3\2\2\2\u0175\u0176\3\2\2\2\u0176\u0178\7<\2\2\u0177\u0179\7\65"+
		"\2\2\u0178\u0177\3\2\2\2\u0178\u0179\3\2\2\2\u0179\u018b\3\2\2\2\u017a"+
		"\u017c\7\65\2\2\u017b\u017a\3\2\2\2\u017b\u017c\3\2\2\2\u017c\u017d\3"+
		"\2\2\2\u017d\u017f\7>\2\2\u017e\u0180\7\65\2\2\u017f\u017e\3\2\2\2\u017f"+
		"\u0180\3\2\2\2\u0180\u018b\3\2\2\2\u0181\u0183\7\65\2\2\u0182\u0181\3"+
		"\2\2\2\u0182\u0183\3\2\2\2\u0183\u0184\3\2\2\2\u0184\u0185\7?\2\2\u0185"+
		"\u0186\7\"\2\2\u0186\u0188\7<\2\2\u0187\u0189\7\65\2\2\u0188\u0187\3\2"+
		"\2\2\u0188\u0189\3\2\2\2\u0189\u018b\3\2\2\2\u018a\u0174\3\2\2\2\u018a"+
		"\u017b\3\2\2\2\u018a\u0182\3\2\2\2\u018b+\3\2\2\2\u018c\u018e\7\65\2\2"+
		"\u018d\u018c\3\2\2\2\u018e\u0191\3\2\2\2\u018f\u018d\3\2\2\2\u018f\u0190"+
		"\3\2\2\2\u0190\u0192\3\2\2\2\u0191\u018f\3\2\2\2\u0192\u0196\7<\2\2\u0193"+
		"\u0195\7\65\2\2\u0194\u0193\3\2\2\2\u0195\u0198\3\2\2\2\u0196\u0194\3"+
		"\2\2\2\u0196\u0197\3\2\2\2\u0197\u01b6\3\2\2\2\u0198\u0196\3\2\2\2\u0199"+
		"\u019b\7\65\2\2\u019a\u0199\3\2\2\2\u019b\u019e\3\2\2\2\u019c\u019a\3"+
		"\2\2\2\u019c\u019d\3\2\2\2\u019d\u019f\3\2\2\2\u019e\u019c\3\2\2\2\u019f"+
		"\u01a3\7>\2\2\u01a0\u01a2\7\65\2\2\u01a1\u01a0\3\2\2\2\u01a2\u01a5\3\2"+
		"\2\2\u01a3\u01a1\3\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01b6\3\2\2\2\u01a5"+
		"\u01a3\3\2\2\2\u01a6\u01a8\7\65\2\2\u01a7\u01a6\3\2\2\2\u01a8\u01ab\3"+
		"\2\2\2\u01a9\u01a7\3\2\2\2\u01a9\u01aa\3\2\2\2\u01aa\u01ac\3\2\2\2\u01ab"+
		"\u01a9\3\2\2\2\u01ac\u01ad\7?\2\2\u01ad\u01ae\7\"\2\2\u01ae\u01b2\7<\2"+
		"\2\u01af\u01b1\7\65\2\2\u01b0\u01af\3\2\2\2\u01b1\u01b4\3\2\2\2\u01b2"+
		"\u01b0\3\2\2\2\u01b2\u01b3\3\2\2\2\u01b3\u01b6\3\2\2\2\u01b4\u01b2\3\2"+
		"\2\2\u01b5\u018f\3\2\2\2\u01b5\u019c\3\2\2\2\u01b5\u01a9\3\2\2\2\u01b6"+
		"-\3\2\2\2\u01b7\u01b9\7\65\2\2\u01b8\u01b7\3\2\2\2\u01b8\u01b9\3\2\2\2"+
		"\u01b9\u01ba\3\2\2\2\u01ba\u01bc\7?\2\2\u01bb\u01bd\7\65\2\2\u01bc\u01bb"+
		"\3\2\2\2\u01bc\u01bd\3\2\2\2\u01bd\u01d1\3\2\2\2\u01be\u01c0\7\65\2\2"+
		"\u01bf\u01be\3\2\2\2\u01bf\u01c0\3\2\2\2\u01c0\u01c1\3\2\2\2\u01c1\u01c2"+
		"\7?\2\2\u01c2\u01c3\7\"\2\2\u01c3\u01c5\7?\2\2\u01c4\u01c6\7\65\2\2\u01c5"+
		"\u01c4\3\2\2\2\u01c5\u01c6\3\2\2\2\u01c6\u01d1\3\2\2\2\u01c7\u01c9\7\65"+
		"\2\2\u01c8\u01c7\3\2\2\2\u01c8\u01c9\3\2\2\2\u01c9\u01ca\3\2\2\2\u01ca"+
		"\u01cb\7:\2\2\u01cb\u01cc\7\"\2\2\u01cc\u01ce\7?\2\2\u01cd\u01cf\7\65"+
		"\2\2\u01ce\u01cd\3\2\2\2\u01ce\u01cf\3\2\2\2\u01cf\u01d1\3\2\2\2\u01d0"+
		"\u01b8\3\2\2\2\u01d0\u01bf\3\2\2\2\u01d0\u01c8\3\2\2\2\u01d1/\3\2\2\2"+
		"\u01d2\u01d3\7!\2\2\u01d3\u01d4\7<\2\2\u01d4\61\3\2\2\2\u01d5\u01d6\7"+
		"<\2\2\u01d6\u01d7\5\60\31\2\u01d7\63\3\2\2\2O>GKOTX`dily~\u0083\u0089"+
		"\u008d\u0093\u009b\u00a1\u00a5\u00ab\u00b0\u00b4\u00bd\u00c1\u00c5\u00c9"+
		"\u00d4\u00de\u00e3\u00e7\u00ee\u00f3\u00f8\u00ff\u0106\u010d\u0112\u0116"+
		"\u011c\u0120\u012b\u012e\u0135\u0139\u013d\u0141\u0145\u014c\u0150\u0156"+
		"\u015a\u015e\u0163\u0167\u016d\u0171\u0174\u0178\u017b\u017f\u0182\u0188"+
		"\u018a\u018f\u0196\u019c\u01a3\u01a9\u01b2\u01b5\u01b8\u01bc\u01bf\u01c5"+
		"\u01c8\u01ce\u01d0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}