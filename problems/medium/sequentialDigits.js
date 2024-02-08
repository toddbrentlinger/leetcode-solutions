/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 * Runtime: 41ms (92.31%)
 * Memory: 48.89MB (5.13%)
 */
var sequentialDigits = function(low, high) {
    // Holds sorted list of all sequential digit integers
    let output = [];
    // First digit in sequential integer, initialized to left-most digit in low
    let leftMostDigit = +low.toString()[0];
    // Number of digits in sequential integer, initialized to length of low
    let length = low.toString().length;
    let int;

    while (length < 10) {
        // Get possible sequential integer or -1 if NOT possible with current arguments
        int = createSequentialDigitInteger(leftMostDigit, length);

        // If possible sequential integer is greater than high bound, break loop
        if (int > high) {
            break;
        }

        // If possible sequential integer is NOT valid, need to increase 
        // length of sequential integer for next loop
        if (int === -1) {
            // Reset leftMostDigit to 1 for new digit length
            leftMostDigit = 1;
            // Increment digit length
            length++;
        }
        // Else possible sequential integer is valid
        else {
            // If possible sequential integer is greater than low, push to 
            // output since it's a valid sequential integer and within low-high bounds 
            if (int >= low) {
                output.push(int);
            }

            // Increment leftMostDigit for next possible sequential integer
            leftMostDigit++;
        }
    }

    return output;
};

/**
 * Creates sequential integer beginning with specific number and ranging a 
 * specific length. Return -1 if not possible.
 * @param {number} leftMostDigit
 * @param {length} high
 * @return {number}
 */
var createSequentialDigitInteger = function(leftMostDigit, length) {
    // If there are NOT enough sequential digits left to fill all digits in length, 
    // sequential digit cannot be created. Return -1.
    if (9 - leftMostDigit + 1 < length) {
        return -1;
    }

    // Add sequential digits to string
    let str = '';
    for (let n = 0; n < length; n++) {
        str += (leftMostDigit++).toString();
    }

    // Convert string of number to number type
    return +str;
};

/**
- First sequential digit checked has same left-most digit of low,
then each digit after is one more than previous digit

low = 1000
high = 13000
1234
2345
3456
4567
5678
6789
- Sequential digit cannot start with 7 since digit length is 4 and there are only
2 sequential digits left (not required 3)
 */