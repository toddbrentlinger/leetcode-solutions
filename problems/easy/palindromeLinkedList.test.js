import { isPalindrome } from './palindromeLinkedList.js';
import { createLinkedListFromArray } from '../../data-structures/linkedList.js';

test('One node linked list', () => {
    const head = createLinkedListFromArray([1]);
    expect(isPalindrome(head)).toBeTruthy();
});

describe('Two node linked list', () => {
    test('NO Palindrome', () => {
        const head = createLinkedListFromArray([1,2]);
        expect(isPalindrome(head)).toBeFalsy();
    });
    
    test('Palindrome', () => {
        const head = createLinkedListFromArray([1,1]);
        expect(isPalindrome(head)).toBeTruthy();
    }); 
});

describe('Three node linked list', () => {
    test('NO Palindrome', () => {
        const head = createLinkedListFromArray([1,2,2]);
        expect(isPalindrome(head)).toBeFalsy();
    });
    
    test('Palindrome', () => {
        const head = createLinkedListFromArray([1,2,1]);
        expect(isPalindrome(head)).toBeTruthy();
    }); 
});

describe('Four node linked list', () => {
    test('NO Palindrome', () => {
        const head = createLinkedListFromArray([1,2,1,2]);
        expect(isPalindrome(head)).toBeFalsy();
    });
    
    test('Palindrome', () => {
        const head = createLinkedListFromArray([1,2,2,1]);
        expect(isPalindrome(head)).toBeTruthy();
    }); 
});
