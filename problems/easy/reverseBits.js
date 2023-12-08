/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * Runtime: 45ms (98.10%)
 * Memory: 43.82MB (69.09%)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
var reverseBits = function(n) {
    let nReversed = 0;

    // Loop through each bit of 32-bit integer
    for (let i = 0; i < 32; i++) {
        // Left shift nReversed by one to add next bit
        nReversed <<= 1;

        // If right most bit of n is 1
        if (n & 1) {
            // Use OR operator to add 1 to right end of nReversed
            nReversed |= 1;
        }

        // Right shift n 1 bit to remove right most bit for next loop
        n >>>= 1;
    }

    // Return nReversed unsigned right shifted by 0 to convert signed number to unsigned.
    // JavaScript has 32-bit signed integer where left most bit determines sign.
    return nReversed >>> 0;
};

/**
11 (1011)
1011 -> 1101
output = 0000

-------------------------------------------------------------------------------

n = 1011

Left shift output by one to add next bit
output << 1
0000 << 1
0000

See if right most bit is 1 or zero
n & 1
11 & 1
1011 & 0001
0001

Use OR operator to add 1 to right end of output
output = output | 0001 = 0000 | 0001 = 0001

Right shift n 1 bit to remove right most bit
n >> 1
11 >> 1
1011 >> 1
0101

-------------------------------------------------------------------------------

n = 0101

Left shift output by one to add next bit
output << 1
0001 << 1
0010

See if right most bit is 1 or zero
n & 1
5 & 1
0101 & 0001
0001

Use OR operator to add 1 to right end of output
output = output | 0001 = 0010 | 0001 = 0011

Right shift n 1 bit to remove right most bit
n >> 1
5 >> 1
0101 >> 1
0010

-------------------------------------------------------------------------------

n = 0010

Left shift output by one to add next bit
output << 1
0011 << 1
0110

See if right most bit is 1 or zero
n & 1
2 & 1
0010 & 0001
0000

Since right most bit is zero, do NOT use OR operator to add 1 to right end of output
zero is already in right most bit
output = 0110

Right shift n 1 bit to remove right most bit
n >> 1
2 >> 1
0010 >> 1
0001

-------------------------------------------------------------------------------

n = 0001

Left shift output by one to add next bit
output << 1
0110 << 1
1100

See if right most bit is 1 or zero
n & 1
1 & 1
0001 & 0001
0001

Use OR operator to add 1 to right end of output
output = output | 0001 = 1100 | 0001 = 1101

Right shift n 1 bit to remove right most bit
n >> 1
1 >> 1
0001 >> 1
0000

-------------------------------------------------------------------------------

n is zero
end loop
return output = 1101

 */