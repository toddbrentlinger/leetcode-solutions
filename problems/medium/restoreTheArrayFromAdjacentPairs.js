/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 * Runtime: 340ms (68.12%)
 * Memory: 118.41MB (88.41%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var restoreArray = function(adjacentPairs) {
    let map = new Map();
    let output = new Array(adjacentPairs.length + 1);
    
    // Create map where values are adjacent numbers to key number
    adjacentPairs.forEach(([a,b]) => {
        if (map.has(a)) {
            map.set(a, [...map.get(a), b]);
        } else {
            map.set(a, [b]);
        }
        if (map.has(b)) {
            map.set(b, [...map.get(b), a]);
        } else {
            map.set(b, [a]);
        }
    });
    
    // Find first key with single adjacent number
    let mapIter = map.entries();
    let mapEntry = mapIter.next().value;
    while(mapEntry[1].length === 2) {
        mapEntry = mapIter.next().value;
    }
    
    // Create output array
    output[0] = mapEntry[0];
    output[1] = mapEntry[1][0];
    let mapPairs, usedVal;
    for (let i = 2; i < output.length; i++) {
        usedVal = output[i - 2]; // Get already used adjacent pair of previous value (2-indeces back)
        mapPairs = map.get(output[i - 1]); // Get adjacent pairs of previous value in map
        output[i] = (mapPairs[0] !== usedVal) ? mapPairs[0] : mapPairs[1]; // Add unused val in map pair
    }

    return output;
};

var createRandomAdjacentPairs = function(n) {
    let adjacentPairs = new Array(n - 1);
    let isAscending, iRand;
    for (let i = 0; i < n - 1; i++) {
        isAscending = Math.floor(Math.random() * 2) === 0;
        adjacentPairs[i] = isAscending ? [i, i + 1] : [i + 1, i];
    }
    for (let i = 0; i < n - 1; i++) {
        iRand = Math.floor(Math.random() * (n - 1));
        [adjacentPairs[i], adjacentPairs[iRand]] = [adjacentPairs[iRand], adjacentPairs[i]];
    }
    return adjacentPairs;
};

/**
[[2,1],[3,4],[3,2]]
hash = {}
output = []

[2,1]
2 & 1 not in hash, add
hash = {2: 1}

[3,4]
3 & 4 not in hash, add
hash: {2: 1, 3: 4}

[3,2]
3 in hash AND 2 in hash
switch key,value of existing 3 key in hash
hash = {2: 1, 4: 3}
add [3,2] to hash
hash = {2: 1, 4: 3, 3: 2}

-------------------------------------------------------------------------------

[[2,1],[3,4],[3,2]]
hash = {}
output = []

[2,1]
2 & 1 NOT in hash
add to hash
hash = {2: [2,1]}

[3,4]
3 & 4 NOT in hash
add to hash
hash = {2: [2,1], 3: [3,4]}

[3,2]
3 in hash, add 2 before hash[3] array
tempArr = [2,3,4]
delete hash[3]
2 in hash, add value before tempArr
[1,2,3,4]

-------------------------------------------------------------------------------

[[4,-2],[1,4],[-3,1]]

[4,-2]
4 & -2 NOT in hash
add to hash
hash = {4: [4,-2]}

[1,4]
1 NOT in hash, 4 in hash
add 1 before hash[4] array
tempArr = [1,4,-2]
set to hash[1] = tempArr
delete hash[4]
hash = {1: [1,4,-2]}

[-3,1]
-3 NOT in hash, 1 in hash
add -3 before hash[1]
tempArr = [-3, 1, 4, -2]
set to hash[-3]
delete hash[1]

return hash.values()

-------------------------------------------------------------------------------

[[1,4],[4,-2],[-3,1]]

[1,4]
1 % 4 NOT in hash
add to hash
hash = {1: [1,4]}

[4,-2]
4 & -2 NOT in hash
add to hash
hash = {1: [1,4], 4: [4,-2]}

[-3,1]
-3 NOT in hash, 1 in hash
add -3 before hash[1]
set hash[-3] = [-3,1,4]
delete hash[1]

end adjacentPairs loop
hash = {-3: [-3,1,4], 4: [4,2]}



 */