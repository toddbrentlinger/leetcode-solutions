"use strict";

import { createLinkedListFromArray, convertLinkedListToArray } from '../../data-structures/linkedList.js';

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null)
        return false;

    let slowNode = head;
    let fastNode = head;
    while (fastNode !== null && fastNode.next !== null) {
        // Increment slowNode by one
        slowNode = slowNode.next;
        // Incrment fastNode by two
        fastNode = fastNode.next.next;

        // If slowNode equals fastNode, return true
        if (slowNode === fastNode)
            return true;
    }
    // If reach here, no cycle
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle03 = function (head) {
    if (head === null || head.next === null)
        return false;

    let slowNode = head;
    let fastNode = head.next;
    while (fastNode !== null) {
        // If slowNode equals fastNode, return true
        if (slowNode === fastNode)
            return true;
        // Increment slowNode by one
        slowNode = slowNode.next;
        // Incrment fastNode by two
        fastNode = fastNode.next !== null ? fastNode.next.next : null;
    }
    // If reach here, no cycle
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle02 = function (head) {
    if (head === null)
        return false;

    let nodes = new Set(); // Set to hold all unique nodes in linked list
    while (head !== null) {
        // If head is already in nodes set, return true
        if (nodes.has(head))
            return true;
        // Else add head to nodes set
        nodes.add(head);
        // Increment head in list
        head = head.next;
    }
    // If reach this point, no cycle
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle01 = function (head) {
    if (head === null)
        return false;

    let nodes = new Set(); // Set to hold all unique nodes in linked list
    let currNode = head;
    while (currNode !== null) {
        // If currNode is already in nodes set, return true
        if (nodes.has(currNode))
            return true;
        // Else add currNode to nodes set
        nodes.add(currNode);
        // Increment currNode in list
        currNode = currNode.next;
    }
    // If reach this point, no cycle
    return false;
};

function hasCycleUnitTestSingle(head, expectedTruthy) {
    if (hasCycle(head) !== expectedTruthy) {
        console.log(`Test Failed!\nList: ${convertLinkedListToArray(head)}\nExpected Truthy: ${expectedTruthy}`);
    }
}

function hasCycleUnitTests() {
    let head, lastNode;

    // [1, 2, 3, 4, 5] - No cycle
    head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    hasCycleUnitTestSingle(head, false);
    // Make cycle by making node with val=5 point next to node with val=3
    // [1, 2, 3, 4, 5] - Cycle 5->3
    lastNode = head;
    while (lastNode.next !== null) {
        lastNode = lastNode.next;
    }
    lastNode.next = head.next.next;
    hasCycleUnitTestSingle(head, true);

    // []
    head = null;
    hasCycleUnitTestSingle(head, false);

    // [1] - No Cycle
    head = createLinkedListFromArray([1]);
    hasCycleUnitTestSingle(head, false);
    // [1] - Cycle 1->1
    head.next = head;
    hasCycleUnitTestSingle(head, true);

    // [1,2] - No Cycle
    head = createLinkedListFromArray([1, 2]);
    hasCycleUnitTestSingle(head, false);
    // [1,2] - Cycle 2->1
    head.next.next = head;
    hasCycleUnitTestSingle(head, true);
}

hasCycleUnitTests();