var isBigint = require("is-bigint")
var hasBigints = require("has-bigints")()
var falseValue = require("false-value")
var and = require("es-logical-and-operator")
var not = require("es-logical-not-operator")
var isObject = require("@is-(unknown)/is-object")

if (hasBigints) {
  module.exports = function isBigIntPrimitive(value) {
    return and(isBigint(value), not(isObject(value)))
  }
} else {
  module.exports = falseValue
}
