"use strict";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let currNode = head;
    let prevNode = null;
    while (currNode !== null) {
        // If current node holds the value
        if (currNode.val == val) {
            // If first node
            if (prevNode == null) {
                // Assign new head
                head = currNode.next;
                // Leave prevNode as null
            } else { // Else middle or end node
                // Assign prevNode.next to currNode.next
                prevNode.next = currNode.next;
                // Set prevNode to currNode for next loop
                // Leave prevNode as current value
            }
        } else { // Else current node does NOT hold value
            // Set prevNode to currNode for next loop
            prevNode = currNode;
        }
        // Set currNode to next in linked list for next loop
        currNode = currNode.next;
    }
    return head;
};

var createLinkedListFromArray = function (arr) {
    let head, newNode, prevNode;
    arr.forEach(val => {
        newNode = new Node(val);
        if (head == undefined) {
            head = newNode;
        } else {
            prevNode.next = newNode;
        }
        prevNode = newNode;
    });
    return head;
};

var convertLinkedListToArray = function (head) {
    let arr = [];
    let currNode = head;
    while (currNode !== null) {
        arr.push(currNode.val);
        currNode = currNode.next;
    }
    return arr;
}

var removeElementsUnitTestSingle = function (valArray, valToRemove, expectedOutput) {
    let head = createLinkedListFromArray(valArray);
    if (removeElements(head, valToRemove) !== expectedOutput) {
        console.log(`Test Failed!\nList: ${valArray}\nVal To Remove: ${valToRemove}\nExpected Output: ${expectedOutput}\nActual Output: ${convertLinkedListToArray(head)}`);
        return false;
    }
    return true;
};

var removeElementsUnitTests = function () {
    let head;

    // [1,2,6,3,4,5,6] val=6 output=[1,2,3,4,5]
    removeElementsUnitTestSingle([1, 2, 6, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5])

    // [7,7,7,7] val=7 output=[]
    removeElementsUnitTestSingle([7, 7, 7, 7], 7, [])

    // [1,2,2,1] val=2 output=[1,1]
    removeElementsUnitTestSingle([1, 2, 2, 1], 2, [1, 1])
};