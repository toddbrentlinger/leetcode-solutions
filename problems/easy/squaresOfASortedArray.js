/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 77ms (86.60%)
 * Memory: 56.13MB (46.36%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var sortedSquares = function(nums) {
    // If first value is positive, all values are positive, no sorting after 
    // squaring is necessary. Just need to return nums with each value squared.
    if (nums[0] >= 0) {
        return nums.map((n) => n * n);
    }

    // If last value is negative, all values are negative, no sorting after 
    // squaring is necessary. Just need to return nums with each value squared
    // AND then reversed.
    if (nums[nums.length - 1] < 0) {
        return nums.map((n) => n * n).reverse();
    }

    // If reach here, at least one negative and one positive value in nums

    let output = new Array(nums.length);

    // Find first index with positive value
    let iPos = 1;
    while (nums[iPos] < 0) {
        iPos++;
    }
    
    // Set negative value index to negative value closest to 0
    let iNeg = iPos - 1;

    // iPos now points to lowest absolute value of positive values
    // iNeg now points to lowest aboslute value of negative values

    // For every loop, add squared value of min absolute value of negative or positive value
    for (let i = 0; i < nums.length; i++) {
        // If already added squares of all negative numbers 
        // OR absolute value of positive value is less than absolute value of 
        // negative value, add square of positive value to ith index of output
        if (iNeg === -1 || nums[iPos] < (nums[iNeg] * -1)) {
            output[i] = nums[iPos] * nums[iPos];
            // Increment positive index to point to next larger absolute value
            // of positive values
            iPos++;
        }
        // Else add square of negative value to ith index of output
        else {
            output[i] = nums[iNeg] * nums[iNeg];
            // Decrement negative index to point to next larger absolute value
            // of negative values
            iNeg--;
        }
    }

    return output;
};