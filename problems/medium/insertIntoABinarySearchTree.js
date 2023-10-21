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
 * Runtime: 83ms (93.85%)
 * Memory: 52.84MB (54.53%)
 * Time Complexity: O(H) where H is height of BST
 * Space Complexity: O(1)
 */
var insertIntoBST = function(root, val) {
    const nodeToAdd = new TreeNode(val);

    // If tree is empty, return node as root
    if (!root) {
        root = nodeToAdd;
        return root;
    }

    // Find node to add with available child
    let node = root;
    while (true) {
        if (val > node.val) {
            if (!node.right) {
                node.right = nodeToAdd;
                break;
            }
            node = node.right;
        } else {
            if (!node.left) {
                node.left = nodeToAdd;
                break;
            }
            node = node.left;
        }
    }

    return root;
};