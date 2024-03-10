import { hasCycle } from "./linkedListCycle";
import { createLinkedListFromArray } from '../../data-structures/linkedList.js';

test('Empty linked list', () => {
    // []
    expect(hasCycle(null)).toBeFalsy();
});

test('1 Node (No Cycle)', () => {
    // [1] - No Cycle
    const head = createLinkedListFromArray([1]);
    
    expect(hasCycle(head)).toBeFalsy();
});

test('1 Node (Cycle)', () => {
    // [1] - Cycle 1->1
    const head = createLinkedListFromArray([1]);
    head.next = head;
    
    expect(hasCycle(head)).toBeTruthy();
});

test('2 Node (No Cycle)', () => {
    // [1,2] - No Cycle
    const head = createLinkedListFromArray([1, 2]);

    expect(hasCycle(head)).toBeFalsy();
});

test('2 Node (Cycle)', () => {
    // [1,2] - Cycle 2->1
    const head = createLinkedListFromArray([1, 2]);
    head.next.next = head;
    
    expect(hasCycle(head)).toBeTruthy();
});

test('5 Node (No Cycle)', () => {
    // [1, 2, 3, 4, 5] - No cycle
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);

    expect(hasCycle(head)).toBeFalsy();
});

test('5 Node (Cycle)', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);

    // Make cycle by making node with val=5 point next to node with val=3
    // [1, 2, 3, 4, 5] - Cycle 5->3
    let lastNode = head;
    while (lastNode.next !== null) {
        lastNode = lastNode.next;
    }
    lastNode.next = head.next.next;
    
    expect(hasCycle(head)).toBeTruthy();
});