/**
 * @param {number} n
 * @return {number}
 * Runtime: 42ms (96.41%)
 * Memory: 41.12MB (97.95%)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
var totalMoney = function(n) {
    // Find cumulative money for closest complete week
    const nWeeks = Math.floor(n / 7);
    let total = (nWeeks * 28) + ((nWeeks * (nWeeks - 1)) / 2) * 7;
    
    // Add money for remaining days in last week
    const endCost = nWeeks + (n % 7); // Cost for last day
    // Add difference of triangular numbers for last day cost and first day of last week cost
    total += ((endCost**2 + endCost) / 2) - ((nWeeks**2 + nWeeks) / 2);

    return total;
};

/**
n=24
(1 + 2 + 3 + 4 + 5 + 6 + 7) + 
(2 + 3 + 4 + 5 + 6 + 7 + 8) + 
(3 + 4 + 5 + 6 + 7 + 8 + 9) +
(4 + 5 + 6)

28 +
35 +
42 +
15
= 120

week | money
1       28
2       35 (28 + 7)
3       42 (28 + 7 + 7)
4       49 (28 + 7 + 7 + 7)
...
n       28 + (n-1) * 7

week | cumulative money
1           28
2           63 (28 + 28 + 7) = 28 * 2 + 7 * 1
3           105 (28 + 28 + 28 + 7 + 7 + 7) = 28 * 3 + 7 *3
4           154 = 28 * 4 + 7 * 6
...
n           (n * 28) + (n(n - 1) / 2) * 7

Remaining Money in last incomplete week:
between n-m days
triangularNum(m) - triangularNum(n)
(m(m+1)/2) - ((n-1)(n)/2)
((m**2 + m)/2) - ((n**2 + n)/2)


 */