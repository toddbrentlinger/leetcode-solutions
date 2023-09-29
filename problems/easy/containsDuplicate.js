/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 65ms (96.66%)
 * Memory: 53.01MB (68.49%)
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) { return true; }
        set.add(nums[i]);
    }

    return false;
};