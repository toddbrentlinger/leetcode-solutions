/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * Runtime: 43ms (94.16%)
 * Memory: 41.44MB (95.24%)
 * Time Complexity: O(log(m*n))
 * Space Complexity: O(1)
 */
var searchMatrix = function(matrix, target) {
    let low = 0;
    let high = matrix.length - 1;
    let midRow, midCol;

    // Find possible row index
    while (low <= high) {
        midRow = Math.floor(0.5 * (low + high));

        // If target could be in midRow-index row value range, binary search midRow-index row
        if (target >= matrix[midRow][0] && target <= matrix[midRow][matrix[midRow].length - 1]) {
            low = 0;
            high = matrix[midRow].length - 1

            while (low <= high) {
                midCol = Math.floor(0.5 * (low + high));

                if (target === matrix[midRow][midCol]) {
                    return true;
                } else if (target < matrix[midRow][midCol]) {
                    high = midCol - 1;
                } else {
                    low = midCol + 1;
                }
            }

            // If reach here, target is NOT in mid
            return false;
        }
        // Else if target is less than midRow-index row values, adjust high
        else if (target < matrix[midRow][0]) {
            high = midRow - 1;
        }
        // Else target is more than midRow-index row values, adjust low
        else {
            low = midRow + 1;
        }
    }

    // If reach here, target NOT in range of any rows
    return false;
};