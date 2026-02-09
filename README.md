check if value is a bigint primitive

```js
var isBigInt = require('@is-(unknown)/is-bigint')
var assert = require('assert-fn')
assert(!isBigInt(function () {}))
assert(!isBigInt(null))
assert(!isBigInt('definitely not a bigint'))
assert(!isBigint(Object(1n))) // no nonprimitive bigints are allowed

assert(isBigInt(1n))
```