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
 * @return {number[]}
 * Runtime: 44ms (92.02%)
 * Memory: 42.09MB (51.71%)
 */
var preorderTraversal = function(root) {
    if (root === null) { return []; }

    let stack = [root];
    let output = [];
    let node;

    while(stack.length) {
        node = stack.pop();
        output.push(node.val);
        if (node.right) { stack.push(node.right); }
        if (node.left) { stack.push(node.left); }
    }

    return output;
};

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
 * @return {number[]}
 * Runtime: 48ms (79.57%)
 * Memory: 42.20MB (40.03%)
 */
var preorderTraversal1 = function(root) {
    if (root === null) { return []; }

    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};