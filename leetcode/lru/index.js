// 不用每次都去硬盘查找，在内存中缓存
var LRUCache = function(capacity){
    this.capacity = capacity;
}

LRUCache.prototype.get = function(key){
    return this.key ? this.key:false
}

LRUCache.prototype.set = function(){}