/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 196ms (68.00%)
 * Memory: 66.9MB (60.00%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var countNicePairs = function(nums) {
    // Total number of nice pairs
    let pairs = 0;
    // Map of numMinusReverseNum as key and number of occurrences in nums as value
    let numMinusReverseNumMap = new Map();
    // Calculated difference between num and reversed num for every loop
    let numMinusReverseNum;

    // Find count of each numMinusReverseNum in nums
    nums.forEach((num) => {
        // nums[i] + rev(nums[j]) === nums[j] + rev(nums[i])
        // conver to:
        // nums[i] - rev(nums[i]) = nums[j] - rev(nums[j])
        // Find num minus reversed num. If a different num has this same value, it's a nice pair.
        numMinusReverseNum = num - Number(num.toString().split('').reverse().join(''));

        // If numMinusReverseNum is already in map, increment count
        if (numMinusReverseNumMap.has(numMinusReverseNum)) {
            numMinusReverseNumMap.set(
                numMinusReverseNum, 
                numMinusReverseNumMap.get(numMinusReverseNum) + 1
            );
        }
        // Else numMinusReverseNum NOT yet in map, set to 0 for no pair yet found 
        else {
            numMinusReverseNumMap.set(numMinusReverseNum, 0);
        }
    });
    
    // Add triangular number of each count in numMinusReverseNumMap to get total pairs
    for (const count of numMinusReverseNumMap.values()) {
        if (count > 0) {
            pairs += count * (count + 1) / 2;
        }
    }

    return pairs % (10**9 + 7);
};

/**

- For each num, get numMinusReverseNum = num - rev(num)
- If numMinusReverseNum NOT in map, add numMinusReverseNum -> 0 since no pairs exist yet
- Else numMinusReverseNum already in map, increment map[numMinusReverseNum] value
    If value is 1, there are only 2 values that make 1 pair: (1,2)
    If value is 2, there are 3 values that can make 3 pairs: (1,2), (1,3), (2,3)
    If value is 3, there are 4 values that can make 6 pairs: (1,2), (1,3), (1,4), (2,3), (2,4), (3,4)
    Triangular number = n(n+1)/2

-------------------------------------------------------------------------------

nums[i] + rev(nums[j]) === nums[j] + rev(nums[i])
nums[i] - nums[j] === rev(nums[i]) - rev(nums[j])
nums[i] - rev(nums[i]) = nums[j] - rev(nums[j])

nums[i] = 42
nums[j] = 97

- Sum of first num of i and last num of j must equal 
sum of last num of i and first num of j

- Difference between 

42 + 79 === 97 + 24


 */