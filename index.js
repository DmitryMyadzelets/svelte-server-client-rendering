const
  http = require('http'),
  url = require('url'),
  fs = require('fs'),
  path = require('path')

// See https://svelte.dev/docs#svelte_register
// and https://svelte.dev/docs#Server-side_component_API
require('svelte/register')
const Server = require('./Server.svelte').default

const config = {
  port: 5000,
  publicDir: 'public'
}

http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true)

  switch (pathname) {
    case '/':
      const { html } = Server.render()
      res.setHeader('Content-Type', 'text/html')
      res.write(html)
      res.end()
      break
    default:
      const fname = path.resolve(__dirname, config.publicDir, pathname.slice(1))
      fs.createReadStream(fname)
        .on('error', ingore => {
          res.statusCode = 404
          res.end('404 NOT FOUND')
        })
        .pipe(res)
  }

}).listen(config.port, function () {
  console.log(`Go to http://127.0.0.1:${this.address().port}`)
})

