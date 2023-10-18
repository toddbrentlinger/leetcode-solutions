/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Runtime: 44ms (96.88%)
 * Memory: 44.40MB (93.27%)
 * Time Complexity: O(logn)
 * Space Complexity: O(1)
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor(0.5 * (low + high));

        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
};