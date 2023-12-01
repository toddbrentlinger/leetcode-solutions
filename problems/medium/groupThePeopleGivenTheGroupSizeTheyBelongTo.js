/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 * Runtime: 76ms (75.09%)
 * Memory: 45.94MB (91.13%)
 * Time Complexity: O(n)
 * Space Complexity: O(n) Worse-case, each value of groupSize is equal to length of groupSize array
 */
var groupThePeople = function(groupSizes) {
    let map = new Map(); // key is group size and value is array of indices with group size
    let output = []; // Holds subarrays of group of indices
    let groupArr;

    for (let i = 0; i < groupSizes.length; i++) {
        // If map already has group size as key, push index to value array
        if (map.has(groupSizes[i])) {
            groupArr = map.get(groupSizes[i]);
            groupArr.push(i);
        }
        // Else group size not already in array, add key with array with index as value 
        else {
            map.set(groupSizes[i], [i]);
            groupArr = map.get(groupSizes[i]);
        }

        // If group size array has reached it's max size according to it's key,
        // add subarray of indices to output AND delete key from map
        if (groupArr.length === groupSizes[i]) {
            output.push(groupArr);
            map.delete(groupSizes[i]);
        }
    }

    return output;
};

/**
3,3,3,3,3,1,3
map = {}
output = []

i=0 (3)
3 not in map, add 3 as key and value as index of groupSizes (i=0)
map = {3: [0]}
value has not reached size of key yet
i++

i=1 (3)
3 already in map, append index to map[3] value
map = {3: [0,1]}
value has not reached size of key yet
i++

i=2 (3)
3 already in map, append index to map[3] value
map = {3: [0,1,2]}
value has reached size of key
    push array to output
    clear key/value from map
    map = {}
i++

 */