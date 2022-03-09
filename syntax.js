//Syntax of Scilla programs


//Scilla expressions
export default class ScillaExpr {}

//@x: String
//@f: ScillaExpr
//@e: ScillaExpr
class Let extends ScillaExpr{
    constructor(x, f, e) {
        this.x = x;
        this.ty = null;
        this.lhs = f;
        this.rhs = e;
    }
}

