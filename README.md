# FastView

Fast Javascript front end templates.

This library adds extra HTML tags and attributes to speed up web development.

Made for the [Waveorb Web Application Development Framework.](https://waveorb.com)

### Install

```sh
npm i fastview
```

### Usage

```js
var fastview = require('fastview')
var h = fastview()

// With options, add your own components
var components = {
  image: function(str) {
    str = str.replace(/<image/g, function (tag) {
      return /* HTML */`<img loading="lazy"`
    })
    return str.trim()
  }
}
var h = fastview({ components })
```

Then, using the example above, write this in your HTML:

```js
h`<image src="/image.png">`
```

and it's translated into this:

```html
<img loading="lazy" src="/image.png">
```

### Components

Check out `/lib/components.js` to see the built in components.

MIT Licensed. Enjoy!
