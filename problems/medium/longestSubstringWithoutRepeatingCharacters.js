"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const strLength = s.length;
    let maxSubstringLength = 0;
    const map = new Map(); // stores current index of a character

    for (let i = 0, j = 0; j < strLength; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }
        maxSubstringLength = Math.max(maxSubstringLength, j - i + 1);
        map.set(s[j], j + 1);
    }
    return maxSubstringLength;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring01 = function (s) {
    // Find first substring with NO repeating character and save in variable
    // If next substring is longer, assign to variable
    // Else find next substring
    // Return variable holding longest substring

    let longestSubStr = "";
    let tempStr = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (tempStr.includes(s[j])) {
                if (tempStr.length > longestSubStr.length) {
                    longestSubStr = tempStr;
                }
                tempStr = "";
                break;
            } else {
                tempStr += s[j];
            }
        }
        // Check for last index
        if ((i === s.length - 1) && (tempStr.length > longestSubStr.length)) {
            longestSubStr = tempStr;
        }
    }
    return longestSubStr.length;
};