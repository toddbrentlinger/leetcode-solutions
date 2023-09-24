/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * Non-Custom
 * Runtime: 66ms (94.33%)
 * Memory: 49.90MB (54.07%)
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB;

    while (a !== b) {
        a = (a === null) ? headB : a.next;
        b = (b === null) ? headA : b.next;
    }

    return a;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * Custom
 * Runtime: 71ms (84.51%)
 * Memory: 51.22MB (11.65%)
 */
var getIntersectionNode1 = function(headA, headB) {
    let set = new Set();

    let node = headA;
    while (node) {
        set.add(node);
        node = node.next;
    }

    node = headB;
    while (node) {
        if (set.has(node)) { return node; }
        node = node.next;
    }

    return null;
};
