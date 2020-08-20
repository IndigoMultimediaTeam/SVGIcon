/**
 * Grouping SVGIcon code
 * @namespace svgicon
 */
gulp_place("utils_private/*.sub.js", "glob_once");/* global style, EventFronta, createElement, setHref */
gulp_place("utils/*.sub.js", "glob_once");/* global aliases */
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