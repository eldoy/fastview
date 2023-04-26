Write files in YAML (Weblang). Allows for duplicate key names.

Support div.class#id syntax.

Write it so you can override and add. By default there are no overrides.

We can make an override for waveorb so that:

```yml
form:
  action: /hello
  field: name
```

becomes

```html
<form action="/hello">
  <p>
    <label for="name">Name</label>
    <input type="text" id="name" oninput="clearErrors">
    <em class="name-errors"></em>
  </p>
  <p>
    <button onclick="(async function(btn){
      btn.disabled = true
      var values = serialize(btn.form)
      var result = await api(btn.form.action, { values })
      if (!showErrors(result)) {
        cookie('flash', 'Saved')
        goBack()
      }
      btn.disabled = false
    }(this))">
  </p>
</form>
```

We want a unique developer flow:

```
button:
  onclick: handleSave
```

get a message if handleSave isn't defined, or even better, create the file:

```js
module.exports = async function handleSave(button) {
  console.log('Implement me')
}
```

We want the runner window to tell you what to fix all the time. Can also include valid HTML messages and optimalizations, with live performance score (lighthouse) in the status bar. Make it fun to program!


### Custom editor or VSCodium plugin

With our own editor, we could double click on "handleSave" and jump straight to the file (function).


### Transform flow

YML > Weblang > JSON > Mustache > Javascript > HTML

Do we need some kind of Brain matter for YAML?

It will be possible to "compile" the templates, at least until Mustache? Or further?

Should we measure speed? How slow is YAML actually?
