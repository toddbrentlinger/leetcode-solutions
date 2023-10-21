/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 45ms (94.26%)
 * Memory: 41.31MB (98.56%)
 * Time Complexity O(n)
 * Space Complexity: O(1)
 */
var backspaceCompare = function(s, t) {
    let si = s.length - 1;
    let ti = t.length - 1;
    let backCount;

    while (si >= 0 || ti >= 0) {
        // Adjust indices for backspaces until reach character in final string
        while (s[si] === '#') {
            backCount = 1;
            si--;
            while (backCount > 0) {
                if (s[si] === '#') {
                    backCount++;
                } else {
                    backCount--;
                }
                si--;
            }
        }
        while (t[ti] === '#') {
            backCount = 1;
            ti--;
            while (backCount > 0) {
                if (t[ti] === '#') {
                    backCount++;
                } else {
                    backCount--;
                }
                ti--;
            }
        }

        // Compare characters after backspaces to right have been considered
        if (s[si] !== t[ti]) {
            return false;
        }

        // Decrement each string index
        si--;
        ti--;
    }

    // If one string still has characters to check, check if remaining chars are removed with backspaces

    // If one string still has characters to check, strings are NOT equal
    if (si >= 0 || ti >= 0) {
        return false;
    }

    return true;
};

/**
ab#c - ad#c
   i      j
s[i] === t[j] c
decrement i AND j

ab#c - ad#c
  i      j
while s[i] === #

-------------------------------------------------------------------------------

ab## - c#d#
   i      j
s[i] is #
backCount = 1
i-- = 2

s[i] is #
backCount++ = 2
i-- = 1

while backCount > 0:
    i--
final i = -1

t[j] is #
backCount = 1

if char is #
    backCount++
    i--
    if char is # again
        backCount++
        i--
    else char is letter
 */