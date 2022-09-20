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

    while (currNode.next) {
        // Decrement n to act like a counter until need to start changing nthPrevNode.
        if (n > 1) {
            n--;
        } else if (nthPrevNode) {
            // If counter has ended AND nthPrevNode is NOT null, increment nthPrevNode
            // to keep the same number of nodes between it and currNode in while loop.
            nthPrevNode = nthPrevNode.next;
        } else {
            // Else counter has ended AND nthPrevNode is null, set nthPrevNode to head.
            // There are now n nodes between nthPrevNode and currNode.
            nthPrevNode = head;
        }

        // Increment currNode to next at end of every while loop
        currNode = currNode.next;
    }

    // Before changing linked list, make sure counter has ended.
    // If not, there are less nodes in the linked list than the parameter n.
    if (n <= 1) {
        // If nthPrevNode is still null but counter has been reached, 
        // the first node must be skipped. Set new head to second node.
        if (!nthPrevNode) {
            head = head.next;
        } else if (nthPrevNode.next) {
            // If nthPrevNode has two nodes after it, 
            // assign nthPrevNode next to second node after.
            nthPrevNode.next = nthPrevNode.next.next;
        } else {
            // Else nthPrevNode has only one node after it (end of linked list),
            // set nthPrevNode next to null for new end of linked list.
            nthPrevNode.next = null;
        }
    }
    
    return head;
};

var removeNthFromEndUnitTest = function (llistArrInitial, n, llistArrExpected) {
    const llistFinal = removeNthFromEnd(createLinkedListFromArray(llistArrInitial), n);
    console.assert(
        areArraysEqualBasic(convertLinkedListToArray(llistFinal), llistArrExpected),
        {
            llist: convertLinkedListToArray(llistFinal),
            expectedOutput: llistArrExpected,
        }
    );
};

var removeNthFromEndUnitTestAll = function () {
    removeNthFromEndUnitTest([1, 2, 3, 4, 5], 2, [1, 2, 3, 5]);
    removeNthFromEndUnitTest([1], 1, []);
    removeNthFromEndUnitTest([1, 2], 1, [1]);
};
window.removeNthFromEndUnitTestAll = removeNthFromEndUnitTestAll;

var areArraysEqualBasic = function (arr1, arr2) {
    // Compare lengths
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Compare each value
    return arr1.every((item1, index) => item1 == arr2[index]);
};

/*
[1,2,3] n=2 => [1,3]
nthPrev=curr=head={1}, count=0 <= n, increment curr
nthPrev={1}, curr={2}, count=1 <= n, increment curr
nthPrev={1}, curr={3}, count=2 <= n, increment curr
nthPrev={1}, curr=null, end CORRECT

[1,2,3,4,5] n=2 => [1,2,3,5]
nthPrev=curr=head={1}, count=0 <= n, increment curr
nthPrev={1}, curr={2}, count=1 <= n, increment curr
nthPrev={1}, curr={3}, count=2 <= n, increment curr
nthPrev={1}, curr={4}, count=3 > n, increment curr AND nthPrev
nthPrev={2}, curr={5}, count=3 > n, increment curr AND nthPrev
nthPrev={3}, curr=null, end CORRECT

[1,2] n=1 => [1]
nthPrev=curr=head={1}, count=0 <= n, increment curr
nthPrev={1}, curr={2}, count=1 <= n, increment curr
nthPrev={1}, curr=null
Special consideration: Cannot point nthPrev to two ahead since next node is end of list.

[1] n=1 => []
nthPrev=curr=head={1}, count=0 <= n, increment curr
nthPrev={1}, curr=null, count is still less than n

*******************************************************************************
while (curr.next) instead of while (curr)

[1,2] n=2 => [2]
nthPrev=null, curr=head={1}, count=1 < n, increment curr AND count
nthPrev=null, curr={2}, count=2 == n, curr.next is NULL, end loop
- Needs to end with nthPrev=null AND count=n
- Set nthPrev to head and return 2 nodes forward in list
Correct

[1] n=1 => []
nthPrev=null, curr=head={1}, count=1, curr.next is null (never enter while loop)
- Since nthPrev is null AND count == n, return null for empty list
- Special consideration: Cannot point nthPrev to two ahead since next node is end of list.
Correct

[1,2,3,4,5] n=2 => [1,2,3,5]
nthPrev=null, curr=head={1}, count=1 < n, increment curr AND count
nthPrev=null, curr={2}, count=2 == n, set nthPrev to head, increment curr
nthPrev=head={1}, curr={3}, increment curr AND nthPrev
nthPrev={2}, curr={4}, increment curr AND nthPrev
nthPrev={3}, curr={5}, curr.next is NULL, end loop
Correct

[1,2,3,4,5] n=2 => [1,2,3,5]
nthPrev=null, curr=head={1}, n=2 > 0, increment curr AND decrement n
nthPrev=null, curr={2}, n=1 == 1, set nthPrev to head, increment curr
nthPrev=head={1}, curr={3}, increment curr AND nthPrev
nthPrev={2}, curr={4}, increment curr AND nthPrev
nthPrev={3}, curr={5}, curr.next is NULL, end loop
Correct
 */
