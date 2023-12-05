/**
 * @param {number} n
 * @return {number}
 * Runtime: 45ms (89.43%)
 * Memory: 42.13MB (15.41%)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
var numberOfMatches = function(n) {
    return n - 1;
};

/**
Number of matches will always be one less than number of teams.
1 - 0
2 - 1
3 - 2
4 - 3
5 - 4
6 - 5
 */

/**
 * @param {number} n
 * @return {number}
 * Runtime: 49ms (71.30%)
 * Memory: 42.2MB (15.41%)
 * Time Complexity: O(logn) n is approximately halved every loop
 * Space Complexity: O(1)
 */
var numberOfMatches = function(n) {
    let totalMatches = 0;

    while (n > 1) {
        // If even number of teams in round
        if (n % 2 === 0) {
            n = n / 2; // teams advanced
            totalMatches += n; // add matches which equals teams advanced
        }
        // Else odd number of teams in round 
        else {
            n = ((n - 1) / 2) + 1; // teams advanced
            totalMatches += n - 1; // add matches which equals teams advanced minus one
        }
    }

    return totalMatches;
};