// ----------------------------------------------------------------------------
// ------------------------- Moore's Voting Algorithm -------------------------
// ----------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 46ms (97.96%)
 * Memory: 42.48MB (97.96%)
 */
var majorityElement = function(nums) {
    let firstMajority, secondMajority;
    let output = [];
    let firstCount = 0, secondCount = 0;
    let i = 0;

    for (i = 0; i < nums.length; i++) {
        if (firstCount === 0 && nums[i] !== secondMajority) {
            firstMajority = nums[i];
            firstCount = 1;
        } else if (secondCount === 0 && nums[i] !== firstMajority) {
            secondMajority = nums[i];
            secondCount = 1;
        } else if (nums[i] === firstMajority) {
            firstCount++;
        } else if (nums[i] === secondMajority) {
            secondCount++;
        } else {
            firstCount--;
            secondCount--;
        }
    }

    firstCount = secondCount = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === firstMajority) {
            firstCount++;
        } else if (nums[i] === secondMajority) {
            secondCount++;
        }
    }

    if (firstCount > Math.floor(nums.length / 3)) {
        output.push(firstMajority);
    }
    if (secondCount > Math.floor(nums.length / 3)) {
        output.push(secondMajority);
    }

    return output;
};

// ----------------------------------------------------------------------------
// --------------------------------- Hashing ----------------------------------
// ----------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 54ms (82.06%)
 * Memory: 43.23MB (67.03%)
 */
var majorityElement = function(nums) {
    let map = new Map();
    let output = [];
    let majority = Math.floor(nums.length / 3);
    let val;

    for (let i = 0; i < nums.length; i++) {
        val = nums[i];
        if (map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1);
        }
    }
    
    for (const [key, value] of map) {
        if (value > majority) {
            output.push(key);
        }
    }

    return output;
};