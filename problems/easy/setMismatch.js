/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 63ms (76.92%)
 * Memory: 52.10MB (80.48%%)
 * Time Compexity: O(n)
 * Space Complexity: O(n)
 */
var findErrorNums = function(nums) {
    let repeatedNum, // Number that is repeated (set when found)
        missingNum, // Number that is missing (set when found)
        i;
    // Array of booleans where if i is true, (i+1) is present in nums
    let numsPresent = new Array(nums.length).fill(false);
    
    // Fill numsPresent boolean array AND find repeating number
    for (i = 0; i < nums.length; i++) {
        // If current number is already present, found repeating number
        if (numsPresent[nums[i] - 1]) {
            repeatedNum = nums[i];
        }
        // Else current number is NOT already present, set corresponding value to true 
        else {
            numsPresent[nums[i] - 1] = true;
        }
    }
    
    // Missing number should be only false value in boolean array numsPresent 
    // since it was never found in first loop. Break out of loop early if found.
    for (i = 0; i < numsPresent.length; i++) {
        if (!numsPresent[i]) {
            missingNum = i + 1;
            break;
        }
    }
    
    return [repeatedNum, missingNum];
};