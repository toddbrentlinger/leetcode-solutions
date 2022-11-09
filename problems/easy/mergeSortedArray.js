/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;

    while (j >= 0) {
        if (i < 0 || nums1[i] < nums2[j]) {
            nums1[i+j+1] = nums2[j];
        } else { // Else nums1[i] >= nums2[j]
            nums1[i+j+1] = nums1[i];
            nums1[i+j] = nums2[j];
            i--;
        }

        j--;
    }
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
        {
            input: {
                nums1: [1,3,0,0],
                m: 2,
                nums2: [2,4],
                n: 2
            },
            expectedOutput: [1,2,3,4],
        },
        {
            input: {
                nums1: [2,4,0,0],
                m: 2,
                nums2: [1,3],
                n: 2
            },
            expectedOutput: [1,2,3,4],
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

/**
nums1: [1,2,3,0,0,0],
m: 3,
nums2: [2,5,6],
n: 3
nums1(final): [1,2,2,3,5,6]

i = m-1 = 2, j = n-1 = 2, nums1[i] = 3, nums2[j] = 6
nums1[i] < nums2[j]
nums1[i+j+1] = nums2[j] => nums1[5] = 6
decrement j
nums1 = [1,2,3,0,0,6]

i = 2, j = 1, nums1[i] = 3, nums2[j] = 5
nums1[i] < nums2[j]
nums1[i+j+1] = nums2[j] => nums1[4] = 5
decrement j
nums1 = [1,2,3,0,5,6]

i = 2, j = 0, nums1[i] = 3, nums2[j] = 2
nums1[i] > nums2[j]
nums1[i+j+1] = nums1[i] => nums1[3] = 3
nums1[i+j] = nums2[j] => 
decrement i & j
nums1 = [1,2,2,3,5,6]

i = 1, j = -1
j < 0
end loop
nums1(final) = [1,2,2,3,5,6]

*******************************************************************************

nums1: [1],
m: 1,
nums2: [],
n: 0
nums1(final): [1]

i = m-1 = 0, j = n-1 = -1
j < 0
end loop
nums1(final): [1]

*******************************************************************************

nums1: [0],
m: 0,
nums2: [1],
n: 1
nums1(final): [1]

i = m-1 = -1, j = n-1 = 0, nums1[i] = error, nums2[j] = 1
i < 0
nums1[i+j+1] = nums2[j]
decrement j
nums1 = [1]

i = -1, j = -1
j < 0
end loop
nums1(final) = [1]

*******************************************************************************

nums1: [1,3,0,0],
m: 2,
nums2: [2,4],
n: 2
nums1(final): [1,2,3,4]

i = m-1 = 1, j = n-1 = 1, nums1[i] = 3, nums2[j] = 4
nums1[i] < nums2[j]
nums1[i+j+1] = nums2[j]
decrement j
nums1 = [1,3,0,4]

i = 1, j = 0, nums1[i] = 3, nums2[j] = 2
nums1[i] > nums2[j]
nums1[i+j+1] = nums1[i] => nums1[2] = 3
nums1[i+j] = nums2[j]   => nums1[1] = 2
decrement i & j
nums1 = [1,2,3,4]

i = 0, j = -1
j < 0
end loop
nums1(final): [1,2,3,4]

*******************************************************************************

nums1: [2,4,0,0],
m: 2,
nums2: [1,3],
n: 2
nums1(final): [1,2,3,4]

i = m-1 = 1, j = n-1 = 1, nums1[i] = 4, nums2[j] = 3
nums1[i] > nums2[j]
nums1[i+j+1] = nums1[i] => nums1[3] = 4
nums1[i+j] = nums2[j]   => nums1[2] = 3
decrement i & j
nums1 = [2,4,3,4]

i = 0, j = 0, nums1[i] = 2, nums2[j] = 1
nums1[i] > nums2[j]
nums1[i+j+1] = nums1[i] => nums1[1] = 2
nums1[i+j] = nums2[j]   => nums1[0] = 1
decrement i & j
nums1 = [1,2,3,4]

i = -1, j = -1
j < 0
end loop
nums1(final): [1,2,3,4]

*******************************************************************************

nums1: [1,2,0,0],
m: 2,
nums2: [3,4],
n: 2
nums1(final): [1,2,3,4]

*******************************************************************************

nums1: [3,4,0,0],
m: 2,
nums2: [1,2],
n: 2
nums1(final): [1,2,3,4]
 */
