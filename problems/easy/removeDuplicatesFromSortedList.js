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
 var deleteDuplicates = function(head) {
    // Check for empty or single value list
    if (!head || !head.next) return head;
    
    let tempNode = head;
    while (tempNode && tempNode.next) {
        // If next node has equal 'val'
        if (tempNode.val === tempNode.next.val) {
            // Assign tempNode that currently holds first unique value 'next' 
            // to skip the next node
            tempNode.next = tempNode.next.next;
        } else { // Else node has new unique 'val'
            // Assign tempNode to this node with new unique 'val'
            tempNode = tempNode.next;
        }
    }
    return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates01 = function(head) {
    let nodeToCompare = head; // node used to compare 'val' with next nodes
    let tempNode; // node used to find next node with different 'val'
    while (nodeToCompare && nodeToCompare.next) {
        tempNode = nodeToCompare.next;
        // Find next node with different 'val'
        while (tempNode && tempNode.val === nodeToCompare.val) {
            tempNode = tempNode.next;
        }
        // Assign different 'val' tempNode to nodeToCompare 'next' property
        nodeToCompare.next = tempNode;
        // Assign different 'val' tempNode to nodeToCompare for next loop
        nodeToCompare = tempNode;
    }
    return head;
};