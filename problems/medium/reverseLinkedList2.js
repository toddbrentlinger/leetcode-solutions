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
 */
var reverseBetween = function(head, left, right) {
    let beforeReversedListNode = left > 1 ? head : null;;
    let afterReversedListNode = null;
    let prevNode, currNode, nextNode;
    let i = 1;
    debugger;
    while (i < left - 1) {
        beforeReversedListNode = beforeReversedListNode.next;
        i++;
    }
    debugger;
    afterReversedListNode = beforeReversedListNode;
    while (i < right + 1 && afterReversedListNode) {
        afterReversedListNode = afterReversedListNode.next;
        i++;
    }

    prevNode = afterReversedListNode;
    currNode = beforeReversedListNode.next;
    debugger;
    while (currNode && currNode !== afterReversedListNode) {
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    debugger;
    beforeReversedListNode.next = prevNode;
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

 */