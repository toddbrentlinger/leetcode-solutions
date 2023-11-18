/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 280ms (86.05%)
 * Memory: 56.36MB (90.12%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var minPairSum = function(nums) {
    // Sort nums in ascending order
    nums.sort((a,b) => a - b);

    let left = 0; // Index incremented from left end of nums array
    let right = nums.length - 1; // Index decremented from right of nums array
    let max = nums[left++] + nums[right--]; // Max value initialized to sum of first and last value
    let total; // Sum of left and right index for every loop
    
    // Moving left and right indices from either end of array, 
    // check if sum is max
    while (left < right) {
        total = nums[left++] + nums[right--];
        if (total > max) {
            max = total;
        }
    }

    return max;
};