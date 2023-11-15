/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 63ms (100.00%)
 * Memory: 51.78MB (76.19%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    // Sort array in ascending order
    arr.sort((a,b) => a - b);
    
    // Holds previous value
    let prev = 1;

    // Set prev to minimum of incremented value OR ith element of array
    // follow rule that ith element must not be more than (i-1)th element plus one
    for (let i = 1; i < arr.length; i++) {
        prev = Math.min(prev + 1, arr[i]);
    }
    
    // Prev ends with largest possible at end of array
    return prev;
};

// ----------------------------------------------------------------------------
// Update array values
// ----------------------------------------------------------------------------

/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 67ms (90.48%)
 * Memory: 52.20MB (33.33%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    // Sort array in ascending order
    arr.sort((a,b) => a - b);

    // Set first value to 1 if not already
    if (arr[0] !== 1) {
        arr[0] = 1;
    }

    // Make sure ith value is at most 1 more than (i-1)th value
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) > 1) {
            arr[i] = arr[i - 1] + 1;
        }
    }

    // Return last value which is guarenteed to be max value
    return arr[arr.length - 1];
};