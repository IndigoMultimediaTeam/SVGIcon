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