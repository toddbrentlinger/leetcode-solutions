// ----------------------------------------------------------------------------
// Single Pointer
// ----------------------------------------------------------------------------

/**
 * @param {number[]} piles
 * @return {number}
 * Runtime: 164ms (87.09%)
 * Memory: 51.70MB (90.67%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var maxCoins = function(piles) {
    let maxUserTotal = 0;

    // Sort piles in ascending order
    piles.sort((a,b) => a - b);

    // First third of sorted piles go to Bob.
    // Every other pile after goes to User.
    // Starting at first index after Bob's first third piles, total every other 
    // pile until reach end.
    for (let i = Math.ceil(piles.length / 3); i < piles.length; i += 2) {
        maxUserTotal += piles[i];
    }

    return maxUserTotal;
};

// ----------------------------------------------------------------------------
// Two Pointers
// ----------------------------------------------------------------------------

/**
 * @param {number[]} piles
 * @return {number}
 * Runtime: 168ms (82.56%)
 * Memory: 52.16MB (53.49%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var maxCoins = function(piles) {
    let iLowest = 0;
    let iSecondHighest = piles.length - 2;
    let maxUserTotal = 0;

    // Sort piles in ascending order
    piles.sort((a,b) => a - b);

    // Keep adding 2n pile from end to user total until reach lowest taker
    while (iLowest < iSecondHighest) {
        maxUserTotal += piles[iSecondHighest];

        iLowest++;
        iSecondHighest -= 2;
    }

    return maxUserTotal;
};

/**
- Sort piles in ascending order
- Every turn, Alice will pick last pile, User will pick second to last pile, and Bob will pick first pile.
- Since User will always pick second to last pile and Bob will pick first, can use two pointers to 
traverse the sorted piles until pointers pass each other.
 */