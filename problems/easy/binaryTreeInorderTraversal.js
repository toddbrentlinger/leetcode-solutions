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
 * Runtime: 45ms (89.37%)
 * Memory: 42MB (65.5%)
 */
var inorderTraversal = function(root) {
    if (root === null) { return []; }

    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};