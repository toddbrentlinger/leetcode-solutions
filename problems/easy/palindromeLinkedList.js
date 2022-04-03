"use strict";

//import { createLinkedListFromArray, convertLinkedListToArray } from '/data-structures/linkedList.js';
import * as LinkedList from '/data-structures/linkedList.js';

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
    // Base case: Return true if single length list
    if (head.next === null)
        return true;

    // Find middle of linked list using tortoise-hare algorithm with slow and fast pointers
    let slowNode = head;
    let fastNode = head;
    while (fastNode !== null && fastNode.next !== null) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }

    // Reverse second half of linked list
    // Set middle node next property to null
    // Every node after, set next property to previous node
    // NOTE: Use fastNode to hold temporary reference to next node
    let prevNode = slowNode;
    slowNode = slowNode.next;
    prevNode.next = null;
    while (slowNode !== null) {
        fastNode = slowNode.next;
        slowNode.next = prevNode;
        prevNode = slowNode;
        slowNode = fastNode;
    }
    // prevNode points to last element of original linked list
    // but is now reversed and ends with original middle node

    // By setting fastNode to start of list, can now compare each node from 
    // start/end toward the middle of the list. If any two values are not equal,
    // list is NOT a palindrome.
    fastNode = head;
    while (prevNode !== null) {
        if (prevNode.val !== fastNode.val)
            return false;
        prevNode = prevNode.next;
        fastNode = fastNode.next;
    }
    return true;
};

var isPalindrome01 = function (head) {
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

function isPalindromeUnitTestSingle(head, expectedOutput) {
    console.assert(
        isPalindrome(head) === expectedOutput,
        {
            llist: LinkedList.convertLinkedListToArray(head),
            expectedOutput: expectedOutput,
        }
    );
}

function isPalindromeUnitTests() {
    let llist;

    llist = LinkedList.createLinkedListFromArray([1]);
    isPalindromeUnitTestSingle(llist, true);

    llist = LinkedList.createLinkedListFromArray([1, 2]);
    isPalindromeUnitTestSingle(llist, false);

    llist = LinkedList.createLinkedListFromArray([1, 2, 1]);
    isPalindromeUnitTestSingle(llist, true);

    llist = LinkedList.createLinkedListFromArray([1, 2, 2, 1]);
    isPalindromeUnitTestSingle(llist, true);
}

isPalindromeUnitTests();