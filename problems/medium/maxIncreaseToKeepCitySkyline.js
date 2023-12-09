/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 54ms (75.63%)
 * Memory: 42.92MB (52.94%)
 * Time Complexity: O(n x n) each node of nxn grid is traversed twice
 * Space Complexity: O(n) where n is one-dimension of grid square nxn
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const size = grid[0].length;
    let rowMax = new Array(size).fill(0);
    let colMax = new Array(size).fill(0);
    let heightIncrease = 0;
    let row, col;

    // Find max values in each row
    // Find max values in each column
    for (row = 0; row < size; row++) {
        for (col = 0; col < size; col++) {
            // Check row max
            if (grid[row][col] > rowMax[row]) {
                rowMax[row] = grid[row][col];
            }
            // Check column max
            if (grid[row][col] > colMax[col]) {
                colMax[col] = grid[row][col];
            }
        }
    }

    // Adjust each node
    for (row = 0; row < size; row++) {
        for (col = 0; col < size; col++) {
            // Skip if node value if it's the max height along row OR column
            if (grid[row][col] === rowMax[row] || grid[row][col] === colMax[col]) {
                continue;
            }

            // Increase total sum of height increase by difference of min(max row, max column height) and node value
            heightIncrease += Math.min(rowMax[row], colMax[col]) - grid[row][col];
        }
    }

    return heightIncrease;
};

/**
- Every node can be changed to minimum of two heights. Each height is maximum
height in that same row AND column.
- If node is maximum value in row OR column, it cannot be changed.
ex. 
0,0 -> 3
Max Row: 8
Max Col: 9
Therefore node can be increased by min(8,9) = 8


 */