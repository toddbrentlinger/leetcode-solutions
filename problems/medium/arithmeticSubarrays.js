/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 * Runtime: 111ms (87.38%)
 * Memory: 48.79MB (34.95%)
 * Time Complexity: O(nlogn) where n is nums.length if entire nums is tested as one subarray
 * Space Complexity: O(n) where n is nums.length if entire nums is tested as one subarray
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let output = new Array(l.length); // Holds array of booleans of each subarray
    let isArithmeticSubarray, // Boolean to test each subarray
        start, // Looping index for each subarray
        sortedSubArray, // Sorted subarray
        diff; // Difference value of subarray to be compared with other consecutive elements

    // Loop through each subarray
    for (let i = 0; i < l.length; i++) {
        // Slice subarray from nums and sort in ascending order
        sortedSubArray = nums.slice(l[i], r[i] + 1).sort((a,b) => a - b);
        // Get diff from first two elements of sorted subarray
        diff = sortedSubArray[1] - sortedSubArray[0];
        // Initialize looping index to 1 since first two elements are being used to compare other elements
        start = 1;
        // Initialize boolean to true assuming subarray will be arithmetic subarray
        isArithmeticSubarray = true;
        // Test remaining consecutive elements, breaking early if any are NOT equal to initial diff
        while (start < sortedSubArray.length - 1 && isArithmeticSubarray) {
            if (sortedSubArray[start + 1] - sortedSubArray[start] !== diff) {
                isArithmeticSubarray = false;
            }
            start++;
        }

        output[i] = isArithmeticSubarray;
    }

    return output;
};