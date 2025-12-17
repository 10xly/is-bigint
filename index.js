var TYPE = require('@extremejs/utils').TYPE
var hasBigints = require('has-bigints')()

if (hasBigints) {
  module.exports = function isBigint(value) {
    return typeof value === TYPE.BIGINT
  }
} else {
  module.exports = function isBigint(value) {
    return false && value
  }
}