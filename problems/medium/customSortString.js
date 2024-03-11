/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 * Runtime: 55ms (59.06%)
 * Memory: 48.78MB (78.45%)
 * Time Complexity: O(nlogn) string s is sorted
 * Space Complexity: O(1) 26-length array of character sort positions
 */
var customSortString = function(order, s) {
    let aCharCodeIndex, bCharCodeIndex;

    // Create 26 length array representing characters a-z in order where ith 
    // index represents the char code greater than 'a' and value is number to 
    // represent sorting order.
    let charSortOrderArr = new Array(26);
    for (let i = 0; i < order.length; i++) {
        charSortOrderArr[order[i].charCodeAt(0) - 97] = i;
    }
    
    // Split s into array of single characters, sort array using char sort 
    // order array, and then join array back into string.
    return s.split('').sort((a,b) => {
        aCharCodeIndex = a.charCodeAt(0) - 97;
        bCharCodeIndex = b.charCodeAt(0) - 97;

        // If both values are in order string, sort by custom sort order using 
        // char sort order array.
        if (charSortOrderArr[aCharCodeIndex] !== undefined && charSortOrderArr[bCharCodeIndex] !== undefined) {
            return charSortOrderArr[aCharCodeIndex] - charSortOrderArr[bCharCodeIndex];
        }
        // Else If only a in order string, sort a first
        else if (charSortOrderArr[aCharCodeIndex] !== undefined) {
            return -1;
        }
        // Else If only b in order string, sort b first
        else if (charSortOrderArr[bCharCodeIndex] !== undefined) {
            return 1;
        }
        // Else neither a nor b are in order string, keep order same
        else {
            return 0;
        }
    }).join('');
};

/**
- Any letters in both order AND s will be in the order set in order string.
- All remaining letters in s BUT NOT in order, could just be place at end.
 */