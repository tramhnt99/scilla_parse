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
} from "./literals.js";

export default class Builtins {
  printError(funcname, msg) {
    console.log("[ERROR]" + funcname + ": " + msg);
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

  // to_(u)int32/64/128/256
  // to add to list of functions

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
    console.log(`to_string TODO`);
  };

  strlen = (s) => {
    console.log(`strlen TODO`);
  };

  strrev = (s) => {
    console.log(`strrev TODO`);
  };

  to_ascii = (h) => {
    console.log(`to_ascii TODO`);
  };
}
