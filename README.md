check if value is a bigint

```js
var isBigint = require('@is-(unknown)/is-bigint')
var assert = require('assert-fn')
assert(!isBigInt(function () {}))
assert(!isBigInt(null))
assert(!isBigInt('definitely not a bigint'))
assert(!isBigInt(1n)) // bigint objects that aren't bigint primitives aren't bigints

assert(isBigInt(1n))
```