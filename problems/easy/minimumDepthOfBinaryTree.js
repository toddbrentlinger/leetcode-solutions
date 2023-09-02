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
 * Runtime: 166ms (94.29%)
 * Memory: 99.49MB (52.01%)
 */
var minDepth = function(root) {
    if (root === null) { return 0; }

    let depth = 0;
    let stack = [root];
    let node;
    let i;

    while (stack.length) {
        depth++;

        for (i = 0; i < stack.length; i++) {
            node = stack[i];
            if ((node.left === null) && (node.right === null)) {
                return depth;
            }
        }

        for (i = stack.length - 1; i >= 0; i--) {
            node = stack.splice(i, 1)[0];
            if (node.left) { stack.push(node.left); }
            if (node.right) { stack.push(node.right); }
        }
    }

    return depth;
};

function TreeNode(val, left, right) {
    return {
        val: (val===undefined ? 0 : val),
        left: (left===undefined ? null : left),
        right: (right===undefined ? null : right),
    };
}

minDepth(
    TreeNode(2, null, 
        TreeNode(3, null, 
            TreeNode(4, null, 
                TreeNode(5, null, 
                    TreeNode(6)
                )
            )
        )
    )
);

minDepth(
    TreeNode(3, TreeNode(9), TreeNode(20, 
        TreeNode(15), TreeNode(7)
    ))
);