'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    var findMiddle = function(numsArr) {
        // If length of new array is odd
        if (numsArr.length % 2) {
            // Return middle value   
            return numsArr[Math.floor(numsArr.length / 2)];
        } else {
            // Return avg of two values in the middle
            const rightMiddleIndex = Math.floor(numsArr.length / 2);
            return 0.5 * (numsArr[rightMiddleIndex] + numsArr[rightMiddleIndex - 1]);
        }
    }

    // Find middle of nums1
    // Find middle of nums 2
    // Find average of two middle values
    if (nums1.length && nums2.length) {
        return 0.5 * (findMiddle(nums1) + findMiddle(nums2));
    } else if (nums1.length) {
        return findMiddle(nums1);
    } else {
        return findMiddle(nums2);
    }
};

function findMedianSortedArraysBruteForce(nums1, nums2) {
    // Merge all nums into one
    const combinedArr = nums1.concat(nums2);
    // Sort in ascending order
    combinedArr.sort((a,b) => a - b);
    // If length of new array is odd
    if (combinedArr.length % 2) {
        // Return middle value   
        return combinedArr[Math.floor(combinedArr.length / 2)];
    } else {
        // Return avg of two values in the middle
        const rightMiddleIndex = Math.floor(combinedArr.length / 2);
        return 0.5 * (combinedArr[rightMiddleIndex] + combinedArr[rightMiddleIndex - 1]);
    }
}

function createRandomArgumentArraySingle(arrLength) {
    let nums = [];
    for (let i = 0; i < arrLength; i++) {
        nums.push(Math.floor(Math.random()*(2*10**6)) - 10**6);
    }
    return nums;
}

function createRandomArgumentArrays() {
    // Get random n and m
    const n = Math.floor(Math.random()*1001); // 0-1000
    const m = Math.floor(Math.random()*1000) + 1; // 1-1000

    const nums1 = createRandomArgumentArraySingle(n);
    const nums2 = createRandomArgumentArraySingle(m);

    return [nums1, nums2];
}

function findMedianSortedArraysUnitTestSingle(nums1, nums2, expectedOutput) {
    console.assert(findMedianSortedArrays(nums1, nums2) === expectedOutput);
}

function findMedianSortedArraysUnitTests(numExtraTests = 10) {
    findMedianSortedArraysUnitTestSingle([1,3], [2], 2);
    findMedianSortedArraysUnitTestSingle([1,2], [3,4], 2.5);
    findMedianSortedArraysUnitTestSingle([1,2], [3,4,5], 3);
    findMedianSortedArraysUnitTestSingle([1,4], [2,3,5], 3);
    findMedianSortedArraysUnitTestSingle([3,5,6], [1,2,4], 3.5);

    for (let i = 0; i < numExtraTests; i++) {
        const argArrays = createRandomArgumentArrays();
        findMedianSortedArraysUnitTestSingle(
            argArrays[0], argArrays[1],
            findMedianSortedArraysBruteForce([...argArrays])
        );
    }
}

/* 
[1,3] - [2,4,5] -> 3

l1 h1   l2   h2
 | |     |   |
[1,3] - [2,4,5]

l1 < l2 low = l1 = 
h1 < h2 high = h2 = 5



If find lowest and highest, could increment lowest to next lowest number and
decrement highest to next highest number in single loop. Left with single unused
value or last two values to average.

If combined lengths is odd, single value is returned
Else average middle two values is returned

*/