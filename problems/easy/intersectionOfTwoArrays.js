/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 44ms (96.87%)
 * Memory: 49.64MB (59.53%)
 * Time Complexity: O(n) all values in each number array traversed once
 * Space Complexity: O(n) all values in nums1 saved in Set
 */
var intersection = function(nums1, nums2) {
    // Set of nums initiated with values in nums1 array
    let numSet = new Set(nums1);
    // Set of nums that are in both nums1 and num2 arrays (intersect)
    let intersectSet = new Set();
    
    for (let i = 0; i < nums2.length; i++) {
        // If number also in nums1 set, move number from numSet to intersect set.
        if (numSet.has(nums2[i])) {
            // Add number to intersect set
            intersectSet.add(nums2[i]);
            
            // Remove number from number set since no longer need to check for 
            // future loops after adding to intersect set.
            numSet.delete(nums2[i]);
        }
    }

    // Return all values in intersect set as array
    return [...intersectSet.values()];
};