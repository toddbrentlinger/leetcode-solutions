/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * Runtime: 43ms (90.45%)
 * Memory: 41.49MB (77.70%)
 * Time Complexity: O(logn)
 * Space Complexity: O(1)
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // Check if first version is bad since will compare current version 
        // with previous version in loop
        if (isBadVersion(1)) { return 1; }

        let low = 2;
        let high = n;
        let mid;

        while (true) {
            mid = Math.floor(0.5 * (low + high));

            // If mid is a bad version
            if (isBadVersion(mid)) {
                // If previous version is good, mid is the first bad version
                if (!isBadVersion(mid - 1)) {
                    return mid;
                } else { // Else first bad version must be less
                    high = mid - 1;
                }
            } else { // Else mid is a good version, first bad version must be greater
                low = mid + 1;
            }
        }
    };
};