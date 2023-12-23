/**
 * @param {string} s
 * @return {number}
 * Runtime: 52ms (83.64%)
 * Memory: 42.52MB (52.73%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var maxScore = function(s) {
    let i, nOnes, nOnesSub, maxScore, currScore;
    nOnes = nOnesSub = maxScore = 0;

    // Loop through string once, counting total number of ones
    for (i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            nOnes++;
        }
    }

    // Loop through string again, storing number of ones in left-substring
    // Score can be calculated with total ones AND ones in left-substring
    // Stop at last index since right-substring needs to be at least one unit long
    for (i = 0; i < s.length - 1; i++) {
        if (s[i] === '1') {
            nOnesSub++;
        }

        // Get score if string split at ith index
        currScore = (i + 1 - nOnesSub) + (nOnes - nOnesSub);

        // Update max score if necessary
        if (currScore > maxScore) {
            maxScore = currScore;
        }
    }

    return maxScore;
};

/**
Score is sum of:
- Number of 0s in left substring
- Number of 1s in right substring

How to maximize zeros to left and ones to right?

- Loop through characters, counting how many ones (nOnes).
Number of zeros can be calculated: nZeros = s.length - nOnes

- Loop through characters again, tracking how many ones are in sub-string left of i.
Number of zeros in substring can be calculated: nZerosSub = i - nOnesSub
 */