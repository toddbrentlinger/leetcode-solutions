/**
 * @param {string} s
 * @return {string}
 * Runtime: 138ms (99.21%)
 * Memory: 60.62MB (93.65%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var sortVowels = function(s) {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    const vowelCounts = new Array(vowels.length).fill(0); // Count of each corresponding vowel in vowels arr inside string s
    const charArray = s.split(''); // String s split into an array of characters
    const vowelIndices = []; // Array of index positions of vowels in string s
    
    // Create array of indexes of each vowel in string s AND counts of each vowel
    let vowelIndex;
    charArray.forEach((char, i) => {
        vowelIndex = vowels.findIndex((vowel) => vowel === char);
        if (vowelIndex !== -1) {
            vowelCounts[vowelIndex]++;
            vowelIndices.push(i);
        }
    });

    // Replace each vowel from array of vowel indices with vowels according to vowel counts array
    // where first vowels in vowels array are placed first corresponding number of times in vowel 
    // counts array.
    let iFirstNonzeroVowelCount = 0;
    vowelIndices.forEach((vowelIndex) => {
        // Find first nonzero vowel count
        while (vowelCounts[iFirstNonzeroVowelCount] === 0) {
            iFirstNonzeroVowelCount++;
        }
        
        // Replace vowel at vowelIndex of string with vowel corresponding with first nonzero vowel count index
        charArray[vowelIndex] = vowels[iFirstNonzeroVowelCount];

        // Decrement vowel count
        vowelCounts[iFirstNonzeroVowelCount]--;
    });

    return charArray.join('');
};

// ----------------------------------------------------------------------------
// Sorting
// ----------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 * Runtime: 187ms (61.90%)
 * Memory: 67.66MB (40.47%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */
var sortVowels = function(s) {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    const charArray = s.split(''); // String s split into an array of characters
    const vowelIndices = []; // Array of index positions of vowels in string s
    const sVowels = []; // Array of vowels in string s
    
    // Fill arrays of vowel indices and corresponding vowels in string s
    charArray.forEach((char, i) => {
        if (vowels.includes(char)) {
            vowelIndices.push(i);
            sVowels.push(char);
        }
    });

    // Sort array of vowels in ascending ASCII value
    sVowels.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));

    // Replace ith original index of vowel with ith sorted vowel
    vowelIndices.forEach((vowelIndex, i) => {
        charArray[vowelIndex] = sVowels[i];
    });

    return charArray.join('');
};

// ----------------------------------------------------------------------------
// IN-PROGRESS
// ----------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    let aVowelIndex, bVowelIndex;
    return s.split('').sort((a,b) => {
        aVowelIndex = vowels.findIndex((char) => char === a);
        bVowelIndex = vowels.findIndex((char) => char === b);

        if (aVowelIndex !== -1 && bVowelIndex !== -1) {
            return bVowelIndex - aVowelIndex;
        } else {
            return 0;
        }
    }).join('');
};