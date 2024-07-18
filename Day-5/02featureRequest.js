//1]Even or odd function script: write a script that includes a function to check if a number is even or odd and logs the result.

function oddEven(x) {
    if (x % 2 == 0) {
       console.log("Number is Even");
    } else {
     console.log("Number is Odd");
    }
 }
 
oddEven(10); //output:- Number is Even

//2]Square calculation function script: create a script that includes a function to calculates the square of a number and returns the rsult.

function square(n) {
    return n * n;
}

console.log(square(5)); //output:-25

//3]Concatenation function script: write a script that includes a function expression to concatenate two strings and return the result.

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

const result = concatenateStrings("Hello,","World")
console.log(result);
//output:- Hello,World

//4]Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculates the sum of two numbers and return the result.

const sum = (a, b) => {
    return a + b;
}

const answer = sum(10, 20);
console.log(answer); //output:- 30

//5]Higher order function script: write a script that includes a higher order function to apply a given function multiple times.

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3); 
// Output:
// Hello!
// Hello!
// Hello!

