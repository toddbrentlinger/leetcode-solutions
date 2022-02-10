"use strict";

var threeSum = function (nums) {
    debugger;
    // Return empty array if nums length is less than 3
    if (nums.length < 3)
        return [];

    // Sort nums in ascending order
    nums.sort((a, b) => a - b);

    let triplets = [];
    let i = 0, j = nums.length - 1;
    let mid, left, right, valToSearch;

    /* If valToSearch is within limits of i and j
     * 
     * valToSearch >= nums[i] && valToSearch <= nums[j]
     * when valToSearch = 0 - nums[i] - nums[j];
     * 
     * valToSearch           >= nums[i]
     * 0 - nums[i] - nums[j] >= nums[i]
     * 0 - nums[j]           >= 2*nums[i]
     * AND
     * valToSearch           <= nums[j]
     * 0 - nums[i] - nums[j] <= nums[j]
     * 0 - nums[i]           <= 2*nums[j]
     */

    // If valToSearch is NOT within limits of i and j, no further search is needed
    while (i < nums.length - 2) {

        // If valToSearch is equal to either i or j value, check adjacent index.
        // If value of adjacent index equals valToSearch, create triplet with this value
        // without needing to use binary search.

        while (j - i > 1 && 0 - nums[j] >= 2 * nums[i] && 0 - nums[i] <= 2 * nums[j]) {
            valToSearch = 0 - nums[i] - nums[j];

            // Binary search between i+1 and j-1 for value of valToSearch
            left = i + 1;
            right = j - 1;
            while (right >= left) {
                mid = left + Math.floor(0.5 * (right - left));
                if (nums[mid] === valToSearch) {
                    triplets.push([nums[i], nums[mid], nums[j]]);
                    break;
                } else if (nums[mid] > valToSearch) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            // Decrement j until reaching a unique value, checking indices between i
            right = j;
            do {
                j--;
            } while (j - i > 1 && nums[right] === nums[j]);
        }

        // Reset j to last index of nums
        j = nums.length - 1;

        // Increment i until reaching a unique value
        left = i;
        do {
            i++;
        } while (j - i > 1 && nums[left] === nums[i]);
    }

    return triplets;
}

/**
 * @todo [-1,0,1,2,-1,-4,-2,-3,3,0,4]
 * sorted: [-4,-3,-2,-1,-1,0,0,1,2,3,4]
 * expected output: [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // Sort nums [-4, -1, -1, 0, 1, 2]
    /*
    Comparing ends
    -4 + 2 = -2 -> 0 - (-2) = 2 exists between limits -4,2
    
    if [-4,..., 1]
    -4 + 1 = -3 -> 0 - (-3) = 3 does NOT exist between limits -4,1 so do NOT need to check
    i++ -> i furthest from zero
    
    if [-1,..., 4]
    -1 + 4 = 3 -> 0 - 3 = -3 does NOT exist between limits
    j-- -> j furthest from zero
    
    */
    debugger;
    // Return empty array if nums length is less than 3
    if (nums.length < 3)
        return [];

    // Sort nums in ascending order
    nums.sort((a,b) => a - b);

    let triplets = [];
    let i = 0, j = nums.length - 1;
    let mid, left, right, valToSearch;

    while (i + 1 < j) {
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

        // If lower limit is furthest from zero, increase i
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            left = i;
            do {
                i++;
            } while (nums[left] === nums[i]);

        } else { // Else higher limit is furthest from zero, decrease j
            right = j;
            do {
                j--;
            } while (nums[right] === nums[j]);
        }
    }

    return triplets;
};