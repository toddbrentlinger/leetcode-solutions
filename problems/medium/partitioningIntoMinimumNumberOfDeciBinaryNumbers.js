/**
 * @param {string} n
 * @return {number}
 * Runtime: 61ms (91.34%)
 * Memory: 45.68MB (83.80%)
 * Time Complexity: O(m) where m is number of digits in number n
 * Space Complexity: O(1)
 */
var minPartitions = function(n) {
    let highestDigit = 0; // Highest digit in number n
    let currentDigit; // Current digit to compare in number n

    // Min partitions depends on largest digit in number n.
    // EX: If largest digit is 6, will need 6 partitions at minimum.
    for (const digitChar of n) {
        // Convert digit from string to number
        currentDigit = +digitChar;

        // If digit is 9, it is the highest digit possible. 
        // No need to check remaining digits.
        if (currentDigit === 9) {
            return 9;
        }
        // Else check if current digit is highest digit so far 
        else if (currentDigit > highestDigit) {
            highestDigit = currentDigit;
        }
    }

    return highestDigit;
};

/**
- Will always take one deci-binary number for each number of highest digit
- Answer will always be highest digit of n
- Ex. If 9 is highest digit, will need 9 deci-binary numbers with one in same digit place
to sum up to n

0
0

1
1

2
1+1

...

9
9 ones

10
10

11
11

12
11+1

13
11+1+1

 */