import TheardType from "./theardType";


class Theards {
    constructor() {
        this.theardsList = {};
    }

    addTheards(theardsName) {
        this.theardsList[theardsName] = new TheardType(theardsName);
    }

    addSize(theardName, size) {
        this.theardsList[theardName].addTheardSize(size);
    }
    addPitch(theardName, size, pitch, hole, min, max) {
        this.theardsList[theardName].addTheardPitch(size, pitch, hole, min, max);
    }

}

export default Theards;