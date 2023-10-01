/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Runtime: 79ms (87.60%)
 * Memory: 56.53MB (67.87%)
 */
var containsNearbyDuplicate = function(nums, k) {
    let windowSet = new Set();
    let i, val;

    // Initialize sliding window
    for (i = 0; i <= Math.min(k, nums.length - 1); i++) {
        val = nums[i];
        if (windowSet.has(val)) { return true; }
        windowSet.add(val);
    }

    // Slide window
    for (i = 0; i < (nums.length - k - 1); i++) {
        windowSet.delete(nums[i]);
        val = nums[i + k + 1];
        if (windowSet.has(val)) { return true; }
        windowSet.add(val);
    }

    return false;
};

/**

[1,0,1,1], k = 1

i=0 val=1
set = {1}

i=1 val=0
set = {1,0}

initial window set done

i=0 val=1 removed
set = {0}
i+k+1=2 val=1
set = {0,1}

i=1 val=0 removed
set = {1}
i+k+1=3 val=1
set already has val, return true

-------------------------------------------------

[1,2,3,1,2,3], k = 2

i=0 val=1
set = {1}

i=1 val=2
set = {1,2}

i=2 val=3
set = {1,2,3}

initial window set done

i=0 val=1 removed
set = {2,3}
i+k+1=3 val=1
set = {1,2,3}

i=1 val=2 removed
set = {1,3}
i+k+1=4 val=2
set = {1,2,3}

i=2 val=3 removed
set = {1,2}
i+k+1=5 val=3
set = {1,2,3}

reaches end
 */