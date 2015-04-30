/* jshint node:true, jasmine:true */
'use strict';

var Map = require('../index').Map;


describe('maps must have one entrance', function() {
  it('blows up if there are none', function() {
    expect(function() {
      new Map({"A": {}});
    }).toThrowError('Maps must have exactly one entrance');
  });

  it('blows up if there are two', function() {
    expect(function() {
      new Map({
        'A': {'entrance': 'north'},
        'B': {'entrance': 'north'}
      });
    }).toThrowError('Maps must have exactly one entrance');
  });
});

describe('rooms have references to their neighbors', function() {
  it('works for a two-room map', function() {
    var map = new Map({
      'A': {'entrance': 'south', 'west': 'B'},
      'B': {}
    });

    expect(map.rooms.A.west).toBe(map.rooms.B);
  });
});
