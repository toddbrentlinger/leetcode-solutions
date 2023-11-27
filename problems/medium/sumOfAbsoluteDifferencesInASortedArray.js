// ----------------------------------------------------------------------------
// Constant Space Complexity (update original array)
// ----------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 152ms (100.00%)
 * Memory: 69.87MB (42.86%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var getSumAbsoluteDifferences = function(nums) {
    let sumAbsoluteDiff = 0; // Holds sum of absolute differences for previous value
    let prevVal = nums[0]; // Previous value since original is replaced by sumAbsoluteDiff every loop
    let i, diff;
    
    // Find sum of absoltue difference for 0-th index value
    for (i = 1; i < nums.length; i++) {
        sumAbsoluteDiff += nums[i] - nums[0];
    }

    // Set sum of absolute difference for 0-th index value in original nums array
    nums[0] = sumAbsoluteDiff;

    // Adjust previous sumAbsoluteDiff based on i-th value and (i-1)th value 
    // and number of elements before and after
    for (i = 1; i < nums.length; i++) {
        diff = nums[i] - prevVal; // Set difference of current val and previous value in original nums array
        sumAbsoluteDiff += diff * i; // Adjust for absolute differences from previous values in nums array
        sumAbsoluteDiff -= diff * (nums.length - i); // Adjust for absolute differences from next values in nums array
        prevVal = nums[i]; // Set new previous value for next loop
        nums[i] = sumAbsoluteDiff; // Assign current value in nums with sumAbsoluteDiff
    }

    return nums;
};

// ----------------------------------------------------------------------------
// Linear Space Complexity (new array for output)
// ----------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 173ms (71.43%)
 * Memory: 77.6MB (10.71%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var getSumAbsoluteDifferences = function(nums) {
    let output = new Array(nums.length);
    let sumAbsoluteDiff = 0;
    let i, diff;
    
    // Find sum of absoltue difference for 0-th index value
    for (i = 1; i < nums.length; i++) {
        sumAbsoluteDiff += nums[i] - nums[0];
    }

    output[0] = sumAbsoluteDiff;

    // Adjust previous sumAbsoluteDiff based on i-th value and (i-1)th value 
    // and number of elements before and after
    for (i = 1; i < nums.length; i++) {
        diff = nums[i] - nums[i - 1];
        sumAbsoluteDiff += diff * i;
        sumAbsoluteDiff -= diff * (nums.length - i);
        output[i] = sumAbsoluteDiff;
    }

    return output;
};

/**

- Calculate summation of absoltue difference with brute force for 0-th index
- For i=1 to end:
    - Get diff from last value = nums[i] - nums[i-1]
    - Add diff * (i) from previous value to adjust for all previous values in absolute difference
    - Subtract diff * (nums.length - i) from previous value to adjust for all future values in absolute difference

2,3,5

0 (2)
|2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4

1 (3) +1 previous value
|3-2| = 1   -> (3-2)+ = 1+ more than previous difference at that index (|2-2| = 0)
+ |3-3| = 0 -> (3-2)- = 1- less than previous difference at that index (|2-3| = 1)
+ |3-5| = 2 -> (3-2)- = 1- less than previous difference at that index (|2-5| = 3)
3

2 (5) +2 previous value
|5-2| = 3   -> (5-3)+ = 2+ more than previous difference at that index
+ |5-3| = 2 -> (5-3)+ = 2+ more than previous difference at that index
+ |5-5| = 0 -> (5-3)- = 2- less than previous difference at that index

-------------------------------------------------------------------------------

2,3,5

0
|2-3| + |2-5| = 1 + 3 = 4
1
|3-2| + |3-5| = 1 + 2 = 3
  ^ already calculated previously with |2-3|
2
|5-2| + |5-3|
  ^       ^ both already calculated previously
 */