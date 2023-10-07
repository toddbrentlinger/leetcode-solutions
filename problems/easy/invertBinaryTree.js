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
 * @return {TreeNode}
 * Runtime: 46ms (85.16%)
 * Memory: 42.18MB (60.48%)
 */
var invertTree = function(root) {
    if (root === null) { return root; }

    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

    return root;
};