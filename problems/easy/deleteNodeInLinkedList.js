'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    // Assign next node's 'val' to current node's 'val'
    node.val = node.next.val;
    // Assign next node's 'next' to current node's 'next'
    node.next = node.next.next;
};

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode02 = function(node) {
    while (node.next.next) {
        node.val = node.next.val; // Assign next node's val to this node
        node = node.next; // Increment node for next loop
    }
    node.val = node.next.val; // Assign last node's 'val' to this new last node
    node.next = null; // Assign 'next' property of this new last node to null
};

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode01 = function(node) {
    while (true) {
        // Assign next node's val to this node
        node.val = node.next.val;
        // If next node is tail node, set this node's 'next' property to null and break loop
        if (!node.next.next) {
            node.next = null;
            break;
        }
        node = node.next; // Increment node for next loop
    }
};