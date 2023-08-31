/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Runtime: 44ms (94.25%)
 * Memory: 41.76MB (85.46%)
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) { return head; }

    let oddQueue = []; // Odd index queue of ListNodes
    let evenQueue = []; // Even index queue of ListNodes
    let node = head;
    let isOdd = true; // Flag to add to either odd/even queue

    while (node) {
        // Add to even or odd queue
        isOdd ? oddQueue.push(node) : evenQueue.push(node);
        isOdd = !isOdd; // Toggle isOdd flag for next loop
        node = node.next; // Increment node
    }

    head = evenQueue.shift(); // Initialize head to first even queue ListNode
    node = head;

    while (oddQueue.length || evenQueue.length) {
        if (oddQueue.length) {
            node.next = oddQueue.shift();
            node = node.next;
        }
        if (evenQueue.length) {
            node.next = evenQueue.shift();
            node = node.next;
        }
    }

    node.next = null;

    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Runtime: 47ms (87.37%)
 * Memory: 41.96MB (68.06%)
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) { return head; }
    
    let prev = null;
    let a = head; // First node
    let b = head.next; // Second node

    head = b; // Since prev is null, assign new head to b
    a.next = b.next;
    b.next = a;

    // Initial values for loop
    prev = a;
    a = a.next;

    while (a && a.next) {
        b = a.next;
        prev.next = b;
        a.next = b.next;
        b.next = a;

        // Set up values for next loop
        prev = a;
        a = a.next;
    }

    return head;
};

/*

h-null

- h is null, empty list, return head

-----------------------------------------------------------

h-1-null

- h.next is null, single node list, return head

-----------------------------------------------------------

h-1-2-3-4-n -> h-2-1-4-3-n
p a b

- Since p is null, set head to b(2)

h-2-3-4-n  1-2-3-4-n
p b        a

LOOP
- Set a.next(1.next) to b.next(3)

h-2-3-4-n  1-3-4-n
p b        a

- Set b.next(2.next) to a(1)

h-2-1-3-4-n
p b a

- Set p(null) to a(1)
- Set a to a.next(3)
- Set b to a.next(4)

h-2-1-3-4-n
    p a b

- Since p is NOT null, set p.next(1.next) to b(4)

h-2-1-4-n  3-4-n
    p b    a

LOOP
- Set a.next(3.next) to b.next(n)

h-2-1-4-n  3-n
    p b    a

- Set b.next(4.next) to a(3)

h-2-1-4-3-n
    p b a

- Set p(1) to a(3)
- Set a to a.next(null)

- Since a is now NULL, stop looping

h-2-1-4-3-n
      b p a

while (a !== null)
    b = a.next
    ...
*/