const _ = require('lodash')
const loader = require('conficurse')
const sirloin = require('sirloin')
const mustache = require('mustache')

const app = loader.load('app')

console.log(app)

const http = sirloin({ port: 9000 })

http.get('*', async function(req, res) {
  res.setHeader('Content-Type', 'text/html')
  console.log(req.pathname)

  let path = req.pathname
  if (path.endsWith('/')) path += 'index'
  path = path.slice(1).replace(/\//g, '.')

  const page = _.get(app.pages, path)

  console.log(page)

  if (!page) {
    res.statusCode = 404
    return 'not found'
  }

  page.content = ''

  for (const v of page.views) {
    const view = app.views[v]
    if (view) {
      page.content += mustache.render(view, page.data)
    }
  }

  const layout = app.layouts[page.layout || 'default']
  const html = mustache.render(layout, page)

  return html
})