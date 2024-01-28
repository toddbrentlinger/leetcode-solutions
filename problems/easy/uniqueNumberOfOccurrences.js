/**
 * @param {number[]} arr
 * @return {boolean}
 * Runtime: 43ms (96.74%)
 * Memory: 42.87MB (43.17%)
 * Time Complexity: O(nlogn) sorting array of value occurrences
 * Space Complexity: O(n) worst-case is n unique values in arr, each with count of 1
 */
var uniqueOccurrences = function(arr) {
    // Map where key is number and value is number of occurrences
    let valCountMap = {};
    let i;

    // Find number of occurrences for each value in array arr
    for (i = 0; i < arr.length; i++) {
        // If value NOT in map, add to map with occurrence count of 1
        if (valCountMap[arr[i]] === undefined) {
            valCountMap[arr[i]] = 1;
        }
        // Else value already in map, increment occurrence count 
        else {
            valCountMap[arr[i]]++;
        }
    }

    // Get array of all number occurrence counts and sort it
    const valCountSorted = Object.values(valCountMap).sort((a,b) => a - b);

    // If any sorted occurrence count is equal to previous occurrence count, return false
    for (i = 1; i < valCountSorted.length; i++) {
        if (valCountSorted[i-1] === valCountSorted[i]) {
            return false;
        }
    }

    // If reach here, all occurrence counts are unique, return true
    return true;
};