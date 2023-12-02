/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * Runtime: 42ms (95.47%)
 * Memory: 42.02MB (52.70%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var arrayStringsAreEqual = function(word1, word2) {
    let iWord1 = 0, // index of word in word1
    iWord2 = 0, // index of word in word2
    jWord1 = 0, // index of char in word in word1
    jWord2 = 0; // index of char in word in word2

    // Loop through each word array until reach end of one
    while (iWord1 < word1.length && iWord2 < word2.length) {
        // If characters are not equal, string arrays are not equal
        if (word1[iWord1][jWord1] !== word2[iWord2][jWord2]) {
            return false;
        }

        // Increment word in word1 array OR character in word
        if (jWord1 < word1[iWord1].length - 1) { 
            jWord1++; 
        } else {
            iWord1++;
            jWord1 = 0; // Reset character index for new word
        }

        // Increment word in word2 array OR character in word
        if (jWord2 < word2[iWord2].length - 1) { 
            jWord2++; 
        } else {
            iWord2++;
            jWord2 = 0; // Reset character index for new word
        }
    }

    // If still word in any array that hasn't been finished checking, string arrays cannot be equal
    if (iWord1 < word1.length || iWord2 < word2.length) {
        return false;
    }

    return true;
};