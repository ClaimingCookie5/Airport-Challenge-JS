'use strict';

class Plane {

    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.location = [];
    }

    land(airport) {
        this.location.push(airport);
    }

    takeOff() {
        this.location = [];
    }
}