/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 52ms (87.32%)
 * Memory: 45.48MB (28.47%)
 */
var majorityElement = function(nums) {
    nums = nums.sort((a,b) => a - b);

    let max = nums[nums.length - 1];
    let maxCount = count = 1;
    let i;
    
    for (i = nums.length - 2; i >= 0; i--) {
        if (nums[i] === nums[i + 1]) {
            count++;
        } else {
            if (count > maxCount) {
                maxCount = count;
                max = nums[i + 1];
            }
            count = 1;
        }
    }

    if (count > maxCount) {
        maxCount = count;
        max = nums[i + 1];
    }

    return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 56ms (72.78%)
 * Memory: 43.58MB (72.03%)
 */
var majorityElement1 = function(nums) {
    let map = new Map();
    let max, maxCount, iter, entry;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    iter = map.entries();
    entry = iter.next();

    [max, maxCount] = entry.value;

    while (!entry.done) {
        if (entry.value[1] > maxCount) {
            max = entry.value[0];
            maxCount = entry.value[1];
        }

        entry = iter.next();
    }

    return max;
};
