/**
 * Runtime: 83ms (85.34%)
 * Memory: 49.55MB (62.21%)
 */
var MinStack = function() {
    this.head = null; // Points to top of stack
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // If stack is empty, add node with val as minimum
    if (!this.head) {
        this.head = new MinStackNode(val, val);
    }
    // Else stack is NOT empty, add node with minimum of previous node min or current value 
    else {
        this.head = new MinStackNode(val, Math.min(val, this.head.min), this.head);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // Assign new top of stack to second node using current head.prev
    this.head = this.head.prev;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Return top of stack node's value
    return this.head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // NOTE: If top stack node is minimum of stack, next node will have new
    // minimum value of stack when it was initially pushed
    return this.head.min;
};

var MinStackNode = function(val, min, prev = null) {
    this.val = val; // Value held by node
    this.min = min; // Minimum value of node AND rest of stack underneath
    this.prev = prev; // Reference to prev node underneath current node in stack
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */