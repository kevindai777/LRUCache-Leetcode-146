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


//O(n) alternative solution using a doubly linked list as a way to keep track of the order of the nodes

class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

class LRUCacheWithLinkedList {
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
        this.size = 0
        this.dummyHead = new Node(0, 0)
        this.dummyTail = new Node(0, 0)
        this.dummyTail.prev = this.dummyHead
        this.dummyHead.next = this.dummyTail 
    }
    
    remove(node) {
        node.next.prev = node.prev 
        node.prev.next = node.next
    }
    
    addToLast(node) {
        node.next = this.dummyTail
        node.prev = this.dummyTail.prev
        this.dummyTail.prev.next = node
        this.dummyTail.prev = node
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1
        }

        let target = this.cache.get(key)
        this.remove(target)
        this.addToLast(target)
        return target.val
    }

    put(key, value) {
        if (this.cache.has(key)) {
            let target = this.cache.get(key)
            target.val = value
            this.remove(target)
            this.addToLast(target)
        } else {
            if (this.size == this.capacity) {
                this.cache.delete(this.dummyHead.next.key)
                this.remove(this.dummyHead.next)
                this.size--
            }

            let newNode = new Node(key, value)
            this.cache.set(key, newNode)
            this.addToLast(newNode)
            this.size++
        }
    }
}
