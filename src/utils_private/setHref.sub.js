/**
 * Sets 'xlink:href' for given element
 * @private
 * @global
 * @param {SVGUseElement} element
 * @param {String} value
 */
const setHref= (element, value)=> element.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", value);