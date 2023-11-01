/**
 * @param {number[]} pref
 * @return {number[]}
 * Runtime: 159ms (71.66%)
 * Memory: 77.85MB (10.11%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var findArray = function(pref) {
    for (let i = pref.length - 1; i > 0; i--) {
        pref[i] ^= pref[i - 1];
    }

    return pref;
};

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let prevVal = pref[0];
    let newVal;
    for (let i = 1; i < pref.length; i++) {
        newVal = prevVal ^ pref[i];
        prevVal = pref[i];
        pref[i] = newVal;
    }

    return pref;
};

/**
5, 2, 0, 3, 1
101, 10, 0, 11, 1

5
101

5 ^ 7 = 2
101 ^ 111 = 010
How to get 101 & 010 -> 111 ?
5 ^ 2 = 7

2 ^ 2 = 0
010 ^ 010 = 000
How to get 010 & 000 -> 010 ?
2 ^ 0 = 2

0 ^ 3 = 3
000 ^ 011 = 011
How to get 000 & 011 -> 011 ?
0 ^ 3 = 3

3 ^ 2 = 1
011 ^ 010 = 001
How to get 011 & 001 -> 010 ?
3 ^ 1 = 2

output = 5,7,2,3,2
 */