// Generated from /Users/tramhoang/Desktop/Y5/cs4215/scilla_parse/MiniOCaml.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MiniOCamlLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, POW=5, MUL=6, DIV=7, ADD=8, SUB=9, MOD=10, 
		ADDFLOAT=11, SUBFLOAT=12, MULFLOAT=13, DIVFLOAT=14, LESSTHAN=15, LESSTHANOREQUAL=16, 
		GREATERTHAN=17, GREATERTHANOREQUAL=18, EQUALSTRUC=19, NOTEQUALSTRUC=20, 
		EQUALPHYS=21, NOTEQUALPHYS=22, CONCAT=23, AND=24, OR=25, NOT=26, NUMBER=27, 
		WS=28, TOSKIP=29, CHAR=30, STRING=31, FLOAT=32, BOOLEAN=33, IF=34, THEN=35, 
		ELSE=36, FUN=37, ARROW=38, PIPE=39, LET=40, IN=41, REC=42, LISTSTART=43, 
		LISTEND=44, SEMICOLON=45, MATCH=46, WITH=47, IDENTIFIER=48;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "POW", "MUL", "DIV", "ADD", "SUB", "MOD", 
			"ADDFLOAT", "SUBFLOAT", "MULFLOAT", "DIVFLOAT", "LESSTHAN", "LESSTHANOREQUAL", 
			"GREATERTHAN", "GREATERTHANOREQUAL", "EQUALSTRUC", "NOTEQUALSTRUC", "EQUALPHYS", 
			"NOTEQUALPHYS", "CONCAT", "AND", "OR", "NOT", "NUMBER", "WS", "TOSKIP", 
			"CHAR", "STRING", "FLOAT", "BOOLEAN", "IF", "THEN", "ELSE", "FUN", "ARROW", 
			"PIPE", "LET", "IN", "REC", "LISTSTART", "LISTEND", "SEMICOLON", "MATCH", 
			"WITH", "IDENTIFIER"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'::'", "'('", "')'", "'|'", "'**'", "'*'", "'/'", "'+'", "'-'", 
			"'mod'", "'+.'", "'-.'", "'*.'", "'/.'", "'<'", "'<='", "'>'", "'>='", 
			"'='", "'<>'", "'=='", "'!='", "'^'", "'&&'", "'||'", "'not'", null, 
			null, null, null, null, null, null, "'if'", "'then'", "'else'", "'fun'", 
			"'->'", "'|>'", "'let'", "'in'", "'rec'", "'['", "']'", "';'", "'match'", 
			"'with'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "POW", "MUL", "DIV", "ADD", "SUB", "MOD", 
			"ADDFLOAT", "SUBFLOAT", "MULFLOAT", "DIVFLOAT", "LESSTHAN", "LESSTHANOREQUAL", 
			"GREATERTHAN", "GREATERTHANOREQUAL", "EQUALSTRUC", "NOTEQUALSTRUC", "EQUALPHYS", 
			"NOTEQUALPHYS", "CONCAT", "AND", "OR", "NOT", "NUMBER", "WS", "TOSKIP", 
			"CHAR", "STRING", "FLOAT", "BOOLEAN", "IF", "THEN", "ELSE", "FUN", "ARROW", 
			"PIPE", "LET", "IN", "REC", "LISTSTART", "LISTEND", "SEMICOLON", "MATCH", 
			"WITH", "IDENTIFIER"
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


	public MiniOCamlLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MiniOCaml.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\62\u0117\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\3\2\3\2\3\2\3\3\3\3\3\4"+
		"\3\4\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\13"+
		"\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20"+
		"\3\21\3\21\3\21\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\25\3\25\3\25\3\26"+
		"\3\26\3\26\3\27\3\27\3\27\3\30\3\30\3\31\3\31\3\31\3\32\3\32\3\32\3\33"+
		"\3\33\3\33\3\33\3\34\6\34\u00aa\n\34\r\34\16\34\u00ab\3\35\6\35\u00af"+
		"\n\35\r\35\16\35\u00b0\3\36\6\36\u00b4\n\36\r\36\16\36\u00b5\3\36\3\36"+
		"\3\37\3\37\3\37\3\37\3 \3 \7 \u00c0\n \f \16 \u00c3\13 \3 \3 \3!\6!\u00c8"+
		"\n!\r!\16!\u00c9\3!\3!\7!\u00ce\n!\f!\16!\u00d1\13!\3\"\3\"\3\"\3\"\3"+
		"\"\3\"\3\"\3\"\3\"\5\"\u00dc\n\"\3#\3#\3#\3$\3$\3$\3$\3$\3%\3%\3%\3%\3"+
		"%\3&\3&\3&\3&\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3)\3*\3*\3*\3+\3+\3+\3+\3"+
		",\3,\3-\3-\3.\3.\3/\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\61\3\61"+
		"\7\61\u0113\n\61\f\61\16\61\u0116\13\61\2\2\62\3\3\5\4\7\5\t\6\13\7\r"+
		"\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25"+
		")\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O"+
		")Q*S+U,W-Y.[/]\60_\61a\62\3\2\t\3\2\62;\3\2\"\"\4\2\13\f\17\17\4\2++_"+
		"_\5\2\f\f\17\17$$\4\2aac|\6\2\62;C\\aac|\2\u011e\2\3\3\2\2\2\2\5\3\2\2"+
		"\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3"+
		"\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2"+
		"\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2"+
		"Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\3c\3\2\2\2\5f\3"+
		"\2\2\2\7h\3\2\2\2\tj\3\2\2\2\13l\3\2\2\2\ro\3\2\2\2\17q\3\2\2\2\21s\3"+
		"\2\2\2\23u\3\2\2\2\25w\3\2\2\2\27{\3\2\2\2\31~\3\2\2\2\33\u0081\3\2\2"+
		"\2\35\u0084\3\2\2\2\37\u0087\3\2\2\2!\u0089\3\2\2\2#\u008c\3\2\2\2%\u008e"+
		"\3\2\2\2\'\u0091\3\2\2\2)\u0093\3\2\2\2+\u0096\3\2\2\2-\u0099\3\2\2\2"+
		"/\u009c\3\2\2\2\61\u009e\3\2\2\2\63\u00a1\3\2\2\2\65\u00a4\3\2\2\2\67"+
		"\u00a9\3\2\2\29\u00ae\3\2\2\2;\u00b3\3\2\2\2=\u00b9\3\2\2\2?\u00bd\3\2"+
		"\2\2A\u00c7\3\2\2\2C\u00db\3\2\2\2E\u00dd\3\2\2\2G\u00e0\3\2\2\2I\u00e5"+
		"\3\2\2\2K\u00ea\3\2\2\2M\u00ee\3\2\2\2O\u00f1\3\2\2\2Q\u00f4\3\2\2\2S"+
		"\u00f8\3\2\2\2U\u00fb\3\2\2\2W\u00ff\3\2\2\2Y\u0101\3\2\2\2[\u0103\3\2"+
		"\2\2]\u0105\3\2\2\2_\u010b\3\2\2\2a\u0110\3\2\2\2cd\7<\2\2de\7<\2\2e\4"+
		"\3\2\2\2fg\7*\2\2g\6\3\2\2\2hi\7+\2\2i\b\3\2\2\2jk\7~\2\2k\n\3\2\2\2l"+
		"m\7,\2\2mn\7,\2\2n\f\3\2\2\2op\7,\2\2p\16\3\2\2\2qr\7\61\2\2r\20\3\2\2"+
		"\2st\7-\2\2t\22\3\2\2\2uv\7/\2\2v\24\3\2\2\2wx\7o\2\2xy\7q\2\2yz\7f\2"+
		"\2z\26\3\2\2\2{|\7-\2\2|}\7\60\2\2}\30\3\2\2\2~\177\7/\2\2\177\u0080\7"+
		"\60\2\2\u0080\32\3\2\2\2\u0081\u0082\7,\2\2\u0082\u0083\7\60\2\2\u0083"+
		"\34\3\2\2\2\u0084\u0085\7\61\2\2\u0085\u0086\7\60\2\2\u0086\36\3\2\2\2"+
		"\u0087\u0088\7>\2\2\u0088 \3\2\2\2\u0089\u008a\7>\2\2\u008a\u008b\7?\2"+
		"\2\u008b\"\3\2\2\2\u008c\u008d\7@\2\2\u008d$\3\2\2\2\u008e\u008f\7@\2"+
		"\2\u008f\u0090\7?\2\2\u0090&\3\2\2\2\u0091\u0092\7?\2\2\u0092(\3\2\2\2"+
		"\u0093\u0094\7>\2\2\u0094\u0095\7@\2\2\u0095*\3\2\2\2\u0096\u0097\7?\2"+
		"\2\u0097\u0098\7?\2\2\u0098,\3\2\2\2\u0099\u009a\7#\2\2\u009a\u009b\7"+
		"?\2\2\u009b.\3\2\2\2\u009c\u009d\7`\2\2\u009d\60\3\2\2\2\u009e\u009f\7"+
		"(\2\2\u009f\u00a0\7(\2\2\u00a0\62\3\2\2\2\u00a1\u00a2\7~\2\2\u00a2\u00a3"+
		"\7~\2\2\u00a3\64\3\2\2\2\u00a4\u00a5\7p\2\2\u00a5\u00a6\7q\2\2\u00a6\u00a7"+
		"\7v\2\2\u00a7\66\3\2\2\2\u00a8\u00aa\t\2\2\2\u00a9\u00a8\3\2\2\2\u00aa"+
		"\u00ab\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac8\3\2\2\2"+
		"\u00ad\u00af\t\3\2\2\u00ae\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\u00ae"+
		"\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1:\3\2\2\2\u00b2\u00b4\t\4\2\2\u00b3"+
		"\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b3\3\2\2\2\u00b5\u00b6\3\2"+
		"\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00b8\b\36\2\2\u00b8<\3\2\2\2\u00b9\u00ba"+
		"\7)\2\2\u00ba\u00bb\n\5\2\2\u00bb\u00bc\7)\2\2\u00bc>\3\2\2\2\u00bd\u00c1"+
		"\7$\2\2\u00be\u00c0\n\6\2\2\u00bf\u00be\3\2\2\2\u00c0\u00c3\3\2\2\2\u00c1"+
		"\u00bf\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c4\3\2\2\2\u00c3\u00c1\3\2"+
		"\2\2\u00c4\u00c5\7$\2\2\u00c5@\3\2\2\2\u00c6\u00c8\4\62;\2\u00c7\u00c6"+
		"\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca"+
		"\u00cb\3\2\2\2\u00cb\u00cf\7\60\2\2\u00cc\u00ce\4\62;\2\u00cd\u00cc\3"+
		"\2\2\2\u00ce\u00d1\3\2\2\2\u00cf\u00cd\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0"+
		"B\3\2\2\2\u00d1\u00cf\3\2\2\2\u00d2\u00d3\7v\2\2\u00d3\u00d4\7t\2\2\u00d4"+
		"\u00d5\7w\2\2\u00d5\u00dc\7g\2\2\u00d6\u00d7\7h\2\2\u00d7\u00d8\7c\2\2"+
		"\u00d8\u00d9\7n\2\2\u00d9\u00da\7u\2\2\u00da\u00dc\7g\2\2\u00db\u00d2"+
		"\3\2\2\2\u00db\u00d6\3\2\2\2\u00dcD\3\2\2\2\u00dd\u00de\7k\2\2\u00de\u00df"+
		"\7h\2\2\u00dfF\3\2\2\2\u00e0\u00e1\7v\2\2\u00e1\u00e2\7j\2\2\u00e2\u00e3"+
		"\7g\2\2\u00e3\u00e4\7p\2\2\u00e4H\3\2\2\2\u00e5\u00e6\7g\2\2\u00e6\u00e7"+
		"\7n\2\2\u00e7\u00e8\7u\2\2\u00e8\u00e9\7g\2\2\u00e9J\3\2\2\2\u00ea\u00eb"+
		"\7h\2\2\u00eb\u00ec\7w\2\2\u00ec\u00ed\7p\2\2\u00edL\3\2\2\2\u00ee\u00ef"+
		"\7/\2\2\u00ef\u00f0\7@\2\2\u00f0N\3\2\2\2\u00f1\u00f2\7~\2\2\u00f2\u00f3"+
		"\7@\2\2\u00f3P\3\2\2\2\u00f4\u00f5\7n\2\2\u00f5\u00f6\7g\2\2\u00f6\u00f7"+
		"\7v\2\2\u00f7R\3\2\2\2\u00f8\u00f9\7k\2\2\u00f9\u00fa\7p\2\2\u00faT\3"+
		"\2\2\2\u00fb\u00fc\7t\2\2\u00fc\u00fd\7g\2\2\u00fd\u00fe\7e\2\2\u00fe"+
		"V\3\2\2\2\u00ff\u0100\7]\2\2\u0100X\3\2\2\2\u0101\u0102\7_\2\2\u0102Z"+
		"\3\2\2\2\u0103\u0104\7=\2\2\u0104\\\3\2\2\2\u0105\u0106\7o\2\2\u0106\u0107"+
		"\7c\2\2\u0107\u0108\7v\2\2\u0108\u0109\7e\2\2\u0109\u010a\7j\2\2\u010a"+
		"^\3\2\2\2\u010b\u010c\7y\2\2\u010c\u010d\7k\2\2\u010d\u010e\7v\2\2\u010e"+
		"\u010f\7j\2\2\u010f`\3\2\2\2\u0110\u0114\t\7\2\2\u0111\u0113\t\b\2\2\u0112"+
		"\u0111\3\2\2\2\u0113\u0116\3\2\2\2\u0114\u0112\3\2\2\2\u0114\u0115\3\2"+
		"\2\2\u0115b\3\2\2\2\u0116\u0114\3\2\2\2\13\2\u00ab\u00b0\u00b5\u00c1\u00c9"+
		"\u00cf\u00db\u0114\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}