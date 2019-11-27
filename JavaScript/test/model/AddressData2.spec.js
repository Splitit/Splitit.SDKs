/**
 * splitit-web-api-public
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SplititWebApiPublic);
  }
}(this, function(expect, SplititWebApiPublic) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SplititWebApiPublic.AddressData2();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AddressData2', function() {
    it('should create an instance of AddressData2', function() {
      // uncomment below and update the code to test AddressData2
      //var instane = new SplititWebApiPublic.AddressData2();
      //expect(instance).to.be.a(SplititWebApiPublic.AddressData2);
    });

    it('should have the property addressLine (base name: "AddressLine")', function() {
      // uncomment below and update the code to test the property addressLine
      //var instane = new SplititWebApiPublic.AddressData2();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "AddressLine2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instane = new SplititWebApiPublic.AddressData2();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "City")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new SplititWebApiPublic.AddressData2();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "Country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new SplititWebApiPublic.AddressData2();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "State")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new SplititWebApiPublic.AddressData2();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "Zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instane = new SplititWebApiPublic.AddressData2();
      //expect(instance).to.be();
    });

    it('should have the property fullAddressLine (base name: "FullAddressLine")', function() {
      // uncomment below and update the code to test the property fullAddressLine
      //var instane = new SplititWebApiPublic.AddressData2();
      //expect(instance).to.be();
    });

  });

}));