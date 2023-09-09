/**
 * @param {number} rowIndex
 * @return {number[]}
 * Runtime: 42ms (94.88%)
 * Memory: 41.96MB (54.06%)
 */
var getRow = function(rowIndex) {
    // Fill array with one plus rowIndex of ones
    let output = Array(rowIndex + 1).fill(1);
    // End index after each row new has been created
    let iStart = 0;
    let i;

    while (rowIndex-- > 0) {
        // Loop backwards, starting with last index of last row created
        for (i = iStart++; i > 0; i--) {
            // Add value at ith index with value at previous index
            output[i] += output[i - 1];
        }
    }

    return output;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 * Runtime: 47ms (85.69%)
 * Memory: 41.50MB (91.70%)
 */
var getRow2 = function(rowIndex) {
    let output = Array(rowIndex + 1).fill(1);
    let iStart = 0;
    let i;

    while (rowIndex > 0) {
        i = iStart++;

        while (i > 0) {
            output[i] += output[i - 1];
            i--;
        }

        rowIndex--;
    }

    return output;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow1 = function(rowIndex) {
    let output = [1];
    let i;

    while (rowIndex > 0) {
        i = output.length - 1;
        output.push(1);

        while (i > 0) {
            output[i] += output[i - 1];
            i--;
        }

        rowIndex--;
    }

    return output;
};
/*

1 3 3 1
      i
i is last index, push 1 to arr
1 3 3 1 1
      i
Set arr[i] += arr[i-1] = 4, decrement i
1 3 3 4 1
    i
Set arr[i] += arr[i-1] = 6, decrement i
1 3 6 4 1
  i
Set arr[i] += arr[i-1] = 4, decrement i
1 4 6 4 1
i
Reach beginning, end loop

1 4 6 4 1
 */