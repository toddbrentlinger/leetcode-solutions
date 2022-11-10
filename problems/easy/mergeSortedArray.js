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
            j--;
        } else { // Else (i >=0 && nums1[i] >= nums2[j])
            nums1[i+j+1] = nums1[i];
            nums1[i+j] = nums2[j];
            i--;
        }
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
var mergeUnitTestAll = function(nRandomTests = 0) {
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
        {
            input: {
                nums1: [4,5,6,0,0,0],
                m: 3,
                nums2: [1,2,3],
                n: 3
            },
            expectedOutput: [1,2,3,4,5,6],
        },
    ];

    let bDoAllTestsPass = true;
    let bTestSuccess;
    let randomTest;

    // Example tests
    tests.forEach((test) => {
        bTestSuccess = mergeUnitTest(test.input, test.expectedOutput);
        if (!bTestSuccess && bDoAllTestsPass) {
            bDoAllTestsPass = false;
        }
    });

    // Random tests
    for (let i = nRandomTests; i > 0; i--) {
        randomTest = createRandomTest(10,10);
        bTestSuccess = mergeUnitTest(randomTest.input, randomTest.expectedOutput);
        if (!bTestSuccess && bDoAllTestsPass) {
            bDoAllTestsPass = false;
        }
    }

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
 * 
 * @param {Number} valLimit Highest positive and lowest negative value range
 * @param {Number} maxLength Max length of array
 * @returns {Object}
 */
var createRandomTest = function(valLimit = Math.pow(10, 9), maxLength = 200) {
    // Random m and n values
    m = Math.floor(Math.random() * (maxLength + 1)); // 0-maxLength
    nMax = maxLength - m + 1;
    n = Math.floor(Math.random() * nMax);
    if (m == 0 && n == 0) {
        m = 1;
    }

    // Create arrays initialized with all zeros
    let nums1 = [], nums2 = [];
    nums1.length = m;
    nums2.length = n;

    // Populate arrays with random values
    for (let i = 0; i < m; i++) {
        nums1[i] = Math.floor(Math.random() * valLimit * 2) - valLimit;
    }
    for (let i = 0; i < n; i++) {
        nums2[i] = Math.floor(Math.random() * valLimit * 2) - valLimit;
    }
    
    // Initialize expected output array by combining nums1 and nums2
    let expectedOutput = nums1.concat(nums2);

    // Sort arrays
    var sortByValue = function (a,b) {
        return a - b;
    };
    nums1.sort(sortByValue);
    nums2.sort(sortByValue);
    expectedOutput.sort(sortByValue);

    // Append n zeros to end of nums1
    nums1 = nums1.concat(new Array(n).fill(0));

    return {
        input: {
            nums1,
            m,
            nums2,
            n,
        },
        expectedOutput,
    };
};

/**

New Algorithm
 
nums1: [4,5,6,0,0,0],
m: 3,
nums2: [1,2,3],
n: 3
nums1(final): [1,2,3,4,5,6]

i = m-1 = 2, j = n-1 = 2, nums1[i] = 6, nums2[j] = 3
nums1[i] > nums2[j]
nums1[i+j+1] = nums1[i] => nums1[5] = 6
nums1[i+j] = nums2[j] => nums1[4] = 3
decrement i
nums1 = [4,5,6,0,3,6]

i = 1, j = 1, nums1[i] = 5, nums2[j] = 3
nums1[i] > nums2[j]
nums1[i+j+1] = nums1[i] => nums1[4] = 5
nums1[i+j] = nums2[j] => nums1[3] = 3
decrement i
nums1 = [4,5,6,3,5,6]

i = 0, j = 2, nums1[i] = 4, nums2[j] = 3
nums1[i] > nums2[j]
nums1[i+j+1] = nums1[i] => nums1[3] = 4
nums1[i+j] = nums2[j] => nums1[2] = 3
decrement i
nums1 = [4,5,3,4,5,6]

i = -1, j = 2, nums1[i] = error, nums2[j] = 3
i < 0
nums1[i+j+1] = nums2[j] => nums1[2] = 3
decrement j
nums1 = [4,5,3,4,5,6]

i = -1, j = 1, nums1[i] = error, nums2[j] = 2
i < 0
nums1[i+j+1] = nums2[j] => nums1[1] = 2
decrement j
nums1 = [4,2,3,4,5,6]

i = -1, j = 0, nums1[i] = error, nums2[j] = 1
i < 0
nums1[i+j+1] = nums2[j] => nums1[0] = 1
decrement j
nums1 = [1,2,3,4,5,6]

i = -1, j = -1
j < 0
end loop
nums1(final) = [1,2,3,4,5,6]

*******************************************************************************

Old Algorithm

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
nums1[i+j] = nums2[j] => nums1[2] = 2
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
