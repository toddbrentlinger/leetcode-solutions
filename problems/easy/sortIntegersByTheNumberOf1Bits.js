/**
 * @param {number[]} arr
 * @return {number[]}
 * Runtime: 70ms (71.76%)
 * Memory: 44.5MB (75.46%)
 * Time Complexity: O(nlog(n))
 * Space Complexity: O(1)
 */
var sortByBits = function(arr) {
    return arr.sort(getSortByBitsFactor);
};

var getSortByBitsFactor = function(a, b) {
    let aBinaryOnes = getBinaryOnes(a);
    let bBinaryOnes = getBinaryOnes(b);

    // If a has less binary ones, return -1 for a first in ascending order
    if (aBinaryOnes < bBinaryOnes) { return -1; }

    // If b has less binary ones, return 1 for b first in ascending order
    if (aBinaryOnes > bBinaryOnes) { return 1; }

    // If reach here, a & b has equal number of binary ones

    // If a is less than b, return -1 for a first in ascending order
    if (a < b) { return -1; }
    // If b is less than a, return 1 for b first in ascending order
    if (a > b) { return 1; }
    // If reach here, a === b, return 0
    return 0;
};

var getBinaryOnes = function(n) {
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