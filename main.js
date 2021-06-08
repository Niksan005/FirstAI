import * as Game from "./GameFruidGathering/GameMain.js";

let net = new Game.AI([3]);

net.Train([0, 0], [0, 0]);
net.Train([1, 0], [1, 0]);
net.Train([1, 1], [1, 1]);
net.Train([0, 1], [0, 1]);

net.ToSvg("diagram");

console.log(net.Run([0, 0]));

//let theMap = new Game.Map(0, 5);
//theMap.GenerateFruid();
//theMap.GenerateFruid();
//theMap.GenerateFruid();

//console.log(theMap.Map);