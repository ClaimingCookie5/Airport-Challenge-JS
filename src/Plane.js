'use strict';

class Plane {

    constructor(name, id) {
        this.__name = name;
        this.__id = id;
        this.__location = [];
    }

    location() {
        return this.__location;
    }

    land(airport) {
        this.__location = airport.name();
    }

    takeOff() {
        this.__location = [];
    }
}