/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 43ms (93.53%)
 * Memory: 41.59MB (80.49%)
 */
var numIdenticalPairs = function(nums) {
    let hash = {};

    // Create hash map of each number as key and number of repeats as value
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 0;
        }
    }

    // Sum each triangular num (1+2+3+(n-1)+n) of repeat counts
    return Object.values(hash)
        .reduce((pairs, n) => (n > 0) ? pairs + Math.floor((n**2 + n)/2) : pairs, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 47ms (82.26%)
 * Memory: 41.8MB (62.2%)
 */
var numIdenticalPairs1 = function(nums) {
    let hash = {};

    var triangularNum = function(n) {
        return Math.floor((n**2 + n)/2);
    };

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1;
        }
    }

    return Object.values(hash)
        .reduce((pairs, count) => (count > 1) ? pairs + triangularNum(count - 1) : pairs, 0);
};

/**
n! = n(n+1)/2
(n-1)! = (n-1)(n)/2 = n(n-1)/2 = (n^2-n)/2

(n-1)!
1,2
1,2 1x1
1
1!

1,2,3
1,2 1x2
1,3
2,3 2x1
3

1,2,3,4
1,2 1x3
1,3
1,4
2,3 2x2
2,4
3,4 3x1
6

1,2,3,4,5
1,2 1x4
1,3
1,4
1,5
2,3 2x3
2,4
2,5
3,4 3x2
3,5
4,5 4x1
10

 */