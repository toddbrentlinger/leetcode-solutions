/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 40ms (98.05%)
 * Memory: 41.84MB (65.33%)
 */
var sortColors = function(nums) {
    let low = -1 // Index to swap low value to
    let high = nums.length; // Index to swap high value to
    let i = 0;

    while (i < high) {
        switch(nums[i]) {
            // If value is zero, increment low, swap value with new low, and increment i
            case 0:
                low++;
                [nums[i], nums[low]] = [nums[low], nums[i]];
                i++;
                break;
            // If value is two, decrement high, swap value with new high
            // DO NOT increment i so swapped value can be tested next loop
            case 2:
                high--;
                [nums[i], nums[high]] = [nums[high], nums[i]];
                break;
            // Else value is one, increment i to keep value in middle
            default:
                i++;
        }
    }
};

/**
2,0,2,1,1,0 l=-1 h=nums.length=6
i
val=2
h--
swap i with h

0,0,2,1,1,2 l=-1
i         h
val=0
l++
swap i with l
i++

0,0,2,1,1,2
l i       h
val=0
l++
swap i with l
i++

0,0,2,1,1,2
  l i     h
val=2
h--
swap i with h

0,0,1,1,2,2
  l i   h

----------------------------------------------------------------

2,0,2,1,1,0
li        h
i=0 val=2
swap i with h
h--

0,0,2,1,1,2
li      h
i=0 val=0
swap i with l
i++
l++

0,0,2,1,1,2
  li    h
i=1 val=0
swap i with l
i++
l++

0,0,2,1,1,2
    li  h
i=2 val=2
swap i with h
h--

0,0,1,1,2,2
    lih
i=2 val=1
i++

0,0,1,1,2,2
    l ih
i reaches h, end

----------------------------------------------------------------

2,0,2,1,1,0 l=null h=null
i
i=0 val=2
since h is null, swap with last element and set h = n.length-1 = 5

0,0,2,1,1,2 l=null
i         h
i=0 val=0
since l is null, swap with first element and set l = 0
i++

0,0,2,1,1,2
l i       h
i=1 val=0
val is 0, swap with low+1 element
i++
low++

0,0,2,1,1,2
  l i     h
i=2 val=2
val is 2, swap with high-1 element
high--

0,0,1,1,2,2
  l i   h
i=2 val=1
i++

0,0,1,1,2,2
  l   i h
i=3 val=1
i++

0,0,1,1,2,2
  l     ih
i reaches h, end

 */