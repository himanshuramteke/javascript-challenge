//---------Day-21[LeetCode Easy]------------//

/*Activity-1[Two Sum]
Task-1:Solve the "Two Sum" problem on Leetcode.
Write a function that takes an array of numbers and target number, and returns the indices of the two numbers that add up to the target.
Log the indices for few test cases.
*/

function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return null;  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));    // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));         // Output: [1, 2]
console.log(twoSum([3, 3], 6));            // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 9));   // Output: [3, 4]
console.log(twoSum([1, 5, 5, 11], 10));    // Output: [1, 2]
