/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
};

/**
 * 
 * @param {Object} input
 * @param {Number{}} input.nums1
 * @param {Number} input.m
 * @param {Number[]} input.nums2
 * @param {Number} input.n 
 * @param {Number[]} expectedOutput
 */
var mergeUnitTest = function(input, expectedOutput) {
    const originalInput = input;

    merge(input.nums1, input.m, input.nums2, input.n);

    if (!areArraysEqual(input.nums1, expectedOutput)) {
        console.error(`Input: ${originalInput}\nOutput(expected): ${expectedOutput}\nOutput(actual): ${input.nums1}`);
        return false;
    }

    return true;
};

/** */
var mergeUnitTestAll = function() {
    const tests = [
        {
            input: {
                nums1: [1,2,3,0,0,0],
                m: 3,
                nums2: [2,5,6],
                n: 3
            },
            expectedOutput: [1,2,2,3,5,6],
        },
        {
            input: {
                nums1: [1],
                m: 1,
                nums2: [],
                n: 0
            },
            expectedOutput: [1],
        },
        {
            input: {
                nums1: [0],
                m: 0,
                nums2: [1],
                n: 1
            },
            expectedOutput: [1],
        },
    ];

    let bDoAllTestsPass = true;
    let bTestSuccess;
    tests.forEach((test) => {
        bTestSuccess = mergeUnitTest(test.input, test.expectedOutput);
        if (!bTestSuccess && bDoAllTestsPass) {
            bDoAllTestsPass = false;
        }
    });
    if (bDoAllTestsPass) {
        console.log('All Tests Pass!');
    }
};

/**
 * 
 * @param {Number[]} arr1 
 * @param {Number[]} arr2
 * @return {Boolean} 
 */
var areArraysEqual = function(arr1, arr2) {
    // Compare lengths
    if (arr1.length !== arr2.length) { return false; }

    // Compare each value
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) { return false; }
    }

    // If reach here, arrays are equal
    return true;
};
