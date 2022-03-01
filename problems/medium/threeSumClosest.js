"use strict";

/* Pseudo-code
 * - If nums length is 3, return sum of all values
 * - Sort nums 
 * 
 * key, value = number, occurences of number
 * {
 *   '-4': 1,
 *   '-1': 1,
 *   '1': 1,
 *   '2': 1
 * }
 * [-4,-1,1,2] Target: 1 Output: 2 (-1+1+2)
 * i=0, j=3
 *   valNeeded = 1 - (-4) - 2 = 3
 *   Value cannot be between two indices
 *     Since valNeeded is greater than nums[j] = 2
 *       k = j - 1 = 2
 *       currThreeSum = nums[i] + nums[j] + nums[k] = -4 + 2 + 1 = -1
 *       Set threeSumClosest = currThreeSum
 *       increment i
 * i=1, j=3 
 *   valNeeded = 1 - (-1) - 2 = 2
 *   Value could be between two indices
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosestBruteForce = function (nums, target) {
    // If nums length is 3, return sum of all values
    if (nums.length === 3) {
        return nums.reduce((prev, curr) => prev + curr);
    }

    // Sort nums in ascending order
    nums.sort((a, b) => a - b);

    let currThreeSumClosest, currThreeSum;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = nums.length - 1; j > i + 1; j--) {
            for (let k = i + 1; k < j; k++) {
                currThreeSum = nums[i] + nums[j] + nums[k];
                if (currThreeSum === target) {
                    return target;
                } else if (currThreeSumClosest === undefined || Math.abs(target - currThreeSum) < Math.abs(target - currThreeSumClosest)) {
                    currThreeSumClosest = currThreeSum;
                }
            }
        }
    }
    return currThreeSumClosest;
};

var unitTests = function () {
    /* Constraints:
     * 3 <= nums.length <= 1000
     * -1000 <= nums[i] <= 1000
     * -104 <= target <= 104
     */

    // [nums, target, expectedOutput]
    TESTS = [
        [[-1, 2, 1, -4], 1, 2],
        [[0, 0, 0], 1, 0],
    ];

    let output = 0;
    TESTS.forEach(test => {
        output = threeSumClosest(test[0], test[1]);
        if (output !== test[2]) {

        } else {

        }
    });
};