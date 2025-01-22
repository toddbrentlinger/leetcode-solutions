/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 * Runtime: 42ms (97.62%)
 * Memory: 75.45MB (96.28%)
 * Time Complexity: O(n) - Every index of array arr and every node of matrix 
 *                         mat is traversed once
 * Space Complexity: O(n) - Key/value pair of value and index of arr is stored.
 *                          Index is stored for each row and column.
 */
var firstCompleteIndex = function(arr, mat) {
    // Temporary variables for for-loops
    let row, col, i;

    /**
     * Keeps maximum index of value in array arr that has matching value in 
     * the matrix row/col.
     */
    let maxRowIndexHash = new Array(mat.length).fill(0);
    let maxColIndexHash = new Array(mat[0].length).fill(0);

    /**
     * Hash table object where key is number in array arr and value is index in 
     * array of the corresponding number.
     */
    let arrValueIndexHash = {};
    for (i = 0; i < arr.length; i++) {
        arrValueIndexHash[arr[i]] = i;
    }

    /**
     * Traverse each node of matrix mat, find index in array arr with matching 
     * value in that node, and update maximum index for the corresponding row 
     * and column if necessary. In the end, the maximum index in array arr for 
     * a value in each row and column will be set.
     */
    for (row = 0; row < mat.length; row++) {
        for (col = 0; col < mat[0].length; col++) {
            // Find index in arr with value equal to value in matrix at row x col
            i = arrValueIndexHash[mat[row][col]];

            // Update max index hash values for row and col if necessary

            if (i > maxRowIndexHash[row]) {
                maxRowIndexHash[row] = i;
            }

            if (i > maxColIndexHash[col]) {
                maxColIndexHash[col] = i;
            }
        }
    }

    /**
     * Return minimum index from both max index hash tables. This index represents 
     * the first index of array arr that completely paints a row or column.
     */
    return Math.min(...maxRowIndexHash, ...maxColIndexHash);
};

/**
- Find minimum index in each row and column, return minimum index.
Create hash table object where key is number in array and value is index of 
that value.
 */

/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 * TIME LIMIT EXCEEDED
 */
var firstCompleteIndex = function(arr, mat) {
    const maxColCount = mat[0].length;
    const maxRowCount = mat.length;
    let paintedColCounts = new Array(maxRowCount).fill(0);
    let paintedRowCounts = new Array(maxColCount).fill(0);

    let row, col;

    for (let i = 0; i < arr.length; i++) {
        for (row = 0; row < mat.length; row++) {
            for (col = 0; col < maxColCount; col++) {
                if (mat[row][col] === arr[i]) {
                    paintedColCounts[row]++;

                    if (paintedColCounts[row] === maxColCount) {
                        return i;
                    }

                    paintedRowCounts[col]++;

                    if (paintedRowCounts[col] === maxRowCount) {
                        return i;
                    }
                }
            }
        }
    }
};

/**
- Keep track of number of columns in each row that is painted. Since no 
duplicate numbers, just need to track count. When the count in a row 
reaches the max number of columns, return the index.
TIME LIMIT EXCEEDED
 */