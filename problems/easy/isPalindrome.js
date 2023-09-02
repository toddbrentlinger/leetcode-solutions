"use strict";

/**
 * @param {number} x
 * @return {boolean}
 * Runtime: 129ms (90.72%)
 * Memory: 51.65MB (33.78%)
 */
var isPalindrome = function(x) {
    // Check negative numbers (NOT palindrome)
    if (x < 0)
        return false;
    
    const numStr = x.toString();

    for (let i = Math.floor(numStr.length / 2) - 1; i >= 0; i--) {
        if (numStr[i] !== numStr[numStr.length - i - 1])
            return false;
    }

    return true;
};

/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // Check negative numbers (NOT palindrome)
    if (x < 0)
        return false;

    const numStr = x.toString();

    for (let i = 0; i < Math.floor(numStr.length / 2); i++) {
        if (numStr[i] !== numStr[numStr.length - i - 1])
            return false;
    }
    return true;
};

export default isPalindrome;