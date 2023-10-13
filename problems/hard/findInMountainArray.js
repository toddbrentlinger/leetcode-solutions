/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 * Runtime: 42ms (93.85%)
 * Memory: 42.01MB (72.31%)
 * Time Complexity: (LogN)
 * Space Complexity: (1)
 */
var findInMountainArray = function(target, mountainArr) {
    let low, mid, high, peak;
    let prev, curr, next;

    // Find mountain peak index
    low = 0;
    high = mountainArr.length() - 1;
    // If peak is at beginning
    if (mountainArr.get(low + 1) < mountainArr.get(low)) {
        peak = low;
    }
    // Else if peak is at end 
    else if (mountainArr.get(high - 1) < mountainArr.get(high)) {
        peak = high;
    }
    // Else peak is in middle 
    else {
        low++; // Increment low since first element alredy checked
        high--; // Decrement high since last element already checked
        while (low <= high) {
            mid = Math.floor(0.5 * (low + high));
            prev = mountainArr.get(mid - 1);
            curr = mountainArr.get(mid);
            next = mountainArr.get(mid + 1);

            // If mid is peak, break loop
            if ((curr > next) && (curr > prev)) {
                peak = mid;
                break;
            }
            // Else if mid is left of peak
            else if (curr > prev) {
                low = mid + 1;
            }
            // Else mid is right of peak 
            else {
                high = mid - 1;
            }
        }
    }

    // Check if target exists to left of peak to guarentee first existence
    low = 0;
    high = peak;
    while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        curr = mountainArr.get(mid);
        if (curr === target) {
            return mid;
        } else if (curr < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // Check if target exists to right of peak
    low = peak + 1;
    high = mountainArr.length() - 1;
    while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        curr = mountainArr.get(mid);
        if (curr === target) {
            return mid;
        } else if (curr < target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    // If reach here, target does NOT exist
    return -1;
};

function MountainArray(arr) {
    /**
     * @param {number} index
     * @return {number}
     */
    this.get = function(index) {
        return arr[index];
    };
    /** 
     * @return {number} 
     */
    this.length = function() {
        return arr.length;
    };
};

function findInMountainArrayUnitTestSingle(inputObj, expectedOutput) {
    let mountainArr = new MountainArray(inputObj.arr);
    let actualOutput = findInMountainArray(inputObj.target, mountainArr);
    console.assert(
        expectedOutput === actualOutput,
        `FAILED:\nArr: ${inputObj.arr}\nTarget: ${inputObj.target}\nOutput: ${actualOutput}\nExpected: ${expectedOutput}`
    );
}

function findInMountainArrayUnitTestAll() {
    findInMountainArrayUnitTestSingle({arr: [1,2,3,4,5,3,1], target: 3}, 2);
    findInMountainArrayUnitTestSingle({arr: [0,1,2,4,2,1], target: 3}, -1);
    findInMountainArrayUnitTestSingle({arr: [1,2,3,4,5,3,1], target: 2}, 1);
}

findInMountainArrayUnitTestAll();

/**
- Mountain peek in middle when next value AND prev value is less than current value
- Mountain peek at start if first element AND next element has smaller value
- Mountain peek at end if last element AND previous element has smaller value

[1,2,3,4,5,3,1] target=2 output=1
 */