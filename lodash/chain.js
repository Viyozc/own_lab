const _ = require('lodash')

let data = [1, 2, 3]

let chain = _.chain(data)

/**
__actions__:Array(0) []
__chain__:true
__index__:0
__values__:undefined
__wrapped__:Array(3) [1, 2, 3]
__proto__:lodash {constructor: }
 */

var Container = function (x) {
  this.__value = x
}

Container.of = x => new Container(x)

// 试试看
Container.of(1)
// => Container(1)

Container.of('abcd')
// => Container('abcd')

// 我们调用 Container.of 把东西装进容器里之后，由于这一层外壳的阻挡，
// 普通的函数就对他们不再起作用了，所以我们需要加一个接口来让外部的函数
// 也能作用到容器里面的值：

Container.prototype.map = function (f) {
  return Container.of(f(this.__value))
}

// 我们可以这样使用它：

Container.of(3)
    .map(x => x + 1)                // => Container(4)
    .map(x => 'Result is ' + x)

// 举个例子，我们现在为 map 函数添加一个检查空值的特性，这个新的容器我们称之为 Maybe
var Maybe = function (x) {
  this.__value = x
}

Maybe.of = function (x) {
  return new Maybe(x)
}

Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
}

Maybe.prototype.isNothing = function () {
  return (this.__value === null || this.__value === undefined)
}

// 试试看
var add = _.curry(_.add)

Maybe.of({name: 'Stark'})
    .map(_.prop('age'))
    .map(add(10))
// => Maybe(null)

Maybe.of({name: 'Stark', age: 21})
    .map(_.prop('age'))
    .map(add(10))
// => Maybe(31)

/**
 * Error
 */

try {
  doSomething()
} catch (e) {
  // 错误处理
}

doSomething()
.then(async1)
.then(async2)
.catch(e => console.log(e))
