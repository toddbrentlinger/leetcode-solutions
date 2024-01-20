/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 42ms (98.95%)
 * Memory: 42.18MB (93.68%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let firstHalfVowels = 0; // Vowel count in first half of string s
    let lastHalfVowels = 0; // Vowel countin last half of string s

    // Loop through each half of string s and count number of vowels
    let first = 0; // First half index loop starts at 0
    let last = Math.floor(s.length / 2); // Second half index starts in middle
    while (last < s.length) {
        // If first half char is vowel, increment first half vowel count
        if (vowels.includes(s[first])) {
            firstHalfVowels++;
        }
        
        // If last half char is vowel, increment last half vowel count
        if (vowels.includes(s[last])) {
            lastHalfVowels++;
        }
        
        first++;
        last++;
    }
    
    // Return true if first and last half vowel counts are equal
    return firstHalfVowels === lastHalfVowels;
};