"use strict";

// Definition for singly-linked list.
export var ListNode = function (val) {
    this.val = val;
    this.next = null;
};

export var createLinkedListFromArray = function (arr) {
    let head, newNode, prevNode;
    arr.forEach(val => {
        newNode = new ListNode(val);
        if (head == undefined) {
            head = newNode;
        } else {
            prevNode.next = newNode;
        }
        prevNode = newNode;
    });
    return head;
};

export var convertLinkedListToArray = function (head) {
    let arr = [];
    let currNode = head;
    while (currNode !== null) {
        arr.push(currNode.val);
        currNode = currNode.next;
    }
    return arr;
}