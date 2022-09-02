'use strict';

/**
 * 0 - 0
 * 1 - 1 
 * 2 - 1
 * 3 - 1
 * 4 - 2
 * 5 - 2 
 * 6 - 2
 * 7 - 2
 * 8 - 2
 * 9 - 3
 * 10 - 3
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

};

/**
 * Repeated Subtraction Method
 * @param {any} x
 * 
 * Subtract by 1,3,5,...
 * 0 - 0 - 0
 * 1 - 1,0 - 1
 * 2 - 2,1,-2 - 2 (nonzero end -1) - 1
 * 3 - 3,2,-1 - 2 (nonzero end -1) - 1
 * 4 - 4,3,0 - 2
 * 5 - 5,4,1,-4 - 3 (nonzero end -1) - 2
 * 
 * Subtract by 3,5,7,...
 * 0 - 0 - 0
 * 1 - 1,-2 - 1
 * 2 - 2,-1 - 1
 * 3 - 3,0 - 1
 * 4 - 4,1,-4 - 2
 */
var mySqrtRepeatedSubtraction = function (x) {
    let sqrt = 0; // Incremented every loop
    let subNum = 3; // Odd number increased by 2 every loop

    while (x > 0) {
        // Subtract odd number from input
        x -= subNum;

        // Increase to next odd number
        subNum += 2;

        // Increment count representing the square root
        sqrt++;
    }

    return sqrt;
};

// Prime Factorization Method
var mySqrtPrimeFactorization = function (x) {

};

// Estimation Method
var mySqrtEstimation = function (x) {

};

// Long Division Method
var mySqrtLongDivision = function (x) {

};

var mySqrtUnitTest = function (mySqrtFunc, input, expectedOutput) {
    const actualOutput = mySqrtFunc(input);

    if (actualOutput !== expectedOutput) {
        console.error(`Input: ${input}\nOutput(expected): ${expectedOuptut}\nOutput(actual): ${actualOutput}`);
        return false;
    }

    return true;
};

var mySqrtUnitTestAll = function (mySqrtFunc, numTests = 100) {
    const tests = [
        [4, 2],
        [8, 2],
    ];
    const randCount = numTests - tests.length;
    const randMin = 0; // Inclusive
    const randMax = Math.pow(2, 31); // Exclusive
    let randInput;

    // Add random tests
    for (let i = 0; i < randCount; i++) {
        // Get random input, ensuring not already in array of tests
        do {
            randInput = Math.floor(Math.random() * (randMax - randMin) + randMin);
        } while (tests.find(subArr => subArr[0] === randInput) !== undefined);

        // Find expected output
        // Add values to tests array
        tests.push(
            [
                randInput,
                Math.floor(Math.sqrt(randInput))
            ]
        );
    }

    // Testing
    let bDoAllTestsPass = true;
    let bTestSuccess;
    tests.forEach(test => {
        bTestSuccess = mySqrtUnitTest(mySqrtFunc, test[0], test[1]);
        if (!bTestSuccess && bDoAllTestsPass) {
            bDoAllTestsPass = false;
        }
    });
    if (bDoAllTestsPass) {
        console.log('All Tests Pass!');
    }
};
