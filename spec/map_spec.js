/* jshint node:true, jasmine:true */
'use strict';

var Map = require('../index').Map;


describe('draw a map with one room', function() {
  it('draws a north entrance', function() {
    var map = new Map({"A": {"entrance": "north"}});
    expect(map.draw()).toEqual(
      '+-- v --+\n' +
      '|       |\n' +
      '|   A   |\n' +
      '|       |\n' +
      '+-------+');
  });

  it('draws an east entrance', function() {
    var map = new Map({"A": {"entrance": "east"}});
    expect(map.draw()).toEqual(
      '+-------+\n' +
      '|        \n' +
      '|   A   <\n' +
      '|        \n' +
      '+-------+');
  });

  it('draws a south entrance', function() {
    var map = new Map({"A": {"entrance": "south"}});
    expect(map.draw()).toEqual(
      '+-------+\n' +
      '|       |\n' +
      '|   A   |\n' +
      '|       |\n' +
      '+-- ^ --+');
  });

  it('draws a west entrance', function() {
    var map = new Map({"A": {"entrance": "west"}});
    expect(map.draw()).toEqual(
      '+-------+\n' +
      '        |\n' +
      '>   A   |\n' +
      '        |\n' +
      '+-------+');
  });
});
