"use strict";

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    /*
    PAYPALISHIRING [14]
    |    |    |  |
    0    5   10  13
    
    numRows = 3
    
    0   4   8     12 -> 0 -> +4 -> +4
    1 3 5 7 9  11 13 -> 1 -> +2 -> +2 ...
    2   6   10       -> 2 -> +4 -> +4
    
    numRows = 4
    
    0     6       12 -> 0 -> +6 -> +6
    1   5 7    11 13 -> 1 -> +4 -> +2 -> +4 > +2 
    2 4   8 10       -> 2 -> +2 -> +4 -> +2
    3     9         -> 3 -> +6
    
    numRows = 5
    
    0       8           16 -> 0 +8 +8       -> +(2n-2)
    1     7 9        15 17 -> 1 +6 +2 +6 +2 -> +(2n-4) +2
    2   6   10    14    18 -> 2 +4 +4 +4    -> +(2n-6) +4
    3 5     11 13       19 -> 3 +2 +6 +2 +6 -> +2 +(2n-4)
    4       12          20 -> 4 +8          -> +(2n-2)
    
    numRows = 6
    
    0      10          20 -> 0 +10 +10 -> +(2n-2)
    1    9 11       19 21 -> 1 +8 +2 +8 -> +(2n-4) +2
    2   8  12     18   22 -> 2 +6 +4 +6 -> +(2n-6) +4
    3  7   13   17     23 -> 3 +4 +6 +4 -> +4 +(2n-6)
    4 6    14 16       24 -> 4 +2 +8 +2 -> +2 +(2n-4)
    5      15          25 -> 5 +10 +10 -> +(2n-2)
    
    numRows = 7
    
    0         12            24 -> +(2n-2)    -> 0-2 -> 2n-(2i+2) = 2(n-i-1)
    1      11 13         23 25 -> +(2n-4) +2 -> 1-4
    2    10   14       22   26 -> +(2n-6) +4 -> 2-6
    3   9     15     21     27 -> +(2n-8) +6 -> 3-8
    4  8      16   20       28 -> +4 +(2n-6) -> 
    5 7       17 19         29 -> +2 +(2n-4) -> 
    6         18            30 -> +(2n-2)    ->    -> 2n-(2(n-i-1)+2) = 2n-(2n-2i-2+2) = 2i
    */

    // If single row, return the string unchanged
    if (numRows === 1 || s.length < numRows)
        return s;
    
    let newStr = "";
    let currIndex, colIndex;
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        // Start row at first column index
        currIndex = rowIndex;
        colIndex = 0;
        while (currIndex < s.length) {
            // Add character to end of new string
            newStr = newStr.concat(s[currIndex]);

            // If top or bottom row
            if (rowIndex === 0 || rowIndex === numRows - 1) {
                currIndex += 2 * numRows - 2;
            } else { // Else middle row
                if (colIndex % 2) // If odd number colIndex
                    currIndex += 2 * rowIndex;
                else // Else even number colIndex
                    currIndex += 2 * (numRows - rowIndex - 1);
            }

            // Increment colIndex
            colIndex++;
        }
    }

    return newStr;
};