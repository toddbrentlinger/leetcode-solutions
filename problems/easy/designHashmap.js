// ----------------------------------------------------------------------------
// --------------------------- Hash Function Method ---------------------------  
// ----------------------------------------------------------------------------
// Runtime: 130ms (99.13%) 
// Memory: 50.85MB (96.31%)

var MyHashMap = function() {
    // Maximum 10^4 calls will be made. Each index stores linked list
    this.hash = new Array(10000);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let index = this.getHashIndex(key);
    if (this.hash[index] === undefined) {
        this.hash[index] = new ListNode(key, value);
    } else {
        let currNode = this.hash[index];
        while (currNode) {
            if (currNode.key === key) {
                currNode.value = value;
                return;
            }
            currNode = currNode.next;
        }
        this.hash[index] = new ListNode(key, value, this.hash[index]);
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let index = this.getHashIndex(key);
    let currNode = this.hash[index];

    while (currNode) {
        if (currNode.key === key) {
            return currNode.value;
        }
        currNode = currNode.next;
    }

    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let index = this.getHashIndex(key);
    let currNode = this.hash[index];
    let prevNode = null;

    while (currNode) {
        if (currNode.key === key) {
            if (prevNode) {
                prevNode.next = currNode.next;
            } else {
                this.hash[index] = currNode.next;
            }
            return;
        }

        prevNode = currNode;
        currNode = currNode.next;
    }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.getHashIndex = function(key) {
    return key % this.hash.length;
};

var ListNode = function(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// ----------------------------------------------------------------------------
// ------------------------------- Array Method -------------------------------
// ----------------------------------------------------------------------------

var MyHashMap = function() {
    this.hash = new Array(1000001); // 10^6 possible values
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.hash[key] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return (this.hash[key] === undefined) ? -1 : this.hash[key];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.hash[key] = undefined;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */