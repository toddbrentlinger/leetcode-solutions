/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * Runtime: 48ms (99.15%)
 * Memory: 52.75MB (68.35%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var hasCycle = function (head) {
    // Base Case: If linked list is empty, cannot be cycle
    if (head === null)
        return false;

    let slowNode = head; // Incremented by one every loop
    let fastNode = head; // Incremented by two every loop

    // If fastNode ever equals slowNode, linked list is a cycle.
    // If fastNode reaches end of linked list, is NOT a cycle.

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
 * Runtime: 69ms (32.52%)
 * Memory: 53.04MB (48.88%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var hasCycle04 = function(head) {
    // Base Case: If head is empty or single node, linked list cannot be cycle
    if (head === null || head.next === null) {
        return false;
    }

    // If reach here, at linked list has at least 2 nodes
    let slow = head;
    let fast = head.next;

    while (fast !== null) {
        // If slow and fast point to same node, linked list must be a cycle
        if (slow === fast) {
            return true;
        }

        // Increment slow pointer by one
        slow = slow.next;

        // Increment fast pointer by two, check if possible first
        fast = (fast.next !== null) ? fast.next.next : null;
    }

    // If reach here, no cycle found
    return false;
};

/**
Fast Pointer/Slow Pointer
- Slow pointer is incremented by 1
- Fast pointer is incremented by 2
- If slow pointer and faster pointer ever point to the same node, list must be a cycle.

_______________________________________________________________________________

1->2->cycle
s  f

s +1
f +2

1->2->cycle
  sf
slow and fast point to same node, list is cycle

_______________________________________________________________________________

1->2->3->cycle
s  f

s +1
f +2

1->2->3->cycle
f  s

s +1
f +2

1->2->3->cycle
     sf
slow and fast point to same node, list is cycle
 */

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

export { hasCycle }