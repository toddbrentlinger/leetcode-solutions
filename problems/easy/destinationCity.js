/**
 * @param {string[][]} paths
 * @return {string}
 * Runtime: 52ms (79.54%)
 * Memory: 44.73MB (23.43%)
 * Time Complexity: O(n) where n is length of paths
 * Space Complexity: O(n)
 */
var destCity = function(paths) {
    // Hash map where keys are start city and values are end city of each path
    let hash = {};

    // Populate hash map of start/end cities
    for (let i = 0; i < paths.length; i++) {
        hash[paths[i][0]] = paths[i][1];
    }

    // Starting with first path end city, use hash map to find end city without from one path
    // that is NOT a start city in another path
    let outCity = paths[0][1];
    while (hash[outCity]) {
        outCity = hash[outCity];
    }

    return outCity;
};