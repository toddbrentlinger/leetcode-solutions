"use strict";

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let patternIndex = 0, stringIndex = 0;

    // If next pattern index is NOT last and equal to '*'
    if (patternIndex < p.length - 1 && p[patternIndex + 1] === '*') {

    } else { // Else current pattern index is last OR next pattern index is NOT '*'

    }
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    debugger;
    let patternIndex = 0, stringIndex = 0;
    while (patternIndex < p.length) {
        // Return false if stringIndex is out of bounds (pattern matches longer string)
        if (stringIndex >= s.length)
            return false;

        switch (p[patternIndex]) {
            case '.':
                stringIndex++;
                break;
            case '*':
                // If previous pattern index is '.'
                if (p[patternIndex - 1] === '.') {
                    // If there's a next char in pattern
                    if (patternIndex + 1 < p.length) {
                        while (s[stringIndex] !== p[patternIndex + 1]) {
                            // If reach end of string while another char in pattern exists, return false
                            if (stringIndex <= s.length)
                                return false;
                            stringIndex++;
                        }
                    } else // Else return true since it satisfies remaining string
                        return true;
                } else { // Else previous pattern index NOT '.'
                    // If the char at the next pattern index is same as previous pattern index
                    if (patternIndex < p.length - 1 && p[patternIndex - 1] === p[patternIndex + 1]) {
                        while (s[stringIndex] === p[patternIndex - 1] && stringIndex < s.length - 1 && s[stringIndex + 1] === p[patternIndex - 1])
                            stringIndex++;
                    } else { // Else current pattern index is last OR next pattern char is different than previous pattern char
                        while (s[stringIndex] === p[patternIndex - 1])
                            stringIndex++;
                    }
                }
                break;
            default:
                // If characters do NOT match
                if (p[patternIndex] !== s[stringIndex]) {
                    // If next character is '*', increment pattern index by 2
                    if (patternIndex < p.length - 1 && p[patternIndex + 1] === '*') {
                        patternIndex += 2;
                        continue; // Continue to skip incrementing string index
                    }
                    else
                        return false;
                }
                else // Else characters match, increment string index
                    stringIndex++;
        }

        patternIndex++;
    }

    // Return false if remaining chars in string
    if (stringIndex < s.length)
        return false;
    else // Else the pattern matches if reaching this point, return true
        return true;
};

/**
 * @param {string} s
 * @param {string} p
 * @param {boolean} bExpectedOutput
 */
var isMatchUnitTestSingle = function (s, p, bExpectedOutput) {
    if (isMatch(s, p) !== bExpectedOutput) {
        console.log(`Test Failed: \ns: ${s}\np: ${p}\nExpected: ${bExpectedOutput}`);
    }
}

/**
 * @todo Test against s="aab" p="c*a*b" -> true
 * @todo Test against s="ab" p=".*c" -> false
 * @todo Test against s="aaa" p="a*a" -> true
 * @todo Test against s="aaa" p="ab*a*c*a" -> true
 */
var isMatchUnitTests = function () {
    isMatchUnitTestSingle('aa', 'a', false); // false
    isMatchUnitTestSingle('aa', 'a*', true); // true
    isMatchUnitTestSingle('ab', '.*', true); // true
    isMatchUnitTestSingle('aab', 'c*a*b', true); // true
    isMatchUnitTestSingle('ab', '.*c', false); // false
    isMatchUnitTestSingle('aaa', 'a*a', true); // true
    isMatchUnitTestSingle('aaa', 'aab*a*c*a', true); // true
};