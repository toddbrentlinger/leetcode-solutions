/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 * Runtime: 80ms (94.19%)
 * Memory: 44.41MB (80.23%)
 * Time Complexity: O(q x p) where q is length of queries and p is lenght of points
 * Space Complexity: O(q)
 */
var countPoints = function(points, queries) {
    let answer = new Array(queries.length).fill(0);
    let distanceSquared, rSquared;

    for (let iQuery = 0; iQuery < queries.length; iQuery++) {
        // Calculate radius squared of query so don't have to use Math.sqrt 
        // when finding distance between point and query center
        rSquared = queries[iQuery][2] ** 2;
        
        // Check distance of each point for each query circle
        for (let iPoint = 0; iPoint < points.length; iPoint++) {
            // Find distance squared to avoid using Math.sqrt
            distanceSquared = (queries[iQuery][0] - points[iPoint][0])**2 
                + (queries[iQuery][1] - points[iPoint][1])**2;

            // If point within ith query circle, increment ith answer
            if (distanceSquared <= rSquared) {
                answer[iQuery]++;
            }
        }
    }

    return answer;
};