import antlr4 from "antlr4";
import fs from "fs";
import ScillaLexer from "./scillaLexer.js";
import ScillaParser from "./scillaParser.js";
import { Error } from "./syntax.js";
import * as SS from "./syntax.js";
import ScillaTypeChecker, * as TC from "./typechecker.js";
import _ from 'lodash';
import { stdlib } from "./test.js";
import TranslateVisitor from "./translate.js";
import { Constructor, ScillaDataTypes } from "./datatypes.js";
import * as TCU from "./typecheckerUtil.js";

//How error is propagated - function will return the error if tcerror has received an error
//Issue - sometimes when a function result is an error and it's not noticed, the Error() object
//would be evaluated.
//Fix: we no longer return the Error() but rather just undefined. that way things break earlier

export var tcerror = undefined;
export var hideError = false;

export function setError(er) {
    // console.log(er);
    if (tcerror === undefined) {
        tcerror = er;
    }
}

export function isError() {
    if (!hideError) {
        return tcerror !== undefined;
    } else {
        return false;
    }
}

export function setHideError(t) {
    hideError = t;
    return;
}

export function getError() {
    return tcerror;
}

export function resetErrorSettings() {
    hideError = false;
    tcerror = undefined;
}

//Starting type environment that contains all library functions and library ADTs
//Which also type checks the library functions
//Return the tenv and the typechecker with updated ADTs
//Note: currently ignores all lentries that fail because of unimplemented stdlibs
export function startingTEnv() {
    const parsedLibs = {};

    //1. Parse all libraries
    for (let i = 0; i < stdlib.length; i++) {
        const input = fs.readFileSync('stdlib/'.concat(stdlib[i]).concat('.scillib')).toString();
        const chars = new antlr4.InputStream(input);
        const lexer = new ScillaLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ScillaParser(tokens);
        const tree = parser.lmodule();
        const lmod = tree.accept(new TranslateVisitor());
        parsedLibs[stdlib[i]] = lmod;
    }

    const tenv = {};
    const STC = new ScillaTypeChecker();
    const lmodDone = []; //String[] //IMPORTANT: we skip those named

    //2. Type check all modules
    //Note: the function currently doesn't fail with error.
    for (const lmod in parsedLibs) {
        console.log("Input: " + lmod);
        if (lmodDone.find(l => l === lmod)) {
            continue;
        }

        function typeLmodGeneral(lmod) {
            //Type Check elibs first to add function types and ADTs in tenv and STC
            if (lmod.elibs) {
                lmod.elibs.forEach(elib => {
                    if (lmodDone.find(l => l === elib[0])) {return undefined;}
                    typeLmodGeneral(elib[2]);
                    lmodDone.push(elib[0]);
                });
            }

            //Now type check the lmod
            const lentries = lmod.lib.lentries;
            for (let i = 0; i < lentries.length; i++) {
                const lentry = lentries[i];
                resetErrorSettings();
                if (lentry.x === "compute_m") {
                    typeLentryGeneral(lentry);
                }
                typeLentryGeneral(lentry);
            }
            lmodDone.push(lmod.lib.lname);
        }

        //The following function edits mutable tenv and STC defined above
        // => not for external use
        function typeLentryGeneral(lentry) {
            if (lentry instanceof SS.LibVar) {
                const tenv_ = _.cloneDeep(tenv);
                const funTy = STC.typeExpr(lentry.e, tenv_);
                if (lentry.tyopt) {
                    const typAssign = TCU.typeAssignable(lentry.tyopt, STC.getTy(funTy));
                    if (typAssign) {
                        tenv[lentry.x] = STC.getTy(funTy);
                        return;
                    } else {
                        setError(new Error("startingTenv: Type of function is not assinable to declared type."));
                        return;
                    }
                } else {
                    if (!funTy instanceof Error) {
                        tenv[lentry.x] = STC.getTy(funTy);
                        return;
                    }
                }
            }

            if (lentry instanceof SS.LibType) {
                //We add the new ADT
                const adt = new ScillaDataTypes();
                adt.tname = lentry.x;
                var constrs = []; //constructors - contain name and arity
                lentry.c.forEach(c => {
                    const constr = new Constructor();
                    constr.cname = c.cname;
                    constr.arity = c.cArgTypes.length;
                    adt.tmap[c.cname] = _.cloneDeep(c.cArgTypes);
                    constrs.push(constr);
                });
                adt.tconstr = constrs;
                //adt.tparams seem to always be empty for libraries

                //Update ADT dictionaries in this instance of Scilla Type Checker
                STC.ADTDict.ADTDict[adt.tname] = adt;
                if (lentry.x === "LittleEndian") {
                    console.log("we do see him");
                }
                constrs.forEach(c => {
                    STC.ADTDict.ConstrDict[c.cname] = [c, adt];
                });
            }
        }
        typeLmodGeneral(parsedLibs[lmod])
    }

    //Return the tenv and the typechecker with updated ADTs
    return [tenv, STC];
}