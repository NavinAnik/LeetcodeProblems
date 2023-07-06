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
    let count = 0;
    let dummy = new ListNode(0);
    dummy.next = head
    let node = head;
    while(node){
        count++;
        node = node.next;
    }
    node = dummy;
    for (let i = 1; i < count - n+1; i++) {
        node = node.next;
        }

        node.next = node.next.next;

    return dummy.next;

};