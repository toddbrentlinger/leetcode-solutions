/**
 * @param {number[]} score
 * @return {string[]}
 * Runtime: 62ms (88.29%)
 * Memory: 44.77MB (63.06%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */
var findRelativeRanks = function(score) {
    // Array to hold score ranks as strings
    let ranks = new Array(score.length);
    
    // Replace each score with array of score AND index in original array
    score.forEach((scoreSingle, i, arr) => {
        arr[i] = [scoreSingle, i];
    });

    // Sort new score array by original score
    score.sort((a,b) => b[0] - a[0]);

    // Set corresponding index of score in original array (1-index) by place in sorted score array
    score.forEach((scoreSingle, place) => {
        switch(place) {
            case 0:
                ranks[scoreSingle[1]] = 'Gold Medal';
                break;
            case 1:
                ranks[scoreSingle[1]] = 'Silver Medal';
                break;
            case 2:
                ranks[scoreSingle[1]] = 'Bronze Medal';
                break;
            default:
                ranks[scoreSingle[1]] = String(place + 1);
        }
    });

    return ranks;
};