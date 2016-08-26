"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';
    //Underscore is a private field. Not passed into the constructor
    //Want to set up a GETer and SETer to guarantee whatever's passed here is converted to Farenheit or Celsius
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
    }
});