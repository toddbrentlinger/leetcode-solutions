"use strict";

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let mid,
        start = 0,
        end = nums.length - 1;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target > nums[mid])
            start = mid + 1;
        else if (target < nums[mid])
            end = mid - 1;
        else
            return mid;
    }
    return start;
};

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert01 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target)
            return i;
    }
    return nums.length;
};