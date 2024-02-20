/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 52ms (87.03%)
 * Memory: 50.30MB (49.08%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var missingNumber = function(nums) {
    // Use triangular number formular to get sum of all possible values
    let triangularNum = (nums.length * (nums.length + 1)) / 2;

    // Get actual sum of all numbers in nums
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }

    // Subtract actual sum of all numbers from triangular number of all possible values.
    // The difference is the missing number needed to get triangular number of all possible values.
    // (triangular sum formula) - (actual sum)
    return triangularNum - actualSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // Subtract actual sum of all numbers from triangular number of all possible values.
    // The difference is the missing number needed to get triangular number of all possible values.
    // (triangular sum formula) - (actual sum)
    return (nums.length * (nums.length + 1)) / 2 
        - nums.reduce((accum, curr) => accum + curr);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let triangularNum = (nums.length * (nums.length + 1)) / 2;
    let actualSum = nums.reduce((accum, curr) => accum + curr);

    return triangularNum - actualSum;
};