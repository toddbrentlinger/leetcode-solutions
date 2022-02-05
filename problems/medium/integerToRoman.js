"use strict";

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const romanConversions = [
        ['M', 1000], // -100=900 -10% -> 1000->500 -50%
        ['D', 500],  // -100=400 -20% -> 500->100 -80%
        ['C', 100],  // -10=90 -10% -> 100->50 -50%
        ['L', 50],   // -10=40 -20% -> 50->10 -80%
        ['X', 10],   // -1=9 -10%  -> 10->5 -50%
        ['V', 5],    // -1=4 -20% -> 5->1 -80%
        ['I', 1],
    ];

    let romanNumeralStr = '';
    romanConversions.forEach((conversion, index) => {
        // Add any number of current conversion symbols
        while (num >= conversion[1]) {
            num -= conversion[1];
            romanNumeralStr += conversion[0];
        }

        // Check for special cases where subtraction is used (NOT last conversion for I=1)
        if (index < romanConversions.length - 1) {
            // If next value is 50% of current value, use difference between values at this index and index+2
            if (conversion[1] === 2 * romanConversions[index + 1][1]) {
                if (num >= conversion[1] - romanConversions[index + 2][1]) {
                    num -= conversion[1] - romanConversions[index + 2][1];
                    romanNumeralStr += romanConversions[index + 2][0] + romanConversions[index][0];
                }
            } else { // Else next value should be 80% of current value, use difference values at this index and index+1
                if (num >= conversion[1] - romanConversions[index + 1][1]) {
                    num -= conversion[1] - romanConversions[index + 1][1];
                    romanNumeralStr += romanConversions[index + 1][0] + romanConversions[index][0];
                }
            }
        }
    });

    return romanNumeralStr;
};