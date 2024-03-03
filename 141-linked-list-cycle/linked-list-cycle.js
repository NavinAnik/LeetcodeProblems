/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let pos = head;
    while(pos&& pos.next){
        head = head.next;
        pos = pos.next.next;
        if(head === pos) return true
    }
    return false;

    
    
};