/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 * Runtime: 95ms (93.61%)
 * Memory: 57.02MB (62.30%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var garbageCollection = function(garbage, travel) {
    const garbageTypes = ['M', 'P', 'G'];
    let iLoc;
    
    // Initialize time with sum of all garbage instances
    let time = garbage.reduce((accum, curr) => accum + curr.length, 0);
    
    // Convert travel to travel cost prefix sum
    for (iLoc = 1; iLoc < travel.length; iLoc++) {
        travel[iLoc] += travel[iLoc - 1];
    }
    
    // Find last location index of each garbage type
    let lastGarbageLocations = new Array(garbageTypes.length).fill(-1);
    for (iLoc = garbage.length - 1; iLoc >= 0; iLoc--) {
        // If all locations have been found, break for loop
        if (!lastGarbageLocations.includes(-1)) {
            break;
        }
        garbageTypes.forEach((type, iType) => {
            if (lastGarbageLocations[iType] === -1 && garbage[iLoc].includes(type)) {
                lastGarbageLocations[iType] = iLoc;
            }
        });
    }
    
    // Add cumulative travel cost of each location that last garbage is located
    lastGarbageLocations.forEach((iLoc) => {
        if (iLoc > 0) {
            time += travel[iLoc - 1];
        }
    });

    return time;
};

/**
- Each garbage unit takes 1 minute, so length of each location garbage units 
will always be added to output
- Then just need to find last location that includes each garbage type and 
then sum up all the distances before that location for each garbage type.
 */