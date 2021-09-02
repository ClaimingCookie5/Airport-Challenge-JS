'use strict';

describe('Airport', () => {

    let airport;
    let plane1;
    let plane2;

    beforeEach(() => {
        airport = new Airport("Heathrow", 20);
        plane1 = new Plane('Boeing', '2468');
        plane2 = new Plane('Boeing', 'N461HV');
    });

    describe('new', () => {
        it('is expected to be instance of Aiport', () => {
            expect(airport).toBeInstanceOf(Airport);
        });

        it('is initialized with hangar array and capacity limit', () => {
            expect(airport).toEqual(jasmine.objectContaining({_capacity: 20, _hangar: []}));
        });
    });

    describe('clearLanding', () => {
        it('is expected to land a plane in the hangar', () => {
            airport.clearLanding(plane1);
            expect(airport.hangar()).toHaveSize(1);
        });
    });

    describe('clearTakeOff', () => {
        it('is expected to remove plane from hangar for take off', () => {
            airport.clearLanding(plane1);
            airport.clearLanding(plane2);
            airport.clearTakeOff(plane1);
            expect(airport.hangar()).not.toContain(plane1);
        });
    });


});