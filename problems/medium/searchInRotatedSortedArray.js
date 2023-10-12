/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Runtime: 38ms (98.80%)
 * Memory: 41.54MB (90.84%)
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid;
    
    // Return if target is less than first AND greater than last (not included)
    if (target < nums[low] && target > nums[high]) { return -1; }

    while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            if (nums[mid] > nums[high]) {
                if (target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            } else {
                if (target <= nums[high]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        } else { // Else target > nums[mid]
            if (nums[mid] > nums[high]) {
                if (target <= nums[high]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                if (target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
    }

    return -1;
};

/**

mid more than target
    mid more than high
        target less than high
            low=mid+1
        target more than high
            high=mid-1
    mid less than high
        target less than high
            high=mid-1
        target more than high
            ???low=mid+1

mid less than target
    mid more than high
        target less than high
            ???high=mid-1
        target more than high
            low=mid+1
    mid less than high
        target less than high
            low=mid+1
        target more than high
            high=mid-1

4,5,6,7,0,1,2,3 target=1
l             h

if mid=3(7)
mid more than target
mid more than high
target less than high
should set low=mid+1 (different than normal binary search would adjust high)

if mid=4(0)
mid less than target
mid less than high
target less than high
should set low=mid+1 (same as normal binary search)

if mid=6(2)
mid more than target
mid less than high
target less than high
should set high=mid-1 (same as normal binary search)

4,5,6,7,0,1,2,3 target=6
l             h

if mid=1(5)
mid less than target
mid more than high
target more than high
should set low=mid+1 (same as binary search)

if mid=3(7)
mid more than target
mid more than high
target more than high
should set high=mid-1 (same as normal binary search)

if mid=4(0)
mid less than target
mid less than high
target more than high
should set high=mid-1 (different than normal binary search)

0,1,2,3,4,5,6,7 target=5
l             h

if mid=3(3)
mid less than target
mid less than high
target less than high
should set low=mid+1 (same as normal binary search)

if mid=6(6)
mid more than target
mid less than high
target less than high
should set high=mid-1 (same as normal binary search)

-------------------------------------------------------------------------------

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