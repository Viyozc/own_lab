
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

const db = low(adapter)

// Set some defaults
db.defaults({ posts: [], user: {} })
  .write()

// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome' })
  .write()
let table = db.get('posts')
let start = Date.now()
for (let i = 0; i < 10000; i++) {
  table.push({id: i, title: `test demo ${i}`}).write()
}
console.log('time is', Date.now() - start)
// Set a user using Lodash shorthand syntax
db.set('user.name', 'typicode')
  .write()
db.setState({}).write()
console.log(JSON.stringify(db.getState()))
