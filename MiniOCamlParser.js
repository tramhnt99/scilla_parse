// Generated from MiniOCaml.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniOCamlListener from './MiniOCamlListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00032\u01d9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003)\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003.\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "2\n\u0003\u0003\u0003\u0005\u00035\n\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u00039\n\u0003\u0003\u0003\u0005\u0003<\n\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003@\n\u0003\u0003\u0003\u0005\u0003C\n\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003G\n\u0003\u0003\u0003\u0005\u0003J\n\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003N\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003S\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003[\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003b\n\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003f\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003k\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003o\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003t\n\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003x\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003}\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0081\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0086\n\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u008a\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u008f\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u0093\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0098",
    "\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u009c\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u00a1\n\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u00a5\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u00aa\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u00ae",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u00b3\n\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u00b7\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u00bc\n\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u00c0\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u00c5\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u00c9\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u00ce\n\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u00d2\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u00d7\n\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u00db\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u00e0\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u00e4\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u00e9\n\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u00ed\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u00f2\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u00f6\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u00fb",
    "\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u00ff\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u0104\n\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u0108\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u010d\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0111",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0116\n\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u011a\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u011f\n\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u0123\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u0128\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u012c\n\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u0130\n\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u0134\n\u0003\u0003\u0003\u0007\u0003\u0137\n\u0003",
    "\f\u0003\u000e\u0003\u013a\u000b\u0003\u0007\u0003\u013c\n\u0003\f\u0003",
    "\u000e\u0003\u013f\u000b\u0003\u0003\u0004\u0005\u0004\u0142\n\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004\u0146\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0005\u0006\u014b\n\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006\u014f\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0153",
    "\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0157\n\u0006\u0003\u0007",
    "\u0005\u0007\u015a\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u0160\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "\u0164\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0168\n\u0007\u0003",
    "\b\u0005\b\u016b\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u0179\n\b\u0003",
    "\t\u0003\t\u0003\t\u0005\t\u017e\n\t\u0003\t\u0005\t\u0181\n\t\u0003",
    "\t\u0003\t\u0005\t\u0185\n\t\u0003\t\u0003\t\u0005\t\u0189\n\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0005\n\u018f\n\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0005\u000b\u0197\n\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u019b\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0007",
    "\f\u01a0\n\f\f\f\u000e\f\u01a3\u000b\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0006\r\u01ab\n\r\r\r\u000e\r\u01ac\u0003\u000e\u0005",
    "\u000e\u01b0\n\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u01b4\n\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e\u01b8\n\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u01bc\n\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u01c0\n\u000e\u0003\u000f\u0005\u000f\u01c3\n\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0007\u000f\u01c8\n\u000f\f\u000f\u000e\u000f\u01cb",
    "\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u01d0\n",
    "\u0010\u0003\u0010\u0005\u0010\u01d3\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0002\u0003\u0004\u0011\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e\u0002",
    "\u0002\u0002\u024a\u0002 \u0003\u0002\u0002\u0002\u0004Z\u0003\u0002",
    "\u0002\u0002\u0006\u0141\u0003\u0002\u0002\u0002\b\u0147\u0003\u0002",
    "\u0002\u0002\n\u014a\u0003\u0002\u0002\u0002\f\u0159\u0003\u0002\u0002",
    "\u0002\u000e\u016a\u0003\u0002\u0002\u0002\u0010\u017a\u0003\u0002\u0002",
    "\u0002\u0012\u018e\u0003\u0002\u0002\u0002\u0014\u0196\u0003\u0002\u0002",
    "\u0002\u0016\u01a1\u0003\u0002\u0002\u0002\u0018\u01a4\u0003\u0002\u0002",
    "\u0002\u001a\u01af\u0003\u0002\u0002\u0002\u001c\u01c2\u0003\u0002\u0002",
    "\u0002\u001e\u01cc\u0003\u0002\u0002\u0002 !\u0005\u0004\u0003\u0002",
    "!\u0003\u0003\u0002\u0002\u0002\"#\b\u0003\u0001\u0002#[\u0005\u0018",
    "\r\u0002$[\u0005\f\u0007\u0002%&\u0007-\u0002\u0002&(\u0005\u0016\f",
    "\u0002\')\u0007\u001e\u0002\u0002(\'\u0003\u0002\u0002\u0002()\u0003",
    "\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*+\u0007.\u0002\u0002+[",
    "\u0003\u0002\u0002\u0002,.\u0007\u001e\u0002\u0002-,\u0003\u0002\u0002",
    "\u0002-.\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/1\u0007\u001d",
    "\u0002\u000202\u0007\u001e\u0002\u000210\u0003\u0002\u0002\u000212\u0003",
    "\u0002\u0002\u00022[\u0003\u0002\u0002\u000235\u0007\u001e\u0002\u0002",
    "43\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000256\u0003\u0002\u0002",
    "\u000268\u0007\"\u0002\u000279\u0007\u001e\u0002\u000287\u0003\u0002",
    "\u0002\u000289\u0003\u0002\u0002\u00029[\u0003\u0002\u0002\u0002:<\u0007",
    "\u001e\u0002\u0002;:\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002",
    "<=\u0003\u0002\u0002\u0002=?\u0007#\u0002\u0002>@\u0007\u001e\u0002",
    "\u0002?>\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@[\u0003\u0002",
    "\u0002\u0002AC\u0007\u001e\u0002\u0002BA\u0003\u0002\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DF\u0007 \u0002\u0002EG",
    "\u0007\u001e\u0002\u0002FE\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002",
    "\u0002G[\u0003\u0002\u0002\u0002HJ\u0007\u001e\u0002\u0002IH\u0003\u0002",
    "\u0002\u0002IJ\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KM\u0007",
    "!\u0002\u0002LN\u0007\u001e\u0002\u0002ML\u0003\u0002\u0002\u0002MN",
    "\u0003\u0002\u0002\u0002N[\u0003\u0002\u0002\u0002O[\u0005\n\u0006\u0002",
    "PR\u0007\u001c\u0002\u0002QS\u0007\u001e\u0002\u0002RQ\u0003\u0002\u0002",
    "\u0002RS\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002T[\u0005\u0004",
    "\u0003\u000bU[\u0005\u0012\n\u0002V[\u0005\u0010\t\u0002W[\u0005\u001e",
    "\u0010\u0002X[\u0005\u000e\b\u0002Y[\u0005\u0006\u0004\u0002Z\"\u0003",
    "\u0002\u0002\u0002Z$\u0003\u0002\u0002\u0002Z%\u0003\u0002\u0002\u0002",
    "Z-\u0003\u0002\u0002\u0002Z4\u0003\u0002\u0002\u0002Z;\u0003\u0002\u0002",
    "\u0002ZB\u0003\u0002\u0002\u0002ZI\u0003\u0002\u0002\u0002ZO\u0003\u0002",
    "\u0002\u0002ZP\u0003\u0002\u0002\u0002ZU\u0003\u0002\u0002\u0002ZV\u0003",
    "\u0002\u0002\u0002ZW\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002",
    "ZY\u0003\u0002\u0002\u0002[\u013d\u0003\u0002\u0002\u0002\\]\f\'\u0002",
    "\u0002]^\u0007\u001e\u0002\u0002^\u013c\u0005\u0004\u0003(_a\f&\u0002",
    "\u0002`b\u0007\u001e\u0002\u0002a`\u0003\u0002\u0002\u0002ab\u0003\u0002",
    "\u0002\u0002bc\u0003\u0002\u0002\u0002ce\u0007)\u0002\u0002df\u0007",
    "\u001e\u0002\u0002ed\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002",
    "fg\u0003\u0002\u0002\u0002g\u013c\u0005\u0004\u0003\'hj\f\u001e\u0002",
    "\u0002ik\u0007\u001e\u0002\u0002ji\u0003\u0002\u0002\u0002jk\u0003\u0002",
    "\u0002\u0002kl\u0003\u0002\u0002\u0002ln\u0007\u0007\u0002\u0002mo\u0007",
    "\u001e\u0002\u0002nm\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002",
    "op\u0003\u0002\u0002\u0002p\u013c\u0005\u0004\u0003\u001eqs\f\u001d",
    "\u0002\u0002rt\u0007\u001e\u0002\u0002sr\u0003\u0002\u0002\u0002st\u0003",
    "\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uw\u0007\b\u0002\u0002v",
    "x\u0007\u001e\u0002\u0002wv\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002",
    "\u0002xy\u0003\u0002\u0002\u0002y\u013c\u0005\u0004\u0003\u001ez|\f",
    "\u001c\u0002\u0002{}\u0007\u001e\u0002\u0002|{\u0003\u0002\u0002\u0002",
    "|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0080\u0007\t",
    "\u0002\u0002\u007f\u0081\u0007\u001e\u0002\u0002\u0080\u007f\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002",
    "\u0002\u0002\u0082\u013c\u0005\u0004\u0003\u001d\u0083\u0085\f\u001b",
    "\u0002\u0002\u0084\u0086\u0007\u001e\u0002\u0002\u0085\u0084\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002",
    "\u0002\u0002\u0087\u0089\u0007\u000f\u0002\u0002\u0088\u008a\u0007\u001e",
    "\u0002\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002",
    "\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u013c\u0005\u0004",
    "\u0003\u001c\u008c\u008e\f\u001a\u0002\u0002\u008d\u008f\u0007\u001e",
    "\u0002\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002",
    "\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0007\u0010",
    "\u0002\u0002\u0091\u0093\u0007\u001e\u0002\u0002\u0092\u0091\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002",
    "\u0002\u0002\u0094\u013c\u0005\u0004\u0003\u001b\u0095\u0097\f\u0019",
    "\u0002\u0002\u0096\u0098\u0007\u001e\u0002\u0002\u0097\u0096\u0003\u0002",
    "\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002",
    "\u0002\u0002\u0099\u009b\u0007\f\u0002\u0002\u009a\u009c\u0007\u001e",
    "\u0002\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u013c\u0005\u0004",
    "\u0003\u001a\u009e\u00a0\f\u0018\u0002\u0002\u009f\u00a1\u0007\u001e",
    "\u0002\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002",
    "\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a4\u0007\n",
    "\u0002\u0002\u00a3\u00a5\u0007\u001e\u0002\u0002\u00a4\u00a3\u0003\u0002",
    "\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002",
    "\u0002\u0002\u00a6\u013c\u0005\u0004\u0003\u0019\u00a7\u00a9\f\u0017",
    "\u0002\u0002\u00a8\u00aa\u0007\u001e\u0002\u0002\u00a9\u00a8\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002",
    "\u0002\u0002\u00ab\u00ad\u0007\u000b\u0002\u0002\u00ac\u00ae\u0007\u001e",
    "\u0002\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002",
    "\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u013c\u0005\u0004",
    "\u0003\u0018\u00b0\u00b2\f\u0016\u0002\u0002\u00b1\u00b3\u0007\u001e",
    "\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b6\u0007\r",
    "\u0002\u0002\u00b5\u00b7\u0007\u001e\u0002\u0002\u00b6\u00b5\u0003\u0002",
    "\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002",
    "\u0002\u0002\u00b8\u013c\u0005\u0004\u0003\u0017\u00b9\u00bb\f\u0015",
    "\u0002\u0002\u00ba\u00bc\u0007\u001e\u0002\u0002\u00bb\u00ba\u0003\u0002",
    "\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002",
    "\u0002\u0002\u00bd\u00bf\u0007\u000e\u0002\u0002\u00be\u00c0\u0007\u001e",
    "\u0002\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002",
    "\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u013c\u0005\u0004",
    "\u0003\u0016\u00c2\u00c4\f\u0014\u0002\u0002\u00c3\u00c5\u0007\u001e",
    "\u0002\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002",
    "\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c8\u0007\u0011",
    "\u0002\u0002\u00c7\u00c9\u0007\u001e\u0002\u0002\u00c8\u00c7\u0003\u0002",
    "\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002",
    "\u0002\u0002\u00ca\u013c\u0005\u0004\u0003\u0015\u00cb\u00cd\f\u0013",
    "\u0002\u0002\u00cc\u00ce\u0007\u001e\u0002\u0002\u00cd\u00cc\u0003\u0002",
    "\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002",
    "\u0002\u0002\u00cf\u00d1\u0007\u0012\u0002\u0002\u00d0\u00d2\u0007\u001e",
    "\u0002\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002",
    "\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u013c\u0005\u0004",
    "\u0003\u0014\u00d4\u00d6\f\u0012\u0002\u0002\u00d5\u00d7\u0007\u001e",
    "\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002",
    "\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00da\u0007\u0013",
    "\u0002\u0002\u00d9\u00db\u0007\u001e\u0002\u0002\u00da\u00d9\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00dc\u0003\u0002",
    "\u0002\u0002\u00dc\u013c\u0005\u0004\u0003\u0013\u00dd\u00df\f\u0011",
    "\u0002\u0002\u00de\u00e0\u0007\u001e\u0002\u0002\u00df\u00de\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002",
    "\u0002\u0002\u00e1\u00e3\u0007\u0014\u0002\u0002\u00e2\u00e4\u0007\u001e",
    "\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002",
    "\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u013c\u0005\u0004",
    "\u0003\u0012\u00e6\u00e8\f\u0010\u0002\u0002\u00e7\u00e9\u0007\u001e",
    "\u0002\u0002\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002",
    "\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00ec\u0007\u0015",
    "\u0002\u0002\u00eb\u00ed\u0007\u001e\u0002\u0002\u00ec\u00eb\u0003\u0002",
    "\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ee\u0003\u0002",
    "\u0002\u0002\u00ee\u013c\u0005\u0004\u0003\u0011\u00ef\u00f1\f\u000f",
    "\u0002\u0002\u00f0\u00f2\u0007\u001e\u0002\u0002\u00f1\u00f0\u0003\u0002",
    "\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002",
    "\u0002\u0002\u00f3\u00f5\u0007\u0016\u0002\u0002\u00f4\u00f6\u0007\u001e",
    "\u0002\u0002\u00f5\u00f4\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002",
    "\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u013c\u0005\u0004",
    "\u0003\u0010\u00f8\u00fa\f\u000e\u0002\u0002\u00f9\u00fb\u0007\u001e",
    "\u0002\u0002\u00fa\u00f9\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002",
    "\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc\u00fe\u0007\u0017",
    "\u0002\u0002\u00fd\u00ff\u0007\u001e\u0002\u0002\u00fe\u00fd\u0003\u0002",
    "\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002",
    "\u0002\u0002\u0100\u013c\u0005\u0004\u0003\u000f\u0101\u0103\f\r\u0002",
    "\u0002\u0102\u0104\u0007\u001e\u0002\u0002\u0103\u0102\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0105\u0003\u0002\u0002",
    "\u0002\u0105\u0107\u0007\u0018\u0002\u0002\u0106\u0108\u0007\u001e\u0002",
    "\u0002\u0107\u0106\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002",
    "\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109\u013c\u0005\u0004\u0003",
    "\u000e\u010a\u010c\f\f\u0002\u0002\u010b\u010d\u0007\u001e\u0002\u0002",
    "\u010c\u010b\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002",
    "\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u0110\u0007\u0019\u0002\u0002",
    "\u010f\u0111\u0007\u001e\u0002\u0002\u0110\u010f\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002",
    "\u0112\u013c\u0005\u0004\u0003\r\u0113\u0115\f\n\u0002\u0002\u0114\u0116",
    "\u0007\u001e\u0002\u0002\u0115\u0114\u0003\u0002\u0002\u0002\u0115\u0116",
    "\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u0119",
    "\u0007\u001a\u0002\u0002\u0118\u011a\u0007\u001e\u0002\u0002\u0119\u0118",
    "\u0003\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a\u011b",
    "\u0003\u0002\u0002\u0002\u011b\u013c\u0005\u0004\u0003\u000b\u011c\u011e",
    "\f\t\u0002\u0002\u011d\u011f\u0007\u001e\u0002\u0002\u011e\u011d\u0003",
    "\u0002\u0002\u0002\u011e\u011f\u0003\u0002\u0002\u0002\u011f\u0120\u0003",
    "\u0002\u0002\u0002\u0120\u0122\u0007\u001b\u0002\u0002\u0121\u0123\u0007",
    "\u001e\u0002\u0002\u0122\u0121\u0003\u0002\u0002\u0002\u0122\u0123\u0003",
    "\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u013c\u0005",
    "\u0004\u0003\n\u0125\u0127\f\u0003\u0002\u0002\u0126\u0128\u0007\u001e",
    "\u0002\u0002\u0127\u0126\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002",
    "\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u012b\u0007\u0003",
    "\u0002\u0002\u012a\u012c\u0007\u001e\u0002\u0002\u012b\u012a\u0003\u0002",
    "\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0003\u0002",
    "\u0002\u0002\u012d\u0138\u0005\u0004\u0003\u0002\u012e\u0130\u0007\u001e",
    "\u0002\u0002\u012f\u012e\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002",
    "\u0002\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u0133\u0007\u0003",
    "\u0002\u0002\u0132\u0134\u0007\u001e\u0002\u0002\u0133\u0132\u0003\u0002",
    "\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u0135\u0003\u0002",
    "\u0002\u0002\u0135\u0137\u0005\u0004\u0003\u0002\u0136\u012f\u0003\u0002",
    "\u0002\u0002\u0137\u013a\u0003\u0002\u0002\u0002\u0138\u0136\u0003\u0002",
    "\u0002\u0002\u0138\u0139\u0003\u0002\u0002\u0002\u0139\u013c\u0003\u0002",
    "\u0002\u0002\u013a\u0138\u0003\u0002\u0002\u0002\u013b\\\u0003\u0002",
    "\u0002\u0002\u013b_\u0003\u0002\u0002\u0002\u013bh\u0003\u0002\u0002",
    "\u0002\u013bq\u0003\u0002\u0002\u0002\u013bz\u0003\u0002\u0002\u0002",
    "\u013b\u0083\u0003\u0002\u0002\u0002\u013b\u008c\u0003\u0002\u0002\u0002",
    "\u013b\u0095\u0003\u0002\u0002\u0002\u013b\u009e\u0003\u0002\u0002\u0002",
    "\u013b\u00a7\u0003\u0002\u0002\u0002\u013b\u00b0\u0003\u0002\u0002\u0002",
    "\u013b\u00b9\u0003\u0002\u0002\u0002\u013b\u00c2\u0003\u0002\u0002\u0002",
    "\u013b\u00cb\u0003\u0002\u0002\u0002\u013b\u00d4\u0003\u0002\u0002\u0002",
    "\u013b\u00dd\u0003\u0002\u0002\u0002\u013b\u00e6\u0003\u0002\u0002\u0002",
    "\u013b\u00ef\u0003\u0002\u0002\u0002\u013b\u00f8\u0003\u0002\u0002\u0002",
    "\u013b\u0101\u0003\u0002\u0002\u0002\u013b\u010a\u0003\u0002\u0002\u0002",
    "\u013b\u0113\u0003\u0002\u0002\u0002\u013b\u011c\u0003\u0002\u0002\u0002",
    "\u013b\u0125\u0003\u0002\u0002\u0002\u013c\u013f\u0003\u0002\u0002\u0002",
    "\u013d\u013b\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002\u0002\u0002",
    "\u013e\u0005\u0003\u0002\u0002\u0002\u013f\u013d\u0003\u0002\u0002\u0002",
    "\u0140\u0142\u0007\u001e\u0002\u0002\u0141\u0140\u0003\u0002\u0002\u0002",
    "\u0141\u0142\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002",
    "\u0143\u0145\u00072\u0002\u0002\u0144\u0146\u0007\u001e\u0002\u0002",
    "\u0145\u0144\u0003\u0002\u0002\u0002\u0145\u0146\u0003\u0002\u0002\u0002",
    "\u0146\u0007\u0003\u0002\u0002\u0002\u0147\u0148\u0005\u0004\u0003\u0002",
    "\u0148\t\u0003\u0002\u0002\u0002\u0149\u014b\u0007\u001e\u0002\u0002",
    "\u014a\u0149\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002",
    "\u014b\u014c\u0003\u0002\u0002\u0002\u014c\u014e\u0007\u0004\u0002\u0002",
    "\u014d\u014f\u0007\u001e\u0002\u0002\u014e\u014d\u0003\u0002\u0002\u0002",
    "\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0150\u0003\u0002\u0002\u0002",
    "\u0150\u0152\u0005\u0004\u0003\u0002\u0151\u0153\u0007\u001e\u0002\u0002",
    "\u0152\u0151\u0003\u0002\u0002\u0002\u0152\u0153\u0003\u0002\u0002\u0002",
    "\u0153\u0154\u0003\u0002\u0002\u0002\u0154\u0156\u0007\u0005\u0002\u0002",
    "\u0155\u0157\u0007\u001e\u0002\u0002\u0156\u0155\u0003\u0002\u0002\u0002",
    "\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u000b\u0003\u0002\u0002\u0002",
    "\u0158\u015a\u0007\u001e\u0002\u0002\u0159\u0158\u0003\u0002\u0002\u0002",
    "\u0159\u015a\u0003\u0002\u0002\u0002\u015a\u015b\u0003\u0002\u0002\u0002",
    "\u015b\u015c\u0007\'\u0002\u0002\u015c\u015d\u0007\u001e\u0002\u0002",
    "\u015d\u015f\u0005\u0006\u0004\u0002\u015e\u0160\u0007\u001e\u0002\u0002",
    "\u015f\u015e\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002",
    "\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0163\u0007(\u0002\u0002",
    "\u0162\u0164\u0007\u001e\u0002\u0002\u0163\u0162\u0003\u0002\u0002\u0002",
    "\u0163\u0164\u0003\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002",
    "\u0165\u0167\u0005\b\u0005\u0002\u0166\u0168\u0007\u001e\u0002\u0002",
    "\u0167\u0166\u0003\u0002\u0002\u0002\u0167\u0168\u0003\u0002\u0002\u0002",
    "\u0168\r\u0003\u0002\u0002\u0002\u0169\u016b\u0007\u001e\u0002\u0002",
    "\u016a\u0169\u0003\u0002\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002",
    "\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u016d\u0007$\u0002\u0002",
    "\u016d\u016e\u0007\u001e\u0002\u0002\u016e\u016f\u0005\u0004\u0003\u0002",
    "\u016f\u0170\u0007\u001e\u0002\u0002\u0170\u0171\u0007%\u0002\u0002",
    "\u0171\u0172\u0007\u001e\u0002\u0002\u0172\u0173\u0005\u0004\u0003\u0002",
    "\u0173\u0174\u0007\u001e\u0002\u0002\u0174\u0175\u0007&\u0002\u0002",
    "\u0175\u0176\u0007\u001e\u0002\u0002\u0176\u0178\u0005\u0004\u0003\u0002",
    "\u0177\u0179\u0007\u001e\u0002\u0002\u0178\u0177\u0003\u0002\u0002\u0002",
    "\u0178\u0179\u0003\u0002\u0002\u0002\u0179\u000f\u0003\u0002\u0002\u0002",
    "\u017a\u017b\u0007*\u0002\u0002\u017b\u017d\u0007\u001e\u0002\u0002",
    "\u017c\u017e\u0007,\u0002\u0002\u017d\u017c\u0003\u0002\u0002\u0002",
    "\u017d\u017e\u0003\u0002\u0002\u0002\u017e\u0180\u0003\u0002\u0002\u0002",
    "\u017f\u0181\u0007\u001e\u0002\u0002\u0180\u017f\u0003\u0002\u0002\u0002",
    "\u0180\u0181\u0003\u0002\u0002\u0002\u0181\u0182\u0003\u0002\u0002\u0002",
    "\u0182\u0184\u0005\u0006\u0004\u0002\u0183\u0185\u0007\u001e\u0002\u0002",
    "\u0184\u0183\u0003\u0002\u0002\u0002\u0184\u0185\u0003\u0002\u0002\u0002",
    "\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0188\u0007\u0015\u0002\u0002",
    "\u0187\u0189\u0007\u001e\u0002\u0002\u0188\u0187\u0003\u0002\u0002\u0002",
    "\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u018a\u0003\u0002\u0002\u0002",
    "\u018a\u018b\u0005\u0004\u0003\u0002\u018b\u0011\u0003\u0002\u0002\u0002",
    "\u018c\u018f\u0005\u0010\t\u0002\u018d\u018f\u0005\u001e\u0010\u0002",
    "\u018e\u018c\u0003\u0002\u0002\u0002\u018e\u018d\u0003\u0002\u0002\u0002",
    "\u018f\u0190\u0003\u0002\u0002\u0002\u0190\u0191\u0007\u001e\u0002\u0002",
    "\u0191\u0192\u0007+\u0002\u0002\u0192\u0193\u0007\u001e\u0002\u0002",
    "\u0193\u0194\u0005\u0004\u0003\u0002\u0194\u0013\u0003\u0002\u0002\u0002",
    "\u0195\u0197\u0007\u001e\u0002\u0002\u0196\u0195\u0003\u0002\u0002\u0002",
    "\u0196\u0197\u0003\u0002\u0002\u0002\u0197\u0198\u0003\u0002\u0002\u0002",
    "\u0198\u019a\u0005\u0004\u0003\u0002\u0199\u019b\u0007\u001e\u0002\u0002",
    "\u019a\u0199\u0003\u0002\u0002\u0002\u019a\u019b\u0003\u0002\u0002\u0002",
    "\u019b\u019c\u0003\u0002\u0002\u0002\u019c\u019d\u0007/\u0002\u0002",
    "\u019d\u0015\u0003\u0002\u0002\u0002\u019e\u01a0\u0005\u0014\u000b\u0002",
    "\u019f\u019e\u0003\u0002\u0002\u0002\u01a0\u01a3\u0003\u0002\u0002\u0002",
    "\u01a1\u019f\u0003\u0002\u0002\u0002\u01a1\u01a2\u0003\u0002\u0002\u0002",
    "\u01a2\u0017\u0003\u0002\u0002\u0002\u01a3\u01a1\u0003\u0002\u0002\u0002",
    "\u01a4\u01a5\u00070\u0002\u0002\u01a5\u01a6\u0007\u001e\u0002\u0002",
    "\u01a6\u01a7\u0005\u0004\u0003\u0002\u01a7\u01a8\u0007\u001e\u0002\u0002",
    "\u01a8\u01aa\u00071\u0002\u0002\u01a9\u01ab\u0005\u001a\u000e\u0002",
    "\u01aa\u01a9\u0003\u0002\u0002\u0002\u01ab\u01ac\u0003\u0002\u0002\u0002",
    "\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ac\u01ad\u0003\u0002\u0002\u0002",
    "\u01ad\u0019\u0003\u0002\u0002\u0002\u01ae\u01b0\u0007\u001e\u0002\u0002",
    "\u01af\u01ae\u0003\u0002\u0002\u0002\u01af\u01b0\u0003\u0002\u0002\u0002",
    "\u01b0\u01b1\u0003\u0002\u0002\u0002\u01b1\u01b3\u0007\u0006\u0002\u0002",
    "\u01b2\u01b4\u0007\u001e\u0002\u0002\u01b3\u01b2\u0003\u0002\u0002\u0002",
    "\u01b3\u01b4\u0003\u0002\u0002\u0002\u01b4\u01b5\u0003\u0002\u0002\u0002",
    "\u01b5\u01b7\u0005\u0004\u0003\u0002\u01b6\u01b8\u0007\u001e\u0002\u0002",
    "\u01b7\u01b6\u0003\u0002\u0002\u0002\u01b7\u01b8\u0003\u0002\u0002\u0002",
    "\u01b8\u01b9\u0003\u0002\u0002\u0002\u01b9\u01bb\u0007(\u0002\u0002",
    "\u01ba\u01bc\u0007\u001e\u0002\u0002\u01bb\u01ba\u0003\u0002\u0002\u0002",
    "\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bc\u01bd\u0003\u0002\u0002\u0002",
    "\u01bd\u01bf\u0005\u0004\u0003\u0002\u01be\u01c0\u0007\u001e\u0002\u0002",
    "\u01bf\u01be\u0003\u0002\u0002\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002",
    "\u01c0\u001b\u0003\u0002\u0002\u0002\u01c1\u01c3\u0007\u001e\u0002\u0002",
    "\u01c2\u01c1\u0003\u0002\u0002\u0002\u01c2\u01c3\u0003\u0002\u0002\u0002",
    "\u01c3\u01c4\u0003\u0002\u0002\u0002\u01c4\u01c9\u0005\u0006\u0004\u0002",
    "\u01c5\u01c6\u0007\u001e\u0002\u0002\u01c6\u01c8\u0005\u0006\u0004\u0002",
    "\u01c7\u01c5\u0003\u0002\u0002\u0002\u01c8\u01cb\u0003\u0002\u0002\u0002",
    "\u01c9\u01c7\u0003\u0002\u0002\u0002\u01c9\u01ca\u0003\u0002\u0002\u0002",
    "\u01ca\u001d\u0003\u0002\u0002\u0002\u01cb\u01c9\u0003\u0002\u0002\u0002",
    "\u01cc\u01cd\u0007*\u0002\u0002\u01cd\u01cf\u0007\u001e\u0002\u0002",
    "\u01ce\u01d0\u0007,\u0002\u0002\u01cf\u01ce\u0003\u0002\u0002\u0002",
    "\u01cf\u01d0\u0003\u0002\u0002\u0002\u01d0\u01d2\u0003\u0002\u0002\u0002",
    "\u01d1\u01d3\u0007\u001e\u0002\u0002\u01d2\u01d1\u0003\u0002\u0002\u0002",
    "\u01d2\u01d3\u0003\u0002\u0002\u0002\u01d3\u01d4\u0003\u0002\u0002\u0002",
    "\u01d4\u01d5\u0005\u001c\u000f\u0002\u01d5\u01d6\u0007\u0015\u0002\u0002",
    "\u01d6\u01d7\u0005\u0004\u0003\u0002\u01d7\u001f\u0003\u0002\u0002\u0002",
    "`(-148;?BFIMRZaejnsw|\u0080\u0085\u0089\u008e\u0092\u0097\u009b\u00a0",
    "\u00a4\u00a9\u00ad\u00b2\u00b6\u00bb\u00bf\u00c4\u00c8\u00cd\u00d1\u00d6",
    "\u00da\u00df\u00e3\u00e8\u00ec\u00f1\u00f5\u00fa\u00fe\u0103\u0107\u010c",
    "\u0110\u0115\u0119\u011e\u0122\u0127\u012b\u012f\u0133\u0138\u013b\u013d",
    "\u0141\u0145\u014a\u014e\u0152\u0156\u0159\u015f\u0163\u0167\u016a\u0178",
    "\u017d\u0180\u0184\u0188\u018e\u0196\u019a\u01a1\u01ac\u01af\u01b3\u01b7",
    "\u01bb\u01bf\u01c2\u01c9\u01cf\u01d2"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class MiniOCamlParser extends antlr4.Parser {

    static grammarFileName = "MiniOCaml.g4";
    static literalNames = [ null, "'::'", "'('", "')'", "'|'", "'**'", "'*'", 
                            "'/'", "'+'", "'-'", "'mod'", "'+.'", "'-.'", 
                            "'*.'", "'/.'", "'<'", "'<='", "'>'", "'>='", 
                            "'='", "'<>'", "'=='", "'!='", "'^'", "'&&'", 
                            "'||'", "'not'", null, null, null, null, null, 
                            null, null, "'if'", "'then'", "'else'", "'fun'", 
                            "'->'", "'|>'", "'let'", "'in'", "'rec'", "'['", 
                            "']'", "';'", "'match'", "'with'" ];
    static symbolicNames = [ null, null, null, null, null, "POW", "MUL", 
                             "DIV", "ADD", "SUB", "MOD", "ADDFLOAT", "SUBFLOAT", 
                             "MULFLOAT", "DIVFLOAT", "LESSTHAN", "LESSTHANOREQUAL", 
                             "GREATERTHAN", "GREATERTHANOREQUAL", "EQUALSTRUC", 
                             "NOTEQUALSTRUC", "EQUALPHYS", "NOTEQUALPHYS", 
                             "CONCAT", "AND", "OR", "NOT", "NUMBER", "WS", 
                             "TOSKIP", "CHAR", "STRING", "FLOAT", "BOOLEAN", 
                             "IF", "THEN", "ELSE", "FUN", "ARROW", "PIPE", 
                             "LET", "IN", "REC", "LISTSTART", "LISTEND", 
                             "SEMICOLON", "MATCH", "WITH", "IDENTIFIER" ];
    static ruleNames = [ "start", "expression", "identifier", "arrowFunctionBody", 
                         "parenthesesExpression", "arrowFunction", "condExp", 
                         "letGlobalBinding", "letLocalBinding", "listElement", 
                         "listContent", "patternMatching", "patternBranch", 
                         "identifierList", "functionDeclaration" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniOCamlParser.ruleNames;
        this.literalNames = MiniOCamlParser.literalNames;
        this.symbolicNames = MiniOCamlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 37);
    		case 1:
    			return this.precpred(this._ctx, 36);
    		case 2:
    			return this.precpred(this._ctx, 28);
    		case 3:
    			return this.precpred(this._ctx, 27);
    		case 4:
    			return this.precpred(this._ctx, 26);
    		case 5:
    			return this.precpred(this._ctx, 25);
    		case 6:
    			return this.precpred(this._ctx, 24);
    		case 7:
    			return this.precpred(this._ctx, 23);
    		case 8:
    			return this.precpred(this._ctx, 22);
    		case 9:
    			return this.precpred(this._ctx, 21);
    		case 10:
    			return this.precpred(this._ctx, 20);
    		case 11:
    			return this.precpred(this._ctx, 19);
    		case 12:
    			return this.precpred(this._ctx, 18);
    		case 13:
    			return this.precpred(this._ctx, 17);
    		case 14:
    			return this.precpred(this._ctx, 16);
    		case 15:
    			return this.precpred(this._ctx, 15);
    		case 16:
    			return this.precpred(this._ctx, 14);
    		case 17:
    			return this.precpred(this._ctx, 13);
    		case 18:
    			return this.precpred(this._ctx, 12);
    		case 19:
    			return this.precpred(this._ctx, 11);
    		case 20:
    			return this.precpred(this._ctx, 10);
    		case 21:
    			return this.precpred(this._ctx, 8);
    		case 22:
    			return this.precpred(this._ctx, 7);
    		case 23:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniOCamlParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, MiniOCamlParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PatternMatchingExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 33;
	            this.patternMatching();
	            break;

	        case 2:
	            localctx = new ArrowFunctionExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 34;
	            this.arrowFunction();
	            break;

	        case 3:
	            localctx = new ListDeclarationContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 35;
	            this.match(MiniOCamlParser.LISTSTART);
	            this.state = 36;
	            this.listContent();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MiniOCamlParser.WS) {
	                this.state = 37;
	                this.match(MiniOCamlParser.WS);
	            }

	            this.state = 40;
	            this.match(MiniOCamlParser.LISTEND);
	            break;

	        case 4:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MiniOCamlParser.WS) {
	                this.state = 42;
	                this.match(MiniOCamlParser.WS);
	            }

	            this.state = 45;
	            this.match(MiniOCamlParser.NUMBER);
	            this.state = 47;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 46;
	                this.match(MiniOCamlParser.WS);

	            }
	            break;

	        case 5:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MiniOCamlParser.WS) {
	                this.state = 49;
	                this.match(MiniOCamlParser.WS);
	            }

	            this.state = 52;
	            this.match(MiniOCamlParser.FLOAT);
	            this.state = 54;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 53;
	                this.match(MiniOCamlParser.WS);

	            }
	            break;

	        case 6:
	            localctx = new BooleanContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MiniOCamlParser.WS) {
	                this.state = 56;
	                this.match(MiniOCamlParser.WS);
	            }

	            this.state = 59;
	            this.match(MiniOCamlParser.BOOLEAN);
	            this.state = 61;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 60;
	                this.match(MiniOCamlParser.WS);

	            }
	            break;

	        case 7:
	            localctx = new CharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MiniOCamlParser.WS) {
	                this.state = 63;
	                this.match(MiniOCamlParser.WS);
	            }

	            this.state = 66;
	            this.match(MiniOCamlParser.CHAR);
	            this.state = 68;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 67;
	                this.match(MiniOCamlParser.WS);

	            }
	            break;

	        case 8:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===MiniOCamlParser.WS) {
	                this.state = 70;
	                this.match(MiniOCamlParser.WS);
	            }

	            this.state = 73;
	            this.match(MiniOCamlParser.STRING);
	            this.state = 75;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            if(la_===1) {
	                this.state = 74;
	                this.match(MiniOCamlParser.WS);

	            }
	            break;

	        case 9:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 77;
	            this.parenthesesExpression();
	            break;

	        case 10:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 78;
	            localctx.operator = this.match(MiniOCamlParser.NOT);
	            this.state = 80;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	            if(la_===1) {
	                this.state = 79;
	                this.match(MiniOCamlParser.WS);

	            }
	            this.state = 82;
	            localctx.argument = this.expression(9);
	            break;

	        case 11:
	            localctx = new LetLocalBindingExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 83;
	            this.letLocalBinding();
	            break;

	        case 12:
	            localctx = new LetGlobalBindingExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 84;
	            this.letGlobalBinding();
	            break;

	        case 13:
	            localctx = new FunctionDeclarationExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 85;
	            this.functionDeclaration();
	            break;

	        case 14:
	            localctx = new ConditionalExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 86;
	            this.condExp();
	            break;

	        case 15:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 87;
	            this.identifier();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 315;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,63,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 313;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new CallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.caller = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 90;
	                    if (!( this.precpred(this._ctx, 37))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 37)");
	                    }
	                    this.state = 91;
	                    this.match(MiniOCamlParser.WS);
	                    this.state = 92;
	                    localctx.arg = this.expression(38);
	                    break;

	                case 2:
	                    localctx = new PipedCallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.arg = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 93;
	                    if (!( this.precpred(this._ctx, 36))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 36)");
	                    }
	                    this.state = 95;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 94;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 97;
	                    this.match(MiniOCamlParser.PIPE);
	                    this.state = 99;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                    if(la_===1) {
	                        this.state = 98;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 101;
	                    localctx.caller = this.expression(37);
	                    break;

	                case 3:
	                    localctx = new PowerContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 102;
	                    if (!( this.precpred(this._ctx, 28))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
	                    }
	                    this.state = 104;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 103;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 106;
	                    localctx.operator = this.match(MiniOCamlParser.POW);
	                    this.state = 108;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                    if(la_===1) {
	                        this.state = 107;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 110;
	                    localctx.right = this.expression(28);
	                    break;

	                case 4:
	                    localctx = new MultiplicationContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 27))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
	                    }
	                    this.state = 113;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 112;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 115;
	                    localctx.operator = this.match(MiniOCamlParser.MUL);
	                    this.state = 117;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                    if(la_===1) {
	                        this.state = 116;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 119;
	                    localctx.right = this.expression(28);
	                    break;

	                case 5:
	                    localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 120;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 122;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 121;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 124;
	                    localctx.operator = this.match(MiniOCamlParser.DIV);
	                    this.state = 126;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                    if(la_===1) {
	                        this.state = 125;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 128;
	                    localctx.right = this.expression(27);
	                    break;

	                case 6:
	                    localctx = new MultiplicationFloatContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 129;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 131;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 130;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 133;
	                    localctx.operator = this.match(MiniOCamlParser.MULFLOAT);
	                    this.state = 135;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                    if(la_===1) {
	                        this.state = 134;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 137;
	                    localctx.right = this.expression(26);
	                    break;

	                case 7:
	                    localctx = new DivisionFloatContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 138;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 140;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 139;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 142;
	                    localctx.operator = this.match(MiniOCamlParser.DIVFLOAT);
	                    this.state = 144;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	                    if(la_===1) {
	                        this.state = 143;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 146;
	                    localctx.right = this.expression(25);
	                    break;

	                case 8:
	                    localctx = new ModulusContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 147;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 149;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 148;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 151;
	                    localctx.operator = this.match(MiniOCamlParser.MOD);
	                    this.state = 153;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	                    if(la_===1) {
	                        this.state = 152;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 155;
	                    localctx.right = this.expression(24);
	                    break;

	                case 9:
	                    localctx = new AdditionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 156;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 158;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 157;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 160;
	                    localctx.operator = this.match(MiniOCamlParser.ADD);
	                    this.state = 162;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	                    if(la_===1) {
	                        this.state = 161;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 164;
	                    localctx.right = this.expression(23);
	                    break;

	                case 10:
	                    localctx = new SubtractionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 165;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 167;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 166;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 169;
	                    localctx.operator = this.match(MiniOCamlParser.SUB);
	                    this.state = 171;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	                    if(la_===1) {
	                        this.state = 170;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 173;
	                    localctx.right = this.expression(22);
	                    break;

	                case 11:
	                    localctx = new AdditionFloatContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 174;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 176;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 175;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 178;
	                    localctx.operator = this.match(MiniOCamlParser.ADDFLOAT);
	                    this.state = 180;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	                    if(la_===1) {
	                        this.state = 179;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 182;
	                    localctx.right = this.expression(21);
	                    break;

	                case 12:
	                    localctx = new SubtractionFloatContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 183;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 185;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 184;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 187;
	                    localctx.operator = this.match(MiniOCamlParser.SUBFLOAT);
	                    this.state = 189;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	                    if(la_===1) {
	                        this.state = 188;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 191;
	                    localctx.right = this.expression(20);
	                    break;

	                case 13:
	                    localctx = new LessThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 192;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 194;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 193;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 196;
	                    localctx.operator = this.match(MiniOCamlParser.LESSTHAN);
	                    this.state = 198;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	                    if(la_===1) {
	                        this.state = 197;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 200;
	                    localctx.right = this.expression(19);
	                    break;

	                case 14:
	                    localctx = new LessThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 201;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 203;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 202;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 205;
	                    localctx.operator = this.match(MiniOCamlParser.LESSTHANOREQUAL);
	                    this.state = 207;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	                    if(la_===1) {
	                        this.state = 206;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 209;
	                    localctx.right = this.expression(18);
	                    break;

	                case 15:
	                    localctx = new GreaterThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 210;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 212;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 211;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 214;
	                    localctx.operator = this.match(MiniOCamlParser.GREATERTHAN);
	                    this.state = 216;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	                    if(la_===1) {
	                        this.state = 215;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 218;
	                    localctx.right = this.expression(17);
	                    break;

	                case 16:
	                    localctx = new GreaterThanOrEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 219;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 221;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 220;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 223;
	                    localctx.operator = this.match(MiniOCamlParser.GREATERTHANOREQUAL);
	                    this.state = 225;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	                    if(la_===1) {
	                        this.state = 224;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 227;
	                    localctx.right = this.expression(16);
	                    break;

	                case 17:
	                    localctx = new EqualStructuralContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 228;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 230;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 229;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 232;
	                    localctx.operator = this.match(MiniOCamlParser.EQUALSTRUC);
	                    this.state = 234;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	                    if(la_===1) {
	                        this.state = 233;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 236;
	                    localctx.right = this.expression(15);
	                    break;

	                case 18:
	                    localctx = new NotEqualStructuralContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 237;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 239;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 238;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 241;
	                    localctx.operator = this.match(MiniOCamlParser.NOTEQUALSTRUC);
	                    this.state = 243;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	                    if(la_===1) {
	                        this.state = 242;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 245;
	                    localctx.right = this.expression(14);
	                    break;

	                case 19:
	                    localctx = new EqualPhysicalContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 248;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 247;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 250;
	                    localctx.operator = this.match(MiniOCamlParser.EQUALPHYS);
	                    this.state = 252;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	                    if(la_===1) {
	                        this.state = 251;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 254;
	                    localctx.right = this.expression(13);
	                    break;

	                case 20:
	                    localctx = new NotEqualPhysicalContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 255;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 257;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 256;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 259;
	                    localctx.operator = this.match(MiniOCamlParser.NOTEQUALPHYS);
	                    this.state = 261;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	                    if(la_===1) {
	                        this.state = 260;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 263;
	                    localctx.right = this.expression(12);
	                    break;

	                case 21:
	                    localctx = new ConcatenationContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 264;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 266;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 265;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 268;
	                    localctx.operator = this.match(MiniOCamlParser.CONCAT);
	                    this.state = 270;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	                    if(la_===1) {
	                        this.state = 269;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 272;
	                    localctx.right = this.expression(11);
	                    break;

	                case 22:
	                    localctx = new AndContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 273;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 275;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 274;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 277;
	                    localctx.operator = this.match(MiniOCamlParser.AND);
	                    this.state = 279;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	                    if(la_===1) {
	                        this.state = 278;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 281;
	                    localctx.right = this.expression(9);
	                    break;

	                case 23:
	                    localctx = new OrContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 282;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 284;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 283;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 286;
	                    localctx.operator = this.match(MiniOCamlParser.OR);
	                    this.state = 288;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	                    if(la_===1) {
	                        this.state = 287;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 290;
	                    localctx.right = this.expression(8);
	                    break;

	                case 24:
	                    localctx = new DeconstructionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniOCamlParser.RULE_expression);
	                    this.state = 291;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 293;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===MiniOCamlParser.WS) {
	                        this.state = 292;
	                        this.match(MiniOCamlParser.WS);
	                    }

	                    this.state = 295;
	                    this.match(MiniOCamlParser.T__0);
	                    this.state = 297;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	                    if(la_===1) {
	                        this.state = 296;
	                        this.match(MiniOCamlParser.WS);

	                    }
	                    this.state = 299;
	                    this.expression(0);
	                    this.state = 310;
	                    this._errHandler.sync(this);
	                    let _alt = this._interp.adaptivePredict(this._input,61,this._ctx)
	                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                        if(_alt===1) {
	                            this.state = 301;
	                            this._errHandler.sync(this);
	                            _la = this._input.LA(1);
	                            if(_la===MiniOCamlParser.WS) {
	                                this.state = 300;
	                                this.match(MiniOCamlParser.WS);
	                            }

	                            this.state = 303;
	                            this.match(MiniOCamlParser.T__0);
	                            this.state = 305;
	                            this._errHandler.sync(this);
	                            var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	                            if(la_===1) {
	                                this.state = 304;
	                                this.match(MiniOCamlParser.WS);

	                            }
	                            this.state = 307;
	                            this.expression(0); 
	                        }
	                        this.state = 312;
	                        this._errHandler.sync(this);
	                        _alt = this._interp.adaptivePredict(this._input,61,this._ctx);
	                    }

	                    break;

	                } 
	            }
	            this.state = 317;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,63,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniOCamlParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 318;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 321;
	        this.match(MiniOCamlParser.IDENTIFIER);
	        this.state = 323;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
	        if(la_===1) {
	            this.state = 322;
	            this.match(MiniOCamlParser.WS);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrowFunctionBody() {
	    let localctx = new ArrowFunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniOCamlParser.RULE_arrowFunctionBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parenthesesExpression() {
	    let localctx = new ParenthesesExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniOCamlParser.RULE_parenthesesExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 327;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 330;
	        this.match(MiniOCamlParser.T__1);
	        this.state = 332;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	        if(la_===1) {
	            this.state = 331;
	            this.match(MiniOCamlParser.WS);

	        }
	        this.state = 334;
	        localctx.inner = this.expression(0);
	        this.state = 336;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 335;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 338;
	        this.match(MiniOCamlParser.T__2);
	        this.state = 340;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,69,this._ctx);
	        if(la_===1) {
	            this.state = 339;
	            this.match(MiniOCamlParser.WS);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrowFunction() {
	    let localctx = new ArrowFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniOCamlParser.RULE_arrowFunction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 342;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 345;
	        this.match(MiniOCamlParser.FUN);
	        this.state = 346;
	        this.match(MiniOCamlParser.WS);
	        this.state = 347;
	        localctx.param = this.identifier();
	        this.state = 349;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 348;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 351;
	        this.match(MiniOCamlParser.ARROW);
	        this.state = 353;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
	        if(la_===1) {
	            this.state = 352;
	            this.match(MiniOCamlParser.WS);

	        }
	        this.state = 355;
	        localctx.body = this.arrowFunctionBody();
	        this.state = 357;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,73,this._ctx);
	        if(la_===1) {
	            this.state = 356;
	            this.match(MiniOCamlParser.WS);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condExp() {
	    let localctx = new CondExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniOCamlParser.RULE_condExp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 359;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 362;
	        this.match(MiniOCamlParser.IF);
	        this.state = 363;
	        this.match(MiniOCamlParser.WS);
	        this.state = 364;
	        localctx.test = this.expression(0);
	        this.state = 365;
	        this.match(MiniOCamlParser.WS);
	        this.state = 366;
	        this.match(MiniOCamlParser.THEN);
	        this.state = 367;
	        this.match(MiniOCamlParser.WS);
	        this.state = 368;
	        localctx.consequent = this.expression(0);
	        this.state = 369;
	        this.match(MiniOCamlParser.WS);
	        this.state = 370;
	        this.match(MiniOCamlParser.ELSE);
	        this.state = 371;
	        this.match(MiniOCamlParser.WS);
	        this.state = 372;
	        localctx.alternate = this.expression(0);
	        this.state = 374;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,75,this._ctx);
	        if(la_===1) {
	            this.state = 373;
	            this.match(MiniOCamlParser.WS);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letGlobalBinding() {
	    let localctx = new LetGlobalBindingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniOCamlParser.RULE_letGlobalBinding);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(MiniOCamlParser.LET);
	        this.state = 377;
	        this.match(MiniOCamlParser.WS);
	        this.state = 379;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.REC) {
	            this.state = 378;
	            this.match(MiniOCamlParser.REC);
	        }

	        this.state = 382;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,77,this._ctx);
	        if(la_===1) {
	            this.state = 381;
	            this.match(MiniOCamlParser.WS);

	        }
	        this.state = 384;
	        localctx.id = this.identifier();
	        this.state = 386;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 385;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 388;
	        this.match(MiniOCamlParser.EQUALSTRUC);
	        this.state = 390;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,79,this._ctx);
	        if(la_===1) {
	            this.state = 389;
	            this.match(MiniOCamlParser.WS);

	        }
	        this.state = 392;
	        localctx.init = this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letLocalBinding() {
	    let localctx = new LetLocalBindingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiniOCamlParser.RULE_letLocalBinding);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,80,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 394;
	            this.letGlobalBinding();
	            break;

	        case 2:
	            this.state = 395;
	            this.functionDeclaration();
	            break;

	        }
	        this.state = 398;
	        this.match(MiniOCamlParser.WS);
	        this.state = 399;
	        this.match(MiniOCamlParser.IN);
	        this.state = 400;
	        this.match(MiniOCamlParser.WS);
	        this.state = 401;
	        localctx.exp2 = this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listElement() {
	    let localctx = new ListElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiniOCamlParser.RULE_listElement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,81,this._ctx);
	        if(la_===1) {
	            this.state = 403;
	            this.match(MiniOCamlParser.WS);

	        }
	        this.state = 406;
	        localctx.value = this.expression(0);
	        this.state = 408;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 407;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 410;
	        this.match(MiniOCamlParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listContent() {
	    let localctx = new ListContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiniOCamlParser.RULE_listContent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,83,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 412;
	                this.listElement(); 
	            }
	            this.state = 417;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,83,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternMatching() {
	    let localctx = new PatternMatchingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiniOCamlParser.RULE_patternMatching);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(MiniOCamlParser.MATCH);
	        this.state = 419;
	        this.match(MiniOCamlParser.WS);
	        this.state = 420;
	        localctx.subject = this.expression(0);
	        this.state = 421;
	        this.match(MiniOCamlParser.WS);
	        this.state = 422;
	        this.match(MiniOCamlParser.WITH);
	        this.state = 424; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 423;
	        		this.patternBranch();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 426; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,84, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternBranch() {
	    let localctx = new PatternBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MiniOCamlParser.RULE_patternBranch);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 428;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 431;
	        this.match(MiniOCamlParser.T__3);
	        this.state = 433;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,86,this._ctx);
	        if(la_===1) {
	            this.state = 432;
	            this.match(MiniOCamlParser.WS);

	        }
	        this.state = 435;
	        localctx.pattern = this.expression(0);
	        this.state = 437;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.WS) {
	            this.state = 436;
	            this.match(MiniOCamlParser.WS);
	        }

	        this.state = 439;
	        this.match(MiniOCamlParser.ARROW);
	        this.state = 441;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,88,this._ctx);
	        if(la_===1) {
	            this.state = 440;
	            this.match(MiniOCamlParser.WS);

	        }
	        this.state = 443;
	        localctx.result = this.expression(0);
	        this.state = 445;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,89,this._ctx);
	        if(la_===1) {
	            this.state = 444;
	            this.match(MiniOCamlParser.WS);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierList() {
	    let localctx = new IdentifierListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MiniOCamlParser.RULE_identifierList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,90,this._ctx);
	        if(la_===1) {
	            this.state = 447;
	            this.match(MiniOCamlParser.WS);

	        }
	        this.state = 450;
	        this.identifier();
	        this.state = 455;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MiniOCamlParser.WS) {
	            this.state = 451;
	            this.match(MiniOCamlParser.WS);
	            this.state = 452;
	            this.identifier();
	            this.state = 457;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MiniOCamlParser.RULE_functionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        this.match(MiniOCamlParser.LET);
	        this.state = 459;
	        this.match(MiniOCamlParser.WS);
	        this.state = 461;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===MiniOCamlParser.REC) {
	            this.state = 460;
	            this.match(MiniOCamlParser.REC);
	        }

	        this.state = 464;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,93,this._ctx);
	        if(la_===1) {
	            this.state = 463;
	            this.match(MiniOCamlParser.WS);

	        }
	        this.state = 466;
	        localctx.ids = this.identifierList();
	        this.state = 467;
	        this.match(MiniOCamlParser.EQUALSTRUC);
	        this.state = 468;
	        localctx.body = this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniOCamlParser.EOF = antlr4.Token.EOF;
MiniOCamlParser.T__0 = 1;
MiniOCamlParser.T__1 = 2;
MiniOCamlParser.T__2 = 3;
MiniOCamlParser.T__3 = 4;
MiniOCamlParser.POW = 5;
MiniOCamlParser.MUL = 6;
MiniOCamlParser.DIV = 7;
MiniOCamlParser.ADD = 8;
MiniOCamlParser.SUB = 9;
MiniOCamlParser.MOD = 10;
MiniOCamlParser.ADDFLOAT = 11;
MiniOCamlParser.SUBFLOAT = 12;
MiniOCamlParser.MULFLOAT = 13;
MiniOCamlParser.DIVFLOAT = 14;
MiniOCamlParser.LESSTHAN = 15;
MiniOCamlParser.LESSTHANOREQUAL = 16;
MiniOCamlParser.GREATERTHAN = 17;
MiniOCamlParser.GREATERTHANOREQUAL = 18;
MiniOCamlParser.EQUALSTRUC = 19;
MiniOCamlParser.NOTEQUALSTRUC = 20;
MiniOCamlParser.EQUALPHYS = 21;
MiniOCamlParser.NOTEQUALPHYS = 22;
MiniOCamlParser.CONCAT = 23;
MiniOCamlParser.AND = 24;
MiniOCamlParser.OR = 25;
MiniOCamlParser.NOT = 26;
MiniOCamlParser.NUMBER = 27;
MiniOCamlParser.WS = 28;
MiniOCamlParser.TOSKIP = 29;
MiniOCamlParser.CHAR = 30;
MiniOCamlParser.STRING = 31;
MiniOCamlParser.FLOAT = 32;
MiniOCamlParser.BOOLEAN = 33;
MiniOCamlParser.IF = 34;
MiniOCamlParser.THEN = 35;
MiniOCamlParser.ELSE = 36;
MiniOCamlParser.FUN = 37;
MiniOCamlParser.ARROW = 38;
MiniOCamlParser.PIPE = 39;
MiniOCamlParser.LET = 40;
MiniOCamlParser.IN = 41;
MiniOCamlParser.REC = 42;
MiniOCamlParser.LISTSTART = 43;
MiniOCamlParser.LISTEND = 44;
MiniOCamlParser.SEMICOLON = 45;
MiniOCamlParser.MATCH = 46;
MiniOCamlParser.WITH = 47;
MiniOCamlParser.IDENTIFIER = 48;

MiniOCamlParser.RULE_start = 0;
MiniOCamlParser.RULE_expression = 1;
MiniOCamlParser.RULE_identifier = 2;
MiniOCamlParser.RULE_arrowFunctionBody = 3;
MiniOCamlParser.RULE_parenthesesExpression = 4;
MiniOCamlParser.RULE_arrowFunction = 5;
MiniOCamlParser.RULE_condExp = 6;
MiniOCamlParser.RULE_letGlobalBinding = 7;
MiniOCamlParser.RULE_letLocalBinding = 8;
MiniOCamlParser.RULE_listElement = 9;
MiniOCamlParser.RULE_listContent = 10;
MiniOCamlParser.RULE_patternMatching = 11;
MiniOCamlParser.RULE_patternBranch = 12;
MiniOCamlParser.RULE_identifierList = 13;
MiniOCamlParser.RULE_functionDeclaration = 14;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_start;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitStart(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EqualStructuralContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	EQUALSTRUC() {
	    return this.getToken(MiniOCamlParser.EQUALSTRUC, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterEqualStructural(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitEqualStructural(this);
		}
	}


}

MiniOCamlParser.EqualStructuralContext = EqualStructuralContext;

class MultiplicationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MUL() {
	    return this.getToken(MiniOCamlParser.MUL, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterMultiplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitMultiplication(this);
		}
	}


}

MiniOCamlParser.MultiplicationContext = MultiplicationContext;

class OrContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OR() {
	    return this.getToken(MiniOCamlParser.OR, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitOr(this);
		}
	}


}

MiniOCamlParser.OrContext = OrContext;

class LessThanOrEqualContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	LESSTHANOREQUAL() {
	    return this.getToken(MiniOCamlParser.LESSTHANOREQUAL, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterLessThanOrEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitLessThanOrEqual(this);
		}
	}


}

MiniOCamlParser.LessThanOrEqualContext = LessThanOrEqualContext;

class MultiplicationFloatContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MULFLOAT() {
	    return this.getToken(MiniOCamlParser.MULFLOAT, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterMultiplicationFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitMultiplicationFloat(this);
		}
	}


}

MiniOCamlParser.MultiplicationFloatContext = MultiplicationFloatContext;

class StringContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(MiniOCamlParser.STRING, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitString(this);
		}
	}


}

MiniOCamlParser.StringContext = StringContext;

class GreaterThanOrEqualContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	GREATERTHANOREQUAL() {
	    return this.getToken(MiniOCamlParser.GREATERTHANOREQUAL, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterGreaterThanOrEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitGreaterThanOrEqual(this);
		}
	}


}

MiniOCamlParser.GreaterThanOrEqualContext = GreaterThanOrEqualContext;

class LessThanContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	LESSTHAN() {
	    return this.getToken(MiniOCamlParser.LESSTHAN, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterLessThan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitLessThan(this);
		}
	}


}

MiniOCamlParser.LessThanContext = LessThanContext;

class EqualPhysicalContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	EQUALPHYS() {
	    return this.getToken(MiniOCamlParser.EQUALPHYS, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterEqualPhysical(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitEqualPhysical(this);
		}
	}


}

MiniOCamlParser.EqualPhysicalContext = EqualPhysicalContext;

class NumberContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(MiniOCamlParser.NUMBER, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitNumber(this);
		}
	}


}

MiniOCamlParser.NumberContext = NumberContext;

class PatternMatchingExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	patternMatching() {
	    return this.getTypedRuleContext(PatternMatchingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterPatternMatchingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitPatternMatchingExpression(this);
		}
	}


}

MiniOCamlParser.PatternMatchingExpressionContext = PatternMatchingExpressionContext;

class GreaterThanContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	GREATERTHAN() {
	    return this.getToken(MiniOCamlParser.GREATERTHAN, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterGreaterThan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitGreaterThan(this);
		}
	}


}

MiniOCamlParser.GreaterThanContext = GreaterThanContext;

class NotEqualPhysicalContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	NOTEQUALPHYS() {
	    return this.getToken(MiniOCamlParser.NOTEQUALPHYS, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterNotEqualPhysical(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitNotEqualPhysical(this);
		}
	}


}

MiniOCamlParser.NotEqualPhysicalContext = NotEqualPhysicalContext;

class CharContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR() {
	    return this.getToken(MiniOCamlParser.CHAR, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitChar(this);
		}
	}


}

MiniOCamlParser.CharContext = CharContext;

class DeconstructionExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterDeconstructionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitDeconstructionExpression(this);
		}
	}


}

MiniOCamlParser.DeconstructionExpressionContext = DeconstructionExpressionContext;

class DivisionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	DIV() {
	    return this.getToken(MiniOCamlParser.DIV, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterDivision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitDivision(this);
		}
	}


}

MiniOCamlParser.DivisionContext = DivisionContext;

class ArrowFunctionExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arrowFunction() {
	    return this.getTypedRuleContext(ArrowFunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterArrowFunctionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitArrowFunctionExpression(this);
		}
	}


}

MiniOCamlParser.ArrowFunctionExpressionContext = ArrowFunctionExpressionContext;

class BooleanContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEAN() {
	    return this.getToken(MiniOCamlParser.BOOLEAN, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterBoolean(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitBoolean(this);
		}
	}


}

MiniOCamlParser.BooleanContext = BooleanContext;

class LetGlobalBindingExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	letGlobalBinding() {
	    return this.getTypedRuleContext(LetGlobalBindingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterLetGlobalBindingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitLetGlobalBindingExpression(this);
		}
	}


}

MiniOCamlParser.LetGlobalBindingExpressionContext = LetGlobalBindingExpressionContext;

class CallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.caller = null; // ExpressionContext;
        this.arg = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	WS() {
	    return this.getToken(MiniOCamlParser.WS, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitCallExpression(this);
		}
	}


}

MiniOCamlParser.CallExpressionContext = CallExpressionContext;

class ParenthesesContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	parenthesesExpression() {
	    return this.getTypedRuleContext(ParenthesesExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterParentheses(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitParentheses(this);
		}
	}


}

MiniOCamlParser.ParenthesesContext = ParenthesesContext;

class SubtractionFloatContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	SUBFLOAT() {
	    return this.getToken(MiniOCamlParser.SUBFLOAT, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterSubtractionFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitSubtractionFloat(this);
		}
	}


}

MiniOCamlParser.SubtractionFloatContext = SubtractionFloatContext;

class PipedCallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.arg = null; // ExpressionContext;
        this.caller = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	PIPE() {
	    return this.getToken(MiniOCamlParser.PIPE, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterPipedCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitPipedCallExpression(this);
		}
	}


}

MiniOCamlParser.PipedCallExpressionContext = PipedCallExpressionContext;

class AdditionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(MiniOCamlParser.ADD, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterAddition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitAddition(this);
		}
	}


}

MiniOCamlParser.AdditionContext = AdditionContext;

class ConditionalExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	condExp() {
	    return this.getTypedRuleContext(CondExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterConditionalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitConditionalExpression(this);
		}
	}


}

MiniOCamlParser.ConditionalExpressionContext = ConditionalExpressionContext;

class ListDeclarationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LISTSTART() {
	    return this.getToken(MiniOCamlParser.LISTSTART, 0);
	};

	listContent() {
	    return this.getTypedRuleContext(ListContentContext,0);
	};

	LISTEND() {
	    return this.getToken(MiniOCamlParser.LISTEND, 0);
	};

	WS() {
	    return this.getToken(MiniOCamlParser.WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterListDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitListDeclaration(this);
		}
	}


}

MiniOCamlParser.ListDeclarationContext = ListDeclarationContext;

class DivisionFloatContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	DIVFLOAT() {
	    return this.getToken(MiniOCamlParser.DIVFLOAT, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterDivisionFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitDivisionFloat(this);
		}
	}


}

MiniOCamlParser.DivisionFloatContext = DivisionFloatContext;

class FunctionDeclarationExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterFunctionDeclarationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitFunctionDeclarationExpression(this);
		}
	}


}

MiniOCamlParser.FunctionDeclarationExpressionContext = FunctionDeclarationExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}


}

MiniOCamlParser.IdentifierExpressionContext = IdentifierExpressionContext;

class FloatContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(MiniOCamlParser.FLOAT, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitFloat(this);
		}
	}


}

MiniOCamlParser.FloatContext = FloatContext;

class NotContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null; // Token;
        this.argument = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(MiniOCamlParser.NOT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	WS() {
	    return this.getToken(MiniOCamlParser.WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitNot(this);
		}
	}


}

MiniOCamlParser.NotContext = NotContext;

class AdditionFloatContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADDFLOAT() {
	    return this.getToken(MiniOCamlParser.ADDFLOAT, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterAdditionFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitAdditionFloat(this);
		}
	}


}

MiniOCamlParser.AdditionFloatContext = AdditionFloatContext;

class SubtractionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	SUB() {
	    return this.getToken(MiniOCamlParser.SUB, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterSubtraction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitSubtraction(this);
		}
	}


}

MiniOCamlParser.SubtractionContext = SubtractionContext;

class ConcatenationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	CONCAT() {
	    return this.getToken(MiniOCamlParser.CONCAT, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterConcatenation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitConcatenation(this);
		}
	}


}

MiniOCamlParser.ConcatenationContext = ConcatenationContext;

class ModulusContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MOD() {
	    return this.getToken(MiniOCamlParser.MOD, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterModulus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitModulus(this);
		}
	}


}

MiniOCamlParser.ModulusContext = ModulusContext;

class AndContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	AND() {
	    return this.getToken(MiniOCamlParser.AND, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitAnd(this);
		}
	}


}

MiniOCamlParser.AndContext = AndContext;

class LetLocalBindingExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	letLocalBinding() {
	    return this.getTypedRuleContext(LetLocalBindingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterLetLocalBindingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitLetLocalBindingExpression(this);
		}
	}


}

MiniOCamlParser.LetLocalBindingExpressionContext = LetLocalBindingExpressionContext;

class NotEqualStructuralContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	NOTEQUALSTRUC() {
	    return this.getToken(MiniOCamlParser.NOTEQUALSTRUC, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterNotEqualStructural(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitNotEqualStructural(this);
		}
	}


}

MiniOCamlParser.NotEqualStructuralContext = NotEqualStructuralContext;

class PowerContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.operator = null; // Token;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	POW() {
	    return this.getToken(MiniOCamlParser.POW, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterPower(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitPower(this);
		}
	}


}

MiniOCamlParser.PowerContext = PowerContext;

class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(MiniOCamlParser.IDENTIFIER, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class ArrowFunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_arrowFunctionBody;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterArrowFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitArrowFunctionBody(this);
		}
	}


}



class ParenthesesExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_parenthesesExpression;
        this.inner = null; // ExpressionContext
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterParenthesesExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitParenthesesExpression(this);
		}
	}


}



class ArrowFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_arrowFunction;
        this.param = null; // IdentifierContext
        this.body = null; // ArrowFunctionBodyContext
    }

	FUN() {
	    return this.getToken(MiniOCamlParser.FUN, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	ARROW() {
	    return this.getToken(MiniOCamlParser.ARROW, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	arrowFunctionBody() {
	    return this.getTypedRuleContext(ArrowFunctionBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterArrowFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitArrowFunction(this);
		}
	}


}



class CondExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_condExp;
        this.test = null; // ExpressionContext
        this.consequent = null; // ExpressionContext
        this.alternate = null; // ExpressionContext
    }

	IF() {
	    return this.getToken(MiniOCamlParser.IF, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	THEN() {
	    return this.getToken(MiniOCamlParser.THEN, 0);
	};

	ELSE() {
	    return this.getToken(MiniOCamlParser.ELSE, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterCondExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitCondExp(this);
		}
	}


}



class LetGlobalBindingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_letGlobalBinding;
        this.id = null; // IdentifierContext
        this.init = null; // ExpressionContext
    }

	LET() {
	    return this.getToken(MiniOCamlParser.LET, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	EQUALSTRUC() {
	    return this.getToken(MiniOCamlParser.EQUALSTRUC, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	REC() {
	    return this.getToken(MiniOCamlParser.REC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterLetGlobalBinding(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitLetGlobalBinding(this);
		}
	}


}



class LetLocalBindingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_letLocalBinding;
        this.exp2 = null; // ExpressionContext
    }

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	IN() {
	    return this.getToken(MiniOCamlParser.IN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	letGlobalBinding() {
	    return this.getTypedRuleContext(LetGlobalBindingContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterLetLocalBinding(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitLetLocalBinding(this);
		}
	}


}



class ListElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_listElement;
        this.value = null; // ExpressionContext
    }

	SEMICOLON() {
	    return this.getToken(MiniOCamlParser.SEMICOLON, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterListElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitListElement(this);
		}
	}


}



class ListContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_listContent;
    }

	listElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListElementContext);
	    } else {
	        return this.getTypedRuleContext(ListElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterListContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitListContent(this);
		}
	}


}



class PatternMatchingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_patternMatching;
        this.subject = null; // ExpressionContext
    }

	MATCH() {
	    return this.getToken(MiniOCamlParser.MATCH, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	WITH() {
	    return this.getToken(MiniOCamlParser.WITH, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	patternBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternBranchContext);
	    } else {
	        return this.getTypedRuleContext(PatternBranchContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterPatternMatching(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitPatternMatching(this);
		}
	}


}



class PatternBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_patternBranch;
        this.pattern = null; // ExpressionContext
        this.result = null; // ExpressionContext
    }

	ARROW() {
	    return this.getToken(MiniOCamlParser.ARROW, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterPatternBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitPatternBranch(this);
		}
	}


}



class IdentifierListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_identifierList;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterIdentifierList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitIdentifierList(this);
		}
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniOCamlParser.RULE_functionDeclaration;
        this.ids = null; // IdentifierListContext
        this.body = null; // ExpressionContext
    }

	LET() {
	    return this.getToken(MiniOCamlParser.LET, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniOCamlParser.WS);
	    } else {
	        return this.getToken(MiniOCamlParser.WS, i);
	    }
	};


	EQUALSTRUC() {
	    return this.getToken(MiniOCamlParser.EQUALSTRUC, 0);
	};

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	REC() {
	    return this.getToken(MiniOCamlParser.REC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniOCamlListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}


}




MiniOCamlParser.StartContext = StartContext; 
MiniOCamlParser.ExpressionContext = ExpressionContext; 
MiniOCamlParser.IdentifierContext = IdentifierContext; 
MiniOCamlParser.ArrowFunctionBodyContext = ArrowFunctionBodyContext; 
MiniOCamlParser.ParenthesesExpressionContext = ParenthesesExpressionContext; 
MiniOCamlParser.ArrowFunctionContext = ArrowFunctionContext; 
MiniOCamlParser.CondExpContext = CondExpContext; 
MiniOCamlParser.LetGlobalBindingContext = LetGlobalBindingContext; 
MiniOCamlParser.LetLocalBindingContext = LetLocalBindingContext; 
MiniOCamlParser.ListElementContext = ListElementContext; 
MiniOCamlParser.ListContentContext = ListContentContext; 
MiniOCamlParser.PatternMatchingContext = PatternMatchingContext; 
MiniOCamlParser.PatternBranchContext = PatternBranchContext; 
MiniOCamlParser.IdentifierListContext = IdentifierListContext; 
MiniOCamlParser.FunctionDeclarationContext = FunctionDeclarationContext; 
