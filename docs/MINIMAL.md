# What fastview must be

A minimal collection of global Javascript functions and CSS to build HTML with:

### Standard HTML on steroids?

- html
- head
- body
- nav
- header
- footer
- main
- title
- meta
- div
- span
- img
- form
- input
- fieldset
- select
- button
- a
- label
- p
- h1..h6
- table
- tr
- td
- th
- thead
- tbody
- tfoot
- script

### Additional components:

- desc
- js
- css
- favicon
- card
- field
- checkbox
- radio
- upload
- modal
- dialog
- list
- link

### App functions

- haka functions
- showErrors
- setActiveLink
- clearErrors
- save
- goBack
- navCount
- clickOutsideMenu

Includes default attributes, automatic imports, should be isomorphic.


### Usage alternative 1

Pure Javascript

```js
html({ lang: 'en', [
  body([
    main([
      form({ action: '/hello' }, [
        field({ name: 'email' }),
        field({ name: 'description' })
      ])
    ])
  ])
]})
```

### Usage alternative 2

Template strings

```md
<html>
  <body>
    <main>
      ${form({ action: '/hello' }, [
        field({ name: 'email' }),
        field({ name: 'description' })
      ])}
    </main>
  </body>
</html>
```

### Usage alternative 3

Template functions

```md
<html>
  <body>
    <main>
      ${html`
        <form action="hello">
          <field name="email">
          <field name="description">
        </form>
      `}
    </main>
  </body>
</html>
```