# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        arr = []
        if root is None:
            return []
        return self.traversal(root, arr)
        
    def traversal(self, root, arr):
        if root is None:
            return arr
        
        self.traversal(root.left, arr)
        self.traversal(root.right, arr)
        arr.append(root.val)

        return arr

        