/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let i = 1; // Initialize index to second asteroid
    while (i < asteroids.length) {
        // If index is zero (after being decremented) OR current asteroid is going right OR previous asteroid is going left, continue
        if (i === 0 || asteroids[i] > 0 || asteroids[i-1] < 0) {
            // Increment index
            i++;
        } else { // Else current asteroid is going left AND previous asteroid is going right
            // If previous asteroid is larger
            if (Math.abs(asteroids[i-1]) > Math.abs(asteroids[i])) {
                // Remove current asteroid
                asteroids.splice(i, 1);
                // Do NOT change index since it now points to next asteroid in next loop
            }
            // Else if current asteroid is larger
            else if (Math.abs(asteroids[i]) > Math.abs(asteroids[i-1])) {
                // Remove previous asteroid
                asteroids.splice(i-1, 1);
                // Decrement index to compare current asteroid again with new previous asteroid next loop
                i--;
            }
            // Else asteroids are equal size 
            else {
                // Remove both asteroids
                asteroids.splice(i-1, 2);
                // Decrement index to point to next asteroid in next loop
                i--;
            }
        }
    }

    return asteroids;
};

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision1 = function(asteroids) {
    let i = 1; // Initialize index to second asteroid
    while (i < asteroids.length) {
        // If index is zero (after being decremented) OR current asteroid is going right, continue
        if (i === 0 || Math.sign(asteroids[i] > 0)) {
            // Increment index
            i++;
        } else { // Else current asteroid is going left
            // If previous asteroid is also going left, continue
            if (Math.sign(asteroids[i-1]) < 0) {
                // Increment index
                i++;
            } else { // Else previous asteroid is going right (collision)
                // If previous asteroid is larger
                if (Math.abs(asteroids[i-1]) > Math.abs(asteroids[i])) {
                    // Remove current asteroid
                    asteroids.splice(i, 1);
                    // Do NOT change index since it now points to next asteroid in next loop
                }
                // Else if current asteroid is larger
                else if (Math.abs(asteroids[i]) > Math.abs(asteroids[i-1])) {
                    // Remove previous asteroid
                    asteroids.splice(i-1, 1);
                    // Decrement index to compare current asteroid again with new previous asteroid next loop
                    i--;
                }
                // Else asteroids are equal size 
                else {
                    // Remove both asteroids
                    asteroids.splice(i-1, 2);
                    // Decrement index to point to next asteroid in next loop
                    i--;
                }
            }
        }
    }

    return asteroids;
};

var areArraysEqual = function (arr1, arr2) {
    // Compare lengths
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Compare each value, knowing their equal lengths
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If reach here, arrays are equal
    return true;
};

var asteroidCollisionUnitTestSingle = function(input, expectedOutput) {
    const originalInput = [...input];;
    console.assert(
        areArraysEqual(asteroidCollision(input), expectedOutput), 
        `Test Failed!\nInput: ${originalInput}\nExpected Output: ${expectedOutput}\nActual Output: ${input}`
    );
};

var asteroidCollisionUnitTestAll = function() {
    asteroidCollisionUnitTestSingle([5,10,-5], [5,10]);
    asteroidCollisionUnitTestSingle([8,-8], []);
    asteroidCollisionUnitTestSingle([10,2,-5], [10]);
    asteroidCollisionUnitTestSingle([-2,-1,1,2], [-2,-1,1,2]);
    asteroidCollisionUnitTestSingle([-2,2,-1,-2], [-2]);
    asteroidCollisionUnitTestSingle([2,1,-1,2], [2,2]);
    asteroidCollisionUnitTestSingle([1,-2,-2,-2], [-2,-2,-2]);
};

asteroidCollisionUnitTestAll();

/**
Pseudo-code:

- Initialize curr to second index
- While curr is less than array length
    - If curr is 0 || curr sign is positive (going right)
        - Increment curr
    - Else curr sign is negative (going left)
        - If prev is also negative (going left also)
            - Increment curr
        - Else prev is going right (collision)
            - If prev is larger
                - Remove curr
                - Do NOT increment
            - Else if curr is larger
                - Remove prev
                - Decrement curr
            - Else both equal size
                - Remove both
                - Decrement curr

[1,-2,-2,-2] -> [-2,-2,-2]

i=1 (-2)
going left and prev index is going right
curr is larger, remove prev
1,-2,-2
decrement?

------------------------------------------
-2,2,-1,-2

i=1 (2)
going right, 
skip and increment

i=2 (-1)
going left and prev index is going right
prev is larger, remove curr
-2,2,-2
do not increment

i=2 (-2)
going left and prev index is going right
equal size, remove both
-2
decrement

i=1
end since past length of array

------------------------------------------

-2,-1,1,2

i=1 (-1)
going left but prev index also going left
skip and increment

i=2 (1)
going right
skip and increment

i=3 (2)
going right
skip and increment

i=4
end since past length of array

------------------------------------------

10,2,-5 -> 10

i=1 (2)
going right
increment

i=2 (-5)
going left and prev going right
curr is larger, remove prev
10,-5
decrement

i=1 (-5)
going left andprev going right
prev is larger, remove curr
10
do not increment

i=1
end since past length of array

------------------------------------------

8,-8 -> []

i=1 (-8)
going left and prev going right
equal size, remove both
[]
decrement

i=0
end since past length of array

------------------------------------------

2,1,-1,2 -> 2,2

i=1 (1)
going right
increment

i=2 (-1)
going left and prev going right
equal size, remove both
2,2
decrement

i=1 (2)
going right
increment

i=2
end since past length of array

------------------------------------------

5,10,-5 -> 5,10

i=1 (10)
going right
increment

i=2 (-5)
going left and prev going right
prev larger, remove curr
5,10

i=2
end since past length of array

------------------------------------------
 */
