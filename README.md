# LRUCache-Leetcode-146

Leetcode Question 146 (Medium)

Techniques Used in Question:
Hashmap, Design

[Link to Question](https://leetcode.com/problems/lru-cache/)

Notes: In the code are two separate implementations of a LRU (Least Recently Used) Cache. The first takes advantage of 'map.keys()', which returns the keys in a hashmap in the order they were inserted. Personally, I consider this cheating, since a hashmap is initially unsorted. Thus, the second solution uses a hashmap as well as a doubly-linked-list to keep track of the order of the nodes.
