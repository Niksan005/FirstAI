import * as Lib from "../Interfaces/LoadInterfaces.js"

class Player {

    X = 0;
    Y = 0;
    Points = 0;
    Net = null;

    constructor(x, y, hiddens) {
        this.X = x;
        this.Y = y;
        Net = new Lib.AI(hiddens);
    }
}

export { Player };