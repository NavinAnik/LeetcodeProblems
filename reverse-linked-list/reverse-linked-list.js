/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null){
        return head;
    }

    let prev = head;
    let current = head.next;
    while(current !== null) {
        let nxt = current.next;
        current.next = prev;
        prev = current;
        current = nxt;
    }

    head.next = null;
    head = prev;

    return prev;

};