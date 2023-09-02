"use strict";

/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 48ms (93.34%)
 * Memory: 42.00MB (85.31%)
 */
var isValid = function(s) {
    let stack = [];
    const parenthesesMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (parenthesesMap[s[i]]) {
            stack.push(parenthesesMap[s[i]]);
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

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