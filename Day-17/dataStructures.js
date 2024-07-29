//----------Day-17[Data Structures]-----------//


//Activity-1[Linked List]
//Task-1:Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Task-2:Implement a LinkedList class with methods to adds a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNode() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            const removedNode = this.head;
            this.head = null;
            return removedNode;
        }
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        const removedNode = current.next;
        current.next = null;
        return removedNode;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example Usage
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.display();
list.removeNode();
list.display();


//Activity-2[Stack]
//Task-3:Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }
}


//Task-4:Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = "";
    while (stack.items.length > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

// Example Usage
console.log(reverseString("hello")); // Output: "olleh"


//Activity-3[Queue]
//Task-5:Implement a Queue class with methods enqueue(add element), dequeue(remove element) and front(view the first element).

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) {
            return "No elements in Queue";
        }
        return this.items[0];
    }
}


//Task-6:Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
        console.log(`Added job: ${job}`);
    }

    processJob() {
        if (this.queue.items.length === 0) {
            console.log("No jobs to process");
        } else {
            const job = this.queue.dequeue();
            console.log(`Processing job: ${job}`);
        }
    }
}

// Example Usage
const printerQueue = new PrinterQueue();
printerQueue.addJob("Print Document 1");
printerQueue.addJob("Print Document 2");
printerQueue.processJob();
printerQueue.processJob();
printerQueue.processJob();


//Activity-4[Binary Tree]
//Task-7:Implement a TreeNode class to represent a node in a binary tree with properties value, left and right.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


//Task-8:Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    display() {
        this.inOrderTraversal(this.root);
    }
}

// Example Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(8);
tree.display(); // Output: 5 8 10 20
