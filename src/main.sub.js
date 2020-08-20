gulp_place("utils_private/*.sub.js", "glob_once");/* global style, EventFronta, createElement, setHref */
gulp_place("utils/*.sub.js", "glob_once");/* global aliases */
export default class SVGIconElement extends HTMLElement{
    constructor(){
        super();
        style.create();
        /* instance vars */
        this._icon= null;
        this._onmount_attributes= new EventFronta();
    }
    renderIcon(){
        const svg= createElement("svg");
        const icon= createElement("use");
        svg.appendChild(icon);
        this.appendChild(svg);
        return icon;
    }
    setIcon(href){
        if(!href||!this._icon) return false;
        const { separator }= aliases.options;
        const [ alias_candidate, ...rest ]= href.split(separator);
        setHref(
            this._icon,
            aliases.has(alias_candidate) ? aliases.get(alias_candidate)+rest.join(separator) : href
        );
    }
    /* Life cycle callbacks */
    connectedCallback(){
        this._icon= this.renderIcon();
        this._onmount_attributes.serveAll(args=> this.attributeChangedCallback(...args));
    }
    disconnectedCallback(){
        this._icon= null;
        this._onmount_attributes= null;
    }
    static get observedAttributes(){ return [ "use" ]; }
    attributeChangedCallback(...args){
        const [ property, old_value, new_value ]= args;
        if(old_value===new_value||property!=="use") return false;
        if(!this._icon) return this._onmount_attributes.add(args);
        return this.setIcon(new_value);
        
    }
}
customElements.define("svg-icon", SVGIconElement);