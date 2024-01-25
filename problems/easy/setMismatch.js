/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 63ms (76.92%)
 * Memory: 52.10MB (80.48%%)
 * Time Compexity: O(n)
 * Space Complexity: O(n)
 */
var findErrorNums = function(nums) {
    let repeatedNum, missingNum, i;
    let numsPresent = new Array(nums.length).fill(false);
    
    for (i = 0; i < nums.length; i++) {
        // If current number is already present, found repeating number
        if (numsPresent[nums[i] - 1]) {
            repeatedNum = nums[i];
        } else {
            numsPresent[nums[i] - 1] = true;
        }
    }
    
    for (i = 0; i < numsPresent.length; i++) {
        if (!numsPresent[i]) {
            missingNum = i + 1;
            break;
        }
    }
    
    return [repeatedNum, missingNum];
};