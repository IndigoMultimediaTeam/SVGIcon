const aliases= {
    options: { separator: "-" },
    list: null,
    has: function(alias){ return Boolean(this.list) && this.list.has(alias); },
    get: function(alias){ return this.list.get(alias); }
};

export function setAlias(alias, target){
    if(!aliases.list) aliases.list= new Map();
    return aliases.list.set(alias, target);
}
export function removeAlias(alias){
    if(!aliases.list) return false;
    aliases.list.delete(alias);
    if(!aliases.list.size) aliases.list= null;
    return true;
}