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
 * @param {number} key
 * @return {TreeNode}
 * Runtime: 72ms (93.16%)
 * Memory: 50.91MB (46.19%)
 * Time Complexity: O(H) where H is height of BST
 * Space Complexity: O(H) if include call stack from recursive calls
 */
var deleteNode = function(root, key) {
    // Base Case
    if (root === null) { return root; }
    
    // If key is less than root node's value
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    // Else if key is more than root node's value 
    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    // Else key is equal to root node's value
    else {
        // If matching node is leaf node (0-children)
        if (root.left === null && root.right === null) {
            return null;
        }
        // Else if matching node has ONLY right node (1-child)
        else if (root.left === null) {
            return root.right;
        }
        // Else if matching node has ONLY left node (1-child)
        else if (root.right === null) {
            return root.left;
        }
        // Else matching node has 2-children
        else {
            // Find inorder successor (min value in right sub-tree)
            let succParent = root;
            let succ = root.right;
            while (succ.left !== null) {
                succParent = succ;
                succ = succ.left;
            }

            // Delete inorder successor
            // If inorder successor is first node in sub-tree (succParent is still root)
            // assign root.right to first right pointer of right sub-tree
            if (succParent === root) {
                succParent.right = succ.right;
            } 
            // Else assign successor parent left to successor right
            else {
                succParent.left = succ.right;
            }

            // Copy successor val to root val
            root.val = succ.val;
        }
    }

    return root;
};