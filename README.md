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

## Use Cases
- SVG sprites file can looks like: `<svg>…<defs><svg id="icon_name" …</svg>…</defs></svg>` (e.g. [icons.svg](./docs/examples_files/icons.svg)).
- Library and config scripts should be ideally placed before icons will be used (classic place is `<head>`). There are several types in [*bin/*](./bin/) folder.
- Web component is now fully functional