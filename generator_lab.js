let fun = function * () {
  console.log('start')
  yield console.log('stage 1')
  yield console.log('stage 2')
}

let test = fun()

test.next()
test.next()
test.next()
test.next()
console.log('end')
