var fs = require("fs");
var c = require("../2/computer");

function readInput() {
  var data = fs.readFileSync('input.txt');
  return data.toString().trim();
}

// TEST diagnostic program
global.userInput = [1];
global.userScreen = [];

c.compute(readInput());

console.log(global.userScreen);


// TEST thermal radiator controller
global.userInput = [5];
global.userScreen = [];

c.compute(readInput());

console.log(global.userScreen);
