/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 * Runtime: 45ms (86.17%)
 * Memory: 42.08MB (31.91%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var buildArray = function(target, n) {
    let output = []; // Holds sequence of stack operations
    n = target[target.length - 1]; // Only need to increment stream value to last value of target

    // Loop through each value of target array, stopping early if stream value reaches last value of target
    for (let iTarget = 0, streamVal = 1; 
        iTarget < target.length && streamVal <= n; 
        iTarget++, streamVal++
    ) {
        output.push('Push'); // Push new streamVal to stack
        // For each value less than next target value, Pop previous value and Push next stream value
        while (target[iTarget] !== streamVal) {
            output.push('Pop', 'Push');
            streamVal++; // Increment stream value to compare in next loop
        }
    }

    return output;
};

/**
1,3
i   n=1

Push => Push
s = 1
i(1) == n(1)
increment i
increment n

1,3
  i  n=2
Push => Push, Push
s = 1,2
i(3) !== n(2)
Pop => Push, Push, Pop
s = 1
increment n

1,3
  i n=3
Push => Push, Push, Pop, Push
s = 1,3
i(3) === n(3)
increment i
incrment n
 */