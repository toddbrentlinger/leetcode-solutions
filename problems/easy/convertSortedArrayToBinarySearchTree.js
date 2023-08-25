/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let halfIndex = Math.floor(nums.length/2);
    
    return new TreeNode(
        nums[halfIndex],
        halfIndex > 0 ? sortedArrayToBST(nums.slice(0, halfIndex)) : null,
        halfIndex < nums.length - 1 ? sortedArrayToBST(nums.slice(halfIndex + 1)) : null
    );
};