## Making svg sprites with gulp
Just a simple demo gulp task that makes an optimised svg sprite, using symbols, to be injected inline into the document. To get started, just clone the repository and do `npm install`. If you're using `express`, you can simply read the contents of the file:

```javascript
var app = require("express")();
var fs = require("fs");

// Set contents of the sprite as a local variable in the template.
app.locals.svgSprite = fs.readFileSync("public/sprite.svg");
```

Symbols could be used like so:
```html
<svg><use xlink:href="#svg-plus"></use></svg>
```
Where `#svg-plus` is the id of the symbol. You can now manipulate/animate your SVGs just with CSS.
