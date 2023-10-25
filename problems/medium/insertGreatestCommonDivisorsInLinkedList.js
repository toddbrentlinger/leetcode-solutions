/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Runtime: 87ms (80.27%)
 * Memory: 49.94MB (91.13%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var insertGreatestCommonDivisors = function(head) {
    let node = head;

    // While there's another node after current node to enter new node between
    while (node.next !== null) {
        // Create new node with greatest common divisor with next property set to current looping node's next property
        // Set current looping node's next property to new node
        node.next = new ListNode(
            getGreatestCommonDivisorEuclidean(node.val, node.next.val),
            node.next
        );

        // Move looping node to node after new node, previously next node, and two nodes from current looping node
        node = node.next.next;
    } 
    
    return head;
};

/**
 * Finds greatest common divisor of two numbers using Euclidean algorithm
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
var getGreatestCommonDivisorEuclidean = function(a, b) {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    return a;
};

// ----------------------------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Runtime: 87ms (80.27%)
 * Memory: 50.49MB (53.88%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var insertGreatestCommonDivisors = function(head) {
    let node = head;
    let newNode;

    // While there's another node after current node to enter new node between
    while (node.next !== null) {
        // Create new node with greatest common divisor with next property set to current looping node's next property
        newNode = new ListNode(
            getGreatestCommonDivisorEuclidean(node.val, node.next.val),
            node.next
        );

        // Set current looping node's next property to new node
        node.next = newNode;

        // Move looping node to node after new node, previously next node
        node = newNode.next;
    } 
    
    return head;
};

/**
 * Finds greatest common divisor of two numbers using Euclidean algorithm
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
var getGreatestCommonDivisorEuclidean = function(a, b) {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    return a;
};