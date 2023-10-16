/**
 * @param {string[]} operations
 * @return {number}
 * Runtime: 45ms (94.83%)
 * Memory: 42.4MB (66.05%)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var calPoints = function(operations) {
    let record = [];
    
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case '+': // Add sum of two previous scores
                record.push(record[record.length - 2] + record[record.length - 1]);
                break;
            case 'D': // Double previous score
                record.push(2 * record[record.length - 1]);
                break;
            case 'C': // Remove previous score
                record.pop();
                break;
            default: // Add score to record
                record.push(+operations[i]);
        }
    }

    // Return sum of scores in record
    return record.reduce((accum, curr) => accum + curr, 0);
};