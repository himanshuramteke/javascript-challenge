/*
Activity-5[Valid Parenthesis]
Task-5: Solve the "Valid Parenthesis" problem on Leetcode.
Write a function that takes a string containing just the characters'(',')','{','}','['and']', and determines if the input string is valid.
A string is valid if open brackets are closed in the correct order.
Log the result for few test cases.
*/

function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            
            stack.push(char);
        } else {
            
            const top = stack.pop();
            if (map[top] !== char) {
                return false;
            }
        }
    }

    
    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false
console.log(isValid("([)]"));     // Output: false
console.log(isValid("{[]}"));     // Output: true
console.log(isValid(""));         // Output: true (empty string is valid)
console.log(isValid("["));        // Output: false
