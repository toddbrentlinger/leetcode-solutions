/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * Runtime: 247ms (60.53%)
 * Memory: 90.58MB (100.00%)
 * Time Complexity: O(n) where n is number of nodes in tree
 * Space Complexity: O(h) where h is height of tree if consider call stack from recursion
 */
var pseudoPalindromicPaths  = function(root) {
    return getPseudoPalindromicPaths(root);
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 
 */
var getPseudoPalindromicPaths = function(root, sequenceBinary = 0, nPalindromes = 0) {
    if (root === null) { return 0; }
    
    // Add root node value to sequence binary by toggling value of root.val-th 
    // binary digit from the right end (ex. 1 -> 001, 2 -> 010, ...)
    let valBinary = 1 << (root.val - 1);
    // If value binary is 1 in overall sequence binary, toggle to 0
    if (valBinary & sequenceBinary) {
        sequenceBinary ^= valBinary;
    }
    // Else value binary is 0 in overall sequence binary, toggle to 1
    else {
        sequenceBinary |= valBinary;
    }

    // If root is leaf node, check if sequenceBinary is palindrome (all zeros 
    // OR single one).
    if (!root.left && !root.right) {
        // Only need to further check sequenceBinary > 0
        if (sequenceBinary > 0) {
            // If there is a single one in sequenceBinary, the number must be 
            // power of two (2**0, 2**1, 2**2, 2**3, etc.), otherwise the 
            // sequence cannot be a palindrome
            if (!((sequenceBinary > 0) && ((sequenceBinary & (sequenceBinary - 1)) === 0))) {
                return 0;
            }
        }

        // If reach here, sequence is a palindrome
        return 1;
    }

    // If reach here, root is NOT a leaf node
    return getPseudoPalindromicPaths(root.left, sequenceBinary, nPalindromes)
        + getPseudoPalindromicPaths(root.right, sequenceBinary, nPalindromes);
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

pseudoPalindromicPaths(
    new TreeNode(2,
        new TreeNode(3, 
            new TreeNode(3),
            new TreeNode(1)
        ),
        new TreeNode(1,
            null,
            new TreeNode(1)
        )
    )
);

/**
// 
?

Store path values as bits:
- Palindrome will have have even length of numbers with the exception of one number
that is the middle number of odd length palindrome
- If use binary, could switch value of nth digit whenever n occurs in sequence (0 -> 1 -> 0 -> 1...).
After looping through sequence, sequence is palindrome if final binary is zero OR includes a single one (for odd length sequence middle)
1,1 => 2x 1
2,1,1,2 2x 1 AND 2x 2


 */