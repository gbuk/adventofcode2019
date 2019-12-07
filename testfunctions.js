var pass = 0;
var fail = 0;

function isObject(a) {
    return (!!a) && (a.constructor === Object);
};

function isArray(a) {
    return (!!a) && (a.constructor === Array);
};

function equals(x, y) {
  if (x == y) {
    return true;
  }
  if (isObject(x) && isObject(y)) {
    return equalsObjects(x, y);
  }

  if (isArray(x) && isArray(y)) {
    return equalsArrays(x, y);
  }

  return false;
}

function equalsArrays(a1, a2) {
  for(var i=0; i<a1.length; i++) {
    if (!equals(a1[i], a2[i])) {
      return false;
    }
  }
  for(var i=0; i<a2.length; i++) {
    if (!equals(a1[i], a2[i])) {
      return false;
    }
  }
  return true;
}

function equalsObjects(o1, o2) {
  var equ = true;
  Object.keys(o1).forEach(function(key) {
    if (!equals(o1[key], o2[key])) {
      equ = false;
    }
  });
  Object.keys(o2).forEach(function(key) {
    if (!equals(o1[key], o2[key])) {
      equ = false;
    }
  });
  return equ;
}

function assertEquals(actual, expected) {
  assertThat(actual, expected, "Equals");
}
function assertNotEquals(actual, expected) {
  assertThat(actual, expected, "NotEquals")
}
function assertThat(actual, expected, what) {
  if (
       (what == "Equals" && equals(actual, expected))
    || (what == "NotEquals" && !equals(actual, expected))
  ) {
    pass++;
  } else {
    fail++;
    console.log(what + " failed:\n  expected:");
    console.log(expected);
    console.log("  actual:");
    console.log(actual);
  }
}

function printTestsStats() {
  console.log("\n" + (pass+fail) + " tests - " + fail + " failures.\n");
}

module.exports.assertEquals = assertEquals;
module.exports.assertNotEquals = assertNotEquals;
module.exports.printTestsStats = printTestsStats;
