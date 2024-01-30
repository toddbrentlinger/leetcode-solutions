// Stack: Array Pop/Push

/**
 * @param {string[]} tokens
 * @return {number}
 * Runtime: 58ms (78.86%)
 * Memory: 51.93MB (19.25%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var evalRPN = function(tokens) {
    // Last index is top of stack (use array as stack)
    let stack = [];
    // Holds right operand when order values are popped from stack give different results
    let rightOperand; 

    // Loop through each token to find total output
    for (let i = 0; i < tokens.length; i++) {
        switch(tokens[i]) {
            // If token is '+', push sum of top two values in stack back to top of stack
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            // If token is '-', push difference of top two values in stack back to top of stack
            // First value popped is right operand, save in temporary variable
            case '-':
                rightOperand = stack.pop();
                stack.push(stack.pop() - rightOperand);
                break;
            // If token is '*', push product of top two values in stack back to top of stack
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            // If token is '/', push division of top two values in stack back to top of stack
            // First value popped is right operand, save in temporary variable
            case '/':
                rightOperand = stack.pop();
                stack.push(Math.trunc(stack.pop() / rightOperand));
                break;
            // Else token should be a number, push number to top of stack
            // Convert token from string to number first
            default:
                stack.push(+tokens[i]);
        }
    }

    // Only remaining value is final evaluation
    return stack[0];
};

// Stack: Array Shift/Unshift

/**
 * @param {string[]} tokens
 * @return {number}
 * Runtime: 63ms (58.45%)
 * Memory: 54.45MB (5.09%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var evalRPN = function(tokens) {
    // First index is top of stack (use array as stack)
    let stack = [];
    // Holds right operand when order values are popped from stack give different results
    let rightOperand;

    // Loop through each token to find total output
    for (let i = 0; i < tokens.length; i++) {
        switch(tokens[i]) {
            // If token is '+', push sum of top two values in stack back to top of stack
            case '+':
                stack.unshift(stack.shift() + stack.shift());
                break;
            // If token is '-', push difference of top two values in stack back to top of stack
            // First value popped is right operand, save in temporary variable
            case '-':
                rightOperand = stack.shift();
                stack.unshift(stack.shift() - rightOperand);
                break;
            // If token is '*', push product of top two values in stack back to top of stack
            case '*':
                stack.unshift(stack.shift() * stack.shift());
                break;
            // If token is '/', push division of top two values in stack back to top of stack
            // First value popped is right operand, save in temporary variable
            case '/':
                rightOperand = stack.shift();
                stack.unshift(Math.trunc(stack.shift() / rightOperand));
                break;
            // Else token should be a number, push number to top of stack
            // Convert token from string to number first
            default:
                stack.unshift(+tokens[i]);
        }
    }

    // Only remaining value is final evaluation
    return stack[0];
};

/**
1 + 2
[1,2,+]
stack max size = 2

1 + (2 + 3)
[1,2,3,+,+]
stack max size = 3

1 + (2 + (3 + 4))
[1,2,3,4,+,+,+]
stack max size = 4

Size of tokens will always be odd
Stack max size = Math.ceil(n/2) => Space Complexity: O(n)
 */