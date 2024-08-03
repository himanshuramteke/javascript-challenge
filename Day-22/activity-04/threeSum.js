/*
Activity-4[3Sum]
Task-4:Solve the "3Sum" problem on LeetCode.
Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
Log the triplets for a few test cases, inlcuding edge cases.
*/

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicates
        }

        let left = 0;
        let right = nums.length - 1;
        let target = -nums[i];

        while (left < right) {
            if (left === i) {
                left++;
                continue;
            }
            if (right === i) {
                right--;
                continue;
            }

            let sum = nums[left] + nums[right];

            if (sum === target) {
                triplets.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}
// Test Case 1
let nums1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums1)); // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ], [ 0, -1, 1 ] ]

// Test Case 2
let nums2 = [];
console.log(threeSum(nums2)); // Output: []

// Test Case 3
let nums3 = [0, 0, 0];
console.log(threeSum(nums3)); // Output: [[0, 0, 0]]

// Test Case 4
let nums4 = [-2, 0, 1, 1, 2];
console.log(threeSum(nums4)); // Output: [ [ -2, 0, 2 ], [ -2, 1, 1 ], [ 0, -2, 2 ], [ 1, -2, 1 ] ]

// Test Case 5
let nums5 = [-4, -1, -1, 0, 1, 2];
console.log(threeSum(nums5)); // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ], [ 0, -1, 1 ] ]
