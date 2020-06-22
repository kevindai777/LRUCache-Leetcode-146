//Objective is to design an LRU with a 'get' and 'put' method. If the 
//cache cannot 'get' a certain key, it returns -1. If the cache goes
//over it's capacity, it pushes out it's least recently used key.


//Design of an LRUCache using a dictionary. It has an O(1) operation for
//getting and putting key and value pairs in.

class LRUCache {
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
    }

    get(key) {
        if (!this.cache.has(val)) {
            return -1
        }
        let value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, value)
        return this.cache.get(key)
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }
        this.cache.set(key, value)

        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value)
        }
    }
}

let newCache = new LRUCache(3)
newCache.put(1, 1)
newCache.put(2, 2)
newCache.put(3, 3)
newCache.put(4, 4)
return newCache