const express = require('express')
const bundle = require('../dist/vue-ssr-server-bundle.json')
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  runInNewContext: false,
  template: require('fs').readFileSync('./index.template.html', 'UTF-8')
})
const app = express()
app.use('/dist', express.static('../dist'))
app.get('*', (req, res) => {
  const context = { url: req.url , title: "hello" , meta: "asdf" }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        console.log(err)
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })

})

app.listen(8080)