'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    /*    
    -2 1 -3 4 -1 2 1 -5 4
     |                    => n = -2 -> sum = largestSum = -2
       |                  => n =  1 -> sum += 1 = -1 > largestSum, largestSum = sum = -1, sum < n, sum = n = 1
          |               => n = -3 -> sum +=-3 = -2 < largestSum, ...                    sum > n, ...
            |             => n = 4  -> sum += 4 = 2 > largestSum, largestSum = sum = 2,   sum < n, sum = n = 4
               |          => n = -1 -> sum +=-1 = 3 
                 |        => 2 < largestSum, sum = 4 - 1 + 2 = 5 > largestSum, largestSum = 5
                   |      => 1 < largestSum, sum = ... + 1 = 6 > largestSum, largestSum = 6
                      |   => -5 < largestSum, sum = ... -5 = 1 < largestSum
                        | => 4 < largestSum, sum = ... + 4 = 5 < largestSum
    */
    /*                  
    -2 1 -3 4 -1 2 1 -5 4
     |                    => n = -2 -> sum = largestSum = -2 [sum: -2, largestSum: -2]
       |                  => n =  1 -> sum += 1 =-1 < n, sum = n > largestSum, largestSum = sum [sum: 1, largestSum: 1]
          |               => n = -3 -> sum +=-3 =-2 > n, ...   n < largestSum, ...              [sum: -2, largestSum: 1]                
            |             => n = 4  -> sum += 4 = 2 < n, sum = n > largestSum, largestSum = sum [sum: 4, largestSum: 4]
               |          => n = -1 -> sum +=-1 = 3 > n, ...   n < largestSum, ...              [sum: 3, largestSum: 4]   
                 |        => n = 2  -> sum += 2 = 5 > n, ...   n < largestSum, ...              [sum: 5, largestSum: 4]
                   |      => 1 < largestSum, sum = ... + 1 = 6 > largestSum, largestSum = 6
                      |   => -5 < largestSum, sum = ... -5 = 1 < largestSum
                        | => 4 < largestSum, sum = ... + 4 = 5 < largestSum
    */
    let currSum = nums[0];
    let largestSum = currSum;
    for (let i = 1; i < nums.length; i++) {
        // If current number is greater than currSum + current number, 
        // sum of previous numbers will only be lower when included 
        // with the sum of any more numbers that come after.
        // Reset currSum to just this number.
        currSum = Math.max(currSum + nums[i], nums[i]);
        // Check if largest sum so far
        if (currSum > largestSum) largestSum = currSum;
    }
    return largestSum;
};