const aliases= {
    options: { separator: "-" },
    list: null,
    set(alias, target){
        if(!this.list) this.list= new Map();
        return this.list.set(alias, target);
    },
    remove(alias){
        if(!this.list) return false;
        this.list.delete(alias);
        if(!this.list.size) this.list= null;
        return true;
    },
    has: function(alias){ return Boolean(this.list) && this.list.has(alias); },
    get: function(alias){ return this.list.get(alias); }
};
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
export class SVGIcon extends HTMLElement{
    static changeOptions({ style: style_options, aliases: aliases_options }= {}){
        if(style_options) Object.assign(style.options, style_options);
        if(aliases_options) Object.assign(aliases.options, aliases_options);
    }
    static get aliases(){ return aliases; }
    /* instance methods */
    constructor(){
        /* instance vars */
        this._icon= null;
        this._onmount_attributes= null;
        super();
        style.create();
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
customElements.define("svg-icon", SVGIcon);