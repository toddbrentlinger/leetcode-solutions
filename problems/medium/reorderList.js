/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * Runtime: 70ms (95.77%)
 * Memory: 59.03MB (24.49%)
 * Time Complexity: O(n)
 * Space Complexity: O(n) right-half nodes saved in stack
 */
var reorderList = function(head) {
    // If 1 or 2 nodes in linked list only, return linked list unchanged since 
    // need at least 3 nodes to reorder.
    if (head.next === null || head.next.next === null) {
        return head;
    }

    // If reach here, linked list has at least 3 nodes

    let nodeStack = []; // Stack to hold node (last array index is top of stack)
    let node, fastNode, topStackNode;

    // Use slow/fast pointers to find middle node. Then store all nodes 
    // after in stack.
    node = fastNode = head;
    while (fastNode.next && fastNode.next.next) {
        node = node.next;
        fastNode = fastNode.next.next;
    }

    // Variable 'node' now points to middle node if odd number of nodes OR 
    // left of middle if even number of nodes.

    // Populate stack with right-half nodes of linked list
    while (node !== null) {
        nodeStack.push(node);
        node = node.next;
    }

    // Reorder linked list using stack of right-half nodes of linked list
    node = head;
    while (nodeStack.length > 0) {
        topStackNode = nodeStack.pop();
        // Set top stack node 'next' to current node 'next' node (node originally after current node)
        topStackNode.next = node.next;
        // Set current node 'next' to top stack node
        node.next = topStackNode;
        // Set node to two nodes after (node originally after current node) for next loop
        node = node.next.next;
    }

    // Variable 'node' points to last node of reordered linked list, set 'next' to null
    node.next = null;

    return head;
};

/**
1 node:
2 node:
return linked list unchanged, no modification necessary

3 node:
1->2->3->n
- Create stack of nodes
stack = [1,2,3]
- 

 */