let _ = require('lodash')
let a = [1, [2, [3, [4]], 5]]
let result = _(a).flatten().value()
// => [1, 2, [3, [4]], 5]

console.log(result)
