// --------------------------------- Min Heap ---------------------------------

/**
 * @param {number} n
 * Runtime: 491ms (79.07%)
 * Memory: 107.32MB (95.35%)
 */
var SeatManager = function(n) {
    // Max Heap initialized with values 1-n
    this.seatsAvailMinHeap = new Array(n);
    for (let i = 0; i < n; i++) {
        this.seatsAvailMinHeap[i] = i + 1;
    }
    // Current size of max heap (index of last element: last level, right most non-empty node in heap)
    this.heapSize = n;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    // Reference to min value (top node of heap)
    let minSeat = this.seatsAvailMinHeap[0];
    
    // Set bottom node of heap (last level, right most node) to top 
    this.seatsAvailMinHeap[0] = this.seatsAvailMinHeap[this.heapSize - 1];

    // Set previous bottom node to null after moved to top
    this.seatsAvailMinHeap[this.heapSize - 1] = null;

    // Decrement heap size after min value has been removed
    this.heapSize--;

    // Heapify down to adjust updated heap
    this.heapify(0);

    // Return min value (min seat number)
    return minSeat;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    // Add seatNumber to end of heap
    this.seatsAvailMinHeap[this.heapSize] = seatNumber;

    // Heapify up to adjusted updated heap
    let i = this.heapSize; // Initialized to new node index in heap (now last node in heap)
    let parent = this.heapParent(i); // Parent of new node index in heap
    // Switch node with parent repeatedly as long as parent has greater value OR reach top of heap (seatNumber is min value)
    while (i !== 0 && this.seatsAvailMinHeap[parent] > this.seatsAvailMinHeap[i]) {
        // Switch node with parent
        [this.seatsAvailMinHeap[i], this.seatsAvailMinHeap[parent]] = [this.seatsAvailMinHeap[parent], this.seatsAvailMinHeap[i]];
        // Set i to parent index for next loop since node is now in parent index of heap
        i = parent;
        // Set new parent index for next loop
        parent = this.heapParent(i);
    }

    // Increment heap size after seatNumber has been added
    this.heapSize++;
};

/** 
 * @param {number} i Index of node in heap
 * @return {void}
 */
SeatManager.prototype.heapify = function(i) {
    let iLeft = 2 * i + 1; // Left child index in min heap
    let iRight = 2 * i + 2; // Right child index in min heap
    let smallest = i; // Index with smallest value, initialized to i-th node

    // Check if left child is smaller than parent
    if (iLeft < this.heapSize && this.seatsAvailMinHeap[iLeft] < this.seatsAvailMinHeap[i]) {
        smallest = iLeft;
    }
    // Check if right child is smaller than parent AND left sibling
    if (iRight < this.heapSize && this.seatsAvailMinHeap[iRight] < this.seatsAvailMinHeap[smallest]) {
        smallest = iRight;
    }

    // If one child is smaller than parent, switch values and heapify subtree in case value needs to be updated further down heap
    if (smallest !== i) {
        [this.seatsAvailMinHeap[i], this.seatsAvailMinHeap[smallest]] = [this.seatsAvailMinHeap[smallest], this.seatsAvailMinHeap[i]]
        this.heapify(smallest);
    }
};

/** 
 * @param {number} i Index of node in heap
 * @return {number} Index of parent of node in heap
 */
SeatManager.prototype.heapParent = function(i) {
    return Math.floor((i - 1) / 2);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

/**
- Min heap for seats
- Initialize heap from array:
          1
       2     3
     4   5 6   7
- Reserve():
    - Remove root node, min value, and adjust heap
    - Move up left child to be new root and ajust left subtree
 */

// ---------------------------- Array & FindIndex -----------------------------

/**
 * @param {number} n
 * Runtime: 5151ms (6.98%)
 * Memory: 114.4MB (51.16%)
 */
var SeatManager = function(n) {
    this.seats = new Array(n).fill(0);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    let smallestUnreserved = this.seats.findIndex((seat) => seat === 0);
    this.seats[smallestUnreserved] = 1;
    return smallestUnreserved + 1;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.seats[seatNumber - 1] = 0;
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */