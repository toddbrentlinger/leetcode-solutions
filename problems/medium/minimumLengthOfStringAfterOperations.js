/**
 * @param {string} s
 * @return {number}
 * Runtime: 150ms (28.67%)
 * Memory: 59.59MB (94.51%)
 * Time Complexity: O(n)
 * Space Complexity: O(1) - One key for each letter and value is either 1 or 2
 */
var minimumLength = function(s) {
    /**
    Each letter is a key and value is either 0 for odd number of letters OR 1 
    for even number of letters.
     */
    let letterCounts = {};

    // Find even/odd counts of each letter
    for (let i = 0; i < s.length; i++) {
        // If letter already at previous index
        if (s[i] in letterCounts) {
            /**
             * Set letter count to 2 for even count if previous count was one, 
             * else set to 1 for odd count.
             */
            letterCounts[s[i]] = (letterCounts[s[i]] === 1) ? 2 : 1;
        } else { // Else first instance of a letter
            // Set letter count to one for odd number
            letterCounts[s[i]] = 1;
        }
    }

    // Sum all final letter counts
    return Object.values(letterCounts).reduce((curr, accum) => accum + curr);
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 150ms (28.67%)
 * Memory: 59.65MB (92.17%)
 * Time Complexity: O(n)
 * Space Complexity: O(1) - One key for each letter and value is either 1 or 2
 */
var minimumLength01 = function(s) {
    /**
    Each letter is a key and value is either 1 for odd number of letters 
    OR 2 for even number of letters.
     */
    let letterCounts = {};

    // Current minimum length of string, initialized to zero for zero length string
    let minLength = 0;

    // Find even/odd counts of each letter and adjust current minimum length
    for (let i = 0; i < s.length; i++) {
        // If letter already at previous index
        if (s[i] in letterCounts) {
            // If previous letter count is odd so far
            if (letterCounts[s[i]] === 1) {
                // Set letter count to 2 for even count
                letterCounts[s[i]] = 2;

                /**
                 * Increment minimum length count since current letter count is 
                 * even (even count reduces to two final letters).
                 */
                minLength++;
            } else { // Else previous letter count is even so far
                // Set letter count to 1 for odd count
                letterCounts[s[i]] = 1;

                /**
                 * Decrement minimum length count since current letter count is 
                 * odd (odd count reduces to one final letter).
                 */
                minLength--;
            }
        } else { // Else first instance of a letter
            // Set letter count to one for odd number
            letterCounts[s[i]] = 1;

            // Increment minimum length count for first occurence of letter
            minLength++;
        }
    }
    
    return minLength;
};

/**
- For two letters to be removed, there must be three or more of that letter in the string.

- 3 letters to 1 letter
- 4 letters to 2 letters
- 5 letters to 3 letters -> 3 letters to 1 letter
- 6 letters to 4 letters -> 4 letters to 2 letters
- 7 letters to 5 letters -> 5 letters to 3 letters -> 3 letters to 1 letters
- 8 letters to 6 letters -> 6 letters to 4 letters -> 4 letters to 2 letters
- Odd number letter counts, 3 or more, can all be removed instead of 1
- Even number letter counts, 4 or more, can all be removed instead of 2

- Instead of finding total counts of each letter, just need to track if even/odd counts greater than 2.
- If letter count is 2 or less, that letter cannot be removed at all from the string.

 */