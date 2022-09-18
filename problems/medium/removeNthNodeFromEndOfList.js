'use strict';

import { createLinkedListFromArray, convertLinkedListToArray } from '../../data-structures/linkedList.js';

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let currNode = head;
    let nthPrevNode = null;

    while (currNode) {
        if (n >= 0) {
            n--;
        }

    }

    // Loop through each node, keeping nth node before current node in loop.
    while (currNode) {
        // If n reaches zero, increment nthPrevNode to it's next node
        if (n >= 0) {
            // Decrement n acting as a counter of the number of nodes behind currNode.
            n--;
        } else { // n <= 0
            // When n reaches zero, can start incrementing nthPrevNode to it's next node.
            // At end of while loop, nthPrevNode should be n nodes from end.
            nthPrevNode = nthPrevNode.next;
        }

        // Increment currNode to it's next node
        currNode = currNode.next;
    }

    // When reach end of linked list, remove nthPrevNode
    if (nthPrevNode.next) {
        nthPrevNode.next = nthPrevNode.next.next;
    } else {
        nthPrevNode.next = null;
    }

    // Return head
    return head;
};

var removeNthFromEnd = function (head, n) {
    let currNode = head;
    let nthPrevNode = head;

    // Loop through each node, keeping nth node before current node in loop.
    while (currNode) {
        // If n reaches zero, increment nthPrevNode to it's next node
        if (n >= 0) {
            // Decrement n acting as a counter of the number of nodes behind currNode.
            n--;
        } else { // n <= 0
            // When n reaches zero, can start incrementing nthPrevNode to it's next node.
            // At end of while loop, nthPrevNode should be n nodes from end.
            nthPrevNode = nthPrevNode.next;
        }

        // Increment currNode to it's next node
        currNode = currNode.next;
    }

    // When reach end of linked list, remove nthPrevNode
    if (nthPrevNode.next) {
        nthPrevNode.next = nthPrevNode.next.next;
    } else {
        nthPrevNode.next = null;
    }

    // Return head
    return head;
};

var removeNthFromEndUnitTest = function (llistArrInitial, n, llistArrExpected) {
    const llistFinal = removeNthFromEnd(createLinkedListFromArray(llistArrInitial), n));
    console.assert(
        convertLinkedListToArray(llistFinal) == llistArrExpected,
        {
            llist: convertLinkedListToArray(llistFinal),
            expectedOutput: llistArrExpected,
        }
    );
};

var removeNthFromEndUnitTestAll = function () {
    removeNthFromEndUnitTest([1, 2, 3, 4, 5], 2, [1, 2, 3, 5]);
    removeNthFromEndUnitTest([1], 1, []);
    removeNthFromEndUnitTest([1, 2], 2, [1]);
};
