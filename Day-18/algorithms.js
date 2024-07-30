//---------------Day-18[Algorithms]-------------//


//Activity-1[Sorting Algorithms]
//Task-1:Implement the bubble sort algorithm to sort an array of numbers in ascending order.Log the sorted array.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i+=1) {
        for (let j = 0; j < n-i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1]  = temp;
            }
        }
    }
    return arr;
}

let arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort: ", bubbleSort(arr1));
//output:Bubble Sort:  [11, 12, 22, 25, 34, 64, 90 ]

//Task-2:Implement the selection sort algorithm to sort an array of numbers in ascending order.Log the sorted array.

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let arr2 = [64, 25, 12, 22, 11];
console.log("Selection Sort: ", selectionSort(arr2));
//output: Selection Sort:  [ 11, 12, 22, 25, 64 ]


//Task-3:Implemennt the quicksort algorithm to sort an array of numbers in ascending order.Log the sorted array.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr3 = [10, 7, 8, 9, 1, 5];
console.log("Quicksort: ", quickSort(arr3));
//output: Quicksort:  [ 1, 5, 7, 8, 9, 10 ]

//Activity-2[Searching Algorithms]
//Task-4:Implement the linear search algorithm to find a target value in an array.Log the index of the target value.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr4 = [2, 3, 4, 10, 40];
let target1 = 10;
console.log("Linear Search: ", linearSearch(arr4, target1));
//output: Linear Search:  3


//Task-5:Implement the binary search algorithm to find a target value in a sorted array.Log the index of the target value.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let arr5 = [2, 3, 4, 10, 40];
let target2 = 10;
console.log("Binary Search: ", binarySearch(arr5, target2));
//output: Binary Search:  3

//Activity-3[String Algorithms]
//Task-6:Write a function to count the occurrences of each character in a string.Log the character counts.

function countOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    return counts;
}

let str1 = "hello world";
console.log("Character Counts: ", countOccurrences(str1));
//output: Character Counts:  { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

//Task-7:Write a function to find the longest substring without repeating characters in a string.Log the length of the substring.

function longestSubstring(s) {
    let seen = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (seen.has(s[end])) {
            start = Math.max(seen.get(s[end]) + 1, start);
        }
        seen.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

let str2 = "abcabcbb";
console.log("Longest Substring Length: ", longestSubstring(str2));
//output: Longest Substring Length:  3

//Activity-4[Array Algorithms]
//Task-8:Write a function to rotate an array by k positions.Log the rotated array.

function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

let arr6 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Rotated Array: ", rotateArray(arr6, k));
//output: Rotated Array:  [5, 6, 7, 1, 2, 3, 4 ]

//Task-9:Write a function to merge two sorted arrays into one sorted array.Log the merged array.

function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}

let arr7 = [1, 3, 5, 7];
let arr8 = [2, 4, 6, 8];
console.log("Merged Array: ", mergeArrays(arr7, arr8));
/*
output: Merged Array:  [
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/

//Activity-5[Dynamic Programming]
//Task-10:Write a function to solve the Fibonacci sequence using dynamic programming.Log the Fibonnaci numbers.

function fibonacci(n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp;
}

let n = 10;
console.log("Fibonacci Sequence: ", fibonacci(n));
/*
output:
Fibonacci Sequence:  [
   0, 1,  1,  2,  3,
   5, 8, 13, 21, 34,
  55
]
*/
