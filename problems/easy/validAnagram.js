/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 53ms (97.76%)
 * Memory: 41.99MB (97.81%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var isAnagram = function(s, t) {
    let lettersCount = new Array(26).fill(0); // only 26 lowercase letters
    let iCharCode, i;

    // Add to lettersCount array
    for (i = 0; i < s.length; i++) {
        // Subtract 97 from char code set 'a' as first index
        iCharCode = s.charCodeAt(i) - 97;
        lettersCount[iCharCode]++;
    }

    // Remove from lettersCount array
    for (i = 0; i < t.length; i++) {
        // Subtract 97 from char code set 'a' as first index
        iCharCode = t.charCodeAt(i) - 97;
        lettersCount[iCharCode]--;

        // If letter count is less than 0, cannot be anagram
        if (lettersCount[iCharCode] < 0) {
            return false;
        }
    }

    // Check if any numbers left in lettersCount
    for (i = 0; i < lettersCount.length; i++) {
        if (lettersCount[i] !== 0) {
            return false;
        }
    }

    // If reach here, strings are valid anagram
    return true;
};