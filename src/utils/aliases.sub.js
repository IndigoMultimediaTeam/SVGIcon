/**
 * Options for setting/getting/using aliases (mainly `separator`). Changes affect only newly created tags `<svg-icon>` since modification!
 * @typedef {object} aliases_options
 * @property {string} [separator=-] Separator for aliases: `alias`**separator**`icon_name`.
 */
/**
 * Grouping alises functionalities
 * @namespace
 * @private
 * @global
 */
const aliases= {
    /**
     * @property {aliases_options} options
     * @memberof aliases
     * @public
     */
    options: { separator: "-" },
    /**
     * Contains all registered aliases
     * @property {Map|null} list
     * @private
     */
    list: null,
    /**
     * Existence check
     * @memberof aliases
     * @public
     * @param {string} alias Alias name
     * @returns {boolean}
     */
    has: function(alias){ return Boolean(this.list) && this.list.has(alias); },
    /**
     * Get coresponding path for given `alias` name. Use {@link aliases.has} before for existence check!
     * @memberof aliases
     * @public
     * @param {string} alias Alias name
     */
    get: function(alias){ return this.list.get(alias); }
};
/**
 * Registers new alias – this affect only newly created tags `<svg-icon>` since modification!
 * @global
 * @public
 * @param {string} alias Alias name
 * @param {string} target Corresponding full path
 * @example
 * setAlias("icon", "icons_file.svg#");
 * document.body.innerHTML+= '<svg-icon use="icon-icon_name"></svg-icon>';
 * //is equivalent to
 * document.body.innerHTML+= '<svg-icon use="icons_file.svg#icon_name"></svg-icon>';
 */
export function setAlias(alias, target){
    if(!aliases.list) aliases.list= new Map();
    return aliases.list.set(alias, target);
}
/**
 * Removes registered alias – this affect only newly created tags `<svg-icon>` since modification!
 * @global
 * @public
 * @param {string} alias Alias name
 */
export function removeAlias(alias){
    if(!aliases.list) return false;
    aliases.list.delete(alias);
    if(!aliases.list.size) aliases.list= null;
    return true;
}