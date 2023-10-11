/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let first = nums[0];
    let last = nums[nums.length - 1];
    let low = 0;
    let high = nums.length - 1;
    let mid;
    
    // Return if target is less than first AND greater than last (not included)
    if (target < first && target > last) { return -1; }

    while (low <= high) {
        mid = Math.floor(low + 0.5 * (high - low));
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            if (target < nums[low]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else { // Else target > nums[mid]
            if (target > nums[high]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }

    return -1;
};

/**
4,5,6,7,8,1,2,3 target=8

-------------------------------------------------------------------------------

5,1,3 target=5

-------------------------------------------------------------------------------

4,5,6,7,0,1,2 first=0(4) last=6(2) target=0
l           h
mid = 3(7)
target is less than 7 AND target is less than first, target should be to right
mid = l + 1

4,5,6,7,0,1,2
        l   h
mid = 5(1)
target is less than 1 

-------------------------------------------------------------------------------

4,5,6,7,0,1,2 first=0(4) last=6(2) target=0
l           h
mid = 3(7)
target is less than 7 AND 7 is more than high, target should be to right
mid = l + 1

4,5,6,7,0,1,2
        l   h
mid = 5(1)
target is less than 1 AND 1 is less than high, target should be to the left
 */