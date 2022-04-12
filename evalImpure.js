import * as SS from "./syntax.js";
import Evaluator from "./evalSyntax.js";
import { getError, isError, setError } from "./general.js";
import _ from "lodash";
import * as BI from "./builtin.js";
import * as DT from "./datatypes.js";
import * as SL from "./literals.js";
import * as TCU from "./typecheckerUtil.js";

/**
 *
 *
 * Evaluation of Scilla Contracts (Impure Scilla)
 *
 *
 */
const E = new Evaluator({});

/**
 * TEMPORARY SOLVE FOR A NON WORKING EXPRESSION EVALUATOR
 * All expressions will be kept as ExpPlaceHolder
 */
class ExpPlaceHolder {}

/**
 * Contract Configuration (Allows to track contract state)
 */
class ContrConf {
  /**
   *
   * @param {(String * Literal){}} env
   * @param {String[]} compStack //Stack of components
   * @param {Uint128L} incomingFunds
   * @param {Component[]} procedures
   */
  constructor(env, compStack, incomingFunds, procedures) {
    (this.initEnv = env),
      (this.env = env),
      (this.accepted = false),
      (this.incomingFunds = incomingFunds),
      (this.procedures = procedures),
      (this.compStack = compStack),
      (this.emitted = {}),
      (this.events = {});
  }
}

/**
 *
 * @param {LibEntry} lentry
 * @param {{}} env
 * @param {DataTypeDict} DTD //DataTypeDictionary
 */
export function evalLentry(lentry, env, DTD) {
  if (isError()) {
    return;
  }
  // console.log("Lentry: " + lentry.x);
  if (lentry instanceof SS.LibVar) {
    const env_ = _.cloneDeep(env);
    E.ADTDict = DTD;
    env[lentry.x] = E.evalSimpleExp(lentry.e, env_);
    // env[lentry.x] = new ExpPlaceHolder();
    return { env: env, DTD: DTD };
  }
  if (lentry instanceof SS.LibType) {
    const adt = new DT.ScillaDataTypes();
    adt.tname = lentry.x;
    var constrs = []; //constructors - contain name and arity
    lentry.c.forEach((c) => {
      const constr = new DT.Constructor();
      constr.cname = c.cname;
      constr.arity = c.cArgTypes.length;
      adt.tmap[c.cname] = _.cloneDeep(c.cArgTypes);
      constrs.push(constr);
    });
    adt.tconstr = constrs;
    //adt.tparams seem to always be empty for libraries

    //Update ADT dictionaries in this instance of Scilla Type Checker
    DTD.ADTDict[adt.tname] = adt;
    constrs.forEach((c) => {
      DTD.ConstrDict[c.cname] = [c, adt];
    });
    return { env: env, DTD: DTD };
  }
}

export function evalLmod(lmod, env, DTD) {
  const lmodDone = [];
  //Evaluate the external libraries first
  if (lmod.elibs) {
    lmod.elibs.forEach((elib) => {
      if (lmodDone.find((l) => l === elib[0])) {
        return { env: env, DTD: DTD, lmodDone: lmodDone };
      }
      evalLmod(elib[2], env, DTD);
      lmodDone.push(elib[0]);
    });
  }
  //Now evaluate the lmod
  const lentries = lmod.lib.lentries;
  for (let i = 0; i < lentries.length; i++) {
    const lentry = lentries[i];
    evalLentry(lentry, env, DTD);
    if (isError()) {
      return;
    }
  }
  lmodDone.push(lmod.lib.lname);
  return { env: env, DTD: DTD, lmodDone: lmodDone };
}

export function evalCMod(cmod, env, DTD, initArgs) {
  //Eval elibs
  if (cmod.elibs.length > 0) {
    var lmodDone = [];
    for (let i = 0; i < cmod.elibs.length; i++) {
      if (cmod.elibs[i][0] in lmodDone) {
        continue;
      }
      const res = evalLmod(cmod.elibs[i][2], env, DTD);
      if (isError()) {
        return;
      }
      env = res.env;
      DTD = res.DTD;
      lmodDone.concat(res.lmodDone);
    }
  }

  //Eval library
  if (cmod.lib) {
    const lentries = cmod.lib.lentries;
    for (let i = 0; i < lentries.length; i++) {
      const lentry = lentries[i];
      evalLentry(lentry, env, DTD);
      if (isError()) {
        return;
      }
    }
  }

  //Eval Contract
  if (cmod.contr) {
    evalContract(cmod.contr, env, DTD, initArgs);
  }

  if (isError()) {
    console.log(getError());
    if (getError().s.search("builtin") !== -1) {
      return; //do not print those
    }
    console.log(getError());
  }
}

/*
 * Initiate Contract
 */
export function evalContract(contract, env, DTD, initArgs) {
  //Arbitrary implicit init arguments
  env["_this_address"] = new SL.BystrX(
    "0xabfeccdc9012345678901234567890f777567890"
  );
  env["_creation_block"] = new SL.BNumLit(1);

  //Evaluate contract parameters
  //Contract parameters are initiated with initArgs - initArgs are already named appropriately
  for (let i = 0; i < contract.cparams.length; i++) {
    const cparam = contract.cparams[i][0];
    const arg = initArgs[cparam];
    //Type check the literal
    const litTyp = SL.literalType(arg);
    const check = TCU.typeAssignable(contract.cparams[i][1], litTyp);
    if (!check) {
      setError("evalContract: Argument to contract did not match type");
      return;
    }
    env[cparam] = arg;
  }

  //Evaluate constraint
  if (contract.cconstraint) {
    const env_ = _.cloneDeep(env);
    E.evalSimpleExp(contract.cconstraint, env_);
    if (isError()) {
      return;
    }
  }

  //Evaluate fields
  if (contract.cfields) {
    contract.cfields.forEach((f) => {
      const fval = E.evalSimpleExp(f.e, env);
      env[f.name] = fval;
    });
  }

  return env;
}

/*
 * Run Transition From A Respective Message
 */
export function handleMessage(contract, env_, DTD, contrMessage) {
  const env = _.cloneDeep(env_);

  //Implicit parameters that will be given via transitions/messages
  //Currently filled with dummy variables
  env["_amount"] = contrMessage.amount;
  env["_sender"] = contrMessage.sender;
  env["_origin"] = contrMessage.origin;

  //Include explicit parameters in env
  contrMessage.params.forEach((p) => {
    env[p[0]] = p[1];
  });

  const tname = contrMessage.tname;
  const incomingFunds = contrMessage.amount;
  const procedures = contract.ccomps.filter((comp) => {
    return comp.compType instanceof SS.CompProc;
  });

  //Build the configuration
  const conf = new ContrConf(env, [tname], incomingFunds, procedures);

  const compT = contract.ccomps.find((comp) => comp.compName === tname);
  if (!compT) {
    setError("handleMessage: Couldn't find transition " + tname + " to run.");
    return;
  }

  const conf_ = evalStmts(compT.compBody, conf);
  return conf_;
}

export function evalStmts(stmts, conf) {
  if (stmts.length === 0) {
    return conf;
  }

  const s = stmts[0];
  const sts = stmts.slice(1);

  //TOOD: handle details of load and remoteloads of accessing funds
  if (s instanceof SS.Load) {
    const val = conf.env[s.r];
    if (!val) {
      setError("evalStmts: Couldn't find " + s.x);
      return;
    }
    conf.env[s.x] = s.r;
    return evalStmts(sts, conf);
  }

  if (s instanceof SS.RemoteLoad) {
    const val = conf.env[s.addr];
    if (!val) {
      setError("evalStmts: Couldn't find " + s.addr);
      return;
    }
    if (val instanceof SL.BystrX) {
      // //Perform remote_load (from EvalUtil.ml)
      // const l = remoteLoad();
      // conf.env[s.x] = l;
      // return evalStmts(sts, conf);
      setError("evalStmts: Remote functions are not implemented");
      return;
    } else {
      setError(
        "evalStmts: Expected Remote Load address to be a Bystr20 value."
      );
      return;
    }
  }

  if (s instanceof SS.Bind) {
    const env_ = _.cloneDeep(conf.env);
    const val = evalSimpleExp(s.e, env_);
    conf.env[s.x] = val;
    return evalStmts(sts, conf);
  }

  if (s instanceof SS.Store) {
    const val = conf.env[s.r];
    if (!val) {
      setError("evalStmts: Store couldn't find " + s.addr);
      return;
    }
    conf.env[s.x] = val;
    return evalStmts(sts, conf);
  }

  if (s instanceof SS.MapUpdate) {
    const klist = s.klist.map((k) => conf.env[k]);
    if (undefined in klist) {
      setError("evalStmts: Some keys do not exist.");
      return;
    }
    const map = conf.env[s.m];

    function updateMap(m, kl, val) {
      const map = m.kv;
      if (kl.length === 1) {
        if (map instanceof SL.Map) {
          return (map[kl[0]] = val);
        } else {
          setError("evalStmts: More keys than possible accesses");
          return;
        }
      } else {
        return updateMap(map[kl[0]], kl.slice(1), val);
      }
    }

    if (s.ropt) {
      //Update
      updateMap(map, klist, s.ropt);
      if (isError()) {
        return;
      }
    } else {
      //Remove
      updateMap(map, klist, undefined);
      if (isError()) {
        return;
      }
    }

    return evalStmts(sts, conf);
  }

  if (s instanceof MapGet) {
    const klist = s.klist.map((k) => conf.env[k]);
    if (undefined in klist) {
      setError("evalStmts: MapGet - some keys do not exist.");
      return;
    }
    const map = conf.env[s.m];
    const val = klist.reduce((map, key) => {
      return map.kv[key];
    }, map);

    //If "fetchval" is true, fetch the value, else just query if the key exists.
    if (s.fetchval) {
      if (!val) {
        setError("evalStmts: Key doesn't exist");
        return;
      }
      conf.env[s.x] = val;
    } else {
      if (val === undefined) {
        conf.env[s.x] = new SL.ADTValue("False", [], []);
      } else {
        conf.env[s.x] = new SL.ADTValue("True", [], []);
      }
    }
    return evalStmts(sts, conf);
  }

  if (s instanceof SS.RemoteMapGet) {
    setError("evalStmts: Remote functions are not implemented");
    return;
  }

  if (s instanceof SS.BCInfoQuery) {
    setError("evalStmts: Remote functions are not implemented");
    return;
  }

  if (s instanceof SS.TypeCast) {
    setError("evalStmts: Remote functions are not implemented");
    return;
  }
}

export function remoteLoad() {
  //TODO:
  return;
}
