gulp_place("utils_private/*.sub.js", "glob_once");/* global style, EventFronta, createElement, setHref */
gulp_place("utils/*.sub.js", "glob_once");/* global aliases */
export const version= gulp_place("app.version", "variable");
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