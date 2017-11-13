let _ = require('lodash')

let arr = new Array(10000).fill({a: 1})

console.time('o')
let result = _.uniq(arr)
console.log(result)
console.timeEnd('o')
console.timeEnd('o')

let set = new Set(arr)
console.time('x')
let end = [...set]
console.log(end)
console.timeEnd('x')
