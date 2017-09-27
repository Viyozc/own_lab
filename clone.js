let _ = require('lodash')
var x = {}
for (var i = 0; i < 10000; i++) {
  x[i] = {}
  for (var j = 0; j < 5000; j++) {
    x[i][j] = Math.random()
  }
}

var start = Date.now()
console.log(start)
var y = _.cloneDeep(x)
console.log(Date.now() - start)
