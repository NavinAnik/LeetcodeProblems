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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let list = [];
    inorderTraversal(root);
    function inorderTraversal(root){
        if(!root){
            return null;
        }
        inorderTraversal(root.left);
        list.push(root.val);
        inorderTraversal(root.right);
    }
    return list;
};