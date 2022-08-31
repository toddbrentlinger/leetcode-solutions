/*
* [1,1] add 1, i=1 val=1 increment by one
* [1,2] return
*
* [1,9] add 1, i=1 val=9 set to 0, add 1 to decremented i
* [1,0] add 1, i=0 val=1
* [2,0] return
*
* [9] add 1, i=0 val=9 set to 0, add 1 to decremented i
* [0] add 1, i=-1 concat [1]+[0]
* [1,0] return
*
* [9,9] add 1, i=1 val=9 set to 0, add 1 to decremented i
* [9,0] add 1, i=0 val=9 set to 0, add 1 to decremented i
* [0,0] add 1, i=-1 concat [1]+[0,0]
* [1,0,0] return
*
* [1,1,9] i=2 val=9 set to 0, add 1 to decremented i
* [1,1,0] add 1, i=1 val=1
* [1,2,0] return
**/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let bToAddOne = true;
    let index = digits.length - 1;

    // Return if digits is empty
    if (index === -1) {
        return digits;
    }

    while (bToAddOne && index >= 0) {
        if (digits[index] === 9) {
            // Set value at index to 0
            digits[index] = 0;
        } else { // Else digits[index] != 9
            // Increment value at index (will be less than 10)
            digits[index] += 1
            // Set bToAddOne to false to stop loop
            bToAddOne = false;
        }
        // Decrement index
        index -= 1;
    }

    // If finish loop and bToAddOne is still true, prepend 1 to digits array
    return (bToAddOne) ? [1].concat(digits) : digits;
};

/**
 * @param {number[]} input
 * @param {number[]} expectedOuptut
 */
var plusOneUnitTest = function (input, expectedOuptut) {
    const output = plusOne(input);
    if (!areArraysEqual(output, expectedOuptut)) {
        console.error(`Input: ${input}\nOutput(expected): ${expectedOuptut}\nOutput(actual): ${output}`);
    }
};

var plusOneUnitTestAll = function () {
    plusOneUnitTest([1,2,3], [1,2,4]);
    plusOneUnitTest([4,3,2,1], [4,3,2,2]);
    plusOneUnitTest([9], [1,0]);
    plusOneUnitTest([], []);
    plusOneUnitTest([1, 1], [1, 2]);
    plusOneUnitTest([1, 9], [2, 0]);
    plusOneUnitTest([9,9], [1,0,0]);
    plusOneUnitTest([1,1,9], [1,2,0]);
};

var areArraysEqual = function (arr1, arr2) {
    // Compare lengths
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Compare each value, knowing their equal lengths
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If reach here, arrays are equal
    return true;
};
