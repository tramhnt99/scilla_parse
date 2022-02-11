// Generated from miniScilla.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import miniScillaListener from './miniScillaListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003E\u0169\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0003\u0002\u0005\u00028\n\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004H\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005S",
    "\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "_\n\u0006\u0003\u0007\u0003\u0007\u0006\u0007c\n\u0007\r\u0007\u000e",
    "\u0007d\u0003\u0007\u0005\u0007h\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bs\n\b\f\b\u000e\b",
    "v\u000b\b\u0003\b\u0003\b\u0005\bz\n\b\u0003\t\u0003\t\u0003\t\u0007",
    "\t\u007f\n\t\f\t\u000e\t\u0082\u000b\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\t\u0093\n\t\u0003\t\u0003\t\u0003\t\u0007\t",
    "\u0098\n\t\f\t\u000e\t\u009b\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00a8",
    "\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00b5\n\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0006\r\u00c7\n\r",
    "\r\r\u000e\r\u00c8\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00cf\n\r",
    "\f\r\u000e\r\u00d2\u000b\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007",
    "\r\u00d9\n\r\f\r\u000e\r\u00dc\u000b\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0007\r\u00e4\n\r\f\r\u000e\r\u00e7\u000b\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0005\r\u00ed\n\r\u0003\r\u0007\r\u00f0\n",
    "\r\f\r\u000e\r\u00f3\u000b\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0006\r\u00fc\n\r\r\r\u000e\r\u00fd\u0005\r\u0100\n",
    "\r\u0003\u000e\u0003\u000e\u0005\u000e\u0104\n\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u0113\n\u000f\u0003\u0010\u0003\u0010\u0007\u0010\u0117\n\u0010",
    "\f\u0010\u000e\u0010\u011a\u000b\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0007\u0012\u0126\n\u0012\f\u0012\u000e\u0012\u0129",
    "\u000b\u0012\u0005\u0012\u012b\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0134",
    "\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u0143\n\u0015\u0003\u0016\u0006",
    "\u0016\u0146\n\u0016\r\u0016\u000e\u0016\u0147\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u014c\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u015b\n\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0167\n",
    "\u001b\u0003\u001b\u0002\u0003\u0010\u001c\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.024\u0002\u0003",
    "\u0003\u0002=A\u0002\u0191\u00027\u0003\u0002\u0002\u0002\u0004;\u0003",
    "\u0002\u0002\u0002\u0006G\u0003\u0002\u0002\u0002\bR\u0003\u0002\u0002",
    "\u0002\n^\u0003\u0002\u0002\u0002\fg\u0003\u0002\u0002\u0002\u000ey",
    "\u0003\u0002\u0002\u0002\u0010\u0092\u0003\u0002\u0002\u0002\u0012\u00a7",
    "\u0003\u0002\u0002\u0002\u0014\u00a9\u0003\u0002\u0002\u0002\u0016\u00ae",
    "\u0003\u0002\u0002\u0002\u0018\u00ff\u0003\u0002\u0002\u0002\u001a\u0103",
    "\u0003\u0002\u0002\u0002\u001c\u0112\u0003\u0002\u0002\u0002\u001e\u0114",
    "\u0003\u0002\u0002\u0002 \u011d\u0003\u0002\u0002\u0002\"\u012a\u0003",
    "\u0002\u0002\u0002$\u0133\u0003\u0002\u0002\u0002&\u0135\u0003\u0002",
    "\u0002\u0002(\u0142\u0003\u0002\u0002\u0002*\u014b\u0003\u0002\u0002",
    "\u0002,\u014d\u0003\u0002\u0002\u0002.\u0150\u0003\u0002\u0002\u0002",
    "0\u0153\u0003\u0002\u0002\u00022\u015a\u0003\u0002\u0002\u00024\u0166",
    "\u0003\u0002\u0002\u000268\u0007\u0003\u0002\u000276\u0003\u0002\u0002",
    "\u000278\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029:\u00075",
    "\u0002\u0002:\u0003\u0003\u0002\u0002\u0002;<\t\u0002\u0002\u0002<\u0005",
    "\u0003\u0002\u0002\u0002=H\u00054\u001b\u0002>?\u0007\'\u0002\u0002",
    "?@\u00054\u001b\u0002@A\u0007(\u0002\u0002AH\u0003\u0002\u0002\u0002",
    "BC\u0007\'\u0002\u0002CD\u0005\u000e\b\u0002DE\u0007(\u0002\u0002EH",
    "\u0003\u0002\u0002\u0002FH\u0005\u000e\b\u0002G=\u0003\u0002\u0002\u0002",
    "G>\u0003\u0002\u0002\u0002GB\u0003\u0002\u0002\u0002GF\u0003\u0002\u0002",
    "\u0002H\u0007\u0003\u0002\u0002\u0002IJ\u0007\'\u0002\u0002JK\u0005",
    "\f\u0007\u0002KL\u0007(\u0002\u0002LS\u0003\u0002\u0002\u0002MS\u0005",
    "4\u001b\u0002NO\u0007\u0018\u0002\u0002OP\u0005\u0006\u0004\u0002PQ",
    "\u0005\n\u0006\u0002QS\u0003\u0002\u0002\u0002RI\u0003\u0002\u0002\u0002",
    "RM\u0003\u0002\u0002\u0002RN\u0003\u0002\u0002\u0002S\t\u0003\u0002",
    "\u0002\u0002T_\u00054\u001b\u0002UV\u0007\u0018\u0002\u0002VW\u0005",
    "\u0006\u0004\u0002WX\u0005\n\u0006\u0002XY\u0007\'\u0002\u0002YZ\u0005",
    "\f\u0007\u0002Z[\u0007(\u0002\u0002[_\u0003\u0002\u0002\u0002\\_\u0005",
    "\u000e\b\u0002]_\u0005\u0004\u0003\u0002^T\u0003\u0002\u0002\u0002^",
    "U\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002^]\u0003\u0002\u0002",
    "\u0002_\u000b\u0003\u0002\u0002\u0002`b\u00054\u001b\u0002ac\u0005\b",
    "\u0005\u0002ba\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002db\u0003",
    "\u0002\u0002\u0002de\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002",
    "fh\u0005\n\u0006\u0002g`\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002",
    "\u0002h\r\u0003\u0002\u0002\u0002ij\u0007D\u0002\u0002jk\u0007\u000b",
    "\u0002\u0002kz\u0007\f\u0002\u0002lm\u0007D\u0002\u0002mn\u0007\u000b",
    "\u0002\u0002no\u0007\u000f\u0002\u0002ot\u0005\u0014\u000b\u0002pq\u0007",
    "+\u0002\u0002qs\u0005\u0014\u000b\u0002rp\u0003\u0002\u0002\u0002sv",
    "\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wx\u0007\f",
    "\u0002\u0002xz\u0003\u0002\u0002\u0002yi\u0003\u0002\u0002\u0002yl\u0003",
    "\u0002\u0002\u0002z\u000f\u0003\u0002\u0002\u0002{|\b\t\u0001\u0002",
    "|\u0080\u00054\u001b\u0002}\u007f\u0005\u0012\n\u0002~}\u0003\u0002",
    "\u0002\u0002\u007f\u0082\u0003\u0002\u0002\u0002\u0080~\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0093\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u0018",
    "\u0002\u0002\u0084\u0085\u0005\u0006\u0004\u0002\u0085\u0086\u0005\n",
    "\u0006\u0002\u0086\u0093\u0003\u0002\u0002\u0002\u0087\u0088\u0007\'",
    "\u0002\u0002\u0088\u0089\u0005\u0010\t\u0002\u0089\u008a\u0007(\u0002",
    "\u0002\u008a\u0093\u0003\u0002\u0002\u0002\u008b\u0093\u0005\u000e\b",
    "\u0002\u008c\u008d\u0007\u0004\u0002\u0002\u008d\u008e\u0007E\u0002",
    "\u0002\u008e\u008f\u0007#\u0002\u0002\u008f\u0093\u0005\u0010\t\u0005",
    "\u0090\u0093\u0007E\u0002\u0002\u0091\u0093\u0005\u0004\u0003\u0002",
    "\u0092{\u0003\u0002\u0002\u0002\u0092\u0083\u0003\u0002\u0002\u0002",
    "\u0092\u0087\u0003\u0002\u0002\u0002\u0092\u008b\u0003\u0002\u0002\u0002",
    "\u0092\u008c\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002",
    "\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0099\u0003\u0002\u0002\u0002",
    "\u0094\u0095\f\b\u0002\u0002\u0095\u0096\u0007-\u0002\u0002\u0096\u0098",
    "\u0005\u0010\t\t\u0097\u0094\u0003\u0002\u0002\u0002\u0098\u009b\u0003",
    "\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003",
    "\u0002\u0002\u0002\u009a\u0011\u0003\u0002\u0002\u0002\u009b\u0099\u0003",
    "\u0002\u0002\u0002\u009c\u009d\u0007\'\u0002\u0002\u009d\u009e\u0005",
    "\u0010\t\u0002\u009e\u009f\u0007(\u0002\u0002\u009f\u00a8\u0003\u0002",
    "\u0002\u0002\u00a0\u00a8\u00054\u001b\u0002\u00a1\u00a8\u0007E\u0002",
    "\u0002\u00a2\u00a8\u0005\u000e\b\u0002\u00a3\u00a4\u0007\u0018\u0002",
    "\u0002\u00a4\u00a5\u0005\u0006\u0004\u0002\u00a5\u00a6\u0005\n\u0006",
    "\u0002\u00a6\u00a8\u0003\u0002\u0002\u0002\u00a7\u009c\u0003\u0002\u0002",
    "\u0002\u00a7\u00a0\u0003\u0002\u0002\u0002\u00a7\u00a1\u0003\u0002\u0002",
    "\u0002\u00a7\u00a2\u0003\u0002\u0002\u0002\u00a7\u00a3\u0003\u0002\u0002",
    "\u0002\u00a8\u0013\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007\u0013\u0002",
    "\u0002\u00aa\u00ab\u00050\u0019\u0002\u00ab\u00ac\u0007\"\u0002\u0002",
    "\u00ac\u00ad\u0005\u0010\t\u0002\u00ad\u0015\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0005\u0018\r\u0002\u00af\u0017\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0007\b\u0002\u0002\u00b1\u00b4\u00050\u0019\u0002\u00b2",
    "\u00b3\u0007\"\u0002\u0002\u00b3\u00b5\u0005\u0010\t\u0002\u00b4\u00b2",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007.\u0002\u0002\u00b7\u00b8",
    "\u0005\u0018\r\u0002\u00b8\u00b9\u0007\t\u0002\u0002\u00b9\u00ba\u0005",
    "\u0016\f\u0002\u00ba\u0100\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007",
    "\r\u0002\u0002\u00bc\u00bd\u0007\'\u0002\u0002\u00bd\u00be\u00050\u0019",
    "\u0002\u00be\u00bf\u0007\"\u0002\u0002\u00bf\u00c0\u0005\u0010\t\u0002",
    "\u00c0\u00c1\u0007(\u0002\u0002\u00c1\u00c2\u0007,\u0002\u0002\u00c2",
    "\u00c3\u0005\u0016\f\u0002\u00c3\u0100\u0003\u0002\u0002\u0002\u00c4",
    "\u00c6\u00052\u001a\u0002\u00c5\u00c7\u00052\u001a\u0002\u00c6\u00c5",
    "\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00c6",
    "\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u0100",
    "\u0003\u0002\u0002\u0002\u00ca\u0100\u0005\u001a\u000e\u0002\u00cb\u00cc",
    "\u0007\u0005\u0002\u0002\u00cc\u00d0\u0007B\u0002\u0002\u00cd\u00cf",
    "\u0005\u001e\u0010\u0002\u00ce\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d2",
    "\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002\u0002\u0002\u00d2\u00d0",
    "\u0003\u0002\u0002\u0002\u00d3\u0100\u0005*\u0016\u0002\u00d4\u00d5",
    "\u0007)\u0002\u0002\u00d5\u00da\u0005(\u0015\u0002\u00d6\u00d7\u0007",
    "!\u0002\u0002\u00d7\u00d9\u0005(\u0015\u0002\u00d8\u00d6\u0003\u0002",
    "\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00dd\u0003\u0002",
    "\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dd\u00de\u0007*",
    "\u0002\u0002\u00de\u0100\u0003\u0002\u0002\u0002\u00df\u00e0\u0007\n",
    "\u0002\u0002\u00e0\u00e1\u00052\u001a\u0002\u00e1\u00e5\u0007\u000b",
    "\u0002\u0002\u00e2\u00e4\u0005&\u0014\u0002\u00e3\u00e2\u0003\u0002",
    "\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002",
    "\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e8\u0003\u0002",
    "\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007\f",
    "\u0002\u0002\u00e9\u0100\u0003\u0002\u0002\u0002\u00ea\u00ec\u00054",
    "\u001b\u0002\u00eb\u00ed\u0005\u001e\u0010\u0002\u00ec\u00eb\u0003\u0002",
    "\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00f1\u0003\u0002",
    "\u0002\u0002\u00ee\u00f0\u00052\u001a\u0002\u00ef\u00ee\u0003\u0002",
    "\u0002\u0002\u00f0\u00f3\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002",
    "\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2\u0100\u0003\u0002",
    "\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007\u000e",
    "\u0002\u0002\u00f5\u00f6\u0007E\u0002\u0002\u00f6\u00f7\u0007,\u0002",
    "\u0002\u00f7\u0100\u0005\u0016\f\u0002\u00f8\u00f9\u00072\u0002\u0002",
    "\u00f9\u00fb\u00052\u001a\u0002\u00fa\u00fc\u0005\u0012\n\u0002\u00fb",
    "\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd",
    "\u00fb\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe",
    "\u0100\u0003\u0002\u0002\u0002\u00ff\u00b0\u0003\u0002\u0002\u0002\u00ff",
    "\u00bb\u0003\u0002\u0002\u0002\u00ff\u00c4\u0003\u0002\u0002\u0002\u00ff",
    "\u00ca\u0003\u0002\u0002\u0002\u00ff\u00cb\u0003\u0002\u0002\u0002\u00ff",
    "\u00d4\u0003\u0002\u0002\u0002\u00ff\u00df\u0003\u0002\u0002\u0002\u00ff",
    "\u00ea\u0003\u0002\u0002\u0002\u00ff\u00f4\u0003\u0002\u0002\u0002\u00ff",
    "\u00f8\u0003\u0002\u0002\u0002\u0100\u0019\u0003\u0002\u0002\u0002\u0101",
    "\u0104\u00052\u001a\u0002\u0102\u0104\u0005\u001c\u000f\u0002\u0103",
    "\u0101\u0003\u0002\u0002\u0002\u0103\u0102\u0003\u0002\u0002\u0002\u0104",
    "\u001b\u0003\u0002\u0002\u0002\u0105\u0113\u0007D\u0002\u0002\u0106",
    "\u0107\u0007=\u0002\u0002\u0107\u0113\u0005\u0002\u0002\u0002\u0108",
    "\u0109\u0007?\u0002\u0002\u0109\u0113\u00075\u0002\u0002\u010a\u0113",
    "\u00075\u0002\u0002\u010b\u0113\u0007<\u0002\u0002\u010c\u0113\u0007",
    "8\u0002\u0002\u010d\u010e\u0007\u0017\u0002\u0002\u010e\u010f\u0005",
    "\u0006\u0004\u0002\u010f\u0110\u0005\n\u0006\u0002\u0110\u0113\u0003",
    "\u0002\u0002\u0002\u0111\u0113\u0007:\u0002\u0002\u0112\u0105\u0003",
    "\u0002\u0002\u0002\u0112\u0106\u0003\u0002\u0002\u0002\u0112\u0108\u0003",
    "\u0002\u0002\u0002\u0112\u010a\u0003\u0002\u0002\u0002\u0112\u010b\u0003",
    "\u0002\u0002\u0002\u0112\u010c\u0003\u0002\u0002\u0002\u0112\u010d\u0003",
    "\u0002\u0002\u0002\u0112\u0111\u0003\u0002\u0002\u0002\u0113\u001d\u0003",
    "\u0002\u0002\u0002\u0114\u0118\u0007)\u0002\u0002\u0115\u0117\u0005",
    "\u0012\n\u0002\u0116\u0115\u0003\u0002\u0002\u0002\u0117\u011a\u0003",
    "\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002\u0002\u0118\u0119\u0003",
    "\u0002\u0002\u0002\u0119\u011b\u0003\u0002\u0002\u0002\u011a\u0118\u0003",
    "\u0002\u0002\u0002\u011b\u011c\u0007*\u0002\u0002\u011c\u001f\u0003",
    "\u0002\u0002\u0002\u011d\u011e\u0007%\u0002\u0002\u011e\u011f\u0005",
    "2\u001a\u0002\u011f\u0120\u0007&\u0002\u0002\u0120!\u0003\u0002\u0002",
    "\u0002\u0121\u012b\u00073\u0002\u0002\u0122\u012b\u0007B\u0002\u0002",
    "\u0123\u0127\u00054\u001b\u0002\u0124\u0126\u0005$\u0013\u0002\u0125",
    "\u0124\u0003\u0002\u0002\u0002\u0126\u0129\u0003\u0002\u0002\u0002\u0127",
    "\u0125\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128",
    "\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u012a",
    "\u0121\u0003\u0002\u0002\u0002\u012a\u0122\u0003\u0002\u0002\u0002\u012a",
    "\u0123\u0003\u0002\u0002\u0002\u012b#\u0003\u0002\u0002\u0002\u012c",
    "\u0134\u00073\u0002\u0002\u012d\u0134\u0007B\u0002\u0002\u012e\u0134",
    "\u00054\u001b\u0002\u012f\u0130\u0007\'\u0002\u0002\u0130\u0131\u0005",
    "\"\u0012\u0002\u0131\u0132\u0007(\u0002\u0002\u0132\u0134\u0003\u0002",
    "\u0002\u0002\u0133\u012c\u0003\u0002\u0002\u0002\u0133\u012d\u0003\u0002",
    "\u0002\u0002\u0133\u012e\u0003\u0002\u0002\u0002\u0133\u012f\u0003\u0002",
    "\u0002\u0002\u0134%\u0003\u0002\u0002\u0002\u0135\u0136\u0007$\u0002",
    "\u0002\u0136\u0137\u0005\"\u0012\u0002\u0137\u0138\u0007,\u0002\u0002",
    "\u0138\u0139\u0005\u0016\f\u0002\u0139\'\u0003\u0002\u0002\u0002\u013a",
    "\u013b\u00052\u001a\u0002\u013b\u013c\u0007\"\u0002\u0002\u013c\u013d",
    "\u0005\u001c\u000f\u0002\u013d\u0143\u0003\u0002\u0002\u0002\u013e\u013f",
    "\u00052\u001a\u0002\u013f\u0140\u0007\"\u0002\u0002\u0140\u0141\u0005",
    "2\u001a\u0002\u0141\u0143\u0003\u0002\u0002\u0002\u0142\u013a\u0003",
    "\u0002\u0002\u0002\u0142\u013e\u0003\u0002\u0002\u0002\u0143)\u0003",
    "\u0002\u0002\u0002\u0144\u0146\u00052\u001a\u0002\u0145\u0144\u0003",
    "\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u0145\u0003",
    "\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u014c\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0007\'\u0002\u0002\u014a\u014c\u0007",
    "(\u0002\u0002\u014b\u0145\u0003\u0002\u0002\u0002\u014b\u0149\u0003",
    "\u0002\u0002\u0002\u014c+\u0003\u0002\u0002\u0002\u014d\u014e\u0005",
    "\u0016\f\u0002\u014e\u014f\u0007\u0002\u0002\u0003\u014f-\u0003\u0002",
    "\u0002\u0002\u0150\u0151\u0005\u0010\t\u0002\u0151\u0152\u0007\u0002",
    "\u0002\u0003\u0152/\u0003\u0002\u0002\u0002\u0153\u0154\u0007B\u0002",
    "\u0002\u01541\u0003\u0002\u0002\u0002\u0155\u015b\u0007B\u0002\u0002",
    "\u0156\u015b\u0007C\u0002\u0002\u0157\u0158\u0007D\u0002\u0002\u0158",
    "\u0159\u0007#\u0002\u0002\u0159\u015b\u0007B\u0002\u0002\u015a\u0155",
    "\u0003\u0002\u0002\u0002\u015a\u0156\u0003\u0002\u0002\u0002\u015a\u0157",
    "\u0003\u0002\u0002\u0002\u015b3\u0003\u0002\u0002\u0002\u015c\u0167",
    "\u0007D\u0002\u0002\u015d\u015e\u0007D\u0002\u0002\u015e\u015f\u0007",
    "#\u0002\u0002\u015f\u0167\u0007D\u0002\u0002\u0160\u0161\u0007<\u0002",
    "\u0002\u0161\u0162\u0007#\u0002\u0002\u0162\u0167\u0007D\u0002\u0002",
    "\u0163\u0167\u0007:\u0002\u0002\u0164\u0167\u0007;\u0002\u0002\u0165",
    "\u0167\u0005\u0004\u0003\u0002\u0166\u015c\u0003\u0002\u0002\u0002\u0166",
    "\u015d\u0003\u0002\u0002\u0002\u0166\u0160\u0003\u0002\u0002\u0002\u0166",
    "\u0163\u0003\u0002\u0002\u0002\u0166\u0164\u0003\u0002\u0002\u0002\u0166",
    "\u0165\u0003\u0002\u0002\u0002\u01675\u0003\u0002\u0002\u0002\"7GR^",
    "dgty\u0080\u0092\u0099\u00a7\u00b4\u00c8\u00d0\u00da\u00e5\u00ec\u00f1",
    "\u00fd\u00ff\u0103\u0112\u0118\u0127\u012a\u0133\u0142\u0147\u014b\u015a",
    "\u0166"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class miniScillaParser extends antlr4.Parser {

    static grammarFileName = "miniScilla.g4";
    static literalNames = [ null, "'-'", "'forall'", "'builtin'", "'library'", 
                            "'import'", "'let'", "'in'", "'match'", "'with'", 
                            "'end'", "'fun'", "'tfun'", "'contract'", "'transition'", 
                            "'send'", "'event'", "'field'", "'accept'", 
                            "'exists'", "'delete'", "'Emp'", "'Map'", "'scilla_version'", 
                            "'type'", "'of'", "'try'", "'catch'", "'as'", 
                            "'procedure'", "'throw'", "';'", "':'", "'.'", 
                            "'|'", "'['", "']'", "'('", "')'", "'{'", "'}'", 
                            "','", "'=>'", "'->'", "'='", "'&'", "'<-'", 
                            "':='", "'@'", "'_'", null, null, null, null, 
                            null, null, null, null, null, null, null, "'BNum'", 
                            "'Message'", "'Event'" ];
    static symbolicNames = [ null, null, "FORALL", "BUILTIN", "LIBRARY", 
                             "IMPORT", "LET", "IN", "MATCH", "WITH", "END", 
                             "FUN", "TFUN", "CONTRACT", "TRANSITION", "SEND", 
                             "EVENT", "FIELD", "ACCEPT", "EXISTS", "DELETE", 
                             "EMP", "MAP", "SCILLA_VERSION", "TYPE", "OF", 
                             "TRY", "CATCH", "AS", "PROCEDURE", "THROW", 
                             "SEMICOLON", "COLON", "PERIOD", "BAR", "LSQB", 
                             "RSQB", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "COMMA", "ARROW", "TARROW", "EQ", "AND", "FETCH", 
                             "ASSIGN", "AT", "UNDERSCORE", "BlockComment", 
                             "NUMBER", "WS", "TOSKIP", "STRING", "FLOAT", 
                             "BOOLEAN", "OPTION", "HEX", "INTTY", "BYSTR", 
                             "BNUM", "MESSAGE", "EVENT_TY", "ID", "SPID", 
                             "CID", "TID" ];
    static ruleNames = [ "int_", "prim_types", "t_map_key", "t_map_value_args", 
                         "t_map_value", "t_map_value_allow_targs", "address_typ", 
                         "typ", "targ", "address_type_field", "exp", "simple_exp", 
                         "atomic_exp", "lit", "ctargs", "map_access", "pattern", 
                         "arg_pattern", "exp_pm_clause", "msg_entry", "builtin_args", 
                         "exp_term", "type_term", "identifier", "sid", "scid" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = miniScillaParser.ruleNames;
        this.literalNames = miniScillaParser.literalNames;
        this.symbolicNames = miniScillaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.typ_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    typ_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	int_() {
	    let localctx = new Int_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, miniScillaParser.RULE_int_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===miniScillaParser.T__0) {
	            this.state = 52;
	            this.match(miniScillaParser.T__0);
	        }

	        this.state = 55;
	        this.match(miniScillaParser.NUMBER);
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



	prim_types() {
	    let localctx = new Prim_typesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, miniScillaParser.RULE_prim_types);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (miniScillaParser.INTTY - 59)) | (1 << (miniScillaParser.BYSTR - 59)) | (1 << (miniScillaParser.BNUM - 59)) | (1 << (miniScillaParser.MESSAGE - 59)) | (1 << (miniScillaParser.EVENT_TY - 59)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	t_map_key() {
	    let localctx = new T_map_keyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, miniScillaParser.RULE_t_map_key);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            localctx.kt_to_map = this.scid();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 61;
	            localctx.kt_to_map = this.scid();
	            this.state = 62;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 65;
	            localctx.kt = this.address_typ();
	            this.state = 66;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 68;
	            localctx.kt = this.address_typ();
	            break;

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



	t_map_value_args() {
	    let localctx = new T_map_value_argsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, miniScillaParser.RULE_t_map_value_args);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.LPAREN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 72;
	            localctx.t = this.t_map_value_allow_targs();
	            this.state = 73;
	            this.match(miniScillaParser.RPAREN);
	            break;
	        case miniScillaParser.BOOLEAN:
	        case miniScillaParser.OPTION:
	        case miniScillaParser.HEX:
	        case miniScillaParser.INTTY:
	        case miniScillaParser.BYSTR:
	        case miniScillaParser.BNUM:
	        case miniScillaParser.MESSAGE:
	        case miniScillaParser.EVENT_TY:
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            localctx.d = this.scid();
	            break;
	        case miniScillaParser.MAP:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            this.match(miniScillaParser.MAP);
	            this.state = 77;
	            localctx.k = this.t_map_key();
	            this.state = 78;
	            localctx.v = this.t_map_value();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	t_map_value() {
	    let localctx = new T_map_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, miniScillaParser.RULE_t_map_value);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            localctx.d = this.scid();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.match(miniScillaParser.MAP);
	            this.state = 84;
	            localctx.k = this.t_map_key();
	            this.state = 85;
	            localctx.v = this.t_map_value();
	            this.state = 86;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 87;
	            localctx.t = this.t_map_value_allow_targs();
	            this.state = 88;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            localctx.vt = this.address_typ();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 91;
	            this.prim_types();
	            break;

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



	t_map_value_allow_targs() {
	    let localctx = new T_map_value_allow_targsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, miniScillaParser.RULE_t_map_value_allow_targs);
	    var _la = 0; // Token type
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            localctx.d = this.scid();
	            this.state = 96; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 95;
	                this.t_map_value_args();
	                this.state = 98; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===miniScillaParser.MAP || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (miniScillaParser.LPAREN - 37)) | (1 << (miniScillaParser.BOOLEAN - 37)) | (1 << (miniScillaParser.OPTION - 37)) | (1 << (miniScillaParser.HEX - 37)) | (1 << (miniScillaParser.INTTY - 37)) | (1 << (miniScillaParser.BYSTR - 37)) | (1 << (miniScillaParser.BNUM - 37)) | (1 << (miniScillaParser.MESSAGE - 37)) | (1 << (miniScillaParser.EVENT_TY - 37)) | (1 << (miniScillaParser.CID - 37)))) !== 0));
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 100;
	            this.t_map_value();
	            break;

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



	address_typ() {
	    let localctx = new Address_typContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, miniScillaParser.RULE_address_typ);
	    var _la = 0; // Token type
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            localctx.d = this.match(miniScillaParser.CID);
	            this.state = 104;
	            this.match(miniScillaParser.WITH);
	            this.state = 105;
	            this.match(miniScillaParser.END);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            localctx.d = this.match(miniScillaParser.CID);
	            this.state = 107;
	            this.match(miniScillaParser.WITH);
	            this.state = 108;
	            this.match(miniScillaParser.CONTRACT);
	            this.state = 109;
	            localctx._address_type_field = this.address_type_field();
	            localctx.fs.push(localctx._address_type_field);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniScillaParser.COMMA) {
	                this.state = 110;
	                this.match(miniScillaParser.COMMA);
	                this.state = 111;
	                localctx._address_type_field = this.address_type_field();
	                localctx.fs.push(localctx._address_type_field);
	                this.state = 116;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 117;
	            this.match(miniScillaParser.END);
	            break;

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


	typ(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TypContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, miniScillaParser.RULE_typ, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 122;
	            localctx.d = this.scid();
	            this.state = 126;
	            this._errHandler.sync(this);
	            let _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 123;
	                    localctx._targ = this.targ();
	                    localctx.targs.push(localctx._targ); 
	                }
	                this.state = 128;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            break;

	        case 2:
	            this.state = 129;
	            this.match(miniScillaParser.MAP);
	            this.state = 130;
	            localctx.k = this.t_map_key();
	            this.state = 131;
	            localctx.v = this.t_map_value();
	            break;

	        case 3:
	            this.state = 133;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 134;
	            localctx.t = this.typ(0);
	            this.state = 135;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 4:
	            this.state = 137;
	            localctx.t_to_map = this.address_typ();
	            break;

	        case 5:
	            this.state = 138;
	            this.match(miniScillaParser.FORALL);
	            this.state = 139;
	            localctx.tv = this.match(miniScillaParser.TID);
	            this.state = 140;
	            this.match(miniScillaParser.PERIOD);
	            this.state = 141;
	            localctx.t = this.typ(3);
	            break;

	        case 6:
	            this.state = 142;
	            localctx.t_var = this.match(miniScillaParser.TID);
	            break;

	        case 7:
	            this.state = 143;
	            this.prim_types();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 151;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TypContext(this, _parentctx, _parentState);
	                localctx.t1 = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, miniScillaParser.RULE_typ);
	                this.state = 146;
	                if (!( this.precpred(this._ctx, 6))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                }
	                this.state = 147;
	                this.match(miniScillaParser.TARROW);
	                this.state = 148;
	                localctx.t2 = this.typ(7); 
	            }
	            this.state = 153;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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



	targ() {
	    let localctx = new TargContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, miniScillaParser.RULE_targ);
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 155;
	            localctx.t = this.typ(0);
	            this.state = 156;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            localctx.d = this.scid();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 159;
	            localctx.t_var = this.match(miniScillaParser.TID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 160;
	            localctx.t_to_map = this.address_typ();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 161;
	            this.match(miniScillaParser.MAP);
	            this.state = 162;
	            localctx.k = this.t_map_key();
	            this.state = 163;
	            localctx.v = this.t_map_value();
	            break;

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



	address_type_field() {
	    let localctx = new Address_type_fieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, miniScillaParser.RULE_address_type_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(miniScillaParser.FIELD);
	        this.state = 168;
	        localctx.id = this.identifier();
	        this.state = 169;
	        this.match(miniScillaParser.COLON);
	        this.state = 170;
	        localctx.ty = this.typ(0);
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



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, miniScillaParser.RULE_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        localctx.f = this.simple_exp();
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



	simple_exp() {
	    let localctx = new Simple_expContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, miniScillaParser.RULE_simple_exp);
	    var _la = 0; // Token type
	    try {
	        this.state = 253;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LetContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 174;
	            this.match(miniScillaParser.LET);
	            this.state = 175;
	            localctx.x = this.identifier();
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===miniScillaParser.COLON) {
	                this.state = 176;
	                this.match(miniScillaParser.COLON);
	                this.state = 177;
	                localctx.ty = this.typ(0);
	            }

	            this.state = 180;
	            this.match(miniScillaParser.EQ);
	            this.state = 181;
	            localctx.f = this.simple_exp();
	            this.state = 182;
	            this.match(miniScillaParser.IN);
	            this.state = 183;
	            localctx.e = this.exp();
	            break;

	        case 2:
	            localctx = new FunContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.match(miniScillaParser.FUN);
	            this.state = 186;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 187;
	            localctx.id = this.identifier();
	            this.state = 188;
	            this.match(miniScillaParser.COLON);
	            this.state = 189;
	            localctx.ty = this.typ(0);
	            this.state = 190;
	            this.match(miniScillaParser.RPAREN);
	            this.state = 191;
	            this.match(miniScillaParser.ARROW);
	            this.state = 192;
	            localctx.e = this.exp();
	            break;

	        case 3:
	            localctx = new AppContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 194;
	            localctx.f_var = this.sid();
	            this.state = 196; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 195;
	                localctx._sid = this.sid();
	                localctx.args.push(localctx._sid);
	                this.state = 198; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (miniScillaParser.ID - 64)) | (1 << (miniScillaParser.SPID - 64)) | (1 << (miniScillaParser.CID - 64)))) !== 0));
	            break;

	        case 4:
	            localctx = new AtomicContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 200;
	            localctx.a = this.atomic_exp();
	            break;

	        case 5:
	            localctx = new BuiltinContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 201;
	            this.match(miniScillaParser.BUILTIN);
	            this.state = 202;
	            localctx.b = this.match(miniScillaParser.ID);
	            this.state = 206;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniScillaParser.LBRACE) {
	                this.state = 203;
	                localctx._ctargs = this.ctargs();
	                localctx.targs.push(localctx._ctargs);
	                this.state = 208;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 209;
	            localctx.xs = this.builtin_args();
	            break;

	        case 6:
	            localctx = new MessageContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 210;
	            this.match(miniScillaParser.LBRACE);
	            this.state = 211;
	            localctx._msg_entry = this.msg_entry();
	            localctx.es.push(localctx._msg_entry);
	            this.state = 216;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniScillaParser.SEMICOLON) {
	                this.state = 212;
	                this.match(miniScillaParser.SEMICOLON);
	                this.state = 213;
	                localctx._msg_entry = this.msg_entry();
	                localctx.es.push(localctx._msg_entry);
	                this.state = 218;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 219;
	            this.match(miniScillaParser.RBRACE);
	            break;

	        case 7:
	            localctx = new MatchContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 221;
	            this.match(miniScillaParser.MATCH);
	            this.state = 222;
	            localctx.x_sid = this.sid();
	            this.state = 223;
	            this.match(miniScillaParser.WITH);
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniScillaParser.BAR) {
	                this.state = 224;
	                localctx.cs = this.exp_pm_clause();
	                this.state = 229;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 230;
	            this.match(miniScillaParser.END);
	            break;

	        case 8:
	            localctx = new DataConstructorAppContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 232;
	            localctx.c = this.scid();
	            this.state = 234;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===miniScillaParser.LBRACE) {
	                this.state = 233;
	                localctx.ts = this.ctargs();
	            }

	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (miniScillaParser.ID - 64)) | (1 << (miniScillaParser.SPID - 64)) | (1 << (miniScillaParser.CID - 64)))) !== 0)) {
	                this.state = 236;
	                localctx._sid = this.sid();
	                localctx.args.push(localctx._sid);
	                this.state = 241;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 9:
	            localctx = new TFunContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 242;
	            this.match(miniScillaParser.TFUN);
	            this.state = 243;
	            localctx.i = this.match(miniScillaParser.TID);
	            this.state = 244;
	            this.match(miniScillaParser.ARROW);
	            this.state = 245;
	            localctx.e = this.exp();
	            break;

	        case 10:
	            localctx = new TAppContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 246;
	            this.match(miniScillaParser.AT);
	            this.state = 247;
	            localctx.f = this.sid();
	            this.state = 249; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 248;
	                localctx._targ = this.targ();
	                localctx.targs.push(localctx._targ);
	                this.state = 251; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===miniScillaParser.MAP || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (miniScillaParser.LPAREN - 37)) | (1 << (miniScillaParser.BOOLEAN - 37)) | (1 << (miniScillaParser.OPTION - 37)) | (1 << (miniScillaParser.HEX - 37)) | (1 << (miniScillaParser.INTTY - 37)) | (1 << (miniScillaParser.BYSTR - 37)) | (1 << (miniScillaParser.BNUM - 37)) | (1 << (miniScillaParser.MESSAGE - 37)) | (1 << (miniScillaParser.EVENT_TY - 37)) | (1 << (miniScillaParser.CID - 37)) | (1 << (miniScillaParser.TID - 37)))) !== 0));
	            break;

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



	atomic_exp() {
	    let localctx = new Atomic_expContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, miniScillaParser.RULE_atomic_exp);
	    try {
	        this.state = 257;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 255;
	            localctx.i = this.sid();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 256;
	            localctx.l = this.lit();
	            break;

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



	lit() {
	    let localctx = new LitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, miniScillaParser.RULE_lit);
	    try {
	        this.state = 272;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 259;
	            localctx.i = this.match(miniScillaParser.CID);
	            break;
	        case miniScillaParser.INTTY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 260;
	            this.match(miniScillaParser.INTTY);
	            this.state = 261;
	            localctx.i_int = this.int_();
	            break;
	        case miniScillaParser.BNUM:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 262;
	            this.match(miniScillaParser.BNUM);
	            this.state = 263;
	            localctx.i_number = this.match(miniScillaParser.NUMBER);
	            break;
	        case miniScillaParser.NUMBER:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 264;
	            localctx.n = this.match(miniScillaParser.NUMBER);
	            break;
	        case miniScillaParser.HEX:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 265;
	            localctx.h = this.match(miniScillaParser.HEX);
	            break;
	        case miniScillaParser.STRING:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 266;
	            localctx.s = this.match(miniScillaParser.STRING);
	            break;
	        case miniScillaParser.EMP:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 267;
	            this.match(miniScillaParser.EMP);
	            this.state = 268;
	            localctx.kt = this.t_map_key();
	            this.state = 269;
	            localctx.vt = this.t_map_value();
	            break;
	        case miniScillaParser.BOOLEAN:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 271;
	            localctx.b = this.match(miniScillaParser.BOOLEAN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	ctargs() {
	    let localctx = new CtargsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, miniScillaParser.RULE_ctargs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(miniScillaParser.LBRACE);
	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===miniScillaParser.MAP || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (miniScillaParser.LPAREN - 37)) | (1 << (miniScillaParser.BOOLEAN - 37)) | (1 << (miniScillaParser.OPTION - 37)) | (1 << (miniScillaParser.HEX - 37)) | (1 << (miniScillaParser.INTTY - 37)) | (1 << (miniScillaParser.BYSTR - 37)) | (1 << (miniScillaParser.BNUM - 37)) | (1 << (miniScillaParser.MESSAGE - 37)) | (1 << (miniScillaParser.EVENT_TY - 37)) | (1 << (miniScillaParser.CID - 37)) | (1 << (miniScillaParser.TID - 37)))) !== 0)) {
	            this.state = 275;
	            localctx.ts = this.targ();
	            this.state = 280;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 281;
	        this.match(miniScillaParser.RBRACE);
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



	map_access() {
	    let localctx = new Map_accessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, miniScillaParser.RULE_map_access);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(miniScillaParser.LSQB);
	        this.state = 284;
	        localctx.i = this.sid();
	        this.state = 285;
	        this.match(miniScillaParser.RSQB);
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



	pattern() {
	    let localctx = new PatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, miniScillaParser.RULE_pattern);
	    var _la = 0; // Token type
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.UNDERSCORE:
	            localctx = new WildcardContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 287;
	            this.match(miniScillaParser.UNDERSCORE);
	            break;
	        case miniScillaParser.ID:
	            localctx = new BinderContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 288;
	            localctx.x = this.match(miniScillaParser.ID);
	            break;
	        case miniScillaParser.BOOLEAN:
	        case miniScillaParser.OPTION:
	        case miniScillaParser.HEX:
	        case miniScillaParser.INTTY:
	        case miniScillaParser.BYSTR:
	        case miniScillaParser.BNUM:
	        case miniScillaParser.MESSAGE:
	        case miniScillaParser.EVENT_TY:
	        case miniScillaParser.CID:
	            localctx = new ConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 289;
	            localctx.c = this.scid();
	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (miniScillaParser.LPAREN - 37)) | (1 << (miniScillaParser.UNDERSCORE - 37)) | (1 << (miniScillaParser.BOOLEAN - 37)) | (1 << (miniScillaParser.OPTION - 37)) | (1 << (miniScillaParser.HEX - 37)) | (1 << (miniScillaParser.INTTY - 37)) | (1 << (miniScillaParser.BYSTR - 37)) | (1 << (miniScillaParser.BNUM - 37)) | (1 << (miniScillaParser.MESSAGE - 37)) | (1 << (miniScillaParser.EVENT_TY - 37)) | (1 << (miniScillaParser.ID - 37)) | (1 << (miniScillaParser.CID - 37)))) !== 0)) {
	                this.state = 290;
	                localctx.ps = this.arg_pattern();
	                this.state = 295;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	arg_pattern() {
	    let localctx = new Arg_patternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, miniScillaParser.RULE_arg_pattern);
	    try {
	        this.state = 305;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.UNDERSCORE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 298;
	            this.match(miniScillaParser.UNDERSCORE);
	            break;
	        case miniScillaParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 299;
	            localctx.x = this.match(miniScillaParser.ID);
	            break;
	        case miniScillaParser.BOOLEAN:
	        case miniScillaParser.OPTION:
	        case miniScillaParser.HEX:
	        case miniScillaParser.INTTY:
	        case miniScillaParser.BYSTR:
	        case miniScillaParser.BNUM:
	        case miniScillaParser.MESSAGE:
	        case miniScillaParser.EVENT_TY:
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 300;
	            localctx.c = this.scid();
	            break;
	        case miniScillaParser.LPAREN:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 301;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 302;
	            localctx.p = this.pattern();
	            this.state = 303;
	            this.match(miniScillaParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	exp_pm_clause() {
	    let localctx = new Exp_pm_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, miniScillaParser.RULE_exp_pm_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(miniScillaParser.BAR);
	        this.state = 308;
	        localctx.p = this.pattern();
	        this.state = 309;
	        this.match(miniScillaParser.ARROW);
	        this.state = 310;
	        localctx.e = this.exp();
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



	msg_entry() {
	    let localctx = new Msg_entryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, miniScillaParser.RULE_msg_entry);
	    try {
	        this.state = 320;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            localctx.i = this.sid();
	            this.state = 313;
	            this.match(miniScillaParser.COLON);
	            this.state = 314;
	            localctx.l = this.lit();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 316;
	            localctx.i = this.sid();
	            this.state = 317;
	            this.match(miniScillaParser.COLON);
	            this.state = 318;
	            localctx.v = this.sid();
	            break;

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



	builtin_args() {
	    let localctx = new Builtin_argsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, miniScillaParser.RULE_builtin_args);
	    var _la = 0; // Token type
	    try {
	        this.state = 329;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.ID:
	        case miniScillaParser.SPID:
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 323; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 322;
	                localctx.args = this.sid();
	                this.state = 325; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (miniScillaParser.ID - 64)) | (1 << (miniScillaParser.SPID - 64)) | (1 << (miniScillaParser.CID - 64)))) !== 0));
	            break;
	        case miniScillaParser.LPAREN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 327;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 328;
	            this.match(miniScillaParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	exp_term() {
	    let localctx = new Exp_termContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, miniScillaParser.RULE_exp_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        localctx.e = this.exp();
	        this.state = 332;
	        this.match(miniScillaParser.EOF);
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



	type_term() {
	    let localctx = new Type_termContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, miniScillaParser.RULE_type_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        localctx.t = this.typ(0);
	        this.state = 335;
	        this.match(miniScillaParser.EOF);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, miniScillaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(miniScillaParser.ID);
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



	sid() {
	    let localctx = new SidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, miniScillaParser.RULE_sid);
	    try {
	        this.state = 344;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 339;
	            localctx.name = this.match(miniScillaParser.ID);
	            break;
	        case miniScillaParser.SPID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 340;
	            localctx.name = this.match(miniScillaParser.SPID);
	            break;
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 341;
	            localctx.ns = this.match(miniScillaParser.CID);
	            this.state = 342;
	            this.match(miniScillaParser.PERIOD);
	            this.state = 343;
	            localctx.name = this.match(miniScillaParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	scid() {
	    let localctx = new ScidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, miniScillaParser.RULE_scid);
	    try {
	        this.state = 356;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 346;
	            localctx.name = this.match(miniScillaParser.CID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 347;
	            localctx.ns = this.match(miniScillaParser.CID);
	            this.state = 348;
	            this.match(miniScillaParser.PERIOD);
	            this.state = 349;
	            localctx.name = this.match(miniScillaParser.CID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 350;
	            localctx.ns = this.match(miniScillaParser.HEX);
	            this.state = 351;
	            this.match(miniScillaParser.PERIOD);
	            this.state = 352;
	            localctx.name = this.match(miniScillaParser.CID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 353;
	            localctx.bool = this.match(miniScillaParser.BOOLEAN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 354;
	            localctx.option = this.match(miniScillaParser.OPTION);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 355;
	            localctx.prim = this.prim_types();
	            break;

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


}

miniScillaParser.EOF = antlr4.Token.EOF;
miniScillaParser.T__0 = 1;
miniScillaParser.FORALL = 2;
miniScillaParser.BUILTIN = 3;
miniScillaParser.LIBRARY = 4;
miniScillaParser.IMPORT = 5;
miniScillaParser.LET = 6;
miniScillaParser.IN = 7;
miniScillaParser.MATCH = 8;
miniScillaParser.WITH = 9;
miniScillaParser.END = 10;
miniScillaParser.FUN = 11;
miniScillaParser.TFUN = 12;
miniScillaParser.CONTRACT = 13;
miniScillaParser.TRANSITION = 14;
miniScillaParser.SEND = 15;
miniScillaParser.EVENT = 16;
miniScillaParser.FIELD = 17;
miniScillaParser.ACCEPT = 18;
miniScillaParser.EXISTS = 19;
miniScillaParser.DELETE = 20;
miniScillaParser.EMP = 21;
miniScillaParser.MAP = 22;
miniScillaParser.SCILLA_VERSION = 23;
miniScillaParser.TYPE = 24;
miniScillaParser.OF = 25;
miniScillaParser.TRY = 26;
miniScillaParser.CATCH = 27;
miniScillaParser.AS = 28;
miniScillaParser.PROCEDURE = 29;
miniScillaParser.THROW = 30;
miniScillaParser.SEMICOLON = 31;
miniScillaParser.COLON = 32;
miniScillaParser.PERIOD = 33;
miniScillaParser.BAR = 34;
miniScillaParser.LSQB = 35;
miniScillaParser.RSQB = 36;
miniScillaParser.LPAREN = 37;
miniScillaParser.RPAREN = 38;
miniScillaParser.LBRACE = 39;
miniScillaParser.RBRACE = 40;
miniScillaParser.COMMA = 41;
miniScillaParser.ARROW = 42;
miniScillaParser.TARROW = 43;
miniScillaParser.EQ = 44;
miniScillaParser.AND = 45;
miniScillaParser.FETCH = 46;
miniScillaParser.ASSIGN = 47;
miniScillaParser.AT = 48;
miniScillaParser.UNDERSCORE = 49;
miniScillaParser.BlockComment = 50;
miniScillaParser.NUMBER = 51;
miniScillaParser.WS = 52;
miniScillaParser.TOSKIP = 53;
miniScillaParser.STRING = 54;
miniScillaParser.FLOAT = 55;
miniScillaParser.BOOLEAN = 56;
miniScillaParser.OPTION = 57;
miniScillaParser.HEX = 58;
miniScillaParser.INTTY = 59;
miniScillaParser.BYSTR = 60;
miniScillaParser.BNUM = 61;
miniScillaParser.MESSAGE = 62;
miniScillaParser.EVENT_TY = 63;
miniScillaParser.ID = 64;
miniScillaParser.SPID = 65;
miniScillaParser.CID = 66;
miniScillaParser.TID = 67;

miniScillaParser.RULE_int_ = 0;
miniScillaParser.RULE_prim_types = 1;
miniScillaParser.RULE_t_map_key = 2;
miniScillaParser.RULE_t_map_value_args = 3;
miniScillaParser.RULE_t_map_value = 4;
miniScillaParser.RULE_t_map_value_allow_targs = 5;
miniScillaParser.RULE_address_typ = 6;
miniScillaParser.RULE_typ = 7;
miniScillaParser.RULE_targ = 8;
miniScillaParser.RULE_address_type_field = 9;
miniScillaParser.RULE_exp = 10;
miniScillaParser.RULE_simple_exp = 11;
miniScillaParser.RULE_atomic_exp = 12;
miniScillaParser.RULE_lit = 13;
miniScillaParser.RULE_ctargs = 14;
miniScillaParser.RULE_map_access = 15;
miniScillaParser.RULE_pattern = 16;
miniScillaParser.RULE_arg_pattern = 17;
miniScillaParser.RULE_exp_pm_clause = 18;
miniScillaParser.RULE_msg_entry = 19;
miniScillaParser.RULE_builtin_args = 20;
miniScillaParser.RULE_exp_term = 21;
miniScillaParser.RULE_type_term = 22;
miniScillaParser.RULE_identifier = 23;
miniScillaParser.RULE_sid = 24;
miniScillaParser.RULE_scid = 25;

class Int_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_int_;
    }

	NUMBER() {
	    return this.getToken(miniScillaParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterInt_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitInt_(this);
		}
	}


}



class Prim_typesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_prim_types;
    }

	INTTY() {
	    return this.getToken(miniScillaParser.INTTY, 0);
	};

	BYSTR() {
	    return this.getToken(miniScillaParser.BYSTR, 0);
	};

	BNUM() {
	    return this.getToken(miniScillaParser.BNUM, 0);
	};

	MESSAGE() {
	    return this.getToken(miniScillaParser.MESSAGE, 0);
	};

	EVENT_TY() {
	    return this.getToken(miniScillaParser.EVENT_TY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterPrim_types(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitPrim_types(this);
		}
	}


}



class T_map_keyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_t_map_key;
        this.kt_to_map = null; // ScidContext
        this.kt = null; // Address_typContext
    }

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	LPAREN() {
	    return this.getToken(miniScillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(miniScillaParser.RPAREN, 0);
	};

	address_typ() {
	    return this.getTypedRuleContext(Address_typContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterT_map_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitT_map_key(this);
		}
	}


}



class T_map_value_argsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_t_map_value_args;
        this.t = null; // T_map_value_allow_targsContext
        this.d = null; // ScidContext
        this.k = null; // T_map_keyContext
        this.v = null; // T_map_valueContext
    }

	LPAREN() {
	    return this.getToken(miniScillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(miniScillaParser.RPAREN, 0);
	};

	t_map_value_allow_targs() {
	    return this.getTypedRuleContext(T_map_value_allow_targsContext,0);
	};

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	MAP() {
	    return this.getToken(miniScillaParser.MAP, 0);
	};

	t_map_key() {
	    return this.getTypedRuleContext(T_map_keyContext,0);
	};

	t_map_value() {
	    return this.getTypedRuleContext(T_map_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterT_map_value_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitT_map_value_args(this);
		}
	}


}



class T_map_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_t_map_value;
        this.d = null; // ScidContext
        this.k = null; // T_map_keyContext
        this.v = null; // T_map_valueContext
        this.t = null; // T_map_value_allow_targsContext
        this.vt = null; // Address_typContext
    }

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	MAP() {
	    return this.getToken(miniScillaParser.MAP, 0);
	};

	LPAREN() {
	    return this.getToken(miniScillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(miniScillaParser.RPAREN, 0);
	};

	t_map_key() {
	    return this.getTypedRuleContext(T_map_keyContext,0);
	};

	t_map_value() {
	    return this.getTypedRuleContext(T_map_valueContext,0);
	};

	t_map_value_allow_targs() {
	    return this.getTypedRuleContext(T_map_value_allow_targsContext,0);
	};

	address_typ() {
	    return this.getTypedRuleContext(Address_typContext,0);
	};

	prim_types() {
	    return this.getTypedRuleContext(Prim_typesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterT_map_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitT_map_value(this);
		}
	}


}



class T_map_value_allow_targsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_t_map_value_allow_targs;
        this.d = null; // ScidContext
    }

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	t_map_value_args = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(T_map_value_argsContext);
	    } else {
	        return this.getTypedRuleContext(T_map_value_argsContext,i);
	    }
	};

	t_map_value() {
	    return this.getTypedRuleContext(T_map_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterT_map_value_allow_targs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitT_map_value_allow_targs(this);
		}
	}


}



class Address_typContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_address_typ;
        this.d = null; // Token
        this._address_type_field = null; // Address_type_fieldContext
        this.fs = []; // of Address_type_fieldContexts
    }

	WITH() {
	    return this.getToken(miniScillaParser.WITH, 0);
	};

	END() {
	    return this.getToken(miniScillaParser.END, 0);
	};

	CID() {
	    return this.getToken(miniScillaParser.CID, 0);
	};

	CONTRACT() {
	    return this.getToken(miniScillaParser.CONTRACT, 0);
	};

	address_type_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Address_type_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Address_type_fieldContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(miniScillaParser.COMMA);
	    } else {
	        return this.getToken(miniScillaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterAddress_typ(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitAddress_typ(this);
		}
	}


}



class TypContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_typ;
        this.t1 = null; // TypContext
        this.d = null; // ScidContext
        this._targ = null; // TargContext
        this.targs = []; // of TargContexts
        this.k = null; // T_map_keyContext
        this.v = null; // T_map_valueContext
        this.t = null; // TypContext
        this.t_to_map = null; // Address_typContext
        this.tv = null; // Token
        this.t_var = null; // Token
        this.t2 = null; // TypContext
    }

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	targ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TargContext);
	    } else {
	        return this.getTypedRuleContext(TargContext,i);
	    }
	};

	MAP() {
	    return this.getToken(miniScillaParser.MAP, 0);
	};

	t_map_key() {
	    return this.getTypedRuleContext(T_map_keyContext,0);
	};

	t_map_value() {
	    return this.getTypedRuleContext(T_map_valueContext,0);
	};

	LPAREN() {
	    return this.getToken(miniScillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(miniScillaParser.RPAREN, 0);
	};

	typ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypContext);
	    } else {
	        return this.getTypedRuleContext(TypContext,i);
	    }
	};

	address_typ() {
	    return this.getTypedRuleContext(Address_typContext,0);
	};

	FORALL() {
	    return this.getToken(miniScillaParser.FORALL, 0);
	};

	PERIOD() {
	    return this.getToken(miniScillaParser.PERIOD, 0);
	};

	TID() {
	    return this.getToken(miniScillaParser.TID, 0);
	};

	prim_types() {
	    return this.getTypedRuleContext(Prim_typesContext,0);
	};

	TARROW() {
	    return this.getToken(miniScillaParser.TARROW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterTyp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitTyp(this);
		}
	}


}



class TargContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_targ;
        this.t = null; // TypContext
        this.d = null; // ScidContext
        this.t_var = null; // Token
        this.t_to_map = null; // Address_typContext
        this.k = null; // T_map_keyContext
        this.v = null; // T_map_valueContext
    }

	LPAREN() {
	    return this.getToken(miniScillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(miniScillaParser.RPAREN, 0);
	};

	typ() {
	    return this.getTypedRuleContext(TypContext,0);
	};

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	TID() {
	    return this.getToken(miniScillaParser.TID, 0);
	};

	address_typ() {
	    return this.getTypedRuleContext(Address_typContext,0);
	};

	MAP() {
	    return this.getToken(miniScillaParser.MAP, 0);
	};

	t_map_key() {
	    return this.getTypedRuleContext(T_map_keyContext,0);
	};

	t_map_value() {
	    return this.getTypedRuleContext(T_map_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterTarg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitTarg(this);
		}
	}


}



class Address_type_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_address_type_field;
        this.id = null; // IdentifierContext
        this.ty = null; // TypContext
    }

	FIELD() {
	    return this.getToken(miniScillaParser.FIELD, 0);
	};

	COLON() {
	    return this.getToken(miniScillaParser.COLON, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	typ() {
	    return this.getTypedRuleContext(TypContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterAddress_type_field(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitAddress_type_field(this);
		}
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_exp;
        this.f = null; // Simple_expContext
    }

	simple_exp() {
	    return this.getTypedRuleContext(Simple_expContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitExp(this);
		}
	}


}



class Simple_expContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_simple_exp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AppContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.f_var = null; // SidContext;
        this._sid = null; // SidContext;
        this.args = []; // of SidContexts;
        super.copyFrom(ctx);
    }

	sid = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SidContext);
	    } else {
	        return this.getTypedRuleContext(SidContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterApp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitApp(this);
		}
	}


}

miniScillaParser.AppContext = AppContext;

class MessageContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this._msg_entry = null; // Msg_entryContext;
        this.es = []; // of Msg_entryContexts;
        super.copyFrom(ctx);
    }

	LBRACE() {
	    return this.getToken(miniScillaParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(miniScillaParser.RBRACE, 0);
	};

	msg_entry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Msg_entryContext);
	    } else {
	        return this.getTypedRuleContext(Msg_entryContext,i);
	    }
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(miniScillaParser.SEMICOLON);
	    } else {
	        return this.getToken(miniScillaParser.SEMICOLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitMessage(this);
		}
	}


}

miniScillaParser.MessageContext = MessageContext;

class LetContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.x = null; // IdentifierContext;
        this.ty = null; // TypContext;
        this.f = null; // Simple_expContext;
        this.e = null; // ExpContext;
        super.copyFrom(ctx);
    }

	LET() {
	    return this.getToken(miniScillaParser.LET, 0);
	};

	EQ() {
	    return this.getToken(miniScillaParser.EQ, 0);
	};

	IN() {
	    return this.getToken(miniScillaParser.IN, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	simple_exp() {
	    return this.getTypedRuleContext(Simple_expContext,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	COLON() {
	    return this.getToken(miniScillaParser.COLON, 0);
	};

	typ() {
	    return this.getTypedRuleContext(TypContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterLet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitLet(this);
		}
	}


}

miniScillaParser.LetContext = LetContext;

class AtomicContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.a = null; // Atomic_expContext;
        super.copyFrom(ctx);
    }

	atomic_exp() {
	    return this.getTypedRuleContext(Atomic_expContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterAtomic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitAtomic(this);
		}
	}


}

miniScillaParser.AtomicContext = AtomicContext;

class TAppContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.f = null; // SidContext;
        this._targ = null; // TargContext;
        this.targs = []; // of TargContexts;
        super.copyFrom(ctx);
    }

	AT() {
	    return this.getToken(miniScillaParser.AT, 0);
	};

	sid() {
	    return this.getTypedRuleContext(SidContext,0);
	};

	targ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TargContext);
	    } else {
	        return this.getTypedRuleContext(TargContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterTApp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitTApp(this);
		}
	}


}

miniScillaParser.TAppContext = TAppContext;

class TFunContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.i = null; // Token;
        this.e = null; // ExpContext;
        super.copyFrom(ctx);
    }

	TFUN() {
	    return this.getToken(miniScillaParser.TFUN, 0);
	};

	ARROW() {
	    return this.getToken(miniScillaParser.ARROW, 0);
	};

	TID() {
	    return this.getToken(miniScillaParser.TID, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterTFun(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitTFun(this);
		}
	}


}

miniScillaParser.TFunContext = TFunContext;

class DataConstructorAppContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.c = null; // ScidContext;
        this.ts = null; // CtargsContext;
        this._sid = null; // SidContext;
        this.args = []; // of SidContexts;
        super.copyFrom(ctx);
    }

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	ctargs() {
	    return this.getTypedRuleContext(CtargsContext,0);
	};

	sid = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SidContext);
	    } else {
	        return this.getTypedRuleContext(SidContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterDataConstructorApp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitDataConstructorApp(this);
		}
	}


}

miniScillaParser.DataConstructorAppContext = DataConstructorAppContext;

class FunContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // IdentifierContext;
        this.ty = null; // TypContext;
        this.e = null; // ExpContext;
        super.copyFrom(ctx);
    }

	FUN() {
	    return this.getToken(miniScillaParser.FUN, 0);
	};

	LPAREN() {
	    return this.getToken(miniScillaParser.LPAREN, 0);
	};

	COLON() {
	    return this.getToken(miniScillaParser.COLON, 0);
	};

	RPAREN() {
	    return this.getToken(miniScillaParser.RPAREN, 0);
	};

	ARROW() {
	    return this.getToken(miniScillaParser.ARROW, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	typ() {
	    return this.getTypedRuleContext(TypContext,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterFun(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitFun(this);
		}
	}


}

miniScillaParser.FunContext = FunContext;

class BuiltinContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.b = null; // Token;
        this._ctargs = null; // CtargsContext;
        this.targs = []; // of CtargsContexts;
        this.xs = null; // Builtin_argsContext;
        super.copyFrom(ctx);
    }

	BUILTIN() {
	    return this.getToken(miniScillaParser.BUILTIN, 0);
	};

	ID() {
	    return this.getToken(miniScillaParser.ID, 0);
	};

	builtin_args() {
	    return this.getTypedRuleContext(Builtin_argsContext,0);
	};

	ctargs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CtargsContext);
	    } else {
	        return this.getTypedRuleContext(CtargsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterBuiltin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitBuiltin(this);
		}
	}


}

miniScillaParser.BuiltinContext = BuiltinContext;

class MatchContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.x_sid = null; // SidContext;
        this.cs = null; // Exp_pm_clauseContext;
        super.copyFrom(ctx);
    }

	MATCH() {
	    return this.getToken(miniScillaParser.MATCH, 0);
	};

	WITH() {
	    return this.getToken(miniScillaParser.WITH, 0);
	};

	END() {
	    return this.getToken(miniScillaParser.END, 0);
	};

	sid() {
	    return this.getTypedRuleContext(SidContext,0);
	};

	exp_pm_clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Exp_pm_clauseContext);
	    } else {
	        return this.getTypedRuleContext(Exp_pm_clauseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterMatch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitMatch(this);
		}
	}


}

miniScillaParser.MatchContext = MatchContext;

class Atomic_expContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_atomic_exp;
        this.i = null; // SidContext
        this.l = null; // LitContext
    }

	sid() {
	    return this.getTypedRuleContext(SidContext,0);
	};

	lit() {
	    return this.getTypedRuleContext(LitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterAtomic_exp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitAtomic_exp(this);
		}
	}


}



class LitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_lit;
        this.i = null; // Token
        this.i_int = null; // Int_Context
        this.i_number = null; // Token
        this.n = null; // Token
        this.h = null; // Token
        this.s = null; // Token
        this.kt = null; // T_map_keyContext
        this.vt = null; // T_map_valueContext
        this.b = null; // Token
    }

	CID() {
	    return this.getToken(miniScillaParser.CID, 0);
	};

	INTTY() {
	    return this.getToken(miniScillaParser.INTTY, 0);
	};

	int_() {
	    return this.getTypedRuleContext(Int_Context,0);
	};

	BNUM() {
	    return this.getToken(miniScillaParser.BNUM, 0);
	};

	NUMBER() {
	    return this.getToken(miniScillaParser.NUMBER, 0);
	};

	HEX() {
	    return this.getToken(miniScillaParser.HEX, 0);
	};

	STRING() {
	    return this.getToken(miniScillaParser.STRING, 0);
	};

	EMP() {
	    return this.getToken(miniScillaParser.EMP, 0);
	};

	t_map_key() {
	    return this.getTypedRuleContext(T_map_keyContext,0);
	};

	t_map_value() {
	    return this.getTypedRuleContext(T_map_valueContext,0);
	};

	BOOLEAN() {
	    return this.getToken(miniScillaParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitLit(this);
		}
	}


}



class CtargsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_ctargs;
        this.ts = null; // TargContext
    }

	LBRACE() {
	    return this.getToken(miniScillaParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(miniScillaParser.RBRACE, 0);
	};

	targ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TargContext);
	    } else {
	        return this.getTypedRuleContext(TargContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterCtargs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitCtargs(this);
		}
	}


}



class Map_accessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_map_access;
        this.i = null; // SidContext
    }

	LSQB() {
	    return this.getToken(miniScillaParser.LSQB, 0);
	};

	RSQB() {
	    return this.getToken(miniScillaParser.RSQB, 0);
	};

	sid() {
	    return this.getTypedRuleContext(SidContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterMap_access(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitMap_access(this);
		}
	}


}



class PatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_pattern;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BinderContext extends PatternContext {

    constructor(parser, ctx) {
        super(parser);
        this.x = null; // Token;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(miniScillaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterBinder(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitBinder(this);
		}
	}


}

miniScillaParser.BinderContext = BinderContext;

class WildcardContext extends PatternContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	UNDERSCORE() {
	    return this.getToken(miniScillaParser.UNDERSCORE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitWildcard(this);
		}
	}


}

miniScillaParser.WildcardContext = WildcardContext;

class ConstructorContext extends PatternContext {

    constructor(parser, ctx) {
        super(parser);
        this.c = null; // ScidContext;
        this.ps = null; // Arg_patternContext;
        super.copyFrom(ctx);
    }

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	arg_pattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arg_patternContext);
	    } else {
	        return this.getTypedRuleContext(Arg_patternContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterConstructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitConstructor(this);
		}
	}


}

miniScillaParser.ConstructorContext = ConstructorContext;

class Arg_patternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_arg_pattern;
        this.x = null; // Token
        this.c = null; // ScidContext
        this.p = null; // PatternContext
    }

	UNDERSCORE() {
	    return this.getToken(miniScillaParser.UNDERSCORE, 0);
	};

	ID() {
	    return this.getToken(miniScillaParser.ID, 0);
	};

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	LPAREN() {
	    return this.getToken(miniScillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(miniScillaParser.RPAREN, 0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterArg_pattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitArg_pattern(this);
		}
	}


}



class Exp_pm_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_exp_pm_clause;
        this.p = null; // PatternContext
        this.e = null; // ExpContext
    }

	BAR() {
	    return this.getToken(miniScillaParser.BAR, 0);
	};

	ARROW() {
	    return this.getToken(miniScillaParser.ARROW, 0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterExp_pm_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitExp_pm_clause(this);
		}
	}


}



class Msg_entryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_msg_entry;
        this.i = null; // SidContext
        this.l = null; // LitContext
        this.v = null; // SidContext
    }

	COLON() {
	    return this.getToken(miniScillaParser.COLON, 0);
	};

	sid = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SidContext);
	    } else {
	        return this.getTypedRuleContext(SidContext,i);
	    }
	};

	lit() {
	    return this.getTypedRuleContext(LitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterMsg_entry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitMsg_entry(this);
		}
	}


}



class Builtin_argsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_builtin_args;
        this.args = null; // SidContext
    }

	sid = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SidContext);
	    } else {
	        return this.getTypedRuleContext(SidContext,i);
	    }
	};

	LPAREN() {
	    return this.getToken(miniScillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(miniScillaParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterBuiltin_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitBuiltin_args(this);
		}
	}


}



class Exp_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_exp_term;
        this.e = null; // ExpContext
    }

	EOF() {
	    return this.getToken(miniScillaParser.EOF, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterExp_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitExp_term(this);
		}
	}


}



class Type_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_type_term;
        this.t = null; // TypContext
    }

	EOF() {
	    return this.getToken(miniScillaParser.EOF, 0);
	};

	typ() {
	    return this.getTypedRuleContext(TypContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterType_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitType_term(this);
		}
	}


}



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
        this.ruleIndex = miniScillaParser.RULE_identifier;
    }

	ID() {
	    return this.getToken(miniScillaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class SidContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_sid;
        this.name = null; // Token
        this.ns = null; // Token
    }

	ID() {
	    return this.getToken(miniScillaParser.ID, 0);
	};

	SPID() {
	    return this.getToken(miniScillaParser.SPID, 0);
	};

	PERIOD() {
	    return this.getToken(miniScillaParser.PERIOD, 0);
	};

	CID() {
	    return this.getToken(miniScillaParser.CID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterSid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitSid(this);
		}
	}


}



class ScidContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_scid;
        this.name = null; // Token
        this.ns = null; // Token
        this.bool = null; // Token
        this.option = null; // Token
        this.prim = null; // Prim_typesContext
    }

	CID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(miniScillaParser.CID);
	    } else {
	        return this.getToken(miniScillaParser.CID, i);
	    }
	};


	PERIOD() {
	    return this.getToken(miniScillaParser.PERIOD, 0);
	};

	HEX() {
	    return this.getToken(miniScillaParser.HEX, 0);
	};

	BOOLEAN() {
	    return this.getToken(miniScillaParser.BOOLEAN, 0);
	};

	OPTION() {
	    return this.getToken(miniScillaParser.OPTION, 0);
	};

	prim_types() {
	    return this.getTypedRuleContext(Prim_typesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.enterScid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitScid(this);
		}
	}


}




miniScillaParser.Int_Context = Int_Context; 
miniScillaParser.Prim_typesContext = Prim_typesContext; 
miniScillaParser.T_map_keyContext = T_map_keyContext; 
miniScillaParser.T_map_value_argsContext = T_map_value_argsContext; 
miniScillaParser.T_map_valueContext = T_map_valueContext; 
miniScillaParser.T_map_value_allow_targsContext = T_map_value_allow_targsContext; 
miniScillaParser.Address_typContext = Address_typContext; 
miniScillaParser.TypContext = TypContext; 
miniScillaParser.TargContext = TargContext; 
miniScillaParser.Address_type_fieldContext = Address_type_fieldContext; 
miniScillaParser.ExpContext = ExpContext; 
miniScillaParser.Simple_expContext = Simple_expContext; 
miniScillaParser.Atomic_expContext = Atomic_expContext; 
miniScillaParser.LitContext = LitContext; 
miniScillaParser.CtargsContext = CtargsContext; 
miniScillaParser.Map_accessContext = Map_accessContext; 
miniScillaParser.PatternContext = PatternContext; 
miniScillaParser.Arg_patternContext = Arg_patternContext; 
miniScillaParser.Exp_pm_clauseContext = Exp_pm_clauseContext; 
miniScillaParser.Msg_entryContext = Msg_entryContext; 
miniScillaParser.Builtin_argsContext = Builtin_argsContext; 
miniScillaParser.Exp_termContext = Exp_termContext; 
miniScillaParser.Type_termContext = Type_termContext; 
miniScillaParser.IdentifierContext = IdentifierContext; 
miniScillaParser.SidContext = SidContext; 
miniScillaParser.ScidContext = ScidContext; 
