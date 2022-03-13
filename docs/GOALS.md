Should be able to write files in different formats:

It should be possible to write your entire application in Weblang. This lib could be included in Waveorb. Waveorb would also need support for Weblang actions and plugins. Weblang plugins would be included as extensions to the Weblang runner.

**Layouts**

* Weblang
* HTML (mustached)
* JS (function)

**Pages**

* Weblang
* HTML (mustached)
* Markdown (mustached)
* JS (function)

**CSS**

* CSS
* SCSS
* Weblang

CSS can be scoped?

**Bundles**

CSS and JS should bundle through a @bundle extension

**Structure**

- Layouts
- Pages
- Views
- Elements?
  - Meant for design system elements like buttons and inputs (with scoped styles)
- Styles
- Scripts
- Images?

**TODO**

- Create a Weblang to CSS lib (weblang-css)
- Create a Weblang to HTML lib (weblang-html)
- Find an automatic way of doing scoped styles
  - Just do <style scoped> and move styles to style attribute?
    - Slow, but maybe acceptable (easy and solid)
  - Should probably be added to bundle if we want speed
