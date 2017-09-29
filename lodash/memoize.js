function memoize (f) {
  var cache = {}
  return function () {
    var key = arguments.length + Array.prototype.join.call(arguments, ',')
    if (key in cache) {
      return cache[key]
    } else return cache[key] = f.apply(this, arguments)
  }
}

// var add = function (a, b, c) {
//   return a + b + c
// }

// var memoizedAdd = memoize(add)

// console.time('use memorize')
// for (var i = 0; i < 100000; i++) {
//   memoizedAdd(1, 2, 3)
// }
// console.timeEnd('use memorize')

// console.time('not use memorize')
// for (let i = 0; i < 100000; i++) {
//   add(1, 2, 3)
// }
// console.timeEnd('not use memorize')

/**
 * fibonacci without
 */

// var count = 0
// var fibonacci = function (n) {
//   count++
//   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
// }
// for (var i = 0; i <= 50; i++) {
//   fibonacci(i)
// }

// console.log(count) // 453

/**
 * fibonacci with
 */

var count = 0
var fibonacci = function (n) {
  count++
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

fibonacci = memoize(fibonacci)

for (var i = 0; i <= 10; i++) {
  fibonacci(i)
}

console.log(count) // 12
