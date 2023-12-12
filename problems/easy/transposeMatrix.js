/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * Runtime: 59ms (75.40%)
 * Memory: 44.00MB (90.91%)
 * Time Complexity: O(row x col)
 * Space Complexity: O(row x col)
 */
var transpose = function(matrix) {
    let row, col;

    // Create empty 2D matrix that has opposite rows/columns than original matrix
    let transposeMatrix = new Array(matrix[0].length);
    for (row = 0; row < matrix[0].length; row++) {
        transposeMatrix[row] = new Array(matrix.length);
    }

    // Add matrix[row][col] to transposeMatrix[col][row]
    for (row = 0; row < matrix.length; row++) {
        for (col = 0; col < matrix[0].length; col++) {
            transposeMatrix[col][row] = matrix[row][col];
        }
    }

    return transposeMatrix;
};