/*
Activity-3[Container with most water]
Task-3:Solve the "Container With Most Water" problem on Leetcode.
Write a function that takes an array of non-negative intergers where each integer represents the height of a line drawn at each point.Find two lines that holds together with the x-axis form a container, such that the container holds the most water.
Log the maximum amount of water for a few test cases. 
*/

function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentArea = width * currentHeight;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
// Test Case 1
let heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights1)); // Output: 49

// Test Case 2
let heights2 = [1, 1];
console.log(maxArea(heights2)); // Output: 1

// Test Case 3
let heights3 = [4, 3, 2, 1, 4];
console.log(maxArea(heights3)); // Output: 16

// Test Case 4
let heights4 = [1, 2, 1];
console.log(maxArea(heights4)); // Output: 2

// Test Case 5
let heights5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(maxArea(heights5)); // Output: 20
