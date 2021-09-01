describe('Plane', () => {

    let plane;
    let airport;

    beforeEach(() => {
        plane = new Plane('Boeing', 'N461HV');
        airport = new Airport("Heathrow", 20);
    });

    describe('new', () => {
        it('is expected to be instance of Plane', () => {
            expect(plane).toBeInstanceOf(Plane);
        });

        it('is expected to have a name and ID', () => {
            expect(plane).toEqual(jasmine.objectContaining({ name: 'Boeing', id: 'N461HV', location: [] }));
        });
    });

    describe('land', () => {
        it('is expected to land plane at airport', () => {
            plane.land(airport);
            expect(plane.location).toContain(airport);
        });
    });

    describe('takeOff', () => {
        it('is expected to take off from airport', () => {
            plane.land(airport);
            plane.takeOff();
            expect(plane.location).not.toContain(airport);
        })
    })

})