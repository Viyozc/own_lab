let _ = require('lodash')

function clone (objToBeCloned) {
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

let total = 99999
let arr = new Array(total).fill({a: {b: 1}})
let obj = {}
for (let i = 0; i < total; i++) {
  obj[i] = {a: {b: 1}}
}

console.time('concat')
let concat = [].concat(arr)
console.timeEnd('concat')

console.time('json')
JSON.parse(JSON.stringify(arr))
console.timeEnd('json')

console.time('_cloneArr')
_.clone(arr)
console.timeEnd('_cloneArr')

console.time('_cloneObj')
_.clone(obj)
console.timeEnd('_cloneObj')

console.time('cloneArr')
clone(arr)
console.timeEnd('cloneArr')

console.time('_cloneDeepArr')
_.cloneDeep(arr)
console.timeEnd('_cloneDeepArr')

console.time('_cloneDeepObj')
_.cloneDeep(obj)
console.timeEnd('_cloneDeepObj')

console.time('_assign')
_.assign({}, obj)
console.timeEnd('_assign')

console.time('oAssign')
Object.assign({}, obj)
console.timeEnd('oAssign')
