var test = require("tape");
var isCoolNumber = require("./cool.js");

test("isCoolNumber accepts only cool numbers", function (t) {
  t.ok(isCoolNumber(42), "42 should be cool");
  t.end();
});
