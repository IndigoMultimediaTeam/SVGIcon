# Library documentation
<a name="svgicon"></a>

## svgicon : <code>object</code>
>Grouping SVGIcon code

**Kind**: global namespace <a name="svgicon" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L3" title="SVGIcon-namespace.js:3"><small>(defined@3)</small></a>  

* [svgicon](#svgicon) : <code>object</code>
    * _static_
        * [.SVGIconElement](#svgicon.SVGIconElement) ⇐ <code>HTMLElement</code>
            * [new SVGIconElement()](#new_svgicon.SVGIconElement_new)
            * [.SVGIconElement#renderIcon()](#svgicon.SVGIconElement.SVGIconElement+renderIcon) ⇒ <code>HTMLElement</code>
            * [.SVGIconElement#setIcon()](#svgicon.SVGIconElement.SVGIconElement+setIcon)
            * [.SVGIconElement#connectedCallback()](#svgicon.SVGIconElement.SVGIconElement+connectedCallback)
            * [.SVGIconElement#disconnectedCallback()](#svgicon.SVGIconElement.SVGIconElement+disconnectedCallback)
            * [.SVGIconElement#attributeChangedCallback()](#svgicon.SVGIconElement.SVGIconElement+attributeChangedCallback)
    * _inner_
        * [~EventFronta](#svgicon..EventFronta)
            * [.add(event_info, [method])](#svgicon..EventFronta+add)
            * [.serveAll(callback)](#svgicon..EventFronta+serveAll)
            * [.clear()](#svgicon..EventFronta+clear)
        * [~style](#svgicon..style) : <code>object</code>
            * [.options](#svgicon..style.options)
        * [~createElement](#svgicon..createElement)
        * [~setHref(element, value)](#svgicon..setHref)


* * *

<a name="svgicon.SVGIconElement"></a>

### svgicon.SVGIconElement ⇐ <code>HTMLElement</code>
**Kind**: static class of [<code>svgicon</code>](#svgicon) <a name="svgicon.SVGIconElement" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L99" title="SVGIcon-namespace.js:99"><small>(defined@99)</small></a>  
**Extends**: <code>HTMLElement</code>  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| _icon | <code>HTMLElement</code> | Current icon (`<use>` tag) reference |
| _onmount_attributes | [<code>EventFronta</code>](#svgicon..EventFronta) | Log events for |


* [.SVGIconElement](#svgicon.SVGIconElement) ⇐ <code>HTMLElement</code>
    * [new SVGIconElement()](#new_svgicon.SVGIconElement_new)
    * [.SVGIconElement#renderIcon()](#svgicon.SVGIconElement.SVGIconElement+renderIcon) ⇒ <code>HTMLElement</code>
    * [.SVGIconElement#setIcon()](#svgicon.SVGIconElement.SVGIconElement+setIcon)
    * [.SVGIconElement#connectedCallback()](#svgicon.SVGIconElement.SVGIconElement+connectedCallback)
    * [.SVGIconElement#disconnectedCallback()](#svgicon.SVGIconElement.SVGIconElement+disconnectedCallback)
    * [.SVGIconElement#attributeChangedCallback()](#svgicon.SVGIconElement.SVGIconElement+attributeChangedCallback)


* * *

<a name="new_svgicon.SVGIconElement_new"></a>

#### new SVGIconElement()
>SVGIcon Custom Element


* * *

<a name="svgicon.SVGIconElement.SVGIconElement+renderIcon"></a>

#### SVGIconElement.SVGIconElement#renderIcon() ⇒ <code>HTMLElement</code>
>Prepare `<svg>` and `<use>` tag for icon.

**Kind**: static method of [<code>SVGIconElement</code>](#svgicon.SVGIconElement) <a name="svgicon.SVGIconElement.SVGIconElement+renderIcon" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L123" title="SVGIcon-namespace.js:123"><small>(defined@123)</small></a>  
**Returns**: <code>HTMLElement</code> - `<use>` reference  
**Access**: public  

* * *

<a name="svgicon.SVGIconElement.SVGIconElement+setIcon"></a>

#### SVGIconElement.SVGIconElement#setIcon()
>Sets `href` of current icon ([SVGIconElement](#svgicon.SVGIconElement) properties)

**Kind**: static method of [<code>SVGIconElement</code>](#svgicon.SVGIconElement) <a name="svgicon.SVGIconElement.SVGIconElement+setIcon" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L135" title="SVGIcon-namespace.js:135"><small>(defined@135)</small></a>  
**Access**: public  

* * *

<a name="svgicon.SVGIconElement.SVGIconElement+connectedCallback"></a>

#### SVGIconElement.SVGIconElement#connectedCallback()
>Life cycle callback: This method is called when element is mounted to DOM. It renders icon ([renderIcon](#svgicon.SVGIconElement.SVGIconElement+renderIcon)) and process all cached *attributeChange* events.

**Kind**: static method of [<code>SVGIconElement</code>](#svgicon.SVGIconElement) <a name="svgicon.SVGIconElement.SVGIconElement+connectedCallback" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L149" title="SVGIcon-namespace.js:149"><small>(defined@149)</small></a>  
**Access**: public  

* * *

<a name="svgicon.SVGIconElement.SVGIconElement+disconnectedCallback"></a>

#### SVGIconElement.SVGIconElement#disconnectedCallback()
>Life cycle callback: Called when element is removed from DOM. It clears icon and listenres.

**Kind**: static method of [<code>SVGIconElement</code>](#svgicon.SVGIconElement) <a name="svgicon.SVGIconElement.SVGIconElement+disconnectedCallback" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L158" title="SVGIcon-namespace.js:158"><small>(defined@158)</small></a>  
**Access**: public  

* * *

<a name="svgicon.SVGIconElement.SVGIconElement+attributeChangedCallback"></a>

#### SVGIconElement.SVGIconElement#attributeChangedCallback()
>Life cycle callback: Element atribute change handler (in fact `use` only). It calls [setIcon](#svgicon.SVGIconElement.SVGIconElement+setIcon) or save events params into [SVGIconElement](#svgicon.SVGIconElement) (if elemnt wasn’t mounted).

**Kind**: static method of [<code>SVGIconElement</code>](#svgicon.SVGIconElement) <a name="svgicon.SVGIconElement.SVGIconElement+attributeChangedCallback" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L168" title="SVGIcon-namespace.js:168"><small>(defined@168)</small></a>  
**Access**: public  

* * *

<a name="svgicon..EventFronta"></a>

### svgicon~EventFronta
>Caching "events info" primary for `attributeChangedCallback`. This in fact caches all function arguments to reproduce calling later.

**Kind**: inner class of [<code>svgicon</code>](#svgicon) <a name="svgicon..EventFronta" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L18" title="SVGIcon-namespace.js:18"><small>(defined@18)</small></a>  

* [~EventFronta](#svgicon..EventFronta)
    * [.add(event_info, [method])](#svgicon..EventFronta+add)
    * [.serveAll(callback)](#svgicon..EventFronta+serveAll)
    * [.clear()](#svgicon..EventFronta+clear)


* * *

<a name="svgicon..EventFronta+add"></a>

#### eventFronta.add(event_info, [method])
>Refister new event

**Kind**: instance method of [<code>EventFronta</code>](#svgicon..EventFronta) <a name="svgicon..EventFronta+add" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L24" title="SVGIcon-namespace.js:24"><small>(defined@24)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event_info | <code>Array</code> |  | All necessary infos for later |
| [method] | <code>String</code> | <code>&quot;push&quot;</code> | In fact name of operation in `Array.prototype` (not used any more) |


* * *

<a name="svgicon..EventFronta+serveAll"></a>

#### eventFronta.serveAll(callback)
>Proccess all cached events

**Kind**: instance method of [<code>EventFronta</code>](#svgicon..EventFronta) <a name="svgicon..EventFronta+serveAll" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L32" title="SVGIcon-namespace.js:32"><small>(defined@32)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Function accepting array of cached arguments |


* * *

<a name="svgicon..EventFronta+clear"></a>

#### eventFronta.clear()
>Empty cache

**Kind**: instance method of [<code>EventFronta</code>](#svgicon..EventFronta) <a name="svgicon..EventFronta+clear" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L42" title="SVGIcon-namespace.js:42"><small>(defined@42)</small></a>  

* * *

<a name="svgicon..style"></a>

### svgicon~style : <code>object</code>
**Kind**: inner namespace of [<code>svgicon</code>](#svgicon) <a name="svgicon..style" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L59" title="SVGIcon-namespace.js:59"><small>(defined@59)</small></a>  

* * *

<a name="svgicon..style.options"></a>

#### style.options
>Contains options for generating default styles for `<svg-icon>`

**Kind**: static property of [<code>style</code>](#svgicon..style) <a name="svgicon..style.options" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L64" title="SVGIcon-namespace.js:64"><small>(defined@64)</small></a>  

* * *

<a name="svgicon..createElement"></a>

### svgicon~createElement
>Creates elemnet in *svg* namespace

**Kind**: inner constant of [<code>svgicon</code>](#svgicon) <a name="svgicon..createElement" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L12" title="SVGIcon-namespace.js:12"><small>(defined@12)</small></a>  

* * *

<a name="svgicon..setHref"></a>

### svgicon~setHref(element, value)
>Sets 'xlink:href' for given element

**Kind**: inner method of [<code>svgicon</code>](#svgicon) <a name="svgicon..setHref" href="https://github.com/IndigoMultimediaTeam/SVGIcon/blob/master/bin/SVGIcon-namespace.js#L53" title="SVGIcon-namespace.js:53"><small>(defined@53)</small></a>  

| Param | Type |
| --- | --- |
| element | <code>SVGUseElement</code> | 
| value | <code>String</code> | 


* * *

