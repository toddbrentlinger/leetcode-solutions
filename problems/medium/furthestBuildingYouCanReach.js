/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 * Runtime: 82ms (98.05%)
 * Memory: 64.79MB (71.01%)
 * Time Complexity: O(n) Each building is traversed once
 * Space Complexity: O(n) Worst-case if ladder for each deltaHeight stored in heap
 */
var furthestBuilding = function(heights, bricks, ladders) {
    // Min heap to store nLadders highest deltaHeight in adjacent buildings
    let maxHeightsMinHeap = new MinHeap();
    let deltaHeight, i;

    // Keep track of nLadders highest deltaHeight and bricks used for remaining heights
    for (i = 0; i < heights.length - 1; i++) {
        // Get change in height from ith building to (i+1)th building
        deltaHeight = heights[i + 1] - heights[i];
        
        // If next building is lower or equal height, nothing used, skip
        if (deltaHeight < 0) { continue; }

        // If reach here, next building is higher and requires bricks or ladders

        // If heap size is less than amount of ladders, deltaHeight could be a max for ladder.
        if (maxHeightsMinHeap.size < ladders) {
            // Insert deltaHeight at ith building to heap for now
            maxHeightsMinHeap.insert(deltaHeight);
        }
        // Else heap size is equal to amount of ladders
        else {
            // If ith deltaHeight should be in heap
            if (deltaHeight > maxHeightsMinHeap.peek()) {
                // Subtract minHeap value from total bricks
                bricks -= maxHeightsMinHeap.peek();

                // Remove minHeap value, no longer optimal deltaHeight for ladder
                maxHeightsMinHeap.delete();

                // Add new deltaHeight to potential use for ladder
                maxHeightsMinHeap.insert(deltaHeight);
            }
            // Else ith deltaHeight should NOT be in heap, use bricks
            else {
                // Subtract deltaHeight value from total bricks
                bricks -= deltaHeight;
            }

            // If not enough bricks to span height AND nLadders max deltaHeights already found,
            // break loop since cannot progress to next building
            if (bricks < 0 && maxHeightsMinHeap.size === ladders) {
                break;
            }
        }
    }

    // Index now points to furthest building that can be reached
    return i;
};

var MinHeap = function() {
    this.heap = [];
    this.size = 0;
};

MinHeap.prototype.peek = function() {
    if (this.size) {
        return this.heap[0];
    }
};

MinHeap.prototype.parent = function(i) {
    return Math.floor((i - 1) / 2);
};

MinHeap.prototype.insert = function(val) {
    this.heap[this.size] = val;

    let i = this.size;

    let parent = this.parent(i);
    while (i > 0 && this.heap[parent] > this.heap[i]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
        parent = this.parent(i);
    }

    this.size++;
};

MinHeap.prototype.delete = function() {
    [this.heap[0], this.heap[this.size - 1]] = [this.heap[this.size - 1], this.heap[0]];
    this.size--;

    let index = 0;
    let leftChild, rightChild;
    while (true) {
        leftChild = 2 * index + 1;
        rightChild = 2 * index + 2;
        smallest = index;
        if (leftChild < this.size
            && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }
        if (rightChild < this.size
            && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }
        if (smallest != index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            index = smallest;
        }
        else {
            break;
        }
    }
};

/**
- Best to use all ladders on largest height difference, bricks for smaller 
  height differences.
- Need to track nLadders largest height differences and use bricks for rest 
  until no more ladders AND not enough bricks to climb last building.
- Use max heap to store largest height differences? ISSUE: May need to remove
  smallest value in heap to add a larger value. Not good for heap.
  SOLUTION: Use min heap to store largest values. Can just check if new value
  is larger than top value, if it is, remove top value and add new value.
- Update all heights to represent difference in heights to next building
deltaHeights[i] = heights[i + 1] - heights[i]
 */