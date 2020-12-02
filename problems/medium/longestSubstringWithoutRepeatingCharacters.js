"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
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