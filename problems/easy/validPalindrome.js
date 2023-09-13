/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 53ms (94.01%)
 * Memory: 43.08MB (93.60%)
 */
var isPalindrome = function(s) {
    s = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }

    return true;
};