import { Error } from './syntax.js';

export var tcerror = undefined;

export function setError(er) {
    // console.log(er);
    tcerror = er;
}

export function isError() {
    return tcerror !== undefined;
}

export function getError() {
    return tcerror;
}