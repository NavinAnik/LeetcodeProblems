# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head: return head

        self.max_value = float("-inf")

        def traverse(node):
            if not node: return None

            node.next = traverse(node.next)

            self.max_value = max(self.max_value, node.val)

            if(self.max_value>node.val):
                return node.next
            return node

        return traverse(head)
        