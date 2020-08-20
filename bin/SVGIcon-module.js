/**
 * Grouping SVGIcon code
 * @namespace svgicon
 */
/**
 * Creates elemnet in *svg* namespace
 * @memberof svgicon
 * @inner
 */
const createElement= document.createElementNS.bind(document, "http://www.w3.org/2000/svg");
/**
 * Caching "events info" primary for `attributeChangedCallback`. This in fact caches all function arguments to reproduce calling later.
 * @memberof svgicon
 * @inner
 */
class EventFronta{
    /**
     * Refister new event
     * @param {Array} event_info All necessary infos for later
     * @param {String} [method="push"] In fact name of operation in `Array.prototype` (not used any more)
     */
    add(event_info, method= "push"){
        if(typeof this._listeners === "undefined") this._listeners= [];
        this._listeners[method](event_info);
    }
    /**
     * Proccess all cached events
     * @param {Function} callback Function accepting array of cached arguments
     */
    serveAll(callback){
        if(typeof this._listeners === "undefined") return true;
        let fronta_item;
        while((fronta_item= this._listeners.shift()))
            callback(fronta_item);
        this.clear();
    }
    /**
     * Empty cache
     */
    clear(){
        Reflect.deleteProperty(this, "_listeners");
    }
}
/**
 * Sets 'xlink:href' for given element
 * @memberof svgicon
 * @inner
 * @param {SVGUseElement} element
 * @param {String} value
 */
const setHref= (element, value)=> element.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", value);
/**
 * @namespace
 * @memberof svgicon
 * @inner
 */
const style= {
    /**
     * Contains options for generating default styles for `<svg-icon>`
     * @memberof svgicon~style
     */
    options: { allow: true, fit: "contain", size_variable: "--svg-icon-size" },
    is_created: false,
    create(){
        if(!this.options.allow||this.is_created) return false;
        const style_el= document.createElement("style");
        style_el.type="text/css";
        const { size_variable, fit }= this.options;
        style_el.innerHTML=
            `svg-icon { display: block; width: var(${size_variable}, 1em); height: var(${size_variable}, 1em); }` +
            `svg-icon svg { width: 100%; height: 100%; object-fit: ${fit}; }`;
        document.head.appendChild(style_el);
        this.is_created= true;
    }
};
const aliases= {
    options: { separator: "-" },
    list: null,
    has: function(alias){ return Boolean(this.list) && this.list.has(alias); },
    get: function(alias){ return this.list.get(alias); }
};

export function setAlias(alias, target){
    if(!aliases.list) aliases.list= new Map();
    return aliases.list.set(alias, target);
}
export function removeAlias(alias){
    if(!aliases.list) return false;
    aliases.list.delete(alias);
    if(!aliases.list.size) aliases.list= null;
    return true;
}
export function changeOptions({ style: style_options, aliases: aliases_options }= {}){
    if(style_options) Object.assign(style.options, style_options);
    if(aliases_options) Object.assign(aliases.options, aliases_options);
}
/**
 * SVGIcon Custom Element
 * @class SVGIconElement
 * @extends HTMLElement
 * @memberof svgicon
 * @public
 * @static
 * @property {HTMLElement} _icon Current icon (`<use>` tag) reference
 * @property {svgicon~EventFronta} _onmount_attributes Log events for 
 */
export default class SVGIconElement extends HTMLElement{
    constructor(){
        super();
        style.create();
        /* instance vars */
        this._icon= null;
        this._onmount_attributes= new EventFronta();
    }
    /**
     * Prepare `<svg>` and `<use>` tag for icon.
     * @public
     * @memberof svgicon.SVGIconElement
     * @returns {HTMLElement} `<use>` reference
     */
    renderIcon(){
        const svg= createElement("svg");
        const icon= createElement("use");
        svg.appendChild(icon);
        this.appendChild(svg);
        return icon;
    }
    /**
     * Sets `href` of current icon ({@link svgicon.SVGIconElement} properties)
     * @public
     * @memberof svgicon.SVGIconElement
     */
    setIcon(href){
        if(!href||!this._icon) return false;
        const { separator }= aliases.options;
        const [ alias_candidate, ...rest ]= href.split(separator);
        setHref(
            this._icon,
            aliases.has(alias_candidate) ? aliases.get(alias_candidate)+rest.join(separator) : href
        );
    }
    /**
     * Life cycle callback: This method is called when element is mounted to DOM. It renders icon ([renderIcon](#svgicon.SVGIconElement.SVGIconElement+renderIcon)) and process all cached *attributeChange* events.
     * @public
     * @memberof svgicon.SVGIconElement
     */
    connectedCallback(){
        this._icon= this.renderIcon();
        this._onmount_attributes.serveAll(args=> this.attributeChangedCallback(...args));
    }
    /**
     * Life cycle callback: Called when element is removed from DOM. It clears icon and listenres.
     * @public
     * @memberof svgicon.SVGIconElement
     */
    disconnectedCallback(){
        this._icon= null;
        this._onmount_attributes= null;
    }
    static get observedAttributes(){ return [ "use" ]; }
    /**
     * Life cycle callback: Element atribute change handler (in fact `use` only). It calls [setIcon](#svgicon.SVGIconElement.SVGIconElement+setIcon) or save events params into {@link svgicon.SVGIconElement} (if elemnt wasn’t mounted).
     * @public
     * @memberof svgicon.SVGIconElement
     */
    attributeChangedCallback(...args){
        const [ property, old_value, new_value ]= args;
        if(old_value===new_value||property!=="use") return false;
        if(!this._icon) return this._onmount_attributes.add(args);
        return this.setIcon(new_value);
        
    }
}
customElements.define("svg-icon", SVGIconElement);