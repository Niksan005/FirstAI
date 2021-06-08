export class AI {

    Network = null;

    constructor(hiddens = [3]) {
        hiddens = this.ToArray(hiddens);
        this.Network = new brain.NeuralNetwork({
            hiddenLayers: hiddens
        });
    }

    Train(input, eoutput) {
        input = this.ToArray(input);
        eoutput = this.ToArray(eoutput);
        this.Network.train([
            { input: input, output: eoutput }
        ]);
    }

    Run(input) {
        input = this.ToArray(input);
        return this.Network.run(input);
    }

    ToSvg(id) {
        const diagram = document.getElementById(id);
        diagram ? diagram.innerHTML = brain.utilities.toSVG(this.Network) :
            console.log("The id : " + id + " : is invalid.");
    }  

    ToArray(arr) {
        return (!Array.isArray(arr)) ? arr = [arr] : arr;
    }
    
}