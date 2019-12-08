var c = require("../2/computer");
var t = require("../testfunctions")

global.userInput = [1];
global.userScreen = [];
t.assertEquals(global.userInput, [1]);
c.compute("3,0,4,0,99");
t.assertEquals(global.userScreen, ["$ 1"]);
t.assertEquals(global.userInput, []);
//
t.assertEquals(c.compute("1101,100,-1,4,0"), "1101,100,-1,4,99");
//
global.userInput = [8];
global.userScreen = [];
c.compute("3,9,8,9,10,9,4,9,99,-1,8");
t.assertEquals(global.userScreen, ["$ 1"]);
//
global.userInput = [2];
global.userScreen = [];
c.compute("3,9,8,9,10,9,4,9,99,-1,8");
t.assertEquals(global.userScreen, ["$ 0"]);

global.userInput = [6];
global.userScreen = [];
c.compute("3,9,7,9,10,9,4,9,99,-1,8");
t.assertEquals(global.userScreen, ["$ 1"]);

global.userInput = [8];
global.userScreen = [];
c.compute("3,9,7,9,10,9,4,9,99,-1,8");
t.assertEquals(global.userScreen, ["$ 0"]);

global.userInput = [9];
global.userScreen = [];
c.compute("3,9,7,9,10,9,4,9,99,-1,8");
t.assertEquals(global.userScreen, ["$ 0"]);

global.userInput = [8];
global.userScreen = [];
c.compute("3,3,1108,-1,8,3,4,3,99");
t.assertEquals(global.userScreen, ["$ 1"]);

global.userInput = [9];
global.userScreen = [];
c.compute("3,3,1108,-1,8,3,4,3,99");
t.assertEquals(global.userScreen, ["$ 0"]);

global.userInput = [7];
global.userScreen = [];
c.compute("3,3,1107,-1,8,3,4,3,99");
t.assertEquals(global.userScreen, ["$ 1"]);
//
global.userInput = [9];
global.userScreen = [];
c.compute("3,3,1107,-1,8,3,4,3,99");
t.assertEquals(global.userScreen, ["$ 0"]);

global.userInput = [9];
global.userScreen = [];
c.compute("3,3,1107,-1,8,3,4,3,99");
t.assertEquals(global.userScreen, ["$ 0"]);

global.userInput = [0];
global.userScreen = [];
c.compute("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9");
t.assertEquals(global.userScreen, ["$ 0"]);

global.userInput = [9];
global.userScreen = [];
c.compute("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9");
t.assertEquals(global.userScreen, ["$ 1"]);

global.userInput = [0];
global.userScreen = [];
c.compute("3,3,1105,-1,9,1101,0,0,12,4,12,99,1");
t.assertEquals(global.userScreen, ["$ 0"]);

global.userInput = [9];
global.userScreen = [];
c.compute("3,3,1105,-1,9,1101,0,0,12,4,12,99,1");
t.assertEquals(global.userScreen, ["$ 1"]);


global.userInput = [7];
global.userScreen = [];
c.compute("3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,"
+ "1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,"
+ "999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99");
t.assertEquals(global.userScreen, ["$ 999"]);
//
global.userInput = [8];
global.userScreen = [];
c.compute("3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,"
+ "1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,"
+ "999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99");
t.assertEquals(global.userScreen, ["$ 1000"]);
//
global.userInput = [9];
global.userScreen = [];
c.compute("3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,"
+ "1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,"
+ "999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99");
t.assertEquals(global.userScreen, ["$ 1001"]);

t.printTestsStats();
