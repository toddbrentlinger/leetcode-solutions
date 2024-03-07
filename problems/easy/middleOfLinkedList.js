/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Runtime: 47ms (80.98%)
 * Memory: 48.76MB (46.26%)
 * Time Complexity: O(n) half the nodes are always traversed
 * Space Complexity: O(1)
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head.next;

    while (fast !== null) {
        slow = slow.next;
        fast = (fast.next !== null) ? fast.next.next : null; 
    }
    
    return slow;
};

/**
Two Pointer
- Slow is incremented by one
- Fast is incremented by two
- When fast reaches end, slow should be in middle of list

_______________________________________________________________________________

1->n
s  f
- fast is null, start points to middle

_______________________________________________________________________________

1->2->n
s  f

s +1
f +2

1->2->n
   s  f
- fast is null, start points to middle
- NOTE: fast could only be incremented by one since it originally pointed to last node in list.
Make sure to check if fast can be incremented twice or just once

_______________________________________________________________________________

1->2->3->n
s  f

s +1
f +2

1->2->3->n
   s     f
- fast is null, start points to middle
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let slowPtr = head; 
    let fastPtr = head;
    // Continue until fast is last item or one past end (=null)
    while (fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next; // Increment slow by one
        fastPtr = fastPtr.next.next; // Increment fast by two
    }
    // Once fast reaches end, slow is in the middle
    return slowPtr;
};