/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 * Runtime: 42ms (99.09%)
 * Memory: 43.06MB (90.95%)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    let xDiff = Math.abs(fx - sx);
    let yDiff = Math.abs(fy - sy);
    
    // Special Case: Same start and end position AND t === 1
    if (!xDiff && !yDiff && t === 1) { return false; }

    return ((xDiff < yDiff) ? yDiff : xDiff) <= t;
};

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 * Runtime: 49ms (87.33%)
 * Memory: 42.58MB (100.00%)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    let xDiff = Math.abs(fx - sx);
    let yDiff = Math.abs(fy - sy);

    // Special Case: Same start and end position AND t === 1
    if (!xDiff && !yDiff && t === 1) { return false; }

    let tMin = (xDiff < yDiff) ? yDiff : xDiff;

    return t >= tMin;
};

/**
Minimum squares can be calculated by moving diagonal until reach final row or column, then adding
the remaining squares along that same row or column to reach final square. Any additional squares 
can be traversed by simply stopping one square away and repeatedly moving back and forth to a square
that is still adjacent to finish square before finally moving to final square after t seconds. So only
need to check if t seconds is more than or equal to minimum squares between start and end squares.

xDiff = |fx-sx|
yDiff = |fy-sy|
If xDiff < yDiff
    Initial diagonal ends on final row, moving xDiff sqaures
    Move additional yDiff-xDiff squares along row
    tMin = xDiff + (yDiff - xDiff) = yDiff
Else 
    Initial diagonal ends on final column, moving yDiff sqaures
    Move additional xDiff-yDiff squares along column
    tMin = yDiff + (xDiff - yDiff) = xDiff

Will reach square if t >= tMin

Special Case: If start and end position is same AND t = 1 should return false
 */