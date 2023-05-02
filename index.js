const h = require('htmlview')
const components = require('./lib/components.js')

module.exports = function (opt = {}) {
  opt.components = { ...components, ...opt.components }

  return function (str) {
    for (const name in opt.components) {
      const fn = opt.components[name]
      if (typeof fn == 'function') {
        str = fn(str)
      }
    }
    return h`${str}`
  }
}
