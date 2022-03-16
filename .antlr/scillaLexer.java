// Generated from /Users/ulysseskee/Documents/NUS/CS4215/project/scilla_parse/scilla.g4 by ANTLR 4.8
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
		BOOLEAN=54, OPTION=55, HEX=56, INTTY=57, BYSTR=58, BNUM=59, MESSAGE=60, 
		EVENT_TY=61, WS=62, TOSKIP=63, ID=64, SPID=65, CID=66, TID=67;
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
			"AT", "UNDERSCORE", "BlockComment", "NUMBER", "STRING", "FLOAT", "BOOLEAN", 
			"OPTION", "HEX", "INTTY", "BYSTR", "BNUM", "MESSAGE", "EVENT_TY", "WS", 
			"TOSKIP", "ID", "SPID", "CID", "TID"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2E\u022a\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\3\2\3\2\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3"+
		"\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3"+
		"\20\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3"+
		"\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3"+
		"\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3"+
		"\30\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\34\3"+
		"\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3"+
		"\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3"+
		"#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3+\3,\3,\3,\3-"+
		"\3-\3.\3.\3/\3/\3/\3\60\3\60\3\60\3\61\3\61\3\62\3\62\3\63\3\63\3\63\3"+
		"\63\7\63\u016d\n\63\f\63\16\63\u0170\13\63\3\63\3\63\3\63\3\63\3\63\3"+
		"\64\6\64\u0178\n\64\r\64\16\64\u0179\3\65\3\65\7\65\u017e\n\65\f\65\16"+
		"\65\u0181\13\65\3\65\3\65\3\66\6\66\u0186\n\66\r\66\16\66\u0187\3\66\3"+
		"\66\7\66\u018c\n\66\f\66\16\66\u018f\13\66\3\67\3\67\3\67\3\67\3\67\3"+
		"\67\3\67\3\67\3\67\5\67\u019a\n\67\38\38\38\38\38\38\38\38\58\u01a4\n"+
		"8\39\39\39\39\79\u01aa\n9\f9\169\u01ad\139\3:\3:\3:\3:\3:\3:\3:\3:\3:"+
		"\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:"+
		"\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\3:\5:\u01df\n:\3;\3;\3;"+
		"\3;\3;\3;\3;\7;\u01e8\n;\f;\16;\u01eb\13;\3<\3<\3<\3<\3<\3=\3=\3=\3=\3"+
		"=\3=\3=\3=\3>\3>\3>\3>\3>\3>\3?\6?\u0201\n?\r?\16?\u0202\3?\3?\3@\6@\u0208"+
		"\n@\r@\16@\u0209\3@\3@\3A\3A\7A\u0210\nA\fA\16A\u0213\13A\3B\3B\7B\u0217"+
		"\nB\fB\16B\u021a\13B\3C\3C\7C\u021e\nC\fC\16C\u0221\13C\3D\3D\3D\7D\u0226"+
		"\nD\fD\16D\u0229\13D\3\u016e\2E\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23"+
		"\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31"+
		"\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60"+
		"_\61a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085"+
		"D\u0087E\3\2\16\3\2\62;\5\2\f\f\17\17$$\3\2\62\62\3\2zz\5\2\62;CHch\3"+
		"\2\"\"\4\2\13\f\17\17\4\2aac|\6\2\62;C\\aac|\3\2aa\3\2C\\\3\2))\2\u023f"+
		"\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2"+
		"\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2"+
		"\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2"+
		"\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2"+
		"\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3"+
		"\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2"+
		"\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2"+
		"U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3"+
		"\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2"+
		"\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2"+
		"{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085"+
		"\3\2\2\2\2\u0087\3\2\2\2\3\u0089\3\2\2\2\5\u008b\3\2\2\2\7\u0092\3\2\2"+
		"\2\t\u009a\3\2\2\2\13\u00a2\3\2\2\2\r\u00a9\3\2\2\2\17\u00ad\3\2\2\2\21"+
		"\u00b0\3\2\2\2\23\u00b6\3\2\2\2\25\u00bb\3\2\2\2\27\u00bf\3\2\2\2\31\u00c3"+
		"\3\2\2\2\33\u00c8\3\2\2\2\35\u00d1\3\2\2\2\37\u00dc\3\2\2\2!\u00e1\3\2"+
		"\2\2#\u00e7\3\2\2\2%\u00ed\3\2\2\2\'\u00f4\3\2\2\2)\u00fb\3\2\2\2+\u0102"+
		"\3\2\2\2-\u0106\3\2\2\2/\u010a\3\2\2\2\61\u0119\3\2\2\2\63\u011e\3\2\2"+
		"\2\65\u0121\3\2\2\2\67\u0125\3\2\2\29\u012b\3\2\2\2;\u012e\3\2\2\2=\u0138"+
		"\3\2\2\2?\u013e\3\2\2\2A\u0140\3\2\2\2C\u0142\3\2\2\2E\u0144\3\2\2\2G"+
		"\u0146\3\2\2\2I\u0148\3\2\2\2K\u014a\3\2\2\2M\u014c\3\2\2\2O\u014e\3\2"+
		"\2\2Q\u0150\3\2\2\2S\u0152\3\2\2\2U\u0154\3\2\2\2W\u0157\3\2\2\2Y\u015a"+
		"\3\2\2\2[\u015c\3\2\2\2]\u015e\3\2\2\2_\u0161\3\2\2\2a\u0164\3\2\2\2c"+
		"\u0166\3\2\2\2e\u0168\3\2\2\2g\u0177\3\2\2\2i\u017b\3\2\2\2k\u0185\3\2"+
		"\2\2m\u0199\3\2\2\2o\u01a3\3\2\2\2q\u01a5\3\2\2\2s\u01de\3\2\2\2u\u01e0"+
		"\3\2\2\2w\u01ec\3\2\2\2y\u01f1\3\2\2\2{\u01f9\3\2\2\2}\u0200\3\2\2\2\177"+
		"\u0207\3\2\2\2\u0081\u020d\3\2\2\2\u0083\u0214\3\2\2\2\u0085\u021b\3\2"+
		"\2\2\u0087\u0222\3\2\2\2\u0089\u008a\7/\2\2\u008a\4\3\2\2\2\u008b\u008c"+
		"\7h\2\2\u008c\u008d\7q\2\2\u008d\u008e\7t\2\2\u008e\u008f\7c\2\2\u008f"+
		"\u0090\7n\2\2\u0090\u0091\7n\2\2\u0091\6\3\2\2\2\u0092\u0093\7d\2\2\u0093"+
		"\u0094\7w\2\2\u0094\u0095\7k\2\2\u0095\u0096\7n\2\2\u0096\u0097\7v\2\2"+
		"\u0097\u0098\7k\2\2\u0098\u0099\7p\2\2\u0099\b\3\2\2\2\u009a\u009b\7n"+
		"\2\2\u009b\u009c\7k\2\2\u009c\u009d\7d\2\2\u009d\u009e\7t\2\2\u009e\u009f"+
		"\7c\2\2\u009f\u00a0\7t\2\2\u00a0\u00a1\7{\2\2\u00a1\n\3\2\2\2\u00a2\u00a3"+
		"\7k\2\2\u00a3\u00a4\7o\2\2\u00a4\u00a5\7r\2\2\u00a5\u00a6\7q\2\2\u00a6"+
		"\u00a7\7t\2\2\u00a7\u00a8\7v\2\2\u00a8\f\3\2\2\2\u00a9\u00aa\7n\2\2\u00aa"+
		"\u00ab\7g\2\2\u00ab\u00ac\7v\2\2\u00ac\16\3\2\2\2\u00ad\u00ae\7k\2\2\u00ae"+
		"\u00af\7p\2\2\u00af\20\3\2\2\2\u00b0\u00b1\7o\2\2\u00b1\u00b2\7c\2\2\u00b2"+
		"\u00b3\7v\2\2\u00b3\u00b4\7e\2\2\u00b4\u00b5\7j\2\2\u00b5\22\3\2\2\2\u00b6"+
		"\u00b7\7y\2\2\u00b7\u00b8\7k\2\2\u00b8\u00b9\7v\2\2\u00b9\u00ba\7j\2\2"+
		"\u00ba\24\3\2\2\2\u00bb\u00bc\7g\2\2\u00bc\u00bd\7p\2\2\u00bd\u00be\7"+
		"f\2\2\u00be\26\3\2\2\2\u00bf\u00c0\7h\2\2\u00c0\u00c1\7w\2\2\u00c1\u00c2"+
		"\7p\2\2\u00c2\30\3\2\2\2\u00c3\u00c4\7v\2\2\u00c4\u00c5\7h\2\2\u00c5\u00c6"+
		"\7w\2\2\u00c6\u00c7\7p\2\2\u00c7\32\3\2\2\2\u00c8\u00c9\7e\2\2\u00c9\u00ca"+
		"\7q\2\2\u00ca\u00cb\7p\2\2\u00cb\u00cc\7v\2\2\u00cc\u00cd\7t\2\2\u00cd"+
		"\u00ce\7c\2\2\u00ce\u00cf\7e\2\2\u00cf\u00d0\7v\2\2\u00d0\34\3\2\2\2\u00d1"+
		"\u00d2\7v\2\2\u00d2\u00d3\7t\2\2\u00d3\u00d4\7c\2\2\u00d4\u00d5\7p\2\2"+
		"\u00d5\u00d6\7u\2\2\u00d6\u00d7\7k\2\2\u00d7\u00d8\7v\2\2\u00d8\u00d9"+
		"\7k\2\2\u00d9\u00da\7q\2\2\u00da\u00db\7p\2\2\u00db\36\3\2\2\2\u00dc\u00dd"+
		"\7u\2\2\u00dd\u00de\7g\2\2\u00de\u00df\7p\2\2\u00df\u00e0\7f\2\2\u00e0"+
		" \3\2\2\2\u00e1\u00e2\7g\2\2\u00e2\u00e3\7x\2\2\u00e3\u00e4\7g\2\2\u00e4"+
		"\u00e5\7p\2\2\u00e5\u00e6\7v\2\2\u00e6\"\3\2\2\2\u00e7\u00e8\7h\2\2\u00e8"+
		"\u00e9\7k\2\2\u00e9\u00ea\7g\2\2\u00ea\u00eb\7n\2\2\u00eb\u00ec\7f\2\2"+
		"\u00ec$\3\2\2\2\u00ed\u00ee\7c\2\2\u00ee\u00ef\7e\2\2\u00ef\u00f0\7e\2"+
		"\2\u00f0\u00f1\7g\2\2\u00f1\u00f2\7r\2\2\u00f2\u00f3\7v\2\2\u00f3&\3\2"+
		"\2\2\u00f4\u00f5\7g\2\2\u00f5\u00f6\7z\2\2\u00f6\u00f7\7k\2\2\u00f7\u00f8"+
		"\7u\2\2\u00f8\u00f9\7v\2\2\u00f9\u00fa\7u\2\2\u00fa(\3\2\2\2\u00fb\u00fc"+
		"\7f\2\2\u00fc\u00fd\7g\2\2\u00fd\u00fe\7n\2\2\u00fe\u00ff\7g\2\2\u00ff"+
		"\u0100\7v\2\2\u0100\u0101\7g\2\2\u0101*\3\2\2\2\u0102\u0103\7G\2\2\u0103"+
		"\u0104\7o\2\2\u0104\u0105\7r\2\2\u0105,\3\2\2\2\u0106\u0107\7O\2\2\u0107"+
		"\u0108\7c\2\2\u0108\u0109\7r\2\2\u0109.\3\2\2\2\u010a\u010b\7u\2\2\u010b"+
		"\u010c\7e\2\2\u010c\u010d\7k\2\2\u010d\u010e\7n\2\2\u010e\u010f\7n\2\2"+
		"\u010f\u0110\7c\2\2\u0110\u0111\7a\2\2\u0111\u0112\7x\2\2\u0112\u0113"+
		"\7g\2\2\u0113\u0114\7t\2\2\u0114\u0115\7u\2\2\u0115\u0116\7k\2\2\u0116"+
		"\u0117\7q\2\2\u0117\u0118\7p\2\2\u0118\60\3\2\2\2\u0119\u011a\7v\2\2\u011a"+
		"\u011b\7{\2\2\u011b\u011c\7r\2\2\u011c\u011d\7g\2\2\u011d\62\3\2\2\2\u011e"+
		"\u011f\7q\2\2\u011f\u0120\7h\2\2\u0120\64\3\2\2\2\u0121\u0122\7v\2\2\u0122"+
		"\u0123\7t\2\2\u0123\u0124\7{\2\2\u0124\66\3\2\2\2\u0125\u0126\7e\2\2\u0126"+
		"\u0127\7c\2\2\u0127\u0128\7v\2\2\u0128\u0129\7e\2\2\u0129\u012a\7j\2\2"+
		"\u012a8\3\2\2\2\u012b\u012c\7c\2\2\u012c\u012d\7u\2\2\u012d:\3\2\2\2\u012e"+
		"\u012f\7r\2\2\u012f\u0130\7t\2\2\u0130\u0131\7q\2\2\u0131\u0132\7e\2\2"+
		"\u0132\u0133\7g\2\2\u0133\u0134\7f\2\2\u0134\u0135\7w\2\2\u0135\u0136"+
		"\7t\2\2\u0136\u0137\7g\2\2\u0137<\3\2\2\2\u0138\u0139\7v\2\2\u0139\u013a"+
		"\7j\2\2\u013a\u013b\7t\2\2\u013b\u013c\7q\2\2\u013c\u013d\7y\2\2\u013d"+
		">\3\2\2\2\u013e\u013f\7=\2\2\u013f@\3\2\2\2\u0140\u0141\7<\2\2\u0141B"+
		"\3\2\2\2\u0142\u0143\7\60\2\2\u0143D\3\2\2\2\u0144\u0145\7~\2\2\u0145"+
		"F\3\2\2\2\u0146\u0147\7]\2\2\u0147H\3\2\2\2\u0148\u0149\7_\2\2\u0149J"+
		"\3\2\2\2\u014a\u014b\7*\2\2\u014bL\3\2\2\2\u014c\u014d\7+\2\2\u014dN\3"+
		"\2\2\2\u014e\u014f\7}\2\2\u014fP\3\2\2\2\u0150\u0151\7\177\2\2\u0151R"+
		"\3\2\2\2\u0152\u0153\7.\2\2\u0153T\3\2\2\2\u0154\u0155\7?\2\2\u0155\u0156"+
		"\7@\2\2\u0156V\3\2\2\2\u0157\u0158\7/\2\2\u0158\u0159\7@\2\2\u0159X\3"+
		"\2\2\2\u015a\u015b\7?\2\2\u015bZ\3\2\2\2\u015c\u015d\7(\2\2\u015d\\\3"+
		"\2\2\2\u015e\u015f\7>\2\2\u015f\u0160\7/\2\2\u0160^\3\2\2\2\u0161\u0162"+
		"\7<\2\2\u0162\u0163\7?\2\2\u0163`\3\2\2\2\u0164\u0165\7B\2\2\u0165b\3"+
		"\2\2\2\u0166\u0167\7a\2\2\u0167d\3\2\2\2\u0168\u0169\7*\2\2\u0169\u016a"+
		"\7,\2\2\u016a\u016e\3\2\2\2\u016b\u016d\13\2\2\2\u016c\u016b\3\2\2\2\u016d"+
		"\u0170\3\2\2\2\u016e\u016f\3\2\2\2\u016e\u016c\3\2\2\2\u016f\u0171\3\2"+
		"\2\2\u0170\u016e\3\2\2\2\u0171\u0172\7,\2\2\u0172\u0173\7+\2\2\u0173\u0174"+
		"\3\2\2\2\u0174\u0175\b\63\2\2\u0175f\3\2\2\2\u0176\u0178\t\2\2\2\u0177"+
		"\u0176\3\2\2\2\u0178\u0179\3\2\2\2\u0179\u0177\3\2\2\2\u0179\u017a\3\2"+
		"\2\2\u017ah\3\2\2\2\u017b\u017f\7$\2\2\u017c\u017e\n\3\2\2\u017d\u017c"+
		"\3\2\2\2\u017e\u0181\3\2\2\2\u017f\u017d\3\2\2\2\u017f\u0180\3\2\2\2\u0180"+
		"\u0182\3\2\2\2\u0181\u017f\3\2\2\2\u0182\u0183\7$\2\2\u0183j\3\2\2\2\u0184"+
		"\u0186\4\62;\2\u0185\u0184\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u0185\3\2"+
		"\2\2\u0187\u0188\3\2\2\2\u0188\u0189\3\2\2\2\u0189\u018d\7\60\2\2\u018a"+
		"\u018c\4\62;\2\u018b\u018a\3\2\2\2\u018c\u018f\3\2\2\2\u018d\u018b\3\2"+
		"\2\2\u018d\u018e\3\2\2\2\u018el\3\2\2\2\u018f\u018d\3\2\2\2\u0190\u0191"+
		"\7V\2\2\u0191\u0192\7t\2\2\u0192\u0193\7w\2\2\u0193\u019a\7g\2\2\u0194"+
		"\u0195\7H\2\2\u0195\u0196\7c\2\2\u0196\u0197\7n\2\2\u0197\u0198\7u\2\2"+
		"\u0198\u019a\7g\2\2\u0199\u0190\3\2\2\2\u0199\u0194\3\2\2\2\u019an\3\2"+
		"\2\2\u019b\u019c\7P\2\2\u019c\u019d\7q\2\2\u019d\u019e\7p\2\2\u019e\u01a4"+
		"\7g\2\2\u019f\u01a0\7U\2\2\u01a0\u01a1\7q\2\2\u01a1\u01a2\7o\2\2\u01a2"+
		"\u01a4\7g\2\2\u01a3\u019b\3\2\2\2\u01a3\u019f\3\2\2\2\u01a4p\3\2\2\2\u01a5"+
		"\u01a6\t\4\2\2\u01a6\u01ab\t\5\2\2\u01a7\u01a8\t\6\2\2\u01a8\u01aa\t\6"+
		"\2\2\u01a9\u01a7\3\2\2\2\u01aa\u01ad\3\2\2\2\u01ab\u01a9\3\2\2\2\u01ab"+
		"\u01ac\3\2\2\2\u01acr\3\2\2\2\u01ad\u01ab\3\2\2\2\u01ae\u01af\7K\2\2\u01af"+
		"\u01b0\7p\2\2\u01b0\u01b1\7v\2\2\u01b1\u01b2\7\65\2\2\u01b2\u01df\7\64"+
		"\2\2\u01b3\u01b4\7K\2\2\u01b4\u01b5\7p\2\2\u01b5\u01b6\7v\2\2\u01b6\u01b7"+
		"\78\2\2\u01b7\u01df\7\66\2\2\u01b8\u01b9\7K\2\2\u01b9\u01ba\7p\2\2\u01ba"+
		"\u01bb\7v\2\2\u01bb\u01bc\7\63\2\2\u01bc\u01bd\7\64\2\2\u01bd\u01df\7"+
		":\2\2\u01be\u01bf\7K\2\2\u01bf\u01c0\7p\2\2\u01c0\u01c1\7v\2\2\u01c1\u01c2"+
		"\7\64\2\2\u01c2\u01c3\7\67\2\2\u01c3\u01df\78\2\2\u01c4\u01c5\7W\2\2\u01c5"+
		"\u01c6\7k\2\2\u01c6\u01c7\7p\2\2\u01c7\u01c8\7v\2\2\u01c8\u01c9\7\65\2"+
		"\2\u01c9\u01df\7\64\2\2\u01ca\u01cb\7W\2\2\u01cb\u01cc\7k\2\2\u01cc\u01cd"+
		"\7p\2\2\u01cd\u01ce\7v\2\2\u01ce\u01cf\78\2\2\u01cf\u01df\7\66\2\2\u01d0"+
		"\u01d1\7W\2\2\u01d1\u01d2\7k\2\2\u01d2\u01d3\7p\2\2\u01d3\u01d4\7v\2\2"+
		"\u01d4\u01d5\7\63\2\2\u01d5\u01d6\7\64\2\2\u01d6\u01df\7:\2\2\u01d7\u01d8"+
		"\7W\2\2\u01d8\u01d9\7k\2\2\u01d9\u01da\7p\2\2\u01da\u01db\7v\2\2\u01db"+
		"\u01dc\7\64\2\2\u01dc\u01dd\7\67\2\2\u01dd\u01df\78\2\2\u01de\u01ae\3"+
		"\2\2\2\u01de\u01b3\3\2\2\2\u01de\u01b8\3\2\2\2\u01de\u01be\3\2\2\2\u01de"+
		"\u01c4\3\2\2\2\u01de\u01ca\3\2\2\2\u01de\u01d0\3\2\2\2\u01de\u01d7\3\2"+
		"\2\2\u01dft\3\2\2\2\u01e0\u01e1\7D\2\2\u01e1\u01e2\7{\2\2\u01e2\u01e3"+
		"\7U\2\2\u01e3\u01e4\7v\2\2\u01e4\u01e5\7t\2\2\u01e5\u01e9\3\2\2\2\u01e6"+
		"\u01e8\t\2\2\2\u01e7\u01e6\3\2\2\2\u01e8\u01eb\3\2\2\2\u01e9\u01e7\3\2"+
		"\2\2\u01e9\u01ea\3\2\2\2\u01eav\3\2\2\2\u01eb\u01e9\3\2\2\2\u01ec\u01ed"+
		"\7D\2\2\u01ed\u01ee\7P\2\2\u01ee\u01ef\7w\2\2\u01ef\u01f0\7o\2\2\u01f0"+
		"x\3\2\2\2\u01f1\u01f2\7O\2\2\u01f2\u01f3\7g\2\2\u01f3\u01f4\7u\2\2\u01f4"+
		"\u01f5\7u\2\2\u01f5\u01f6\7c\2\2\u01f6\u01f7\7i\2\2\u01f7\u01f8\7g\2\2"+
		"\u01f8z\3\2\2\2\u01f9\u01fa\7G\2\2\u01fa\u01fb\7x\2\2\u01fb\u01fc\7g\2"+
		"\2\u01fc\u01fd\7p\2\2\u01fd\u01fe\7v\2\2\u01fe|\3\2\2\2\u01ff\u0201\t"+
		"\7\2\2\u0200\u01ff\3\2\2\2\u0201\u0202\3\2\2\2\u0202\u0200\3\2\2\2\u0202"+
		"\u0203\3\2\2\2\u0203\u0204\3\2\2\2\u0204\u0205\b?\2\2\u0205~\3\2\2\2\u0206"+
		"\u0208\t\b\2\2\u0207\u0206\3\2\2\2\u0208\u0209\3\2\2\2\u0209\u0207\3\2"+
		"\2\2\u0209\u020a\3\2\2\2\u020a\u020b\3\2\2\2\u020b\u020c\b@\2\2\u020c"+
		"\u0080\3\2\2\2\u020d\u0211\t\t\2\2\u020e\u0210\t\n\2\2\u020f\u020e\3\2"+
		"\2\2\u0210\u0213\3\2\2\2\u0211\u020f\3\2\2\2\u0211\u0212\3\2\2\2\u0212"+
		"\u0082\3\2\2\2\u0213\u0211\3\2\2\2\u0214\u0218\t\13\2\2\u0215\u0217\t"+
		"\n\2\2\u0216\u0215\3\2\2\2\u0217\u021a\3\2\2\2\u0218\u0216\3\2\2\2\u0218"+
		"\u0219\3\2\2\2\u0219\u0084\3\2\2\2\u021a\u0218\3\2\2\2\u021b\u021f\t\f"+
		"\2\2\u021c\u021e\t\n\2\2\u021d\u021c\3\2\2\2\u021e\u0221\3\2\2\2\u021f"+
		"\u021d\3\2\2\2\u021f\u0220\3\2\2\2\u0220\u0086\3\2\2\2\u0221\u021f\3\2"+
		"\2\2\u0222\u0223\t\r\2\2\u0223\u0227\t\f\2\2\u0224\u0226\t\n\2\2\u0225"+
		"\u0224\3\2\2\2\u0226\u0229\3\2\2\2\u0227\u0225\3\2\2\2\u0227\u0228\3\2"+
		"\2\2\u0228\u0088\3\2\2\2\u0229\u0227\3\2\2\2\23\2\u016e\u0179\u017f\u0187"+
		"\u018d\u0199\u01a3\u01ab\u01de\u01e9\u0202\u0209\u0211\u0218\u021f\u0227"+
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