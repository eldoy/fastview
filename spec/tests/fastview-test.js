const fastview = require('../../index.js')
const h = fastview()

it('should render html', async function ({ t }) {
  const result = h('hello')
  t.ok(result == 'hello')
})

it('should expand <form>', async function ({ t }) {
  const result = h('<form>')
  t.ok(result == '<form onsubmit="return false">')
})

it('should expand <field>', async function ({ t }) {
  const result = h('<field name="email">')
  t.ok(result.startsWith('<p>'))
})

it('should expand <submit>', async function ({ t }) {
  const result = h('<submit action="/save">Save</submit>')
  t.ok(result.startsWith('<button'))
})
