/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 * Runtime: 77ms (87.10%)
 * Memory: 56.50MB (9.68%)
 * Time Complexity: O(n) every node traversed once
 * Space Complexity: O(n) if call stack is included (worst case is unbalanced tree: ex. all left child)
 */
var recoverFromPreorder = function(traversal) {
    return recoverFromPreorderRec(traversal)[0];
};

/**
 * @param {string} traversal Reference to traversal string of tree
 * @param {number} i Current index of traversal string to create tree node
 * @param {number} depth Depth of node to create in tree
 * @return {TreeNode}
 */
var recoverFromPreorderRec = function(traversal, i = 0, depth = 0) {
    // Index i points to sequence of numbers, find final number composed
    // of all numbers in sequence.
    let valStr = '';
    while (i < traversal.length && traversal[i] !== '-') {
        valStr += traversal[i];
        i++;
    }

    // Create node after converting value from string to actual number
    let node = new TreeNode(+valStr);

    // Left Child

    // If reached end of traversal, return node without checking for next node depths
    if (i === traversal.length) { return [node, i, depth]; }

    // Check for next node depths
    let nextNodeDepth = 0;
    while (traversal[i] === '-') {
        nextNodeDepth++;
        i++;
    }

    // If next node depth is less than or equal to current node depth, current subtree is complete
    if (nextNodeDepth <= depth) {
        return [node, i, nextNodeDepth];
    }
    
    // If reach here, next node depth is more than current node depth, left child of current node
    [node.left, i, nextNodeDepth] = recoverFromPreorderRec(traversal, i, nextNodeDepth);

    // Right Child

    // If reached end of traversal, return node without checking for next node depths
    if (i === traversal.length) { return [node, i, nextNodeDepth]; }

    // If next node depth is less than or equal to current node depth, current subtree is complete
    if (nextNodeDepth <= depth) {
        return [node, i, nextNodeDepth];
    }
    
    // If reach here, next node depth is more than current node depth, right child of current node
    [node.right, i, nextNodeDepth] = recoverFromPreorderRec(traversal, i, nextNodeDepth);

    return [node, i, nextNodeDepth];
};

/**
- Recursive function that calculates depth of next node by counting '-' 
instances before reaching number. 
If next node is a child of current node
(higher count of '-' instance), call recursive function again and assign
output to current node's left/right property. 
If next node is same depth or ancestor, return from recursive function.
- Recursive function should return a node that is a root for sub-tree
that can then be assigned as child node to another node OR returned if
root node of entire final tree.
- Recursive function will also need reference to traversal string AND
index that starts with '-' instances to calculate depth of node.
- Also return index since left subtree can be created in first half of 
traversal string before right subtree can be created in second half of
traversal string at much higher index.

1-2--3-5--6

func(nextDepth, i)

(0)
func(0, 0) (1)

(1)
depth = 0 
node = {1}
nextDepth = 1 (i from 0 to 2 to point to val of 2)
nextDepth > depth, child of node
node.left = func(nextDepth = 1, i = 2) (2)

(2)
depth = 1
i = 2
node = {2}
nextDepth = 2 (i from 2 to 5 to point to val of 3)
nextDepth > depth, child of node
node.left = func(nextDepth = 2, i = 5) (3)

(3)
depth = 2
i = 5
node = {3}
nextDepth = 1 (i from 5 to 7 to point to val of 5)
nextDepth < depth, ancestor of node
return [node, nextDepth, i] (2)

(2) cont.
node.left = {3} => node = {2, left: 3}
nextDepth = 1
i = 7
nextDepth === depth, sibling of node
return [node, nextDepth, i] (1)

(1) cont.
node.left = {2: left: 3} => node = {1: left: 2}
nextDepth = 1
i = 7
nextDepth > depth (1 > 0), child of node
node.right = func(nextDepth = 1, i = 7)

1-2--3-5--6
 */