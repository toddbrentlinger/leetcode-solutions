/**
 * @param {string[]} strs
 * @return {string[][]}
 * Runtime: 107ms (66.33%)
 * Memory: 53.3MB (59.97%)
 * Time Complexity: O(n x mlogm) where n is number of strings and m is average length of strings where characters are sorted
 * Space Complexity: O(n) each string is saved to a map
 */
var groupAnagrams = function(strs) {
    // Map where key is string and value is array of string and anagrams of that string
    let anagramMap = {};
    // String to be sorted in alphabetical order to be used as key in anagramMap
    let strSorted;
    
    for (const str of strs) {
        // Get str sorted in alphabetical order
        strSorted = str.split('')
            .sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
            .join('');

        // If sorted str already key in anagramMap, push original str to corresponding array
        if (anagramMap[strSorted]) {
            anagramMap[strSorted].push(str);
        }
        // Else add sorted str as key to anagramMap with value of array with original str 
        else {
            anagramMap[strSorted] = [str];
        }
    }

    // Combine all anagram arrays into single 2D output array
    return Object.values(anagramMap);
};

// ----------------------------------------------------------------------------

/**
 * @param {string[]} strs
 * @return {string[][]}
 * Runtime: 2337ms (5.01%)
 * Memory: 71.48MB (5.00%)
 * Time Complexity: O(n x mlogm) where n is number of strings and m is average length of strings where characters are sorted
 * Space Complexity: O(n) each string is saved to a map
 */
var groupAnagrams = function(strs) {
    // Map where key is string and value is array of string and anagrams of that string
    let anagramMap = new Map();
    // Boolean flag that's true when string is an anagram of existing key in anagramMap
    let didFindAnagram;
    
    for (const strA of strs) {
        didFindAnagram = false;

        // Check if strA is anagram of existing key in anagramMap
        for (const strB of anagramMap.keys()) {
            // If strings are anagram, add new string to corresponding array in anagramMap
            if (areAnagrams(strA, strB)) {
                anagramMap.get(strB).push(strA);
                didFindAnagram = true;
                break;
            }
        }

        // If did NOT find anagram in anagramMap, add string as new key to anagramMap
        if (!didFindAnagram) {
            anagramMap.set(strA, [strA]);
        }
    }

    // Combine all anagram arrays into single 2D output array
    let output = [];
    for (const [key, value] of anagramMap.entries()) {
        output.push(value);
    }

    return output;
};

var areAnagrams = function(strA, strB) {
    // If strings have different lengths, cannot be anagrams
    if (strA.length !== strB.length) {
        return false;
    }

    // Create object for strA where keys are characters and value is count of each character
    let strACharCount = {};
    for (const char of strA) {
        if (strACharCount[char]) {
            strACharCount[char]++;
        } else {
            strACharCount[char] = 1;
        }
    }

    for (const char of strB) {
        // If character NOT in strACharCount, cannot be anagrams
        if (!strACharCount[char]) {
            return false;
        }
        // If character is in strACharCount but count is zero, cannot be anagrams
        if (strACharCount === 0) {
            return false;
        }

        // Decrement character count in strACharCount object
        strACharCount[char]--;
    }

    // If strACharCount has any character count more than zero, cannot be anagrams
    return Object.values(strACharCount).every((val) => val === 0);
};

/**
["eat","tea","tan","ate","nat","bat"]
set = {}

i=0 (eat)
set is empty, add eat as key with empty array
set = {eat: []}

i=1 (tea)
tea is anagram with eat, add to set key array
set = {eat: [tea]}

i=2 (tan)
tan is NOT anagram with any key in set, add tan as key to set
set = {eat: [tea], tan: []}

i=3 (ate)

 */