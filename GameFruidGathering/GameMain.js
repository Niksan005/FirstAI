import * as Lib from "../Interfaces/LoadInterfaces.js"
import * as Mapping from "./IndexMapping.js"
import * as ThePlayer from "./Player.js"
import * as TheMap from "./Map.js"

var Map = TheMap.Map;
var Player = ThePlayer.Player;
var AI = Lib.AI;
var IsNaN = Lib.IsNaN;

class Game{
    
    Map = null;
    Players = [];
    NPlayers = 0;

    constructor(n, numOfPlayers, hiddens){
        this.Map = new Map(0.5, n);
        while (this.NPlayers < numOfPlayers) {
            var x = Math.floor(Math.random() * n);
            var y = Math.floor(Math.random() * n);
            this.Players[this.NPlayers] = new Player(x, y, hiddens);
            this.Players[this.NPlayers++].Network.Train([this.Map], [0, 1]);
            this.Map.SetByXY(x, y, 0);
            console.log(this.Players[this.NPlayers-1]);
        }

    }
}

export { Map, Player, Mapping , AI, IsNaN, Game }