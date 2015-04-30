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

  it('applies bidirectionality', function() {
    var map = new Map({
      'A': {'entrance': 'south', 'west': 'B'},
      'B': {}
    });

    expect(map.rooms.B.east).toBe(map.rooms.A);
  });
});

describe('set locations on rooms', function() {
  it('sets the entrance to 0,0', function() {
    var map = new Map({ 'A': {'entrance': 'south'}});

    expect(map.rooms.A.location).toEqual({x: 0, y: 0});
  });

  it('sets other rooms relative to the entrance', function() {
    var map = new Map({
      'A': {
        'entrance': 'south',
        'north': 'B',
        'east': 'C',
        'south': 'D',
        'west': 'E',
      },
      'B': {},
      'C': {},
      'D': {},
      'E': {},
    });

    expect(map.rooms.B.location).toEqual({x: 0, y: 1});
    expect(map.rooms.C.location).toEqual({x: 1, y: 0});
    expect(map.rooms.D.location).toEqual({x: 0, y: -1});
    expect(map.rooms.E.location).toEqual({x: -1, y: 0});
  });
});
