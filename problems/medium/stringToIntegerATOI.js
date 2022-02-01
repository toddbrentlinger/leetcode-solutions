"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    return Math.min(
        Math.max(
            parseInt(s.match(/(?<=^ *)[-+]?\d+/), 10) || 0,
            -(2**31)
        ),
        2**31 - 1
    );
    //return parseInt(s.match(/(?<=^ *)-?\d+/), 10) || 0;
};