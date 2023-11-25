// ----------------------------------------------------------------------------
// No Sorting
// ----------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 * Runtime: 92ms (85.89%)
 * Memory: 49.3MB (12.9%)
 * Time Complexity: O(n) where n is nums.length if entire nums is tested as one subarray
 * Space Complexity: O(n) where n is nums.length if entire nums is tested as one subarray
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let min, max, diff, val;
    let valSet = new Set();

    return l.map((start, i) => {
        // Clear value set from previous subarray
        valSet.clear();
        
        // Find min/max and create set of values in subarray
        min = nums[start];
        max = min;
        valSet.add(min);
        for (start++; start <= r[i]; start++) {
            if (nums[start] < min) { min = nums[start]; }
            else if (nums[start] > max) { max = nums[start]; }
            valSet.add(nums[start]);
        }

        // If min/max are same, subarray are all same value and is arithmetic subarray
        if (min === max) { return true; }

        // Find diff required for arithmetic subarray using min/max and length of subarray
        diff = (max - min) / (r[i] - l[i]);

        // If diff is NOT an integer, subarray cannot be an arithmetic subarray since values are only integers

        // Check if every value that should be in arithmetic subarray is in set
        val = min + diff;
        while (val < max) {
            // If value is NOT in set, subarray cannot be arithmetic subarray
            if (!valSet.has(val)) {
                return false;
            }
            // Set next value that needs to be in arithmetic subarray
            val += diff;
        }

        return true;
    });
};

/**
- If 0 -> 2 is false, then 0 -> 2+ will be false as well, so can keep a map of start index AND end index
for know false subarrays. Value of each key can be increased if 
 */

// ----------------------------------------------------------------------------
// Sorting
// ----------------------------------------------------------------------------

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