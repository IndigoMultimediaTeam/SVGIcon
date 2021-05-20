/**
 * Creates elemnet in *svg* namespace
 * @method
 * @private
 * @global
 */
const createElement= document.createElementNS.bind(document, "http://www.w3.org/2000/svg");
/**
 * Caching "events info" primary for `attributeChangedCallback`. This in fact caches all function arguments to reproduce calling later.
 * @private
 */
class EventFronta{
    /**
     * Refister new event
     * @param {Array} event_info All necessary infos for later invoking
     * @param {String} [method="push"] In fact name of operation in `Array.prototype` (not used any more). Understands as enum of: *push*, *unshift*.
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
 * @private
 * @global
 * @param {SVGUseElement} element
 * @param {String} value
 */
const setHref= (element, value)=> element.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", value);
/**
 * Contains options for generating default styles for `<svg-icon>`. Changes makes sence only before fisrt `<svg-icon>` is created. See {@link style.cerate}.
 * @typedef {Object} style_options
 * @property {boolean} [allow=true] Allow creating global default styles
 * @property {string} [fit=contain] CSS `fit` property of `<svg>` inside `<svg-icon>`
 * @property {string} [size_variable=--svg-icon-size] The full name of CSS variable for changin icon size (width and height)
 */
/**
 * @namespace
 * @private
 * @global
 */
const style= {
    /**
     * @property {style_options} options
     * @memberof style
     * @public
     */
    options: { allow: true, fit: "contain", size_variable: "--svg-icon-size" },
    /**
     * Keeping information the global style was created – see {@link style.cerate}
     * @property {boolean} [is_created=false]
     * @memberof style
     * @private
     */
    is_created: false,
    /**
     * Creates new `<style>` inside `<head>` with default styling of `<svg-icon>` (displays block and size)
     * @method
     * @memberof style
     * @public
     */
    create(){
        if(!this.options.allow||this.is_created) return false;
        const { size_variable, fit }= this.options;
        const style_el= Object.assign(document.createElement("style"), {
            type: "text/css",
            innerHTML: `svg-icon { display: block; width: var(${size_variable}, 1em); height: var(${size_variable}, 1em); }` +
                        `svg-icon svg { width: 100%; height: 100%; object-fit: ${fit}; }`
        });
        document.head.appendChild(style_el);
        this.is_created= true;
    }
};
/**
 * Options for setting/getting/using aliases (mainly `separator`). Changes affect only newly created tags `<svg-icon>` since modification!
 * @typedef {object} aliases_options
 * @property {string} [separator=-] Separator for aliases: `alias`**separator**`icon_name`.
 */
/**
 * Grouping alises functionalities
 * @namespace
 * @private
 * @global
 */
const aliases= {
    /**
     * @property {aliases_options} options
     * @memberof aliases
     * @public
     */
    options: { separator: "-" },
    /**
     * Contains all registered aliases
     * @property {Map|null} list
     * @private
     */
    list: null,
    /**
     * Existence check
     * @memberof aliases
     * @public
     * @param {string} alias Alias name
     * @returns {boolean}
     */
    has: function(alias){ return Boolean(this.list) && this.list.has(alias); },
    /**
     * Get coresponding path for given `alias` name. Use {@link aliases.has} before for existence check!
     * @memberof aliases
     * @public
     * @param {string} alias Alias name
     */
    get: function(alias){ return this.list.get(alias); }
};
/**
 * Registers new alias – this affect only newly created tags `<svg-icon>` since modification!
 * @global
 * @public
 * @param {string} alias Alias name
 * @param {string} target Corresponding full path
 * @example
 * setAlias("icon", "icons_file.svg#");
 * document.body.innerHTML+= '<svg-icon use="icon-icon_name"></svg-icon>';
 * //is equivalent to
 * document.body.innerHTML+= '<svg-icon use="icons_file.svg#icon_name"></svg-icon>';
 */
export function setAlias(alias, target){
    if(!aliases.list) aliases.list= new Map();
    return aliases.list.set(alias, target);
}
/**
 * Removes registered alias – this affect only newly created tags `<svg-icon>` since modification!
 * @global
 * @public
 * @param {string} alias Alias name
 */
export function removeAlias(alias){
    if(!aliases.list) return false;
    aliases.list.delete(alias);
    if(!aliases.list.size) aliases.list= null;
    return true;
}
/**
 * Intended to changing defaults options in {@link style.options} and {@link aliases.options}
 * @global
 * @public
 * @param {object} def
 * @param {style_options} [def.style] Changing style options
 * @param {aliases_options} [def.aliases] Changing aliases options
 */
export function changeOptions({ style: style_options, aliases: aliases_options }= {}){
    if(style_options) Object.assign(style.options, style_options);
    if(aliases_options) Object.assign(aliases.options, aliases_options);
}
export const version= "1.1.0";
/**
 * SVGIcon Custom Element. When created new `<svg-icon>` tag it registers global style – see {@link style}. Also {@link EventFronta} for attributes changes (before element mounitg) is registered there.
 * @extends HTMLElement
 * @public
 * @property {HTMLElement} _icon Current icon (`<use>` tag) reference
 * @property {EventFronta} _onmount_attributes Log events for 
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
     * @memberof SVGIconElement
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
     * Sets `href` of current icon ({@link SVGIconElement} properties)
     * @public
     * @memberof SVGIconElement
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
     * Life cycle callback: This method is called when element is mounted to DOM. It renders icon ({@link SVGIconElement#renderIcon}) and process all cached *attributeChange* events.
     * @public
     * @memberof SVGIconElement
     */
    connectedCallback(){
        this._icon= this.renderIcon();
        this._onmount_attributes.serveAll(args=> this.attributeChangedCallback(...args));
    }
    /**
     * Life cycle callback: Called when element is removed from DOM. It clears icon and listenres.
     * @public
     * @memberof SVGIconElement
     */
    disconnectedCallback(){
        this._onmount_attributes.clear();
        this._onmount_attributes= null;
        this._icon= null;
    }
    /**
     * All properties theirs changes will be cached by {@link SVGIconElement#attributeChangedCallback}
     * @public
     * @memberof SVGIconElement
     */
    static get observedAttributes(){ return [ "use" ]; }
    get use(){ return this.getAttribute("use"); }
    set use(use_new){ return this.setAttribute("use", use_new); }
    /**
     * Life cycle callback: Element atribute change handler (see {@link SVGIconElement.observedAttributes}). It calls {@link SVGIconElement#setIcon} or save events params into {@link SVGIconElement} (if element wasn’t mounted).
     * @public
     * @memberof SVGIconElement
     */
    attributeChangedCallback(...args){
        const [ property, old_value, new_value ]= args;
        if(old_value===new_value||property!=="use") return false;
        if(!this._icon) return this._onmount_attributes.add(args);
        return this.setIcon(new_value);
        
    }
}
customElements.define("svg-icon", SVGIconElement);