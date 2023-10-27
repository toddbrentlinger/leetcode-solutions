/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime: 47ms (96.52%)
 * Memory: 43.34MB (21.91%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var twoSum = function(nums, target) {
    let hash = {};
    let complement;
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (hash[complement] !== undefined) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
    return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function (nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in hash) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
    var i, j, complement;
    for (i = 0; i < nums.length - 1; i++) {
        complement = target - nums[i];
        for (j = i + 1; j < nums.length; j++) {
            if (nums[j] === complement)
                return [i, j];
        }
    }
    // No match found
    return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
    var i, j;
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target)
                return [i, j];
        }
    }
    // No match found
    return [];
};

export default twoSum;

