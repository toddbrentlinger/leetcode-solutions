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
 * @return {void} Do not return anything, modify root in-place instead.
 * Runtime: 52ms (88.94%)
 * Memory: 44.78MB (30.93%)
 */
var flatten = function(root) {
    if (root === null) { return; }
    
    let currNode = root;
    let stack = [];
    if (currNode.right !== null) {
        stack.push(currNode.right);
    }
    if (currNode.left !== null) {
        stack.push(currNode.left);
    }

    while (stack.length) {
        currNode.right = stack[stack.length - 1];
        currNode.left = null;

        currNode = stack.pop();

        // The right child is pushed before the left child to make sure that 
        // the left subtree is processed first (pre-order traversal).
        if (currNode.right !== null) {
            stack.push(currNode.right);
        }
        if (currNode.left !== null) {
            stack.push(currNode.left);
        }
    }
};