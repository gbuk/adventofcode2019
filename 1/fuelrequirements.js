function calculateFuelRequirements(mass) {
    var res = Math.floor(mass / 3) - 2;
    return res > 0 ? res : 0;
}

function calculateFuelRequirementsRecursive(mass) {
  var totalFuelRequirement = 0;
  var fuelRequirement = calculateFuelRequirements(mass);
  while (fuelRequirement > 0) {
    totalFuelRequirement += fuelRequirement;
    fuelRequirement = calculateFuelRequirements(fuelRequirement);
  }
  return totalFuelRequirement;
}

function calcultateModulesFuelRequirement(masses) {
  return masses
    .map( x => calculateFuelRequirements(x))
    .reduce((acc, val) => (acc + val))
  ;
}

function calcultateModulesFuelRequirementRecursive(masses) {
  return masses
    .map( x => calculateFuelRequirementsRecursive(x))
    .reduce((acc, val) => (acc + val))
  ;
}

module.exports.calculateFuelRequirements = calculateFuelRequirements;
module.exports.calcultateModulesFuelRequirement = calcultateModulesFuelRequirement;
module.exports.calcultateModulesFuelRequirementRecursive = calcultateModulesFuelRequirementRecursive;
module.exports.calculateFuelRequirementsRecursive = calculateFuelRequirementsRecursive;
