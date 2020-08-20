# Library documentation
## Classes

<dl>
<dt><a href="#EventFronta">EventFronta</a> ℗</dt>
<dd><p>Caching &quot;events info&quot; primary for <code>attributeChangedCallback</code>. This in fact caches all function arguments to reproduce calling later.</p>
</dd>
<dt><a href="#SVGIconElement">SVGIconElement</a> ⇐ <code>HTMLElement</code></dt>
<dd><p>SVGIcon Custom Element</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#style">style</a> : <code>object</code> ℗</dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#createElement">createElement()</a> ℗</dt>
<dd><p>Creates elemnet in <em>svg</em> namespace</p>
</dd>
<dt><a href="#setHref">setHref(element, value)</a> ℗</dt>
<dd><p>Sets &#39;xlink:href&#39; for given element</p>
</dd>
</dl>

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
| event_info | <code>Array</code> |  | All necessary infos for later |
| [method] | <code>String</code> | <code>&quot;push&quot;</code> | In fact name of operation in `Array.prototype` (not used any more) |


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
>SVGIcon Custom Element

**Kind**: global class <a name="SVGIconElement" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L103" title="SVGIcon-namespace.js:103"><small>(defined@103)</small></a>  
**Extends**: <code>HTMLElement</code>  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| _icon | <code>HTMLElement</code> | Current icon (`<use>` tag) reference |
| _onmount_attributes | [<code>EventFronta</code>](#EventFronta) | Log events for |


* [SVGIconElement](#SVGIconElement) ⇐ <code>HTMLElement</code>
    * [.renderIcon()](#SVGIconElement+renderIcon) ⇒ <code>HTMLElement</code>
    * [.setIcon()](#SVGIconElement+setIcon)
    * [.connectedCallback()](#SVGIconElement+connectedCallback)
    * [.disconnectedCallback()](#SVGIconElement+disconnectedCallback)
    * [.attributeChangedCallback()](#SVGIconElement+attributeChangedCallback)


* * *

<a name="SVGIconElement+renderIcon"></a>

### svgIconElement.renderIcon() ⇒ <code>HTMLElement</code>
>Prepare `<svg>` and `<use>` tag for icon.

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+renderIcon" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L116" title="SVGIcon-namespace.js:116"><small>(defined@116)</small></a>  
**Returns**: <code>HTMLElement</code> - `<use>` reference  
**Access**: public  

* * *

<a name="SVGIconElement+setIcon"></a>

### svgIconElement.setIcon()
>Sets `href` of current icon ([SVGIconElement](#SVGIconElement) properties)

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+setIcon" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L128" title="SVGIcon-namespace.js:128"><small>(defined@128)</small></a>  
**Access**: public  

* * *

<a name="SVGIconElement+connectedCallback"></a>

### svgIconElement.connectedCallback()
>Life cycle callback: This method is called when element is mounted to DOM. It renders icon ([renderIcon](#SVGIconElement+renderIcon)) and process all cached *attributeChange* events.

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+connectedCallback" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L142" title="SVGIcon-namespace.js:142"><small>(defined@142)</small></a>  
**Access**: public  

* * *

<a name="SVGIconElement+disconnectedCallback"></a>

### svgIconElement.disconnectedCallback()
>Life cycle callback: Called when element is removed from DOM. It clears icon and listenres.

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+disconnectedCallback" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L151" title="SVGIcon-namespace.js:151"><small>(defined@151)</small></a>  
**Access**: public  

* * *

<a name="SVGIconElement+attributeChangedCallback"></a>

### svgIconElement.attributeChangedCallback()
>Life cycle callback: Element atribute change handler (in fact `use` only). It calls [setIcon](#SVGIconElement+setIcon) or save events params into [SVGIconElement](#SVGIconElement) (if elemnt wasn’t mounted).

**Kind**: instance method of [<code>SVGIconElement</code>](#SVGIconElement) <a name="SVGIconElement+attributeChangedCallback" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L161" title="SVGIcon-namespace.js:161"><small>(defined@161)</small></a>  
**Access**: public  

* * *

<a name="style"></a>

## style : <code>object</code> ℗
**Kind**: global namespace <a name="style" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L55" title="SVGIcon-namespace.js:55"><small>(defined@55)</small></a>  
**Access**: private  

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

