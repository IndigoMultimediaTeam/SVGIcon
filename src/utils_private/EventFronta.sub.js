/**
 * Caching "events info" primary for `attributeChangedCallback`. This in fact caches all function arguments to reproduce calling later.
 * @memberof svgicon
 * @inner
 */
class EventFronta{
    /**
     * Refister new event
     * @param {Array} event_info All necessary infos for later
     * @param {String} [method="push"] In fact name of operation in `Array.prototype` (not used any more)
     */
    add(event_info, method= "push"){
        if(typeof this._listeners === "undefined") this._listeners= [];
        this._listeners[method](event_info);
    }
    /**
     * Proccess all cached events
     * @param {Function} callback Function accepting array of cached arguments
     */
    serveAll(callback){
        if(typeof this._listeners === "undefined") return true;
        let fronta_item;
        while((fronta_item= this._listeners.shift()))
            callback(fronta_item);
        this.clear();
    }
    /**
     * Empty cache
     */
    clear(){
        Reflect.deleteProperty(this, "_listeners");
    }
}