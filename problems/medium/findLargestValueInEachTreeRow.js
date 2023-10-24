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
 * @return {number[]}
 * Runtime: 56ms (96.43%)
 * Memory: 46.42MB (85.71%)
 * Time Complexity: O(n)
 * Space Complexity: O(H) where H is height of tree
 */
var largestValues = function(root) {
    let valArr = [];
    largestValuesRec(root, 0, valArr);
    return valArr;
};

var largestValuesRec = function(root, level, valArr) {
    // Base Case: If root is null, return
    if (root === null) { return;}

    // Set value at index of valArr (level of tree) if root.val is larger than already present
    valArr[level] = (valArr[level] === undefined) 
        ? root.val 
        : Math.max(valArr[level], root.val);

    // Find largest value in next level of tree
    largestValuesRec(root.left, level + 1, valArr);
    largestValuesRec(root.right, level + 1, valArr);
};