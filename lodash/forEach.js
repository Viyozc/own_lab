const _ = require('lodash')
let arr = new Array(99999).fill(9)
let timer = Date.now()
console.time('o')
_(arr).forEach(value => value++)
arr.forEach(v => v++)
console.timeEnd('o')

console.time('l')
_(arr).forEach(value => value++)
console.log('lodash', Date.now() - timer)
console.timeEnd('l')

_.forEach({ 'a': 1, 'b': 2 }, function (value, key) {
  console.log(key)
})
// => Logs 'a' then 'b' (iteration order is not guaranteed).
