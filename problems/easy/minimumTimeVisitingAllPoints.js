/**
 * @param {number[][]} points
 * @return {number}
 * Runtime: 42ms (99.33%)
 * Memory: 44.04MB (42.28%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var minTimeToVisitAllPoints = function(points) {
    let deltaX, deltaY, time = 0;

    for (let i = 0; i < points.length - 1; i++) {
        deltaX = Math.abs(points[i + 1][0] - points[i][0]);
        deltaY = Math.abs(points[i + 1][1] - points[i][1]);

        // Add maximum of detlaX and deltaY to time
        time += (deltaX < deltaY) ? deltaY : deltaX;
    }

    return time;
};

/**
[[1,1],[3,4],[-1,0]]
total = 0

1,1 -> 3,4
deltaX = |3 - 1| = 2
deltaY = |4 - 1| = 3
- Moves minimum of deltaX and deltaY: 2
- Then moves remaining distance along other axis: 3 - 2 = 1
total += deltaX + (deltaY - deltaX) = deltaY
total += 3 = 3

3,4 -> -1,0
deltaX = |-1 - 3| = 4
deltaY = |0 - 4| = 4
- Moves minimum of deltaX and deltaY: 4
- Then moves remaining distance along other axies: 4 - 4 = 0
total += deltaY + (deltaX - deltaY) = deltaX
total += 4 = 7

NOTE: Units travelled always equal to maximum delta since minimum delta cancels out!


 */