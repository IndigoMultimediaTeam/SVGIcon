# SVGIcon – Documentation
[⇠ Go back to GitHub repository](https://github.com/IndigoMultimediaTeam/SVGIcon#readme)
<p style="font-size: 2em;background: whitesmoke;text-align: center;">Overview</p>

## Classes

<dl>
<dt><a href="#EventFronta">EventFronta</a> ℗</dt>
<dd><p>Caching &quot;events info&quot; primary for <code>attributeChangedCallback</code>. This in fact caches all function arguments to reproduce calling later.</p>
</dd>
<dt><a href="#SVGIconElement">SVGIconElement</a> ⇐ <code>HTMLElement</code></dt>
<dd><p>SVGIcon Custom Element. When created new <code>&lt;svg-icon&gt;</code> tag it registers global style – see <a href="#style">style</a>. Also <a href="#EventFronta">EventFronta</a> for attributes changes (before element mounitg) is registered there.</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#style">style</a> : <code>object</code> ℗</dt>
<dd></dd>
<dt><a href="#aliases">aliases</a> : <code>object</code> ℗</dt>
<dd><p>Grouping alises functionalities</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#createElement">createElement()</a> ℗</dt>
<dd><p>Creates elemnet in <em>svg</em> namespace</p>
</dd>
<dt><a href="#setHref">setHref(element, value)</a> ℗</dt>
<dd><p>Sets &#39;xlink:href&#39; for given element</p>
</dd>
<dt><a href="#setAlias">setAlias(alias, target)</a></dt>
<dd><p>Registers new alias – this affect only newly created tags <code>&lt;svg-icon&gt;</code> since modification!</p>
</dd>
<dt><a href="#removeAlias">removeAlias(alias)</a></dt>
<dd><p>Removes registered alias – this affect only newly created tags <code>&lt;svg-icon&gt;</code> since modification!</p>
</dd>
<dt><a href="#changeOptions">changeOptions(def)</a></dt>
<dd><p>Intended to changing defaults options in <a href="#style.options">options</a> and <a href="#aliases.options">options</a></p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#style_options">style_options</a> : <code>Object</code></dt>
<dd><p>Contains options for generating default styles for <code>&lt;svg-icon&gt;</code>. Changes makes sence only before fisrt <code>&lt;svg-icon&gt;</code> is created. See <a href="style.cerate">style.cerate</a>.</p>
</dd>
<dt><a href="#aliases_options">aliases_options</a> : <code>object</code></dt>
<dd><p>Options for setting/getting/using aliases (mainly <code>separator</code>). Changes affect only newly created tags <code>&lt;svg-icon&gt;</code> since modification!</p>
</dd>
</dl>

<p style="font-size: 2em;background: whitesmoke;text-align: center;">Content</p>

<a name="EventFronta"></a>

## EventFronta ℗
>Caching "events info" primary for `attributeChangedCallback`. This in fact caches all function arguments to reproduce calling later.

**Kind**: global class <a name="EventFronta" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L14" title="SVGIcon-namespace.js:14"><small>(defined@14)</small></a>  
**Access**: private  

* [EventFronta](#EventFronta) ℗
    * [.add(event_info, [method])](#EventFronta+add)
    * [.serveAll(callback)](#EventFronta+serveAll)
    * [.clear()](#EventFronta+clear)


* * *

<a name="EventFronta+add"></a>

### eventFronta.add(event_info, [method])
>Refister new event

**Kind**: instance method of [<code>EventFronta</code>](#EventFronta) <a name="EventFronta+add" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L20" title="SVGIcon-namespace.js:20"><small>(defined@20)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event_info | <code>Array</code> |  | All necessary infos for later invoking |
| [method] | <code>String</code> | <code>&quot;push&quot;</code> | In fact name of operation in `Array.prototype` (not used any more). Understands as enum of: *push*, *unshift*. |


* * *

<a name="EventFronta+serveAll"></a>

### eventFronta.serveAll(callback)
>Proccess all cached events

**Kind**: instance method of [<code>EventFronta</code>](#EventFronta) <a name="EventFronta+serveAll" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L28" title="SVGIcon-namespace.js:28"><small>(defined@28)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Function accepting array of cached arguments |


* * *

<a name="EventFronta+clear"></a>

### eventFronta.clear()
>Empty cache

**Kind**: instance method of [<code>EventFronta</code>](#EventFronta) <a name="EventFronta+clear" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L38" title="SVGIcon-namespace.js:38"><small>(defined@38)</small></a>  

* * *

<a name="SVGIconElement"></a>

## SVGIconElement ⇐ <code>HTMLElement</code>
>SVGIcon Custom Element. When created new `<svg-icon>` tag it registers global style – see [style](#style). Also [EventFronta](#EventFronta) for attributes changes (before element mounitg) is registered there.

**Kind**: global class <a name="SVGIconElement" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L182" title="SVGIcon-namespace.js:182"><small>(defined@182)</small></a>  
**Extends**: <code>HTMLElement</code>  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| _icon | <code>HTMLElement</code> | Current icon (`<use>` tag) reference |
| _onmount_attributes | [<code>EventFronta</code>](#EventFronta) | Log events for |


* [SVGIconElement](#SVGIconElement) ⇐ <code>HTMLElement</code>
    * _instance_
        * [.renderIcon()](#SVGIconElement+renderIcon) ⇒ <code>HTMLElement</code>
        * [.setIcon()](#SVGIconElement+setIcon)
        * [.connectedCallback()](#SVGIconElement+connectedCallback)
        * [.disconnectedCallback()](#SVGIconElement+disconnectedCallback)
        * [.attributeChangedCallback()](#SVGIconElement+attributeChangedCallback)
    * _static_
        * [.observedAttributes](#SVGIconElement.observedAttributes)


* * *

<a name="SVGIconElement+renderIcon"></a>

### svgIconElement.renderIcon() ⇒ <code>HTMLElement</code>
>Prepare `<svg>` and `<use>` tag for icon.

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+renderIcon" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L195" title="SVGIcon-namespace.js:195"><small>(defined@195)</small></a>  
**Returns**: <code>HTMLElement</code> - `<use>` reference  
**Access**: public  

* * *

<a name="SVGIconElement+setIcon"></a>

### svgIconElement.setIcon()
>Sets `href` of current icon ([SVGIconElement](#SVGIconElement) properties)

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+setIcon" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L207" title="SVGIcon-namespace.js:207"><small>(defined@207)</small></a>  
**Access**: public  

* * *

<a name="SVGIconElement+connectedCallback"></a>

### svgIconElement.connectedCallback()
>Life cycle callback: This method is called when element is mounted to DOM. It renders icon ([renderIcon](#SVGIconElement+renderIcon)) and process all cached *attributeChange* events.

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+connectedCallback" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L221" title="SVGIcon-namespace.js:221"><small>(defined@221)</small></a>  
**Access**: public  

* * *

<a name="SVGIconElement+disconnectedCallback"></a>

### svgIconElement.disconnectedCallback()
>Life cycle callback: Called when element is removed from DOM. It clears icon and listenres.

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+disconnectedCallback" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L230" title="SVGIcon-namespace.js:230"><small>(defined@230)</small></a>  
**Access**: public  

* * *

<a name="SVGIconElement+attributeChangedCallback"></a>

### svgIconElement.attributeChangedCallback()
>Life cycle callback: Element atribute change handler (see [observedAttributes](#SVGIconElement.observedAttributes)). It calls [setIcon](#SVGIconElement+setIcon) or save events params into [SVGIconElement](#SVGIconElement) (if element wasn’t mounted).

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+attributeChangedCallback" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L246" title="SVGIcon-namespace.js:246"><small>(defined@246)</small></a>  
**Access**: public  

* * *

<a name="SVGIconElement.observedAttributes"></a>

### SVGIconElement.observedAttributes
>All properties theirs changes will be cached by [attributeChangedCallback](#SVGIconElement+attributeChangedCallback)

**Kind**: static property of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement.observedAttributes" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L240" title="SVGIcon-namespace.js:240"><small>(defined@240)</small></a>  
**Access**: public  

* * *

<a name="style"></a>

## style : <code>object</code> ℗
**Kind**: global namespace <a name="style" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L62" title="SVGIcon-namespace.js:62"><small>(defined@62)</small></a>  
**Access**: private  

* [style](#style) : <code>object</code> ℗
    * [.options](#style.options)
    * [.is_created](#style.is_created) ℗
    * [.create()](#style.create)


* * *

<a name="style.options"></a>

### style.options
**Kind**: static property of [<code>style</code>](#style) <a name="style.options" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L68" title="SVGIcon-namespace.js:68"><small>(defined@68)</small></a>  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| options | [<code>style\_options</code>](#style_options) | 


* * *

<a name="style.is_created"></a>

### style.is\_created ℗
>Keeping information the global style was created – see [style.cerate](style.cerate)

**Kind**: static property of [<code>style</code>](#style) <a name="style.is_created" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L75" title="SVGIcon-namespace.js:75"><small>(defined@75)</small></a>  
**Access**: private  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| [is_created] | <code>boolean</code> | <code>false</code> | 


* * *

<a name="style.create"></a>

### style.create()
>Creates new `<style>` inside `<head>` with default styling of `<svg-icon>` (displays block and size)

**Kind**: static method of [<code>style</code>](#style) <a name="style.create" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L82" title="SVGIcon-namespace.js:82"><small>(defined@82)</small></a>  
**Access**: public  

* * *

<a name="aliases"></a>

## aliases : <code>object</code> ℗
>Grouping alises functionalities

**Kind**: global namespace <a name="aliases" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L105" title="SVGIcon-namespace.js:105"><small>(defined@105)</small></a>  
**Access**: private  

* [aliases](#aliases) : <code>object</code> ℗
    * [.options](#aliases.options)
    * [.list](#aliases.list) ℗
    * [.has(alias)](#aliases.has) ⇒ <code>boolean</code>
    * [.get(alias)](#aliases.get)


* * *

<a name="aliases.options"></a>

### aliases.options
**Kind**: static property of [<code>aliases</code>](#aliases) <a name="aliases.options" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L111" title="SVGIcon-namespace.js:111"><small>(defined@111)</small></a>  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| options | [<code>aliases\_options</code>](#aliases_options) | 


* * *

<a name="aliases.list"></a>

### aliases.list ℗
>Contains all registered aliases

**Kind**: static property of [<code>aliases</code>](#aliases) <a name="aliases.list" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L117" title="SVGIcon-namespace.js:117"><small>(defined@117)</small></a>  
**Access**: private  
**Properties**

| Name | Type |
| --- | --- |
| list | <code>Map</code> \| <code>null</code> | 


* * *

<a name="aliases.has"></a>

### aliases.has(alias) ⇒ <code>boolean</code>
>Existence check

**Kind**: static method of [<code>aliases</code>](#aliases) <a name="aliases.has" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L125" title="SVGIcon-namespace.js:125"><small>(defined@125)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| alias | <code>string</code> | Alias name |


* * *

<a name="aliases.get"></a>

### aliases.get(alias)
>Get coresponding path for given `alias` name. Use [has](#aliases.has) before for existence check!

**Kind**: static method of [<code>aliases</code>](#aliases) <a name="aliases.get" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L132" title="SVGIcon-namespace.js:132"><small>(defined@132)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| alias | <code>string</code> | Alias name |


* * *

<a name="createElement"></a>

## createElement() ℗
>Creates elemnet in *svg* namespace

**Kind**: global function <a name="createElement" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L9" title="SVGIcon-namespace.js:9"><small>(defined@9)</small></a>  
**Access**: private  

* * *

<a name="setHref"></a>

## setHref(element, value) ℗
>Sets 'xlink:href' for given element

**Kind**: global function <a name="setHref" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L49" title="SVGIcon-namespace.js:49"><small>(defined@49)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| element | <code>SVGUseElement</code> | 
| value | <code>String</code> | 


* * *

<a name="setAlias"></a>

## setAlias(alias, target)
>Registers new alias – this affect only newly created tags `<svg-icon>` since modification!

**Kind**: global function <a name="setAlias" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L146" title="SVGIcon-namespace.js:146"><small>(defined@146)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| alias | <code>string</code> | Alias name |
| target | <code>string</code> | Corresponding full path |

**Example**  
```js
setAlias("icon", "icons_file.svg#");
document.body.innerHTML+= '<svg-icon use="icon-icon_name"></svg-icon>';
//is equivalent to
document.body.innerHTML+= '<svg-icon use="icons_file.svg#icon_name"></svg-icon>';
```

* * *

<a name="removeAlias"></a>

## removeAlias(alias)
>Removes registered alias – this affect only newly created tags `<svg-icon>` since modification!

**Kind**: global function <a name="removeAlias" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L156" title="SVGIcon-namespace.js:156"><small>(defined@156)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| alias | <code>string</code> | Alias name |


* * *

<a name="changeOptions"></a>

## changeOptions(def)
>Intended to changing defaults options in [options](#style.options) and [options](#aliases.options)

**Kind**: global function <a name="changeOptions" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L170" title="SVGIcon-namespace.js:170"><small>(defined@170)</small></a>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| def | <code>object</code> |  |
| [def.style] | [<code>style\_options</code>](#style_options) | Changing style options |
| [def.aliases] | [<code>aliases\_options</code>](#aliases_options) | Changing aliases options |


* * *

<a name="style_options"></a>

## style\_options : <code>Object</code>
>Contains options for generating default styles for `<svg-icon>`. Changes makes sence only before fisrt `<svg-icon>` is created. See [style.cerate](style.cerate).

**Kind**: global typedef <a name="style_options" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L50" title="SVGIcon-namespace.js:50"><small>(defined@50)</small></a>  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [allow] | <code>boolean</code> | <code>true</code> | Allow creating global default styles |
| [fit] | <code>string</code> | <code>&quot;contain&quot;</code> | CSS `fit` property of `<svg>` inside `<svg-icon>` |
| [size_variable] | <code>string</code> | <code>&quot;--svg-icon-size&quot;</code> | The full name of CSS variable for changin icon size (width and height) |


* * *

<a name="aliases_options"></a>

## aliases\_options : <code>object</code>
>Options for setting/getting/using aliases (mainly `separator`). Changes affect only newly created tags `<svg-icon>` since modification!

**Kind**: global typedef <a name="aliases_options" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L94" title="SVGIcon-namespace.js:94"><small>(defined@94)</small></a>  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [separator] | <code>string</code> | <code>&quot;-&quot;</code> | Separator for aliases: `alias`**separator**`icon_name`. |


* * *

