/**
 * @param {string} s
 * @return {number}
 * Runtime: 61ms (73.68%)
 * Memory: 54.28MB (47.37%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var minimumLength = function(s) {
    let iPrefix = 0;
    let iSuffix = s.length - 1;

    while (iPrefix < iSuffix) {
        // If prefix and suffix letters are different, cannot perform operation
        if (s[iPrefix] !== s[iSuffix]) { return iSuffix - iPrefix + 1; }

        // Find largest index of repeated sequence of prefix character.
        // Do not reach suffix index.
        while ((iPrefix < iSuffix) && (s[iPrefix] === s[iPrefix + 1])) {
            iPrefix++;
        }

        // Find smallest index of repeated sequence of suffix character
        // Do not go reach prefix index.
        while ((iPrefix < iSuffix) && (s[iSuffix] === s[iSuffix - 1])) {
            iSuffix--;
        }

        // Increment prefix and decrement suffix once more to point to new 
        // character for next loop
        iPrefix++;
        iSuffix--;
    }

    // If reach here, prefix index >= suffix index

    // If prefix and suffix index are equal, only one character remains
    if (iPrefix === iSuffix) { return 1; }

    // If reach here, prefix index > suffix index. All characters can be removed
    return 0;
};