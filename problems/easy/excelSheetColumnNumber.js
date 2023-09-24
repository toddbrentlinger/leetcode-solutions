/**
 * @param {string} columnTitle
 * @return {number}
 * Runtime: 48ms (96.63%)
 * Memory: 44.05MB (22.19%)
 */
var titleToNumber = function(columnTitle) {
    return columnTitle.split('').reduce((accum, curr, index, arr) => accum + (curr.charCodeAt(0) - 64) * 26**(arr.length - index - 1), 0);
};

/**
 * @param {string} columnTitle
 * @return {number}
 * Runtime: 52ms (91.40%)
 * Memory: 43.93MB (27.93%)
 */
var titleToNumber2 = function(columnTitle) {
    let output = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        output += (columnTitle.charCodeAt(i) - 64) * 26**(columnTitle.length - i - 1);
    }

    return output;
};

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber1 = function(columnTitle) {
    return columnTitle.split('').reduce((accum, curr, index, arr) => accum + (curr.charCodeAt(0) - 64) * 26**(arr.length - index - 1), 0);

    let output = 0;
    let letterVal;
    
    for (let i = 0; i < columnTitle.length; i++) {
        letterVal = columnTitle.charCodeAt(i) - 64; // A-1 Z-26
        output += letterVal * 26**(columnTitle.length - i - 1);
    }

    return output;
};

/**
A 1 1x26**0
B 2 2x26**0
C 3
...
Y 25 25x26**0
Z 26 26x26**0
AA 27 1x26**1 + 1x26**0
AB 28 1x26**1 + 2x26**0
...
AZ 52 1x26**1 + 26x26**0
BA 53 2x26**1 + 1x26**0
BB 54
...
ZY 701
ZZ 702 
AAA 703 1x26**2 + 1x26**1 + 1x26**0
AAB 704
...
BBA 1405 2x26**2 + 2x26**1 + 1x26**0 = 2x676 + 2x26 + 1 = 1352 + 52 + 1 = 1405
...
ZZY 18277
ZZZ 18278
AAAA 18279 1x26**3 + 1x26**2 + 1x26**1 + 1x26**0 = 17576 + 676 + 26 + 1 = 18279

26**1 = 26
26**2 = 676
26**3 = 17576
 */