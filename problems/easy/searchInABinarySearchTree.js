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
 * @param {number} val
 * @return {TreeNode}
 * Runtime: 51ms (99.73%)
 * Memory: 49.00MB (61.73%)
 * Time Complexity: O(H) where H is heigt of BST
 * Space Complexity: O(1)
 */
var searchBST = function(root, val) {
    while (root && root.val !== val) {
        root = (val < root.val) ? root.left : root.right;
    }

    return root;
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * Runtime: 62ms (87.20%)
 * Memory: 48.16MB (99.19%)
 * Time Complexity: O(H) where H is heigt of BST
 * Space Complexity: O(1)
 */
var searchBST = function(root, val) {
    while (root) {
        if (val === root.val) { return root; }
        else if (val < root.val) { root = root.left; }
        else { root = root.right; }
    }
    
    return null;
};