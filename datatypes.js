/**
 * Scilla Algebraic Data Types - as well as parsing library ADTs
 */

import * as ST from "./types.js";

/** Each ScillaDataTypes has
 * @tname {String} - Type name
 * @tparams {String[]} - Type Parameters
 * @tconstr {Constructor[]} - List of supported constructors
 * @tmap {(String * SType[]){}} - Mapping for constructor's types.
 * The arity of the constructor is the same as the length
 * of the list, so the types are mapped correspondingly.
 */

export class ScillaDataTypes {
  //Geting type of each Data Type
  boolTyp() {
    return new ST.ADT("Bool", []);
  }
  natTyp() {
    return new ST.ADT("Nat", []);
  }
  optionTyp() {
    return new ST.ADT("Option", []);
  }
  listTyp() {
    return new ST.ADT("List", []);
  }
  pairTyp() {
    return new ST.ADT("Pair", []);
  }
}

export class Constructor {}
export class DataTypeDict {
  constructor() {
    //When entering a program, we already have a set of pre-defined
    //data types and their constructors.
    this.ADTDict = {
      "Bool": new BoolDT(),
      "Nat": new NatDT(),
      "Option": new OptionDT(),
      "List": new ListDT(),
      "Pair": new ProductDT(),
    };
    this.ConstrDict = {
      "True": [new True(), new BoolDT()],
      "False": [new False(), new BoolDT()],
      "Zero": [new Zero(), new NatDT()],
      "Succ": [new Succ(), new NatDT()],
      "Some": [new Some(), new OptionDT()],
      "None": [new None(), new OptionDT()],
      "Cons": [new Cons(), new ListDT()],
      "Nil": [new Nil(), new ListDT()],
      "Pair": [new Pair(), new ProductDT()],
    };
  }

  /**
   * @param {ScillaDataTypes} new_adt
   */
  addAdt(newAdt) {
    //To add a new ADT - we add a ScillaDataTypes along with its Constructors
    if (this.ADTDict[new_adt] !== undefined) {
      //If ADT already exists, we do nothing.
      return this.ADTDict;
    }
    this.ADTDcit[newAdt.tname] = newAdt;
    newAdt.tconstr.array.forEach((constr) => {
      if (this.ConstrDict[constr.cname] === undefined) {
        this.ConstrDict[constr.cname] = [constr, newAdt];
      }
    });
    return this.ADTDict;
  }

  /**
   * @param {String} name
   */
  lookUpADT(name) {
    if (this.ADTDict[name] === undefined) {
      console.log("ADT doesn't exist");
      return undefined;
    } else {
      return this.ADTDict[name];
    }
  }

  /**
   * @param {String} name
   */
  lookUpConstr(name) {
    if (this.ConstrDict[name] === undefined) {
      console.log("Constructor doesn't exist");
      return undefined;
    } else {
      return this.ConstrDict[name][0];
    }
  }

  //look up ADT by a constructor. E.g. Find BoolDT by passing "True"
  lookUpADTByConstr(cname) {
    if (this.ConstrDict[cname] === undefined) {
      console.log("Constructor doesn't exist");
      return undefined;
    } else {
      return this.ConstrDict[cname][1];
    }
  }
}

/**
 * Booleans
 */
export class True extends Constructor {
  constructor() {
    super();
    this.cname = "True";
    this.arity = 0;
  }
}

export class False extends Constructor {
  constructor() {
    super();
    this.cname = "False";
    this.arity = 0;
  }
}

export class BoolDT extends ScillaDataTypes {
  constructor() {
    super();
    this.tname = "Bool";
    this.tparams = [];
    this.tconstr = [new True(), new False()];
    this.tmap = {};
  }
}

/**
 * Nat
 */
export class Zero extends Constructor {
  constructor() {
    super();
    this.cname = "Zero";
    this.arity = 0;
  }
}

export class Succ extends Constructor {
  constructor() {
    super();
    this.cname = "Succ";
    this.arity = 1;
  }
}

export class NatDT extends ScillaDataTypes {
  constructor() {
    super();
    this.tname = "Nat";
    this.tparams = [];
    this.tconstr = [new Zero(), new Succ()];
    this.tmap = { "Succ": [new ST.ADT("Nat", [])] };
  }
}

/**
 * Option
 */
export class Some extends Constructor {
  constructor() {
    super();
    this.cname = "Some";
    this.arity = 1;
  }
}

export class None extends Constructor {
  constructor() {
    super();
    this.cname = "None";
    this.arity = 0;
  }
}

export class OptionDT extends ScillaDataTypes {
  constructor() {
    super();
    this.tname = "Option";
    this.tparams = ["'A"];
    this.tconstr = [new Some(), new None()];
    this.tmap = { "Some": [new ST.TypeVar("'A")] };
  }
}

/**
 * Lists
 */
export class Cons extends Constructor {
  constructor() {
    super();
    this.cname = "Cons";
    this.arity = 2;
  }
}

export class Nil extends Constructor {
  constructor() {
    super();
    this.cname = "Nil";
    this.arity = 0;
  }
}

export class ListDT extends ScillaDataTypes {
  constructor() {
    super();
    this.tname = "List";
    this.tparams = ["'A"];
    this.tconstr = [new Cons(), new Nil()];
    this.tmap = {
      "Cons": [new ST.TypeVar("'A"), new ST.ADT("List", [new ST.TypeVar("'A")])],
    };
  }
}

/**
 * Pairs
 */
export class Pair extends Constructor {
  constructor() {
    super();
    this.cname = "Pair";
    this.arity = 2;
  }
}

export class ProductDT extends ScillaDataTypes {
  constructor() {
    super();
    this.tname = "Pair";
    this.tparams = ["'A", "'B"];
    this.tconstr = [new Pair()];
    this.tmap = { "Pair": [new ST.TypeVar("'A"), new ST.TypeVar("'B")] };
  }
}
