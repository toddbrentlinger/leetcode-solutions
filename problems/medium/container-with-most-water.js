"use strict";

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let maxArea = 0;
    while (leftIndex < rightIndex) {
        // Calculate area with min height and difference between indices
        maxArea = Math.max(maxArea, Math.min(height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex));
        // Adjust the index with smallest height toward other index
        if (height[leftIndex] < height[rightIndex])
            leftIndex++;
        else
            rightIndex--;
    }
    return maxArea;
};