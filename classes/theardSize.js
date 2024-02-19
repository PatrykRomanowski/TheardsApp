// theardSize.js
class TheardSize {
    constructor() {
        this.threadPitch = {};
    }

    addThreadData(threadName, theardSize, theardPitch, hole, min, max) {
        this.threadPitch[theardPitch] = {
            pitch: theardPitch,
            hole,
            min,
            max,
        }
    }
}

export default TheardSize;