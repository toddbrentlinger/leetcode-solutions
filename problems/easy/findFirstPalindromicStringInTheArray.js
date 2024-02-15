/**
 * @param {string[]} words
 * @return {string}
 * Runtime: 55ms (96.76%)
 * Memory: 52.55MB (49.91%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var firstPalindrome = function(words) {
    let start, end;

    for (let iWord = 0; iWord < words.length; iWord++) {
        // nth index from left end in word
        start = 0;
        // nth index from right end in word
        end = words[iWord].length - 1;

        // For palindrome, nth char from each end should be equal. With 
        // pointer on each end, loop toward the middle, checking that each 
        // character is equal for valid palindrome.
        // If characters NOT equal, word cannot be palindrome, break loop.
        while (start < end && words[iWord][start] === words[iWord][end]) {
            start++;
            end--;
        }

        // If all characters were checked, word is palindrome
        if (start >= end) {
            return words[iWord];
        }
    }

    // If reach here, no palindrome was found
    return '';
};