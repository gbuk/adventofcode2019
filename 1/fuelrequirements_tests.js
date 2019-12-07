var fr = require("./fuelrequirements");
var t = require("../testfunctions")

t.assertEquals(fr.calculateFuelRequirements(2),       0);
t.assertEquals(fr.calculateFuelRequirements(12),      2);
t.assertEquals(fr.calculateFuelRequirements(14),      2);
t.assertEquals(fr.calculateFuelRequirements(1969),    654);
t.assertEquals(fr.calculateFuelRequirements(100756),  33583);

t.assertEquals(fr.calcultateModulesFuelRequirement([12]),                   2);
t.assertEquals(fr.calcultateModulesFuelRequirement([12, 14]),               (2 + 2));
t.assertEquals(fr.calcultateModulesFuelRequirement([12, 14, 1969]),         (2 + 2 + 654));
t.assertEquals(fr.calcultateModulesFuelRequirement([12, 14, 1969, 100756]), (2 + 2 + 654 + 33583));

t.assertEquals(fr.calculateFuelRequirementsRecursive(14),     2);
t.assertEquals(fr.calculateFuelRequirementsRecursive(1969),    966);
t.assertEquals(fr.calculateFuelRequirementsRecursive(100756), 50346);

t.assertEquals(fr.calcultateModulesFuelRequirementRecursive([14]),              2);
t.assertEquals(fr.calcultateModulesFuelRequirementRecursive([1969]),             966);
t.assertEquals(fr.calcultateModulesFuelRequirementRecursive([100756]),          50346);
t.assertEquals(fr.calcultateModulesFuelRequirementRecursive([14, 1969, 100756]), (2 + 966 + 50346));

t.printTestsStats();
