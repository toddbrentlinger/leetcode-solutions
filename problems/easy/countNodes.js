// ----------------------------------------------------------------------------
// -------------------------------- Recursion ---------------------------------
// ----------------------------------------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * Runtime: 71ms (96.14%)
 * Memory: 69.84MB (64.52%)
 */
var countNodes = function(root) {
    if (root === null) { return 0; }

    return 1 + countNodes(root.left) + countNodes(root.right);
};

// ----------------------------------------------------------------------------
// -------------------------------- Iterative ---------------------------------
// ----------------------------------------------------------------------------


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * Runtime: 75ms (92.05%)
 * Memory: 70.09MB (54.76%)
 */
var countNodes = function(root) {
    if (root === null) { return 0; }
    
    let stack = [root];
    let count = 0;
    let node;

    while (stack.length) {
        node = stack.pop();
        count++;
        if (node.left) { stack.push(node.left); }
        if (node.right) { stack.push(node.right); }
    }

    return count;
};