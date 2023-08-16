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
 */
var isSymmetric = function(root) {
    let leftStack = [root.left];
    let rightStack = [root.right];
    let leftSubNode, rightSubNode;

    while (leftStack.length && rightStack.length) {
        leftSubNode = leftStack.pop();
        rightSubNode = rightStack.pop();

        // If both nodes are NOT null
        if (leftSubNode && rightSubNode) {
            // If stack top node vals are NOT equal, return false
            if (leftSubNode.val !== rightSubNode.val) {
                return false;
            }

            // Add left then right nodes to left stack
            leftStack.push(leftSubNode.left, leftSubNode.right);

            // Add right then left nodes to right stack
            rightStack.push(rightSubNode.right, rightSubNode.left);
        }
        // Else if both nodes are null 
        else if (!leftSubNode && !rightSubNode) {
            continue;
        }
        // Else only one node is null, cannot be symmetric 
        else {
            return false;
        }
    }

    // Return false if some nodes left in either stack
    if (leftStack.length || rightStack.length) { return false; }

    return true;
};
