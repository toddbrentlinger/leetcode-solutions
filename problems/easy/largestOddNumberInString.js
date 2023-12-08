/**
 * @param {string} num
 * @return {string}
 * Runtime: 55ms (84.62%)
 * Memory: 45.35MB (64.20%)
 * Time Complexity: O(n) where n is length of num
 * Space Complexity: O(1)
 */
var largestOddNumber = function(num) {
    // Find right-most odd digit and return num up to that digit, inclusive
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 === 1) {
            return num.slice(0, i + 1);
        }
    }

    // If reach here, no odd number in num
    return '';
};