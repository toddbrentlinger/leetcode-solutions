/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 * Runtime: 72ms (95.92%)
 * Memory: 52.62MB (57.14%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var minCost = function(colors, neededTime) {
    let cost = 0;
    let iPrevMaxTimeColor = 0;
    let iCurrColor = 1;
    
    while (iCurrColor < colors.length) {
        // If curr and prev color with max time are same
        if (colors[iCurrColor] === colors[iPrevMaxTimeColor]) {
            // Remove minimum neededTime of two colors
            // If current color is to be removed
            if (neededTime[iCurrColor] < neededTime[iPrevMaxTimeColor]) {
                cost += neededTime[iCurrColor];
            }
            // Else prev color with max time is to be removed
            else {
                cost += neededTime[iPrevMaxTimeColor];
                iPrevMaxTimeColor = iCurrColor;
            }
        }
        // Else curr and prev color with max time are different
        else {
            iPrevMaxTimeColor = iCurrColor;
        }

        iCurrColor++;
    }

    return cost;
};

/**
- Find subsequence of same colors.
- Remove all balloons except one balloon with maximum neededTime
- Continue search for next same color subsequence
 */