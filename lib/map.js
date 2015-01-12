'use strict';

var components = require('./components');

var min = function(value, possible) {
  return (value === undefined || possible < value) ? possible : value;
};

var max = function(value, possible) {
  return (value === undefined || possible > value) ? possible : value;
};

var copyPoint = function(point) {
  return { x: point.x, y: point.y };
};

var createGrid = function(game) {

  // create room lookup table
  var lookup = {};
  game.rooms.forEach(function(room) {
    lookup[room.name] = room;
  });

  // always expect an A room and start that at 0,0
  lookup.A.location = { x: 0, y: 0 };

  game.rooms.forEach(function(room) {
    if (!room.location) {
      var north = lookup[room.north];
      var south = lookup[room.south];
      var east = lookup[room.east];
      var west = lookup[room.west];

      if (north && north.location) {
        room.location = copyPoint(north.location);
        room.location.y -= 1;
      }
      else if (south && south.location) {
        room.location = copyPoint(south.location);
        room.location.y += 1;
      }
      else if (east && east.location) {
        room.location = copyPoint(east.location);
        room.location.x -= 1;
      }
      else if (west && west.location) {
        room.location = copyPoint(west.location);
        room.location.x += 1;
      }
    }
  });

  var grid = {
    min: { x: undefined, y: undefined },
    max: { x: undefined, y: undefined },
    cells: []
  };
  game.rooms.forEach(function(room) {
    grid.min.x = min(grid.min.x, room.location.x);
    grid.min.y = min(grid.min.y, room.location.y);
    grid.max.x = max(grid.max.x, room.location.x);
    grid.max.y = max(grid.max.y, room.location.y);

    grid.cells[room.location.x] = grid.cells[room.location.x] || [];
    grid.cells[room.location.x][room.location.y] = room;
  });

  return grid;
};

module.exports = function(game) {
  game.rooms.forEach(function(room) {
    room.drawing = components.createRoom(room);
  });

  var grid = createGrid(game);
  var rows = [];
  for (var y = grid.min.y; y <= grid.max.y; y += 1) {
    var row = [];
    for (var x = grid.min.x; x <= grid.max.x; x += 1) {
      var room = grid.cells[x][y];
      row.push(room ? room.drawing : components.emptyRoom);
    }
    rows.unshift(row);
  }

  return components.joinRows(rows.map(components.joinRooms));
};
