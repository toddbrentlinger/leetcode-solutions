/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 50ms (98.90%)
 * Memory: 44.77MB (87.87%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var getConcatenation = function(nums) {
    return nums.concat(nums);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 56ms (93.18%)
 * Memory: 44.70MB (91.07%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var getConcatenation = function(nums) {
    let ans = new Array(nums.length * 2);

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i+nums.length] = nums[i];
    }

    return ans;
};