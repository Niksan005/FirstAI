class Buttons {

    Id = "";
    N = 0;

    constructor(id, n) {
        this.Id = id;
        this.N = n;
    }

    get Values() {
        if (this.Id == "" || this.N == 0) return null;
        let values = [],
            i = 0;
        while (i < this.N) values[i++] = document.getElementById(this.Id + i.toString()).value;

    }

}