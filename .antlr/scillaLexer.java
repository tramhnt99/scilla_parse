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
		FORALL=1, BUILTIN=2, LIBRARY=3, IMPORT=4, LET=5, IN=6, MATCH=7, WITH=8, 
		END=9, FUN=10, TFUN=11, CONTRACT=12, TRANSITION=13, SEND=14, EVENT=15, 
		FIELD=16, ACCEPT=17, EXISTS=18, DELETE=19, EMP=20, MAP=21, SCILLA_VERSION=22, 
		TYPE=23, OF=24, TRY=25, CATCH=26, AS=27, PROCEDURE=28, THROW=29, SEMICOLON=30, 
		COLON=31, PERIOD=32, BAR=33, LSQB=34, RSQB=35, LPAREN=36, RPAREN=37, LBRACE=38, 
		RBRACE=39, COMMA=40, ARROW=41, TARROW=42, EQ=43, AND=44, FETCH=45, ASSIGN=46, 
		AT=47, UNDERSCORE=48, BlockComment=49, NUMBER=50, INT=51, WS=52, TOSKIP=53, 
		STRING=54, FLOAT=55, BOOLEAN=56, HEXDIGIT=57, HEX=58, INTTY=59, ALPHANUM=60, 
		ID=61, SPID=62, CID=63, TID=64;
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
			"HEXDIGIT", "HEX", "INTTY", "ALPHANUM", "ID", "SPID", "CID", "TID"
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
			"STRING", "FLOAT", "BOOLEAN", "HEXDIGIT", "HEX", "INTTY", "ALPHANUM", 
			"ID", "SPID", "CID", "TID"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2B\u0200\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3"+
		"\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3"+
		"\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3"+
		"\25\3\25\3\25\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3"+
		"\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\31\3"+
		"\31\3\31\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3"+
		"\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3"+
		"\36\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3"+
		"\'\3\'\3(\3(\3)\3)\3*\3*\3*\3+\3+\3+\3,\3,\3-\3-\3.\3.\3.\3/\3/\3/\3\60"+
		"\3\60\3\61\3\61\3\62\3\62\3\62\3\62\7\62\u0165\n\62\f\62\16\62\u0168\13"+
		"\62\3\62\3\62\3\62\3\62\3\62\3\63\6\63\u0170\n\63\r\63\16\63\u0171\3\64"+
		"\5\64\u0175\n\64\3\64\3\64\3\65\6\65\u017a\n\65\r\65\16\65\u017b\3\66"+
		"\6\66\u017f\n\66\r\66\16\66\u0180\3\66\3\66\3\67\3\67\7\67\u0187\n\67"+
		"\f\67\16\67\u018a\13\67\3\67\3\67\38\68\u018f\n8\r8\168\u0190\38\38\7"+
		"8\u0195\n8\f8\168\u0198\138\39\39\39\39\39\39\39\39\39\59\u01a3\n9\3:"+
		"\3:\3;\3;\3;\3;\3;\7;\u01ac\n;\f;\16;\u01af\13;\3<\3<\3<\3<\3<\3<\3<\3"+
		"<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3"+
		"<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\5<\u01e1\n<\3=\3"+
		"=\3>\3>\7>\u01e7\n>\f>\16>\u01ea\13>\3?\3?\7?\u01ee\n?\f?\16?\u01f1\13"+
		"?\3@\3@\7@\u01f5\n@\f@\16@\u01f8\13@\3A\3A\7A\u01fc\nA\fA\16A\u01ff\13"+
		"A\3\u0166\2B\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16"+
		"\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34"+
		"\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g"+
		"\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\3\2\17\3\2\62;\3\2//\3\2\"\""+
		"\4\2\13\f\17\17\5\2\f\f\17\17$$\5\2\62;CHch\3\2\62\62\3\2zz\6\2\62;C\\"+
		"aac|\3\2c|\3\2aa\3\2C\\\5\2\"\"C]__\2\u0214\2\3\3\2\2\2\2\5\3\2\2\2\2"+
		"\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2"+
		"\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2"+
		"\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2"+
		"\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2"+
		"\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2"+
		"\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2"+
		"M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3"+
		"\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2"+
		"\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2"+
		"s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177"+
		"\3\2\2\2\2\u0081\3\2\2\2\3\u0083\3\2\2\2\5\u008a\3\2\2\2\7\u0092\3\2\2"+
		"\2\t\u009a\3\2\2\2\13\u00a1\3\2\2\2\r\u00a5\3\2\2\2\17\u00a8\3\2\2\2\21"+
		"\u00ae\3\2\2\2\23\u00b3\3\2\2\2\25\u00b7\3\2\2\2\27\u00bb\3\2\2\2\31\u00c0"+
		"\3\2\2\2\33\u00c9\3\2\2\2\35\u00d4\3\2\2\2\37\u00d9\3\2\2\2!\u00df\3\2"+
		"\2\2#\u00e5\3\2\2\2%\u00ec\3\2\2\2\'\u00f3\3\2\2\2)\u00fa\3\2\2\2+\u00fe"+
		"\3\2\2\2-\u0102\3\2\2\2/\u0111\3\2\2\2\61\u0116\3\2\2\2\63\u0119\3\2\2"+
		"\2\65\u011d\3\2\2\2\67\u0123\3\2\2\29\u0126\3\2\2\2;\u0130\3\2\2\2=\u0136"+
		"\3\2\2\2?\u0138\3\2\2\2A\u013a\3\2\2\2C\u013c\3\2\2\2E\u013e\3\2\2\2G"+
		"\u0140\3\2\2\2I\u0142\3\2\2\2K\u0144\3\2\2\2M\u0146\3\2\2\2O\u0148\3\2"+
		"\2\2Q\u014a\3\2\2\2S\u014c\3\2\2\2U\u014f\3\2\2\2W\u0152\3\2\2\2Y\u0154"+
		"\3\2\2\2[\u0156\3\2\2\2]\u0159\3\2\2\2_\u015c\3\2\2\2a\u015e\3\2\2\2c"+
		"\u0160\3\2\2\2e\u016f\3\2\2\2g\u0174\3\2\2\2i\u0179\3\2\2\2k\u017e\3\2"+
		"\2\2m\u0184\3\2\2\2o\u018e\3\2\2\2q\u01a2\3\2\2\2s\u01a4\3\2\2\2u\u01a6"+
		"\3\2\2\2w\u01e0\3\2\2\2y\u01e2\3\2\2\2{\u01e4\3\2\2\2}\u01eb\3\2\2\2\177"+
		"\u01f2\3\2\2\2\u0081\u01f9\3\2\2\2\u0083\u0084\7h\2\2\u0084\u0085\7q\2"+
		"\2\u0085\u0086\7t\2\2\u0086\u0087\7c\2\2\u0087\u0088\7n\2\2\u0088\u0089"+
		"\7n\2\2\u0089\4\3\2\2\2\u008a\u008b\7d\2\2\u008b\u008c\7w\2\2\u008c\u008d"+
		"\7k\2\2\u008d\u008e\7n\2\2\u008e\u008f\7v\2\2\u008f\u0090\7k\2\2\u0090"+
		"\u0091\7p\2\2\u0091\6\3\2\2\2\u0092\u0093\7n\2\2\u0093\u0094\7k\2\2\u0094"+
		"\u0095\7d\2\2\u0095\u0096\7t\2\2\u0096\u0097\7c\2\2\u0097\u0098\7t\2\2"+
		"\u0098\u0099\7{\2\2\u0099\b\3\2\2\2\u009a\u009b\7k\2\2\u009b\u009c\7o"+
		"\2\2\u009c\u009d\7r\2\2\u009d\u009e\7q\2\2\u009e\u009f\7t\2\2\u009f\u00a0"+
		"\7v\2\2\u00a0\n\3\2\2\2\u00a1\u00a2\7n\2\2\u00a2\u00a3\7g\2\2\u00a3\u00a4"+
		"\7v\2\2\u00a4\f\3\2\2\2\u00a5\u00a6\7k\2\2\u00a6\u00a7\7p\2\2\u00a7\16"+
		"\3\2\2\2\u00a8\u00a9\7o\2\2\u00a9\u00aa\7c\2\2\u00aa\u00ab\7v\2\2\u00ab"+
		"\u00ac\7e\2\2\u00ac\u00ad\7j\2\2\u00ad\20\3\2\2\2\u00ae\u00af\7y\2\2\u00af"+
		"\u00b0\7k\2\2\u00b0\u00b1\7v\2\2\u00b1\u00b2\7j\2\2\u00b2\22\3\2\2\2\u00b3"+
		"\u00b4\7g\2\2\u00b4\u00b5\7p\2\2\u00b5\u00b6\7f\2\2\u00b6\24\3\2\2\2\u00b7"+
		"\u00b8\7h\2\2\u00b8\u00b9\7w\2\2\u00b9\u00ba\7p\2\2\u00ba\26\3\2\2\2\u00bb"+
		"\u00bc\7v\2\2\u00bc\u00bd\7h\2\2\u00bd\u00be\7w\2\2\u00be\u00bf\7p\2\2"+
		"\u00bf\30\3\2\2\2\u00c0\u00c1\7e\2\2\u00c1\u00c2\7q\2\2\u00c2\u00c3\7"+
		"p\2\2\u00c3\u00c4\7v\2\2\u00c4\u00c5\7t\2\2\u00c5\u00c6\7c\2\2\u00c6\u00c7"+
		"\7e\2\2\u00c7\u00c8\7v\2\2\u00c8\32\3\2\2\2\u00c9\u00ca\7v\2\2\u00ca\u00cb"+
		"\7t\2\2\u00cb\u00cc\7c\2\2\u00cc\u00cd\7p\2\2\u00cd\u00ce\7u\2\2\u00ce"+
		"\u00cf\7k\2\2\u00cf\u00d0\7v\2\2\u00d0\u00d1\7k\2\2\u00d1\u00d2\7q\2\2"+
		"\u00d2\u00d3\7p\2\2\u00d3\34\3\2\2\2\u00d4\u00d5\7u\2\2\u00d5\u00d6\7"+
		"g\2\2\u00d6\u00d7\7p\2\2\u00d7\u00d8\7f\2\2\u00d8\36\3\2\2\2\u00d9\u00da"+
		"\7g\2\2\u00da\u00db\7x\2\2\u00db\u00dc\7g\2\2\u00dc\u00dd\7p\2\2\u00dd"+
		"\u00de\7v\2\2\u00de \3\2\2\2\u00df\u00e0\7h\2\2\u00e0\u00e1\7k\2\2\u00e1"+
		"\u00e2\7g\2\2\u00e2\u00e3\7n\2\2\u00e3\u00e4\7f\2\2\u00e4\"\3\2\2\2\u00e5"+
		"\u00e6\7c\2\2\u00e6\u00e7\7e\2\2\u00e7\u00e8\7e\2\2\u00e8\u00e9\7g\2\2"+
		"\u00e9\u00ea\7r\2\2\u00ea\u00eb\7v\2\2\u00eb$\3\2\2\2\u00ec\u00ed\7g\2"+
		"\2\u00ed\u00ee\7z\2\2\u00ee\u00ef\7k\2\2\u00ef\u00f0\7u\2\2\u00f0\u00f1"+
		"\7v\2\2\u00f1\u00f2\7u\2\2\u00f2&\3\2\2\2\u00f3\u00f4\7f\2\2\u00f4\u00f5"+
		"\7g\2\2\u00f5\u00f6\7n\2\2\u00f6\u00f7\7g\2\2\u00f7\u00f8\7v\2\2\u00f8"+
		"\u00f9\7g\2\2\u00f9(\3\2\2\2\u00fa\u00fb\7g\2\2\u00fb\u00fc\7o\2\2\u00fc"+
		"\u00fd\7r\2\2\u00fd*\3\2\2\2\u00fe\u00ff\7o\2\2\u00ff\u0100\7c\2\2\u0100"+
		"\u0101\7r\2\2\u0101,\3\2\2\2\u0102\u0103\7u\2\2\u0103\u0104\7e\2\2\u0104"+
		"\u0105\7k\2\2\u0105\u0106\7n\2\2\u0106\u0107\7n\2\2\u0107\u0108\7c\2\2"+
		"\u0108\u0109\7a\2\2\u0109\u010a\7x\2\2\u010a\u010b\7g\2\2\u010b\u010c"+
		"\7t\2\2\u010c\u010d\7u\2\2\u010d\u010e\7k\2\2\u010e\u010f\7q\2\2\u010f"+
		"\u0110\7p\2\2\u0110.\3\2\2\2\u0111\u0112\7v\2\2\u0112\u0113\7{\2\2\u0113"+
		"\u0114\7r\2\2\u0114\u0115\7g\2\2\u0115\60\3\2\2\2\u0116\u0117\7q\2\2\u0117"+
		"\u0118\7h\2\2\u0118\62\3\2\2\2\u0119\u011a\7v\2\2\u011a\u011b\7t\2\2\u011b"+
		"\u011c\7{\2\2\u011c\64\3\2\2\2\u011d\u011e\7e\2\2\u011e\u011f\7c\2\2\u011f"+
		"\u0120\7v\2\2\u0120\u0121\7e\2\2\u0121\u0122\7j\2\2\u0122\66\3\2\2\2\u0123"+
		"\u0124\7c\2\2\u0124\u0125\7u\2\2\u01258\3\2\2\2\u0126\u0127\7r\2\2\u0127"+
		"\u0128\7t\2\2\u0128\u0129\7q\2\2\u0129\u012a\7e\2\2\u012a\u012b\7g\2\2"+
		"\u012b\u012c\7f\2\2\u012c\u012d\7w\2\2\u012d\u012e\7t\2\2\u012e\u012f"+
		"\7g\2\2\u012f:\3\2\2\2\u0130\u0131\7v\2\2\u0131\u0132\7j\2\2\u0132\u0133"+
		"\7t\2\2\u0133\u0134\7q\2\2\u0134\u0135\7y\2\2\u0135<\3\2\2\2\u0136\u0137"+
		"\7=\2\2\u0137>\3\2\2\2\u0138\u0139\7<\2\2\u0139@\3\2\2\2\u013a\u013b\7"+
		"\60\2\2\u013bB\3\2\2\2\u013c\u013d\7~\2\2\u013dD\3\2\2\2\u013e\u013f\7"+
		"]\2\2\u013fF\3\2\2\2\u0140\u0141\7_\2\2\u0141H\3\2\2\2\u0142\u0143\7*"+
		"\2\2\u0143J\3\2\2\2\u0144\u0145\7+\2\2\u0145L\3\2\2\2\u0146\u0147\7}\2"+
		"\2\u0147N\3\2\2\2\u0148\u0149\7\177\2\2\u0149P\3\2\2\2\u014a\u014b\7."+
		"\2\2\u014bR\3\2\2\2\u014c\u014d\7?\2\2\u014d\u014e\7@\2\2\u014eT\3\2\2"+
		"\2\u014f\u0150\7/\2\2\u0150\u0151\7@\2\2\u0151V\3\2\2\2\u0152\u0153\7"+
		"?\2\2\u0153X\3\2\2\2\u0154\u0155\7(\2\2\u0155Z\3\2\2\2\u0156\u0157\7>"+
		"\2\2\u0157\u0158\7/\2\2\u0158\\\3\2\2\2\u0159\u015a\7<\2\2\u015a\u015b"+
		"\7?\2\2\u015b^\3\2\2\2\u015c\u015d\7B\2\2\u015d`\3\2\2\2\u015e\u015f\7"+
		"a\2\2\u015fb\3\2\2\2\u0160\u0161\7*\2\2\u0161\u0162\7,\2\2\u0162\u0166"+
		"\3\2\2\2\u0163\u0165\13\2\2\2\u0164\u0163\3\2\2\2\u0165\u0168\3\2\2\2"+
		"\u0166\u0167\3\2\2\2\u0166\u0164\3\2\2\2\u0167\u0169\3\2\2\2\u0168\u0166"+
		"\3\2\2\2\u0169\u016a\7,\2\2\u016a\u016b\7+\2\2\u016b\u016c\3\2\2\2\u016c"+
		"\u016d\b\62\2\2\u016dd\3\2\2\2\u016e\u0170\t\2\2\2\u016f\u016e\3\2\2\2"+
		"\u0170\u0171\3\2\2\2\u0171\u016f\3\2\2\2\u0171\u0172\3\2\2\2\u0172f\3"+
		"\2\2\2\u0173\u0175\t\3\2\2\u0174\u0173\3\2\2\2\u0174\u0175\3\2\2\2\u0175"+
		"\u0176\3\2\2\2\u0176\u0177\5e\63\2\u0177h\3\2\2\2\u0178\u017a\t\4\2\2"+
		"\u0179\u0178\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u0179\3\2\2\2\u017b\u017c"+
		"\3\2\2\2\u017cj\3\2\2\2\u017d\u017f\t\5\2\2\u017e\u017d\3\2\2\2\u017f"+
		"\u0180\3\2\2\2\u0180\u017e\3\2\2\2\u0180\u0181\3\2\2\2\u0181\u0182\3\2"+
		"\2\2\u0182\u0183\b\66\2\2\u0183l\3\2\2\2\u0184\u0188\7$\2\2\u0185\u0187"+
		"\n\6\2\2\u0186\u0185\3\2\2\2\u0187\u018a\3\2\2\2\u0188\u0186\3\2\2\2\u0188"+
		"\u0189\3\2\2\2\u0189\u018b\3\2\2\2\u018a\u0188\3\2\2\2\u018b\u018c\7$"+
		"\2\2\u018cn\3\2\2\2\u018d\u018f\4\62;\2\u018e\u018d\3\2\2\2\u018f\u0190"+
		"\3\2\2\2\u0190\u018e\3\2\2\2\u0190\u0191\3\2\2\2\u0191\u0192\3\2\2\2\u0192"+
		"\u0196\7\60\2\2\u0193\u0195\4\62;\2\u0194\u0193\3\2\2\2\u0195\u0198\3"+
		"\2\2\2\u0196\u0194\3\2\2\2\u0196\u0197\3\2\2\2\u0197p\3\2\2\2\u0198\u0196"+
		"\3\2\2\2\u0199\u019a\7V\2\2\u019a\u019b\7t\2\2\u019b\u019c\7w\2\2\u019c"+
		"\u01a3\7g\2\2\u019d\u019e\7H\2\2\u019e\u019f\7c\2\2\u019f\u01a0\7n\2\2"+
		"\u01a0\u01a1\7u\2\2\u01a1\u01a3\7g\2\2\u01a2\u0199\3\2\2\2\u01a2\u019d"+
		"\3\2\2\2\u01a3r\3\2\2\2\u01a4\u01a5\t\7\2\2\u01a5t\3\2\2\2\u01a6\u01a7"+
		"\t\b\2\2\u01a7\u01ad\t\t\2\2\u01a8\u01a9\5s:\2\u01a9\u01aa\5s:\2\u01aa"+
		"\u01ac\3\2\2\2\u01ab\u01a8\3\2\2\2\u01ac\u01af\3\2\2\2\u01ad\u01ab\3\2"+
		"\2\2\u01ad\u01ae\3\2\2\2\u01aev\3\2\2\2\u01af\u01ad\3\2\2\2\u01b0\u01b1"+
		"\7K\2\2\u01b1\u01b2\7p\2\2\u01b2\u01b3\7v\2\2\u01b3\u01b4\7\65\2\2\u01b4"+
		"\u01e1\7\64\2\2\u01b5\u01b6\7K\2\2\u01b6\u01b7\7p\2\2\u01b7\u01b8\7v\2"+
		"\2\u01b8\u01b9\78\2\2\u01b9\u01e1\7\66\2\2\u01ba\u01bb\7K\2\2\u01bb\u01bc"+
		"\7p\2\2\u01bc\u01bd\7v\2\2\u01bd\u01be\7\63\2\2\u01be\u01bf\7\64\2\2\u01bf"+
		"\u01e1\7:\2\2\u01c0\u01c1\7K\2\2\u01c1\u01c2\7p\2\2\u01c2\u01c3\7v\2\2"+
		"\u01c3\u01c4\7\64\2\2\u01c4\u01c5\7\67\2\2\u01c5\u01e1\78\2\2\u01c6\u01c7"+
		"\7W\2\2\u01c7\u01c8\7k\2\2\u01c8\u01c9\7p\2\2\u01c9\u01ca\7v\2\2\u01ca"+
		"\u01cb\7\65\2\2\u01cb\u01e1\7\64\2\2\u01cc\u01cd\7W\2\2\u01cd\u01ce\7"+
		"k\2\2\u01ce\u01cf\7p\2\2\u01cf\u01d0\7v\2\2\u01d0\u01d1\78\2\2\u01d1\u01e1"+
		"\7\66\2\2\u01d2\u01d3\7W\2\2\u01d3\u01d4\7k\2\2\u01d4\u01d5\7p\2\2\u01d5"+
		"\u01d6\7v\2\2\u01d6\u01d7\7\63\2\2\u01d7\u01d8\7\64\2\2\u01d8\u01e1\7"+
		":\2\2\u01d9\u01da\7W\2\2\u01da\u01db\7k\2\2\u01db\u01dc\7p\2\2\u01dc\u01dd"+
		"\7v\2\2\u01dd\u01de\7\64\2\2\u01de\u01df\7\67\2\2\u01df\u01e1\78\2\2\u01e0"+
		"\u01b0\3\2\2\2\u01e0\u01b5\3\2\2\2\u01e0\u01ba\3\2\2\2\u01e0\u01c0\3\2"+
		"\2\2\u01e0\u01c6\3\2\2\2\u01e0\u01cc\3\2\2\2\u01e0\u01d2\3\2\2\2\u01e0"+
		"\u01d9\3\2\2\2\u01e1x\3\2\2\2\u01e2\u01e3\t\n\2\2\u01e3z\3\2\2\2\u01e4"+
		"\u01e8\t\13\2\2\u01e5\u01e7\5y=\2\u01e6\u01e5\3\2\2\2\u01e7\u01ea\3\2"+
		"\2\2\u01e8\u01e6\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9|\3\2\2\2\u01ea\u01e8"+
		"\3\2\2\2\u01eb\u01ef\t\f\2\2\u01ec\u01ee\5y=\2\u01ed\u01ec\3\2\2\2\u01ee"+
		"\u01f1\3\2\2\2\u01ef\u01ed\3\2\2\2\u01ef\u01f0\3\2\2\2\u01f0~\3\2\2\2"+
		"\u01f1\u01ef\3\2\2\2\u01f2\u01f6\t\r\2\2\u01f3\u01f5\5y=\2\u01f4\u01f3"+
		"\3\2\2\2\u01f5\u01f8\3\2\2\2\u01f6\u01f4\3\2\2\2\u01f6\u01f7\3\2\2\2\u01f7"+
		"\u0080\3\2\2\2\u01f8\u01f6\3\2\2\2\u01f9\u01fd\t\16\2\2\u01fa\u01fc\5"+
		"y=\2\u01fb\u01fa\3\2\2\2\u01fc\u01ff\3\2\2\2\u01fd\u01fb\3\2\2\2\u01fd"+
		"\u01fe\3\2\2\2\u01fe\u0082\3\2\2\2\u01ff\u01fd\3\2\2\2\22\2\u0166\u0171"+
		"\u0174\u017b\u0180\u0188\u0190\u0196\u01a2\u01ad\u01e0\u01e8\u01ef\u01f6"+
		"\u01fd\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}