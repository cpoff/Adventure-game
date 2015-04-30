/* jshint node:true */
'use strict';

var _ = require('lodash');

var opposites = {
  'north': 'south',
  'east': 'west',
  'south': 'north',
  'west': 'east'
};

var Map = function(layout) {
  this.rooms = {};
  this.entrance = null;
  _.forEach(layout, function(properties, name) {
    var room = new Room(name, properties);
    if (properties.entrance !== undefined) {
      if (this.entrance !== null) {
        throw new Error('Maps must have exactly one entrance');
      }
      this.entrance = room;
    }
    this.rooms[name] = room;
  }.bind(this));

  if (this.entrance === null) {
    throw new Error('Maps must have exactly one entrance');
  }

  this.entrance.location = {x: 0, y: 0};

  _.forEach(this.rooms, function(room) {
    ['north', 'east', 'south', 'west'].forEach(function(direction) {
      if (typeof room[direction] === 'string') {
        room[direction] = this.rooms[room[direction]];
        // enforce bidirectionality: the room to the west
        // of my east must be me
        room[direction][opposites[direction]] = room;
      }
    }.bind(this));
  }.bind(this));

  var findLocation = function(room) {
    if (typeof room.location === 'object') {
      return;
    }

    if (room.north && room.north.location) {
      room.location = _.merge({}, room.north.location);
      room.location.y -= 1;
    } else if (room.east && room.east.location) {
      room.location = _.merge({}, room.east.location);
      room.location.x -= 1;
    } else if (room.south && room.south.location) {
      room.location = _.merge({}, room.south.location);
      room.location.y += 1;
    } else if (room.west && room.west.location) {
      room.location = _.merge({}, room.west.location);
      room.location.x += 1;
    }
  };

  while (_.any(this.rooms, function(room) {
    return room.location === undefined;
  })) {
    _.forEach(this.rooms, findLocation);
  }
};
Map.prototype = {
  draw: function() {
    return this.entrance.draw();
  }
};

var Room = function(name, properties) {
  this.name = name;
  _.merge(this, properties);
};
Room.prototype = {
  draw: function() {
    var top = this.entrance === "north" ?
      "+-- v --+" :
      "+-------+";

    var bottom = this.entrance === "south" ?
      "+-- ^ --+" :
      "+-------+";

    var pad = '|       |';
    var middle = '|   ' + this.name + '   |';

    if (this.entrance === 'west') {
      middle = '>' + middle.substr(1);
      pad = ' ' + pad.substr(1);
    } else if (this.entrance === 'east') {
      middle = middle.substr(0, pad.length - 1) + '<';
      pad = pad.substr(0, pad.length - 1) + ' ';
    }

    return [top, pad, middle, pad, bottom].join('\n');
  }
};

// module.exports = require('./lib/map');
module.exports = {
  Room: Room,
  Map: Map
};
