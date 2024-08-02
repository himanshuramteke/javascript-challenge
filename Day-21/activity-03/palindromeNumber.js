/*
Activity-3[Palindrome Number]
Task-3:Solve the "Palindrome Number" problem on Leetcode.
Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
Log the result for few test cases, including edge cases like negative numbers.
*/

function isPalindrome(x) {
    
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }

    
    let reversed = 0;
    let original = x;
    
    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
}

// Test cases
console.log(isPalindrome(121));     // Output: true
console.log(isPalindrome(-121));    // Output: false
console.log(isPalindrome(10));      // Output: false
console.log(isPalindrome(0));       // Output: true
console.log(isPalindrome(12321));   // Output: true
