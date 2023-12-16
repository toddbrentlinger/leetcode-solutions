/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 * Runtime: 160ms (100.00%)
 * Memory: 61.92MB (100.00%)
 * Time Complexity: O(nlogn) where n is number of plants
 * Space Complexity: O(n)
 */
var earliestFullBloom = function(plantTime, growTime) {
    // Create array of plant indices where value is index in plantTime and growthTime
    let indices = new Array(plantTime.length);
    let i;
    for (i = 0; i < indices.length; i++) {
        indices[i] = i;
    }

    // Sort indices to correspond with highest to lowest grow times of plants
    // First value is index of plant with largest grow time
    // Last value is index of plant with smallest grow time
    // If two grow times are equal, put total plant+grow time first
    indices.sort((a,b) => {
        if (growTime[a] === growTime[b]) {
            return (plantTime[b] + growTime[b]) - (plantTime[a] + growTime[a]);
        } else {
            return growTime[b] - growTime[a];
        }
    });
    
    let days = 0; // Days for full bloom
    let nextPlantDay = 0; // Day to start planting next plant

    for (i = 0; i < indices.length; i++) {
        // Add to days using max of previous plant plant+grow end day
        // OR current plant plant+grow end day
        days = Math.max(
            days, 
            nextPlantDay + plantTime[indices[i]] + growTime[indices[i]]
        );

        // Update nextPlantDay for day to start planting next plant
        nextPlantDay += plantTime[indices[i]];
    }

    return days;
};

/**

- All plant times need by be summed together at minimum than wait for lowest grow time after
    - ISSUE: What if have 2 short plant times but 2 long grow times
- Sort from highest grow time to lowest grow time
- Want lowest grow time at end since have to wait until final plant grows without planting anything else

plant = [1,1]
grow = [6,4]

p g g g g g g
  p g g g g
0 1 2 3 4 5 6

OR

p g g g g
  p g g g g g g
0 1 2 3 4 5 6 7

Shortest grow time should still be last but total time depends on plant with longer grow time

-------------------------------------------------------------------------------

Equal total plant+grow times?

plant = [1,3]
grow = [6,4]

p g g g g g g
  p p p g g g g
0 1 2 3 4 5 6 7

p p p g g g g
      p g g g g g g
LONGER

Order should be highest -> lowest grow times 

-------------------------------------------------------------------------------

Shortest grow time has larger total plant+grow time?

+1 larger total time for shorter growth plant

plant = [1,4]
grow = [6,4]

p g g g g g g
  p p p p g g g g

p p p p g g g g
        p g g g g g g

Shorter growth time should still be last

-------------------------------------------------------------------------------

Example 2:

p g g g
  p p g g
      p p p g g g
            p p g g
0 1 2 3 4 5 6 7 8 9

Highest grow time to lowest grow time
p p p g g g
      p g g g
        p p g g
            p p g g
0 1 2 3 4 5 6 7 8 9
 */