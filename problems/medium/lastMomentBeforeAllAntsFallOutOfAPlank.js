/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 * Runtime: 52ms (100.00%)
 * Memory: 44.26MB (100.00%)
 * Time Complexity: O(n) to find max/min values
 * Space Complexity: O(1)
 */
var getLastMoment = function(n, left, right) {
    let rightMostLeftAnt = Math.max(...left);
    let leftMostRightAnt = Math.min(...right);

    return Math.max(
      rightMostLeftAnt, // Distance right most left-ant travels
      n - leftMostRightAnt // Distance left most right-ant travels 
    );
};

/**
n=4
l=4,3
r=0,1
no ants on same spot, move each by one

l=3,2
r=1,2
two ants on same spot
- even though the two ants switch direction, end result is exactly the same
  one ant going left from 2 spot and another ant going right from 2 spot

- answer will always be max of distance between right most left-ant has to travel to the left end
  OR left most right-ant has to travel to the right end
 */