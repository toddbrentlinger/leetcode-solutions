// ----------------------------------------------------------------------------
// Merge Sort
// ----------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 190ms (87.44%)
 * Memory: 79.40MB (37.67%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */
var sortArray = function(nums) {
    mergeSort(nums);
    return nums;
};

var mergeSort = function(arr) {
    if (arr.length < 2) { return; }

    let mid = Math.ceil(0.5 * (0 + arr.length - 1));
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    // Sort each sub-array
    mergeSort(leftArr);
    mergeSort(rightArr);

    // Merge sorted sub-arrays together
    let i = r = l = 0;
    while (l < leftArr.length && r < rightArr.length) {
        arr[i++] = (leftArr[l] < rightArr[r])
            ? leftArr[l++]
            : rightArr[r++];
    }

    // Check if any remaining values are left in either sub-array
    while (l < leftArr.length) {
        arr[i++] = leftArr[l++];
    }
    while (r < rightArr.length) {
        arr[i++] = rightArr[r++];
    }
};