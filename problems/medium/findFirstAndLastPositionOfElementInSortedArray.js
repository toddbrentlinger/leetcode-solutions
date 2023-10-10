/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime: 50ms (69.42%)
 * Memory: 42.78MB (24.97%)
 */
var searchRange = function(nums, target) {
    let first = last = -1;
    let low = 0;
    let high = nums.length - 1;
    let mid;

    // Find first position
    while (low <= high) {
        mid = Math.floor(low + 0.5*(high - low));

        if (target > nums[mid]) {
            low = mid + 1;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else { // Else target === mid
            // If first occurrence of target, set first and break loop
            if (mid === 0 || nums[mid - 1] !== target) {
                first = mid;
                break;
            } else { // Else NOT first occurence of target
                high = mid - 1;
            }
        }
    }

    // Return if NOT a single occurrence of target
    if (first === -1) {
        return [first, last];
    }

    low = first + 1;
    high = nums.length - 1;

    // Find last position
    while (low <= high) {
        mid = Math.floor(low + 0.5*(high - low));

        if (target > nums[mid]) {
            low = mid + 1;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else { // Else target === mid
            // If last occurrence of target, set last and break loop
            if (mid === 0 || nums[mid + 1] !== target) {
                last = mid;
                break;
            } else { // Else NOT last occurence of target
                low = mid + 1;
            }
        }
    }

    // If last occurrence NOT found, only one occurence
    if (last === -1) {
        last = first;
    }

    return [first, last];
};