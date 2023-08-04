"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // If both nodes are null, return true
    if (p === null && q === null) { return true; }

    // If only one node is null, return false since they cannot be equal
    if (p === null || q === null) { return false; }

    // If reach this point, both nodes are NOT null

    // If node values are NOT equal, return false
    if (p.val !== q.val) { return false; }

    // If left sub-trees are NOT equal, return false
    if (!isSameTree(p.left, q.left)) { return false; }

    // If right sub-trees are NOT equal, return false
    if (!isSameTree(p.right, q.right)) { return false; }

    // If reach this point, trees are equal
    return true;
};

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined) ? 0 : val;
        this.left = (left === undefined) ? null : left;
        this.right = (right === undefined) ? null : right;
    }
}

var isSameTreeUnitTestSingle = function(input, expectedOutput) {
    const actualOutput = isSameTree(...input);
    console.assert(actualOutput === expectedOutput);
};

var isSameTreeUnitTestAll = function() {
    let p, q;
    
    // Test 1
    p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    q = p;
    isSameTreeUnitTestSingle([p, q], true);

    // Test 2
    p = new TreeNode(1, new TreeNode(2));
    q = new TreeNode(1, undefined, new TreeNode(2));
    isSameTreeUnitTestSingle([p, q], false);

    // Test 3
    p = new TreeNode(1, new TreeNode(1), new TreeNode(2));
    q = new TreeNode(1, new TreeNode(2), new TreeNode(1));
    isSameTreeUnitTestSingle([p, q], false);
};

isSameTreeUnitTestAll();
