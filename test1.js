// console.time('xx')
// let a = new Array(1000000)
// // a.push({b: 1})
// for (let i = 0; i < 1000000; i++) {
//   a[i] = i
// }
// console.timeEnd('xx')

function pow (n) {
  if (n > 0) {
    return n + pow(n - 1)
  }
  return 1
}
console.time('xx')
console.log(pow(10000))
console.timeEnd('xx')
