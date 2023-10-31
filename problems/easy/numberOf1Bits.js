/**
 * @param {number} n - a positive integer
 * @return {number}
 * Runtime: 52ms (77.12%)
 * Memory: 41.59MB (98.74%)
 * Time Complexity: O(1) Shifts 32 bits for every number
 * Space Complexity: O(1)
 */
var hammingWeight = function(n) {
    let count = 0;

    // Test each bit of n, right shifting one bit on every loop, until n is zero 
    while (n > 0) {
        // If 1 in right most bit, increment count
        if (n & 1) { count++; }

        // Since right most bit was checked, bit shift n to right to test bit to the left next loop
        n >>>= 1;
    }

    return count;
};