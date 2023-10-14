/**
 * @param {number[]} cost
 * @return {number}
 * Runtime: 41ms (98.40%)
 * Memory: 43.20MB (63.89%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var minCostClimbingStairs = function(cost) {
    return minCost(cost, 0, new Array(cost.length));
};

var minCost = function(cost, start, memo) {
    // Check if minimum cost already at step in memoization
    if (memo[start] !== undefined) {
        return memo[start];
    }
    // If one step left, skip to reach end
    if (start === cost.length - 1) {
        memo[start] = 0;
    }
    // If two steps left, take step with minimum cost
    else if (start === cost.length - 2) {
        memo[start] = Math.min(cost[start], cost[start + 1]);
    }
    // Else more than two steps left, take minimum cost of
    // taking first OR second step followed by recursive steps
    else {
        memo[start] = Math.min(
            cost[start] + minCost(cost, start + 1, memo),
            cost[start + 1] + minCost(cost, start + 2, memo)
        );
    }

    return memo[start];
};

/**
1 step
Pick step 0 cost

2 step
Pick minimum cost of 0 or 1 step

3 step
Minimum cost of:
0 step PLUS minimum of [1,2] step (2 step)
1 step PLUS minimum of [2] step (1 step)

4 step
Minimum cost of:
0 step PLUS minimum of [1,2,3] step (3 step)
1 step PLUS minimum of [2,3] step (2 step)
 */