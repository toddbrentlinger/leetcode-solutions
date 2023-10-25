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
 * @param {number} low
 * @param {number} high
 * @return {number}
 * Runtime: 118ms (80.10%)
 * Memory: 96.02MB (87.01%)
 * Time Complexity: O(n)
 * Space Complexity: O(H) where H is height of the tree
 */
var rangeSumBST = function(root, low, high) {
    // Base Case: If root is null, return 0
    if (root === null) { return 0; }

    // If root val is less than low, just return range sum of right sub-tree
    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    }
    // Else If root val more than high, just return range sum of left sub-tree 
    else if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    }
    // Else root val is in range, add root val to range sum of both sub-trees
    else {
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    }
};