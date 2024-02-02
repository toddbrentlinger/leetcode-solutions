/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 * Runtime: 341ms (44.51%)
 * Memory: 79.26MB (97.49%)
 * Time Complexity: O(nlogn) sorting array nums
 * Space Complexity: O(n)
 */
var divideArray = function(nums, k) {
    // Array to hold valid 3-length sub-arrays
    let output = new Array(nums.length / 3);

    // Sort nums in ascending order (smallest 3 values should always be paired with each other)
    nums.sort((a,b) => a - b);

    // Most efficient solution is groups of 3 values in sorted array
    for (let i = 0; i < nums.length; i+=3) {
        // If difference in last and first value of 3-length subsequence is more than k,
        // NOT possible to divide the array satisfying all conditions
        if (nums[i+2] - nums[i] > k) {
            return [];
        }

        // Add valid subsequence to output
        output[i / 3] = nums.slice(i, i+3);
    }

    // If reach here, sorted sub-sequences are all valid
    return output;
};