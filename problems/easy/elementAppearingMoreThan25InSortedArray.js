/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 50ms (83.51%)
 * Memory: 42.91MB (58.51%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var findSpecialInteger = function(arr) {
    let first = 0; // first index of same value
    let last = 0; // used to find last index of same value
    let quarterLength = Math.floor(arr.length / 4);

    // Loop until find value that is repeated more than quarter length of array
    while ((last - first) < quarterLength) {
        last++; // Increment last index
        // If value at last index is different than first index, set first index for next loop
        if (arr[last] !== arr[first]) {
            first = last;
        }
    }

    return arr[first];
};