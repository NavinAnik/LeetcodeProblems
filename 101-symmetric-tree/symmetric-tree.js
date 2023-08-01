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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null){
        return false;
    }else if (root.left === null && root.right === null){
        return true;
    }else if (root.left === null || root.right === null){
        return false;
    }

    let answer = true;
    isSame(root.left, root.right);
    return answer;
    


    function isSame(root1,root2){
         if(root1 && root2) {
            if(root1.val !== root2.val){
                answer = false;
                return false;
            }
            isSame(root1.left,root2.right)
            isSame(root1.right,root2.left)
        }
        if(root1 && !root2) {
            answer = false;
            return false
        }
        if(!root1 && root2) {
            answer = false;
            return false;
        }

    
    }
};