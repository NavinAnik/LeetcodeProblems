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
var minDepth = function(root) {
     if(!root) return 0;

    const queue = [root];
    let height = 0;
    while(queue.length){
        const n = queue.length;
        height++;
        for(let i=0; i<n; i++){
            const node = queue.shift();
            if(!node.left && !node.right)return height;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
};