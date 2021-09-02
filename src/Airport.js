'use strict';

class Airport {
    
    constructor(name,capacity) {
        this._name = name;
        this._capacity = capacity;
        this._hangar = [];
    };

    name() {
        return this._name;
    }

    hangar() {
        return this._hangar;
    };

    clearLanding(plane) {
        plane.land(this)
        this._hangar.push(plane);
    };

    clearTakeOff(whichPlane) {
        whichPlane.takeOff();
        this._hangar = this._hangar.filter(plane => {
            plane !== whichPlane;
        })
    };

}