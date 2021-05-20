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