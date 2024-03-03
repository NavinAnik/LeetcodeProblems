/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
       if (head === null) return null;
    
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    
    let count = 0;
    let currentNode = head;
    
    while (currentNode !== null) {
        count++;
        currentNode = currentNode.next;
    }
    
    let positionToRemove = count - n;
    
    if (positionToRemove === 0) {
        return head.next;
    }
    
    currentNode = dummyHead;
    let index = 0;
    
    while (index < positionToRemove ) {
        currentNode = currentNode.next;
        index++;
    }
    
    currentNode.next = currentNode.next.next;
    
    return dummyHead.next;

};