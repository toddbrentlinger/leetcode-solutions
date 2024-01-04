/**
 * @param {string} s
 * @return {number}
 * Runtime: 48ms (89.66%)
 * Memory: 41.81MB (96.98%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var minOperations = function(s) {
    let oneStartOps = 0;
    let zeroStartOps = 0;

    for (let i = 0; i < s.length; i++) {
        // If ith value is even
        if ((i % 2) === 0) {
            // If ith value does NOT match expected even value for oneStart sequence (1)
            if (s[i] !== '1') { oneStartOps++; }

            // If ith value does NOT match expected even value for zeroStart sequence (0)
            else { zeroStartOps++; }
        }
        // Else ith value is odd
        else {
            // If ith value does NOT match expected odd value for oneStart sequence (0)
            if (s[i] !== '0') { oneStartOps++; }

            // If ith value does NOT match expected odd value for zeroStart sequence (1)
            else { zeroStartOps++; }
        }
    }

    return (oneStartOps < zeroStartOps) ? oneStartOps : zeroStartOps;
};

/**
- If length of s is even, first and last value should be different
- If length of s is odd, first and last value should be the same
- Answer will always want either 1010... or 0101... where even/odd indices 
will have the same value.
- 1010... will have 1 on even indices AND 0 on odd indices
- 0101... will have 0 on even indices AND 1 on odd indices 
- Can check how many values need to be changed assuming s starts with zero
AND then how many values need to be changed assuming s starts with one instead

001
- Should change just first number to 1

010
- No change

100
- Should change just last number to 1

0010
- Should just change first number to 1

1101
- Should just change first number to 0
 */