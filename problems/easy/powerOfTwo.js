/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 55ms (81.13%)
 * Memory: 43.40MB (74.97%)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
var isPowerOfTwo = function(n) {
    return (n > 0) && ((n & (n - 1)) === 0);
};

/**
0 -> 000 false (Special Case)

1 = 2^0 -> 001
1-1 = 0 -> 000
1 & 0 = 0
1 is power of two

2 = 2^1 -> 010
2-1 = 1 -> 001
2 & 1 = 0
2 is power of two

3 -> 011
3-1 = 2 -> 010
3 & 2 = 011 & 010 = 010 = 2 NOT equal to zero
3 is NOT power of two

n is power of two if:
n % (n-1) === 0

Any n <= 0 cannot be power of two since negative values AND zero cannot be power of two
 */

// ----------------------------------------------------------------------------

/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 55ms (81.13%)
 * Memory: 43.53MB (56.16%)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
var isPowerOfTwo = function(n) {
    let hasSingleOneBit = false;
    
    // Continue right shifting bits until n reaches zero
    while (n > 0) {
        // If right most bit is one
        if (n & 1) {
            // If already found one bit in n, n cannot be power of two
            if (hasSingleOneBit) {
                return false;
            }
            hasSingleOneBit = true;
        }

        // Right shift n once to check next bit in next loop
        n >>= 1;
    }

    // hasSingleOneBit should still be false only if n is zero
    return hasSingleOneBit;
};

/**
2^0 = 1 = 001
2^1 = 2 = 010
2^2 = 4 = 100

n is power of two if bit representation has single 1 and remaining zeros
 */