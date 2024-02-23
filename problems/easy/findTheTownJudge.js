/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * Runtime: 79ms (86.50%)
 * Memory: 56.59MB (57.50%)
 * Time Complexity: O(n) each trust pair and person is traversed once
 * Space Complexity: O(n) each person has counter
 */
var findJudge = function(n, trust) {
    // Base Case: If trust length is less than n - 1, cannot be enough trust for everybody to trust judge
    if (trust.length < (n - 1)) { return -1; }

    let trustCount = new Array(n).fill(0);
    let i;

    // Create counts of people who trust ith person.
    // If increment count when trusted and decrement count when trustee, final
    // count will be (n-1) for only judge.
    // ith index is person number i+1 so person number corresponds to i-1 index
    for (i = 0; i < trust.length; i++) {
        // Decrement trustee count
        trustCount[trust[i][0] - 1]--;
        // Increment trusted count
        trustCount[trust[i][1] - 1]++;
    }

    // If any person has trust of every other person (n-1), they are the judge
    for (i = 0; i < trustCount.length; i++) {
        if (trustCount[i] === n - 1) {
            return i + 1;
        }
    }

    // If reach here, no judge was found
    return -1;
};

/**
- If track count of people who trust ith person, judge will have count of (n-1)
- Someone else can be trusted be everyone but also trust someone which means they
are not the judge. Need to track the people who trust as well.
- If add count when trusted and subtract count when trustee, the final count will
only be (n-1) for the judge.
- Could track people who don't trust anybody but more than just the judge could
not trust anybody. Better to track count of people who trust ith person.
 */