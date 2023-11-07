/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 * Runtime: 129ms (67.57%)
 * Memory: 53.85MB (91.89%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
var eliminateMaximum = function(dist, speed) {
    let i;
    for (i = 0; i < dist.length; i++) {
        dist[i] = Math.ceil(dist[i] / speed[i]);
    }
    dist.sort((a,b) => a - b);
    
    for (i = 0; i < dist.length; i++) {
        if (dist[i] <= i) {
            return i;
        }
    }

    return dist.length;
};

/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 * Runtime: 139ms (48.65%)
 * Memory: 55.2MB (72.97%)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */
var eliminateMaximum = function(dist, speed) {
    // Array of turns each monster needs to reach Player, sorted in ascending order
    let turns = dist.map((distVal, i) => {
        return Math.ceil(distVal / speed[i]);
    }).sort((a,b) => a - b);
    
    // If any monster's turns is less than or equal to it's index,
    // Player will not be able to eliminate it on that turn
    let i;
    for (i = 0; i < turns.length; i++) {
        if (turns[i] <= i) {
            return i;
        }
    }

    // If reach here, all monsters have been eliminated
    return i;
};

/**
dist = [3,2,4], speed = [5,3,2]

Must predict next round of dist by dist[i] - speed[i]
dist2 = [-2,-1,2]
i=0 will reach first since smallest value (hit)
i=1 is also <= 0 so this monster will make us lose

Create new array, turns[], to hold number of turns before reaching player, then sort in ascending order.
Find first i where:
1) turns[i] <= i meaning monster will attack before attack turn can be made

dist=[1,1,2,3]
speed=[1,1,1,1]

turns=[1,1,2,3]
i=0 val=1 > i hit
i=1 val=1 <= i miss return i

 */