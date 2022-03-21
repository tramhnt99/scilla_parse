// Generated from /Users/tramhoang/Desktop/Y5/cs4215/scilla_parse/scilla.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class scillaLexer extends Lexer {
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
		HEX=54, BYSTR=55, EVENT_TY=56, WS=57, TOSKIP=58, ID=59, SPID=60, CID=61, 
		TID=62;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "FORALL", "BUILTIN", "LIBRARY", "IMPORT", "LET", "IN", "MATCH", 
			"WITH", "END", "FUN", "TFUN", "CONTRACT", "TRANSITION", "SEND", "EVENT", 
			"FIELD", "ACCEPT", "EXISTS", "DELETE", "EMP", "MAP", "SCILLA_VERSION", 
			"TYPE", "OF", "TRY", "CATCH", "AS", "PROCEDURE", "THROW", "SEMICOLON", 
			"COLON", "PERIOD", "BAR", "LSQB", "RSQB", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "COMMA", "ARROW", "TARROW", "EQ", "AND", "FETCH", "ASSIGN", 
			"AT", "UNDERSCORE", "BlockComment", "NUMBER", "STRING", "FLOAT", "HEX", 
			"BYSTR", "EVENT_TY", "WS", "TOSKIP", "ID", "SPID", "CID", "TID"
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
			"'Event'"
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
			"AT", "UNDERSCORE", "BlockComment", "NUMBER", "STRING", "FLOAT", "HEX", 
			"BYSTR", "EVENT_TY", "WS", "TOSKIP", "ID", "SPID", "CID", "TID"
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


	public scillaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "scilla.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2@\u01cc\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3"+
		"\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3"+
		"\21\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3"+
		"\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3"+
		"\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3"+
		"\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3"+
		"\32\3\32\3\32\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3"+
		"\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3"+
		"\37\3\37\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'"+
		"\3(\3(\3)\3)\3*\3*\3+\3+\3+\3,\3,\3,\3-\3-\3.\3.\3/\3/\3/\3\60\3\60\3"+
		"\60\3\61\3\61\3\62\3\62\3\63\3\63\3\63\3\63\7\63\u0163\n\63\f\63\16\63"+
		"\u0166\13\63\3\63\3\63\3\63\3\63\3\63\3\64\6\64\u016e\n\64\r\64\16\64"+
		"\u016f\3\65\3\65\7\65\u0174\n\65\f\65\16\65\u0177\13\65\3\65\3\65\3\66"+
		"\6\66\u017c\n\66\r\66\16\66\u017d\3\66\3\66\7\66\u0182\n\66\f\66\16\66"+
		"\u0185\13\66\3\67\3\67\3\67\3\67\7\67\u018b\n\67\f\67\16\67\u018e\13\67"+
		"\38\38\38\38\38\38\38\78\u0197\n8\f8\168\u019a\138\39\39\39\39\39\39\3"+
		":\6:\u01a3\n:\r:\16:\u01a4\3:\3:\3;\6;\u01aa\n;\r;\16;\u01ab\3;\3;\3<"+
		"\3<\7<\u01b2\n<\f<\16<\u01b5\13<\3=\3=\7=\u01b9\n=\f=\16=\u01bc\13=\3"+
		">\3>\7>\u01c0\n>\f>\16>\u01c3\13>\3?\3?\3?\7?\u01c8\n?\f?\16?\u01cb\13"+
		"?\3\u0164\2@\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16"+
		"\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34"+
		"\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g"+
		"\65i\66k\67m8o9q:s;u<w=y>{?}@\3\2\16\3\2\62;\5\2\f\f\17\17$$\3\2\62\62"+
		"\3\2zz\5\2\62;CHch\3\2\"\"\4\2\13\f\17\17\4\2aac|\6\2\62;C\\aac|\3\2a"+
		"a\3\2C\\\3\2))\2\u01d8\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2"+
		"\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25"+
		"\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2"+
		"\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2"+
		"\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3"+
		"\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2"+
		"\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2"+
		"Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3"+
		"\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2"+
		"\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2"+
		"w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\3\177\3\2\2\2\5\u0081\3\2\2"+
		"\2\7\u0088\3\2\2\2\t\u0090\3\2\2\2\13\u0098\3\2\2\2\r\u009f\3\2\2\2\17"+
		"\u00a3\3\2\2\2\21\u00a6\3\2\2\2\23\u00ac\3\2\2\2\25\u00b1\3\2\2\2\27\u00b5"+
		"\3\2\2\2\31\u00b9\3\2\2\2\33\u00be\3\2\2\2\35\u00c7\3\2\2\2\37\u00d2\3"+
		"\2\2\2!\u00d7\3\2\2\2#\u00dd\3\2\2\2%\u00e3\3\2\2\2\'\u00ea\3\2\2\2)\u00f1"+
		"\3\2\2\2+\u00f8\3\2\2\2-\u00fc\3\2\2\2/\u0100\3\2\2\2\61\u010f\3\2\2\2"+
		"\63\u0114\3\2\2\2\65\u0117\3\2\2\2\67\u011b\3\2\2\29\u0121\3\2\2\2;\u0124"+
		"\3\2\2\2=\u012e\3\2\2\2?\u0134\3\2\2\2A\u0136\3\2\2\2C\u0138\3\2\2\2E"+
		"\u013a\3\2\2\2G\u013c\3\2\2\2I\u013e\3\2\2\2K\u0140\3\2\2\2M\u0142\3\2"+
		"\2\2O\u0144\3\2\2\2Q\u0146\3\2\2\2S\u0148\3\2\2\2U\u014a\3\2\2\2W\u014d"+
		"\3\2\2\2Y\u0150\3\2\2\2[\u0152\3\2\2\2]\u0154\3\2\2\2_\u0157\3\2\2\2a"+
		"\u015a\3\2\2\2c\u015c\3\2\2\2e\u015e\3\2\2\2g\u016d\3\2\2\2i\u0171\3\2"+
		"\2\2k\u017b\3\2\2\2m\u0186\3\2\2\2o\u018f\3\2\2\2q\u019b\3\2\2\2s\u01a2"+
		"\3\2\2\2u\u01a9\3\2\2\2w\u01af\3\2\2\2y\u01b6\3\2\2\2{\u01bd\3\2\2\2}"+
		"\u01c4\3\2\2\2\177\u0080\7/\2\2\u0080\4\3\2\2\2\u0081\u0082\7h\2\2\u0082"+
		"\u0083\7q\2\2\u0083\u0084\7t\2\2\u0084\u0085\7c\2\2\u0085\u0086\7n\2\2"+
		"\u0086\u0087\7n\2\2\u0087\6\3\2\2\2\u0088\u0089\7d\2\2\u0089\u008a\7w"+
		"\2\2\u008a\u008b\7k\2\2\u008b\u008c\7n\2\2\u008c\u008d\7v\2\2\u008d\u008e"+
		"\7k\2\2\u008e\u008f\7p\2\2\u008f\b\3\2\2\2\u0090\u0091\7n\2\2\u0091\u0092"+
		"\7k\2\2\u0092\u0093\7d\2\2\u0093\u0094\7t\2\2\u0094\u0095\7c\2\2\u0095"+
		"\u0096\7t\2\2\u0096\u0097\7{\2\2\u0097\n\3\2\2\2\u0098\u0099\7k\2\2\u0099"+
		"\u009a\7o\2\2\u009a\u009b\7r\2\2\u009b\u009c\7q\2\2\u009c\u009d\7t\2\2"+
		"\u009d\u009e\7v\2\2\u009e\f\3\2\2\2\u009f\u00a0\7n\2\2\u00a0\u00a1\7g"+
		"\2\2\u00a1\u00a2\7v\2\2\u00a2\16\3\2\2\2\u00a3\u00a4\7k\2\2\u00a4\u00a5"+
		"\7p\2\2\u00a5\20\3\2\2\2\u00a6\u00a7\7o\2\2\u00a7\u00a8\7c\2\2\u00a8\u00a9"+
		"\7v\2\2\u00a9\u00aa\7e\2\2\u00aa\u00ab\7j\2\2\u00ab\22\3\2\2\2\u00ac\u00ad"+
		"\7y\2\2\u00ad\u00ae\7k\2\2\u00ae\u00af\7v\2\2\u00af\u00b0\7j\2\2\u00b0"+
		"\24\3\2\2\2\u00b1\u00b2\7g\2\2\u00b2\u00b3\7p\2\2\u00b3\u00b4\7f\2\2\u00b4"+
		"\26\3\2\2\2\u00b5\u00b6\7h\2\2\u00b6\u00b7\7w\2\2\u00b7\u00b8\7p\2\2\u00b8"+
		"\30\3\2\2\2\u00b9\u00ba\7v\2\2\u00ba\u00bb\7h\2\2\u00bb\u00bc\7w\2\2\u00bc"+
		"\u00bd\7p\2\2\u00bd\32\3\2\2\2\u00be\u00bf\7e\2\2\u00bf\u00c0\7q\2\2\u00c0"+
		"\u00c1\7p\2\2\u00c1\u00c2\7v\2\2\u00c2\u00c3\7t\2\2\u00c3\u00c4\7c\2\2"+
		"\u00c4\u00c5\7e\2\2\u00c5\u00c6\7v\2\2\u00c6\34\3\2\2\2\u00c7\u00c8\7"+
		"v\2\2\u00c8\u00c9\7t\2\2\u00c9\u00ca\7c\2\2\u00ca\u00cb\7p\2\2\u00cb\u00cc"+
		"\7u\2\2\u00cc\u00cd\7k\2\2\u00cd\u00ce\7v\2\2\u00ce\u00cf\7k\2\2\u00cf"+
		"\u00d0\7q\2\2\u00d0\u00d1\7p\2\2\u00d1\36\3\2\2\2\u00d2\u00d3\7u\2\2\u00d3"+
		"\u00d4\7g\2\2\u00d4\u00d5\7p\2\2\u00d5\u00d6\7f\2\2\u00d6 \3\2\2\2\u00d7"+
		"\u00d8\7g\2\2\u00d8\u00d9\7x\2\2\u00d9\u00da\7g\2\2\u00da\u00db\7p\2\2"+
		"\u00db\u00dc\7v\2\2\u00dc\"\3\2\2\2\u00dd\u00de\7h\2\2\u00de\u00df\7k"+
		"\2\2\u00df\u00e0\7g\2\2\u00e0\u00e1\7n\2\2\u00e1\u00e2\7f\2\2\u00e2$\3"+
		"\2\2\2\u00e3\u00e4\7c\2\2\u00e4\u00e5\7e\2\2\u00e5\u00e6\7e\2\2\u00e6"+
		"\u00e7\7g\2\2\u00e7\u00e8\7r\2\2\u00e8\u00e9\7v\2\2\u00e9&\3\2\2\2\u00ea"+
		"\u00eb\7g\2\2\u00eb\u00ec\7z\2\2\u00ec\u00ed\7k\2\2\u00ed\u00ee\7u\2\2"+
		"\u00ee\u00ef\7v\2\2\u00ef\u00f0\7u\2\2\u00f0(\3\2\2\2\u00f1\u00f2\7f\2"+
		"\2\u00f2\u00f3\7g\2\2\u00f3\u00f4\7n\2\2\u00f4\u00f5\7g\2\2\u00f5\u00f6"+
		"\7v\2\2\u00f6\u00f7\7g\2\2\u00f7*\3\2\2\2\u00f8\u00f9\7G\2\2\u00f9\u00fa"+
		"\7o\2\2\u00fa\u00fb\7r\2\2\u00fb,\3\2\2\2\u00fc\u00fd\7O\2\2\u00fd\u00fe"+
		"\7c\2\2\u00fe\u00ff\7r\2\2\u00ff.\3\2\2\2\u0100\u0101\7u\2\2\u0101\u0102"+
		"\7e\2\2\u0102\u0103\7k\2\2\u0103\u0104\7n\2\2\u0104\u0105\7n\2\2\u0105"+
		"\u0106\7c\2\2\u0106\u0107\7a\2\2\u0107\u0108\7x\2\2\u0108\u0109\7g\2\2"+
		"\u0109\u010a\7t\2\2\u010a\u010b\7u\2\2\u010b\u010c\7k\2\2\u010c\u010d"+
		"\7q\2\2\u010d\u010e\7p\2\2\u010e\60\3\2\2\2\u010f\u0110\7v\2\2\u0110\u0111"+
		"\7{\2\2\u0111\u0112\7r\2\2\u0112\u0113\7g\2\2\u0113\62\3\2\2\2\u0114\u0115"+
		"\7q\2\2\u0115\u0116\7h\2\2\u0116\64\3\2\2\2\u0117\u0118\7v\2\2\u0118\u0119"+
		"\7t\2\2\u0119\u011a\7{\2\2\u011a\66\3\2\2\2\u011b\u011c\7e\2\2\u011c\u011d"+
		"\7c\2\2\u011d\u011e\7v\2\2\u011e\u011f\7e\2\2\u011f\u0120\7j\2\2\u0120"+
		"8\3\2\2\2\u0121\u0122\7c\2\2\u0122\u0123\7u\2\2\u0123:\3\2\2\2\u0124\u0125"+
		"\7r\2\2\u0125\u0126\7t\2\2\u0126\u0127\7q\2\2\u0127\u0128\7e\2\2\u0128"+
		"\u0129\7g\2\2\u0129\u012a\7f\2\2\u012a\u012b\7w\2\2\u012b\u012c\7t\2\2"+
		"\u012c\u012d\7g\2\2\u012d<\3\2\2\2\u012e\u012f\7v\2\2\u012f\u0130\7j\2"+
		"\2\u0130\u0131\7t\2\2\u0131\u0132\7q\2\2\u0132\u0133\7y\2\2\u0133>\3\2"+
		"\2\2\u0134\u0135\7=\2\2\u0135@\3\2\2\2\u0136\u0137\7<\2\2\u0137B\3\2\2"+
		"\2\u0138\u0139\7\60\2\2\u0139D\3\2\2\2\u013a\u013b\7~\2\2\u013bF\3\2\2"+
		"\2\u013c\u013d\7]\2\2\u013dH\3\2\2\2\u013e\u013f\7_\2\2\u013fJ\3\2\2\2"+
		"\u0140\u0141\7*\2\2\u0141L\3\2\2\2\u0142\u0143\7+\2\2\u0143N\3\2\2\2\u0144"+
		"\u0145\7}\2\2\u0145P\3\2\2\2\u0146\u0147\7\177\2\2\u0147R\3\2\2\2\u0148"+
		"\u0149\7.\2\2\u0149T\3\2\2\2\u014a\u014b\7?\2\2\u014b\u014c\7@\2\2\u014c"+
		"V\3\2\2\2\u014d\u014e\7/\2\2\u014e\u014f\7@\2\2\u014fX\3\2\2\2\u0150\u0151"+
		"\7?\2\2\u0151Z\3\2\2\2\u0152\u0153\7(\2\2\u0153\\\3\2\2\2\u0154\u0155"+
		"\7>\2\2\u0155\u0156\7/\2\2\u0156^\3\2\2\2\u0157\u0158\7<\2\2\u0158\u0159"+
		"\7?\2\2\u0159`\3\2\2\2\u015a\u015b\7B\2\2\u015bb\3\2\2\2\u015c\u015d\7"+
		"a\2\2\u015dd\3\2\2\2\u015e\u015f\7*\2\2\u015f\u0160\7,\2\2\u0160\u0164"+
		"\3\2\2\2\u0161\u0163\13\2\2\2\u0162\u0161\3\2\2\2\u0163\u0166\3\2\2\2"+
		"\u0164\u0165\3\2\2\2\u0164\u0162\3\2\2\2\u0165\u0167\3\2\2\2\u0166\u0164"+
		"\3\2\2\2\u0167\u0168\7,\2\2\u0168\u0169\7+\2\2\u0169\u016a\3\2\2\2\u016a"+
		"\u016b\b\63\2\2\u016bf\3\2\2\2\u016c\u016e\t\2\2\2\u016d\u016c\3\2\2\2"+
		"\u016e\u016f\3\2\2\2\u016f\u016d\3\2\2\2\u016f\u0170\3\2\2\2\u0170h\3"+
		"\2\2\2\u0171\u0175\7$\2\2\u0172\u0174\n\3\2\2\u0173\u0172\3\2\2\2\u0174"+
		"\u0177\3\2\2\2\u0175\u0173\3\2\2\2\u0175\u0176\3\2\2\2\u0176\u0178\3\2"+
		"\2\2\u0177\u0175\3\2\2\2\u0178\u0179\7$\2\2\u0179j\3\2\2\2\u017a\u017c"+
		"\4\62;\2\u017b\u017a\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u017b\3\2\2\2\u017d"+
		"\u017e\3\2\2\2\u017e\u017f\3\2\2\2\u017f\u0183\7\60\2\2\u0180\u0182\4"+
		"\62;\2\u0181\u0180\3\2\2\2\u0182\u0185\3\2\2\2\u0183\u0181\3\2\2\2\u0183"+
		"\u0184\3\2\2\2\u0184l\3\2\2\2\u0185\u0183\3\2\2\2\u0186\u0187\t\4\2\2"+
		"\u0187\u018c\t\5\2\2\u0188\u0189\t\6\2\2\u0189\u018b\t\6\2\2\u018a\u0188"+
		"\3\2\2\2\u018b\u018e\3\2\2\2\u018c\u018a\3\2\2\2\u018c\u018d\3\2\2\2\u018d"+
		"n\3\2\2\2\u018e\u018c\3\2\2\2\u018f\u0190\7D\2\2\u0190\u0191\7{\2\2\u0191"+
		"\u0192\7U\2\2\u0192\u0193\7v\2\2\u0193\u0194\7t\2\2\u0194\u0198\3\2\2"+
		"\2\u0195\u0197\t\2\2\2\u0196\u0195\3\2\2\2\u0197\u019a\3\2\2\2\u0198\u0196"+
		"\3\2\2\2\u0198\u0199\3\2\2\2\u0199p\3\2\2\2\u019a\u0198\3\2\2\2\u019b"+
		"\u019c\7G\2\2\u019c\u019d\7x\2\2\u019d\u019e\7g\2\2\u019e\u019f\7p\2\2"+
		"\u019f\u01a0\7v\2\2\u01a0r\3\2\2\2\u01a1\u01a3\t\7\2\2\u01a2\u01a1\3\2"+
		"\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a2\3\2\2\2\u01a4\u01a5\3\2\2\2\u01a5"+
		"\u01a6\3\2\2\2\u01a6\u01a7\b:\2\2\u01a7t\3\2\2\2\u01a8\u01aa\t\b\2\2\u01a9"+
		"\u01a8\3\2\2\2\u01aa\u01ab\3\2\2\2\u01ab\u01a9\3\2\2\2\u01ab\u01ac\3\2"+
		"\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01ae\b;\2\2\u01aev\3\2\2\2\u01af\u01b3"+
		"\t\t\2\2\u01b0\u01b2\t\n\2\2\u01b1\u01b0\3\2\2\2\u01b2\u01b5\3\2\2\2\u01b3"+
		"\u01b1\3\2\2\2\u01b3\u01b4\3\2\2\2\u01b4x\3\2\2\2\u01b5\u01b3\3\2\2\2"+
		"\u01b6\u01ba\t\13\2\2\u01b7\u01b9\t\n\2\2\u01b8\u01b7\3\2\2\2\u01b9\u01bc"+
		"\3\2\2\2\u01ba\u01b8\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bbz\3\2\2\2\u01bc"+
		"\u01ba\3\2\2\2\u01bd\u01c1\t\f\2\2\u01be\u01c0\t\n\2\2\u01bf\u01be\3\2"+
		"\2\2\u01c0\u01c3\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2"+
		"|\3\2\2\2\u01c3\u01c1\3\2\2\2\u01c4\u01c5\t\r\2\2\u01c5\u01c9\t\f\2\2"+
		"\u01c6\u01c8\t\n\2\2\u01c7\u01c6\3\2\2\2\u01c8\u01cb\3\2\2\2\u01c9\u01c7"+
		"\3\2\2\2\u01c9\u01ca\3\2\2\2\u01ca~\3\2\2\2\u01cb\u01c9\3\2\2\2\20\2\u0164"+
		"\u016f\u0175\u017d\u0183\u018c\u0198\u01a4\u01ab\u01b3\u01ba\u01c1\u01c9"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}