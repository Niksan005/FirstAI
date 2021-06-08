import * as lib from "../Interfaces/LoadInterfaces.js"

function ItoXY(i, n) {
    if (isNaN(n)) return lib.IIsNaN(n + "[ItoXY]");
    return {
        x: i % n,
        y: Math.floor(i / n)
    }
}

function XYtoI(x, y, n) {
    if (isNaN(n)) return lib.IsNaN(x + " or " + y + " or " + n + "[XYtoI]");
    return x + (y * n);
}

export { ItoXY, XYtoI };