/**
 * @param {string} s
 * @return {number}
 * Runtime: 52ms (51.95%)
 * Memory: 42.32MB (100.00%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1; // Looping index initialized to index of last element in array s
    let count = 0; // Counter for number of letters in last word

    // Find first non-space character from the end of array s
    while (s[i] === ' ') { i-- };

    // Index i now points to last character of last word

    // Find how many letters are in last word (up to index points to space)
    while (i >= 0 && s[i] !== ' ') {
        count++; // Increment count for new non-space character
        i--; // Decrement index for next loop
    }
    
    return count;
};

/*
Loop s in reverse until find index of first character (non-space)
Loop in reverse while char is non-space
    Increment count
Return count
*/

var lengthOfLastWord01 = function(s) {
    // Regex: /\w+(?=\s*$)/
    
    // If one word is guaranteed, match should never return null
    return s.match(/\w+(?=\s*$)/)[0].length;
};