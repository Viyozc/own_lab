let $ = require('jquery')
let _ = require('lodash')

// let arr = new Int16Array(5)
// let obj = { a: arr }

// arr[0] = 5
// arr[1] = 6

// 1. jQuery
// let obj2 = $.extend(true, {}, obj)
// console.log(obj2.a)                            // [5, 6, 0, 0, 0]
// Object.prototype.toString.call(obj2)           // [object Int16Array]
// obj2.a[0] = 100
// console.log(obj)                               // [100, 6, 0, 0, 0]

// 此处jQuery不能正确处理Int16Array的深复制！！！

// 2. lodash
// obj2 = _.cloneDeep(obj)
// console.log(obj2.a)                            // [5, 6, 0, 0, 0]
// Object.prototype.toString.call(obj2)           // [object Int16Array]
// obj2.a[0] = 100
// console.log(obj)

function clone (objToBeCloned) {
  // Basis.
  if (!(objToBeCloned instanceof Object)) {
    return objToBeCloned
  }

  var objectClone = {}

  // Filter out special objects.
  // var Constructor = objToBeCloned.constructor
  // switch (Constructor) {
  //   case RegExp:
  //     objectClone = new Constructor(objToBeCloned)
  //     break
  //   case Date:
  //     objectClone = new Constructor(objToBeCloned.getTime())
  //     break
  //   default:
  //     objectClone = new Constructor()
  // }

  for (let prop in objToBeCloned) {
    objectClone[prop] = clone(objToBeCloned[prop])
  }

  return objectClone
}

let arr = new Array(99999).fill({a: {b: 1}})

console.time('xx')
let out = clone(arr)
console.timeEnd('xx')

console.time('aa')
let res = _.clone(arr)
console.timeEnd('aa')

console.time('bb')
let end = _.cloneDeep(arr)
console.timeEnd('bb')
