// ----------------------------------------------------------------------------
// Dynamic Programming with (row x col) DP
// ----------------------------------------------------------------------------

/**
 * @param {number[][]} matrix
 * @return {number}
 * Runtime: 58ms (73.25%)
 * Memory: 44.62MB (41.40%)
 * Time Complexity: O(n) where n is total amount of nodes in matrix
 * Space Complexity: O(n) new matrix same size as matrix parameter
 */
var minFallingPathSum = function(matrix) {
    let minSumMatrixDP = new Array(matrix.length);
    let currMinSumMatrix, row, col;

    // Initialize last row of DP to equal last row of matrix
    // Min path sum of only last row nodes is just last row values from matrix
    minSumMatrixDP[minSumMatrixDP.length - 1] = matrix[matrix.length - 1];

    // Loop up from second-to-last row to first row, filling DP with (i,j) value of 
    // min falling path sum it start at (i,j) node in matrix
    for (row = matrix.length - 2; row >= 0; row--) {
        // Adds empty row to DP to hold calculated values for this loop
        minSumMatrixDP[row] = new Array(matrix.length);
        
        for (col = 0; col < matrix.length; col++) {
            // Find minimum falling path sum of three possible children in lower row

            // Middle child
            // Initialize possible min sum matrix with node directly below 
            // since there will always be a node directly below but not 
            // diagonally to the left or right
            currMinSumMatrix = minSumMatrixDP[row + 1][col];

            // Left child
            // Check if left diagonal is minimum
            if ((col - 1) >= 0 && minSumMatrixDP[row + 1][col - 1] < currMinSumMatrix) {
                currMinSumMatrix = minSumMatrixDP[row + 1][col - 1];
            }

            // Rigth child
            // Check if right diagonal is minimum
            if ((col + 1) < minSumMatrixDP.length && minSumMatrixDP[row + 1][col + 1] < currMinSumMatrix) {
                currMinSumMatrix = minSumMatrixDP[row + 1][col + 1];
            }

            // Set DP value to matrix value at that same node PLUS minimum path sum
            // of three children in lower row
            minSumMatrixDP[row][col] = matrix[row][col] + currMinSumMatrix;
        }
    }

    // Return the minimum path sum of the top nodes of the DP
    return Math.min(...minSumMatrixDP[0]);
};