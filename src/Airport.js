class Airport {
    
    constructor(capacity) {
        this.capacity = capacity;
        this.hangar = [];
    }

    _findPlane = (whichPlane) => {
        this.hangar.filter(plane => { 
            return plane === whichPlane; 
        });
    }

    landPlane = (plane) => {
        this.hangar.push(plane)
    }

    planeTakeOff = (whichPlane) => {
        this.hangar.splice(this._findPlane(whichPlane));
    }
}