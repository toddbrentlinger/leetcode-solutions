"use strict";

/**
 * Given a positive integer n, return the nth term of the count-and-say sequence.
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let strArr, count, str = "1";
    for (let i = 1; i < n; i++) {
        strArr = str.split("");
        str = "";
        count = 1;

        for (let j = 0; j < strArr.length; j++) {
            // IF next digit is different
            if (strArr[j] !== strArr[j + 1]) {
                str += count + strArr[j];
                count = 1;
            } else {
                count++;
            }
        }
    }
    return str;
};