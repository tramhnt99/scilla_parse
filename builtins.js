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
      : undefined;
  }

  eq(x) {
    return (y) => x === y;
  }

  add(x) {
    return (y) => x + y;
  }
  // add = (x) => (y) => {
  //   return x + y;
  // }

  sub(x) {
    return (y) => x - y;
  }

  mul(x) {
    return (y) => x * y;
  }

  div(x) {
    return (y) => {
      if (y !== 0) {
        return Math.floor(x / y);
      } else {
        throw "Divisor cannot be zero";
      }
    };
  }

  rem(x) {
    return (y) => x % y;
  }

  lt(x) {
    return (y) => x < y;
  }

  pow(x) {
    return (y) => Math.pow(x, y);
  }

  isqrt(x) {
    return Math.floor(Math.sqrt(x));
  }

  to_nat(x) {
    console.log("TODO: to_nat");
  }

  // to_(u)int32/64/128/256
  // to add to list of functions
}
