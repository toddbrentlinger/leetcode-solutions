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

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * Runtime: 49ms (81.77%)
 * Memory: 42.35MB (52.01%)
 */
var numJewelsInStones = function(jewels, stones) {
    let hash = {};
    let total = 0;
    let i;

    for (i = 0; i < stones.length; i++) {
        if (hash[stones[i]]) {
            hash[stones[i]]++;
        } else {
            hash[stones[i]] = 1;
        }
    }

    for (i = 0; i < jewels.length; i++) {
        if (hash[jewels[i]]) {
            total += hash[jewels[i]];
        }
    }

    return total;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    return [...stones.matchAll(new RegExp(`[${jewels}]`, 'g'))].length;
};