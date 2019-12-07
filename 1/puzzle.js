var fs = require("fs");
var fr = require("./fuelrequirements");

function readInput() {
  var data = fs.readFileSync('input.txt');
  var dataArray = data.toString().split("\n");
  dataArray = dataArray.map(x => x.trim()).filter(x => x != "");
  return dataArray;
}

var input = readInput();

var totalFuelRequirement = fr.calcultateModulesFuelRequirement(input);
console.log("total fuel requirement (modules + fuel): " + totalFuelRequirement);

var totalFuelRequirementRecursive = fr.calcultateModulesFuelRequirementRecursive(input);
console.log("total fuel requirement (modules + fuel + fuel for the fuel + fuel for the fuel for the...): " + totalFuelRequirementRecursive);
