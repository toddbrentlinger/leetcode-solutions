/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 45ms (98.08%)
 * Memory: 44.75MB (54.33%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var deleteGreatestValue = function(grid) {
    let total = 0; // Sum of max values for every loop
    let max; // Hold max value for every loop

    // Sort each row in descending value
    grid.forEach((row) => row.sort((a,b) => b - a));
    
    // Loop through each index of the rows
    for (let i = 0; i < grid[0].length; i++) {
        max = 0; // Reset max of ith loop to zero

        // Find max value of ith loop (ith value in each row)
        grid.forEach((row) => {
            if (row[i] > max) {
                max = row[i];
            }
        });
        
        total += max; // Add max of ith loop to total
    }

    return total;
};