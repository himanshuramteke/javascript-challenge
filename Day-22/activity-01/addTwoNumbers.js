//-----------Day-22[LeetCode Medium]----------//

/*Activity-1[Add Two numbers]
Task-1:Solve the "Add Two Numbers" problem on Leetcode.
Write a function that takes two non-empty linked lists representing two non-negative integers.The digits are stored in reverse order, and each node contains a single digit.Add the two numbers and return the sum as a linked list.
Create a few test cases with linked lists and log the sum as a linked list.
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}


function printLinkedList(node) {
    let current = node;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Test Case 1
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
printLinkedList(result); // Output: 7 -> 0 -> 8

// Test Case 2
let l1_2 = new ListNode(0);
let l2_2 = new ListNode(0);
let result2 = addTwoNumbers(l1_2, l2_2);
printLinkedList(result2); // Output: 0

// Test Case 3
let l1_3 = new ListNode(9, new ListNode(9, new ListNode(9)));
let l2_3 = new ListNode(1);
let result3 = addTwoNumbers(l1_3, l2_3);
printLinkedList(result3); // Output: 0 -> 0 -> 0 -> 1
