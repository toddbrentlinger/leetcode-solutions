/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 * Runtime: 76ms (93.06%)
 * Memory: 48.50MB (91.30%)
 * Time Complexity: O(n) where n is length of both words
 * Space Complexity: O(1) constant size 26 arrays for each word
 */
var closeStrings = function(word1, word2) {
    // If word lengths are different, words CANNOT be close
    if (word1.length !== word2.length) { return false; }

    let charCount1 = new Array(26).fill(0);
    let charCount2 = new Array(26).fill(0);
    let i;

    // Get individual character counts for each word
    for (i = 0; i < word1.length; i++) {
        charCount1[word1[i].charCodeAt(0) - 97]++;
        charCount2[word2[i].charCodeAt(0) - 97]++;
    }
    
    // If one character ONLY in one word, two words CANNOT be close
    for (i = 0; i < 26; i++) {
        if (charCount1[i] === 0 && charCount2[i] !== 0) {
            return false;
        }
        if (charCount2[i] === 0 && charCount1[i] !== 0) {
            return false;
        }
    }

    // If reach here, both words have same characters in them.
    
    // Sort char counts in descending order
    charCount1.sort((a,b) => b - a);
    charCount2.sort((a,b) => b - a);
    
    for (i = 0; i < 26; i++) {
        // If order of char counts of words are different, words CANNOT be close
        if (charCount1[i] !== charCount2[i]) {
            return false;
        }
        // If character counts have reached zero, rest of sorted character counts
        // should all be zero. Skip checking rest of sorted character counts.
        if (charCount1[i] === 0) {
            break;
        }
    }

    return true;
};

/**
// 
?

word1 = "cabbba", word2 = "abbccc"

charCount1 = {a: 2, b: 3, c: 1} total = 6
charCount2 = {a: 1, b: 2: c: 3} total = 6

Words are NOT close if:
- Word lengths are different
- One word has character NOT in other word
    - ex. If one word has 'd' and other word does NOT, NO operations can be made to make
    one word the other
- If reach here, both words have same characters in them. Check counts
- Sequence of character counts is same after being sorted
    ex. In example above, word1 char count sequence is 2,3,1 and word1 char count sequence
    is 1,2,3. Both equal 1,2,3 when sorted
 */