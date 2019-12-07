var fs = require("fs");
var c = require("./crossedwires");

function readInput() {
  var data = fs.readFileSync('input.txt');
  return data.toString().trim();
}

var input = readInput();
console.log(c.closestIntersectionByManhattanDistance(input));
console.log(c.closestIntersectionByWireLength(input));
