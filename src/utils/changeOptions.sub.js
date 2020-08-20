/* global style, aliases */
export function changeOptions({ style: style_options, aliases: aliases_options }= {}){
    if(style_options) Object.assign(style.options, style_options);
    if(aliases_options) Object.assign(aliases.options, aliases_options);
}