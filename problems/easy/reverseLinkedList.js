"use strict";

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
var reverseList = function (head) {
    if (head === null)
        return head;

    let prevNode = null;
    let currNode = head;
    let nextNode = null;
    while (currNode !== null) {
        // Assign nextNode to currNode.next as temp value before changing currNode.next
        nextNode = currNode.next;
        // Set currNode.next property to prevNode
        currNode.next = prevNode;
        // Increment nodes
        prevNode = currNode;
        currNode = nextNode;
    }
    // Assign head to prevNode
    head = prevNode;
    return head;
};