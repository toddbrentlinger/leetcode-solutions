"use strict";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // Check for single zero values in list, return other linked list
    if (!l1.next && !l1.val) return l2;
    if (!l2.next && !l2.val) return l1;

    var checkExtraDigit = function (listNode, toAddOne) {
        if (toAddOne) {
            listNode.val++;
            toAddOne = false;
        }
        if (listNode.val >= 10) {
            listNode.val -= 10;
            toAddOne = true;
        }
        return toAddOne;
    }

    const sumList = new ListNode(l1.val + l2.val);
    let sumNode = sumList;
    let toAddOne = false;
    if (sumList.val >= 10) {
        sumList.val -= 10;
        toAddOne = true;
    }
    let firstNode = l1.next;
    let secondNode = l2.next;
    while (firstNode || secondNode || toAddOne) {
        if (firstNode && secondNode) { // Both nodes are NOT null
            sumNode.next = new ListNode(firstNode.val + secondNode.val);
            toAddOne = checkExtraDigit(sumNode.next, toAddOne);
            firstNode = firstNode.next;
            secondNode = secondNode.next;
        } else if (firstNode) { // secondNode is null
            sumNode.next = new ListNode(firstNode.val);
            toAddOne = checkExtraDigit(sumNode.next, toAddOne);
            firstNode = firstNode.next;
        } else if (secondNode) { // firstNode is null
            sumNode.next = new ListNode(secondNode.val);
            toAddOne = checkExtraDigit(sumNode.next, toAddOne);
            secondNode = secondNode.next;
        } else if (toAddOne) { // both nodes are null but need to add extra node
            sumNode.next = new ListNode(1);
            toAddOne = false;
        }
        sumNode = sumNode.next;
    }
    return sumList;
};