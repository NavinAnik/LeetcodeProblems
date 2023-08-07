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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root === null){
        return false;
    }

    let flag = false;

    let dfs = (node , sum) =>{
        if(node.left === null && node.right === null){
            if(sum === node.val){
                flag = true;
            }
        }

        if(node.left !== null){
            dfs(node.left, sum - node.val);
        }
        if(node.right !== null){
            dfs(node.right, sum-node.val);
        }
    }

    dfs(root, targetSum);

    return flag;
};