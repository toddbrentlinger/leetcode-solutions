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
 * Runtime: 49ms (98.59%)
 * Memory: 47.42MB (21.83%)
 * Time Complexity: O(n)
 * Space Complexity: O(n) Assuming call stack from recursion adds to space complexity
 */
var averageOfSubtree = function(root) {
    return averageOfSubTreeRec(root)[2];
};

/**
 * @param {TreeNode} root
 * @return {Array} output
 * @return {Number} output[0] Sum of sub-tree nodes' values
 * @return {Number} output[1] Number of sub-tree nodes
 * @return {Number} output[2] Number of nodes equal to average of subtree
 */
var averageOfSubTreeRec = function(root) {
    // Base Case: Empty node
    if (root === null) {
        return [0, 0, 0];
    }

    // Base Case: Leaf node (0-children)
    // Leaf node value will always equal to average of subtree (single node)
    if (root.left === null && root.right === null) {
        return [root.val, 1, 1];
    }

    // Recursively get total sum, node count, and any nodes equal to average of subtree of each subtree
    let [leftSum, leftCount, leftValidNodes] = averageOfSubTreeRec(root.left);
    let [rightSum, rightCount, rightValidNodes] = averageOfSubTreeRec(root.right);

    // Determine if current node is equal to average of subtree
    let totalSum = leftSum + rightSum + root.val;
    let totalCount = leftCount + rightCount + 1;
    let totalValidNodes = leftValidNodes + rightValidNodes;
    if (Math.floor((totalSum) / (totalCount)) === root.val) {
        totalValidNodes++;
    }
    
    return [totalSum, totalCount, totalValidNodes];
};