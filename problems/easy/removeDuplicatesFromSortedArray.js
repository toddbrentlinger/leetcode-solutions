"use strict";

/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let start = 0;
    let current = start + 1;
    let count = 0;
    while (start < nums.length) {
        while (current < nums.length) {
            if (nums[current] !== nums[start])
                break;
            current++;
            count++;
        }
        nums.splice(start, count);
        current = ++start + 1;
        count = 0;
    }
    return nums.length;
};