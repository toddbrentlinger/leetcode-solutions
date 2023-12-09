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
 * @return {string}
 * Runtime: 61ms (67.79%)
 * Memory: 46.52MB (83.22%)
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is height of binary tree
 */
var tree2str = function(root) {
    // Base Case: Return empty string if root is null
    if (root === null) {
        return '';
    }

    // Base Case: Return root val as string if leaf node (no children)
    if (root.left === null && root.right === null) {
        return root.val.toString();
    }

    // If reach here, root has at least one child
    // Do NOT include parenthesis for right node if it's null
    return root.val
        + '(' + tree2str(root.left) + ')'
        + (root.right ? '(' + tree2str(root.right) + ')' : '');
};

/**
 * @param {TreeNode} root
 * @return {string}
 * Runtime: 63ms (59.87%)
 * Memory: 47.07MB (50.66%)
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is height of binary tree
 */
var tree2str = function(root) {
    let str = root.val.toString();

    // If root has two nodes
    if (root.left && root.right) {
        str += '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')'
    }
    // Else If root has only left node, do not include parentheses to right
    else if (root.left) {
        str += '(' + tree2str(root.left) + ')';
    }
    // Else If root has only right node, add empty parentheses to left 
    else if (root.right) {
        str += '()(' + tree2str(root.right) + ')';
    }
    // Else root is leaf node (no children), just return root val

    return str;
};
  
  /**
  1 ( 2(4)() ) ( 3()() )
          ()      ()()   <- removed
  1 ( 2(4) ) ( 3 )
  
  _______________________________________________________________________________
  
  1 ( 2()(4) ) ( 3()() )
                  ()()   <- removed
  1 ( 2()(4) ) ( 3 )
   */