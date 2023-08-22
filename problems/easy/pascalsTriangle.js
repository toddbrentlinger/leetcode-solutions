/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    switch(numRows) {
        case 1:
            return [[1]];
        case 2:
            return [[1], [1,1]];
        default:
            let output = [[1], [1,1]];
            let prevRow = 1;
            let i;

            while (prevRow < numRows - 1) {
                output[prevRow + 1] = [1];
                i = 0;
                while (i < output[prevRow].length - 1) {
                    output[prevRow + 1].push(output[prevRow][i] + output[prevRow][i + 1]);
                    i++;
                }
                output[prevRow + 1].push(1);
                prevRow++;
            }

            return output;
    }
};
