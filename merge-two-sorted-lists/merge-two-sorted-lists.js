/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null && list2 === null) {
        return list1;
    }
    else if(list1 !== null && list2 === null){
        return list1
    }
    else if(list1 === null && list2 !== null){
        return list2
    }
    

    const dummy = new ListNode(-Infinity);
    let prev = dummy;

    while(list1 && list2){
        if(list1.val <= list2.val){
            prev.next = list1;
            prev = list1;
            list1 = list1.next;
        }
        else {
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }

    if(list1 !== null){
        prev.next = list1;
    }

    if(list2 !== null){
        prev.next = list2;
    }

    return dummy.next;

};