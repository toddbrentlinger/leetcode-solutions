/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 76ms (92.22%)
 * Memory: 60.26MB (65.87%)
 * Time Complexity: O(n)
 * Space Complexity: O(1) if output array is NOT included
 */
var productExceptSelf = function(nums) {
    let prefixProduct = nums[0];
    let postfixProduct = nums[nums.length - 1];
    let i = 1; // index for prefix product (incremented)
    let j = nums.length - 2; // index for postfix product (decremented)
    let output = new Array(nums.length).fill(1);

    // Loop through nums forward with prefix product and reverse with postfix product
    while (j >= 0) {
        // Multiply output[i] by prefixProduct (product of all values before ith index)
        output[i] *= prefixProduct;

        // Multiply prefixProduct by nums[i] for next loop
        prefixProduct *= nums[i];

        // Increment i for next loop
        i++;

        // Multiply output[j] by postfixProduct (product of all values after jth index)
        output[j] *= postfixProduct;

        // Multiply postfixProduct by nums[j] for next loop
        postfixProduct *= nums[j];

        // Decrement j for next loop
        j--;
    }

    // All indices have had product of all previous values AND all next values

    return output;
};

/**
- For ith value, need:
    - product of all previous values 0 to (i-1) indices
    - product of all next values (i+1) to nums.length-1 indices

-------------------------------------------------------------------------------

- Prefix product going forward and then postfix product going reverse, taking 
into account ith value NOT included in final sum 

prefixProduct = nums[0] = 1
postfixProduct = nums[nums.length-1] = 4
iPrefix = 1
iPostFix = nums.length - 2;
output = [1,1,1,1]

1,2,3,4
  i j
pre = 1
post = 4

- Multiply output[i] by prefixProduct
output = [1, 1, 1, 1]
- Multiply prefixProduct by nums[i] for next loop
pre *= nums[i] *= 2 = 2
- Increment i for next loop
i++

- Multiply output[j] by postfixProduct
output = [1, 1, 4, 1]
- Multiply postfixProduct by nums[j] for next loop
post *= nums[j] *= 3 = 12
- Decrement j for next loop
j--

-------------------------------------------------------------------------------

1,2,3,4
  j i
pre = 2
post = 12

- Multiply output[i] by prefixProduct
output = [1, 1, 8, 1]
- Multiply prefixProduct by nums[i] for next loop
pre *= nums[i] *= 3 = 6
- Increment i for next loop
i++

- Multiply output[j] by postfixProduct
output = [1, 12, 8, 1]
- Multiply postfixProduct by nums[j] for next loop
post *= nums[j] *= 2 = 24
- Decrement j for next loop
j--

-------------------------------------------------------------------------------

1,2,3,4
j     i
pre = 6
post = 24

- Multiply output[i] by prefixProduct
output = [1, 12, 8, 6]
- Multiply prefixProduct by nums[i] for next loop
pre *= nums[i] *= 3 = 6
- Increment i for next loop
i++

- Multiply output[j] by postfixProduct
output = [24, 12, 8, 6]
- Multiply postfixProduct by nums[j] for next loop
post *= nums[j] *= 2 = 24
- Decrement j for next loop
j--

reach end, return output

-------------------------------------------------------------------------------

- Instead of using both prefix and postfix at the same time, can reduce memory
by going one way with prefix and then going reverse with postfix. Can reuse
some variables.

 */