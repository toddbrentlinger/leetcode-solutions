/**
 * @param {string} s
 * @return {number}
 * Runtime: 68ms (100.00%)
 * Memory: 45.74MB (91.21%)
 * Time Complexity: O(n)?
 * Space Complexity: O(1)
 */
var countPalindromicSubsequence = function(s) {
    let endPalindromeLetters = new Array(26).fill(false);
    let endPalindromeLettersCount = 0;
    let middlePalindromeLetters = new Array(26);
    let count = 0;
    let first = 0;
    let mid, last, middlePalindromeLettersCount, letterIndex;

    // Loop through 0-index to 3 index from end of string 
    // OR until all letters have been checked for ends of palindrome
    while (first < s.length - 2 && endPalindromeLettersCount < 26) {
        last = s.length - 1; // Reset last index to last index of string

        // If letter at first index has NOT already been checked for palindromes
        letterIndex = getLowercaseLetterIndex(s[first]);
        if (!endPalindromeLetters[letterIndex]) {
            // Add letter at first index to endPalindromeLetters, setting to true
            endPalindromeLetters[letterIndex] = true;
            // Increment endPalindromeLettersCount
            endPalindromeLettersCount++;

            // Find first matching letter from end of string
            while (last > first + 1 && s[first] !== s[last]) {
                last--;
            }

            // If found matching letter at last index of string
            if (last > first + 1) {
                // Reset middlePalindromeLetters to all false AND middlePalindromeLettersCount to zero
                middlePalindromeLetters.fill(false);
                middlePalindromeLettersCount = 0;

                mid = first + 1;
                // Loop through indices between first and last 
                // OR until all middle letters have been checked for palindrome subsequences
                while (mid < last && middlePalindromeLettersCount < 26) {
                    letterIndex = getLowercaseLetterIndex(s[mid]);
                    if (!middlePalindromeLetters[letterIndex]) {
                        // Add letter at first index to middlePalindromeLetters, setting to true
                        middlePalindromeLetters[letterIndex] = true;
                        // Increment middlePalindromeLettersCount
                        middlePalindromeLettersCount++;
                        // Increment total count of palindrome subsequences
                        count++;
                    }
                    mid++;
                }
            }
        }

        first++; // Increment first index for next loop
    }

    return count;
};

var getLowercaseLetterIndex = function(letter) {
    // 'a'=97 (0 index) -> 'z'=122 (25 index) 
    return letter.charCodeAt(0) - 97;
};

/**
- Keeps record of letter used as ends of palindromes. Can skip if encounter again in middle.
- NOTE: Better to use 26-length array for each lowercase letter and change from false to true
  when corresponding letter has been checked already
endPalindromeLettersSet = []
- Cleared when new end palindrome letters found. Add middle letters to not repeat.
- NOTE: Better to use 26-length array for each lowercase letter and change from false to true
  when corresponding letter has been checked already
middlePalindromeLettersSet = []
total = 0;

bbcbaba
i     j
b !== a, j--

bbcbaba
ik   j
b === b
add a to endPalindromeLettersSet
endPalindromeLettersSet = {b}
bbb
total++
middlePalindromeLettersSet = {b}

bbcbaba
i k  j
bcb
total++
middlePalindromeLettersSet = {b,c}

bbcbaba
i  k j
middle b already used, skip

bbcbaba
i   kj
bab
total++
middlePalindromeLettersSet = {a,b,c}
k reaches j, i++, j=end
clear middlePalindromeLettersSet

bbcbaba
 i    j
i=>b already in endPalindromeLettersSet
skip, i++

bbcbaba
  i   j
c !== a, j--

repeat while i > j where c !== a
i++, j=end

bbcbaba
   i  j
i=>b already in endPalindromeLettersSet
skip, i++

bbcbaba
    ikj
a === a
add a to endPalindromeLettersSet
endPalindromeLettersSet = {a,b}
aba
total++
middlePalindromeLettersSet = {b}

 */