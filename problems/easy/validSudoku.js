/**
 * @param {character[][]} board
 * @return {boolean}
 * Runtime: 53ms (96.35%)
 * Memory: 44.50MB (85.79%)
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