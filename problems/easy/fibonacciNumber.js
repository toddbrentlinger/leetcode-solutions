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