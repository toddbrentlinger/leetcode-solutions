/**
 * @param {number[]} satisfaction
 * @return {number}
 * Runtime: 42ms (98.65%)
 * Memory: 42.54MB (55.41%)
 * Time Complexity: O(nlogn) satisfaction array is sorted
 * Space Complexity: O(1)
 */
var maxSatisfaction = function(satisfaction) {
    // Sort satisfaction in ascending order
    satisfaction.sort((a,b) => a - b);

    // If largest satisfaction is negative or zero, return 0 since no one likes any dishes
    if (satisfaction[satisfaction.length - 1] <= 0) {
        return 0;
    }

    // If reach this point, at least one dish is positive

    // If first satisfaction is negative, check if can remove some negative dishes
    let i;
    if (satisfaction[0] < 0) {
        let sum = 0;
        i = satisfaction.length - 1;
        
        // Sum satisfaction values from largest to smallest, stopping when sum is negative
        while (i >= 0) {
            sum += satisfaction[i];
            if (sum < 0) {
                break;
            }
            i--;
        }

        // i is now at last dish to be removed OR -1 if all dishes can be included
        // Increment i to point to first dish to be used in like-time coefficient sum
        i++;
    }
    // Else first satisfaction is positive or zero (no negative satisfaction dishes) include all dishes
    else {
        i = 0;
    }
    
    // Calculate like-time coefficient sum starting at ith index of sorted satisfaction
    let likeTimeSum = 0;
    let nthDish = 1;
    while (i < satisfaction.length) {
        likeTimeSum += nthDish * satisfaction[i];
        nthDish++;
        i++;
    }

    return likeTimeSum;
};

/**
[-1,-8,0,5,-9]

sorted
-9, -8, -1, 0, 5
 1   2   3  4  5

If remove first dish, reduces like-time coeffient sum by both -9 from beginning and 5 from
the end since sum goes from 5*5=25 to 4*5=20

Keep removing first dishes as long as they absolute value is less than last dish

-9, -8, -1, 0, 5
 1   2   3  4  5

Sum of negatives: -18
Sum of positives: 5

Negatives: -9 + 2*-8 + 3*-1 = -28
Positives: 4*0 + 5*5 = 25

If remove first:
-8, -1, 0, 5
 1   2  3  4

Sum of negatives: -9
Sum of positives: 5

Negatives: -8 + 2*-1 = -10 -> subtracted by sum of negatives from previous
Positives: 4*0 + 5*5 = 25

Keep negatives that sum to less than sum of positives

_______________________________________________________________________________

[2,-2,-3,1]

sorted
-3, -2, 1, 2
 1   2  3  4

Remove first
-2, 1, 2
 1  2  3

 _______________________________________________________________________________

[-2,5,-1,0,3,-3] -> 35

sorted
-3, -2, -1, 0, 3, 5
 1   2   3  4  5  6 -> -3 + -4 + -3 + 0 + 15 + 30 = -10 + 45 = 35

Sum of negatives: -6
Sum of positives: 8
 */