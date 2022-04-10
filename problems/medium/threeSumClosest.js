"use strict";

/* Pseudo-code
 * - If nums length is 3, return sum of all values
 * - Sort nums 
 * 
 * key, value = number, occurences of number
 * {
 *   '-4': 1,
 *   '-1': 1,
 *   '1': 1,
 *   '2': 1
 * }
 * [-4,-1,1,2] Target: 1 Output: 2 (-1+1+2)
 * 
 * i=0, j=3, nums[i]=-4, nums[j]=2
 *   valNeeded = 1 - (-4) - 2 = 3
 *   Value cannot be between two indices
 *     Since valNeeded is greater than nums[j] = 2
 *       k = j - 1 = 2
 *       currThreeSum = nums[i] + nums[j] + nums[k] = -4 + 2 + 1 = -1
 *       Set threeSumClosest = currThreeSum
 *       increment i
 *       
 * i=1, j=3, nums[i]=-1, nums[j]=2
 *   valNeeded = 1 - (-1) - 2 = 2
 *   Value could be between two indices
 *   Binary search values in between
 *      left=2, right=2, mid=2 -> not equal
 *   Value NOT in between two indices
 *      
 * [458, -453, -894, -894, 809, 880, 870, -53, -4]
 * Sorted:
 * [-894, -894, -453, -53, -4, 458, 809, 870, 880]
 * Target: 17
 * Output: 1
 * 
 * i=0, j=8, -894, 880
 *   valNeeded = 17 - (-894) - 880 = 31
 *   Value could be between two indices
 *   Binary search values in between (i,j) Exclusive to i and j
 *     left=1, right=7, mid=4, too low
 *     left=5, right=7, mid=6, too high
 *     left=5, right=5, mid=5 too high
 *     No Match
 *     Check this index and appropriate adjacent index for value closest to valNeeded
 *       Since nums[mid]=458 is more than valNeeded=31, check previous index (check bounds)
 *       nums[mid-1]=-4 is closer to valNeeded=31 than nums[mid]=458
 *       nums[i]+nums[j]+nums[mid-1] = -894 + 880 + -4 = -18
 *       Since output is undefined, set to -18
 *   Decrement j until reaching new value
 *       
 * i=0, j=7, -894, 870
 *   valNeeded = 17 - (-894) - 870 = 41
 *   Value could be between two indices
 *   Binary search values in between (i,j) Exclusive to i and j
 *     left=1, right=6, mid=3, too low
 *     left=4, right=6, mid=5, too high
 *     left=4, right=5, mid=4 too low
 *     No Match
 *     Check this index and appropriate adjacent index for value closest to valNeeded
 *       Since nums[mid]=-4 is less than valNeeded=41, check next index (check bounds)
 *       nums[mid+1]=458 is further from valNeeded=31 than nums[mid]=-4
 *       nums[i]+nums[j]+nums[mid] = -894 + 870 + -4 = -28
 *       New output is further from Target than current closest output
 *   Decrement j until reaching new value
 *   
 * Notes:
 * - If current highest output is less than target, decrementing j will only make output lower (further from target)
 * - If current highest output is more than target, incrementing i will only make output higher (further from target)
 * 
 * i=0, j=8
 *   ...
 *   output=-18 is less than target, increment i until reach new value
 *     i=1 has same value
 *     i=2 has new value
 *     
 * [-894, -894, -453, -53, -4, 458, 809, 870, 880]
 * Target: 17
 * 
 * i=2, j=8, -453, 880
 *   valNeeded = 17 - (-453) - 880 = -410
 *   Value could be between two indices
 *   Binary search values in between (i,j) Exclusive to i and j
 *     left=3, right=7, mid=5, too high
 *     left=3, right=4, mid=3, too high
 *     left=3, right=3, mid=3 too low (ISSUE: mid=3 is checked twice!)
 *     No Match
 *     Check this index and appropriate adjacent index for value closest to valNeeded
 *       Since nums[mid]=-4 is less than valNeeded=41, check next index (check bounds)
 *       nums[mid+1]=458 is further from valNeeded=31 than nums[mid]=-4
 *       nums[i]+nums[j]+nums[mid] = -894 + 870 + -4 = -28
 *       New output is further from Target than current closest output
 *   Decrement j until reaching new value
 *   
 *  
 *  nums: -8,-7,-5,-3,-2,4,6,8,10
 *  Target: -8
 *  Expected Output: -8 (-7,-5,4) i=1 j=5
 *  
 *  i=0 (-8) j=8 (10)
 *  valNeeded = -8 - -8 - 10 = -10
 *  valNeeded lower than range (val at i=0)
 *      mid = i + 1 = 1 (-7) valNeeded is lower
 *      currThreeSum = -8 + -7 + 10 = -5
 *      threeSumClosest is undefined
 *          threeSumClosest = -5
 *      j--
 *      
 *  i=0 (-8) j=7 (8)
 *  valNeeded = -8 - -8 - 8 = -8
 *  valNeeded in range
 *      left=1 right=6 mid=3
 *      left=1 right=2 mid=1
 *      left=1 right=0 exit mid=1 (-7) valNeeded is lower
 *  valNeeded NOT found
 *      use mid as third value
 *      currThreeSum = -8 + -7 + 8 = -7
 *      currThreeSum closer to target than threeSumClosest
 *          threeSumClosest = -7
 *  currThreeSum is greater than target
 *      j--
 *      
 *  i=0 (-8) j=6 (6)
 *  valNeeded = -8 - -8 - 6 = -6
 *  valNeeded in range
 *      left=1 right=5 mid=3
 *      left=1 right=2 mid=1
 *      left=2 right=2 mid=2
 *      left=2 right=1 exit mid=2 (-5) valNeeded is lower
 *  valNeeded NOT found
 *      currThreeSum = -8 + -5 + 6 = -7
 *      currThreeSum is equal to threeSumClosest
 *  currThreeSum is greater than target
 *      j--
 *      
 *  nums: -8,-7,-5,-3,-2,4,6,8,10
 *  Target: -8
 *  Expected Output: -8 (-7,-5,4) i=1 j=5
 *      
 *  i=0 (-8) j=5 (4)
 *  valNeeded = -8 - -8 - 4 = -4
 *  valNeeded in range
 *      left=1 right=4 mid=2 
 *      left=3 right=4 mid=3
 *      left=3 right=2 exit mid=3 (-3) valNeeded is lower
 *  valNeeded NOT found
 *      currThreeSum = -8 + -3 + 4 = -7
 *      currThreeSum is equal to threeSumClosest
 *  currThreeSum is greater than target
 *      j--
 *  FAIL: j=5 is part of set that matches target. Should not decrement this value.
 *  
 *  i=0 (-8) j=4 (-2)
 *  valNeeded = -8 - -8 - -2 = 2
 *  valNeeded higher than range 
 *      left=j+1=5 right=arr.length=8 mid=6
 *      left=5 right=5 mid=5
 *      left=5 right=4 exit mid=5 (4) valNeded is lower
 *  valNeeded NOT found
 *      currThreeSum = -8 + 4 + -2 = -6
 *  
 */

/*
     nums: -8,-7,-5,-3,-2,4,6,8,10
     Target: -8
     Expected Output: -8 (-7,-5,4) i=1 j=5
     
     -8 -7 -5 -3 -2 4 6 8 10 => -8
      l                    h => req = -10 lower than l, use l+1 to get newSum = -5 > target, decrement h
      l                 h    => req = -8 could be in middle
      l  m              h    => newSum = -7 > target, decrement h
      l               h      => req = -6 could be in middle
      l  m            h      => newSum = -9 < target, increment l
         l            h      => req = -7 could be in middle
         l  m         h      => newSum = -6 > target, decrement h
         l          h        => req = -5 could be in middle
         l  m       h        => newSum = -8 == target, break loop and return closest -8
    
    -4 -1 1 2 target=1
     l      h => req = 3 higher than h, use h-1 to get newSum = -1 < target, increment l
        l   h => req = 0 could be in middle
        l m h => newSum = 2 > target, decrement h
        l h   => end loop, return closest = 2
        
    -4 -1 0 2 target=-1
     l      h => req = 1 could be in middle
     l  m   h => newSum = -3 < target, increment l
        l   h => req = -2 lower than l, use l+1 to get newSum = 1 > target, decrement h
        l h   => end loop, return closest = -3

    1 1 1 1 target = 2 output = 3
    l     h req = 0 lower than l, use l+1 to get newSum = 3 > target, decrement h

    -1 -1 -1 -1 target = 2 output =-3

    -8 -7 -5 -3 -2 4 6 8 10 target = -8 output = -8
     l  m                h  req = -10 lower than l, use l+1 to get newSum = -5 > target, decrement h
     l  m              h    req = -8 could be in middle, newSum = -7 > target, decrement h
     l  m            h      req = -6 in middle, newSum = -9 < target, increment l
        l  m         h      req = -7, newSum = -6 > target, decrement h
        l  m       h        req = -5, newSum = -8 == -8, return target
*/

/*
     nums: -8,-7,-5,-3,-2,4,6,8,10
     Target: -8
     Expected Output: -8 (-7,-5,4) i=1 j=5
     
     -8 -7 -5 -3 -2 4 6 8 10 => -8
      i  l                 h => 3sum = -5 > target, decrement h
      i  l              h    => 3sum = -7 > target, decrement h
      i  l            h      => 3sum = -9 < target, increment l
      i     l         h      => 3sum = -7 > target, decrement h
      ...
                      i l  h => 3sum = 24 > target, decrement h

      l                    h => req = -10 lower than l, use l+1 to get newSum = -5 > target, decrement h
      l                 h    => req = -8 could be in middle
      l  m              h    => newSum = -7 > target, decrement h
      l               h      => req = -6 could be in middle
      l  m            h      => newSum = -9 < target, increment l
         l            h      => req = -7 could be in middle
         l  m         h      => newSum = -6 > target, decrement h
         l          h        => req = -5 could be in middle
         l  m       h        => newSum = -8 == target, break loop and return closest -8
    
    -4 -1 1 2 target=1
     l      h => req = 3 higher than h, use h-1 to get newSum = -1 < target, increment l
        l   h => req = 0 could be in middle
        l m h => newSum = 2 > target, decrement h
        l h   => end loop, return closest = 2
        
    -4 -1 0 2 target=-1
     l      h => req = 1 could be in middle
     l  m   h => newSum = -3 < target, increment l
        l   h => req = -2 lower than l, use l+1 to get newSum = 1 > target, decrement h
        l h   => end loop, return closest = -3

    1 1 1 1 target = 2 output = 3
    l     h req = 0 lower than l, use l+1 to get newSum = 3 > target, decrement h

    -1 -1 -1 -1 target = 2 output =-3

    -8 -7 -5 -3 -2 4 6 8 10 target = -8 output = -8
     l  m                h  req = -10 lower than l, use l+1 to get newSum = -5 > target, decrement h
     l  m              h    req = -8 could be in middle, newSum = -7 > target, decrement h
     l  m            h      req = -6 in middle, newSum = -9 < target, increment l
        l  m         h      req = -7, newSum = -6 > target, decrement h
        l  m       h        req = -5, newSum = -8 == -8, return target

*/

var threeSumClosest = function (nums, target) {
    // If nums length is 3, return sum of all values
    if (nums.length === 3) {
        return nums.reduce((prev, curr) => prev + curr);
    }

    // Sort nums in ascending order
    nums.sort((a, b) => a - b);

    let currThreeSumClosest, currThreeSum, low, high;
    for (let i = 0; i < nums.length - 2; i++) {
        low = i + 1;
        high = nums.length - 1;
        while(low < high) {
            currThreeSum = nums[i] + nums[low] + nums[high];
            // Check if new three sum is closer to target
            if (currThreeSumClosest === undefined || Math.abs(target - currThreeSum) < Math.abs(target - currThreeSumClosest))
                    currThreeSumClosest = currThreeSum;
            // If currThreeSum is lower than target, increment low for next loop
            if (currThreeSum < target) low++;
            // Else if currThreeSum is higher than target, increment 
            else if (currThreeSum > target) high--;
            // Else currThreeSum is equal to target, return target
            else return target;
        }
    }
    return currThreeSumClosest;
};

var threeSumClosest02 = function (nums, target) {
    debugger;
    // If nums length is 3, return sum of all values
    if (nums.length === 3) {
        return nums.reduce((prev, curr) => prev + curr);
    }

    // Sort nums in ascending order
    nums.sort((a, b) => a - b);

    let currThreeSumClosest, currThreeSum, valNeeded, left, right, mid;
    let low = 0;
    let high = nums.length - 1;
    while (low < high - 1) {
        // Calculate value needed for third value to equal target
        valNeeded = target - nums[low] - nums[high];

        // If value needed is less than lower limit
        if (valNeeded < nums[low]) {
            // Use lower+1 index to find currThreeSum
            currThreeSum = nums[low] + nums[low + 1] + nums[high];
        }
        // Else If value needed is more than higher limit
        else if (valNeeded > nums[high]) {
            // Use higher-1 index to find currThreeSum
            currThreeSum = nums[low] + nums[high - 1] + nums[high];
        }
        // Else value needed is within range
        else {
            // Binary search values in between (low,high) Exclusive to low and high
            left = low + 1;
            right = high - 1;
            while (left <= right) {
                mid = left + Math.floor(0.5 * (right - left));
                if (nums[mid] < valNeeded) {
                    left = mid + 1;
                } else if (nums[mid] > valNeeded) {
                    right = mid - 1;
                } else {
                    // Found value needed to three sum to target, return target
                    return target;
                }
            }

            // Calc new three sum using mid
            currThreeSum = nums[low] + nums[mid] + nums[high];
        }

        // Check if new three sum is closer to target
        if (!currThreeSumClosest || Math.abs(target - currThreeSum) < Math.abs(target - currThreeSumClosest))
                currThreeSumClosest = currThreeSum;

        
        // NOTE: currThreeSum should NOT equal target at this point, checked during binary search above
        // If currThreeSum is less than target, increment lower limit
        if (currThreeSum < target)
            low++;
        // Else currThreeSum is more than target, decrement higher limit
        else
            high--;
    }

    return currThreeSumClosest;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest01 = function (nums, target) {
    debugger;
    // If nums length is 3, return sum of all values
    if (nums.length === 3) {
        return nums.reduce((prev, curr) => prev + curr);
    }

    // Sort nums in ascending order
    nums.sort((a, b) => a - b);

    let currThreeSumClosest, currThreeSum, valNeeded, left, right, mid;
    let i = 0;
    let j = nums.length - 1;
    while (i < j - 1) {
        // Calculate value needed for third value to equal target
        valNeeded = target - nums[i] - nums[j];

        // If value needed is less than lower limit
        if (valNeeded < nums[i]) {
            mid = i + 1;
        }
        // Else If value needed is more than higher limit
        else if (valNeeded > nums[j]) {
            mid = j - 1;
        }
        // Else value needed is within range
        else {
            // Binary search values in between (i,j) Exclusive to i and j
            left = i + 1;
            right = j - 1;
            while (left <= right) {
                mid = left + Math.floor(0.5 * (right - left));
                if (nums[mid] < valNeeded) {
                    left = mid + 1;
                } else if (nums[mid] > valNeeded) {
                    right = mid - 1;
                } else {
                    return target;
                }
            }
        }

        // If reach this point, did not find a match.
        // Check value at mid index and appropriate adjacent index for value closest to valNeeded.
        if (nums[mid] < valNeeded) {
            // Check mid and next index
            // Check next index does NOT exceed upper bounds (j)
            if (
                (mid + 1 < j) &&
                (Math.abs(nums[mid] - valNeeded) > Math.abs(nums[mid + 1] - valNeeded))
            ) {
                mid++;
            }
        }
        // Else nums[mid] > valNeeded 
        // nums[mid] == valNeeded already checked in binary search above)
        else {
            // Check mid and previous index
            // Check previous index does NOT exceed lower bounds (i)
            if (
                (mid - 1 > i) &&
                (Math.abs(nums[mid] - valNeeded) > Math.abs(nums[mid - 1] - valNeeded))
            ) {
                mid--;
            }
        }

        currThreeSum = nums[i] + nums[j] + nums[mid];
        if (
            (currThreeSumClosest === undefined) ||
            (Math.abs(target - currThreeSum) < Math.abs(target - currThreeSumClosest))
        ) {
            currThreeSumClosest = currThreeSum;
        }

        if (valNeeded > nums[mid]) {
            // Increment i until reaching a unique value, checking indices between last index
            left = i;
            do {
                i++;
            } while (i < nums.length - 2 && nums[left] === nums[i]);
        } else {
            // Decrement j until reaching a unique value, checking indices between i
            right = j;
            do {
                j--;
            } while (j - i > 1 && nums[right] === nums[j]);
        }
    }
    return currThreeSumClosest;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosestBruteForce = function (nums, target) {
    // If nums length is 3, return sum of all values
    if (nums.length === 3) {
        return nums.reduce((prev, curr) => prev + curr);
    }

    let currThreeSumClosest, currThreeSum;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = nums.length - 1; j > i + 1; j--) {
            for (let k = i + 1; k < j; k++) {
                currThreeSum = nums[i] + nums[j] + nums[k];
                if (currThreeSum === target) {
                    return target;
                } else if (currThreeSumClosest === undefined || Math.abs(target - currThreeSum) < Math.abs(target - currThreeSumClosest)) {
                    currThreeSumClosest = currThreeSum;
                }
            }
        }
    }
    return currThreeSumClosest;
};

var threeSumClosestUnitTests = function (numRandomTests = 100, arrayLengthMax = 1000, maxValueUnsigned = 1000, maxTargetUnsigned = 104) {
    /* Constraints:
     * 3 <= nums.length <= 1000
     * -1000 <= nums[i] <= 1000
     * -104 <= target <= 104
     */

    /* 
    nums: -8,-7,-5,-3,-2,4,6,8,10
    Target: -8
    Expected Output: -8
    Actual Output: -7
     */

    // [nums, target, expectedOutput]
    const TESTS = [
        [[-1, 2, 1, -4], 1, 2],
        [[0, 0, 0], 1, 0],
        [[1, 1, 1, 1], 2, 3],
        [[-1, -1, -1, -1], 2, -3],
        [[-3, 8, -8, 10, 6, -5, -7, 4, -2], -8, -8],
    ];
    let randLength, randTarget, nums, startTime, endTime;
    for (let i = 2; i < numRandomTests - 1; i++) {
        // Get random array length
        randLength = randomNumberBothInclusive(3, arrayLengthMax);
        // Get random target
        randTarget = randomNumberBothInclusive(-maxTargetUnsigned, maxTargetUnsigned);
        nums = [];
        for (let i = 0; i < randLength; i++) {
            // Add random value
            nums.push(randomNumberBothInclusive(-maxValueUnsigned, maxValueUnsigned));
        }
        TESTS.push([nums, randTarget, threeSumClosestBruteForce(nums, randTarget)]);
    }

    // Brute Force
    let output = 0;
    startTime = performance.now();
    TESTS.forEach((test, index) => {
        //console.log(`\nTest ${index + 1}:\n${test[0]}\nTarget: ${test[1]}\nOutput: ${test[2]}`);
        output = threeSumClosestBruteForce(test[0], test[1]);
        if (output !== test[2]) {
            console.error(`Test Failed!\nnums: ${test[0]}\nTarget: ${test[1]}\nExpected Output: ${test[2]}\nActual Output: ${output}`);
            return;
        } else {

        }
    });
    endTime = performance.now();
    console.log(`Brute Force Duration: ${endTime - startTime}`);

    // Custom Algorithm
    output = 0;
    startTime = performance.now();
    TESTS.forEach((test, index) => {
        output = threeSumClosest(test[0], test[1]);
        if (output !== test[2]) {
            console.error(`Test Failed!\nnums: ${test[0]}\nTarget: ${test[1]}\nExpected Output: ${test[2]}\nActual Output: ${output}`);
            return;
        } else {

        }
    });
    endTime = performance.now();
    console.log(`Custom Algorithm Duration: ${endTime - startTime}`);
};

var randomNumberBothInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};