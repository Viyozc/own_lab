function partial (fn) {
  var args = [].slice.call(arguments, 1)
  return function () {
    var newArgs = args.concat([].slice.call(arguments))
    return fn.apply(this, newArgs)
  }
};
function add (a, b) {
  return a + b + this.value
}
var addOne = partial(add, 1)

var value = 1
var obj = {
  value: 2,
  addOne: addOne
}
obj.addOne(2)
