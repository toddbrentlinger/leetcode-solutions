/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * Runtime: 45ms (93.80%)
 * Memory: 43.54MB (18.40%)
 */
var numJewelsInStones = function(jewels, stones) {
    let hash = {};
    let total = 0;

    // Create hash map of number of character instances in stones
    for (const char of stones) {
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    
    // Sum hash map counts of only matching characters to jewels
    for (const char of jewels) {
        if (hash[char]) {
            total += hash[char];
        }
    }

    return total;
};