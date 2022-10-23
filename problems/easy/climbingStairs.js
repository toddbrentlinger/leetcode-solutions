'use strict';

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // Given n, find (n+1)th Fibonacci number: 1,1,2,3,5,8,13
    let prev = 0;
    let fib = 1;
    let temp;

    while (n > 0) {
        temp = fib;
        fib += prev; // Add prev to fib to get next number in fibonacci sequence
        prev = temp; // Assign prev to previous number in fibonacci sequence

        // Decrement n, treating it like a counter
        n--;
    }

    return fib;
};

/**
 * Performs single unit test for climbStairs function.
 * @param {Number} input 
 * @param {Number} expectedOutput 
 * @returns {Boolean}
 */
var climbStairsUnitTestSingle = function(input, expectedOutput) {
    const actualOutput = climbStairs(input);

    if (actualOutput !== expectedOutput) {
        console.error(`Input: ${input}\nOutput(expected): ${expectedOutput}\nOutput(actual): ${actualOutput}`);
        return false;
    }

    return true;
};

/* Performs all unit tests for climbStairs function. */
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
 * n = 1 => output = 1
 * 1 => 1 1-step (1)
 * 
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
 * 1+1+1+1 => 1 4-steps (1)
 * 1+1+2 
 * 1+2+1
 * 2+1+1 => 3 3-steps (n-1)
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
 * 1+1+1+1+1+1 => 1 6-steps (1)*
 * 1+1+1+1+2
 * 1+1+1+2+1
 * 1+1+2+1+1
 * 1+2+1+1+1
 * 2+1+1+1+1 => 5 5-steps (n-1) *
 * - 1 #2 at every position
 * 1+1+2+2
 * 1+2+1+2
 * 2+1+1+2
 * 1+2+2+1
 * 2+1+2+1
 * 2+2+1+1 => 6 4-steps
 * 2+2+2 => 1 3-steps
 * 
 * n = 7 => output = 21 => min_steps=(n/2)=3.5=4
 * 1+1+1+1+1+1+1 => 1 7-steps (1)
 * 2+1+1+1+1+1
 * 1+2+1+1+1+1
 * 1+1+2+1+1+1
 * 1+1+1+2+1+1
 * 1+1+1+1+2+1
 * 1+1+1+1+1+2 => 6 6-steps (n-1)
 * - 1 #2 at every position
 * 2+2+1+1+1
 *
 * 0 => 0
 * 1 => 1 
 * 2 => 2
 * 3 => 3
 * 4 => 5
 * 5 => 8
 * 6 => 13
 * 7 => 21
 * 8 => 34
 * 
 * Fibonacci sequence: 1,1,2,3,5,8,13,21,34
 *                  n: -,1,2,3,4,5, 6, 7, 8
 * Given n, find (n+1)th Fibbonacci number
 * 
 * n = 3
 * n=3, prev=0 fib=1, temp=fib=1, fib+=prev=1 prev=temp=1, n--
 * n=2, prev=1 fib=1, temp=fib=1, fib+=prev=2 prev=temp=1, n--
 * n=1, prev=1, fib=2, temp=fib=2, fib+=prev=3 prev=temp=2, n--
 * n=0, end, fib=3
 * 
 * n = 5
 * n=5, prev=0 fib=1, temp=fib=1, fib+=prev=1 prev=temp=1, n--
 * n=4, prev=1 fib=1, temp=fib=1, fib+=prev=2 prev=temp=1, n--
 * n=3, prev=1 fib=2, temp=fib=2, fib+=prev=3 prev=temp=2, n--
 * n=2, prev=2 fib=3, temp=fib=3, fib+=prev=5 prev=temp=3, n--
 * n=1, prev=3 fib=5, temp=fib=5, fib+=prev=8 prev=temp=3, n--
 * n=0
 */
