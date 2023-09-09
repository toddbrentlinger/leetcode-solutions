/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 48ms (95.83%)
 * Memory: 42.60MB (96.68%)
 */
var singleNumber = function(nums) {
    return nums.reduce((curr, xor) => xor ^ curr);
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 47ms (96.93%)
 * Memory: 42.90MB (89.05%)
 */
var singleNumber = function(nums) {
    if (nums.length === 1) { return nums[0]; }

    let xor = nums[0] ^ nums[1];

    for (let i = 2; i < nums.length; i++) {
        xor ^= nums[i];
    }

    return xor;
};

/*
Using XOR:

ex. [1,2,3,4,1,2,3]
1^2^3^4^1^2^3
(1^1)^(2^2)^(3^3)^4
0^0^0^4
4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = {};

    nums.forEach((num) => {
        if (hash[num] === undefined) {
            hash[num] = false;
        } else if (hash[num] === false) {
            hash[num] = true;
        }
    });

    for (const [num, isDup] of Object.entries(hash)) {
        if (!isDup) {
            return num;
        }
    }
};