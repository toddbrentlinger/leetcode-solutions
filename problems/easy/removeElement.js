"use strict";

/**
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};