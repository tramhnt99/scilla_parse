// Generated from /Users/tramhoang/Desktop/Y5/cs4215/scilla_parse/miniScilla.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class miniScillaLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"FORALL", "BUILTIN", "LIBRARY", "IMPORT", "LET", "IN", "MATCH", "WITH", 
			"END", "FUN", "TFUN", "CONTRACT", "TRANSITION", "SEND", "EVENT", "FIELD", 
			"ACCEPT", "EXISTS", "DELETE", "EMP", "MAP", "SCILLA_VERSION", "TYPE", 
			"OF", "TRY", "CATCH", "AS", "PROCEDURE", "THROW", "SEMICOLON", "COLON", 
			"PERIOD", "BAR", "LSQB", "RSQB", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
			"COMMA", "ARROW", "TARROW", "EQ", "AND", "FETCH", "ASSIGN", "AT", "UNDERSCORE", 
			"BlockComment", "NUMBER", "INT", "WS", "TOSKIP", "STRING", "FLOAT", "BOOLEAN", 
			"HEX", "INTTY", "ID", "SPID", "CID", "TID"
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


	public miniScillaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "miniScilla.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2@\u01fa\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6"+
		"\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3"+
		"\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25"+
		"\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\32"+
		"\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36"+
		"\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3"+
		")\3)\3*\3*\3*\3+\3+\3+\3,\3,\3-\3-\3.\3.\3.\3/\3/\3/\3\60\3\60\3\61\3"+
		"\61\3\62\3\62\3\62\3\62\7\62\u0161\n\62\f\62\16\62\u0164\13\62\3\62\3"+
		"\62\3\62\3\62\3\62\3\63\6\63\u016c\n\63\r\63\16\63\u016d\3\64\5\64\u0171"+
		"\n\64\3\64\3\64\3\65\6\65\u0176\n\65\r\65\16\65\u0177\3\65\3\65\3\66\6"+
		"\66\u017d\n\66\r\66\16\66\u017e\3\66\3\66\3\67\3\67\7\67\u0185\n\67\f"+
		"\67\16\67\u0188\13\67\3\67\3\67\38\68\u018d\n8\r8\168\u018e\38\38\78\u0193"+
		"\n8\f8\168\u0196\138\39\39\39\39\39\39\39\39\39\59\u01a1\n9\3:\3:\3:\3"+
		":\7:\u01a7\n:\f:\16:\u01aa\13:\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;"+
		"\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;"+
		"\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\5;\u01dc\n;\3<\3<\7<\u01e0\n<\f<"+
		"\16<\u01e3\13<\3=\3=\7=\u01e7\n=\f=\16=\u01ea\13=\3>\3>\7>\u01ee\n>\f"+
		">\16>\u01f1\13>\3?\3?\3?\7?\u01f6\n?\f?\16?\u01f9\13?\3\u0162\2@\3\3\5"+
		"\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21"+
		"!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!"+
		"A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9q:s"+
		";u<w=y>{?}@\3\2\17\3\2\62;\3\2//\3\2\"\"\4\2\13\f\17\17\5\2\f\f\17\17"+
		"$$\3\2\62\62\3\2zz\5\2\62;CHch\4\2aac|\6\2\62;C\\aac|\3\2aa\3\2C\\\3\2"+
		"))\2\u020e\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2"+
		"\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2"+
		"\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2"+
		"\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2"+
		"\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S"+
		"\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2"+
		"\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2"+
		"\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y"+
		"\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\3\177\3\2\2\2\5\u0086\3\2\2\2\7\u008e\3"+
		"\2\2\2\t\u0096\3\2\2\2\13\u009d\3\2\2\2\r\u00a1\3\2\2\2\17\u00a4\3\2\2"+
		"\2\21\u00aa\3\2\2\2\23\u00af\3\2\2\2\25\u00b3\3\2\2\2\27\u00b7\3\2\2\2"+
		"\31\u00bc\3\2\2\2\33\u00c5\3\2\2\2\35\u00d0\3\2\2\2\37\u00d5\3\2\2\2!"+
		"\u00db\3\2\2\2#\u00e1\3\2\2\2%\u00e8\3\2\2\2\'\u00ef\3\2\2\2)\u00f6\3"+
		"\2\2\2+\u00fa\3\2\2\2-\u00fe\3\2\2\2/\u010d\3\2\2\2\61\u0112\3\2\2\2\63"+
		"\u0115\3\2\2\2\65\u0119\3\2\2\2\67\u011f\3\2\2\29\u0122\3\2\2\2;\u012c"+
		"\3\2\2\2=\u0132\3\2\2\2?\u0134\3\2\2\2A\u0136\3\2\2\2C\u0138\3\2\2\2E"+
		"\u013a\3\2\2\2G\u013c\3\2\2\2I\u013e\3\2\2\2K\u0140\3\2\2\2M\u0142\3\2"+
		"\2\2O\u0144\3\2\2\2Q\u0146\3\2\2\2S\u0148\3\2\2\2U\u014b\3\2\2\2W\u014e"+
		"\3\2\2\2Y\u0150\3\2\2\2[\u0152\3\2\2\2]\u0155\3\2\2\2_\u0158\3\2\2\2a"+
		"\u015a\3\2\2\2c\u015c\3\2\2\2e\u016b\3\2\2\2g\u0170\3\2\2\2i\u0175\3\2"+
		"\2\2k\u017c\3\2\2\2m\u0182\3\2\2\2o\u018c\3\2\2\2q\u01a0\3\2\2\2s\u01a2"+
		"\3\2\2\2u\u01db\3\2\2\2w\u01dd\3\2\2\2y\u01e4\3\2\2\2{\u01eb\3\2\2\2}"+
		"\u01f2\3\2\2\2\177\u0080\7h\2\2\u0080\u0081\7q\2\2\u0081\u0082\7t\2\2"+
		"\u0082\u0083\7c\2\2\u0083\u0084\7n\2\2\u0084\u0085\7n\2\2\u0085\4\3\2"+
		"\2\2\u0086\u0087\7d\2\2\u0087\u0088\7w\2\2\u0088\u0089\7k\2\2\u0089\u008a"+
		"\7n\2\2\u008a\u008b\7v\2\2\u008b\u008c\7k\2\2\u008c\u008d\7p\2\2\u008d"+
		"\6\3\2\2\2\u008e\u008f\7n\2\2\u008f\u0090\7k\2\2\u0090\u0091\7d\2\2\u0091"+
		"\u0092\7t\2\2\u0092\u0093\7c\2\2\u0093\u0094\7t\2\2\u0094\u0095\7{\2\2"+
		"\u0095\b\3\2\2\2\u0096\u0097\7k\2\2\u0097\u0098\7o\2\2\u0098\u0099\7r"+
		"\2\2\u0099\u009a\7q\2\2\u009a\u009b\7t\2\2\u009b\u009c\7v\2\2\u009c\n"+
		"\3\2\2\2\u009d\u009e\7n\2\2\u009e\u009f\7g\2\2\u009f\u00a0\7v\2\2\u00a0"+
		"\f\3\2\2\2\u00a1\u00a2\7k\2\2\u00a2\u00a3\7p\2\2\u00a3\16\3\2\2\2\u00a4"+
		"\u00a5\7o\2\2\u00a5\u00a6\7c\2\2\u00a6\u00a7\7v\2\2\u00a7\u00a8\7e\2\2"+
		"\u00a8\u00a9\7j\2\2\u00a9\20\3\2\2\2\u00aa\u00ab\7y\2\2\u00ab\u00ac\7"+
		"k\2\2\u00ac\u00ad\7v\2\2\u00ad\u00ae\7j\2\2\u00ae\22\3\2\2\2\u00af\u00b0"+
		"\7g\2\2\u00b0\u00b1\7p\2\2\u00b1\u00b2\7f\2\2\u00b2\24\3\2\2\2\u00b3\u00b4"+
		"\7h\2\2\u00b4\u00b5\7w\2\2\u00b5\u00b6\7p\2\2\u00b6\26\3\2\2\2\u00b7\u00b8"+
		"\7v\2\2\u00b8\u00b9\7h\2\2\u00b9\u00ba\7w\2\2\u00ba\u00bb\7p\2\2\u00bb"+
		"\30\3\2\2\2\u00bc\u00bd\7e\2\2\u00bd\u00be\7q\2\2\u00be\u00bf\7p\2\2\u00bf"+
		"\u00c0\7v\2\2\u00c0\u00c1\7t\2\2\u00c1\u00c2\7c\2\2\u00c2\u00c3\7e\2\2"+
		"\u00c3\u00c4\7v\2\2\u00c4\32\3\2\2\2\u00c5\u00c6\7v\2\2\u00c6\u00c7\7"+
		"t\2\2\u00c7\u00c8\7c\2\2\u00c8\u00c9\7p\2\2\u00c9\u00ca\7u\2\2\u00ca\u00cb"+
		"\7k\2\2\u00cb\u00cc\7v\2\2\u00cc\u00cd\7k\2\2\u00cd\u00ce\7q\2\2\u00ce"+
		"\u00cf\7p\2\2\u00cf\34\3\2\2\2\u00d0\u00d1\7u\2\2\u00d1\u00d2\7g\2\2\u00d2"+
		"\u00d3\7p\2\2\u00d3\u00d4\7f\2\2\u00d4\36\3\2\2\2\u00d5\u00d6\7g\2\2\u00d6"+
		"\u00d7\7x\2\2\u00d7\u00d8\7g\2\2\u00d8\u00d9\7p\2\2\u00d9\u00da\7v\2\2"+
		"\u00da \3\2\2\2\u00db\u00dc\7h\2\2\u00dc\u00dd\7k\2\2\u00dd\u00de\7g\2"+
		"\2\u00de\u00df\7n\2\2\u00df\u00e0\7f\2\2\u00e0\"\3\2\2\2\u00e1\u00e2\7"+
		"c\2\2\u00e2\u00e3\7e\2\2\u00e3\u00e4\7e\2\2\u00e4\u00e5\7g\2\2\u00e5\u00e6"+
		"\7r\2\2\u00e6\u00e7\7v\2\2\u00e7$\3\2\2\2\u00e8\u00e9\7g\2\2\u00e9\u00ea"+
		"\7z\2\2\u00ea\u00eb\7k\2\2\u00eb\u00ec\7u\2\2\u00ec\u00ed\7v\2\2\u00ed"+
		"\u00ee\7u\2\2\u00ee&\3\2\2\2\u00ef\u00f0\7f\2\2\u00f0\u00f1\7g\2\2\u00f1"+
		"\u00f2\7n\2\2\u00f2\u00f3\7g\2\2\u00f3\u00f4\7v\2\2\u00f4\u00f5\7g\2\2"+
		"\u00f5(\3\2\2\2\u00f6\u00f7\7g\2\2\u00f7\u00f8\7o\2\2\u00f8\u00f9\7r\2"+
		"\2\u00f9*\3\2\2\2\u00fa\u00fb\7o\2\2\u00fb\u00fc\7c\2\2\u00fc\u00fd\7"+
		"r\2\2\u00fd,\3\2\2\2\u00fe\u00ff\7u\2\2\u00ff\u0100\7e\2\2\u0100\u0101"+
		"\7k\2\2\u0101\u0102\7n\2\2\u0102\u0103\7n\2\2\u0103\u0104\7c\2\2\u0104"+
		"\u0105\7a\2\2\u0105\u0106\7x\2\2\u0106\u0107\7g\2\2\u0107\u0108\7t\2\2"+
		"\u0108\u0109\7u\2\2\u0109\u010a\7k\2\2\u010a\u010b\7q\2\2\u010b\u010c"+
		"\7p\2\2\u010c.\3\2\2\2\u010d\u010e\7v\2\2\u010e\u010f\7{\2\2\u010f\u0110"+
		"\7r\2\2\u0110\u0111\7g\2\2\u0111\60\3\2\2\2\u0112\u0113\7q\2\2\u0113\u0114"+
		"\7h\2\2\u0114\62\3\2\2\2\u0115\u0116\7v\2\2\u0116\u0117\7t\2\2\u0117\u0118"+
		"\7{\2\2\u0118\64\3\2\2\2\u0119\u011a\7e\2\2\u011a\u011b\7c\2\2\u011b\u011c"+
		"\7v\2\2\u011c\u011d\7e\2\2\u011d\u011e\7j\2\2\u011e\66\3\2\2\2\u011f\u0120"+
		"\7c\2\2\u0120\u0121\7u\2\2\u01218\3\2\2\2\u0122\u0123\7r\2\2\u0123\u0124"+
		"\7t\2\2\u0124\u0125\7q\2\2\u0125\u0126\7e\2\2\u0126\u0127\7g\2\2\u0127"+
		"\u0128\7f\2\2\u0128\u0129\7w\2\2\u0129\u012a\7t\2\2\u012a\u012b\7g\2\2"+
		"\u012b:\3\2\2\2\u012c\u012d\7v\2\2\u012d\u012e\7j\2\2\u012e\u012f\7t\2"+
		"\2\u012f\u0130\7q\2\2\u0130\u0131\7y\2\2\u0131<\3\2\2\2\u0132\u0133\7"+
		"=\2\2\u0133>\3\2\2\2\u0134\u0135\7<\2\2\u0135@\3\2\2\2\u0136\u0137\7\60"+
		"\2\2\u0137B\3\2\2\2\u0138\u0139\7~\2\2\u0139D\3\2\2\2\u013a\u013b\7]\2"+
		"\2\u013bF\3\2\2\2\u013c\u013d\7_\2\2\u013dH\3\2\2\2\u013e\u013f\7*\2\2"+
		"\u013fJ\3\2\2\2\u0140\u0141\7+\2\2\u0141L\3\2\2\2\u0142\u0143\7}\2\2\u0143"+
		"N\3\2\2\2\u0144\u0145\7\177\2\2\u0145P\3\2\2\2\u0146\u0147\7.\2\2\u0147"+
		"R\3\2\2\2\u0148\u0149\7?\2\2\u0149\u014a\7@\2\2\u014aT\3\2\2\2\u014b\u014c"+
		"\7/\2\2\u014c\u014d\7@\2\2\u014dV\3\2\2\2\u014e\u014f\7?\2\2\u014fX\3"+
		"\2\2\2\u0150\u0151\7(\2\2\u0151Z\3\2\2\2\u0152\u0153\7>\2\2\u0153\u0154"+
		"\7/\2\2\u0154\\\3\2\2\2\u0155\u0156\7<\2\2\u0156\u0157\7?\2\2\u0157^\3"+
		"\2\2\2\u0158\u0159\7B\2\2\u0159`\3\2\2\2\u015a\u015b\7a\2\2\u015bb\3\2"+
		"\2\2\u015c\u015d\7*\2\2\u015d\u015e\7,\2\2\u015e\u0162\3\2\2\2\u015f\u0161"+
		"\13\2\2\2\u0160\u015f\3\2\2\2\u0161\u0164\3\2\2\2\u0162\u0163\3\2\2\2"+
		"\u0162\u0160\3\2\2\2\u0163\u0165\3\2\2\2\u0164\u0162\3\2\2\2\u0165\u0166"+
		"\7,\2\2\u0166\u0167\7+\2\2\u0167\u0168\3\2\2\2\u0168\u0169\b\62\2\2\u0169"+
		"d\3\2\2\2\u016a\u016c\t\2\2\2\u016b\u016a\3\2\2\2\u016c\u016d\3\2\2\2"+
		"\u016d\u016b\3\2\2\2\u016d\u016e\3\2\2\2\u016ef\3\2\2\2\u016f\u0171\t"+
		"\3\2\2\u0170\u016f\3\2\2\2\u0170\u0171\3\2\2\2\u0171\u0172\3\2\2\2\u0172"+
		"\u0173\5e\63\2\u0173h\3\2\2\2\u0174\u0176\t\4\2\2\u0175\u0174\3\2\2\2"+
		"\u0176\u0177\3\2\2\2\u0177\u0175\3\2\2\2\u0177\u0178\3\2\2\2\u0178\u0179"+
		"\3\2\2\2\u0179\u017a\b\65\2\2\u017aj\3\2\2\2\u017b\u017d\t\5\2\2\u017c"+
		"\u017b\3\2\2\2\u017d\u017e\3\2\2\2\u017e\u017c\3\2\2\2\u017e\u017f\3\2"+
		"\2\2\u017f\u0180\3\2\2\2\u0180\u0181\b\66\2\2\u0181l\3\2\2\2\u0182\u0186"+
		"\7$\2\2\u0183\u0185\n\6\2\2\u0184\u0183\3\2\2\2\u0185\u0188\3\2\2\2\u0186"+
		"\u0184\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u0189\3\2\2\2\u0188\u0186\3\2"+
		"\2\2\u0189\u018a\7$\2\2\u018an\3\2\2\2\u018b\u018d\4\62;\2\u018c\u018b"+
		"\3\2\2\2\u018d\u018e\3\2\2\2\u018e\u018c\3\2\2\2\u018e\u018f\3\2\2\2\u018f"+
		"\u0190\3\2\2\2\u0190\u0194\7\60\2\2\u0191\u0193\4\62;\2\u0192\u0191\3"+
		"\2\2\2\u0193\u0196\3\2\2\2\u0194\u0192\3\2\2\2\u0194\u0195\3\2\2\2\u0195"+
		"p\3\2\2\2\u0196\u0194\3\2\2\2\u0197\u0198\7V\2\2\u0198\u0199\7t\2\2\u0199"+
		"\u019a\7w\2\2\u019a\u01a1\7g\2\2\u019b\u019c\7H\2\2\u019c\u019d\7c\2\2"+
		"\u019d\u019e\7n\2\2\u019e\u019f\7u\2\2\u019f\u01a1\7g\2\2\u01a0\u0197"+
		"\3\2\2\2\u01a0\u019b\3\2\2\2\u01a1r\3\2\2\2\u01a2\u01a3\t\7\2\2\u01a3"+
		"\u01a8\t\b\2\2\u01a4\u01a5\t\t\2\2\u01a5\u01a7\t\t\2\2\u01a6\u01a4\3\2"+
		"\2\2\u01a7\u01aa\3\2\2\2\u01a8\u01a6\3\2\2\2\u01a8\u01a9\3\2\2\2\u01a9"+
		"t\3\2\2\2\u01aa\u01a8\3\2\2\2\u01ab\u01ac\7K\2\2\u01ac\u01ad\7p\2\2\u01ad"+
		"\u01ae\7v\2\2\u01ae\u01af\7\65\2\2\u01af\u01dc\7\64\2\2\u01b0\u01b1\7"+
		"K\2\2\u01b1\u01b2\7p\2\2\u01b2\u01b3\7v\2\2\u01b3\u01b4\78\2\2\u01b4\u01dc"+
		"\7\66\2\2\u01b5\u01b6\7K\2\2\u01b6\u01b7\7p\2\2\u01b7\u01b8\7v\2\2\u01b8"+
		"\u01b9\7\63\2\2\u01b9\u01ba\7\64\2\2\u01ba\u01dc\7:\2\2\u01bb\u01bc\7"+
		"K\2\2\u01bc\u01bd\7p\2\2\u01bd\u01be\7v\2\2\u01be\u01bf\7\64\2\2\u01bf"+
		"\u01c0\7\67\2\2\u01c0\u01dc\78\2\2\u01c1\u01c2\7W\2\2\u01c2\u01c3\7k\2"+
		"\2\u01c3\u01c4\7p\2\2\u01c4\u01c5\7v\2\2\u01c5\u01c6\7\65\2\2\u01c6\u01dc"+
		"\7\64\2\2\u01c7\u01c8\7W\2\2\u01c8\u01c9\7k\2\2\u01c9\u01ca\7p\2\2\u01ca"+
		"\u01cb\7v\2\2\u01cb\u01cc\78\2\2\u01cc\u01dc\7\66\2\2\u01cd\u01ce\7W\2"+
		"\2\u01ce\u01cf\7k\2\2\u01cf\u01d0\7p\2\2\u01d0\u01d1\7v\2\2\u01d1\u01d2"+
		"\7\63\2\2\u01d2\u01d3\7\64\2\2\u01d3\u01dc\7:\2\2\u01d4\u01d5\7W\2\2\u01d5"+
		"\u01d6\7k\2\2\u01d6\u01d7\7p\2\2\u01d7\u01d8\7v\2\2\u01d8\u01d9\7\64\2"+
		"\2\u01d9\u01da\7\67\2\2\u01da\u01dc\78\2\2\u01db\u01ab\3\2\2\2\u01db\u01b0"+
		"\3\2\2\2\u01db\u01b5\3\2\2\2\u01db\u01bb\3\2\2\2\u01db\u01c1\3\2\2\2\u01db"+
		"\u01c7\3\2\2\2\u01db\u01cd\3\2\2\2\u01db\u01d4\3\2\2\2\u01dcv\3\2\2\2"+
		"\u01dd\u01e1\t\n\2\2\u01de\u01e0\t\13\2\2\u01df\u01de\3\2\2\2\u01e0\u01e3"+
		"\3\2\2\2\u01e1\u01df\3\2\2\2\u01e1\u01e2\3\2\2\2\u01e2x\3\2\2\2\u01e3"+
		"\u01e1\3\2\2\2\u01e4\u01e8\t\f\2\2\u01e5\u01e7\t\13\2\2\u01e6\u01e5\3"+
		"\2\2\2\u01e7\u01ea\3\2\2\2\u01e8\u01e6\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9"+
		"z\3\2\2\2\u01ea\u01e8\3\2\2\2\u01eb\u01ef\t\r\2\2\u01ec\u01ee\t\13\2\2"+
		"\u01ed\u01ec\3\2\2\2\u01ee\u01f1\3\2\2\2\u01ef\u01ed\3\2\2\2\u01ef\u01f0"+
		"\3\2\2\2\u01f0|\3\2\2\2\u01f1\u01ef\3\2\2\2\u01f2\u01f3\t\16\2\2\u01f3"+
		"\u01f7\t\r\2\2\u01f4\u01f6\t\13\2\2\u01f5\u01f4\3\2\2\2\u01f6\u01f9\3"+
		"\2\2\2\u01f7\u01f5\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f8~\3\2\2\2\u01f9\u01f7"+
		"\3\2\2\2\22\2\u0162\u016d\u0170\u0177\u017e\u0186\u018e\u0194\u01a0\u01a8"+
		"\u01db\u01e1\u01e8\u01ef\u01f7\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}