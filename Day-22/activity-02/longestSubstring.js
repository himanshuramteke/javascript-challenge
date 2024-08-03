/*
Activity-2[Longest Substring Without Repeating Characters]
Task-2: Solve the "Longest Substring Without Repeating Characters" problem on substring without repeating characters.
Log the length for a few test cases, including edge cases.
*/

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < n; end++) {
        if (charIndexMap.has(s[end])) {
            start = Math.max(charIndexMap.get(s[end]) + 1, start);
        }
        charIndexMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
// Test Case 1
let s1 = "abcabcbb";
console.log(lengthOfLongestSubstring(s1)); // Output: 3 ("abc")

// Test Case 2
let s2 = "bbbbb";
console.log(lengthOfLongestSubstring(s2)); // Output: 1 ("b")

// Test Case 3
let s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s3)); // Output: 3 ("wke")

// Test Case 4
let s4 = "";
console.log(lengthOfLongestSubstring(s4)); // Output: 0

// Test Case 5
let s5 = " ";
console.log(lengthOfLongestSubstring(s5)); // Output: 1 (" ")

