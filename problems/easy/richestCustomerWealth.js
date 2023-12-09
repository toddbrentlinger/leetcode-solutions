/**
 * @param {number[][]} accounts
 * @return {number}
 * Runtime: 43ms (94.32%)
 * Memory: 41.92MB (68.12%)
 * Time Complexity: O(row x col)
 * Space Complexity: O(row)
 */
var maximumWealth = function(accounts) {
    // Reduce each row of bank accounts into total money in all accounts.
    // Then get the max of all customer's total money.
    return Math.max(
        ...accounts.map((banks) => banks.reduce((accum, curr) => accum + curr))
    );
};