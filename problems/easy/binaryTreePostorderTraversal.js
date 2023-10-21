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
 * Runtime: 46ms (84.43%)
 * Memory: 42.3MB (25.32%)
 */
var postorderTraversal = function(root) {
    if (root === null) { return []; }

    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};