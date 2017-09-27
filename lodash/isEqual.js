let _ = require('lodash')

let x = {a: 1, b: {c: 2}}
let y = {a: 1, b: {c: 2}}

console.log(_.isEqual(x, y))
