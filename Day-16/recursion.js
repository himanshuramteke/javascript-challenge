//---------------Day-16[Recursion]----------------//

//Activity-1[Basic Recursion]
//Task-1:Write a recursive function to calculate the factorial of a number.Log the result for few test cases.

function factorial(n) {
    if (n <= 1) {
       return 1; 
    }
    return n * factorial(n - 1);
}

//Test cases
console.log(factorial(5)); //120
console.log(factorial(0)); //1
console.log(factorial(7)); //5040

//Task-2:Write a recursive function to calculate the nth Fibonacci number.Log the result for a few test cases.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log(fibonacci(6)); // 8
console.log(fibonacci(0)); // 0
console.log(fibonacci(10)); // 55


//Activity-2[Recursion with Arrays]
//Task-3:Write a recursive function to find the sum of all elements in an array.Log the result for a few test cases.

function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([])); // 0
console.log(sumArray([10, 20, 30])); // 60


//Task-4:Write a recursive function to find the maximum element in an array.Log the result for a few test cases.

function maxArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxRest = maxArray(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest;
}

// Test cases
console.log(maxArray([1, 5, 3, 9, 2])); // 9
console.log(maxArray([10])); // 10
console.log(maxArray([-1, -5, -3, -9, -2])); // -1

//Activity-3[String Manipulation with Recursion]
//Task-5:Write a recursive function to reverse a string.Log the result for a few test cases.

function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str[0];
}

// Test cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("")); // ""
console.log(reverseString("recursion")); // "noisrucer"


//Task-6:Write a recursive function to check if a string is a palindrome.Log the result for a few test cases.

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true


//Activity-4[Recursive Search]
//Task-7:Write a recursive function to perform a binary search on a sorted array.Log the index of the target element for a few test cases.

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, high);
}

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0


//Task-8:Write a recursive function to count the occurrences of the target element in an array.Log the result for a few test cases.

function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

// Test cases
console.log(countOccurrences([1, 2, 3, 4, 3, 3], 3)); // 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0
console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // 5


//Activity-5[Tree Traversal]
//Task-9:Write a recursive function to perform an in-order traversal of a binary tree.Log the nodes as they are visited.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(root) {
    if (root === null) {
        return;
    }
    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
}

// Test case
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); 
// Output: 4, 2, 5, 1, 3


//Task-10:Write a recursive function to calculate the depth of the binary tree.Log the result for a few test cases.

function treeDepth(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = treeDepth(root.left);
    const rightDepth = treeDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Test case
let root2 = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(treeDepth(root2)); // 1

