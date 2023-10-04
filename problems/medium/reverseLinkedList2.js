/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * Runtime: 37ms (99.30%)
 * Memory: 42.14MB (46.03%)
 */
var reverseBetween = function(head, left, right) {
    let beforeReversedListNode = left > 1 ? head : null;;
    let afterReversedListNode;
    let prevNode, currNode, nextNode;
    let i = 1;
    
    // Find node before reversed section (null if beginning of list is reversed)
    while (i < left - 1) {
        beforeReversedListNode = beforeReversedListNode.next;
        i++;
    }
    
    // Find node after reversed section (null if end of list is reversed)
    afterReversedListNode = beforeReversedListNode || head;
    while (i < right + 1 && afterReversedListNode) {
        afterReversedListNode = afterReversedListNode.next;
        i++;
    }

    // Setup to reverse specified section of list
    prevNode = afterReversedListNode; // Initialized to after node so first reversed node points to it
    currNode = beforeReversedListNode ? beforeReversedListNode.next : head;
    
    // Reverse specified section of list
    while (currNode && currNode !== afterReversedListNode) {
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    
    // Set before node to point to last node of pre-reversed section, now first node
    if (beforeReversedListNode) {
        beforeReversedListNode.next = prevNode;
    } else {
        head = prevNode;
    }
    
    return head;
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var createLinkedListFromArr = function(arr) {
    if (!arr.length) { return null; }

    let head = new ListNode(arr[0]);
    let currNode = head;
    for (let i = 1; i < arr.length; i++) {
        currNode.next = new ListNode(arr[i]);
        currNode = currNode.next;
    }

    return head;
};

var printLinkedList = function(head) {
    if (!head) { return 'null'; }

    let str = '';
    let currNode = head;
    while (currNode) {
        str += currNode.val;
        currNode = currNode.next;
        if (currNode) { str += '->'; }
    }
    console.log(str);
};

reverseBetween(createLinkedListFromArr([1,2,3,4,5]), 2, 4);
reverseBetween(createLinkedListFromArr([5]), 1, 1);
reverseBetween(createLinkedListFromArr([3,5]), 1, 2);

/*
1,2,3,4,5 left=2 right=4
1,4,3,2,5
need:
b=1 (before reverse section)
a=5 (after reverse section)

1,2,3,4,5

b=head=1 since left > 1 
- if left is 1, beginning of list will be reversed
  and need to set new head (b=null)

i=1
while i < left - 1 (i < 1)
end

a=b=1 since b is NOT null

while i <= right + 1 (i <= 5) AND a is NOT null
    a=a.next
    i++

i=1 a=1
i=2 a=2
i=3 a=3
i=4 a=4
i=5 a=5
end

now b=1 a=5

reverse section:
prev=a=5
curr=b.next=2
next

while curr is NOT null AND curr NOT a (a=5)
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
...
1->2->3->4->5
b  c        a

loop
1 5<-2 3->4->5
b    p cn    a

loop
1 5<-2<-3 4->5
b       p cn a  

loop
1 5<-2<-3<-4 5
b          p cna
end since curr==a

1 4->3->2->5
b p        a

set b.next to prev
1->4->3->2->5

----------------------------------------------
3,5 left=1 right=2
5,3

 */