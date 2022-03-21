

export default class ScillaLiterals {}

export class Map {
    constructor(kv) {
        this.kv = kv;
    }

    remove(k) {
        this.kv[k] = undefined;
    }

    update(k,v) {
        this.kv[k] = v;
    }

}