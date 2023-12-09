/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 * Runtime: 93ms (96.55%)
 * Memory: 51.5MB (34.48%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var sortTheStudents = function(score, k) {
    return score.sort((a, b) => b[k] - a[k]);
};