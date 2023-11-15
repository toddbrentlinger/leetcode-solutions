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
 * @return {boolean}
 * Runtime: 56ms (89.60%)
 * Memory: 46.69MB (90.37%)
 * Time Complexity: O(n)
 * Space Complexity: O(logn) with call stack from recursion
 */
var isBalanced = function(root) {
    return getBalancedTreeHeightRec(root) !== -1;
};

/**
 * Returns height of root node if it's balanced, else returns -1 if unbalanced
 * @param {TreeNode} root
 * @return {Number} 
 */
var getBalancedTreeHeightRec = function(root) {
    // If root is null, return 0
    if (root === null) { return 0; }

    // Recursively get balanced height of child node subtrees
    let leftHeight = getBalancedTreeHeightRec(root.left);
    let rightHeight = getBalancedTreeHeightRec(root.right);

    // If either subtree is NOT balanced, return -1
    if (leftHeight === -1 || rightHeight === -1) {
        return -1;
    }

    // If difference of subtree heights is more than 1, root node subtree is NOT balanced
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    // If reach here, root node is balanced, return max height of child node subtrees plus one
    return Math.max(leftHeight, rightHeight) + 1;
};