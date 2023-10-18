// ----------------------------------------------------------------------------
// Dynamic Programming
// ----------------------------------------------------------------------------

/**
 * @param {number} n
 * @return {number}
 * Runtime: 44ms (92.27%)
 * Memory: 40.95MB (98.60%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var fib = function(n) {
    if (n === 0) { return 0; }
    if (n === 1) { return 1; }
    
    let secondPrev = 0;
    let firstPrev = 1;
    let result = 0;
    while (n > 1) {
        result = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = result;
        n--;
    }

    return result;
};

/**
n=0 - 0
n=1 - 1
n=2 - n(1) + n(0) = 1
n=3 - n(2) + n(1) = 1+1 = 2
n=4 - n(3) + n(2) = 2+1 = 3
 */

// ----------------------------------------------------------------------------
// Recursion
// ----------------------------------------------------------------------------

/**
 * @param {number} n
 * @return {number}
 * Runtime: 44ms (92.27%)
 * Memory: 41.33MB (87.90%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var fib = function(n) {
    return getFib(n);
};

var getFib = function(n, dp = {}) {
    // Check memoization
    if (dp[n] !== undefined) {
        return dp[n];
    }
    
    if (n === 0) { dp[0] = 0; } // Base Case
    else if (n === 1) { dp[1] = 1; } // Base Case
    else { // Else calculate recursively
        dp[n] = getFib(n - 1, dp) + getFib(n - 2, dp);
    }

    return dp[n];
};