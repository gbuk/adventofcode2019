var c = require("./crossedwires");
var t = require("../testfunctions")

t.assertEquals(c.parseWire("U1"), [{ start: { x:0, y:0}, end: {x:0, y:1}, running_length:1 }]);
t.assertEquals(c.parseWire("D1"), [{ start: { x:0, y:0}, end: {x:0, y:-1}, running_length:1}]);
t.assertEquals(c.parseWire("L1"), [{ start: { x:0, y:0}, end: {x:-1, y:0}, running_length:1}]);
t.assertEquals(c.parseWire("R1"), [{ start: { x:0, y:0}, end: {x:1, y:0}, running_length:1}]);
t.assertEquals(c.parseWire("R13"), [{ start: { x:0, y:0}, end: {x:13, y:0}, running_length:13}]);

t.assertEquals(c.parseWire("R3,U5"), [{ start: { x:0, y:0}, end: {x:3, y:0}, running_length:3}, { start: { x:3, y:0}, end: {x:3, y:5}, running_length:8}]);
t.assertEquals(c.parseWire("L3,D5"), [{ start: { x:0, y:0}, end: {x:-3, y:0}, running_length:3}, { start: { x:-3, y:0}, end: {x:-3, y:-5}, running_length:8}]);
t.assertEquals(c.parseWire("R3,U5,L2,D1,R3"), [{ start: { x:0, y:0}, end: {x:3, y:0}, running_length:3}, { start: { x:3, y:0}, end: {x:3, y:5}, running_length:8}, { start: { x:3, y:5}, end: {x:1, y:5}, running_length:10}, { start: { x:1, y:5}, end: {x:1, y:4}, running_length:11}, { start: { x:1, y:4}, end: {x:4, y:4}, running_length:14}]);

t.assertEquals(
  c.findIntersections([{start:{x:1,y:1}, end:{x:3,y:1}, running_length:2}], [{start:{x:2,y:0}, end:{x:2,y:4}, running_length:2}]),
  [
    {point:{x:2,y:1}, line1:{start:{x:2,y:0}, end:{x:2,y:4}, running_length:4}, line2:{start:{x:1,y:1}, end:{x:3,y:1}, running_length:2}, manhattanDistance:3, wireLength:0}
  ]);
t.assertEquals(
  c.findIntersections([{ start: { x:1, y:1}, end: {x:3, y:1}, running_length:2}, { start: {x:3, y:2}, end: {x:0, y:2}, running_length:4}],[{ start: { x:2, y:0}, end: {x:2, y:4}, running_length:4}]),
  [
    {point:{x:2,y:1}, line1:{start:{x:2,y:0}, end:{x:2,y:4}, running_length:4}, line2:{start:{x:1,y:1}, end:{x:3,y:1}, running_length:2}, manhattanDistance:3, wireLength:8},
    {point:{x:2,y:2}, line1:{start:{x:2,y:0}, end:{x:2,y:4}, running_length:4}, line2:{start:{x:3,y:2}, end:{x:0,y:2}, running_length:4}, manhattanDistance:4, wireLength:4}
  ]);

t.assertEquals(c.closestIntersectionByManhattanDistance("R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83"), 159);
t.assertEquals(c.closestIntersectionByManhattanDistance("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7"), 135);

t.assertEquals(c.closestIntersectionByWireLength("R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83"), 610);
t.assertEquals(c.closestIntersectionByWireLength("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7"), 410);


t.printTestsStats();
