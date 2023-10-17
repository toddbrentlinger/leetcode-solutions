// ----------------------------------------------------------------------------
// Array
// ----------------------------------------------------------------------------

/**
 * @param {string} homepage
 * Runtime: 143ms (92.08%)
 * Memory: 51.23MB (85.21%)
 */
var BrowserHistory = function(homepage) {
    this.list = [homepage];
    this.curr = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.list[++this.curr] = url;
    this.list.splice(this.curr + 1);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.curr = Math.max(0, this.curr - steps);
    return this.list[this.curr];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.curr = Math.min(this.list.length - 1, this.curr + steps);
    return this.list[this.curr];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// ----------------------------------------------------------------------------
// Doubly Linked List
// ----------------------------------------------------------------------------

/**
 * @param {string} homepage
 * Runtime: 152ms (67.44%)
 * Memory: 51.70BM (64.06%)
 */
var BrowserHistory = function(homepage) {
    this.curr = new BrowserHistoryNode(homepage);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    // Create node with prev pointing to this.curr 
    // AND next is null to clear forward history
    const nodeToAdd = new BrowserHistoryNode(url, this.curr);

    this.curr.next = nodeToAdd;
    this.curr = nodeToAdd;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    let node = this.curr;
    // Step back steps amount OR until reach beginning of history
    while (steps > 0 && node.prev) {
        node = node.prev;
        steps--;
    }
    this.curr = node;
    return node.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let node = this.curr;
    // Step forward steps amount OR until reach end of history
    while (steps > 0 && node.next) {
        node = node.next;
        steps--;
    }
    this.curr = node;
    return node.url;
};

/**
 * @param {string} homepage
 * @param {BrowserHistoryNode|null} prev
 * @param {BrowserHistoryNode|null} next
 */
var BrowserHistoryNode = function(url, prev = null, next = null) {
    this.url = url;
    this.prev = prev;
    this.next = next;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

/**
h
*

visit(a)
h->a
   *

visit(b)
- Set curr.next=b
- Set curr = b
h->a->b
      *

 */