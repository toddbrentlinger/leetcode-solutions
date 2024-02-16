/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Runtime: 92ms (94.47%)
 * Memory: 71.18MB (68.34%)
 * Time Complexity: O(nlogn) sorting array of char counts (worst case each val has count of 1)
 * Space Complexity: O(n) worst case each val has count of 1
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    // Map to hold count of occurrences of number in array arr
    let charCountMap = new Map();
    let i;

    // Populate map with number as key and occurrence count as value
    for (i = 0; i < arr.length; i++) {
        // If map already has value, increment count
        if (charCountMap.has(arr[i])) {
            charCountMap.set(
                arr[i],
                charCountMap.get(arr[i]) + 1
            );
        }
        // Else first occurrence of value, add value to map with count of 1 
        else {
            charCountMap.set(arr[i], 1);
        }
    }

    // Get array of character counts from map sorted in ascending order
    let charCountArr = [...charCountMap.values()].sort((a,b) => a - b);

    // Find number of characters with minimum character counts that sum up to 
    // k without going over
    i = 0;
    while (k >= charCountArr[i]) {
        k -= charCountArr[i];
        i++;
    }

    // Return difference between total unique characters (length of character 
    // count array) AND index of last removed character i
    return charCountArr.length - i;
};

/**
- Get counts for each character in arr
- To minimize the number of unique integers, have to get rid of characters with
the smallest count.
- Get character counts, sort by count in ascending order, find how many characters
can be removed with total k removals
 */