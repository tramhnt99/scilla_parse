// Generated from miniScilla.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import miniScillaListener from './miniScillaListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003@\u0132\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002?\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003J\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004U\n\u0004\u0003\u0005\u0003\u0005\u0006\u0005",
    "Y\n\u0005\r\u0005\u000e\u0005Z\u0003\u0005\u0005\u0005^\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006i\n\u0006\f\u0006\u000e\u0006",
    "l\u000b\u0006\u0003\u0006\u0003\u0006\u0005\u0006p\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007u\n\u0007\f\u0007\u000e\u0007x\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0089\n\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u008e\n\u0007\f\u0007",
    "\u000e\u0007\u0091\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u009e\n\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0006\u000b",
    "\u00b9\n\u000b\r\u000b\u000e\u000b\u00ba\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0007\u000b\u00c1\n\u000b\f\u000b\u000e\u000b\u00c4",
    "\u000b\u000b\u0003\u000b\u0005\u000b\u00c7\n\u000b\u0003\f\u0003\f\u0005",
    "\f\u00cb\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00d8\n\r\u0003\u000e\u0003",
    "\u000e\u0007\u000e\u00dc\n\u000e\f\u000e\u000e\u000e\u00df\u000b\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00eb\n",
    "\u0010\f\u0010\u000e\u0010\u00ee\u000b\u0010\u0005\u0010\u00f0\n\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00f9\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0108",
    "\n\u0013\u0003\u0014\u0006\u0014\u010b\n\u0014\r\u0014\u000e\u0014\u010c",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u0111\n\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u0120\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0005\u0019\u0127\n\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0130",
    "\n\u001a\u0003\u001a\u0002\u0003\f\u001b\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02\u0002\u0002",
    "\u0002\u014c\u0002>\u0003\u0002\u0002\u0002\u0004I\u0003\u0002\u0002",
    "\u0002\u0006T\u0003\u0002\u0002\u0002\b]\u0003\u0002\u0002\u0002\no",
    "\u0003\u0002\u0002\u0002\f\u0088\u0003\u0002\u0002\u0002\u000e\u009d",
    "\u0003\u0002\u0002\u0002\u0010\u009f\u0003\u0002\u0002\u0002\u0012\u00a4",
    "\u0003\u0002\u0002\u0002\u0014\u00c6\u0003\u0002\u0002\u0002\u0016\u00ca",
    "\u0003\u0002\u0002\u0002\u0018\u00d7\u0003\u0002\u0002\u0002\u001a\u00d9",
    "\u0003\u0002\u0002\u0002\u001c\u00e2\u0003\u0002\u0002\u0002\u001e\u00ef",
    "\u0003\u0002\u0002\u0002 \u00f8\u0003\u0002\u0002\u0002\"\u00fa\u0003",
    "\u0002\u0002\u0002$\u0107\u0003\u0002\u0002\u0002&\u0110\u0003\u0002",
    "\u0002\u0002(\u0112\u0003\u0002\u0002\u0002*\u0115\u0003\u0002\u0002",
    "\u0002,\u0118\u0003\u0002\u0002\u0002.\u011f\u0003\u0002\u0002\u0002",
    "0\u0126\u0003\u0002\u0002\u00022\u012f\u0003\u0002\u0002\u00024?\u0005",
    "2\u001a\u000256\u0007&\u0002\u000267\u00052\u001a\u000278\u0007\'\u0002",
    "\u00028?\u0003\u0002\u0002\u00029:\u0007&\u0002\u0002:;\u0005\n\u0006",
    "\u0002;<\u0007\'\u0002\u0002<?\u0003\u0002\u0002\u0002=?\u0005\n\u0006",
    "\u0002>4\u0003\u0002\u0002\u0002>5\u0003\u0002\u0002\u0002>9\u0003\u0002",
    "\u0002\u0002>=\u0003\u0002\u0002\u0002?\u0003\u0003\u0002\u0002\u0002",
    "@A\u0007&\u0002\u0002AB\u0005\b\u0005\u0002BC\u0007\'\u0002\u0002CJ",
    "\u0003\u0002\u0002\u0002DJ\u00052\u001a\u0002EF\u0007\u0017\u0002\u0002",
    "FG\u0005\u0002\u0002\u0002GH\u0005\u0006\u0004\u0002HJ\u0003\u0002\u0002",
    "\u0002I@\u0003\u0002\u0002\u0002ID\u0003\u0002\u0002\u0002IE\u0003\u0002",
    "\u0002\u0002J\u0005\u0003\u0002\u0002\u0002KU\u00052\u001a\u0002LM\u0007",
    "\u0017\u0002\u0002MN\u0005\u0002\u0002\u0002NO\u0005\u0006\u0004\u0002",
    "OP\u0007&\u0002\u0002PQ\u0005\b\u0005\u0002QR\u0007\'\u0002\u0002RU",
    "\u0003\u0002\u0002\u0002SU\u0005\n\u0006\u0002TK\u0003\u0002\u0002\u0002",
    "TL\u0003\u0002\u0002\u0002TS\u0003\u0002\u0002\u0002U\u0007\u0003\u0002",
    "\u0002\u0002VX\u00052\u001a\u0002WY\u0005\u0004\u0003\u0002XW\u0003",
    "\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002",
    "Z[\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\^\u0005\u0006",
    "\u0004\u0002]V\u0003\u0002\u0002\u0002]\\\u0003\u0002\u0002\u0002^\t",
    "\u0003\u0002\u0002\u0002_`\u0007?\u0002\u0002`a\u0007\n\u0002\u0002",
    "ap\u0007\u000b\u0002\u0002bc\u0007?\u0002\u0002cd\u0007\n\u0002\u0002",
    "de\u0007\u000e\u0002\u0002ej\u0005\u0010\t\u0002fg\u0007*\u0002\u0002",
    "gi\u0005\u0010\t\u0002hf\u0003\u0002\u0002\u0002il\u0003\u0002\u0002",
    "\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002km\u0003\u0002",
    "\u0002\u0002lj\u0003\u0002\u0002\u0002mn\u0007\u000b\u0002\u0002np\u0003",
    "\u0002\u0002\u0002o_\u0003\u0002\u0002\u0002ob\u0003\u0002\u0002\u0002",
    "p\u000b\u0003\u0002\u0002\u0002qr\b\u0007\u0001\u0002rv\u00052\u001a",
    "\u0002su\u0005\u000e\b\u0002ts\u0003\u0002\u0002\u0002ux\u0003\u0002",
    "\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w\u0089",
    "\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\u0007\u0017\u0002",
    "\u0002z{\u0005\u0002\u0002\u0002{|\u0005\u0006\u0004\u0002|\u0089\u0003",
    "\u0002\u0002\u0002}~\u0007&\u0002\u0002~\u007f\u0005\f\u0007\u0002\u007f",
    "\u0080\u0007\'\u0002\u0002\u0080\u0089\u0003\u0002\u0002\u0002\u0081",
    "\u0089\u0005\n\u0006\u0002\u0082\u0083\u0007\u0003\u0002\u0002\u0083",
    "\u0084\u0007@\u0002\u0002\u0084\u0085\u0007\"\u0002\u0002\u0085\u0089",
    "\u0005\f\u0007\u0005\u0086\u0089\u0007@\u0002\u0002\u0087\u0089\u0007",
    "<\u0002\u0002\u0088q\u0003\u0002\u0002\u0002\u0088y\u0003\u0002\u0002",
    "\u0002\u0088}\u0003\u0002\u0002\u0002\u0088\u0081\u0003\u0002\u0002",
    "\u0002\u0088\u0082\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002",
    "\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u008f\u0003\u0002\u0002",
    "\u0002\u008a\u008b\f\b\u0002\u0002\u008b\u008c\u0007,\u0002\u0002\u008c",
    "\u008e\u0005\f\u0007\t\u008d\u008a\u0003\u0002\u0002\u0002\u008e\u0091",
    "\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0003\u0002\u0002\u0002\u0090\r\u0003\u0002\u0002\u0002\u0091\u008f",
    "\u0003\u0002\u0002\u0002\u0092\u0093\u0007&\u0002\u0002\u0093\u0094",
    "\u0005\f\u0007\u0002\u0094\u0095\u0007\'\u0002\u0002\u0095\u009e\u0003",
    "\u0002\u0002\u0002\u0096\u009e\u00052\u001a\u0002\u0097\u009e\u0007",
    "@\u0002\u0002\u0098\u009e\u0005\n\u0006\u0002\u0099\u009a\u0007\u0017",
    "\u0002\u0002\u009a\u009b\u0005\u0002\u0002\u0002\u009b\u009c\u0005\u0006",
    "\u0004\u0002\u009c\u009e\u0003\u0002\u0002\u0002\u009d\u0092\u0003\u0002",
    "\u0002\u0002\u009d\u0096\u0003\u0002\u0002\u0002\u009d\u0097\u0003\u0002",
    "\u0002\u0002\u009d\u0098\u0003\u0002\u0002\u0002\u009d\u0099\u0003\u0002",
    "\u0002\u0002\u009e\u000f\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\u0012",
    "\u0002\u0002\u00a0\u00a1\u0005,\u0017\u0002\u00a1\u00a2\u0007!\u0002",
    "\u0002\u00a2\u00a3\u0005\f\u0007\u0002\u00a3\u0011\u0003\u0002\u0002",
    "\u0002\u00a4\u00a5\u0005\u0014\u000b\u0002\u00a5\u0013\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0007\u0007\u0002\u0002\u00a7\u00a8\u0005,\u0017",
    "\u0002\u00a8\u00a9\u0007-\u0002\u0002\u00a9\u00aa\u0005\u0014\u000b",
    "\u0002\u00aa\u00ab\u0007\b\u0002\u0002\u00ab\u00ac\u0005\u0012\n\u0002",
    "\u00ac\u00c7\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\f\u0002\u0002",
    "\u00ae\u00af\u0007&\u0002\u0002\u00af\u00b0\u0005,\u0017\u0002\u00b0",
    "\u00b1\u0007!\u0002\u0002\u00b1\u00b2\u0005\f\u0007\u0002\u00b2\u00b3",
    "\u0007\'\u0002\u0002\u00b3\u00b4\u0007+\u0002\u0002\u00b4\u00b5\u0005",
    "\u0012\n\u0002\u00b5\u00c7\u0003\u0002\u0002\u0002\u00b6\u00b8\u0005",
    ".\u0018\u0002\u00b7\u00b9\u00050\u0019\u0002\u00b8\u00b7\u0003\u0002",
    "\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002",
    "\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00c7\u0003\u0002",
    "\u0002\u0002\u00bc\u00c7\u0005\u0016\f\u0002\u00bd\u00be\u0007\u0004",
    "\u0002\u0002\u00be\u00c2\u0007=\u0002\u0002\u00bf\u00c1\u0005\u001a",
    "\u000e\u0002\u00c0\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002",
    "\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002",
    "\u0002\u0002\u00c3\u00c5\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002",
    "\u0002\u0002\u00c5\u00c7\u0005&\u0014\u0002\u00c6\u00a6\u0003\u0002",
    "\u0002\u0002\u00c6\u00ad\u0003\u0002\u0002\u0002\u00c6\u00b6\u0003\u0002",
    "\u0002\u0002\u00c6\u00bc\u0003\u0002\u0002\u0002\u00c6\u00bd\u0003\u0002",
    "\u0002\u0002\u00c7\u0015\u0003\u0002\u0002\u0002\u00c8\u00cb\u0005.",
    "\u0018\u0002\u00c9\u00cb\u0005\u0018\r\u0002\u00ca\u00c8\u0003\u0002",
    "\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00cb\u0017\u0003\u0002",
    "\u0002\u0002\u00cc\u00d8\u0007?\u0002\u0002\u00cd\u00ce\u0007<\u0002",
    "\u0002\u00ce\u00d8\u00074\u0002\u0002\u00cf\u00d8\u00074\u0002\u0002",
    "\u00d0\u00d8\u0007;\u0002\u0002\u00d1\u00d8\u00078\u0002\u0002\u00d2",
    "\u00d3\u0007\u0016\u0002\u0002\u00d3\u00d4\u0005\u0002\u0002\u0002\u00d4",
    "\u00d5\u0005\u0006\u0004\u0002\u00d5\u00d8\u0003\u0002\u0002\u0002\u00d6",
    "\u00d8\u0007:\u0002\u0002\u00d7\u00cc\u0003\u0002\u0002\u0002\u00d7",
    "\u00cd\u0003\u0002\u0002\u0002\u00d7\u00cf\u0003\u0002\u0002\u0002\u00d7",
    "\u00d0\u0003\u0002\u0002\u0002\u00d7\u00d1\u0003\u0002\u0002\u0002\u00d7",
    "\u00d2\u0003\u0002\u0002\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d8",
    "\u0019\u0003\u0002\u0002\u0002\u00d9\u00dd\u0007(\u0002\u0002\u00da",
    "\u00dc\u0005\u000e\b\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00dc",
    "\u00df\u0003\u0002\u0002\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0003\u0002\u0002\u0002\u00de\u00e0\u0003\u0002\u0002\u0002\u00df",
    "\u00dd\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007)\u0002\u0002\u00e1",
    "\u001b\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007$\u0002\u0002\u00e3",
    "\u00e4\u00050\u0019\u0002\u00e4\u00e5\u0007%\u0002\u0002\u00e5\u001d",
    "\u0003\u0002\u0002\u0002\u00e6\u00f0\u00072\u0002\u0002\u00e7\u00f0",
    "\u0007=\u0002\u0002\u00e8\u00ec\u00052\u001a\u0002\u00e9\u00eb\u0005",
    " \u0011\u0002\u00ea\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ee\u0003",
    "\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003",
    "\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003",
    "\u0002\u0002\u0002\u00ef\u00e6\u0003\u0002\u0002\u0002\u00ef\u00e7\u0003",
    "\u0002\u0002\u0002\u00ef\u00e8\u0003\u0002\u0002\u0002\u00f0\u001f\u0003",
    "\u0002\u0002\u0002\u00f1\u00f9\u00072\u0002\u0002\u00f2\u00f9\u0007",
    "=\u0002\u0002\u00f3\u00f9\u00052\u001a\u0002\u00f4\u00f5\u0007&\u0002",
    "\u0002\u00f5\u00f6\u0005\u001e\u0010\u0002\u00f6\u00f7\u0007\'\u0002",
    "\u0002\u00f7\u00f9\u0003\u0002\u0002\u0002\u00f8\u00f1\u0003\u0002\u0002",
    "\u0002\u00f8\u00f2\u0003\u0002\u0002\u0002\u00f8\u00f3\u0003\u0002\u0002",
    "\u0002\u00f8\u00f4\u0003\u0002\u0002\u0002\u00f9!\u0003\u0002\u0002",
    "\u0002\u00fa\u00fb\u0007#\u0002\u0002\u00fb\u00fc\u0005\u001e\u0010",
    "\u0002\u00fc\u00fd\u0007+\u0002\u0002\u00fd\u00fe\u0005\u0012\n\u0002",
    "\u00fe#\u0003\u0002\u0002\u0002\u00ff\u0100\u0005.\u0018\u0002\u0100",
    "\u0101\u0007!\u0002\u0002\u0101\u0102\u0005\u0018\r\u0002\u0102\u0108",
    "\u0003\u0002\u0002\u0002\u0103\u0104\u0005.\u0018\u0002\u0104\u0105",
    "\u0007!\u0002\u0002\u0105\u0106\u0005.\u0018\u0002\u0106\u0108\u0003",
    "\u0002\u0002\u0002\u0107\u00ff\u0003\u0002\u0002\u0002\u0107\u0103\u0003",
    "\u0002\u0002\u0002\u0108%\u0003\u0002\u0002\u0002\u0109\u010b\u0005",
    "0\u0019\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010b\u010c\u0003",
    "\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010d\u0003",
    "\u0002\u0002\u0002\u010d\u0111\u0003\u0002\u0002\u0002\u010e\u010f\u0007",
    "&\u0002\u0002\u010f\u0111\u0007\'\u0002\u0002\u0110\u010a\u0003\u0002",
    "\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0111\'\u0003\u0002",
    "\u0002\u0002\u0112\u0113\u0005\u0012\n\u0002\u0113\u0114\u0007\u0002",
    "\u0002\u0003\u0114)\u0003\u0002\u0002\u0002\u0115\u0116\u0005\f\u0007",
    "\u0002\u0116\u0117\u0007\u0002\u0002\u0003\u0117+\u0003\u0002\u0002",
    "\u0002\u0118\u0119\u0007=\u0002\u0002\u0119-\u0003\u0002\u0002\u0002",
    "\u011a\u0120\u0007=\u0002\u0002\u011b\u0120\u0007>\u0002\u0002\u011c",
    "\u011d\u0007?\u0002\u0002\u011d\u011e\u0007\"\u0002\u0002\u011e\u0120",
    "\u0007=\u0002\u0002\u011f\u011a\u0003\u0002\u0002\u0002\u011f\u011b",
    "\u0003\u0002\u0002\u0002\u011f\u011c\u0003\u0002\u0002\u0002\u0120/",
    "\u0003\u0002\u0002\u0002\u0121\u0127\u0007=\u0002\u0002\u0122\u0127",
    "\u0007>\u0002\u0002\u0123\u0124\u0007?\u0002\u0002\u0124\u0125\u0007",
    "\"\u0002\u0002\u0125\u0127\u0007=\u0002\u0002\u0126\u0121\u0003\u0002",
    "\u0002\u0002\u0126\u0122\u0003\u0002\u0002\u0002\u0126\u0123\u0003\u0002",
    "\u0002\u0002\u01271\u0003\u0002\u0002\u0002\u0128\u0130\u0007?\u0002",
    "\u0002\u0129\u012a\u0007?\u0002\u0002\u012a\u012b\u0007\"\u0002\u0002",
    "\u012b\u0130\u0007?\u0002\u0002\u012c\u012d\u0007;\u0002\u0002\u012d",
    "\u012e\u0007\"\u0002\u0002\u012e\u0130\u0007?\u0002\u0002\u012f\u0128",
    "\u0003\u0002\u0002\u0002\u012f\u0129\u0003\u0002\u0002\u0002\u012f\u012c",
    "\u0003\u0002\u0002\u0002\u01303\u0003\u0002\u0002\u0002\u001c>ITZ]j",
    "ov\u0088\u008f\u009d\u00ba\u00c2\u00c6\u00ca\u00d7\u00dd\u00ec\u00ef",
    "\u00f8\u0107\u010c\u0110\u011f\u0126\u012f"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class miniScillaParser extends antlr4.Parser {

    static grammarFileName = "miniScilla.g4";
    static literalNames = [ null, "'forall'", "'builtin'", "'library'", 
                            "'import'", "'let'", "'in'", "'match'", "'with'", 
                            "'end'", "'fun'", "'tfun'", "'contract'", "'transition'", 
                            "'send'", "'event'", "'field'", "'accept'", 
                            "'exists'", "'delete'", "'emp'", "'map'", "'scilla_version'", 
                            "'type'", "'of'", "'try'", "'catch'", "'as'", 
                            "'procedure'", "'throw'", "';'", "':'", "'.'", 
                            "'|'", "'['", "']'", "'('", "')'", "'{'", "'}'", 
                            "','", "'=>'", "'->'", "'='", "'&'", "'<-'", 
                            "':='", "'@'", "'_'" ];
    static symbolicNames = [ null, "FORALL", "BUILTIN", "LIBRARY", "IMPORT", 
                             "LET", "IN", "MATCH", "WITH", "END", "FUN", 
                             "TFUN", "CONTRACT", "TRANSITION", "SEND", "EVENT", 
                             "FIELD", "ACCEPT", "EXISTS", "DELETE", "EMP", 
                             "MAP", "SCILLA_VERSION", "TYPE", "OF", "TRY", 
                             "CATCH", "AS", "PROCEDURE", "THROW", "SEMICOLON", 
                             "COLON", "PERIOD", "BAR", "LSQB", "RSQB", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "COMMA", "ARROW", 
                             "TARROW", "EQ", "AND", "FETCH", "ASSIGN", "AT", 
                             "UNDERSCORE", "BlockComment", "NUMBER", "INT", 
                             "WS", "TOSKIP", "STRING", "FLOAT", "BOOLEAN", 
                             "HEX", "INTTY", "ID", "SPID", "CID", "TID" ];
    static ruleNames = [ "t_map_key", "t_map_value_args", "t_map_value", 
                         "t_map_value_allow_targs", "address_typ", "typ", 
                         "targ", "address_type_field", "exp", "simple_exp", 
                         "atomic_exp", "lit", "ctargs", "map_access", "pattern", 
                         "arg_pattern", "exp_pm_clause", "msg_entry", "builtin_args", 
                         "exp_term", "type_term", "identifier", "sid", "sident", 
                         "scid" ];

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
    	case 5:
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




	t_map_key() {
	    let localctx = new T_map_keyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, miniScillaParser.RULE_t_map_key);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            localctx.kt_to_map = this.scid();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 52;
	            localctx.kt_to_map = this.scid();
	            this.state = 53;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 55;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 56;
	            localctx.kt = this.address_typ();
	            this.state = 57;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 59;
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
	    this.enterRule(localctx, 2, miniScillaParser.RULE_t_map_value_args);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.LPAREN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 63;
	            localctx.t = this.t_map_value_allow_targs();
	            this.state = 64;
	            this.match(miniScillaParser.RPAREN);
	            break;
	        case miniScillaParser.HEX:
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            localctx.d = this.scid();
	            break;
	        case miniScillaParser.MAP:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            this.match(miniScillaParser.MAP);
	            this.state = 68;
	            localctx.k = this.t_map_key();
	            this.state = 69;
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
	    this.enterRule(localctx, 4, miniScillaParser.RULE_t_map_value);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            localctx.d = this.scid();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.match(miniScillaParser.MAP);
	            this.state = 75;
	            localctx.k = this.t_map_key();
	            this.state = 76;
	            localctx.v = this.t_map_value();
	            this.state = 77;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 78;
	            localctx.t = this.t_map_value_allow_targs();
	            this.state = 79;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 81;
	            localctx.vt = this.address_typ();
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
	    this.enterRule(localctx, 6, miniScillaParser.RULE_t_map_value_allow_targs);
	    var _la = 0; // Token type
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            localctx.d = this.scid();
	            this.state = 86; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 85;
	                this.t_map_value_args();
	                this.state = 88; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===miniScillaParser.MAP || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (miniScillaParser.LPAREN - 36)) | (1 << (miniScillaParser.HEX - 36)) | (1 << (miniScillaParser.CID - 36)))) !== 0));
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
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
	    this.enterRule(localctx, 8, miniScillaParser.RULE_address_typ);
	    var _la = 0; // Token type
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 93;
	            localctx.d = this.match(miniScillaParser.CID);
	            this.state = 94;
	            this.match(miniScillaParser.WITH);
	            this.state = 95;
	            this.match(miniScillaParser.END);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            localctx.d = this.match(miniScillaParser.CID);
	            this.state = 97;
	            this.match(miniScillaParser.WITH);
	            this.state = 98;
	            this.match(miniScillaParser.CONTRACT);
	            this.state = 99;
	            localctx._address_type_field = this.address_type_field();
	            localctx.fs.push(localctx._address_type_field);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniScillaParser.COMMA) {
	                this.state = 100;
	                this.match(miniScillaParser.COMMA);
	                this.state = 101;
	                localctx._address_type_field = this.address_type_field();
	                localctx.fs.push(localctx._address_type_field);
	                this.state = 106;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 107;
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
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, miniScillaParser.RULE_typ, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 112;
	            localctx.d = this.scid();
	            this.state = 116;
	            this._errHandler.sync(this);
	            let _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 113;
	                    localctx._targ = this.targ();
	                    localctx.targs.push(localctx._targ); 
	                }
	                this.state = 118;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	            }

	            break;

	        case 2:
	            this.state = 119;
	            this.match(miniScillaParser.MAP);
	            this.state = 120;
	            localctx.k = this.t_map_key();
	            this.state = 121;
	            localctx.v = this.t_map_value();
	            break;

	        case 3:
	            this.state = 123;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 124;
	            localctx.t = this.typ(0);
	            this.state = 125;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 4:
	            this.state = 127;
	            localctx.t_to_map = this.address_typ();
	            break;

	        case 5:
	            this.state = 128;
	            this.match(miniScillaParser.FORALL);
	            this.state = 129;
	            localctx.tv = this.match(miniScillaParser.TID);
	            this.state = 130;
	            this.match(miniScillaParser.PERIOD);
	            this.state = 131;
	            localctx.t = this.typ(3);
	            break;

	        case 6:
	            this.state = 132;
	            localctx.t_var = this.match(miniScillaParser.TID);
	            break;

	        case 7:
	            this.state = 133;
	            this.match(miniScillaParser.INTTY);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 141;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TypContext(this, _parentctx, _parentState);
	                localctx.t1 = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, miniScillaParser.RULE_typ);
	                this.state = 136;
	                if (!( this.precpred(this._ctx, 6))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                }
	                this.state = 137;
	                this.match(miniScillaParser.TARROW);
	                this.state = 138;
	                localctx.t2 = this.typ(7); 
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
	    this.enterRule(localctx, 12, miniScillaParser.RULE_targ);
	    try {
	        this.state = 155;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 145;
	            localctx.t = this.typ(0);
	            this.state = 146;
	            this.match(miniScillaParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            localctx.d = this.scid();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 149;
	            localctx.t_var = this.match(miniScillaParser.TID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 150;
	            localctx.t_to_map = this.address_typ();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 151;
	            this.match(miniScillaParser.MAP);
	            this.state = 152;
	            localctx.k = this.t_map_key();
	            this.state = 153;
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
	    this.enterRule(localctx, 14, miniScillaParser.RULE_address_type_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(miniScillaParser.FIELD);
	        this.state = 158;
	        localctx.id = this.identifier();
	        this.state = 159;
	        this.match(miniScillaParser.COLON);
	        this.state = 160;
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
	    this.enterRule(localctx, 16, miniScillaParser.RULE_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
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
	    this.enterRule(localctx, 18, miniScillaParser.RULE_simple_exp);
	    var _la = 0; // Token type
	    try {
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LetContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.match(miniScillaParser.LET);
	            this.state = 165;
	            localctx.x = this.identifier();
	            this.state = 166;
	            this.match(miniScillaParser.EQ);
	            this.state = 167;
	            localctx.f = this.simple_exp();
	            this.state = 168;
	            this.match(miniScillaParser.IN);
	            this.state = 169;
	            localctx.e = this.exp();
	            break;

	        case 2:
	            localctx = new FunContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 171;
	            this.match(miniScillaParser.FUN);
	            this.state = 172;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 173;
	            localctx.id = this.identifier();
	            this.state = 174;
	            this.match(miniScillaParser.COLON);
	            this.state = 175;
	            localctx.ty = this.typ(0);
	            this.state = 176;
	            this.match(miniScillaParser.RPAREN);
	            this.state = 177;
	            this.match(miniScillaParser.ARROW);
	            this.state = 178;
	            localctx.e = this.exp();
	            break;

	        case 3:
	            localctx = new AppContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 180;
	            localctx.f_var = this.sid();
	            this.state = 182; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 181;
	                localctx._sident = this.sident();
	                localctx.args.push(localctx._sident);
	                this.state = 184; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (miniScillaParser.ID - 59)) | (1 << (miniScillaParser.SPID - 59)) | (1 << (miniScillaParser.CID - 59)))) !== 0));
	            break;

	        case 4:
	            localctx = new AtomicContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 186;
	            localctx.a = this.atomic_exp();
	            break;

	        case 5:
	            localctx = new BuiltinContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 187;
	            this.match(miniScillaParser.BUILTIN);
	            this.state = 188;
	            localctx.b = this.match(miniScillaParser.ID);
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===miniScillaParser.LBRACE) {
	                this.state = 189;
	                localctx._ctargs = this.ctargs();
	                localctx.targs.push(localctx._ctargs);
	                this.state = 194;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 195;
	            localctx.xs = this.builtin_args();
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
	    this.enterRule(localctx, 20, miniScillaParser.RULE_atomic_exp);
	    try {
	        this.state = 200;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            localctx.i = this.sid();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
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
	    this.enterRule(localctx, 22, miniScillaParser.RULE_lit);
	    try {
	        this.state = 213;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            localctx.i = this.match(miniScillaParser.CID);
	            break;
	        case miniScillaParser.INTTY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
	            this.match(miniScillaParser.INTTY);
	            this.state = 204;
	            localctx.i_number = this.match(miniScillaParser.NUMBER);
	            break;
	        case miniScillaParser.NUMBER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 205;
	            localctx.n = this.match(miniScillaParser.NUMBER);
	            break;
	        case miniScillaParser.HEX:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 206;
	            localctx.h = this.match(miniScillaParser.HEX);
	            break;
	        case miniScillaParser.STRING:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 207;
	            localctx.s = this.match(miniScillaParser.STRING);
	            break;
	        case miniScillaParser.EMP:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 208;
	            this.match(miniScillaParser.EMP);
	            this.state = 209;
	            localctx.kt = this.t_map_key();
	            this.state = 210;
	            localctx.vt = this.t_map_value();
	            break;
	        case miniScillaParser.BOOLEAN:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 212;
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
	    this.enterRule(localctx, 24, miniScillaParser.RULE_ctargs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(miniScillaParser.LBRACE);
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===miniScillaParser.MAP || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (miniScillaParser.LPAREN - 36)) | (1 << (miniScillaParser.HEX - 36)) | (1 << (miniScillaParser.CID - 36)) | (1 << (miniScillaParser.TID - 36)))) !== 0)) {
	            this.state = 216;
	            localctx.ts = this.targ();
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 222;
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
	    this.enterRule(localctx, 26, miniScillaParser.RULE_map_access);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(miniScillaParser.LSQB);
	        this.state = 225;
	        localctx.i = this.sident();
	        this.state = 226;
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
	    this.enterRule(localctx, 28, miniScillaParser.RULE_pattern);
	    var _la = 0; // Token type
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.UNDERSCORE:
	            localctx = new WildcardContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this.match(miniScillaParser.UNDERSCORE);
	            break;
	        case miniScillaParser.ID:
	            localctx = new BinderContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229;
	            localctx.x = this.match(miniScillaParser.ID);
	            break;
	        case miniScillaParser.HEX:
	        case miniScillaParser.CID:
	            localctx = new ConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 230;
	            localctx.c = this.scid();
	            this.state = 234;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (miniScillaParser.LPAREN - 36)) | (1 << (miniScillaParser.UNDERSCORE - 36)) | (1 << (miniScillaParser.HEX - 36)) | (1 << (miniScillaParser.ID - 36)) | (1 << (miniScillaParser.CID - 36)))) !== 0)) {
	                this.state = 231;
	                localctx.ps = this.arg_pattern();
	                this.state = 236;
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
	    this.enterRule(localctx, 30, miniScillaParser.RULE_arg_pattern);
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.UNDERSCORE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 239;
	            this.match(miniScillaParser.UNDERSCORE);
	            break;
	        case miniScillaParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 240;
	            localctx.x = this.match(miniScillaParser.ID);
	            break;
	        case miniScillaParser.HEX:
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 241;
	            localctx.c = this.scid();
	            break;
	        case miniScillaParser.LPAREN:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 242;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 243;
	            localctx.p = this.pattern();
	            this.state = 244;
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
	    this.enterRule(localctx, 32, miniScillaParser.RULE_exp_pm_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(miniScillaParser.BAR);
	        this.state = 249;
	        localctx.p = this.pattern();
	        this.state = 250;
	        this.match(miniScillaParser.ARROW);
	        this.state = 251;
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
	    this.enterRule(localctx, 34, miniScillaParser.RULE_msg_entry);
	    try {
	        this.state = 261;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 253;
	            localctx.i = this.sid();
	            this.state = 254;
	            this.match(miniScillaParser.COLON);
	            this.state = 255;
	            localctx.l = this.lit();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 257;
	            localctx.i = this.sid();
	            this.state = 258;
	            this.match(miniScillaParser.COLON);
	            this.state = 259;
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
	    this.enterRule(localctx, 36, miniScillaParser.RULE_builtin_args);
	    var _la = 0; // Token type
	    try {
	        this.state = 270;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.ID:
	        case miniScillaParser.SPID:
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 264; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 263;
	                localctx.args = this.sident();
	                this.state = 266; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (miniScillaParser.ID - 59)) | (1 << (miniScillaParser.SPID - 59)) | (1 << (miniScillaParser.CID - 59)))) !== 0));
	            break;
	        case miniScillaParser.LPAREN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 268;
	            this.match(miniScillaParser.LPAREN);
	            this.state = 269;
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
	    this.enterRule(localctx, 38, miniScillaParser.RULE_exp_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        localctx.e = this.exp();
	        this.state = 273;
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
	    this.enterRule(localctx, 40, miniScillaParser.RULE_type_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        localctx.t = this.typ(0);
	        this.state = 276;
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
	    this.enterRule(localctx, 42, miniScillaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
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
	    this.enterRule(localctx, 44, miniScillaParser.RULE_sid);
	    try {
	        this.state = 285;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 280;
	            localctx.name = this.match(miniScillaParser.ID);
	            break;
	        case miniScillaParser.SPID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 281;
	            localctx.name = this.match(miniScillaParser.SPID);
	            break;
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 282;
	            localctx.ns = this.match(miniScillaParser.CID);
	            this.state = 283;
	            this.match(miniScillaParser.PERIOD);
	            this.state = 284;
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



	sident() {
	    let localctx = new SidentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, miniScillaParser.RULE_sident);
	    try {
	        this.state = 292;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case miniScillaParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 287;
	            localctx.name = this.match(miniScillaParser.ID);
	            break;
	        case miniScillaParser.SPID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 288;
	            localctx.name = this.match(miniScillaParser.SPID);
	            break;
	        case miniScillaParser.CID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 289;
	            localctx.ns = this.match(miniScillaParser.CID);
	            this.state = 290;
	            this.match(miniScillaParser.PERIOD);
	            this.state = 291;
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
	    this.enterRule(localctx, 48, miniScillaParser.RULE_scid);
	    try {
	        this.state = 301;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 294;
	            localctx.name = this.match(miniScillaParser.CID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
	            localctx.ns = this.match(miniScillaParser.CID);
	            this.state = 296;
	            this.match(miniScillaParser.PERIOD);
	            this.state = 297;
	            localctx.name = this.match(miniScillaParser.CID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 298;
	            localctx.ns = this.match(miniScillaParser.HEX);
	            this.state = 299;
	            this.match(miniScillaParser.PERIOD);
	            this.state = 300;
	            localctx.name = this.match(miniScillaParser.CID);
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
miniScillaParser.FORALL = 1;
miniScillaParser.BUILTIN = 2;
miniScillaParser.LIBRARY = 3;
miniScillaParser.IMPORT = 4;
miniScillaParser.LET = 5;
miniScillaParser.IN = 6;
miniScillaParser.MATCH = 7;
miniScillaParser.WITH = 8;
miniScillaParser.END = 9;
miniScillaParser.FUN = 10;
miniScillaParser.TFUN = 11;
miniScillaParser.CONTRACT = 12;
miniScillaParser.TRANSITION = 13;
miniScillaParser.SEND = 14;
miniScillaParser.EVENT = 15;
miniScillaParser.FIELD = 16;
miniScillaParser.ACCEPT = 17;
miniScillaParser.EXISTS = 18;
miniScillaParser.DELETE = 19;
miniScillaParser.EMP = 20;
miniScillaParser.MAP = 21;
miniScillaParser.SCILLA_VERSION = 22;
miniScillaParser.TYPE = 23;
miniScillaParser.OF = 24;
miniScillaParser.TRY = 25;
miniScillaParser.CATCH = 26;
miniScillaParser.AS = 27;
miniScillaParser.PROCEDURE = 28;
miniScillaParser.THROW = 29;
miniScillaParser.SEMICOLON = 30;
miniScillaParser.COLON = 31;
miniScillaParser.PERIOD = 32;
miniScillaParser.BAR = 33;
miniScillaParser.LSQB = 34;
miniScillaParser.RSQB = 35;
miniScillaParser.LPAREN = 36;
miniScillaParser.RPAREN = 37;
miniScillaParser.LBRACE = 38;
miniScillaParser.RBRACE = 39;
miniScillaParser.COMMA = 40;
miniScillaParser.ARROW = 41;
miniScillaParser.TARROW = 42;
miniScillaParser.EQ = 43;
miniScillaParser.AND = 44;
miniScillaParser.FETCH = 45;
miniScillaParser.ASSIGN = 46;
miniScillaParser.AT = 47;
miniScillaParser.UNDERSCORE = 48;
miniScillaParser.BlockComment = 49;
miniScillaParser.NUMBER = 50;
miniScillaParser.INT = 51;
miniScillaParser.WS = 52;
miniScillaParser.TOSKIP = 53;
miniScillaParser.STRING = 54;
miniScillaParser.FLOAT = 55;
miniScillaParser.BOOLEAN = 56;
miniScillaParser.HEX = 57;
miniScillaParser.INTTY = 58;
miniScillaParser.ID = 59;
miniScillaParser.SPID = 60;
miniScillaParser.CID = 61;
miniScillaParser.TID = 62;

miniScillaParser.RULE_t_map_key = 0;
miniScillaParser.RULE_t_map_value_args = 1;
miniScillaParser.RULE_t_map_value = 2;
miniScillaParser.RULE_t_map_value_allow_targs = 3;
miniScillaParser.RULE_address_typ = 4;
miniScillaParser.RULE_typ = 5;
miniScillaParser.RULE_targ = 6;
miniScillaParser.RULE_address_type_field = 7;
miniScillaParser.RULE_exp = 8;
miniScillaParser.RULE_simple_exp = 9;
miniScillaParser.RULE_atomic_exp = 10;
miniScillaParser.RULE_lit = 11;
miniScillaParser.RULE_ctargs = 12;
miniScillaParser.RULE_map_access = 13;
miniScillaParser.RULE_pattern = 14;
miniScillaParser.RULE_arg_pattern = 15;
miniScillaParser.RULE_exp_pm_clause = 16;
miniScillaParser.RULE_msg_entry = 17;
miniScillaParser.RULE_builtin_args = 18;
miniScillaParser.RULE_exp_term = 19;
miniScillaParser.RULE_type_term = 20;
miniScillaParser.RULE_identifier = 21;
miniScillaParser.RULE_sid = 22;
miniScillaParser.RULE_sident = 23;
miniScillaParser.RULE_scid = 24;

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

	INTTY() {
	    return this.getToken(miniScillaParser.INTTY, 0);
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
        this._sident = null; // SidentContext;
        this.args = []; // of SidentContexts;
        super.copyFrom(ctx);
    }

	sid() {
	    return this.getTypedRuleContext(SidContext,0);
	};

	sident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SidentContext);
	    } else {
	        return this.getTypedRuleContext(SidentContext,i);
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

class LetContext extends Simple_expContext {

    constructor(parser, ctx) {
        super(parser);
        this.x = null; // IdentifierContext;
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
        this.i = null; // SidentContext
    }

	LSQB() {
	    return this.getToken(miniScillaParser.LSQB, 0);
	};

	RSQB() {
	    return this.getToken(miniScillaParser.RSQB, 0);
	};

	sident() {
	    return this.getTypedRuleContext(SidentContext,0);
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
        this.args = null; // SidentContext
    }

	sident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SidentContext);
	    } else {
	        return this.getTypedRuleContext(SidentContext,i);
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



class SidentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = miniScillaParser.RULE_sident;
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
	        listener.enterSident(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof miniScillaListener ) {
	        listener.exitSident(this);
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
miniScillaParser.SidentContext = SidentContext; 
miniScillaParser.ScidContext = ScidContext; 
