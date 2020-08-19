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