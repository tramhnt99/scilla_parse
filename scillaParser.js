// Generated from scilla.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import scillaListener from './scillaListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003@\u0130\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003,",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00036\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003;\n\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003?\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003F\n\u0003\u0003\u0003\u0006\u0003I\n\u0003\r",
    "\u0003\u000e\u0003J\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "P\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003U\n\u0003\f",
    "\u0003\u000e\u0003X\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003^\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u0003c\n\u0003\f\u0003\u000e\u0003f\u000b\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003j\n\u0003\u0003\u0004\u0003\u0004\u0005\u0004n\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005t\n\u0005",
    "\u0003\u0006\u0003\u0006\u0005\u0006x\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007",
    "\u0081\n\u0007\f\u0007\u000e\u0007\u0084\u000b\u0007\u0005\u0007\u0086",
    "\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u008d\n\b\u0003",
    "\b\u0003\b\u0005\b\u0091\n\b\u0003\b\u0003\b\u0005\b\u0095\n\b\u0003",
    "\t\u0003\t\u0005\t\u0099\n\t\u0003\t\u0003\t\u0005\t\u009d\n\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0005\n\u00a4\n\n\u0003\n\u0003\n",
    "\u0005\n\u00a8\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00ae\n\n",
    "\u0003\n\u0003\n\u0005\n\u00b2\n\n\u0003\n\u0003\n\u0005\n\u00b6\n\n",
    "\u0003\u000b\u0006\u000b\u00b9\n\u000b\r\u000b\u000e\u000b\u00ba\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00bf\n\u000b\u0003\f\u0003\f\u0003\f",
    "\u0003\r\u0005\r\u00c5\n\r\u0003\r\u0003\r\u0005\r\u00c9\n\r\u0003\u000e",
    "\u0005\u000e\u00cc\n\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00d0",
    "\n\u000e\u0003\u000e\u0005\u000e\u00d3\n\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00d7\n\u000e\u0003\u000e\u0005\u000e\u00da\n\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00e0\n\u000e",
    "\u0005\u000e\u00e2\n\u000e\u0003\u000f\u0007\u000f\u00e5\n\u000f\f\u000f",
    "\u000e\u000f\u00e8\u000b\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00ec",
    "\n\u000f\f\u000f\u000e\u000f\u00ef\u000b\u000f\u0003\u000f\u0007\u000f",
    "\u00f2\n\u000f\f\u000f\u000e\u000f\u00f5\u000b\u000f\u0003\u000f\u0003",
    "\u000f\u0007\u000f\u00f9\n\u000f\f\u000f\u000e\u000f\u00fc\u000b\u000f",
    "\u0003\u000f\u0007\u000f\u00ff\n\u000f\f\u000f\u000e\u000f\u0102\u000b",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u0108",
    "\n\u000f\f\u000f\u000e\u000f\u010b\u000b\u000f\u0005\u000f\u010d\n\u000f",
    "\u0003\u0010\u0005\u0010\u0110\n\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u0114\n\u0010\u0003\u0010\u0005\u0010\u0117\n\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u011d\n\u0010\u0003",
    "\u0010\u0005\u0010\u0120\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u0126\n\u0010\u0005\u0010\u0128\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0002\u0002\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"\u0002\u0002\u0002\u015d\u0002$\u0003",
    "\u0002\u0002\u0002\u0004i\u0003\u0002\u0002\u0002\u0006m\u0003\u0002",
    "\u0002\u0002\bs\u0003\u0002\u0002\u0002\nu\u0003\u0002\u0002\u0002\f",
    "\u0085\u0003\u0002\u0002\u0002\u000e\u0094\u0003\u0002\u0002\u0002\u0010",
    "\u0096\u0003\u0002\u0002\u0002\u0012\u00b5\u0003\u0002\u0002\u0002\u0014",
    "\u00be\u0003\u0002\u0002\u0002\u0016\u00c0\u0003\u0002\u0002\u0002\u0018",
    "\u00c4\u0003\u0002\u0002\u0002\u001a\u00e1\u0003\u0002\u0002\u0002\u001c",
    "\u010c\u0003\u0002\u0002\u0002\u001e\u0127\u0003\u0002\u0002\u0002 ",
    "\u0129\u0003\u0002\u0002\u0002\"\u012c\u0003\u0002\u0002\u0002$%\u0005",
    "\u0004\u0003\u0002%\u0003\u0003\u0002\u0002\u0002&\'\u0007\u0007\u0002",
    "\u0002\'(\u00075\u0002\u0002()\u0005\u0018\r\u0002)+\u0007-\u0002\u0002",
    "*,\u00075\u0002\u0002+*\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,-\u0003\u0002\u0002\u0002-.\u0005\u0004\u0003\u0002./\u00075",
    "\u0002\u0002/0\u0007\b\u0002\u000201\u00075\u0002\u000212\u0005\u0002",
    "\u0002\u00022j\u0003\u0002\u0002\u000235\u0007\f\u0002\u000246\u0007",
    "5\u0002\u000254\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000267",
    "\u0003\u0002\u0002\u000278\u0007&\u0002\u00028:\u0005\"\u0012\u0002",
    "9;\u00075\u0002\u0002:9\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<>\u0007\'\u0002\u0002=?\u00075\u0002",
    "\u0002>=\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0003\u0002",
    "\u0002\u0002@A\u0007+\u0002\u0002AB\u0005\u0002\u0002\u0002Bj\u0003",
    "\u0002\u0002\u0002CE\u0005\u001a\u000e\u0002DF\u00075\u0002\u0002ED",
    "\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FH\u0003\u0002\u0002",
    "\u0002GI\u0005\u001c\u000f\u0002HG\u0003\u0002\u0002\u0002IJ\u0003\u0002",
    "\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002Kj\u0003",
    "\u0002\u0002\u0002Lj\u0005\u0006\u0004\u0002MO\u0007(\u0002\u0002NP",
    "\u00075\u0002\u0002ON\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002",
    "PQ\u0003\u0002\u0002\u0002QV\u0005\u0012\n\u0002RS\u0007*\u0002\u0002",
    "SU\u0005\u0012\n\u0002TR\u0003\u0002\u0002\u0002UX\u0003\u0002\u0002",
    "\u0002VT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WY\u0003\u0002",
    "\u0002\u0002XV\u0003\u0002\u0002\u0002YZ\u0007)\u0002\u0002Zj\u0003",
    "\u0002\u0002\u0002[]\u0007\t\u0002\u0002\\^\u00075\u0002\u0002]\\\u0003",
    "\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002",
    "_`\u0005\u001a\u000e\u0002`d\u0007\n\u0002\u0002ac\u0005\u0010\t\u0002",
    "ba\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002\u0002",
    "\u0002de\u0003\u0002\u0002\u0002eg\u0003\u0002\u0002\u0002fd\u0003\u0002",
    "\u0002\u0002gh\u0007\u000b\u0002\u0002hj\u0003\u0002\u0002\u0002i&\u0003",
    "\u0002\u0002\u0002i3\u0003\u0002\u0002\u0002iC\u0003\u0002\u0002\u0002",
    "iL\u0003\u0002\u0002\u0002iM\u0003\u0002\u0002\u0002i[\u0003\u0002\u0002",
    "\u0002j\u0005\u0003\u0002\u0002\u0002kn\u0005\u001a\u000e\u0002ln\u0005",
    "\b\u0005\u0002mk\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002\u0002n",
    "\u0007\u0003\u0002\u0002\u0002ot\u0007?\u0002\u0002pt\u00073\u0002\u0002",
    "qt\u0007:\u0002\u0002rt\u00076\u0002\u0002so\u0003\u0002\u0002\u0002",
    "sp\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002",
    "\u0002t\t\u0003\u0002\u0002\u0002uw\u0007$\u0002\u0002vx\u00075\u0002",
    "\u0002wv\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0003\u0002",
    "\u0002\u0002yz\u0005\u001c\u000f\u0002z{\u0007%\u0002\u0002{\u000b\u0003",
    "\u0002\u0002\u0002|\u0086\u00072\u0002\u0002}\u0086\u0007<\u0002\u0002",
    "~\u0082\u0005\u001e\u0010\u0002\u007f\u0081\u0005\u000e\b\u0002\u0080",
    "\u007f\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002\u0002\u0002\u0082",
    "\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083",
    "\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0085",
    "|\u0003\u0002\u0002\u0002\u0085}\u0003\u0002\u0002\u0002\u0085~\u0003",
    "\u0002\u0002\u0002\u0086\r\u0003\u0002\u0002\u0002\u0087\u0095\u0007",
    "2\u0002\u0002\u0088\u0095\u0007<\u0002\u0002\u0089\u0095\u0005\u001e",
    "\u0010\u0002\u008a\u008c\u0007&\u0002\u0002\u008b\u008d\u00075\u0002",
    "\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u0090\u0005\f\u0007",
    "\u0002\u008f\u0091\u00075\u0002\u0002\u0090\u008f\u0003\u0002\u0002",
    "\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0007\'\u0002\u0002\u0093\u0095\u0003\u0002\u0002",
    "\u0002\u0094\u0087\u0003\u0002\u0002\u0002\u0094\u0088\u0003\u0002\u0002",
    "\u0002\u0094\u0089\u0003\u0002\u0002\u0002\u0094\u008a\u0003\u0002\u0002",
    "\u0002\u0095\u000f\u0003\u0002\u0002\u0002\u0096\u0098\u0007#\u0002",
    "\u0002\u0097\u0099\u00075\u0002\u0002\u0098\u0097\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002",
    "\u0002\u009a\u009c\u0005\f\u0007\u0002\u009b\u009d\u00075\u0002\u0002",
    "\u009c\u009b\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002",
    "\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009f\u0007+\u0002\u0002",
    "\u009f\u00a0\u0005\u0002\u0002\u0002\u00a0\u0011\u0003\u0002\u0002\u0002",
    "\u00a1\u00a3\u0005\u001a\u000e\u0002\u00a2\u00a4\u00075\u0002\u0002",
    "\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a7\u0007!\u0002\u0002",
    "\u00a6\u00a8\u00075\u0002\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\u0005\b\u0005\u0002\u00aa\u00b6\u0003\u0002\u0002\u0002",
    "\u00ab\u00ad\u0005\u001a\u000e\u0002\u00ac\u00ae\u00075\u0002\u0002",
    "\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b1\u0007!\u0002\u0002",
    "\u00b0\u00b2\u00075\u0002\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002",
    "\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0005\u001a\u000e\u0002\u00b4\u00b6\u0003\u0002\u0002\u0002",
    "\u00b5\u00a1\u0003\u0002\u0002\u0002\u00b5\u00ab\u0003\u0002\u0002\u0002",
    "\u00b6\u0013\u0003\u0002\u0002\u0002\u00b7\u00b9\u0005\u001c\u000f\u0002",
    "\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002",
    "\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002",
    "\u00bb\u00bf\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007&\u0002\u0002",
    "\u00bd\u00bf\u0007\'\u0002\u0002\u00be\u00b8\u0003\u0002\u0002\u0002",
    "\u00be\u00bc\u0003\u0002\u0002\u0002\u00bf\u0015\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0005\u0002\u0002\u0002\u00c1\u00c2\u0007\u0002\u0002\u0003",
    "\u00c2\u0017\u0003\u0002\u0002\u0002\u00c3\u00c5\u00075\u0002\u0002",
    "\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c8\u0007<\u0002\u0002",
    "\u00c7\u00c9\u00075\u0002\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u0019\u0003\u0002\u0002\u0002",
    "\u00ca\u00cc\u00075\u0002\u0002\u00cb\u00ca\u0003\u0002\u0002\u0002",
    "\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002",
    "\u00cd\u00cf\u0007<\u0002\u0002\u00ce\u00d0\u00075\u0002\u0002\u00cf",
    "\u00ce\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0",
    "\u00e2\u0003\u0002\u0002\u0002\u00d1\u00d3\u00075\u0002\u0002\u00d2",
    "\u00d1\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3",
    "\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d6\u0007>\u0002\u0002\u00d5",
    "\u00d7\u00075\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d6",
    "\u00d7\u0003\u0002\u0002\u0002\u00d7\u00e2\u0003\u0002\u0002\u0002\u00d8",
    "\u00da\u00075\u0002\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002\u00d9",
    "\u00da\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0007?\u0002\u0002\u00dc\u00dd\u0007\"\u0002\u0002\u00dd\u00df",
    "\u0007<\u0002\u0002\u00de\u00e0\u00075\u0002\u0002\u00df\u00de\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e2\u0003",
    "\u0002\u0002\u0002\u00e1\u00cb\u0003\u0002\u0002\u0002\u00e1\u00d2\u0003",
    "\u0002\u0002\u0002\u00e1\u00d9\u0003\u0002\u0002\u0002\u00e2\u001b\u0003",
    "\u0002\u0002\u0002\u00e3\u00e5\u00075\u0002\u0002\u00e4\u00e3\u0003",
    "\u0002\u0002\u0002\u00e5\u00e8\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003",
    "\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e9\u0003",
    "\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e9\u00ed\u0007",
    "<\u0002\u0002\u00ea\u00ec\u00075\u0002\u0002\u00eb\u00ea\u0003\u0002",
    "\u0002\u0002\u00ec\u00ef\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002",
    "\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u010d\u0003\u0002",
    "\u0002\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00f0\u00f2\u00075",
    "\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f5\u0003\u0002",
    "\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002",
    "\u0002\u0002\u00f4\u00f6\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002",
    "\u0002\u0002\u00f6\u00fa\u0007>\u0002\u0002\u00f7\u00f9\u00075\u0002",
    "\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fc\u0003\u0002\u0002",
    "\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002",
    "\u0002\u00fb\u010d\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002",
    "\u0002\u00fd\u00ff\u00075\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002",
    "\u0002\u00ff\u0102\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002",
    "\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0103\u0003\u0002\u0002",
    "\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0103\u0104\u0007?\u0002",
    "\u0002\u0104\u0105\u0007\"\u0002\u0002\u0105\u0109\u0007<\u0002\u0002",
    "\u0106\u0108\u00075\u0002\u0002\u0107\u0106\u0003\u0002\u0002\u0002",
    "\u0108\u010b\u0003\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002",
    "\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010d\u0003\u0002\u0002\u0002",
    "\u010b\u0109\u0003\u0002\u0002\u0002\u010c\u00e6\u0003\u0002\u0002\u0002",
    "\u010c\u00f3\u0003\u0002\u0002\u0002\u010c\u0100\u0003\u0002\u0002\u0002",
    "\u010d\u001d\u0003\u0002\u0002\u0002\u010e\u0110\u00075\u0002\u0002",
    "\u010f\u010e\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0113\u0007?\u0002\u0002",
    "\u0112\u0114\u00075\u0002\u0002\u0113\u0112\u0003\u0002\u0002\u0002",
    "\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0128\u0003\u0002\u0002\u0002",
    "\u0115\u0117\u00075\u0002\u0002\u0116\u0115\u0003\u0002\u0002\u0002",
    "\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002",
    "\u0118\u0119\u0007?\u0002\u0002\u0119\u011a\u0007\"\u0002\u0002\u011a",
    "\u011c\u0007?\u0002\u0002\u011b\u011d\u00075\u0002\u0002\u011c\u011b",
    "\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d\u0128",
    "\u0003\u0002\u0002\u0002\u011e\u0120\u00075\u0002\u0002\u011f\u011e",
    "\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120\u0121",
    "\u0003\u0002\u0002\u0002\u0121\u0122\u0007:\u0002\u0002\u0122\u0123",
    "\u0007\"\u0002\u0002\u0123\u0125\u0007?\u0002\u0002\u0124\u0126\u0007",
    "5\u0002\u0002\u0125\u0124\u0003\u0002\u0002\u0002\u0125\u0126\u0003",
    "\u0002\u0002\u0002\u0126\u0128\u0003\u0002\u0002\u0002\u0127\u010f\u0003",
    "\u0002\u0002\u0002\u0127\u0116\u0003\u0002\u0002\u0002\u0127\u011f\u0003",
    "\u0002\u0002\u0002\u0128\u001f\u0003\u0002\u0002\u0002\u0129\u012a\u0007",
    "!\u0002\u0002\u012a\u012b\u0007<\u0002\u0002\u012b!\u0003\u0002\u0002",
    "\u0002\u012c\u012d\u0007<\u0002\u0002\u012d\u012e\u0005 \u0011\u0002",
    "\u012e#\u0003\u0002\u0002\u00025+5:>EJOV]dimsw\u0082\u0085\u008c\u0090",
    "\u0094\u0098\u009c\u00a3\u00a7\u00ad\u00b1\u00b5\u00ba\u00be\u00c4\u00c8",
    "\u00cb\u00cf\u00d2\u00d6\u00d9\u00df\u00e1\u00e6\u00ed\u00f3\u00fa\u0100",
    "\u0109\u010c\u010f\u0113\u0116\u011c\u011f\u0125\u0127"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class scillaParser extends antlr4.Parser {

    static grammarFileName = "scilla.g4";
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
                             "UNDERSCORE", "NUMBER", "INT", "WS", "STRING", 
                             "FLOAT", "BOOLEAN", "HEXDIGIT", "HEX", "INTTY", 
                             "ID", "ALPHANUM", "SPID", "CID", "TID" ];
    static ruleNames = [ "exp", "simple_exp", "atomic_exp", "lit", "map_access", 
                         "pattern", "arg_pattern", "exp_pm_clause", "msg_entry", 
                         "builtin_args", "exp_term", "identifier", "sid", 
                         "sident", "scid", "type_annot", "id_with_typ" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = scillaParser.ruleNames;
        this.literalNames = scillaParser.literalNames;
        this.symbolicNames = scillaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, scillaParser.RULE_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
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
	    this.enterRule(localctx, 2, scillaParser.RULE_simple_exp);
	    var _la = 0; // Token type
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.match(scillaParser.LET);
	            this.state = 37;
	            this.match(scillaParser.WS);
	            this.state = 38;
	            localctx.x = this.identifier();
	            this.state = 39;
	            this.match(scillaParser.EQ);
	            this.state = 41;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            if(la_===1) {
	                this.state = 40;
	                this.match(scillaParser.WS);

	            }
	            this.state = 43;
	            localctx.f = this.simple_exp();
	            this.state = 44;
	            this.match(scillaParser.WS);
	            this.state = 45;
	            this.match(scillaParser.IN);
	            this.state = 46;
	            this.match(scillaParser.WS);
	            this.state = 47;
	            localctx.e = this.exp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.match(scillaParser.FUN);
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 50;
	                this.match(scillaParser.WS);
	            }

	            this.state = 53;
	            this.match(scillaParser.LPAREN);
	            this.state = 54;
	            localctx.iwt = this.id_with_typ();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 55;
	                this.match(scillaParser.WS);
	            }

	            this.state = 58;
	            this.match(scillaParser.RPAREN);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 59;
	                this.match(scillaParser.WS);
	            }

	            this.state = 62;
	            this.match(scillaParser.ARROW);
	            this.state = 63;
	            localctx.e = this.exp();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
	            localctx.f_var = this.sid();
	            this.state = 67;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 66;
	                this.match(scillaParser.WS);

	            }
	            this.state = 70; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 69;
	            		localctx._sident = this.sident();
	            		localctx.args.push(localctx._sident);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 72; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 74;
	            localctx.a = this.atomic_exp();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 75;
	            this.match(scillaParser.LBRACE);
	            this.state = 77;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 76;
	                this.match(scillaParser.WS);

	            }
	            this.state = 79;
	            localctx._msg_entry = this.msg_entry();
	            localctx.es.push(localctx._msg_entry);
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===scillaParser.COMMA) {
	                this.state = 80;
	                this.match(scillaParser.COMMA);
	                this.state = 81;
	                localctx._msg_entry = this.msg_entry();
	                localctx.es.push(localctx._msg_entry);
	                this.state = 86;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 87;
	            this.match(scillaParser.RBRACE);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 89;
	            this.match(scillaParser.MATCH);
	            this.state = 91;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 90;
	                this.match(scillaParser.WS);

	            }
	            this.state = 93;
	            localctx.x_sid = this.sid();
	            this.state = 94;
	            this.match(scillaParser.WITH);
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===scillaParser.BAR) {
	                this.state = 95;
	                localctx.cs = this.exp_pm_clause();
	                this.state = 100;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 101;
	            this.match(scillaParser.END);
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
	    this.enterRule(localctx, 4, scillaParser.RULE_atomic_exp);
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            localctx.i = this.sid();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
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
	    this.enterRule(localctx, 6, scillaParser.RULE_lit);
	    try {
	        this.state = 113;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case scillaParser.CID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            localctx.i = this.match(scillaParser.CID);
	            break;
	        case scillaParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            localctx.n = this.match(scillaParser.NUMBER);
	            break;
	        case scillaParser.HEX:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            localctx.h = this.match(scillaParser.HEX);
	            break;
	        case scillaParser.STRING:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 112;
	            localctx.s = this.match(scillaParser.STRING);
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



	map_access() {
	    let localctx = new Map_accessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, scillaParser.RULE_map_access);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(scillaParser.LSQB);
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 116;
	            this.match(scillaParser.WS);

	        }
	        this.state = 119;
	        localctx.i = this.sident();
	        this.state = 120;
	        this.match(scillaParser.RSQB);
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
	    this.enterRule(localctx, 10, scillaParser.RULE_pattern);
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case scillaParser.UNDERSCORE:
	            localctx = new WildcardContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 122;
	            this.match(scillaParser.UNDERSCORE);
	            break;
	        case scillaParser.ID:
	            localctx = new BinderContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            localctx.x = this.match(scillaParser.ID);
	            break;
	        case scillaParser.WS:
	        case scillaParser.HEX:
	        case scillaParser.CID:
	            localctx = new ConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 124;
	            localctx.c = this.scid();
	            this.state = 128;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 125;
	                    localctx.ps = this.arg_pattern(); 
	                }
	                this.state = 130;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
	    this.enterRule(localctx, 12, scillaParser.RULE_arg_pattern);
	    var _la = 0; // Token type
	    try {
	        this.state = 146;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case scillaParser.UNDERSCORE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.match(scillaParser.UNDERSCORE);
	            break;
	        case scillaParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 134;
	            localctx.x = this.match(scillaParser.ID);
	            break;
	        case scillaParser.WS:
	        case scillaParser.HEX:
	        case scillaParser.CID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 135;
	            localctx.c = this.scid();
	            break;
	        case scillaParser.LPAREN:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 136;
	            this.match(scillaParser.LPAREN);
	            this.state = 138;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            if(la_===1) {
	                this.state = 137;
	                this.match(scillaParser.WS);

	            }
	            this.state = 140;
	            localctx.p = this.pattern();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 141;
	                this.match(scillaParser.WS);
	            }

	            this.state = 144;
	            this.match(scillaParser.RPAREN);
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
	    this.enterRule(localctx, 14, scillaParser.RULE_exp_pm_clause);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(scillaParser.BAR);
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 149;
	            this.match(scillaParser.WS);

	        }
	        this.state = 152;
	        localctx.p = this.pattern();
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===scillaParser.WS) {
	            this.state = 153;
	            this.match(scillaParser.WS);
	        }

	        this.state = 156;
	        this.match(scillaParser.ARROW);
	        this.state = 157;
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
	    this.enterRule(localctx, 16, scillaParser.RULE_msg_entry);
	    var _la = 0; // Token type
	    try {
	        this.state = 179;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            localctx.i = this.sid();
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 160;
	                this.match(scillaParser.WS);
	            }

	            this.state = 163;
	            this.match(scillaParser.COLON);
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 164;
	                this.match(scillaParser.WS);
	            }

	            this.state = 167;
	            localctx.l = this.lit();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            localctx.i = this.sid();
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 170;
	                this.match(scillaParser.WS);
	            }

	            this.state = 173;
	            this.match(scillaParser.COLON);
	            this.state = 175;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 174;
	                this.match(scillaParser.WS);

	            }
	            this.state = 177;
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
	    this.enterRule(localctx, 18, scillaParser.RULE_builtin_args);
	    var _la = 0; // Token type
	    try {
	        this.state = 188;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case scillaParser.WS:
	        case scillaParser.ID:
	        case scillaParser.SPID:
	        case scillaParser.CID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 182; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 181;
	                localctx.args = this.sident();
	                this.state = 184; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (scillaParser.WS - 51)) | (1 << (scillaParser.ID - 51)) | (1 << (scillaParser.SPID - 51)) | (1 << (scillaParser.CID - 51)))) !== 0));
	            break;
	        case scillaParser.LPAREN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 186;
	            this.match(scillaParser.LPAREN);
	            this.state = 187;
	            this.match(scillaParser.RPAREN);
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
	    this.enterRule(localctx, 20, scillaParser.RULE_exp_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        localctx.e = this.exp();
	        this.state = 191;
	        this.match(scillaParser.EOF);
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
	    this.enterRule(localctx, 22, scillaParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===scillaParser.WS) {
	            this.state = 193;
	            this.match(scillaParser.WS);
	        }

	        this.state = 196;
	        this.match(scillaParser.ID);
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===scillaParser.WS) {
	            this.state = 197;
	            this.match(scillaParser.WS);
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



	sid() {
	    let localctx = new SidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, scillaParser.RULE_sid);
	    var _la = 0; // Token type
	    try {
	        this.state = 223;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 200;
	                this.match(scillaParser.WS);
	            }

	            this.state = 203;
	            localctx.name = this.match(scillaParser.ID);
	            this.state = 205;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	            if(la_===1) {
	                this.state = 204;
	                this.match(scillaParser.WS);

	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 207;
	                this.match(scillaParser.WS);
	            }

	            this.state = 210;
	            localctx.name = this.match(scillaParser.SPID);
	            this.state = 212;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            if(la_===1) {
	                this.state = 211;
	                this.match(scillaParser.WS);

	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 214;
	                this.match(scillaParser.WS);
	            }

	            this.state = 217;
	            localctx.ns = this.match(scillaParser.CID);
	            this.state = 218;
	            this.match(scillaParser.PERIOD);
	            this.state = 219;
	            localctx.name = this.match(scillaParser.ID);
	            this.state = 221;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	            if(la_===1) {
	                this.state = 220;
	                this.match(scillaParser.WS);

	            }
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



	sident() {
	    let localctx = new SidentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, scillaParser.RULE_sident);
	    var _la = 0; // Token type
	    try {
	        this.state = 266;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===scillaParser.WS) {
	                this.state = 225;
	                this.match(scillaParser.WS);
	                this.state = 230;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 231;
	            localctx.name = this.match(scillaParser.ID);
	            this.state = 235;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 232;
	                    this.match(scillaParser.WS); 
	                }
	                this.state = 237;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 241;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===scillaParser.WS) {
	                this.state = 238;
	                this.match(scillaParser.WS);
	                this.state = 243;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 244;
	            localctx.name = this.match(scillaParser.SPID);
	            this.state = 248;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 245;
	                    this.match(scillaParser.WS); 
	                }
	                this.state = 250;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 254;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===scillaParser.WS) {
	                this.state = 251;
	                this.match(scillaParser.WS);
	                this.state = 256;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 257;
	            localctx.ns = this.match(scillaParser.CID);
	            this.state = 258;
	            this.match(scillaParser.PERIOD);
	            this.state = 259;
	            localctx.name = this.match(scillaParser.ID);
	            this.state = 263;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 260;
	                    this.match(scillaParser.WS); 
	                }
	                this.state = 265;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	            }

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



	scid() {
	    let localctx = new ScidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, scillaParser.RULE_scid);
	    var _la = 0; // Token type
	    try {
	        this.state = 293;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 268;
	                this.match(scillaParser.WS);
	            }

	            this.state = 271;
	            localctx.name = this.match(scillaParser.CID);
	            this.state = 273;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	            if(la_===1) {
	                this.state = 272;
	                this.match(scillaParser.WS);

	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 275;
	                this.match(scillaParser.WS);
	            }

	            this.state = 278;
	            localctx.ns = this.match(scillaParser.CID);
	            this.state = 279;
	            this.match(scillaParser.PERIOD);
	            this.state = 280;
	            localctx.name = this.match(scillaParser.CID);
	            this.state = 282;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	            if(la_===1) {
	                this.state = 281;
	                this.match(scillaParser.WS);

	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 285;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===scillaParser.WS) {
	                this.state = 284;
	                this.match(scillaParser.WS);
	            }

	            this.state = 287;
	            localctx.ns = this.match(scillaParser.HEX);
	            this.state = 288;
	            this.match(scillaParser.PERIOD);
	            this.state = 289;
	            localctx.name = this.match(scillaParser.CID);
	            this.state = 291;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	            if(la_===1) {
	                this.state = 290;
	                this.match(scillaParser.WS);

	            }
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



	type_annot() {
	    let localctx = new Type_annotContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, scillaParser.RULE_type_annot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.match(scillaParser.COLON);
	        this.state = 296;
	        localctx.t = this.match(scillaParser.ID);
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



	id_with_typ() {
	    let localctx = new Id_with_typContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, scillaParser.RULE_id_with_typ);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        localctx.n = this.match(scillaParser.ID);
	        this.state = 299;
	        localctx.t = this.type_annot();
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

scillaParser.EOF = antlr4.Token.EOF;
scillaParser.FORALL = 1;
scillaParser.BUILTIN = 2;
scillaParser.LIBRARY = 3;
scillaParser.IMPORT = 4;
scillaParser.LET = 5;
scillaParser.IN = 6;
scillaParser.MATCH = 7;
scillaParser.WITH = 8;
scillaParser.END = 9;
scillaParser.FUN = 10;
scillaParser.TFUN = 11;
scillaParser.CONTRACT = 12;
scillaParser.TRANSITION = 13;
scillaParser.SEND = 14;
scillaParser.EVENT = 15;
scillaParser.FIELD = 16;
scillaParser.ACCEPT = 17;
scillaParser.EXISTS = 18;
scillaParser.DELETE = 19;
scillaParser.EMP = 20;
scillaParser.MAP = 21;
scillaParser.SCILLA_VERSION = 22;
scillaParser.TYPE = 23;
scillaParser.OF = 24;
scillaParser.TRY = 25;
scillaParser.CATCH = 26;
scillaParser.AS = 27;
scillaParser.PROCEDURE = 28;
scillaParser.THROW = 29;
scillaParser.SEMICOLON = 30;
scillaParser.COLON = 31;
scillaParser.PERIOD = 32;
scillaParser.BAR = 33;
scillaParser.LSQB = 34;
scillaParser.RSQB = 35;
scillaParser.LPAREN = 36;
scillaParser.RPAREN = 37;
scillaParser.LBRACE = 38;
scillaParser.RBRACE = 39;
scillaParser.COMMA = 40;
scillaParser.ARROW = 41;
scillaParser.TARROW = 42;
scillaParser.EQ = 43;
scillaParser.AND = 44;
scillaParser.FETCH = 45;
scillaParser.ASSIGN = 46;
scillaParser.AT = 47;
scillaParser.UNDERSCORE = 48;
scillaParser.NUMBER = 49;
scillaParser.INT = 50;
scillaParser.WS = 51;
scillaParser.STRING = 52;
scillaParser.FLOAT = 53;
scillaParser.BOOLEAN = 54;
scillaParser.HEXDIGIT = 55;
scillaParser.HEX = 56;
scillaParser.INTTY = 57;
scillaParser.ID = 58;
scillaParser.ALPHANUM = 59;
scillaParser.SPID = 60;
scillaParser.CID = 61;
scillaParser.TID = 62;

scillaParser.RULE_exp = 0;
scillaParser.RULE_simple_exp = 1;
scillaParser.RULE_atomic_exp = 2;
scillaParser.RULE_lit = 3;
scillaParser.RULE_map_access = 4;
scillaParser.RULE_pattern = 5;
scillaParser.RULE_arg_pattern = 6;
scillaParser.RULE_exp_pm_clause = 7;
scillaParser.RULE_msg_entry = 8;
scillaParser.RULE_builtin_args = 9;
scillaParser.RULE_exp_term = 10;
scillaParser.RULE_identifier = 11;
scillaParser.RULE_sid = 12;
scillaParser.RULE_sident = 13;
scillaParser.RULE_scid = 14;
scillaParser.RULE_type_annot = 15;
scillaParser.RULE_id_with_typ = 16;

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
        this.ruleIndex = scillaParser.RULE_exp;
        this.f = null; // Simple_expContext
    }

	simple_exp() {
	    return this.getTypedRuleContext(Simple_expContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_simple_exp;
        this.x = null; // IdentifierContext
        this.f = null; // Simple_expContext
        this.e = null; // ExpContext
        this.iwt = null; // Id_with_typContext
        this.f_var = null; // SidContext
        this._sident = null; // SidentContext
        this.args = []; // of SidentContexts
        this.a = null; // Atomic_expContext
        this._msg_entry = null; // Msg_entryContext
        this.es = []; // of Msg_entryContexts
        this.x_sid = null; // SidContext
        this.cs = null; // Exp_pm_clauseContext
    }

	LET() {
	    return this.getToken(scillaParser.LET, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.WS);
	    } else {
	        return this.getToken(scillaParser.WS, i);
	    }
	};


	EQ() {
	    return this.getToken(scillaParser.EQ, 0);
	};

	IN() {
	    return this.getToken(scillaParser.IN, 0);
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

	FUN() {
	    return this.getToken(scillaParser.FUN, 0);
	};

	LPAREN() {
	    return this.getToken(scillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(scillaParser.RPAREN, 0);
	};

	ARROW() {
	    return this.getToken(scillaParser.ARROW, 0);
	};

	id_with_typ() {
	    return this.getTypedRuleContext(Id_with_typContext,0);
	};

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

	atomic_exp() {
	    return this.getTypedRuleContext(Atomic_expContext,0);
	};

	LBRACE() {
	    return this.getToken(scillaParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(scillaParser.RBRACE, 0);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.COMMA);
	    } else {
	        return this.getToken(scillaParser.COMMA, i);
	    }
	};


	MATCH() {
	    return this.getToken(scillaParser.MATCH, 0);
	};

	WITH() {
	    return this.getToken(scillaParser.WITH, 0);
	};

	END() {
	    return this.getToken(scillaParser.END, 0);
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
	    if(listener instanceof scillaListener ) {
	        listener.enterSimple_exp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.exitSimple_exp(this);
		}
	}


}



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
        this.ruleIndex = scillaParser.RULE_atomic_exp;
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
	    if(listener instanceof scillaListener ) {
	        listener.enterAtomic_exp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_lit;
        this.i = null; // Token
        this.n = null; // Token
        this.h = null; // Token
        this.s = null; // Token
    }

	CID() {
	    return this.getToken(scillaParser.CID, 0);
	};

	NUMBER() {
	    return this.getToken(scillaParser.NUMBER, 0);
	};

	HEX() {
	    return this.getToken(scillaParser.HEX, 0);
	};

	STRING() {
	    return this.getToken(scillaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.exitLit(this);
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
        this.ruleIndex = scillaParser.RULE_map_access;
        this.i = null; // SidentContext
    }

	LSQB() {
	    return this.getToken(scillaParser.LSQB, 0);
	};

	RSQB() {
	    return this.getToken(scillaParser.RSQB, 0);
	};

	sident() {
	    return this.getTypedRuleContext(SidentContext,0);
	};

	WS() {
	    return this.getToken(scillaParser.WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterMap_access(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_pattern;
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
	    return this.getToken(scillaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterBinder(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.exitBinder(this);
		}
	}


}

scillaParser.BinderContext = BinderContext;

class WildcardContext extends PatternContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	UNDERSCORE() {
	    return this.getToken(scillaParser.UNDERSCORE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.exitWildcard(this);
		}
	}


}

scillaParser.WildcardContext = WildcardContext;

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
	    if(listener instanceof scillaListener ) {
	        listener.enterConstructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.exitConstructor(this);
		}
	}


}

scillaParser.ConstructorContext = ConstructorContext;

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
        this.ruleIndex = scillaParser.RULE_arg_pattern;
        this.x = null; // Token
        this.c = null; // ScidContext
        this.p = null; // PatternContext
    }

	UNDERSCORE() {
	    return this.getToken(scillaParser.UNDERSCORE, 0);
	};

	ID() {
	    return this.getToken(scillaParser.ID, 0);
	};

	scid() {
	    return this.getTypedRuleContext(ScidContext,0);
	};

	LPAREN() {
	    return this.getToken(scillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(scillaParser.RPAREN, 0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.WS);
	    } else {
	        return this.getToken(scillaParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterArg_pattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_exp_pm_clause;
        this.p = null; // PatternContext
        this.e = null; // ExpContext
    }

	BAR() {
	    return this.getToken(scillaParser.BAR, 0);
	};

	ARROW() {
	    return this.getToken(scillaParser.ARROW, 0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.WS);
	    } else {
	        return this.getToken(scillaParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterExp_pm_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_msg_entry;
        this.i = null; // SidContext
        this.l = null; // LitContext
        this.v = null; // SidContext
    }

	COLON() {
	    return this.getToken(scillaParser.COLON, 0);
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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.WS);
	    } else {
	        return this.getToken(scillaParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterMsg_entry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_builtin_args;
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
	    return this.getToken(scillaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(scillaParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterBuiltin_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_exp_term;
        this.e = null; // ExpContext
    }

	EOF() {
	    return this.getToken(scillaParser.EOF, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterExp_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.exitExp_term(this);
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
        this.ruleIndex = scillaParser.RULE_identifier;
    }

	ID() {
	    return this.getToken(scillaParser.ID, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.WS);
	    } else {
	        return this.getToken(scillaParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_sid;
        this.name = null; // Token
        this.ns = null; // Token
    }

	ID() {
	    return this.getToken(scillaParser.ID, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.WS);
	    } else {
	        return this.getToken(scillaParser.WS, i);
	    }
	};


	SPID() {
	    return this.getToken(scillaParser.SPID, 0);
	};

	PERIOD() {
	    return this.getToken(scillaParser.PERIOD, 0);
	};

	CID() {
	    return this.getToken(scillaParser.CID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterSid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_sident;
        this.name = null; // Token
        this.ns = null; // Token
    }

	ID() {
	    return this.getToken(scillaParser.ID, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.WS);
	    } else {
	        return this.getToken(scillaParser.WS, i);
	    }
	};


	SPID() {
	    return this.getToken(scillaParser.SPID, 0);
	};

	PERIOD() {
	    return this.getToken(scillaParser.PERIOD, 0);
	};

	CID() {
	    return this.getToken(scillaParser.CID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterSident(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
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
        this.ruleIndex = scillaParser.RULE_scid;
        this.name = null; // Token
        this.ns = null; // Token
    }

	CID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.CID);
	    } else {
	        return this.getToken(scillaParser.CID, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scillaParser.WS);
	    } else {
	        return this.getToken(scillaParser.WS, i);
	    }
	};


	PERIOD() {
	    return this.getToken(scillaParser.PERIOD, 0);
	};

	HEX() {
	    return this.getToken(scillaParser.HEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterScid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.exitScid(this);
		}
	}


}



class Type_annotContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scillaParser.RULE_type_annot;
        this.t = null; // Token
    }

	COLON() {
	    return this.getToken(scillaParser.COLON, 0);
	};

	ID() {
	    return this.getToken(scillaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterType_annot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.exitType_annot(this);
		}
	}


}



class Id_with_typContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scillaParser.RULE_id_with_typ;
        this.n = null; // Token
        this.t = null; // Type_annotContext
    }

	ID() {
	    return this.getToken(scillaParser.ID, 0);
	};

	type_annot() {
	    return this.getTypedRuleContext(Type_annotContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.enterId_with_typ(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scillaListener ) {
	        listener.exitId_with_typ(this);
		}
	}


}




scillaParser.ExpContext = ExpContext; 
scillaParser.Simple_expContext = Simple_expContext; 
scillaParser.Atomic_expContext = Atomic_expContext; 
scillaParser.LitContext = LitContext; 
scillaParser.Map_accessContext = Map_accessContext; 
scillaParser.PatternContext = PatternContext; 
scillaParser.Arg_patternContext = Arg_patternContext; 
scillaParser.Exp_pm_clauseContext = Exp_pm_clauseContext; 
scillaParser.Msg_entryContext = Msg_entryContext; 
scillaParser.Builtin_argsContext = Builtin_argsContext; 
scillaParser.Exp_termContext = Exp_termContext; 
scillaParser.IdentifierContext = IdentifierContext; 
scillaParser.SidContext = SidContext; 
scillaParser.SidentContext = SidentContext; 
scillaParser.ScidContext = ScidContext; 
scillaParser.Type_annotContext = Type_annotContext; 
scillaParser.Id_with_typContext = Id_with_typContext; 
