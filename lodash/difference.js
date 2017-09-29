let _ = require('lodash')

let obj = {x: 1}

let arr = [1, 2, null, undefined, NaN, {a: 1}, obj]

let a = _.difference(arr, [obj])

console.log(a)
