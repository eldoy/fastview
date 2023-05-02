function form(str) {
  str = str.replace(/<form>/g, function (tag) {
    return /* HTML */`<form onsubmit="return false">`
  })
  return str.trim()
}

function field(str) {
  str = str.replace(/<field name="(.+?)">/g, function (tag, name) {
    var title = name[0].toUpperCase() + name.slice(1)
    return /* HTML */`
<p>
  <label for="${name}">${title}</label>
  <input id="${name}" type="text" name="${name}">
  <em class="${name}-errors"></em>
</p>`
  })
  return str.trim()
}

function submit(str) {
  str = str.replace(/<submit action="(.+?)">(.*?)<\/submit>/g, function (tag, action, text) {
    return /* HTML */`
<button onclick="(function(btn){
  btn.disabled = true
  var values = serialize(btn.form)
  var result = api('${action}', { values })
  if (!showErrors(result)) {
    cookie('flash', 'Save successful')
    goBack()
  }
  btn.disabled = false
}(this))">${text}</button>`
  })
  return str.trim()
}

module.exports = { form, field, submit }
