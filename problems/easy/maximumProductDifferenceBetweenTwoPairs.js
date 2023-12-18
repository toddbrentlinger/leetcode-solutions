// ----------------------------------------------------------------------------
// Four Pointers
// ----------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 52ms (98.13%)
 * Memory: 44.53MB (79.01%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var maxProductDifference = function(nums) {
    /* 
    minMax holds smallest two and highest two values in nums array.
    Initialized to first four elements of nums sorted in ascending order.
    smallest = minMax[0]
    secondSmallest = minMax[1]
    second largest = minMax[2]
    lrgest = minMax[3]
    */
    let minMax = nums.slice(0, 4).sort((a,b) => a - b);

    for (let i = 4; i < nums.length; i++) {
        // If num is between second smallest and second largest, skip
        if (nums[i] > minMax[1] && nums[i] < minMax[2]) {
            continue;
        }
        // If reach here, (num <= small2) OR (num >= large2)

        // If num is largest value yet, update both largest values
        if (nums[i] > minMax[3]) {
            minMax[2] = minMax[3]; // Move prev largest to current second largest
            minMax[3] = nums[i]; // Set new largest
        }
        // Else If num is larger than second largest, set new second largest 
        else if (nums[i] > minMax[2]) {
            minMax[2] = nums[i];
        }
        // If num is smallest value yet, update both smallest values 
        else if (nums[i] < minMax[0]) {
            minMax[1] = minMax[0]; // Move prev smallest to current second smallest
            minMax[0] = nums[i]; // Set new smallest
        }
        // Ele If num is smaller than second smallest, set new second smallest 
        else if (nums[i] < minMax[1]) {
            minMax[1] = nums[i];
        }
    }

    // Return product of two largest minus product of two smallest
    return (minMax[3] * minMax[2]) - (minMax[0] * minMax[1]);
};

// ----------------------------------------------------------------------------
// Sorting
// ----------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 74ms (70.99%)
 * Memory: 45.2MB (30.42%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var maxProductDifference = function(nums) {
    // Sort nums in ascending order
    nums.sort((a,b) => a - b);

    // Take difference of:
    // Product of two largest values (last two indices of sorted nums array)
    // Product of two smallest values (first two indices of sorted nums array)
    return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]);
};

/**
- Max product difference is maximized when first product set is largest possible 
AND second product set is smallest possible.
- First product set is largest when 2 largest values in nums are multiplied.
- Second product set is smallest when 2 smallest values in nums are multiplied.

SOLUTION #1: Sort
Can sort nums with O(nlogn) time complexity and then take first two and last 
two indices.

SOLUTON #2: Four Pointers
Loop through nums and keep track of two highest and two lowest numbers.
O(n) time complexity.
 */