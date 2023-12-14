/**
 * @param {number[][]} grid
 * @return {number[][]}
 * Runtime: 284ms (93.18%)
 * Memory: 102.95MB (95.45%)
 * Time Complexity: O(m x n) where (m x n) is dimension of grid
 * Space Complexity: O(m + n)
 */
var onesMinusZeros = function(grid) {
    let onesRow = new Array(grid.length).fill(0); // Holds number of ones in ith row
    let onesCol = new Array(grid[0].length).fill(0); // Holds number of ones in ith column
    let row, col;

    // Calculate sum of ones in each row and column
    for (row = 0; row < onesRow.length; row++) {
        for (col = 0; col < onesCol.length; col++) {
            if (grid[row][col] === 1) {
                onesRow[row]++;
                onesCol[col]++;
            }
        }
    }

    // Calculate difference between ones and zeros for each node using sum of 
    // ones of each row/column AND size of each
    for (row = 0; row < onesRow.length; row++) {
        for (col = 0; col < onesCol.length; col++) {
            // onesRow[row] + onesCol[col] - zerosRow[row] - zerosCol[col]
            // onesRow[row] + onesCol[col] - (colSize - onesRow[row]) - (rowSize - onesCol[col])
            // 2 * onesRow[row] + 2 * onesCol[col] - rowSize - colSize
            grid[row][col] = 2 * onesRow[row] + 2 * onesCol[col] - onesRow.length - onesCol.length;
        }
    }

    return grid;
};

/**
- Find how many ones are in each row and column
- Can calculate how many zeros are in ith row:
    zerosRow[row] = colSize - onesRow[row]

onesRow[row] + onesCol[col] - zerosRow[row] - zerosCol[col]
onesRow[row] + onesCol[col] - (colSize - onesRow[row]) - (rowSize - onesCol[col])
2 * onesRow[row] + 2 * onesCol[col] - rowSize - colSize
 */