/**
 * @param {number[][]} mat
 * @return {number}
 * Runtime: 56ms (80.46%)
 * Memory: 44.75MB (41.38%)
 * Time Complexity: O(m x n) where m is rows and n is columns (every node traversed once)
 * Space Complexity: O(m x n) worst case mat is full of ones and every column index key in map has all row indices as value
 */
var numSpecial = function(mat) {
    let colRowMap = new Map(); // key are col indices and values are row indices where [row][col] has a one
    let rowSet = new Array(mat.length).fill(0); // Count of ones in ith row

    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            if (mat[row][col] === 1) {
                // Add row index to col index key in map
                if (colRowMap.has(col)) {
                    colRowMap.get(col).push(row);
                } else {
                    colRowMap.set(col, [row]);
                }

                // Increment count in row index
                rowSet[row]++;
            }
        }
    }
    
    // Return count of all col keys with only one row index as value in colRowMap
    // AND that row index has count of 1 in rowSet
    return [...colRowMap.values()]
        .reduce((accum, curr) => (curr.length === 1 && rowSet[curr[0]] === 1) ? accum + 1 : accum, 0);
};

/**
1 1 1
1 1 1
0 0 0

- No need to check last row since special position cannot be possible.
    - Keep set of columns no longer possible. If size reaches matrix width, 
    no longer need to check remaining rows.

1 0 1
1 1 0
1 0 0

- No need to check last row after first column since special position cannot be possible.
    - DO NOT need to keep set of rows no longer possible, since never return to previous rows
    in loop like you do with columns.

_______________________________________________________________________________

1 1 0
1 0 0
0 1 1

0,0 (1)
Can possibly be special position

0,1 (1)
Cannot possibly be 0th row or 0th column
_______________________________________________________________________________

3x3

1 0 0
0 0 1
1 0 0

Array same length as cols. Value is row index of potential special position.
colStates = [0, 0, 0]

0,0 (1)
ithRowPerIthCol[0] is still -1
Set ithRowPerIthCol[0] to 0
ithRowPerIthCol = [0, -1, -1]

0,1 (0)
0,2 (0)
1,0 (0)
1,1 (0)
skip

1,2 (1)
ithRowPerIthCol[2] is still -1
Set ithRowPerIthCol[2] to 1
ithRowPerIthCol = [0, -1, 1]

2,0 (1)
ithRowPerIthCol[0] already has valid index
Set ithRowPerIthCol[0] to -1

_______________________________________________________________________________

1 0 0
0 1 0
0 0 1

rows = [0, 1, 2]
cols = [0, 1, 2]


_______________________________________________________________________________

3x3

1 1 0
1 1 0
0 0 1

specialPos = 0
rows = [0,0,0]
cols = [0,0,0]
0 - all zeros in row/col
1 - single 1 in row/col
-1 - multiple 1s in row/col

0,0 (1)
rows[0] = 0
cols[0] = 0
Since node is 1 AND both rows/cols values are zero, node can possibly be special position
Set rows[0] and cols[0] to 1
rows = [1,0,0]
cols = [1,0,0]
Increment specialPos
specialPos = 1

0,1 (1)
rows[0] = 1
cols[1] = 0
Since node is 1 BUT rows[0] already has 1, current node AND other node on rows[0] cannot be 
special position.
Set rows[0] to -1
Can skips all nodes in 0-column going forward
rows = [1,1,0]
cols = [-1,0,1]
Decrement specialPos
specialPos = 1

_______________________________________________________________________________

3x3

1 0 0
0 0 1
1 0 0

specialPos = 0
rows = [0,0,0]
cols = [0,0,0]
0 - all zeros in row/col
1 - single 1 in row/col
-1 - multiple 1s in row/col

0,0 (1)
rows[0] = 0
cols[0] = 0
Since node is 1 AND both rows/cols values are zero, node can possibly be special position
Set rows[0] and cols[0] to 1
rows = [1,0,0]
cols = [1,0,0]
Increment specialPos
specialPos = 1

0,1 (0)
Node is 0, skip

0,2 (0)
1,0 (0)
1,1 (0)
...
skip

1,2 (1)
rows[1] = 0
cols[2] = 0
Since node is 1 AND both rows/cols values are zero, node can possibly be special position
Set rows[1] and cols[2] to 1
rows = [1,1,0]
cols = [1,0,1]
Increment specialPos
specialPos = 2

2,0 (1)
rows[2] = 0
cols[0] = 1
Since node is 1 BUT cols[0] already has 1, current node AND other node on cols[0] cannot be 
special position.
Set cols[0] to -1
Can skips all nodes in 0-column going forward
rows = [1,1,0]
cols = [-1,0,1]
Decrement specialPos
specialPos = 1

2,1 (0)
2,2 (0)
...
skip

rows = [1,1,0]
cols = [-1,0,1]

return specialPos = 1

 */