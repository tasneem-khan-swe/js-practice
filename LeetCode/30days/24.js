var TimeLimitedCache = function() {
    
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    setTimeout(()=>{
        this.key=key;
        this.value=value
    },duration)
};

TimeLimitedCache.prototype.get = function(key) {
    return this[key]
};

TimeLimitedCache.prototype.count = function() {
    return Object.keys(this).length
};


 const timeLimitedCache = new TimeLimitedCache()
 timeLimitedCache.set(1, 42, 1000); // false
 timeLimitedCache.get(1) // 42
 timeLimitedCache.count() // 1
