"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    // First capture group: sign
    // Second capture group: digits
    const strMatch = s.match(/(?<=^ *)([-+]?)0*(\d+)/);

    // If no match OR no digits, return 0
    if (!strMatch || strMatch[2].length === 0)
        return 0;

    // If more than 10 digits, return limit
    if (strMatch[2].length > 10)
        return strMatch[1] == '-' ? -2147483648 : 2147483647;

    let num = 0;
    for (let i = strMatch[2].length - 1, power = 0; i >= 0; i--, power++) {
        // Continue if digit is zero
        if (strMatch[2][i] === 0)
            continue;
        num += Math.pow(10, power) * strMatch[2][i];
    }

    // Add sign
    if (strMatch[1] == '-')
        num *= -1;

    // Check limits
    if (num > 2147483647)
        return 2147483647;
    else if (num < -2147483648)
        return -2147483648;
    else
        return num;
};

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi01 = function (s) {
    return Math.min(
        Math.max(
            parseInt(s.match(/(?<=^ *)[-+]?\d+/), 10) || 0,
            -(2**31)
        ),
        2**31 - 1
    );
    //return parseInt(s.match(/(?<=^ *)-?\d+/), 10) || 0;
};