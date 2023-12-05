/**
 * @param {string} num
 * @return {string}
 * Runtime: 50ms (86.02%)
 * Memory: 43.27MB (56.99%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var largestGoodInteger = function(num) {
    let max = -1; // Max good integers initialzed to -1 for NO good integer substring
    let i = 0;

    // Loop num until reach 2 indices from end OR max of 999 has already been found
    while ((i + 2) < num.length && max < 9) {
        // If i and i+1 are different, increment i
        if (num[i + 1] !== num[i]) {
            i++;
        }
        // Else i and i+1 are same BUT i+2 is different, set i to i+2
        else if (num[i + 2] !== num[i]) {
            i += 2;
        }
        // Else i, i+1, i+2 are all equal
        else {
            // If value is higher than max, set to new max
            if (+num[i] > max) {
                max = +num[i];
            }

            // Set i to i+3 for next loop
            i += 3;
        }
    }

    return max === -1 ? "" : [max, max, max].join('');
};