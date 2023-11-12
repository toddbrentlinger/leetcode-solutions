/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 47ms (89.29%)
 * Memory: 42.42MB (58.53%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var maxProduct = function(nums) {
    // Highest value index (initialized to highest of first two values)
    let iMax1 = nums[0] > nums[1] ? 0 : 1;
    // Second highest value index (initialized to lowest of first two values)
    let iMax2 = iMax1 ? 0 : 1;

    // Find two largest elements in remaining array (starting at index 2)
    for (let i = 2; i < nums.length; i++) {
        // If new value is greater than or equal to highest value
        if (nums[i] >= nums[iMax1]) {
            iMax2 = iMax1; // Set second highest value index to previous highest value index
            iMax1 = i; // Set highest value index to new index (now highest value)
        }
        // Else if new value is greater than second highest value but smaller than highest value 
        else if (nums[i] > nums[iMax2]) {
            iMax2 = i; // Set second highest value to new index (now second highest value)
        }
    }

    return (nums[iMax1] - 1) * (nums[iMax2] - 1);
};