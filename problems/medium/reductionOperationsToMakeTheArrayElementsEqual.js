/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 180ms (78.04%)
 * Memory: 54.05MB (78.28%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var reductionOperations = function(nums) {
    let ops = 0; // Total number of operations
    let iL1 = nums.length - 1; // Last index of nums array to represent largest value
    let iL2 = iL1; // Index of last instance of second largest value

    // Sort nums in ascending order
    nums.sort((a,b) => a - b);
    
    while (true) {
        // Find iL2 that is different than iL1
        do {
            iL2--;
        } while (nums[iL2] === nums[iL1]);

        // If iL2 has reached beginning of nums, break loop
        if (iL2 < 0) { break; }

        // Add one operation to change each value after iL2 to equal value at iL2
        ops += nums.length - iL2 - 1;

        // Set new iL1 to iL2 for next loop
        iL1 = iL2;
    }

    return ops;
};

/**

[1,1,2,2,3]
a = largest value index
b = second largest value index
ops = operations = 0

Sort in ascending order
1,1,2,2,3

Set target as last instance of first value 1
1,1,2,2,3
      b a

nums[b] !== nums[a]
ops += a - b += 1
ops = 1
a theoretically becomes 2
decrement b until reach new value

1,1,2,2,2
  b     a

All indices after b need to have one operation to change to b
ops += a - b += 4 - 1 += 3
ops = 4
(b+1) -> a have theoretically all become 1
decrement b until reach new value

b reaches start of array, end


-------------------------------------------------------------------------------

[1,1,2,2,3]
a = largest value index
b = second largest value index
m = last index of min value in case it's repeated
ops = operations = 0

Sort in ascending order
1,1,2,2,3

Set target as last instance of first value 1
1,1,2,2,3
  m   b a

nums[b] !== nums[a]
ops++
ops = 1
a theoretically becomes 2
decrement b until reach new value

1,1,2,2,3
  m     a
  b

ops++
ops = 2
a theoretically becomes 1
b has reached min, decrement a

1,1,2,2,3
  m   a
  b

ops++
ops = 3
a theoretically becomes 1
b has reached min, decrement a

1,1,2,2,3
  m a
  b

ops++
ops = 4
a theoretically becomes 1
b has reached min, decrement a

a has reached m, end
return ops = 4

-------------------------------------------------------------------------------

1,5,3

1,3,5

5 is set to 3, then 1 => 2 ops
3 is set to 1 => 1 ops

-------------------------------------------------------------------------------

1,1,2,2,3

3 is set to 2, then 1 => 2 ops

2 is set to 1 => 1 ops

2 is set to 1 => 1 ops

-------------------------------------------------------------------------------

[5,1,3]
c = curr
t = target
ops = operations = 0

Sort in ascending order
1,3,5
t c

All values before c are confirmed to be equal to each other AND less than c
All values after target must be set to target for 1 operation each

ops += c-t += 1-0 += 1
ops = 1
theoretically, nums is now 1,1,5
Increment c until reach value different than previous c=3

1,3,5
t   c

ops += c-t += 2-0 += 2
ops = 3
theoretically, nums is now 5,5,5

-------------------------------------------------------------------------------

 */