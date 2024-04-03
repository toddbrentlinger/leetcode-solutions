/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * Runtime: 218ms (98.03%)
 * Memory: 50.16MB (59.14%)
 * Time Complexity: O(n x m x l) where n x m is size of board 2D-array and l is length of word
 * Space Complexity: O(n x m)
 */
var exist = function(board, word) {
    // Special Case: If word length is longer than nodes in board, return false
    if (board.length * board[0].length < word.length) {
        return false;
    }

    // Special Case: If word length is 1, simply search for existence of single 
    // character in board

    let iRow, iCol, usedNodesBoard;

    // Create usedNodesBoard the same size as 2D board array with all values initialized to zero
    usedNodesBoard = new Array(board.length);
    for (iRow = 0; iRow < board.length; iRow++) {
        usedNodesBoard[iRow] = new Array(board[0].length).fill(false);
    }
    
    iRow = iCol = 0;
    for (iRow = 0; iRow < board.length; iRow++) {
        for (iCol = 0; iCol < board[0].length; iCol++) {
            // If board node has value equal to first character of word, search 
            // for rest of world from this node. Use backtracking since word 
            // sequence can continue in any direction.
            if (board[iRow][iCol] === word[0] 
                && existBacktrack(word, 1, iRow, iCol, board, usedNodesBoard)
            ) {
                return true;
            }
        }
    }

    return false;
};

var existBacktrack = function(word, iWord, iRow, iCol, board, usedNodesBoard) { 
    /**
    Check if word[iWord] is in top, right, bottom, or left node.
    If it is, check if rest of the word can continue from that node using recursion.
    If it is NOT, word cannot be completed from current node. Return false.
     */

    // If index for word is out-of-range, found entire word
    if (iWord >= word.length) { return true; }
    
    let doesExist = false;

    // Add current node to usedNodesBoard
    usedNodesBoard[iRow][iCol] = true;
    
    // Top
    if (iRow > 0 && !usedNodesBoard[iRow - 1][iCol] && board[iRow - 1][iCol] === word[iWord]) {
        doesExist = existBacktrack(word, iWord + 1, iRow - 1, iCol, board, usedNodesBoard);
    }
    // Right
    if (!doesExist && iCol < board[0].length - 1 && !usedNodesBoard[iRow][iCol + 1] && board[iRow][iCol + 1] === word[iWord]) {
        doesExist = existBacktrack(word, iWord + 1, iRow, iCol + 1, board, usedNodesBoard);
    }
    // Bottom
    if (!doesExist && iRow < board.length - 1 && !usedNodesBoard[iRow + 1][iCol] && board[iRow + 1][iCol] === word[iWord]) {
        doesExist = existBacktrack(word, iWord + 1, iRow + 1, iCol, board, usedNodesBoard);
    }
    // Left
    if (!doesExist && iCol > 0 && !usedNodesBoard[iRow][iCol - 1] && board[iRow][iCol - 1] === word[iWord]) {
        doesExist = existBacktrack(word, iWord + 1, iRow, iCol - 1, board, usedNodesBoard);
    }

    // Remove current node from usedNodesBoard
    usedNodesBoard[iRow][iCol] = false;
    
    return doesExist;
};
