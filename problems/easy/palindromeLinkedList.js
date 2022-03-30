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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // Use tortoise-hare algorithm with slowPtr and fastPtr to find middle of list
    // Save each value in first half of list into array
    // Compare second half of list to array of values in reverse order

    // Base case: Return true if single length list
    if (head.next === null)
        return true;

    let halfSequence = []; // Used to store first half sequence of values
    let slowNode = head; // Slow pointer for tortoise-hare algorithm
    let fastNode = head; // Fast pointer for tortoise-hare algorithm

    // Find middle of linked list using tortoise-hare algorithm with slow and fast pointers
    // and add values sequence from first half
    while (fastNode !== null && fastNode.next !== null) {
        halfSequence.push(slowNode.val);
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }

    // If fastNode is equal to null, it points to one past end of list. List has even number of nodes 
    // and slowNode points to middle-right node (no node in exactly middle).
    // If fastNode is NOT equal to null, it points to last node in list. List has odd number of nodes
    // and slowNode points to exact middle node. Need to increment slowNode before comparing first
    // and second halves of list.
    if (fastNode !== null)
        slowNode = slowNode.next;

    // Compare remaining nodes from middle with halfSequence list values
    let index = halfSequence.length - 1; // Initialized to last index of halfSequence array
    while (slowNode !== null && index >= 0) {
        // Return false if values do NOT match
        if (halfSequence[index] !== slowNode.val)
            return false;
        index--; // Decrement index of halfSequence array
        slowNode = slowNode.next; // Increment to next node in linked list
    }
    // If reach here, is palindrome
    return true;
};