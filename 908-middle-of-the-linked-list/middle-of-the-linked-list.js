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
var middleNode = function(head) {
    let dummyHead = head;
    let count = 0;
    while(dummyHead.next!== null){
        count++;
        dummyHead = dummyHead.next;
    }
    const middle = (count/2)

    for(let i = 0; i<middle;i++){
        head = head.next;
    }
    return head;
};