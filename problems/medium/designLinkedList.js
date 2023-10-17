// ----------------------------------------------------------------------------
// Head Reference, Tail Reference, Length
// ----------------------------------------------------------------------------

/**
 * Runtime: 96ms (95.66%)
 * Memory: 50.13MB (84.62%)
 */
var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // Return -1 if index out of bounds
    if (index >= this.length) { return -1; }

    // Find index-th node
    let node = this.head;
    while (index > 0) {
        node = node.next;
        index--;
    }

    return node.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    // Assign new head and pass previous head into new node's next property
    this.head = new MyLinkedListNode(val, this.head);

    // If linked list was empty, length is zero, assign tail to new head node
    if (!this.length) {
        this.tail = this.head;
    }

    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let nodeToAdd = new MyLinkedListNode(val);

    // If linked list is empty, length is zero, assign new node to head AND tail 
    if (!this.length) {
        this.tail = nodeToAdd;
        this.head = this.tail;
    }
    // Else linked list is NOT empty, assign new node to tail ONLY
    else {
        this.tail.next = nodeToAdd;
        this.tail = nodeToAdd;
    }

    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // Return if index is out of bounds (can be added at this.length index)
    if (index > this.length) { return; }

    let nodeToAdd = new MyLinkedListNode(val);
    
    // If index is zero, assign new head
    if (index === 0) {
        nodeToAdd.next = this.head;
        this.head = nodeToAdd;

        // If linked list is empty, assign head to tail
        if (!this.length) {
            this.tail = this.head;
        }
    } 
    // Else if index is last node, assign new tail
    else if (index === this.length) {
        // If linked list is empty, assign new tail AND head
        if (!this.length) {
            this.head = this.tail = nodeToAdd;
        }
        // Else linked list is NOT empty, assign new tail
        else {
            this.tail.next = nodeToAdd;
            this.tail = nodeToAdd;
        }
    } 
    // Else index is in middle of linked list
    else {
        // Find node before index
        let prevNode = this.head;
        while (index > 1) {
            prevNode = prevNode.next;
            index--;
        }

        nodeToAdd.next = prevNode.next;
        prevNode.next = nodeToAdd;
    }

    this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // Return if index is out of bounds
    if (index >= this.length) { return; }

    // If index is zero, assign new head
    if (index === 0) {
        this.head = this.head.next;

        // If linked list is length 1, assign tail to head (null)
        if (this.length === 1) {
            this.tail = this.head;
        }
    }
    // Else index is in middle or end of linked list
    else {
        let prevNode = this.head;
        while (index > 1) {
            prevNode = prevNode.next;
            index--;
        }
        
        prevNode.next = prevNode.next.next;

        // If node removed was tail, prevNode.next is null, assign new tail
        if (prevNode.next === null) {
            this.tail = prevNode;
        }
    }

    this.length--;
};

MyLinkedList.prototype.toString = function() {
    let str = '';
    let node = this.head;
    while (node) {
        str += `${node.val}->`;
        node = node.next;
    }
    return str;
};

MyLinkedList.prototype.toArray = function() {
    let arr = [];
    let node = this.head;
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
};

var MyLinkedListNode = function(val, next = null) {
    this.val = val;
    this.next = next;
};


/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// ----------------------------------------------------------------------------
// Head Reference Only
// ----------------------------------------------------------------------------

/**
 * Runtime: 100ms (89.66%)
 * Memory: 51.9MB (7.10%)
 */
var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (!this.head) { return -1; }
    
    let node = this.head;
    // Move node up index times as long as there's a next node
    while (index > 0 && node.next) {
        node = node.next;
        index--;
    }

    // If index still greater than 0, index is greater than linked list length
    if (index > 0) {
        return -1;
    }

    return node.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.head = new MyLinkedListNode(val, this.head);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let nodeToAdd = new MyLinkedListNode(val);

    if (!this.head) {
        this.head = nodeToAdd;
        return;
    }

    let node = this.head;
    while (node.next) {
        node = node.next;
    }

    node.next = nodeToAdd;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let nodeToAdd = new MyLinkedListNode(val);

    // If empty linked list, set to head only if index is 0, else return
    if (!this.head) {
        if (index === 0) {
            this.head = nodeToAdd;
        } else {
            return;
        }
    }

    // If index is zero, assign new head
    if (index === 0) {
        nodeToAdd.next = this.head;
        this.head = nodeToAdd;
        return;
    }

    // Find node before index
    let prevNode = this.head;
    while (index > 1 && prevNode.next) {
        prevNode = prevNode.next;
        index--;
    }

    // If index is greater than 1, index is greater than length of linked list
    if (index > 1) {
        return;
    }

    nodeToAdd.next = prevNode.next;
    prevNode.next = nodeToAdd;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (!this.head) { return; }

    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let prevNode = this.head;
    while (index > 1 && prevNode.next) {
        prevNode = prevNode.next;
        index--;
    }

    if (index > 1 || !prevNode.next) { return; }

    prevNode.next = prevNode.next.next;
};

var MyLinkedListNode = function(val, next = null) {
    this.val = val;
    this.next = next;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// ----------------------------------------------------------------------------
// Testing
// ----------------------------------------------------------------------------

function MyLinkedListTestOperationsSingle(operation, input, expectedOutput) {
    if (operation === 'MyLinkedList') {
        return new MyLinkedList();
    } else {
        return 
    }
}

function MyLinkedListTestOperations(operations, inputs, expectedOutputs) {
    let llist = new MyLinkedList();
    let actualOutput, msg;

    for (let i = 1; i < operations.length; i++) {
        // if (i === 84 || inputs[i][0] === 70 || i > 70) { debugger; }

        // if (operations[i]==='get' && inputs[i][0] === 51) {
        //     debugger;
        // }
        
        actualOutput = llist[operations[i]](...inputs[i]);
        
        msg = `Operation: ${operations[i]}\nInputs: ${inputs[i]}\nExpected: ${expectedOutputs[i]}\nActual: ${actualOutput}`;
        if (expectedOutputs[i] === null) {
            console.assert(actualOutput === undefined, msg);
        } else {
            console.assert(actualOutput === expectedOutputs[i], msg);
        }
    }
}

function MyLinkedListTestAll() {
    let operations, inputs, expectedOutputs;

    operations = ["MyLinkedList","addAtHead","addAtTail","addAtTail","get","get","addAtTail","addAtIndex","addAtHead","addAtHead","addAtTail","addAtTail","addAtTail","addAtTail","get","addAtHead","addAtHead","addAtIndex","addAtIndex","addAtHead","addAtTail","deleteAtIndex","addAtHead","addAtHead","addAtIndex","addAtTail","get","addAtIndex","addAtTail","addAtHead","addAtHead","addAtIndex","addAtTail","addAtHead","addAtHead","get","deleteAtIndex","addAtTail","addAtTail","addAtHead","addAtTail","get","deleteAtIndex","addAtTail","addAtHead","addAtTail","deleteAtIndex","addAtTail","deleteAtIndex","addAtIndex","deleteAtIndex","addAtTail","addAtHead","addAtIndex","addAtHead","addAtHead","get","addAtHead","get","addAtHead","deleteAtIndex","get","addAtHead","addAtTail","get","addAtHead","get","addAtTail","get","addAtTail","addAtHead","addAtIndex","addAtIndex","addAtHead","addAtHead","deleteAtIndex","get","addAtHead","addAtIndex","addAtTail","get","addAtIndex","get","addAtIndex","get","addAtIndex","addAtIndex","addAtHead","addAtHead","addAtTail","addAtIndex","get","addAtHead","addAtTail","addAtTail","addAtHead","get","addAtTail","addAtHead","addAtTail","get","addAtIndex"];
    inputs = [[],[84],[2],[39],[3],[1],[42],[1,80],[14],[1],[53],[98],[19],[12],[2],[16],[33],[4,17],[6,8],[37],[43],[11],[80],[31],[13,23],[17],[4],[10,0],[21],[73],[22],[24,37],[14],[97],[8],[6],[17],[50],[28],[76],[79],[18],[30],[5],[9],[83],[3],[40],[26],[20,90],[30],[40],[56],[15,23],[51],[21],[26],[83],[30],[12],[8],[4],[20],[45],[10],[56],[18],[33],[2],[70],[57],[31,24],[16,92],[40],[23],[26],[1],[92],[3,78],[42],[18],[39,9],[13],[33,17],[51],[18,95],[18,33],[80],[21],[7],[17,46],[33],[60],[26],[4],[9],[45],[38],[95],[78],[54],[42,86]];
    expectedOutputs = [null,null,null,null,-1,2,null,null,null,null,null,null,null,null,84,null,null,null,null,null,null,null,null,null,null,null,16,null,null,null,null,null,null,null,null,37,null,null,null,null,null,23,null,null,null,null,null,null,null,null,null,null,null,null,null,null,19,null,17,null,null,56,null,null,31,null,17,null,12,null,null,null,null,null,null,null,40,null,null,null,37,null,76,null,42,null,null,null,null,null,null,80,null,null,null,null,43,null,null,null,40,null];

    MyLinkedListTestOperations(operations, inputs, expectedOutputs);
}

MyLinkedListTestAll();