/**
 * @param {number} n
 * @return {number}
 * Runtime: 99ms (100.00%)
 * Memory: 48.50MB (80.00%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var knightDialer = function(n) {
    // If n is 1, return 10 for one number for each numeric cell
    if (n === 1) { return 10; }

    const MOD = 10**9 + 7;
    // Possible cells knight can travel from each numeric cell 0-9
    const knightTravels = [
        [4,6],
        [6,8],
        [7,9],
        [4,8],
        [0,3,9],
        [],
        [0,1,7],
        [2,6],
        [1,3],
        [2,4],
    ];
    // Combinations that knight can move from each numeric cell initialized to
    // phone numbers of length n=2
    let combinations = [2,2,2,2,3,0,3,2,2,2];
    let newCombinations, i;

    // Set new combinations for each phone number length greater than 2
    while (n > 2) {
        // Reset previous loop newCombinations to empty array
        newCombinations = new Array(combinations.length);

        // Set new combinations for each numeric cell
        for (i = 0; i < combinations.length; i++) {
            // Since numeric cell 5 has no possible other number for the knight to travel, combination to zero
            if (i === 5) {
                newCombinations[i] = 0;
            }
            
            // Set new combination for numeric cell i to previous combinations for other numeric cells 
            // the knight can travel to according to knightTravels array
            newCombinations[i] = knightTravels[i]
                .reduce((accum, curr) => accum + combinations[curr], 0) % MOD;
        }

        // Set combination to newCombinations for next loop
        combinations = newCombinations;

        n--;
    }

    // Reduce final combinations to get final number of possible distinct phone numbers
    return combinations.reduce((accum, curr) => accum + curr) % MOD;
};

/**
Start On | Travel To:
---------------------
    0    |    4,6    
    1    |    6,8
    2    |    7,9
    3    |    4,8
    4    |    0,3,9
    5    |    -
    6    |    0,1,7
    7    |    2,6
    8    |    1,3
    9    |    2,4

If n=2
Start on 1 -> 6,8
1,6 - 1,8 (2)
...
Start on 0 -> 4,6
0,4 - 0,6 (2)


Start On | Combinations
-----------------------
    0    |    2    
    1    |    2
    2    |    2
    3    |    2
    4    |    3
    5    |    0
    6    |    3
    7    |    2
    8    |    2
    9    |    2

Total 20

-------------------------------------------------------------------------------

If n=3
Start on 1
1 -> 6 -> 0,1,7
1,6,0 - 1,6,1 - 1,6,7 (3)
1 -> 8 -> 1,3
1,8,1 - 1,8,3 (2)
Sum of 6 & 8 for n=3
(5)

Start on 2
2 -> 7 -> 2,6 (2)
2 -> 9 -> 2,4 (2)
Sum of 7 & 9 for n=2
(4)

Start On | Combinations
-----------------------
    0    |    6
    1    |    5
    2    |    4
    3    |    5
    4    |    6
    5    |    0
    6    |    6
    7    |    5
    8    |    4
    9    |    5

Total 46
 */