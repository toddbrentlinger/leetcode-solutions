"use strict";

/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const reversed = parseInt(x.toString().split("").reverse().join(""), 10);

    // Check overflow
    if ((reversed >> 0) !== reversed)
        return 0;

    // Check sign
    return (x < 0) ? -reversed : reversed;
};

export default reverse;