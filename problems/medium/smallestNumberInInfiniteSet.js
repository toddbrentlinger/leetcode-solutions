// ----------------------------------------------------------------------------
// Naive Approach
// ----------------------------------------------------------------------------

var SmallestInfiniteSetNaive = function() {
    this.set = new Array(1000).fill(true);
};

/**
 * @return {number}
 */
SmallestInfiniteSetNaive.prototype.popSmallest = function() {
    let index = this.set.findIndex((bool) => bool);
    this.set[index] = false;
    return index + 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSetNaive.prototype.addBack = function(num) {
    this.set[num - 1] = true;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

// ----------------------------------------------------------------------------

var SmallestInfiniteSet = function() {
    this.smallestInf = 1;
    this.customValArr = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    return (this.customValArr.length) 
        ? this.customValArr.shift() 
        : this.smallestInf++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    // If num is greater than or equal to smallestInf, num already in set
    if (num >= this.smallestInf) { return; }

    // Find index in customValArr of matching index 
    // OR index where it should be added if it doesn't already exist
    let index = this.searchCustomValueIndex(num);

    // If customValArr has num, value at index, return
    if (this.customValArr[index] === num) { return; }

    // If reach here, customValArr does NOT have num AND it should be added at index
    if (index === 0) {
        this.customValArr.unshift(num);
    } else if (index === this.customValArr.length) {
        this.customValArr.push(num);
    } else {
        this.customValArr = [...this.customValArr.slice(0, index), num, ...this.customValArr.slice(index)];
    }
};

SmallestInfiniteSet.prototype.searchCustomValueIndex = function(num) {
    let left = 0;
    let right = this.customValArr.length - 1;
    let mid;

    // Check if num is, or should inserted, at first OR last indices
    if (this.customValArr[left] === num || this.customValArr[left] > num) { return left; }
    if (this.customValArr[right] === num) { return right; }
    if (this.customValArr[right] < num) { return right + 1; }

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        // If mid index has value, return mid
        if (this.customValArr[mid] === num) {
            return mid;
        }

        if (this.customValArr[mid - 1] > num && this.customValArr[mid + 1] < num ) {
            return mid;
        }

        if (this.customValArr[mid] > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

/**
smallestInf = 1
customSet = []

addBack(2)
2 >= smallestInf(1)
no change

popSmallest
customSet is empty, return smallestInf(1)
smallestInf++
smallestInf = 2

popSmallest
customSet is empty, return smallestInf(2)
smallestInf++
smallestInf = 3

addBack(1)
1 < smallestInf(3), so check customSet
1 NOT in customSet
add 1 to sorted position in customSet
customSet = [1]

popSmallest
customSet is NOT empty
return customSet.shift()

*/

// ----------------------------------------------------------------------------

var SmallestInfiniteSet1 = function() {
    this.set = new Set();
    this.minHeap = new Array(1000);
    this.minHeap[0] = 1;
    this.set.add(1);
    this.heapSize = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet1.prototype.popSmallest = function() {
    debugger;
    const smallest = this.minHeap[0];
    this.minHeap[0] = this.minHeap[this.heapSize - 1];
    this.heapSize--;
    this.minHeapify(0);
    this.set.delete(smallest);
    this.addBack(smallest + 1);
    return smallest;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet1.prototype.addBack = function(num) {
    debugger;
    if (this.set.has(num)) { return; }

    let i = this.heapSize;
    this.minHeap[i] = num;
    let parent = this.parent(this.heapSize);
    while (i !== 0 && this.minHeap[parent] > this.minHeap[i]) {
        [this.minHeap[i], this.minHeap[parent]] = [this.minHeap[parent], this.minHeap[i]];
        i = parent;
        parent = this.parent(i);
    }
    this.heapSize++;
};

SmallestInfiniteSet1.prototype.minHeapify = function(i) {
    const left = this.leftChild(i);
    const right = this.rightChild(i);

    let smallest = i;
    if (left < this.heapSize && this.minHeap[left] < this.minHeap[i]) {
        smallest = left;
    }
    if (right < this.heapSize && this.minHeap[right] < this.minHeap[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [this.minHeap[i], this.minHeap[smallest]] = [this.minHeap[smallest], this.minHeap[i]];
        this.minHeapify(smallest);
    }
};

SmallestInfiniteSet1.prototype.leftChild = function(i) {
    return 2 * i + 1;
};

SmallestInfiniteSet1.prototype.rightChild = function(i) {
    return 2 * i + 2;
};

SmallestInfiniteSet1.prototype.parent = function(i) {
    return Math.floor((i - 1) / 2);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

// ----------------------------------------------------------------------------
// Testing
// ----------------------------------------------------------------------------

function createExpectedOutput(operationOrder, operationInput) {
    let outputArr = [];
    let outputSingle;
    for (let i = 1; i < operationOrder.length; i++) {
        outputSingle = inst[operationOrder[i]](
            ...operationInput[i]
        );
        outputArr.push([outputSingle]);
    }
    return outputArr;
}

function areArraysEqual(a, b) {

}

function unitTestSingle(input) {
    let [operationOrder, operationInput] = input;
    let expectedOutputArr = createExpectedOutput(operationOrder, operationInput);
    let actualOutputArr = [];
    let actualOutputSingle;
    for (let i = 1; i < operationOrder.length; i++) {
        actualOutputSingle = inst[operationOrder[i]](
            ...operationInput[i]
        );
        actualOutputArr.push([actualOutputSingle]);
    }
}

function unitTestAll() {
    const tests = [
        {
            operations: ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"],
            inputs: [[], [2], [], [], [], [1], [], [], []],
        },
        {
            operations: ["SmallestInfiniteSet","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack"],
            inputs: [[],[],[509],[],[940],[454],[],[778],[928],[88],[],[],[539],[520],[220],[209],[],[624],[837],[160],[],[876],[],[858],[643],[],[],[],[],[906],[],[552],[],[],[764],[721],[100],[],[],[7],[962],[],[],[263],[753],[836],[],[],[],[788],[59],[874],[],[109],[],[],[852],[284],[467],[],[203],[],[],[],[447],[],[],[],[693],[],[666],[],[],[],[],[912],[172],[],[],[400],[],[],[732],[490],[495],[],[],[],[932],[378],[664],[],[126],[596],[707],[255],[460],[],[],[],[472],[],[],[],[430],[314],[514],[371],[],[755],[],[],[511],[956],[885],[142],[658],[471],[93],[],[],[86],[],[672],[],[643],[601],[661],[],[],[451],[],[594],[],[287],[],[807],[],[176],[],[837],[],[520],[947],[237],[809],[],[459],[448],[216],[628],[51],[],[],[434],[801],[],[],[235],[],[],[],[129],[],[],[131],[599],[],[685],[],[162],[625],[],[],[],[],[803],[778],[],[],[54],[621],[],[672],[],[830],[626],[],[550],[],[910],[],[],[741],[],[354],[354],[53],[],[],[479],[703],[546],[722],[],[],[],[459],[],[],[],[],[919],[],[788],[615],[883],[542],[],[],[],[214],[419],[473],[],[],[54],[446],[],[],[],[659],[],[],[921],[180],[],[140],[725],[80],[892],[],[491],[442],[412],[],[177],[],[218],[],[],[],[],[],[756],[349],[821],[],[],[],[532],[],[],[],[],[],[],[757],[],[],[296],[],[],[334],[630],[556],[719],[107],[],[],[248],[378],[],[],[420],[711],[],[],[],[],[],[],[203],[753],[225],[],[],[],[303],[],[580],[451],[415],[813],[],[1],[145],[],[],[],[],[245],[272],[413],[778],[416],[],[642],[],[681],[718],[],[],[531],[],[],[671],[],[],[205],[],[392],[107],[],[],[871],[967],[],[868],[],[],[],[415],[170],[235],[155],[913],[],[859],[718],[],[995],[],[22],[677],[],[],[251],[126],[537],[],[421],[],[],[967],[],[],[],[257],[94],[],[594],[],[376],[200],[],[],[],[],[812],[],[],[769],[18],[],[576],[145],[],[],[544],[21],[],[181],[],[],[358],[],[],[],[],[323],[612],[],[],[767],[34],[],[],[723],[614],[61],[],[123],[],[],[147],[],[],[],[],[468],[],[879],[],[685],[],[826],[],[319],[560],[326],[],[],[],[],[663],[],[98],[31],[599],[],[96],[],[796],[913],[292],[353],[573],[],[729],[268],[866],[],[385],[],[344],[177],[],[641],[557],[967],[],[5],[327],[],[],[],[],[],[761],[841],[861],[567],[],[],[],[33],[980],[705],[611],[],[209],[854],[],[],[910],[776],[789],[870],[703],[249],[],[],[],[295],[],[311],[],[360],[469],[757],[343],[],[],[751],[29],[538],[94],[49],[],[361],[],[],[],[638],[],[456],[398],[986],[579],[],[933],[],[584],[405],[],[463],[],[297],[],[557],[980]],
        },
        {
            operations: [],
            inputs: [],
        },
    ];

    tests.forEach((testObj) => {
        unitTestSingle(testObj.operations, testObj.inputs);
    });
}

export { SmallestInfiniteSetNaive, SmallestInfiniteSet };