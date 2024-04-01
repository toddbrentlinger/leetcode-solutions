#include <string>

using namespace std;

class Solution {
public:
    /**
     * Runtime: 0ms (100.00%)
     * Memory: 7.63MB (57.50%)
     * Time Complexity: O(n)
     * Space Complexity: O(1)
    */
    int lengthOfLastWord(string s) {
        int i = s.length() - 1; // Looping index initialized to index of last element in array s
        int count = 0; // Counter for number of letters in last word

        // Find first non-space character from the end of array s
        while (s[i] == ' ') { i--; }

        // Index i now points to last character of last word

        // Find how many letters are in last word (up to index points to space)
        while (i >= 0 && s[i] != ' ') {
            count++; // Increment count for new non-space character
            i--; // Decrement index for next loop
        }

        return count;
    }
};
