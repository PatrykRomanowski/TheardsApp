import TheardSize from "./theardSize";

class TheardType {
    constructor(name) {
        this.name = name;
        this.theardsSize = {}
    }

    addTheardSize(size) {
        this.theardsSize[size] = new TheardSize()
    }

    addTheardPitch(size, pitch, hole, min, max) {
        if (this.theardsSize[size]) {
            this.theardsSize[size].addThreadData(this.name, size, pitch, hole, min, max);
        } else {
            console.error(`Rozmiar ${size} nie został jeszcze dodany.`);
        }
    }
}

export default TheardType;