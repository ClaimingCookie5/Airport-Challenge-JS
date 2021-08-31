describe('Airport', () => {

    let airport;

    beforeEach(() => {
        airport = new Airport(20);
    });

    describe('new', () => {
        it('is expected to be instance of Aiport', () => {
            expect(airport).toBeInstanceOf(Airport);
        })

        it('is initialized with hangar array and capacity limit', () => {
            expect(airport).toEqual(jasmine.objectContaining({capacity: 20, hangar: []}));
        })
    });

    describe('landPlane', () => {
        it('is expected to land a plane in the hangar', () => {
            airport.landPlane('plane');
            expect(airport.hangar).toHaveSize(1)
        })
    })

    describe('planeTakeOff', () => {
        it('is expected to remove plane from hangar for take off', () => {
            airport.landPlane('plane');
            airport.planeTakeOff('plane')
            expect(airport.hangar).not.toContain('plane')
        })
    })


});