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
 * Runtime: 58ms (77.28%)
 * Memory: 53.60MB (5.17%)
 * Time Complexity: O(n) every tree node traversed once
 * Space Complexity: O(n) worst-case if all left or right child tree
 */
var diameterOfBinaryTree = function(root) {
    return depthOfBinaryTreeRec(root)[1];
};

var depthOfBinaryTreeRec = function(root, depth = 0, maxDiameter = 0) {
    // Base Case: If root is null, return 0 for no depth
    if (root === null) { return [depth - 1, maxDiameter]; }

    // Base Case: If root is leaf (no children), return 1
    if (root.left === null && root.right === null) { return [depth, maxDiameter]; }

    // If reach here, root has at least one child

    let maxDepth = 0;
    let depthLeft, depthRight;

    // Find max depth and max diameter in sub-trees of child nodes

    // Left Child
    [depthLeft, maxDiameter] = depthOfBinaryTreeRec(root.left, depth + 1, maxDiameter);
    if (depthLeft > maxDepth) {
        maxDepth = depthLeft;
    }

    // Right Child
    [depthRight, maxDiameter] = depthOfBinaryTreeRec(root.right, depth + 1, maxDiameter);
    if (depthRight > maxDepth) {
        maxDepth = depthRight;
    }

    // Check if max diameter that goes through current node is max diameter of entire tree so far
    if ((depthLeft + depthRight - 2 * depth) > maxDiameter) {
        maxDiameter = depthLeft + depthRight - 2 * depth;
    }

    return [maxDepth, maxDiameter];
};

/**
- Diameter will always be max depth of left sub-tree plus max depth of right sub-tree at any given node.
- Return from recursive function:
    - Max depth of sub-tree at node
    - Max diameter inside sub-tree at node
 */