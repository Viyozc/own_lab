const _ = require('lodash')
let arr = new Array(99999).fill(2)
_.reduce([1, 2], function (sum, n) {
  return sum + n
}, 0)
// => 3

_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
  (result[value] || (result[value] = [])).push(key)
  return result
}, {})

// console.time('ss')
// let end = _.reduce(arr, (result, val) => {
//   result.push({val})
//   return result
// }, [])
// console.timeEnd('ss')

// console.time('xxxx')
// let out = []
// arr.map(val => out.push({val}))
// console.timeEnd('xxxx')

console.time('ori')
arr.reduce(
  (a, b) => {
    // return a.push(b)
    return [...a, b]
  },
[])
console.timeEnd('ori')
// => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)
