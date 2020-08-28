# SVGIcon
Web component handling Icon System with SVG Sprites

## Overview
This library provides simple way using icons in svg sprites, just write
```HTML
<svg-icon use="path/file.svg#icon_name"></svg-icon>
```
into your HTTML file and or
```HTML
<script>SVGIcon.setAlias("icon", "path/file.svg#")</script>
<svg-icon use="icon-icon_name"></svg-icon>
```
Obviously the [Custom Elements (V1)](https://caniuse.com/#feat=custom-elementsv1) are in game, so you can safely use only in latest version of Firefox/Chrome/Chromium/Edge.

## Usages
- SVG sprites file can looks like: `<svg>…<defs><svg id="icon_name" …</svg>…</defs></svg>` (e.g. [icons.svg](./docs/examples_files/icons.svg?short_path=2105ba1)).
- Library and config scripts should be ideally placed before icons will be used (convenient place is `<head>`). There are several types of library in [*bin/*](./bin/) folder.
- Web component is now fully functional

## Default behaviour
- Library expose default styling via css var `var(--svg-icon-size, 1em)` and `svg-icon` is block element with size of `--svg-icon-size`
- In fact library uses `<svg…<use xlink:href="…"</use></svg>`, so you can follow [Icon System with SVG Sprites | CSS-Tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/). **But, instead of `<g>` use `<svg>`** (for more freedom – using `viewBox`)

## More info
- See [changeOptions(def)](./docs/SVGIcon-namespace.md#changeOptions), [setAlias(alias, target)](./docs/SVGIcon-namespace.md#setAlias) and [removeAlias(alias)](./docs/SVGIcon-namespace.md#removeAlias)
- Or [full documentation](./docs/SVGIcon-namespace.md)
- See [examples](https://indigomultimediateam.github.io/SVGIcon/examples.html)

## Study resourses
- [Icon Fonts vs. SVGs: An Ultimate Guide to Accessible Web Icons - DEV](https://dev.to/linuxfuture/icon-fonts-vs-svgs-an-ultimate-guide-to-accessible-web-icons-2lh6)
- [SVG Fragment Identifier Linking](http://www.broken-links.com/tests/svg/fragment-identifiers.php)