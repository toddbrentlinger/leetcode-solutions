/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * Runtime: 82ms (87.79%)
 * Memory: 47.58MB (60.46%)
 * Time Complexity: O(n) where n is length of s and t
 * Space Complexity: O(1) constant 26 length array for character counts
 */
var minSteps = function(s, t) {
    // Holds count of lowercase characters in strings 
    // 0-index for 'a' and 25-index for 'z'
    let charCount = new Array(26).fill(0);
    let i;

    // Increment the count of each character in string s
    for (i = 0; i < s.length; i++) {
        charCount[s[i].charCodeAt(0) - 97]++;
    }

    // Decrement the count of each character in string t
    for (i = 0; i < t.length; i++) {
        charCount[t[i].charCodeAt(0) - 97]--;
    }

    // Any remaining character counts correspond to extra characters only in 
    // one string. Each extra character needs a step to change in order to 
    // make string t an anagram to string s
    return charCount.reduce(
        (accum, curr) => (curr > 0) ? accum + curr : accum, 
        0
    );
};