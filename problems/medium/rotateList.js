/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Runtime: 56ms (77.98%)
 * Memory: 43.86MB (70.27%)
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null || k === 0) { return head; }

    let slow = head, fast = head, length = 1;

    // Find length of linked list
    while (slow.next) {
        length++;
        slow = slow.next;
    }

    // Adjust k to prevent unnecessary loops
    k %= length;

    // Find initial fast pointer, k nodes from head
    while (k > 0) {
        fast = fast.next ? fast.next : head;
        k--;
    }

    // Reset slow to head
    slow = head;

    // Increment slow and fast until fast reaches end of list
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // Set fast.next to head
    fast.next = head;

    // Set new head to slow.next
    head = slow.next;

    // Set slow.next to null for new end of list
    slow.next = null;

    return head;
};