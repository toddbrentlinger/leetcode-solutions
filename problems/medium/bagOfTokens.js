/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 * Runtime: 62ms (71.43%)
 * Memory: 51.14MB (14.29%)
 * Time Complexity: O(nlogn) sorting tokens array
 * Space Complexity: O(1)
 */
var bagOfTokensScore = function(tokens, power) {
    // Sort tokens in ascending order
    tokens.sort((a, b) => a - b);

    // Base Case: if power is less than smallest value, no play can be made. 
    // Since score is initially zero, cannot play token face-down AND cannot 
    // play token face-up since initial power is less than smallest token value.
    if (power < tokens[0]) { return 0; }

    // If reach here, at least smallest value token can be played face-up for +1 score

    let iSmallest = 0; // Index of smallest token value not played
    let iLargest = tokens.length - 1; // Index of largest token value not played
    let score = 0; // Current score
    let maxScore = 0;

    while (iLargest >= iSmallest) {
        // If smallest token can be played face up
        if (power >= tokens[iSmallest]) {
            // Subtract token value from power
            power -= tokens[iSmallest];
            // Increment score
            score++;
            // Increment smallest token index to point to next smallest token
            iSmallest++;

            // Check if current score is max score so far
            if (score > maxScore) {
                maxScore = score;
            }
        }
        // Else smallest token CANNOT be played face up, check if can play face down
        else {
            // If CANNOT play token face down either, no more tokens can by played, break loop
            if (score < 1) { break; }

            // If reach here, token can be played face down
            
            // Add token value to power
            power += tokens[iLargest];
            // Decrement score
            score--;
            // Decrement largest token index to point to next largest token
            iLargest--;
        }
    }

    return maxScore;
};

/**
- Greedy solution: Best to decrease power by least value possible and increase 
power by highest value possible.

- Base Case: if power is less than smallest value, no play can be made.
Since score is initially zero, cannot play token face-down AND cannot 
play token face-up since initial power is less than smallest token value.
 */