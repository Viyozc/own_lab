const _ = require('lodash')
const $ = require('underscore')
// let a = [1, 23, 3, {a: 2}, {a: 2}, {a: 3}, 4]
// _.without(a, {a: 2})
// console.log(_.xor([2, 1], [2, 3]))
// let b = a
// console.log(_.groupBy(['one', 'two', 'three'], 'length'))

var users = [
  { 'user': 'fred', 'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred', 'age': 40 },
  { 'user': 'barney', 'age': 34 }
]

// _.sortBy(users, function (o) { return o.user })
// console.log(users)

// let other = {user: 'fred', age: 44, name: {first: 'first'}}
// let b = _.assign({}, other, {name: {first: 'third'}})
// let b = _.cloneDeep(other)
// b.name.first = 'second'
// console.log(other)

let arr = new Array(100000)
let demo = {}
demo.a = {}
demo.a.b = {}
demo.a.b.c = {}
demo.a.b.c.d = {}
demo.a.b.c.d.e = {}
demo.a.b.c.d.e.f = {g: 'text'}
arr.fill(demo)
console.time('lodash')
let b = _.cloneDeep(arr)
console.log(b)
console.timeEnd('lodash')

console.time('us')
let c = $.clone(arr)
console.log(c)
console.timeEnd('us')
c[0].a.b.c = 122
console.log(arr[0] === b[0])
