"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        if root is None:
            return []
        result = []
        self.traverse(root, result)
        return result  
    def traverse(self, node, result):
        for child in node.children:
            self.traverse(child, result)
        result.append(node.val)
        
        