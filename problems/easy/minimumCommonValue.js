/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Runtime: 57ms (96.43%)
 * Memory: 55.94MB (92.35%)
 * Time Complexity: O(n) where n is length of both arrays of numbers
 * Space Complexity: O(1)
 */
var getCommon = function(nums1, nums2) {
    let i1 = 0;
    let i2 = 0;

    while (i1 < nums1.length && i2 < nums2.length) {
        // If boths nums are equal, return value
        if (nums1[i1] === nums2[i2]) {
            return nums1[i1];
        }
        // Else if nums1 value is smaller, increment nums1 index
        else if (nums1[i1] < nums2[i2]) {
            i1++;
        }
        // Else nums1 value is larger or equal to nums2 value, increment nums2 index
        else {
            i2++;
        }
    }

    // If reach here, no common value found
    return -1;
};