"use strict";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Merge two sorted linked lists and return it as a new sorted list. 
 * The new list should be made by splicing together the nodes of the first 
 * two lists.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // Dummy first node to hang the result on
    let dummyNode = new ListNode();

    // Tail node initialized to dummy node
    let tail = dummyNode;

    while (true) {
        // If reaches either list end, add rest of other list to end
        if (l1 === null) {
            tail.next = l2;
            break;
        }
        if (l2 === null) {
            tail.next = l1;
            break;
        }

        /* Compare the val of the two lists. Whichever list's data
        is smaller, append it into tail and advance the head to the
        next node. */
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }

        // Advance the tail
        tail = tail.next;
    }
    return dummyNode.next;
};