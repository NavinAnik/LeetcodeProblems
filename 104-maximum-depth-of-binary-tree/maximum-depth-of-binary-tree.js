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
 */
var maxDepth = function(root) {
    let depth = 0;
    
    let bfs = (node, level) =>{
        if(node === null){
            return;
        }

        if(level > depth){
            depth = level;
        }

        bfs(node.left, level+1);
        bfs(node.right, level+1);
    }

    bfs(root, 1);

    return depth;
};