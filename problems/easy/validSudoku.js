/**
 * @param {character[][]} board
 * @return {boolean}
 * Runtime: 53ms (96.35%)
 * Memory: 44.50MB (85.79%)
 * Time Complexity: O(n) Checks each node 3 times for row, column, and sub-box
 * Space Complexity: O(1) Only ever creates set of max 9 numbers
 */
var isValidSudoku = function(board) {
    let set = new Set();
    let val, row, col, boxRow, boxCol;

    // Rows
    for (row = 0; row < 9; row++) {
        for (col = 0; col < 9; col++) {
            val = board[row][col];
            if (val === '.') { continue; }
            if (set.has(val)) { return false; }
            set.add(val);
        }
        set.clear();
    }

    // Columns
    for (row = 0; row < 9; row++) {
        for (col = 0; col < 9; col++) {
            val = board[col][row];
            if (val === '.') { continue; }
            if (set.has(val)) { return false; }
            set.add(val);
        }
        set.clear();
    }

    // Sub-boxes
    for (row = 0; row < 3; row++) {
        for (col = 0; col < 3; col++) {
            for (boxRow = 0; boxRow < 3; boxRow++) {
                for (boxCol = 0; boxCol < 3; boxCol++) {
                    val = board[3 * row + boxRow][3 * col + boxCol];
                    if (val === '.') { continue; }
                    if (set.has(val)) { return false; }
                    set.add(val);
                }
            }
            set.clear();
        }
    }

    return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 * Runtime: 63ms (73.86%)
 * Memory: 45.28MB (57.33%)
 */
var isValidSudoku1 = function(board) {
    let set = new Set();
    let row, col, boxRow, boxCol;

    var isValid = function(val) {
        if (val === '.') { return true; }
        if (set.has(val)) { return false; }
        set.add(val);
        return true;
    };

    // Rows
    for (row = 0; row < 9; row++) {
        for (col = 0; col < 9; col++) {
            if (!isValid(board[row][col])) { return false; }
        }
        set.clear();
    }

    // Columns
    for (row = 0; row < 9; row++) {
        for (col = 0; col < 9; col++) {
            if (!isValid(board[col][row])) { return false; }
        }
        set.clear();
    }

    // Sub-boxes
    for (row = 0; row < 3; row++) {
        for (col = 0; col < 3; col++) {
            for (boxRow = 0; boxRow < 3; boxRow++) {
                for (boxCol = 0; boxCol < 3; boxCol++) {
                    if (!isValid(board[3 * row + boxRow][3 * col + boxCol])) { return false; }
                }
            }
            set.clear();
        }
    }

    return true;
};