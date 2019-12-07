function parseWire(wire_data_str) {
  var lengths_offsets = wire_data_str.split(",").map(length_str => {
    var x_offset = 0;
    var y_offset = 0;
    var direction = length_str.substring(0,1);
    var move_value = parseInt(length_str.substring(1));
    if (direction == 'U') {
      y_offset = move_value;
    } else if (direction == 'D') {
      y_offset = -move_value;
    } else if (direction == 'L') {
      x_offset = -move_value;
    } else if (direction == 'R') {
      x_offset = move_value;
    }
    return [x_offset, y_offset];
  });

  var points = [{ x:0, y:0}];
  var x_pos = 0;
  var y_pos = 0;
  for(var i=0; i<lengths_offsets.length; i++) {
    x_pos += lengths_offsets[i][0];
    y_pos += lengths_offsets[i][1];
    points[i+1] = { x:x_pos, y:y_pos};
  }

  var lines = [];
  var running_length = 0;
  for(var i=0; i<points.length-1; i++) {
    var start = points[i];
    var end = points[i+1];
    running_length += Math.abs(start.x - end.x) + Math.abs(start.y - end.y);
    lines[i] = { start:start, end:end, running_length: running_length};
  }
  return lines;
}

function mapWire(wire_data_str) {
  var lines = parseWire(wire_data_str);

  var horizontal_vertices = [];
  var vertical_vertices = [];

  for(var i=0; i<lines.length; i++) {
    var line = lines[i];
    if (line.start.x == line.end.x) {
      vertical_vertices.push(line);
    }
    if (line.start.y == line.end.y) {
      horizontal_vertices.push(line);
    }
  }

  return {
    wire_path: lines,
    horizontal_vertices: horizontal_vertices,
    vertical_vertices: vertical_vertices,
  };
}

function abs(x) {
  return Math.abs(x);
}

function between(a, b, c) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  return c >= min && c <= max;
}

// distance from 0,0
function manhattanDistance(point) {
  return Math.abs(point.x) + Math.abs(point.y);
}

function wireLength(point, line1, line2) {
  return line1.running_length + line2.running_length - abs(line1.end.x - point.x) - abs(line2.end.x - point.x) - abs(line1.end.y - point.y) - abs(line2.end.y - point.y);
}

function createIntersection(line1, line2) {
  var point = { x: line1.start.x, y: line2.start.y };
  var dist = manhattanDistance(point);
  var len = wireLength(point, line1, line2);
  return { point: point, line1:line1, line2:line2, manhattanDistance:dist, wireLength:len};
}

// this function assumes lines1 and lines2 are perpendicular
function findIntersections(lines1, lines2) {
  var intersections = [];
  for(var i=0; i<lines1.length; i++) {
    var line1 = lines1[i];
    for(var j=0; j<lines2.length; j++) {
      var line2 = lines2[j];
      if (
           between(line1.start.x, line1.end.x, line2.start.x)
        && between(line2.start.y, line2.end.y, line1.start.y)
      ) {
        intersections.push(createIntersection(line2, line1));
      }
      if (
           between(line2.start.x, line2.end.x, line1.start.x)
        && between(line1.start.y, line1.end.y, line2.start.y)
      ) {
        intersections.push(createIntersection(line1, line2));
      }
    }
  }
  return intersections.filter(x => x.x != 0 || x.y != 0);
}

function allIntersections(wire1, wire2) {
  var intersections = findIntersections(wire1.vertical_vertices, wire2.horizontal_vertices);
  intersections = intersections.concat(findIntersections(wire1.horizontal_vertices, wire2.vertical_vertices));
  return intersections;
}

function closestIntesrectionBy(wires_str, selector) {
  var wires_str_array = wires_str.split("\n").map(x => x.trim());
  var wires = wires_str_array.map(x => mapWire(x));
  var intersections = allIntersections(wires[0], wires[1]);
  var closest = 0;
  for(var i=0; i<intersections.length;i++) {
    var intersection = intersections[i];
    if (intersection.point.x == 0 && intersection.point.y == 0) {
      continue;
    }
    var dist = selector(intersection);
    if (dist !=0 && (closest == 0 || closest > dist)) {
      closest = dist;
    }
  }
  return closest;

}

function closestIntersectionByManhattanDistance(wires_str) {
  return closestIntesrectionBy(wires_str, intersection => intersection.manhattanDistance);
}

function closestIntersectionByWireLength(wires_str) {
  return closestIntesrectionBy(wires_str, intersection => intersection.wireLength);
}

module.exports.closestIntersectionByManhattanDistance = closestIntersectionByManhattanDistance;
module.exports.closestIntersectionByWireLength = closestIntersectionByWireLength;
module.exports.mapWire = mapWire;
module.exports.parseWire = parseWire;
module.exports.findIntersections = findIntersections;
module.exports.manhattanDistance = manhattanDistance;
