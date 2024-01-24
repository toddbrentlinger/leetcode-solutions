/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 44ms (91.24%)
 * Memory: 48.21MB (5.02%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var rob = function(nums) {
    // Base Case: Return only value if nums length is 1
    if (nums.length === 1) { return nums[0]; }

    // Dynamic programming tabulation where ith index is max money can rob if start
    // at ith house in nums
    let dp = new Array(nums.length);
    
    // Last house is single house in sequence, so max value is value itself
    dp[dp.length - 1] = nums[nums.length - 1];
    // Second to last house has sequence length of 2. Since 2 adjacent houses 
    // CANNOT be robbed, max money of only 2 houses is max value of either house.
    // Set second to last house dp tabulation to max of second to last house and last house
    dp[dp.length - 2] = Math.max(
        nums[nums.length - 2],
        dp[dp.length - 1]
    );
    
    // Because of constraint that no two adjacent houses can be robbed, the max 
    // value robbed from ith house is max of either:
    // - ith house value PLUS max value robbed from i+2 house (from dp tabulation)
    // - case ith house is skipped, max value robbed from i+1 house (from dp tabulation)
    for (let i = dp.length - 3; i >= 0; i--) {
        dp[i] = Math.max(
            nums[i] + dp[i+2],
            dp[i+1]
        );
    }

    // Sequence should always start at either first or second house in final dp tabulation.
    // Return max of first two value in dp tabulation.
    return (dp[0] > dp[1]) ? dp[0] : dp[1];
};

/**
[1]
- Single length nums has only one option
1

[1,2]
- Length 2 nums is max value of either
max(1, 2) = 2

[1,2,3]
- Can be first and third OR just second
max(1+3, 2) = 4

[1,2,3,4]
1,3
1,4
2,4

_______________________________________________________________________________

- Dynamic Programming where hash is array of same length as nums. Each index of 
dp corresponds to maximum money if robber can start at same index house in
nums. Ex. dp[3] = 5 means there is max 5 units of money that can be robbed
if start at 3-index house in nums.
- ith value of dp can be: 
    - value of ith house in nums PLUS (i+2)th value of dp which is the max value 
      robbed if start at (i+2)th house
    - value of (i+1)th house of dp which skips the current house

[2,1,1,2]
dp = [0,0,1,2]

i=1 (third-from-last) -> 1
dp[1] = max(dp[])


_______________________________________________________________________________

Sequence will always start on first or second house
 */