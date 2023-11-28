/**
 * @param {string} corridor
 * @return {number}
 * Runtime: 101ms (75.00%)
 * Memory: 66.55MB (50.00%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var numberOfWays = function(corridor) {
    const MOD = 10**9 + 7;
    let seatIndices = [];
    let nDivisions = 1;
    let i;

    // Create array of indices of each seat
    for (i = 0; i < corridor.length; i++) {
      if (corridor[i] === 'S') {
        seatIndices.push(i);
      }
    }

    // If odd number of seats OR NO seats, no way to divide corridor with 2 seats in each division
    if (seatIndices.length === 0 || seatIndices.length % 2 === 1) { return 0; }

    // If only two seats, only one way to divide, by not installing any more dividers
    if (seatIndices.length === 2) { return 1; }
    
    // Find product of each possible divider positions between each pair of seats
    for (i = 1; i < seatIndices.length - 1; i += 2) {
      nDivisions = (nDivisions * (seatIndices[i+1] - seatIndices[i])) % MOD
    }

    return nDivisions;
};

/**
SSPPSPSPSSP

seatIndices: 0,1,4,6,8,9

Must be dividers between these indices:
0,1 | 4,6 | 8,9

First divider can be after indices 1,2,3 -> 3 possiblities
Second dividor can be after indices 6,7 -> 2 possibilites

Product of all possibilities is 3 x 2 = 6
 */