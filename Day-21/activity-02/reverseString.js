/*
Activity:2[Reverse Integer]
Task-2:Solve the "Reverse Integer" problem on Leetcode.
Write a function that takes an integer and returns it with its digit reversed.
Handle edge cases like negative numbers and numbers ending in zero.
Log the reversed integers for a few test cases.
*/

function reverseInteger(x) {
    let reversed = 0;
    const isNegative = x < 0;
    x = Math.abs(x);
    
    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    if (reversed > 2**31 - 1) {
        return 0; // Handle overflow
    }

    return isNegative ? -reversed : reversed;
}

// Test cases
console.log(reverseInteger(123));       // Output: 321
console.log(reverseInteger(-123));      // Output: -321
console.log(reverseInteger(120));       // Output: 21
console.log(reverseInteger(0));         // Output: 0
console.log(reverseInteger(1534236469)); // Output: 0 (overflow case)
