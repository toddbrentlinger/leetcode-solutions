/**
 * @param {number} n
 * @return {number}
 * Runtime: ms (%)
 * Memory: MB (%)
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