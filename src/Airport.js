'use strict';

class Airport {
    
    constructor(name,capacity) {
        this.name = name;
        this.capacity = capacity;
        this.hangar = [];
    }

    _findPlane(whichPlane) {
        this.hangar.filter(plane => { 
            return plane.id === whichPlane; 
        });
    }

    clearLanding(plane) {
        this.hangar.push(plane);
    }

    clearTakeOff(whichPlane) {
        this.hangar.splice(this._findPlane(whichPlane), 1);
    }
}