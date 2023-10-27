/**
 * Given a roman numeral, convert it to an integer.
 * @param {string} s
 * @return {number}
 * Runtime: 92ms (95.6%)
 * Memory: 48.8MB (18.77.%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var romanToInt = function (s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'M':
                sum += 1000;
                break;
            case 'D':
                sum += 500
                break;
            case 'C':
                // Check if comes before 'D' or 'M'. Subtract 100
                if (s[i + 1] === 'D' || s[i + 1] === 'M') {
                    sum -= 100;
                } else {
                    sum += 100;
                }
                break;
            case 'L':
                sum += 50;
                break;
            case 'X':
                // Check if comes before 'L' or 'C'. Subtract 10
                if (s[i + 1] === 'L' || s[i + 1] === 'C') {
                    sum -= 10;
                } else {
                    sum += 10;
                }
                break;
            case 'V':
                sum += 5;
                break;
            case 'I':
                // Check if comes before 'V' or 'X'. Subtract 1
                if (s[i + 1] === 'V' || s[i + 1] === 'X') {
                    sum -= 1;
                } else {
                    sum += 1;
                }
                break;
            default:
        }
    }
    return sum;
};