/**
 * Scilla Static Type Checker
 */
import * as SS from './syntax.js';
import { ScillaLiterals } from './literals.js';
import { Error } from './syntax.js';
import ScillaType, * as ST from './types.js';
import _ from 'lodash';
import * as BI from './builtin.js';
import * as DT from './datatypes.js';
import { isError, getError, setError } from './general.js';
import * as TCU from './typecheckerUtil.js'; //Type Checker Utilities


const SL = new ScillaLiterals();

export default class ScillaTypeChecker{
    constructor(){
        this.error_msg = undefined;
        this.ADTDict = new DT.DataTypeDict();
    }

    getType(v) {
        if (isError()) { return; }
        return this.tyEnv[v];
    }

    updateEnv(v, ty) {
        if (isError()) { return; }
        this.tyEnv[v] = ty;
    }

    //Results of all functions will be an object containing the expressions
    //and its type (unless it was an Error)
    makeRes(e, ty) {
        if (isError()) { return; }
        return {e: e, ty: ty};
    }

    getExpr(res) {
        if (isError()) { return; }
        return res.e;
    }

    getTy(res) {
        if (isError()) { return; }
        return res.ty;
    }

    //Typing Expressions
    //Returns the expression paired with type
    //[ScillaExpr, ScillaType]
    //If fails, returns undefined - with error message
    //found in this.error
    /**
     * 
     * @param {ScillaExpr} e 
     * @param {(String * SType){}} tenv //Contains both type vars and vars
     */
    typeExpr(e, tenv){
        if (isError()) {
            return;;
        }

        if (e instanceof SS.Literal) {
            const res = SL.literalType(e);
            if (isError()) { return; }
            return this.makeRes(e, res);
        }
        if (e instanceof SS.Var) {
            const ty = tenv[e.s];
            if (ty === undefined) {
                setError(new Error("typeExpr: Variable " + e.s + " not found in Type Environment."));
                return;;
            }
            return this.makeRes(e, ty);
        }
        if (e instanceof SS.Fun) {
            const isWF = TCU.isWellFormedType(e.ty, tenv, this.ADTDict.ADTDict);
            if (!isWF) { 
                setError(new Error("typeExpr: Function Argument Type is not well formed."));
                return;; 
            }

            //Extend environment to include the argument type
            const tenv_ = _.cloneDeep(tenv); 
            TCU.setTenv(tenv_, e.id, e.ty);
            if (isError()) { return; }

            //Recursively run function with the updated environment
            const typedBody = this.typeExpr(e.e, tenv_);  
            if (isError()) { return; }

            return this.makeRes(e, new ST.FunType(e.ty, this.getTy(typedBody)));
        }

        if (e instanceof SS.App) {
            const fty = tenv[e.f_var];
            if (!fty) {
                setError(new Error("typeExpr: Type of function " + e.f_var + " is not bound"));
                return;;
            }

            //Arguments Type - undefined arg types are checked in TCU.functionTypeApplies
            const actualsTy = e.args.map(arg => tenv[arg]);
            const resType = TCU.functionTypeApplies(fty, actualsTy);
            if (isError()) { return; }
            
            const resTypeWF = TCU.isWellFormedType(resType, tenv, this.ADTDict.ADTDict);
            if (!resTypeWF) {
                setError(new Error("typeExpr: Result Type of App is not well formed."));
                return;;
            }

            return this.makeRes(e, resType);
        }

        if (e instanceof SS.Let) {
            const typedLhs = this.typeExpr(e.lhs, tenv);
            if (isError()) { return; }
            const actualTyp = 
                e.ty === null
                ? this.getTy(typedLhs)
                : TCU.typeAssignable(e.ty, this.getTy(typedLhs))
                ? e.ty  
                : new Error("typeExpr: Typing in Let is not assignable ");
            if (actualTyp instanceof Error) { setError(actualTyp); return;}

            const tenv_ = _.cloneDeep(tenv); 
            TCU.setTenv(tenv_, e.x, actualTyp);
            const typedRhs = this.typeExpr(e.rhs, tenv_);
            if (isError()) { return; }
            return this.makeRes(e, this.getTy(typedRhs));
        }

        if (e instanceof SS.Builtin) {
            if (e.targs) {
                const tyArgsWF = e.targs.reduce((is_true, targ) => 
                is_true && TCU.isWellFormedType(targ, tenv, this.ADTDict.ADTDict), true);
                if (!tyArgsWF) {
                    setError(new Error("typeExpr: Builtin Type Arguments are not well formed."));
                    return;
                }
            }
            //Resolve the actuals and get the type of arguments
            const resolvedTypArgs = e.xs.map(arg => {
                if (tenv[arg] === undefined) {                    
                    setError(new Error("typeExpr: Builtin Argument " + arg + " is not in environment."));
                } else {
                    return tenv[arg];
                }
            });
            if (isError()) { return; }

            //Get Function Type
            const func = BI.BuiltInDict[e.b];
            if (func === undefined) {
                //We do not handle type check this specific builtin
                setError(new Error("typeExpr: We do not handle builtin " + e.b));
            }
            //Remove TFuns
            const func_ = BI.resolveBIFunType(e.b, resolvedTypArgs);
            if (isError()) { return; }

            const resType = TCU.functionTypeApplies(func_, resolvedTypArgs);
            if (isError()) { return; }

            const resTypeWF = TCU.isWellFormedType(resType, tenv, this.ADTDict.ADTDict);
            if (!resTypeWF) { 
                setError(new Error("typeExpr: Builtin result type is not well formed."));
                return;; 
            }

            return this.makeRes(e, resType);
        }

        if (e instanceof SS.DataConstructor) {
            const tyArgsWF = e.ts.reduce((is_true, targ) =>
                is_true && TCU.isWellFormedType(targ, tenv, this.ADTDict.ADTDict), true);
            if (!tyArgsWF) {
                setError(new Error("typeExpr: DataConstructor type arguments are not well formed"));
                return;;
            }
            
            const constr = this.ADTDict.ConstrDict[e.c][0];
            const noOfArg = e.args.length;
            if (constr.arity !== noOfArg) {
                setError(new Error("typeExpr: Constructor arity mismatch"));
                return;;
            }

            const adt = this.ADTDict.ConstrDict[e.c][1];
            if (constr.arity === 0) {
                //We do not need to type check args
                return this.makeRes(e, new ST.ADT(adt.tname, e.ts));
            }

            //Apply types to type functions and check arguments
            //1. Get Data Type and then tparams and make sure there's no shadowing.
            const cparams = adt.tmap[e.c]; //SType[] - constructor parameters
            const ADTparams = adt.tparams; //String[] - what we might rename
            const refresh = TCU.refereshADTTVars(cparams, ADTparams, tenv);
            const ADTParams_ = refresh.newap;
            const cparamsNoShadow = refresh.newcp;
            // console.log("cparamsNoShadow");
            // console.log(cparamsNoShadow);
            // console.log(e);

            //2. Apply type params and update tenv accordingly
            const appliedCParams = cparamsNoShadow.map(cparam => {
                return ADTParams_.reduce((stype, str_tvar, index) => {
                    TCU.setTenv(tenv, str_tvar, e.ts[index]);
                    return ST.substTypeinType(str_tvar, e.ts[index], stype)
                }, cparam);
            });
            if (isError()) {return;};

            //3. Ensure arguments applied type check
            const typesOfArgs = e.args.map(arg => {
                const tenv_ = _.cloneDeep(tenv);
                const res = this.typeExpr(new SS.Var(arg), tenv_);
                if (!res) {return;}
                return this.typeExpr(new SS.Var(arg), tenv_).ty;
            });
            const argTC = appliedCParams.reduce((is_true, cparam, index) => {
                return is_true && TCU.typeAssignable(cparam, typesOfArgs[index]);
            }, true);
            if (!argTC) {
                setError(new Error("typeExpr: Arguments of Constructor do not type check"));
            }
            if (isError()) { return; }
            return this.makeRes(e, new ST.ADT(adt.tname, e.ts));
        }

        if (e instanceof SS.Match) {
            if (e.clauses.length === 0) {
                setError(new Error("typeExpr: List of pattern matching is empty."));
            }
            const xTyp = tenv[e.x];

            //Ensure all clauses have the same type
            var clausesTyp = [];
            //Depending on the binder clause, we update the environment and run
            //typechecking on the respective expressions
            function updateTenvOfPattern(pat, xty, tenv, ADTDict) {
                if (isError()) { return; }
                if (pat instanceof SS.Pattern.WildCard) {
                    const tenv_ = _.cloneDeep(tenv); 
                    return tenv_;
                }
                if (pat instanceof SS.Pattern.Binder) {
                    const tenv_ = _.cloneDeep(tenv);
                    TCU.setTenv(tenv_, pat.x, xty);
                    return tenv_;
                }
                if (pat instanceof SS.Pattern.ConstructorPat) {
                    //1. Find the constructor by name and its respective ADT
                    const constr = ADTDict.ConstrDict[pat.c][0];  
                    const adt = ADTDict.ConstrDict[pat.c][1]; 

                    //2. Extract args that it needs. Check length vs. arity
                    if (constr.arity !== pat.ps.length) {
                        return setError(new Error("typeExpr: Constructor Type Arguments Pattern arity mismatch."));
                    }

                    //3. Find the actual types and run with updated tenv
                    //Since it's mapped to a contructor, its type is definitely ADT
                    if (!(xty instanceof ST.ADT)) {
                        return setError(new Error("typeExpr: Constructor Pattern is not of type ADT"));
                    }

                    //4. xty is the ADT type - includes any application to tparams of a adt
                    //   adt.map[pat.c] (call tyToInit) would give us what a constructor's argument types are
                    //   we initialise tyToInit with info in xty
                    //   then update respective argument type of construtor
                    if (constr.arity === 0) {
                        const tenv_ = _.cloneDeep(tenv); 
                        return tenv_; //No more bindings
                    } else {
                        const tenv_ = _.cloneDeep(tenv);
                        const tyToInit = adt.tmap[pat.c];
                        const fresh = TCU.refereshADTTVars(tyToInit, adt.tparams, tenv_); //No shadowing
                        const ADTParams = fresh.newap;
                        const cparams = fresh.newcp;
                        const appliedCParams = cparams.map(cparam => {
                            return ADTParams.reduce((stype, str_tvar, index) => {
                                TCU.setTenv(tenv_, str_tvar, xty.t[index]);
                                return ST.substTypeinType(str_tvar, xty.t[index], stype);
                            }, cparam);
                        });
                        if (isError()) {return;}
                        return pat.ps.reduce((tenv_, pat_, index) => updateTenvOfPattern(pat_, appliedCParams[index], tenv_, ADTDict), tenv_);
                    }
                }
            }
            const tenv_ = _.cloneDeep(tenv);
            
            for (let i = 0; i < e.clauses.length; i++) {
                const clause = e.clauses[i];
                const clauseTyp = this.typeExpr(clause.exp, updateTenvOfPattern(clause.pat, xTyp, tenv_, this.ADTDict));
                if (!clauseTyp) {
                    setError("typeExpr: Match clauses's type is met an error");
                    return;
                }
                clausesTyp.push(clauseTyp.ty);
            }
            if (isError()) { return; }
            const allEqual = clausesTyp.every((ty => TCU.typeAssignable(ty, clausesTyp[0])));
            if (!allEqual) {
                setError(new Error("typeExpr: Match clauses are not of the same type"));
            }
            if (isError()) { return; }
            return this.makeRes(e, clausesTyp[0]);
        }

        if (e instanceof SS.TFun) {
            //According to Scilla TC, it is illegal to declare a type variable
            //with the same name as an existing one in the scope
            if (tenv[e.i] !== undefined) {
                setError(new Error("typeExpr: Type Variable is already in use"));
            }
            const tenv_ = _.cloneDeep(tenv);
            TCU.setTenv(tenv_, e.i, new ST.TypeVar(e.i));
            const typedE = this.typeExpr(e.e, tenv_);
            return this.makeRes(e, new ST.PolyFun(e.i, this.getTy(typedE)));
        }

        if (e instanceof SS.TApp) { 
            //Check all type arguments are WF
            const tArgsWF = e.targs.reduce((is_true, targ) => is_true && TCU.isWellFormedType(targ, tenv, this.ADTDict.ADTDict));
            if (!tArgsWF) {
                setError(new Error("typeExpr: TApp type arguments are not well formed."));
                return;;
            }
            const funTy = tenv[e.f];
            if (!funTy) {
                setError(new Error("typeExpr: TApp's function type of function " + e.f + " is not bound"));
                return;;
            }
            function applyToTFun(tfun, targs) {
                if (isError()) {return;};
                if (tfun instanceof ST.PolyFun) {
                    if (targs.length > 0) {
                        const tenv_ = _.cloneDeep(tenv);
                        TCU.setTenv(tenv_, tfun.name, targs[0]);
                        const tfun_ = ST.substTypeinType(tfun.name, targs[0], tfun.t);
                        return applyToTFun(tfun_, targs.slice(1, targs.length));
                    } else {
                        return tfun;
                    }
                } else {
                    return tfun;
                }
            }
            const funTy_ = applyToTFun(funTy, e.targs);
            if (isError()) {return;};
            return this.makeRes(e, funTy_);
        }

        if (e instanceof SS.Message) {
            //Find the type of the message
            function msgTyp(e) {
                if (e.es.find(e => e.i === "_tag") !== undefined) {
                    return new ST.MessageTyp();
                }
                if (e.es.find(e => e.i === "_eventname") !== undefined) {
                    return new ST.EventTyp();
                }
                if (e.es.find(e => e.i === "_exception") !== undefined) {
                    return new ST.ExceptionTyp();
                }
                setError(new Error("msgTyp: Ill built message"));
            }
            const msgTy = msgTyp(e);
            if (isError()) {return;};

            function payloadTyp(es, ADTDict) {
                const STC =  new ScillaTypeChecker(); //not sure why this is a bug
                STC.ADTDict = ADTDict;
                function checkFieldType(seenTyp) {
                    //If the field is a mandatory field
                    //We check the literal passed to it is of the right type
                    if (ST.msgFieldTypes[es.i] !== undefined) {
                        if (!TCU.typeAssignable(ST.msgFieldTypes[es.i], seenTyp)) {
                            console.log(ST.msgFieldTypes[es.i]);
                            console.log(seenTyp);
                            console.log(es.i);
                            setError(new Error("checkFieldType: Message field type is not assignable."));
                        }
                    }
                }

                if (es.l !== undefined) {
                    //A literal is passed to message
                    const tenv_ = _.cloneDeep(tenv);
                    const ty = STC.typeExpr(es.l, tenv_).ty;
                    checkFieldType(ty);
                    if (isError()) {return;};
                    return STC.makeRes(es, ty);
                }

                if (es.v !== undefined) {
                    //A variable is passed to message
                    const ty = tenv[es.v];
                    if (ty === undefined) {
                        setError(new Error("payloadTyp: Message variable is not in the environemt."));
                        return;;
                    }
                    checkFieldType(ty);
                    if (ty instanceof ST.MapType || ty instanceof ST.EventTyp || ty instanceof ST.PolyFun || ty instanceof ST.Unit) {
                        setError(new Error("payloadTyp: Message variables are of illegal type."));
                        return;;
                    }
                    return STC.makeRes(es, ty);
                }
            }
            for (let i = 0; i < e.es.length; i++) {
                payloadTyp(e.es[i], this.ADTDict);
                //Ignore results, we just type check payloads
            }
            if (isError()) { return; }
            return this.makeRes(e, msgTy);
        }
    }
}

