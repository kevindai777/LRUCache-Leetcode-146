//Java Solution

class LRUCache {
    
    class DLinkedNode {
        int key;
        int val;
        DLinkedNode prev;
        DLinkedNode next;
    }
    
    private void remove(DLinkedNode node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    private void addToLast(DLinkedNode node) {
        node.next = tail;
        node.prev = tail.prev;
        tail.prev.next = node;
        tail.prev = node;
    }
    
    private Map<Integer, DLinkedNode> cache = new HashMap<>();
    private int size;
    private int capacity;
    private DLinkedNode head, tail;

    public LRUCache(int capacity) {
        this.size = 0;
        this.capacity = capacity;
        head = new DLinkedNode();
        tail = new DLinkedNode();
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        DLinkedNode node = cache.get(key);
        if (node == null) {
            return -1;
        }
        
        remove(node);
        addToLast(node);
        return node.val;
    }
    
    public void put(int key, int value) {
        DLinkedNode node = cache.get(key);
        
        if (node != null) {
            DLinkedNode node2 = cache.get(key);
            node2.val = value;
            remove(node2);
            addToLast(node2);
        } else {
            if (cache.size() == this.capacity) {
                cache.remove(this.head.next.key);
                remove(this.head.next);
                this.size--;
            }
            
            DLinkedNode newNode = new DLinkedNode();
            newNode.key = key;
            newNode.val = value;
            cache.put(key, newNode);
            addToLast(newNode);
            this.size++;
        }
    }
}