/**
 * @namespace
 * @private
 * @global
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