/**
 * Runtime: 46ms (83.78%)
 * Memory: 48.93MB (5.11%)
 */

var MyQueue = function() {
    // Values stored in stack where top of stack is front of queue
    this.stack = new MyStack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // Temporary stack used to hold main stack before putting new value on 
    // bottom of main stack
    let tempStack = new MyStack();

    // Move all values from main stack to temp stack. Now in reverse order
    while (!this.stack.isEmpty()) {
        tempStack.push(
            this.stack.pop()
        );
    }

    // Add new value to now empty main stack. Will now be bottom of stack.
    this.stack.push(x);

    // Move all values back from temp stack to main stack so top of stack is 
    // still original first value in queue.
    while (!tempStack.isEmpty()) {
        this.stack.push(
            tempStack.pop()
        );
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // Since the stack has top value as first in queue, return top value popped 
    // from stack
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // Since the stack has top value as first in queue, return top value peeked 
    // from stack
    return this.stack.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // If stack is empty, queue is empty
    return this.stack.isEmpty();
};

var MyStack = function() {
    this.top = null;
    this.size = 0;
};

MyStack.prototype.push = function(x) {
    this.top = new MyStackNode(x, this.top);
    this.size++;
};

MyStack.prototype.peek = function() {
    if (this.isEmpty()) {
        return null;
    }

    return this.top.val;
};

MyStack.prototype.pop = function() {
    if (this.isEmpty()) {
        return null;
    }

    const topVal = this.top.val;
    this.top = this.top.next;
    this.size--;
    return topVal;
};

MyStack.prototype.isEmpty = function() {
    return this.size === 0;
};

var MyStackNode = function(val, next = null) {
    this.val = val;
    this.next = next;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */