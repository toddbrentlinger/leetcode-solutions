/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [[1]];
    let currRow = 1;
    let i;

    while (currRow < numRows) {
        output[currRow] = [...output[currRow - 1], 1];

        for (i = 1; i < currRow; i++) {
            output[currRow][i] = output[currRow - 1][i - 1] + output[currRow - 1][i];
        }

        currRow++;
    }

    return output;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate4 = function(numRows) {
    let output = [[1]];
    let prevRow = 0;
    let i;

    while (prevRow < numRows - 1) {
        output[prevRow + 1] = [...output[prevRow], 1];

        for (i = 1; i < prevRow + 1; i++) {
            output[prevRow + 1][i] = output[prevRow][i - 1] + output[prevRow][i];
        }

        prevRow++;
    }

    return output;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate3 = function(numRows) {
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
                output[prevRow + 1] = [...output[prevRow], 1];

                for (i = 1; i < prevRow + 1; i++) {
                    output[prevRow + 1][i] = output[prevRow][i - 1] + output[prevRow][i];
                }

                prevRow++;
            }

            return output;
    }
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate2 = function(numRows) {
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
                output[prevRow + 1] = Array(prevRow + 2).fill(1);

                for (i = 1; i < prevRow + 1; i++) {
                    output[prevRow + 1][i] = output[prevRow][i - 1] + output[prevRow][i];
                }

                prevRow++;
            }

            return output;
    }
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate1 = function(numRows) {
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
