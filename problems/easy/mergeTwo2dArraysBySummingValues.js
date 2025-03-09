/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 * Runtime: 2ms (69.65%)
 * Memory: 60.20MB (75.55%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var mergeArrays = function(nums1, nums2) {
    let i1, i2;

    const numsMerged = [];

    i1 = i2 = 0;
    while ((i1 < nums1.length) && (i2 < nums2.length)) {
        // If nums1 id is less than nums2 id
        if (nums1[i1][0] < nums2[i2][0]) {
            // Push nums1 item to merged array
            numsMerged.push(nums1[i1]);

            // Increment nums1 index for next loop
            i1++;
        }

        // Else if nums2 id is less than nums1 id
        else if (nums2[i2][0] < nums1[i1][0]) {
            // Push nums2 item to merged array
            numsMerged.push(nums2[i2]);

            // Increment nums2 index for next loop
            i2++;
        }

        // Else both ids are equal
        else {
            // Push new subarray to merged array with same ID and sum of two values
            numsMerged.push(
                [nums1[i1][0], nums1[i1][1] + nums2[i2][1]]
            );

            // Increment both nums1 and nums2 indices for next loop
            i1++;
            i2++;
        }
    }

    // Push any remaining items from either array (only one could have unused items)
    if (i1 < nums1.length) {
        numsMerged.push(
            ...nums1.slice(i1)
        );
    } else if (i2 < nums2.length) {
        numsMerged.push(
            ...nums2.slice(i2)
        );
    }

    return numsMerged;
};
