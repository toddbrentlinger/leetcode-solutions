/**
 * @param {number[][]} img
 * @return {number[][]}
 * Runtime: 100ms (77.78%)
 * Memory: 48.46MS (97.53%)
 * Time Complexity: O(m x n) where (m x n) are dimensions of 2D img array
 * Space Complexity: O(m x n)
 */
var imageSmoother = function(img) {
    let row, col, rowSmooth, colSmooth, total, count;

    // Create smooth image array set to same size as 2D img array
    let smoothImg = new Array(img.length);
    for (row = 0; row < img.length; row++) {
        smoothImg[row] = new Array(img[0].length);
    }

    // Loop through each node in 2D img array
    for (row = 0; row < img.length; row++) {
        for (col = 0; col < img[0].length; col++) {
            // Get sum and count of possible 3x3 sub-array around each value in img
            
            total = count = 0; // Reset count to zero for next node in img 2D array
            
            // Loop through max possible 3x3 image smoother subarray around current node in img
            for (rowSmooth = row - 1; rowSmooth <= row + 1; rowSmooth++) {
                for (colSmooth = col - 1; colSmooth <= col + 1; colSmooth++) {
                    // If row is out of bounds, no value to add, skip
                    if (rowSmooth < 0 || rowSmooth > img.length - 1) {
                        continue;
                    }
                    // If column is out of bounds, no value to add, skip
                    if (colSmooth < 0 || colSmooth > img[0].length - 1) {
                        continue;
                    }
                    // If reach here, (rowSmooth, colSmooth) is within img
                    
                    total += img[rowSmooth][colSmooth]; // Add value to total in current 3x3 smoother
                    count++; // Increment count of nodes in max possible 3x3 smoother
                }
            }

            // Set same node in smooth image to average value using total and count
            smoothImg[row][col] = Math.floor(total / count);
        }
    }

    return smoothImg;
};