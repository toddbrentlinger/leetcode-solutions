/**
 * @param {string} s
 * @return {string}
 * Runtime: 56ms (89.78%)
 * Memory: 47.92MB (87.28%)
 */
var reverseWords = function(s) {
    return s.split(' ')
        .map((str) => str.split('').reverse().join(''))
        .join(' ');
};