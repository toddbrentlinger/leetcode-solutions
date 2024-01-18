/**
 * @param {number[][]} matches
 * @return {number[][]}
 * Runtime: 303ms (90.97%)
 * Memory: 97.81MB (95.95%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var findWinners = function(matches) {
    let zeroLoss = new Set(); // Holds players with zero loss
    let oneLoss = new Set(); // Holds players with one loss
    let multiLoss = new Set(); // Holds players with more than one loss

    // Looping through each match, sort players into one of the loss sets
    for (let i = 0; i < matches.length; i++) {
        // Winner can only be added to zeroLoss set, not removed from any

        // Add winner to zeroLoss if winner NOT already in zeroLoss, oneLoss, or multiLoss
        if (!zeroLoss.has(matches[i][0]) && !oneLoss.has(matches[i][0]) && !multiLoss.has(matches[i][0])) {
            zeroLoss.add(matches[i][0]);
        }

        // Loser can be added to oneLoss OR multiLoss, removed from zeroLoss or oneLoss

        // If loser already in multiLoss. DO NOT update any loss set
        if (multiLoss.has(matches[i][1])) {
            continue;
        }
        // If loser already in oneLoss
        else if (oneLoss.has(matches[i][1])) {
            // Remove loser from oneLoss
            oneLoss.delete(matches[i][1]);
            
            // Add loser to multiLoss
            multiLoss.add(matches[i][1]);
        }
        // If loser already in zeroLoss
        else if (zeroLoss.has(matches[i][1])) {
            // Remove loser from zeroLoss
            zeroLoss.delete(matches[i][1]);
            // Add loser to oneLoss
            oneLoss.add(matches[i][1]);
        }
        // Else loser NOT in any set
        else {
            // Add loser to zeroLoss
            oneLoss.add(matches[i][1]);
        }
    }

    // Return zero loss and one loss players as sorted arrays
    return [
        [...zeroLoss].sort((a,b) => a - b),
        [...oneLoss].sort((a,b) => a - b)
    ];
};

/**
zeroLoss = {}
oneLoss = {}
multiLoss = {}

[nWin, nLoss]

- Winner can only be added to zeroLoss set, not removed from any
    - Add to zeroLoss if nWin NOT already in zeroLoss, oneLoss, or multiLoss
- Loser can be added to oneLoss OR multiLoss, removed from zeroLoss or oneLoss
    - If nLoss already in multiLoss
        - DO NOT update any set
    - If nLoss already in oneLoss
        - Remove nLoss from oneLoss
        - Add nLoss to multiLoss
    - If nLoss already in zeroLoss
        - Remove nLoss from zeroLoss
        - Add nLoss to oneLoss
    - Else nLoss NOT in any set
        - Add nLoss to zeroLoss

_______________________________________________________________________________

[[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]

zeroLoss = {}
oneLoss = {}
multiLoss = {}


[1,3]
- Add 1 to zeroLoss set
- Add 3 to oneLoss set
zeroLoss = {1}
oneLoss = {3}

[2,3]
- Add 2 to zeroLoss set
- 3 already in oneLoss set, remove from set
zeroLoss = {1, 2}
oneLoss = {}

 */