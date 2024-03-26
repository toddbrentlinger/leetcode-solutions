/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 60ms (95.41%)
 * Memory: 55.09MB (90.61%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var firstMissingPositive = function(nums) {
    let val, tempVal, i;

    // Make sure at least one value in range [1,n]
    for (i = 0; i < nums.length; i++) {
        // If ith value is in range, break out of loop
        if (nums[i] > 0 && nums[i] <= nums.length) {
            break;
        }
    }

    // If NO value in range found, traversed entire map without find match, 
    // return 1.
    if (i === nums.length) { return 1; }

    // Set any zero value to -1 so can use 0 as a present flag
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = -1;
        }
    }

    // For each value in nums, set nums[val-1] to 0 to mark (index+1) as 
    // positive value included in nums array.
    for (i = 0; i < nums.length; i++) {
        val = nums[i];
        // End loop when: 
        // - value is less than one, NOT positive number
        // - OR value is more than length of nums array
        while (val > 0 && val <= nums.length) {
            // Save new value in temporary variable
            tempVal = nums[val - 1];
            // Set corresponding index of tempVal to zero
            nums[val - 1] = 0;
            // Set value to new value, using temporary variable, for next loop
            val = tempVal;
        }
    }

    // Check for first index in nums with value NOT zero. The first missing 
    // positive will be value (index + 1).
    for (i = 0; i < nums.length; i++) {
        // If ith value is NOT zero, (i+1) is first missing positive.
        if (nums[i] !== 0) {
            return i + 1;
        }
    }

    // Special Case: If all values are negative, no missing or duplicate values. 
    // First missing positive is length of nums array plus one for next logical
    // value if nums length increased by one.
    return nums.length + 1;
};

/**
2 states:
present (1)
not present (0)
ex. 3,4,-1,1 => 0,0,1,1

_______________________________________________________________________________

3,4,-1,1 => 0,0,1,1
i

i=0
nums[i] = 3
tempVal = nums[nums[i] - 1] = -1
set corresponding index for value to 1
nums[nums[i] - 1] = 1
3,4,1,1

tempVal is negative, continue
i++

-------------------------------------------------------------------------------

i=1
nums[i] = 4
tempVal = nums[nums[i] - 1] = 1
nums[nums[i] - 1] = 1
3,4,1,1

i=1
nums[i] = 4
nums[nums[i] - 1] = nums[3] = 1
tempVal = nums[nums[i] - 1] = 1
set nums[nums[i] - 1] to zero since will handle value next
3,4,-1,0

nums[tempVal - 1] = nums[0] = 3
tempVal = nums[tempVal - 1] = 3
set nums[tempVal - 1] to zero since will handle value next
0,4,-1,0

nums[tempVal - 1] = nums[2] = -1
already <1, continue
i++

i=2
nums[i] = -1
already <1, continue
i++

i=3
nums[i] = 0
already <1, continue
i++

reach end
0,4,-1,0
first index value >0 corresponds to (i+1) first missing positive

_______________________________________________________________________________

3,4,-1,1
i

i=0
nums[i] = 3
nums[nums[i] - 1] = nums[2] = -1
already <1, continue
i++

i=1
nums[i] = 4
nums[nums[i] - 1] = nums[3] = 1
tempVal = nums[nums[i] - 1] = 1
set nums[nums[i] - 1] to zero since will handle value next
3,4,-1,0

nums[tempVal - 1] = nums[0] = 3
tempVal = nums[tempVal - 1] = 3
set nums[tempVal - 1] to zero since will handle value next
0,4,-1,0

nums[tempVal - 1] = nums[2] = -1
already <1, continue
i++

i=2
nums[i] = -1
already <1, continue
i++

i=3
nums[i] = 0
already <1, continue
i++

reach end
0,4,-1,0
first index value >0 corresponds to (i+1) first missing positive

Special Case: if NO index value >0, answer is length of nums array
 */