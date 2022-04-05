import _ from "lodash";
import {
  ADTValue,
  IntLit,
  Int32L,
  Int64L,
  Int128L,
  Int256L,
  UintLit,
  Uint32L,
  Uint64L,
  Uint128L,
  Uint256L,
  StringLit,
  Bystr,
  BystrX,
  Map,
  BNumLit,
  ScillaLiterals,
  literalType
} from "./literals.js";

function reverseString(str) {
  const stringArray = str.split("");
  const reverseArray = stringArray.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}

export default class Builtins {
  printError(funcname, msg) {
    console.log("[ERROR]" + funcname + ": " + msg);
  }

  getJSValueFromLiteral(lit) {
    return lit instanceof StringLit
      ? lit.s
      : lit instanceof IntLit
      ? lit.i
      : lit instanceof UintLit
      ? lit.i
      : lit instanceof Bystr
      ? lit.s
      : lit instanceof BystrX
      ? lit.s
      : lit instanceof BNumLit
      ? lit.i
      : undefined;
  }

  parseBuiltinIdentifier(id) {
    return id === "eq"
      ? this.eq
      : id === "add"
      ? this.add
      : id === "sub"
      ? this.sub
      : id === "mul"
      ? this.mul
      : id === "div"
      ? this.div
      : id === "rem"
      ? this.rem
      : id === "lt"
      ? this.lt
      : id === "pow"
      ? this.pow
      : id === "isqrt"
      ? this.isqrt
      : id === "to_nat"
      ? this.to_nat
      : id === "concat"
      ? this.concat
      : id === "to_nat"
      ? this.to_nat
      : id === "to_int32"
      ? this.to_int32
      : id === "to_int64"
      ? this.to_int64
      : id === "to_int128"
      ? this.to_int128
      : id === "to_int256"
      ? this.to_int256
      : id === "to_uint32"
      ? this.to_uint32
      : id === "to_uint64"
      ? this.to_uint64
      : id === "to_uint128"
      ? this.to_uint128
      : id === "to_uint256"
      ? this.to_uint256
      : id === "concat"
      ? this.concat
      : id === "substring"
      ? this.substring
      : id === "to_string"
      ? this.to_string
      : id === "strlen"
      ? this.strlen
      : id === "strrev"
      ? this.strrev
      : id === "to_ascii"
      ? this.to_ascii
      : id === "put"
      ? this.put
      : id === "get"
      ? this.get
      : id === "contains"
      ? this.contains
      : id === "remove"
      ? this.remove
      : id === "to_list"
      ? this.to_list
      : id === "size"
      ? this.size
      : id === "blt"
      ? this.blt
      : id === "badd"
      ? this.badd
      : id === "bsub"
      ? this.bsub
      : undefined;
  }

  eq = (x) => (y) => {
    if (x instanceof IntLit && y instanceof IntLit) {
      return x.i === y.i
        ? new ADTValue("True", [], [])
        : new ADTValue("False", [], []);
    } else if (x instanceof UintLit && y instanceof UintLit) {
      return x.i === y.i
        ? new ADTValue("True", [], [])
        : new ADTValue("False", [], []);
    } else if (x instanceof StringLit && y instanceof StringLit) {
      return x.s === y.s
        ? new ADTValue("True", [], [])
        : new ADTValue("False", [], []);
    } else {
      return `Error: eq of ${x} and ${y}`;
    }
  };

  add = (x) => (y) => {
    if (x instanceof IntLit && y instanceof IntLit) {
      if (x instanceof Int256L || y instanceof Int256L) {
        return new Int256L(x.i + y.i);
      } else if (x instanceof Int128L || y instanceof Int128L) {
        return new Int128L(x.i + y.i);
      } else if (x instanceof Int64L || y instanceof Int64L) {
        return new Int64L(x.i + y.i);
      } else if (x instanceof Int32L || y instanceof Int32L) {
        return new Int32L(x.i + y.i);
      }
    } else if (x instanceof UintLit && y instanceof UintLit) {
      if (x instanceof Uint256L || y instanceof Uint256L) {
        return new Uint256L(x.i + y.i);
      } else if (x instanceof Uint128L || y instanceof Uint128L) {
        return new Uint128L(x.i + y.i);
      } else if (x instanceof Uint64L || y instanceof Uint64L) {
        return new Uint64L(x.i + y.i);
      } else if (x instanceof Uint32L || y instanceof Uint32L) {
        return new Uint32L(x.i + y.i);
      }
    } else {
      return `Error: add of ${x} and ${y}`;
    }
  };

  sub = (x) => (y) => {
    if (x instanceof IntLit && y instanceof IntLit) {
      if (x instanceof Int256L || y instanceof Int256L) {
        return new Int256L(x.i - y.i);
      } else if (x instanceof Int128L || y instanceof Int128L) {
        return new Int128L(x.i - y.i);
      } else if (x instanceof Int64L || y instanceof Int64L) {
        return new Int64L(x.i - y.i);
      } else if (x instanceof Int32L || y instanceof Int32L) {
        return new Int32L(x.i - y.i);
      }
    } else if (x instanceof UintLit && y instanceof UintLit) {
      if (x instanceof Uint256L || y instanceof Uint256L) {
        return new Uint256L(x.i - y.i);
      } else if (x instanceof Uint128L || y instanceof Uint128L) {
        return new Uint128L(x.i - y.i);
      } else if (x instanceof Uint64L || y instanceof Uint64L) {
        return new Uint64L(x.i - y.i);
      } else if (x instanceof Uint32L || y instanceof Uint32L) {
        return new Uint32L(x.i - y.i);
      }
    } else {
      return `Error: sub of ${x} and ${y}`;
    }
  };

  mul = (x) => (y) => {
    if (x instanceof IntLit && y instanceof IntLit) {
      if (x instanceof Int256L || y instanceof Int256L) {
        return new Int256L(x.i * y.i);
      } else if (x instanceof Int128L || y instanceof Int128L) {
        return new Int128L(x.i * y.i);
      } else if (x instanceof Int64L || y instanceof Int64L) {
        return new Int64L(x.i * y.i);
      } else if (x instanceof Int32L || y instanceof Int32L) {
        return new Int32L(x.i * y.i);
      }
    } else if (x instanceof UintLit && y instanceof UintLit) {
      if (x instanceof Uint256L || y instanceof Uint256L) {
        return new Uint256L(x.i * y.i);
      } else if (x instanceof Uint128L || y instanceof Uint128L) {
        return new Uint128L(x.i * y.i);
      } else if (x instanceof Uint64L || y instanceof Uint64L) {
        return new Uint64L(x.i * y.i);
      } else if (x instanceof Uint32L || y instanceof Uint32L) {
        return new Uint32L(x.i * y.i);
      }
    } else {
      return `Error: mul of ${x} and ${y}`;
    }
  };

  div = (x) => (y) => {
    if (x instanceof IntLit && y instanceof IntLit) {
      if (y.i === 0) {
        throw "Divisor cannot be zero";
      }
      if (x instanceof Int256L || y instanceof Int256L) {
        return new Int256L(Math.floor(x.i / y.i));
      } else if (x instanceof Int128L || y instanceof Int128L) {
        return new Int128L(Math.floor(x.i / y.i));
      } else if (x instanceof Int64L || y instanceof Int64L) {
        return new Int64L(Math.floor(x.i / y.i));
      } else if (x instanceof Int32L || y instanceof Int32L) {
        return new Int32L(Math.floor(x.i / y.i));
      }
    } else if (x instanceof UintLit && y instanceof UintLit) {
      if (x instanceof Uint256L || y instanceof Uint256L) {
        return new Uint256L(Math.floor(x.i / y.i));
      } else if (x instanceof Uint128L || y instanceof Uint128L) {
        return new Uint128L(Math.floor(x.i / y.i));
      } else if (x instanceof Uint64L || y instanceof Uint64L) {
        return new Uint64L(Math.floor(x.i / y.i));
      } else if (x instanceof Uint32L || y instanceof Uint32L) {
        return new Uint32L(Math.floor(x.i / y.i));
      }
    } else {
      return `Error: div of ${x} and ${y}`;
    }
  };

  rem = (x) => (y) => {
    if (x instanceof IntLit && y instanceof IntLit) {
      if (x instanceof Int256L || y instanceof Int256L) {
        return new Int256L(x.i % y.i);
      } else if (x instanceof Int128L || y instanceof Int128L) {
        return new Int128L(x.i % y.i);
      } else if (x instanceof Int64L || y instanceof Int64L) {
        return new Int64L(x.i % y.i);
      } else if (x instanceof Int32L || y instanceof Int32L) {
        return new Int32L(x.i % y.i);
      }
    } else if (x instanceof UintLit && y instanceof UintLit) {
      if (x instanceof Uint256L || y instanceof Uint256L) {
        return new Uint256L(x.i % y.i);
      } else if (x instanceof Uint128L || y instanceof Uint128L) {
        return new Uint128L(x.i % y.i);
      } else if (x instanceof Uint64L || y instanceof Uint64L) {
        return new Uint64L(x.i % y.i);
      } else if (x instanceof Uint32L || y instanceof Uint32L) {
        return new Uint32L(x.i % y.i);
      }
    } else {
      return `Error: rem of ${x} and ${y}`;
    }
  };

  lt = (x) => (y) => {
    if (x instanceof IntLit && y instanceof IntLit) {
      return x.i < y.i
        ? new ADTValue("True", [], [])
        : new ADTValue("False", [], []);
    } else if (x instanceof UintLit && y instanceof UintLit) {
      return x.i < y.i
        ? new ADTValue("True", [], [])
        : new ADTValue("False", [], []);
    } else if (x instanceof StringLit && y instanceof StringLit) {
      return x.s < y.s
        ? new ADTValue("True", [], [])
        : new ADTValue("False", [], []);
    } else {
      return `Error: eq of ${x} and ${y}`;
    }
  };

  pow = (x) => (y) => {
    if (x instanceof IntLit && y instanceof IntLit) {
      if (x instanceof Int256L) {
        return new Int256L(Math.pow(x.i, y.i));
      } else if (x instanceof Int128L) {
        return new Int128L(Math.pow(x.i, y.i));
      } else if (x instanceof Int64L) {
        return new Int64L(Math.pow(x.i, y.i));
      } else if (x instanceof Int32L) {
        return new Int32L(Math.pow(x.i, y.i));
      }
    } else if (x instanceof UintLit && y instanceof UintLit) {
      if (x instanceof Uint256L) {
        return new Uint256L(Math.pow(x.i, y.i));
      } else if (x instanceof Uint128L) {
        return new Uint128L(Math.pow(x.i, y.i));
      } else if (x instanceof Uint64L) {
        return new Uint64L(Math.pow(x.i, y.i));
      } else if (x instanceof Uint32L) {
        return new Uint32L(Math.pow(x.i, y.i));
      }
    } else {
      return `Error: pow of ${x} and ${y}`;
    }
  };

  isqrt = (x) => {
    if (x instanceof IntLit) {
      if (x instanceof Int256L) {
        return new Int256L(Math.floor(Math.sqrt(x.i)));
      } else if (x instanceof Int128L) {
        return new Int128L(Math.floor(Math.sqrt(x.i)));
      } else if (x instanceof Int64L) {
        return new Int64L(Math.floor(Math.sqrt(x.i)));
      } else if (x instanceof Int32L) {
        return new Int32L(Math.floor(Math.sqrt(x.i)));
      }
    } else if (x instanceof UintLit) {
      if (x instanceof Uint256L) {
        return new Uint256L(Math.floor(Math.sqrt(x.i)));
      } else if (x instanceof Uint128L) {
        return new Uint128L(Math.floor(Math.sqrt(x.i)));
      } else if (x instanceof Uint64L) {
        return new Uint64L(Math.floor(Math.sqrt(x.i)));
      } else if (x instanceof Uint32L) {
        return new Uint32L(Math.floor(Math.sqrt(x.i)));
      }
    } else {
      return `Error: isqrt of ${x} and ${y}`;
    }
  };

  to_nat = (x) => {
    console.log("TODO: to_nat");
  };

  to_int32 = (x) => {
    if (x instanceof IntLit) {
      return new Int32L(x.i);
    } else if (x instanceof UintLit) {
      return new Int32L(x.i);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? new Int32L(Number(x.s))
        : `Error: to_int32 of ${x}`;
    }
  };

  to_int64 = (x) => {
    if (x instanceof IntLit) {
      return new Int64L(x.i);
    } else if (x instanceof UintLit) {
      return new Int64L(x.i);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? new Int64L(Number(x.s))
        : `Error: to_int64 of ${x}`;
    }
  };

  to_int128 = (x) => {
    if (x instanceof IntLit) {
      return new Int128L(x.i);
    } else if (x instanceof UintLit) {
      return new Int128L(x.i);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? new Int128L(Number(x.s))
        : `Error: to_int128 of ${x}`;
    }
  };

  to_int256 = (x) => {
    if (x instanceof IntLit) {
      return new Int256L(x.i);
    } else if (x instanceof UintLit) {
      return new Int256L(x.i);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? new Int256L(Number(x.s))
        : `Error: to_int256 of ${x}`;
    }
  };

  to_uint32 = (x) => {
    if (x instanceof IntLit) {
      return x.i >= 0 ? new Uint32L(x.i) : `Error: to_uint32 of ${x}`;
    } else if (x instanceof UintLit) {
      return new Uint32L(x.i);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? Number(x.s) >= 0
          ? new Uint32L(Number(x.s))
          : `Error: to_uint32 of ${x}, unsigned int cannot be negative`
        : `Error: to_uint32 of ${x}`;
    }
  };

  to_uint64 = (x) => {
    if (x instanceof IntLit) {
      return x.i >= 0 ? new Uint64L(x.i) : `Error: to_uint64 of ${x}`;
    } else if (x instanceof UintLit) {
      return new Uint64L(x.i);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? Number(x.s) >= 0
          ? new Uint64L(Number(x.s))
          : `Error: to_uint64 of ${x}, unsigned int cannot be negative`
        : `Error: to_uint64 of ${x}`;
    }
  };

  to_uint128 = (x) => {
    if (x instanceof IntLit) {
      return x.i >= 0 ? new Uint128L(x.i) : `Error: to_uint128 of ${x}`;
    } else if (x instanceof UintLit) {
      return new Uint128L(x.i);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? Number(x.s) >= 0
          ? new Uint128L(Number(x.s))
          : `Error: to_uint128 of ${x}, unsigned int cannot be negative`
        : `Error: to_uint128 of ${x}`;
    }
  };

  to_uint256 = (x) => {
    if (x instanceof IntLit) {
      return x.i >= 0 ? new Uint256L(x.i) : `Error: to_uint256 of ${x}`;
    } else if (x instanceof UintLit) {
      return new Uint256L(x.i);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? Number(x.s) >= 0
          ? new Uint256L(Number(x.s))
          : `Error: to_uint256 of ${x}, unsigned int cannot be negative`
        : `Error: to_uint256 of ${x}`;
    }
  };

  concat = (s1) => (s2) => {
    if (s1 instanceof StringLit && s2 instanceof StringLit) {
      return new StringLit(s1.s + s2.s);
    } else {
      return `Error: concat of ${s1} and ${s2}`;
    }
  };

  substring = (s) => (idx) => (len) => {
    if (s instanceof StringLit) {
      if (idx instanceof Uint32L) {
        if (len instanceof Uint32L) {
          try {
            const substr = s.substring(idx, idx + len);
            return new StringLit(substr);
          } catch (error) {
            return `Error: substring ${error}`;
          }
        } else {
          return `Error: substring len ${len} needs to be of type Uint32`;
        }
      } else {
        return `Error: substring idx ${idx} needs to be of type Uint32`;
      }
    } else {
      return `Error: substring s ${s} needs to be of type String`;
    }
  };

  to_string = (x) => {
    if (x instanceof IntLit || x instanceof UintLit) {
      return new StringLit(String(x.i));
    } else if (x instanceof Bystr || x instanceof BystrX) {
      return new StringLit(String(x.s));
    } else {
      `Error: to_string X ${x} needs to be of type IntLit or UintLit or ByStr
       or ByStrX`;
    }
  };

  strlen = (s) => {
    if (s instanceof StringLit) {
      return new Uint32L(s.s.length);
    } else if (s instanceof Bystr) {
      return new Uint32L(s.width());
    } else {
      `Error: strlen s ${s} needs to be of type String or ByStr`;
    }
  };

  strrev = (s) => {
    if (s instanceof StringLit) {
      return new StringLit(reverseString(s.s));
    } else if (s instanceof Bystr || s instanceof BystrX) {
      return new StringLit(reverseString(s.s));
    } else {
      `Error: strrev s ${s} needs to be of type String or ByStr or ByStrX`;
    }
  };

  to_ascii = (h) => {
    console.log(`to_ascii TODO`);
  };

  put = (m) => (k) => (v) => {
    if (m instanceof Map) {
      const mapKey = this.getJSValueFromLiteral(k);
      const newMap = _.cloneDeep(m);
      newMap.update(mapKey, v);
      return newMap;
    } else {
      `Error: put m ${m} needs to be of type Map`;
    }
  };

  get = (m) => (k) => {
    if (m instanceof Map) {
      const mapKey = this.getJSValueFromLiteral(k);
      if (_.has(m.kv, mapKey)) {
        return new ADTValue(
          "Some",
          literalType(m.kv[mapKey]),
          m.kv[mapKey]
        );
      } else {
        return new ADTValue("None", [], []);
      }
    } else {
      return `Error: get m ${m} needs to be of type Map`;
    }
  };

  contains = (m) => (k) => {
    if (m instanceof Map) {
      const mapKey = this.getJSValueFromLiteral(k);
      return _.has(m.kv, mapKey)
        ? new ADTValue("True", [], [])
        : new ADTValue("False", [], []);
    } else {
      return `Error: contains m ${m} needs to be of type Map`;
    }
  };

  remove = (m) => (k) => {
    if (m instanceof Map) {
      const mapKey = this.getJSValueFromLiteral(k);
      const newMap = _.cloneDeep(m);
      if (_.has(m.kv, mapKey)) {
        delete newMap.kv[mapKey];
      }
      return newMap;
    } else {
      return `Error: remove m ${m} needs to be of type Map`;
    }
  };

  to_list = (m) => {
    console.log("MAP to_list TODO");
  };

  size = (m) => {
    if (m instanceof Map) {
      return Object.keys(m).length;
    } else {
      return `Error: size m ${m} needs to be of type Map`;
    }
  };

  blt = (b1) => (b2) => {
    console.log("BNum blt todo");
  };

  badd = (b1) => (i1) => {
    console.log("BNum badd todo");
  };

  bsub = (b1) => (b2) => {
    console.log("BNum bsub todo");
  };
}
