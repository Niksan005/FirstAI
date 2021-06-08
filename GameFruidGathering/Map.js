import * as Mapping from "./IndexMapping.js"
import * as Player from "./Player.js"

class Map {

    Map = [];
    N = 1;
    Nsquared = 1;
    Players = null;

    constructor(fill, n) {
        this.N = n;
        this.Nsquared = n * n;
        for (let i = 0; i < this.Nsquared; i++) {
            this.Map[i] = fill;
        }
        //Player = new Player.Player();
    }

    GenerateFruid() {
        var i = this.RandomI();
        this.Map[i] = 1;
    }

    RandomI() {
        return Math.floor(Math.random() * this.Nsquared);
    }

    GetByXY(x, y) {
        return this.Map[Mapping.XYtoI(x, y, this.N)];
    }

    GetByI(i) {
        return this.Map[i];
    }
}

export { Map };