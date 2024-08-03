/*
Activity-5[Group Anagrams]
Task-5:Solve the "Group Anagrams" problem on Leetcode.
Write a function that takes an array of strings and groups anagrams together.
Log the grouped anagrams for a few test cases.
*/

function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}
// Test Case 1
let strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1)); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// Test Case 2
let strs2 = [""];
console.log(groupAnagrams(strs2)); // Output: [[""]]

// Test Case 3
let strs3 = ["a"];
console.log(groupAnagrams(strs3)); // Output: [["a"]]

// Test Case 4
let strs4 = ["abc", "bca", "cab", "cba", "bac", "acb"];
console.log(groupAnagrams(strs4)); // Output: [["abc", "bca", "cab", "cba", "bac", "acb"]]

// Test Case 5
let strs5 = ["rat", "tar", "art", "car", "arc"];
console.log(groupAnagrams(strs5)); // Output: [["rat", "tar", "art"], ["car", "arc"]]
