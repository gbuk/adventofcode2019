var fs = require("fs");
var c = require("./computer");

function readInput() {
  var data = fs.readFileSync('input.txt');
  return data.toString().trim();
}

var input = readInput();
var memory = c.input(input);
memory[1]=12;
memory[2]=2;

console.log(c.input(c.compute(c.output(memory)))[0]);

//brute force finding correct input to get 19690720 output
var value = 0;
for(var x=0; x<100 && value != 19690720; x++) {
  for(var y=0; y<100 && value != 19690720; y++) {
    memory = c.input(input);
    memory[1]=x;
    memory[2]=y;
    value = c.input(c.compute(c.output(memory)))[0];
    if (value == 19690720) {
      console.log("solution: " + (x*100 + y));
    }
  }
}
