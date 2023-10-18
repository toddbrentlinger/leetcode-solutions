/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 * Runtime: 46ms (81.67%)
 * Memory: 41.42MB (80.52%)
 * Time Complexity: O(logn)
 * Space Complexity: O(1)
 */
var guessNumber = function(n) {
    // Binary search
    let low = 0;
    let high = n;
    let pick;

    while (true) {
        pick = Math.floor(0.5 * (low + high));

        switch (guess(pick)) {
            case -1:
                high = pick - 1;
                break;
            case 1: 
                low = pick + 1;
                break;
            default:
                return pick;
        }
    }
};