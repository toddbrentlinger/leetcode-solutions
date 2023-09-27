/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 52ms (80.99%)
 * Memory: 44.25MB (36.57%)
 */
var isHappy = function(n) {
    let set = new Set();
    while (n !== 1) {
        n = getSumOfSquaresOfDigits(n);
        if (set.has(n)) {
            return false;
        }
        set.add(n);
    }
    return true;
};

var getSumOfSquaresOfDigits = function(n) {
    return String(n).split('').reduce((total, numStr) => total + Number(numStr)**2, 0);
};