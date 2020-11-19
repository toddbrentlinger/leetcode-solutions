"use strict";

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1) Open brackets must be closed by the same type of brackets.
 * 2) Open brackets must be closed in the correct order.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    const parenthesesMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        if (parenthesesMap.hasOwnProperty(s[i])) {
            stack.push(parenthesesMap[s[i]]);
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};