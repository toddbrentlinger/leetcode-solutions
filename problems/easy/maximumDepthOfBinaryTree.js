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
 */
var maxDepth = function(root) {
    let depth = 0;

    const checkDepth = (node, currentDepth) => {
        if (depth < currentDepth) {
            depth = currentDepth;
        }

        if (node.left) {
            checkDepth(node.left, currentDepth + 1);
        }

        if (node.right) {
            checkDepth(node.right, currentDepth + 1);
        }
    };

    if (root) {
        checkDepth(root, 1);
    }

    return depth;
};
