/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str1 = "";
    let str2 = "";

    let node = new ListNode(0);
    node.next = head;
    node = node.next;

    while(node!== null){
        str1 = str1 + node.val;
        node = node.next; 
    } 

    for(let i = str1.length-1;i>=0;i--){
        str2 = str2 + str1[i];
    }

    if(str1 === str2){
        return true;
    }
    else {
        return false;
    }
};