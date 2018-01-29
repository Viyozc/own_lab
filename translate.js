let fs = require('fs')
const path  = require('path')
const wh = require('wh-cli')
console.log(dirname, path)

return
let url = './fed/routes.js'
let input = require(url).default

let dealUrl = (arr) => {
  return arr.map(item => {
    let out = {}
    out.url = item.path
    let str = item.getComponent.toString()
    let path = /containers.*('\))/.exec(str)[0]
    path = path.replace('containers/', '')
    path = path.replace('\')', '')
    out.path = path
    if (item.childRoutes) {
      out.child = dealUrl(item.childRoutes)
    }
    return out
  })
}

let result = dealUrl(input)
fs.writeFileSync('./temp.js', JSON.stringify(result))
