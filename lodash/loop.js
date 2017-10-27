
  // Populate the base array
  var arr = new Array(9999999).fill(123)

  function someFn (ix) {
    return ix * 5 + 1 / 3 * 8
  }

  console.time('for')
  for (let i = 0; i < arr.length; i++) {
    someFn(arr[i])
  }
  console.timeEnd('for')

  console.time('for,cache')
  for (let i = 0, len = arr.length; i < len; i++) {
    someFn(arr[i])
  }
  console.timeEnd('for,cache')

  console.time('while')
  {
    let i = -1
    let len = arr.length
    while (++i < len) {
      someFn(arr[i])
    }
  }
  console.timeEnd('while')

  console.time('while2')
  {
    let i = 0
    let item
    while ((item = arr[i++]) !== undefined) {
      someFn(item)
    }
  }
  console.timeEnd('while2')

  console.time('while3')
  {
    let l = arr.length
    while (l--) {
      someFn(arr[l])
    }
  }
  console.timeEnd('while3')

  console.time('map')
  arr.map(function (item) {
    someFn(item)
  })
  console.timeEnd('map')

  console.time('foreach')
  arr.forEach(function (item) {
    someFn(item)
  })
  console.timeEnd('foreach')
