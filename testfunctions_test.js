var t = require("./testfunctions")

t.assertEquals(1,1);
t.assertEquals([1],[1]);
t.assertEquals([1,2],[1,2]);
t.assertEquals({x:1}, {x:1});
t.assertEquals({x:1,y:2}, {x:1,y:2});
t.assertEquals([[1], {x:1}], [[1], {x:1}]);
t.assertNotEquals(1,2);
t.assertNotEquals([1],[2]);
t.assertNotEquals([1],[1,2]);
t.assertNotEquals([1,2],[1]);
t.assertNotEquals([1,2],[2,1]);
t.assertNotEquals({x:1}, {x:2});
t.assertNotEquals({x:1,y:2}, {x:2,y:3});
t.assertNotEquals({x:1}, {x:1,y:2});
t.assertNotEquals({x:1,y:2}, {x:1});
t.assertNotEquals([[1], {x:1}], [[1], {x:2}]);


t.printTestsStats();
