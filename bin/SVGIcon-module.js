const createElement= document.createElementNS.bind(document, "http://www.w3.org/2000/svg");
class EventFronta{
    add(listener, method= "push"){
        if(typeof this._listeners === "undefined") this._listeners= [];
        this._listeners[method](listener);
    }
    serveAll(callback){
        if(typeof this._listeners === "undefined") return true;
        let fronta_item;
        while((fronta_item= this._listeners.shift()))
            callback(fronta_item);
        this.clear();
    }
    clear(){
        Reflect.deleteProperty(this, "_listeners");
    }
}
const setHref= (element, value)=> element.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", value);
const style= {
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