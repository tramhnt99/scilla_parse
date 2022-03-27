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

export var tcerror = undefined;

export function setError(er) {
    // console.log(er);
    if (tcerror === undefined) {
        tcerror = er;
    }
}

export function isError() {
    return tcerror !== undefined;
}

export function getError() {
    return tcerror;
}

//Starting type environment that contains all library functions and library ADTs
//Which also type checks the library functions
export function startingTEnv() {
    const tenv = {};
    const STC = new ScillaTypeChecker();
    for (let i = 0; i < stdlib.length; i++) {
        const input = fs.readFileSync('stdlib/'.concat(stdlib[i]).concat('.scillib')).toString();
        console.log("Input: " + 'stdlib/'.concat(stdlib[i]).concat('.scillib'));
        const chars = new antlr4.InputStream(input);
        const lexer = new ScillaLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ScillaParser(tokens);
        const tree = parser.lmodule();
        const lmod = tree.accept(new TranslateVisitor());

        //Let us do libs first - TODO: elibs
        if (!lmod.libs) { continue; }
        console.log(lmod);
        const lentries = lmod.libs.lentries;
        for (let i = 0; i < lentries.length; i++) {
            const lentry = lentries[i];
            if (lentry instanceof SS.LibVar) {
                const tenv_ = _.cloneDeep(tenv);
                const funTy = STC.typeExpr(lentry.e, tenv_);
                if (lentry.tyopt) {
                    console.log(lentry.x);
                    console.log(lentry.tyopt);
                    console.log(STC.getTy(funTy));
                    if (STC.typeAssignable(lentry.tyopt, STC.getTy(funTy))) {
                        tenv[lentry.x] = STC.getTy(funTy);
                    } else {
                        setError(new Error("startingTenv: Type of function is not assinable to declared type."));
                        break;
                    }
                } else {
                    tenv[lentry.x] = STC.getTy(funTy);
                }
            }
        }
        if (isError()) {
            break;
        }
    }
    if (isError()) {return getError();}
    return tenv;
}