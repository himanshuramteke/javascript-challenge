/*
Activity-4[Merge Two Sorted Lists]
Task-4:Solve the "Merge Two Sorted Lists" problem on Leetcode.
Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
Create a few test cases with linked lists and log the merged list.
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    
    current.next = (l1 !== null) ? l1 : l2;

    return dummy.next;
}


function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}


function printLinkedList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}

// Test cases
let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);  // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

l1 = createLinkedList([2, 5, 6]);
l2 = createLinkedList([1, 3, 4]);
mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);  // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

l1 = createLinkedList([]);
l2 = createLinkedList([0]);
mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);  // Output: 0

l1 = createLinkedList([5]);
l2 = createLinkedList([1, 2, 3, 4]);
mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);  // Output: 1 -> 2 -> 3 -> 4 -> 5
