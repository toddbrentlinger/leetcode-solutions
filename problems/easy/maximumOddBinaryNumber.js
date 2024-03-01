/**
 * @param {string} s
 * @return {string}
 * Runtime: 68ms (85.88%)
 * Memory: 53.15MB (24.24%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var maximumOddBinaryNumber = function(s) {
    // Initialize output array with all zeros the same length as string s
    let output = new Array(s.length).fill('0');
    // Index to set output to 1
    let iOutput = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            // If first '1', add to end since every odd number has value of 1 
            // in right-most bit
            if (iOutput === -1) {
                output[output.length - 1] = '1';
            }
            // Else NOT first '1', incrementally add to beginning of output to 
            // increase overall value most efficentienty (left-to-right)
            else {
                output[iOutput] = '1';
            }

            // Increment index to set next value of '1' if present
            iOutput++;
        }
    }

    // Join final output array into single string
    return output.join('');
};

/**
- For odd number, there needs to be a 1 in right-most bit.
- If more than one 1-bit in string s, put one on far right and rest on far left.
 */