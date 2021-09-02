'use strict';

describe('Weather', () => {

  let weather;

  beforeEach(() => {
    weather = new Weather;
  })

    describe('new', () => {
      it('is expected to be an instance of Weather', () => {
        expect(weather).toBeInstanceOf(Weather);
      });
    })

    it('allows there to be a strom', () => {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isStormy()).toBeTrue();
    })

    it('allows for good weather', () => {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy()).toBeFalse();
    })


})