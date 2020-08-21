/* global style, aliases */
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