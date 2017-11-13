const Koa = require('koa')
const app = new Koa()
const server = require('koa-static')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const fs = require('fs')
const path = require('path')
app.use(bodyParser())
app.use(router.routes())

// router.get('/', async (ctx, next) => {
//   ctx.response.body =
//      '<h1>Index</h1> <form action="/login" method="post"> ' +
//       '<p>Name: <input name="name"></p>' +
//       ' <p>Password: <input name="password" type="password"></p> ' +
//       '<p><input type="submit" value="Submit"></p>' +
//       ' </form>' +
//       `<a href='/file'>file</a>`
// })
// app.use(server('.', {extensions: ['pdf', 'js', 'html']}))
router.get('/pdffile', (ctx, next) => {
  console.log('pdf in')
  ctx.header = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/pdf'
  }
  ctx.response.type = 'pdf'
  ctx.body = fs.createReadStream('./preview.pdf')
  // ctx.body = Buffer.from(ctx.response.body).toString('base64')
  console.log(ctx)
  // rs.pipe(ctx.response)
})
router.post('/login', async (ctx, next) => {
  let name = ctx.request.body.name || ''
  let password = ctx.request.body.password || ''

  console.log(ctx.request)
  if (name === 'koa' && password === '12345') {
    ctx.body = 'Success'
  } else {
    ctx.body = 'Login error'
  }
})
app.use(function * () {
  this.body = 'Hello World'
})

app.listen(9999)
