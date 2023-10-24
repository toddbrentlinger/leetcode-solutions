/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 51ms (92.64%)
 * Memory: 42.90MB (85.54%)
 * Time Complexity: O(log4(n))
 * Space Complexity: O(log4(n)) if include call stack from recursive calls
 */
var isPowerOfFour = function(n) {
    // Base Case: 1 is true since 1 = 4^0
    if (n === 1) { return true;}
    // Base Case: Negative values and zero are all false
    // Base Case: Any other value between (1, 4) cannot be true
    else if (n < 4) { return false; }
    // Recursive Case
    else { return isPowerOfFour(n / 4); }
};

/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 52ms (90.76%)
 * Memory: 43.14MB (74.30%)
 * Time Complexity: O(log4(n))
 * Space Complexity: O(log4(n)) if include call stack from recursive calls
 */
var isPowerOfFour = function(n) {
    // Base Case: Negative values and zero are all false
    if (n <= 0) { return false; }
    // Base Case: 1 is true since 1 = 4^0
    else if (n === 1) { return true;}
    // Base Case: Any other value between (1, 4) cannot be true
    else if (n < 4) { return false; }
    // Recursive Case
    else { return isPowerOfFour(n / 4); }
};