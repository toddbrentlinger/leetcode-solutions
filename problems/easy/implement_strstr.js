"use strict";

/**
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // Check empty needle
    if (!needle)
        return 0;

    return haystack.indexOf(needle);
};

/**
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr01 = function (haystack, needle) {
    // Check empty needle
    if (!needle)
        return 0;

    // Check if needle is longer than haystack
    if (needle.length > haystack.length)
        return -1;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) {
                break;
            }
            if (j == (needle.length - 1)) {
                return i;
            }
        }
    }
    return -1;
};