/* jshint node: true */
/* global define, self */
(function (root, factory) {
    var depends= [];
    var getDep;
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(depends, factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        getDep= function(name){ return require(name); };
        module.exports = factory.apply(root, depends.map(getDep));
    } else {
        // Browser globals (root is window)
        getDep= function(name){ return root[name]; };
        root.SVGIcon = factory.apply(root, depends.map(getDep));
    }
}(typeof self !== 'undefined' ? self : this, function (/* ..._dependencies */) {
    "use strict";
    var _dependencies= Array.prototype.slice.call(arguments);
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
     * @private
     * @global
     * @param {SVGUseElement} element
     * @param {String} value
     */
    const setHref= (element, value)=> element.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", value);
    /**
     * @namespace
     * @private
     * @global
     */
    const style= {
        /**
         * Contains options for generating default styles for `<svg-icon>`
         * @memberof style
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
    
    function setAlias(alias, target){
        if(!aliases.list) aliases.list= new Map();
        return aliases.list.set(alias, target);
    }
    function removeAlias(alias){
        if(!aliases.list) return false;
        aliases.list.delete(alias);
        if(!aliases.list.size) aliases.list= null;
        return true;
    }
    function changeOptions({ style: style_options, aliases: aliases_options }= {}){
        if(style_options) Object.assign(style.options, style_options);
        if(aliases_options) Object.assign(aliases.options, aliases_options);
    }
    /**
     * SVGIcon Custom Element
     * @extends HTMLElement
     * @public
     * @property {HTMLElement} _icon Current icon (`<use>` tag) reference
     * @property {EventFronta} _onmount_attributes Log events for 
     */
    class SVGIconElement extends HTMLElement{
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
            this._icon= null;
            this._onmount_attributes= null;
        }
        static get observedAttributes(){ return [ "use" ]; }
        /**
         * Life cycle callback: Element atribute change handler (in fact `use` only). It calls {@link SVGIconElement#setIcon} or save events params into {@link SVGIconElement} (if elemnt wasn’t mounted).
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
    return { setAlias, removeAlias, changeOptions, SVGIconElement };
}));