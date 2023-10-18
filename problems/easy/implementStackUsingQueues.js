// ----------------------------------------------------------------------------
// Single Queue
// ----------------------------------------------------------------------------

/**
 * Runtime: 40ms (96.72%)
 * Memory: 41.80MB (54.67%)
 */
var MyStack = function() {
    this.queue = new MyQueue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.enqueue(x);
    for (let i = 0; i < this.queue.size - 1; i++) {
        this.queue.enqueue(this.queue.dequeue());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.empty();
};

var MyQueue = function() {
    this.front = null;
    this.back = null;
    this.size = 0;
};

MyQueue.prototype.enqueue = function(val) {
    const nodeToAdd = new MyQueueNode(val);

    if (this.empty()) {
        this.front = this.back = nodeToAdd;
    } else {
        this.back.next = nodeToAdd;
        this.back = nodeToAdd;
    }

    this.size++;
};

MyQueue.prototype.peek = function() {
    if (this.empty()) { return; }

    return this.front.val;
};

MyQueue.prototype.dequeue = function() {
    if (this.empty()) { return; }

    let val = this.front.val;

    this.front = this.front.next;

    // If queue is now empty, this.front is null, assign new this.back
    if (!this.front) {
        this.back = null;
    }

    this.size--;

    return val;
};

MyQueue.prototype.size = function() {
    return this.size;
};

MyQueue.prototype.empty = function() {
    return this.front === null;
};

var MyQueueNode = function(val, next = null) {
    this.val = val;
    this.next = next;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */