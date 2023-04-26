### HTML Expander

Add attributes automatically:

Write:

```html
<input id="email">
```

get:

```html
<input type="text" oninput="clearErrors()">
```

```html
<form action="/hello">
  <field>Name</field>
  <field>Email</field>
  <fieldset>
    Legend
    <checkbox>
    <checkbox>
  </fieldset>
  <submit>
</form>
```


```html
<form onsubmit="return false">
  ${$.app.views.components.field({})}
</form>
```

hmmm, not much to save there.

### XML XSLT Web components

Define a subset of HTML using only form elements, labels, images, headers and divs

```html
<form action="/hello">
  <field label="Name"></field>
  <field label="Name"></field>
</form>
```
