"use strict";

/**
 * - Return empty array if length of nums is less than 3 (not enough elements for single triplet)
 * - Sort nums in ascending order
 * - While loop i from first index to three indices from end (nums.length - 3)
 *   - Set j to last index
 *   - If value to search is outside limits, break while loop (incrementing i no longer required)
 *   - While loop j from last index to 2 indices from i
 *     - Calculate value to search for = 0 - nums[i] - nums[j]
 *     - If value to search is outside limits, break while loop (decrementing j no longer required for given i)
 *     - Binary search for value
 *       - If value exists, add triplet
 *     - Decrement j
 *   - Increment i
 */

/**
 * [-4,-1,-1,0,1,2]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // Return empty array if nums length is less than 3
    if (nums.length < 3)
        return [];

    // Sort nums in ascending order
    nums.sort((a, b) => a - b);

    let triplets = [];
    let i = 0;
    let j, mid, left, right;

    while (i < nums.length - 2) {
        // Set j to last index of nums
        j = nums.length - 1;

        // If value to search to outside limits, break while loop (incrementing i no longer required)
        if (0 - nums[i] - nums[j] < nums[i] && 0 - nums[i] - nums[j] > nums[j])
            break;

        while (j > i + 1) {
            // If value to search is outside limits, break while loop(decrementing j no longer required for given i)
            if (0 - nums[i] - nums[j] < nums[i] && 0 - nums[i] - nums[j] > nums[j])
                break;

            // If value to search is within limits
            if (0 - nums[i] - nums[j] >= nums[i] && 0 - nums[i] - nums[j] <= nums[j]) {
                left = i + 1;
                right = j - 1;
                while (right >= left) {
                    mid = left + Math.floor(0.5 * (right - left));
                    // If match found
                    if (nums[mid] === 0 - nums[i] - nums[j]) {
                        triplets.push([nums[i], nums[mid], nums[j]]);
                        break;
                    } else if (nums[mid] > 0 - nums[i] - nums[j]) { // Else if value is smaller than mid
                        right = mid - 1;
                    } else { // Else value is larger than mid
                        left = mid + 1;
                    }
                }
            }

            // Decrement j until reaching a unique value, checking indices between i
            right = j;
            do {
                j--;
            } while (j - i > 1 && nums[right] === nums[j]);
        }

        // Increment i until reaching a unique value, checking indices between last index
        left = i;
        do {
            i++;
        } while (i < nums.length - 2 && nums[left] === nums[i]);
    }

    return triplets;
};

/**
 * @todo [-1,0,1,2,-1,-4,-2,-3,3,0,4]
 * sorted: [-4,-3,-2,-1,-1,0,0,1,2,3,4]
 * expected output: [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum01 = function (nums) {
    // Return empty array if nums length is less than 3
    if (nums.length < 3)
        return [];

    // Sort nums in ascending order
    nums.sort((a, b) => a - b);

    let triplets = [];
    let i = 0;
    let j, mid, left, right, valToSearch;

    while (i < nums.length - 2) {
        // Set j to last index of nums
        j = nums.length - 1;

        while (j > i + 1) {
            valToSearch = 0 - nums[i] - nums[j];
            // If valToSearch is within limits
            if (valToSearch >= nums[i] && valToSearch <= nums[j]) {
                left = i + 1;
                right = j - 1;
                while (right >= left) {
                    mid = left + Math.floor(0.5 * (right - left));
                    // If match found
                    if (nums[mid] === valToSearch) {
                        triplets.push([nums[i], nums[mid], nums[j]]);
                        break;
                    } else if (nums[mid] > valToSearch) { // Else if value is smaller than mid
                        right = mid - 1;
                    } else { // Else value is larger than mid
                        left = mid + 1;
                    }
                }
            }

            // Decrement j until reaching a unique value, checking indices between i
            right = j;
            do {
                j--;
            } while (j - i > 1 && nums[right] === nums[j]);
        }

        // Increment i until reaching a unique value, checking indices between last index
        left = i;
        do {
            i++;
        } while (i < nums.length - 2 && nums[left] === nums[i]);
    }

    return triplets;
};