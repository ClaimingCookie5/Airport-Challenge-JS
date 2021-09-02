'use strict';

class Airport {
    
    constructor(name,capacity, weather) {
        this._weather = typeof weather !== 'undefined' ? weather : new Weather;
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
        if(this._weather.isStormy()) {
            throw new Error('Cannot land in a storm');
        }
        plane.land(this)
        this._hangar.push(plane);
    };

    clearTakeOff(whichPlane) {
        // if(this._weather.isStormy()) {
        //     throw new Error('Cannot take off in a storm');
        // }
        whichPlane.takeOff();
        this._hangar = this._hangar.filter(plane => {
            plane !== whichPlane;
        })
    };

    isStormy() {
        return false
    }

}