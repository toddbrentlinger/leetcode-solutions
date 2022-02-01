"use strict";

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // Instead of keeping a string to hold the current largest palindrome, could use two integers to hold start index and length to represent the substring. Then just return the substring without ever needing to save string local variable.

    // If empty or single length string, return the string
    if (s.length < 2)
        return s;

    // Outer loop should stop n letters from the end if longest palindrome found so far has length equal to n
    //let longestPalindrome = s[0]; // Initialized to first character in case no palindrome is found
    let startIndex = 0;
    let length = 1;
    for (let i = 0; i == s.length - length || i < s.length; i++) {
        // Inner loop should stop n letters from i if longest palindrome found so far has length equal to n
        for (let j = s.length - 1; j - i + 1 == length || j > i; j--) {
            if (isPalindrome(s, i, j) && j - i + 1 > length) {
                startIndex = i;
                length = j - i + 1;
                break; // Stop inner loop since any new palindrome will be shorter
            }
        }
    }

    return s.substring(startIndex, startIndex + length);
};

var isPalindrome = function (s, start, end) {
    while (start < end) {
        if (s[start] == s[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
}