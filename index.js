/* jshint node:true */
'use strict';

var _ = require('lodash');

var Map = function(layout) {
  this.rooms = {};
  this.entrance = null;
  _.forEach(layout, function(properties, name) {
    var room = new Room(name, properties);
    if (properties.entrance !== undefined) {
      this.entrance = room;
    }
    this.rooms[name] = room;
  }.bind(this));
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
