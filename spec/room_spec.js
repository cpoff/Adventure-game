/* jshint node:true, jasmine:true */
'use strict';

var Room = require('../index').Room;


describe('draw a room', function() {
  it('draws a north entrance', function() {
    var room = new Room('A', {'entrance': 'north'});
    expect(room.draw()).toEqual(
      '+-- v --+\n' +
      '|       |\n' +
      '|   A   |\n' +
      '|       |\n' +
      '+-------+');
  });

  it('draws an east entrance', function() {
    var room = new Room("A", {"entrance": "east"});
    expect(room.draw()).toEqual(
      '+-------+\n' +
      '|        \n' +
      '|   A   <\n' +
      '|        \n' +
      '+-------+');
  });

  it('draws a south entrance', function() {
    var room = new Room("A", {"entrance": "south"});
    expect(room.draw()).toEqual(
      '+-------+\n' +
      '|       |\n' +
      '|   A   |\n' +
      '|       |\n' +
      '+-- ^ --+');
  });

  it('draws a west entrance', function() {
    var room = new Room("A", {"entrance": "west"});
    expect(room.draw()).toEqual(
      '+-------+\n' +
      '        |\n' +
      '>   A   |\n' +
      '        |\n' +
      '+-------+');
  });

});
