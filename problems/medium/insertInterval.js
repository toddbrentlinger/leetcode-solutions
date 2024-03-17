/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * Runtime: 64ms (93.24%)
 * Memory: 53.99MB (73.15%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var insert = function(intervals, newInterval) {
    let start = newInterval[0]; // will remain newInterval start or be assigned to some existing interval start
    let end = newInterval[1]; // will remain newInterval end or be assigned to some existing interval end
    let deleteCount = 0; // number of intervals to replace with new interval [start, end]
    let i, j;

    for (i = 0; i < intervals.length; i++) {
        // If newInterval start BEFORE ith interval start
        if (newInterval[0] < intervals[i][0]) {
            // newInterval start should be placed at ith index
            // interval to add will begin with newInterval start BUT may have different end
            
            // If newInterval also ends BEFORE ith interval start, no interval merging necessary.
            // Just add newInterval to ith index of intervals.
            if (newInterval[1] < intervals[i][0]) {
                break;
            }

            // If reach here, newInterval ends AFTER ith interval starts, interval merging necessary

            deleteCount = 1;

            // If newInterval ends BEFORE ith interval ends, just change start of ith interval
            if (newInterval[1] < intervals[i][1]) {
                end = intervals[i][1];
                break;
            }

            // If newInterval ends BEFORE (i+1)th interval starts, completely replace ith interval with newInterval
            if (i < intervals.length - 1 && newInterval[1] < intervals[i+1][0]) {
                break;
            }

            // If reach here, need to merge with more than ith interval

            for (j = i + 1; j < intervals.length; j++) {
                deleteCount++;

                // If jth interval ends AFTER newInterval ends, merge intervals between i-to-j
                if (intervals[j][1] > end) {
                    end = intervals[j][1];
                    break;
                }
            }

            break;
        }
        // Else if newInterval starts between ith interval start AND up to ith interval end
        else if (newInterval[0] >= intervals[i][0] && newInterval[0] <= intervals[i][1]) {
            // If newInterval ends BEFORE OR EQUAL ith interval ends, no interval merging necessary
            if (end <= intervals[i][1]) {
                return intervals;
            }

            // If reach here, newInterval ends AFTER ith interval ends, interval merging necessary

            deleteCount = 1;

            // If newInterval ends BEFORE (i+1)th interval starts, just change end time of ith interval
            if (i < intervals.length - 1 && newInterval[1] < intervals[i+1][0]) {
                start = intervals[i][0];
                break;
            }

            // If reach here, need to merge with more than ith interval
            
            start = intervals[i][0];
            
            for (j = i + 1; j < intervals.length; j++) {
                // If jth interval starts AFTER newInterval ends, merge until previous interval
                if (intervals[j][0] > end) {
                    break;
                }

                deleteCount++;

                // If jth interval ends AFTER OR EQUAL to newInterval ends, merge intervals between i-to-j
                if (intervals[j][1] >= end) {
                    end = intervals[j][1];
                    break;
                }
            }

            break;
        }
        // Else newInterval starts after ith interval end, continue to next loop
    }

    // NOTE: If i reached end of intervals array, newInterval is added to end of intervals

    // Add [start, end] into ith position of intervals, deleting any intervals as necessary
    intervals.splice(i, deleteCount, [start, end]);
    
    return intervals;
};

/**
possible options:
- newInterval can be included entirely in existing interval, return intervals unchanged
- newInterval can be place entirely between two intervals without modifying existing intervals on either side
- newInterval can be merged with end of existing interval
- newInterval can be merged with start of existing interval

(1) newInterval can be included entirely in existing interval, return intervals unchanged
intervals = [ [1,2], [3,6], [7,8] ]
newInterval = [4,5]
output = intervals unchanged

(2) newInterval can be place entirely between two intervals without modifying existing intervals on either side
intervals = [ [1,2], [3,4], [7,8] ]
newInterval = [5,6]
output = [ [1,2], [3,4], [5,6], [7,8] ]

(3) newInterval can be merged with end of n existing intervals
intervals = [ [1,2], [3,4], [7,8] ]
newInterval = [4,5]
output = [ [1,2], [3,5], [7,8] ]

(4) newInterval can be merged with start of n existing intervals
intervals = [ [1,2], [4,5], [7,8] ]
newInterval = [3,4]
output = [ [1,2], [3,5], [7,8] ]
 */