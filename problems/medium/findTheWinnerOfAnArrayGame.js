/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Runtime: 63ms (78.99%)
 * Memory: 51.6MB (75.29%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var getWinner = function(arr, k) {
    let iWinner = (arr[0] > arr[1] ? 0 : 1);
    let iChallenger = 2;
    let winCount = 1;

    while (iChallenger < arr.length && winCount < k) {
        if (arr[iChallenger] > arr[iWinner]) {
            iWinner = iChallenger;
            winCount = 1;
        } else {
            winCount++;
        }
        
        iChallenger++;
    }

    return arr[iWinner];
};

/**
Special Case:
If k > arr.length, arr will become sorted with largest value in arr[0] and rest of array sorted in ascending order.

Every number previously moved to end of array will be less than current winner. So keep track of original last value
index as it moves along. Once loop reaches this index AND winCount has not been reached yet, all remaining values
will be less than current winner and the current winner will beat.

Don't need to move values to back at all then since they won't be tested again. Keep two pointers. One on current winner
and second on current challenger. The winCount can be calculated based on the difference in indices of the two. If challenger index reaches end, current winner will win all remaining matches if lower values had been moved to back of array
since they're all quarenteed to be lower values.
 */