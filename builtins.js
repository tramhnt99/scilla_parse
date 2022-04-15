import _ from "lodash";
import { setError } from "./general.js";
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
  literalType,
} from "./literals.js";
import { Error } from "./syntax.js";
import {
  Int128,
  Int256,
  Int32,
  Int64,
  Uint128,
  Uint256,
  Uint32,
  Uint64,
} from "./types.js";

function reverseString(str) {
  const stringArray = str.split("");
  const reverseArray = stringArray.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}

export default class Builtins {
  constructor() {
    this.builtinDict = {
      eq: this.eq,
      add: this.add,
      sub: this.sub,
      mul: this.mul,
      div: this.div,
      rem: this.rem,
      lt: this.lt,
      pow: this.pow,
      isqrt: this.isqrt,
      to_nat: this.to_nat,
      concat: this.concat,
      to_int32: this.to_int32,
      to_int64: this.to_int64,
      to_int128: this.to_int128,
      to_int256: this.to_int256,
      to_uint32: this.to_uint32,
      to_uint64: this.to_uint64,
      to_uint128: this.to_uint128,
      to_uint256: this.to_uint256,
      concat: this.concat,
      substring: this.substring,
      to_string: this.to_string,
      strlen: this.strlen,
      strrev: this.strrev,
      to_ascii: undefined,
      put: this.put,
      get: this.get,
      contains: this.contains,
      remove: this.remove,
      to_list: undefined,
      size: this.size,
      blt: undefined,
      badd: undefined,
      bsub: undefined,
      to_bystr: undefined,
    };
  }

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
    return this.builtinDict[id];
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
      setError(new Error(`Error: builtin eq of ${x} and ${y}`));
      return;
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
      setError(new Error(`Error: builtin add of ${x} and ${y}`));
      return;
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
      setError(new Error(`Error: builtin sub of ${x} and ${y}`));
      return;
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
      setError(new Error(`Error: builtin mul of ${x} and ${y}`));
      return;
    }
  };

  div = (x) => (y) => {
    if (x instanceof IntLit && y instanceof IntLit) {
      if (y.i === 0) {
        setError(
          new Error(
            `Error: builtin div of ${x} and ${y}, divisor cannot be zero`
          )
        );
        return;
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
      setError(new Error(`Error: builtin div of ${x} and ${y}`));
      return;
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
      setError(new Error(`Error: builtin rem of ${x} and ${y}`));
      return;
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
      setError(new Error(`Error: builtin lt of ${x} and ${y}`));
      return;
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
      setError(new Error(`Error: builtin pow of ${x} and ${y}`));
      return;
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
      setError(new Error(`Error: builtin isqrt of ${x}`));
      return;
    }
  };

  to_nat = (x) => {
    if (x instanceof Uint32L) {
      let res = new ADTValue("Zero", [], []);
      for (let i = 0; i < x.i; i++) {
        res = new ADTValue("Succ", [], [res]);
      }
      return res;
    } else {
      setError(new Error(`Error: builtin to_nat of ${x}`));
    }
  };

  to_int32 = (x) => {
    if (x instanceof IntLit) {
      return new ADTValue("Some", [new Int32()], [new Int32L(x.i)]);
    } else if (x instanceof UintLit) {
      return new ADTValue("Some", [new Int32()], [new Int32L(x.i)]);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? new ADTValue("Some", [new Int32()], [new Int32L(Number(x.s))])
        : new ADTValue("None", [new Int32()], []);
    }
  };

  to_int64 = (x) => {
    if (x instanceof IntLit) {
      return new ADTValue("Some", [new Int64()], [new Int64L(x.i)]);
    } else if (x instanceof UintLit) {
      return new ADTValue("Some", [new Int64()], [new Int64L(x.i)]);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? new ADTValue("Some", [new Int64()], [new Int64L(Number(x.s))])
        : new ADTValue("None", [new Int64()], []);
    }
  };

  to_int128 = (x) => {
    if (x instanceof IntLit) {
      return new ADTValue("Some", [new Int128()], [new Int128L(x.i)]);
    } else if (x instanceof UintLit) {
      return new ADTValue("Some", [new Int128()], [new Int128L(x.i)]);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? new ADTValue("Some", [new Int128()], [new Int128L(Number(x.s))])
        : new ADTValue("None", [new Int128()], []);
    }
  };

  to_int256 = (x) => {
    if (x instanceof IntLit) {
      return new ADTValue("Some", [new Int256()], [new Int256L(x.i)]);
    } else if (x instanceof UintLit) {
      return new ADTValue("Some", [new Int256()], [new Int256L(x.i)]);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? new ADTValue("Some", [new Int256()], [new Int256L(Number(x.s))])
        : new ADTValue("None", [new Int256()], []);
    }
  };

  to_uint32 = (x) => {
    if (x instanceof IntLit) {
      return x.i >= 0
        ? new ADTValue("Some", [new Uint32()], [new Uint32L(x.i)])
        : new ADTValue("None", [new Uint32()], []);
    } else if (x instanceof UintLit) {
      return new ADTValue("Some", [new Uint32()], [new Uint32L(x.i)]);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? Number(x.s) >= 0
          ? new ADTValue("Some", [new Uint32()], [new Uint32L(Number(x.s))])
          : new ADTValue("None", [new Uint32()], [])
        : new ADTValue("None", [new Uint32()], []);
    }
  };

  to_uint64 = (x) => {
    if (x instanceof IntLit) {
      return x.i >= 0
        ? new ADTValue("Some", [new Uint64()], [new Uint64L(x.i)])
        : new ADTValue("None", [new Uint64()], []);
    } else if (x instanceof UintLit) {
      return new ADTValue("Some", [new Uint64()], [new Uint64L(x.i)]);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? Number(x.s) >= 0
          ? new ADTValue("Some", [new Uint64()], [new Uint64L(Number(x.s))])
          : new ADTValue("None", [new Uint64()], [])
        : new ADTValue("None", [new Uint64()], []);
    }
  };

  to_uint128 = (x) => {
    if (x instanceof IntLit) {
      return x.i >= 0
        ? new ADTValue("Some", [new Uint128()], [new Uint128L(x.i)])
        : new ADTValue("None", [new Uint128()], []);
    } else if (x instanceof UintLit) {
      return new ADTValue("Some", [new Uint128()], [new Uint128L(x.i)]);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? Number(x.s) >= 0
          ? new ADTValue("Some", [new Uint128()], [new Uint128L(Number(x.s))])
          : new ADTValue("None", [new Uint128()], [])
        : new ADTValue("None", [new Uint128()], []);
    }
  };

  to_uint256 = (x) => {
    if (x instanceof IntLit) {
      return x.i >= 0
        ? new ADTValue("Some", [new Uint256()], [new Uint256L(x.i)])
        : new ADTValue("None", [new Uint256()], []);
    } else if (x instanceof UintLit) {
      return new ADTValue("Some", [new Uint256()], [new Uint256L(x.i)]);
    } else if (x instanceof StringLit) {
      return Number(x.s) !== NaN
        ? Number(x.s) >= 0
          ? new ADTValue("Some", [new Uint256()], [new Uint256L(Number(x.s))])
          : new ADTValue("None", [new Uint256()], [])
        : new ADTValue("None", [new Uint256()], []);
    }
  };

  concat = (s1) => (s2) => {
    if (s1 instanceof StringLit && s2 instanceof StringLit) {
      return new StringLit(s1.s + s2.s);
    } else {
      setError(new Error(`Error: builtin concat of ${s1} and ${s2}`));
      return;
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
            setError(new Error(`Error: builtin substring ${error}`));
            return;
          }
        } else {
          setError(
            new Error(
              `Error: builtin substring len ${len} needs to be of type Uint32`
            )
          );
          return;
        }
      } else {
        setError(
          new Error(
            `Error: builtin substring idx ${idx} needs to be of type Uint32`
          )
        );
        return;
      }
    } else {
      setError(
        new Error(`Error: builtin substring s ${s} needs to be of type String`)
      );
      return;
    }
  };

  to_string = (x) => {
    if (x instanceof IntLit || x instanceof UintLit) {
      return new StringLit(String(x.i));
    } else if (x instanceof Bystr || x instanceof BystrX) {
      return new StringLit(String(x.s));
    } else {
      setError(
        new Error(`Error: builtin to_string X ${x} needs to be of type IntLit or UintLit or ByStr
       or ByStrX`)
      );
      return;
    }
  };

  strlen = (s) => {
    if (s instanceof StringLit) {
      return new Uint32L(s.s.length);
    } else if (s instanceof Bystr) {
      return new Uint32L(s.width());
    } else {
      setError(
        new Error(
          `Error: builtin strlen s ${s} needs to be of type String or ByStr`
        )
      );
      return;
    }
  };

  strrev = (s) => {
    if (s instanceof StringLit) {
      return new StringLit(reverseString(s.s));
    } else if (s instanceof Bystr || s instanceof BystrX) {
      return new StringLit(reverseString(s.s));
    } else {
      setError(
        new Error(
          `Error: builtin strrev s ${s} needs to be of type String or ByStr or ByStrX`
        )
      );
      return;
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
      setError(new Error(`Error: builtin put m ${m} needs to be of type Map`));
      return;
    }
  };

  get = (m) => (k) => {
    if (m instanceof Map) {
      const mapKey = this.getJSValueFromLiteral(k);
      if (_.has(m.kv, mapKey)) {
        return new ADTValue(
          "Some",
          [literalType(m.kv[mapKey])],
          [m.kv[mapKey]]
        );
      } else {
        return new ADTValue("None", [], []);
      }
    } else {
      setError(new Error(`Error: builtin get m ${m} needs to be of type Map`));
      return;
    }
  };

  contains = (m) => (k) => {
    if (m instanceof Map) {
      const mapKey = this.getJSValueFromLiteral(k);
      return _.has(m.kv, mapKey)
        ? new ADTValue("True", [], [])
        : new ADTValue("False", [], []);
    } else {
      setError(
        new Error(`Error: builtin contains m ${m} needs to be of type Map`)
      );
      return;
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
      setError(
        new Error(`Error: builtin remove m ${m} needs to be of type Map`)
      );
      return;
    }
  };

  to_list = (m) => {
    if (m instanceof Map) {
      const pairTyp1 = m.mtyp.t1;
      const pairTyp2 = m.mtyp.t2;
      const keys = Object.keys(m.kv);
      // const res = keys.reduce(
      //   (prev, curr) =>
      //     new ADTValue("Pair", [pairTyp1, pairTyp2], [m.kv[curr], prev]),
      //   new ADTValue("Nil", [pairTyp1, pairTyp2], [])
      // );
      // return res;
    }
    console.log("MAP to_list TODO");
  };

  size = (m) => {
    if (m instanceof Map) {
      return Object.keys(m).length;
    } else {
      setError(new Error(`Error: builtin size m ${m} needs to be of type Map`));
      return;
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

  to_bystr = (h) => {
    console.log("to_bystr todo");
  };
}
