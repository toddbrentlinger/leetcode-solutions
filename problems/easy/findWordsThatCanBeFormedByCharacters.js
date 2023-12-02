/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * Runtime: 69ms (95.91%)
 * Memory: 49.53MB (88.48%)
 * Time Complexity: O(n) all chars and words traversed once
 * Space Complexity: O(1) two arrays with length of 26 for each lowercase character
 */
var countCharacters = function(words, chars) {
    let charCount = new Array(26).fill(0);
    let goodStrings = 0;
    let charCountCopy, charCodeIndex, iChar, iWord, isGoodString;

    // Fill charCount and their counts
    for (iChar = 0; iChar < chars.length; iChar++) {
        charCodeIndex = chars.charCodeAt(iChar) - 97;
        charCount[charCodeIndex]++;
    }

    // Test each word after making copy of charCount each time
    for (iWord = 0; iWord < words.length; iWord++) {
        isGoodString = true;
        charCountCopy = [...charCount];

        for (iChar = 0; iChar < words[iWord].length; iChar++) {
            charCodeIndex = words[iWord].charCodeAt(iChar) - 97;

            // If char in word is NOT in charCountCopy, skip word by breaking inner loop
            if (charCountCopy[charCodeIndex] === 0) {
                isGoodString = false;
                break;
            }

            // Else char is in charCountCopy, decrement count
            charCountCopy[charCodeIndex]--;
        }

        // If good string, add word length to total
        if (isGoodString) {
            goodStrings += words[iWord].length;
        }
    }

    return goodStrings;
};