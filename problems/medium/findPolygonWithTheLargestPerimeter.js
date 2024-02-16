/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 216ms (27.68%)
 * Memory: 67.46MB (11.30%)
 * Time Complexity: O(nlogn) sorting nums array
 * Space Complexity: O(1)
 */
var largestPerimeter = function(nums) {
    // Sort nums in ascending order to determine largest perimeter according 
    // to first rule: a0 <= a1 <= a2 <= a3 ... <= ak-1 <= ak
    nums.sort((a,b) => a - b);

    // To check largest perimeter possible, start with largest perimeter of 
    // all side lengths in nums
    let perimeter = nums.reduce((curr, accum) => accum + curr);

    // Loop sorted nums from largest value to smallest value.
    // ith edge length will be checked as largest polygon side length.
    for (let i = nums.length - 1; i > 1; i--) {
        // Subtract new largest polygon side length from perimeter
        perimeter -= nums[i];

        // If ith edge is less than sum of all smaller edges, valid polygon.
        // This polygon will have the longest perimeter possible.
        if (perimeter > nums[i]) {
            return perimeter + nums[i];
        }
    }

    // If reach here, no valid polygon was found
    return -1;
};

/**
- Sort nums in ascending order, if sequence start-end is valid perimeter,
then adding any other side smaller than largest side will make a valid perimeter as well.
So valid perimeter will always include the smallest side value.
- Only need to find the highest index with largest side value, after sort, where valid 
polygon is found. Any polygon found in smaller indices will alway be smaller perimeter.

Equal Sides:
1,1,1
ALWAYS VALID

Incremental Sides:
1,2,3
NOT VALID (last 3 is NOT less than 1+2=3)

1,2,3,4
VALID (4 < 1+2+3 => 4 < 6)

 */