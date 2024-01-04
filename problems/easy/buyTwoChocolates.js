/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 * Runtime: 84ms (66.67%)
 * Memory: 45.98MB (84.07%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var buyChoco = function(prices, money) {
    // Holds smallest (small1) and second smallest (small2) values in prices
    let small1, small2;

    // Initialize smallest values from first two values of prices
    if (prices[0] < prices[1]) {
        small1 = prices[0];
        small2 = prices[1];
    } else {
        small1 = prices[1];
        small2 = prices[0];
    }

    // Loop through remaining prices, updating smallest values pointers if necessary
    for (let i = 2; i < prices.length; i++) {
        if (prices[i] < small1) {
            small2 = small1;
            small1 = prices[i];
        } else if (prices[i] < small2) {
            small2 = prices[i];
        }
    }
    
    // Calculate leftover from after buying two cheapest chocolates
    let leftover = money - small1 - small2;
    
    // Return total money if leftover is negative, else return leftover 
    return (leftover < 0) ? money : leftover;
};