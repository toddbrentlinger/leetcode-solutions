'use strict';

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
 */
 var middleNode = function(head) {
    let slowPtr = head; 
    let fastPtr = head;
    // Continue until fast is last item or one past end (=null)
    while (fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next; // Increment slow by one
        fastPtr = fastPtr.next.next; // Increment fast by two
    }
    // Once fast reaches end, slow is in the middle
    return slowPtr;
};