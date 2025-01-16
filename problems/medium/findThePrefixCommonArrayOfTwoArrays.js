/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 * Runtime: 7ms (74.53%)
 * Memory: 55.66MB (91.80%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var findThePrefixCommonArray = function(A, B) {
    // Output prefix common array
    const prefCommonArr = new Array(A.length);

    const countsArr = new Array(A.length).fill(0);

    let prefCommonCount = 0;

    // Last index value of prefix common array will always equal length of arrays
    prefCommonArr[prefCommonArr.length - 1] = prefCommonArr.length;

    /**
     * Loop through all but last index of arrays since final output value is 
     * already known.
     */
    for (let i = 0; i < A.length - 1; i++) {
        // Increment count of A[i] AND B[i]
        countsArr[A[i] - 1]++;
        countsArr[B[i] - 1]++;

        // Increment count if A[i] value has been at lower index of B array
        if (countsArr[A[i] - 1] === 2) {
            prefCommonCount++;
        }

        /**
         * Increment count if B[i] value has been at lower index of A array.
         * Skip if B[i] is same value as A[i] since count was already accounted 
         * for in previous IF statement.
         */
        if ((A[i] !== B[i]) && (countsArr[B[i] - 1] === 2)) {
            prefCommonCount++;
        }

        prefCommonArr[i] = prefCommonCount;
    }

    return prefCommonArr;
};

/**
- Assumes A and B are permutations (DO NOT have to check if permutations first)
- The ith value of prefix common array will always be equal to (i-1)th value 
  OR (i-1)th value plus one OR (i-1)th value plus two
- Last value of prefix common array will always be equal to length of arrays A 
  and B

[1,3,2,4] - [3,1,2,4]
countArr = [0,0,0,0]
count = 0
output = [0,0,0,4]

i=0 (1 & 3)
countArr = [1,0,1,0]
No count is equal to 2, leave count the same
output[i] = count = 0

i=1 (3 & 1)
countArr = [2,0,2,0]
Two new counts equal to 2, increment count by 2
count += 2 = 2
output[i] = count = 2

i=2 (2 & 2)
countArr = [2,2,2,0]
One new count equal to 2, increment count by 1
count += 1 = 3
output[i] = count = 3

 */