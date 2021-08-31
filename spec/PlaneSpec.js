describe('Plane', () => {

    let plane;

    beforeEach(() => {
        plane = new Plane('Boeing', 'N461HV');
    })

    describe('new', () => {
        it('is expected to be instance of Plane', () => {
            expect(plane).toBeInstanceOf(Plane);
        })

        it('is expected to have a name and ID', () => {
            expect(plane).toEqual(jasmine.objectContaining({name: 'Boeing', id: 'N461HV'}))
        })
    })

})