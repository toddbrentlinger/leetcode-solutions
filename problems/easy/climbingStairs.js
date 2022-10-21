'use strict';

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
};

var climbStairsUnitTestSingle = function(input, expectedOutput) {
    const actualOutput = climbStairs(input);

    if (actualOutput !== expectedOutput) {
        console.error(`Input: ${input}\nOutput(expected): ${expectedOutput}\nOutput(actual): ${actualOutput}`);
        return false;
    }

    return true;
};

var climbStairsUnitTestAll = function() {
    const tests = [
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 8],
        [6, 13],
        [7, 21],
    ];
    
    let bDoAllTestsPass = true;
    let bTestSuccess;
    
    tests.forEach((test) => {
        bTestSuccess = climbStairsUnitTestSingle(test[0], test[1]);
        if (!bTestSuccess && bDoAllTestsPass) {
            bDoAllTestsPass = false;
        }
    });

    if (bDoAllTestsPass) {
        console.log('All Tests Pass!');
    }
};

/**
 * n = 2 => output = 2 => max_steps=(n/2)=1
 * 1+1 => 1 2-steps (1)
 * 2 => 1 1-step (n-1)
 * 
 * n = 3 => output = 3 => min_steps=(n/2)=1.5=2
 * 1+1+1 => 1 3-steps (1)
 * 1+2
 * 2+1 => 2 2-steps (n-1)
 * 
 * n = 4 => output = 5 => min_steps=(n/2)=2
 * 1+1+1+1 => 1 4-steps (1) *
 * 1+1+2 
 * 1+2+1
 * 2+1+1 => 3 3-steps (n-1) *
 * 2+2 => 1 2-steps (n-3)
 * 
 * n = 5 => output = 8 => min_steps=(n/2)=2.5=3
 * 1+1+1+1+1 => 1 5-steps
 * 1+1+1+2
 * 1+1+2+1
 * 1+2+1+1
 * 2+1+1+1 => 4 4-steps (n-1)
 * 2+2+1
 * 2+1+2
 * 1+2+2 => 3 3-steps (n-2)
 * 
 * n = 6 => output = 13 => min_steps=(n/2)=3
 * 1+1+1+1+1+1 => 1 6-steps
 * 1+1+1+1+2
 * 1+1+1+2+1
 * 1+1+2+1+1
 * 1+2+1+1+1
 * 2+1+1+1+1 => 5 5-steps (n-1)
 * 1+1+2+2
 * 1+2+1+2
 * 2+1+1+2
 * 1+2+2+1
 * 2+1+2+1
 * 2+2+1+1 => 6 4-stes
 * 2+2+2 => 1 3-steps
 * 
 * 2 => 2
 * 3 => 3
 * 4 => 5
 * 5 => 8
 * 6 => 13
 * 7 => 21
 */
