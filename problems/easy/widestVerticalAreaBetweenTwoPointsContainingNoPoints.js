/**
 * @param {number[][]} points
 * @return {number}
 * Runtime: 135ms (80.28%)
 * Memory: 62.32MB (49.30%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var maxWidthOfVerticalArea = function(points) {
    // Sort points by y-coord (0-th index of singe point array of length 2)
    points.sort((a,b) => a[0] - b[0]);
    
    // Find maxWidth of each point to the next point further along the x-axis
    let maxWidth = 0; // Holds max width of vertical area
    let currWidth; // Holds width of area after ith sorted point
    for (let i = 0; i < points.length - 1; i++) {
        currWidth = points[i + 1][0] - points[i][0];

        // If currWidth is new max, update maxWidth
        if (currWidth > maxWidth) {
            maxWidth = currWidth;
        }
    }

    return maxWidth;
};

/**
Since area depends only on horizontal distance between points, only compare horizontal distance
between points.
 */