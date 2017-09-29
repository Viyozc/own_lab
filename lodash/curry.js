let _ = require('lodash')

/*
var abc = function (a, b, c) {
  return [a, b, c]
}

var curried = _.curry(abc)

console.log(curried(1)(2)(3))
// => [1, 2, 3]

console.log(curried(1, 2)(3))
// => [1, 2, 3]

console.log(curried(1, 2, 3))
// => [1, 2, 3]

// Curried with placeholders.
// console.log(curried(1)(_, 3)(2))
// => [1, 2, 3]

*/

let x = (b, c, d, e) => b * c * d * e
let y = b => c => d => e => b * c * d * e

x(2, 3, 4, 5)
y(2)(3)(4)(5)

console.log(x(2, 3, 4, 5))
console.log(y(2)(3)(4)(5))

function curry (fn) {
  return function curried () {
    var args = [].slice.call(arguments)
    return args.length >= fn.length
    ? fn.apply(null, args)
    : function () {
      var rest = [].slice.call(arguments)
      return curried.apply(null, args.concat(rest))
    }
  }
}
