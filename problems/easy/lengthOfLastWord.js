'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    /*
    Loop s in reverse until find index of first character (non-space)
    Loop in reverse while char is non-space
        Increment count
    Return count
    */
    let i = s.length - 1;
    let count = 0;
    while (s[i] === ' ') i--;
    while (s[i] !== ' ') {
        count++;
        i--;
    }
    return count;
};

var lengthOfLastWord01 = function(s) {
    // Regex: /\w+(?=\s*$)/
    
    // If one word is guaranteed, match should never return null
    return s.match(/\w+(?=\s*$)/)[0].length;
};