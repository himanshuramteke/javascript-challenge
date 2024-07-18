//-------Day-5[functions]--------//

//Activity-1[function declaration]
//Task-1:- write a function to check if a number is even or odd and log the result in console.

function oddEven(x) {
   if (x % 2 == 0) {
      console.log("Number is Even");
   } else {
    console.log("Number is Odd");
   }
}

oddEven(10); //output:- Number is Even

//Task-2:- write a function to calculate the square of a number and return the result.

function square(n) {
    return n * n;
}

console.log(square(5)); //output:-25

//Activity-2 [Function expression]
//Task-3:- Write a function expression to find the maximum of two numbers and log the result to console.

const findMax = function(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

const maxNumber = findMax(23, 35);
console.log("The maximum number is: " + maxNumber);
//output:- The maximum number is: 35

//Task-4:- write a function expression to concatenate two strings and return the result.

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

const result = concatenateStrings("Hello,","World")
console.log(result);
//output:- Hello,World

//Activity-3[Arrow functions]
//Task-5:- write an arrow function to calculate the sum of two numbers and return the result.

const sum = (a, b) => {
    return a + b;
}

const answer = sum(10, 20);
console.log(answer); //output:- 30

//Task-6:- write an arrow function to check if a string contains a specific character return a boolean value. 

const containsCharacter = (str, char) => {
    return str.includes(char);
}

const stringAt = containsCharacter("Good, morning!", "m");
console.log(stringAt); // Output: true

//Activity-4[Function Parameters and default values]
//Task-7:- write a function that takes two parameters and return their product.Provide a default value for the second parameter.

function multiply(a, b = 1) {
    return a * b;
}

const result1 = multiply(10, 5);
console.log(result1); 
//output:-50
const result2 = multiply(10);
console.log(result2);
//output:-10


//Task-8: write a function that takes a person's name and age and returns greeting message.Provide a default value for the age.

function greeting(name, age = 'unknown') {
    return `Hello, ${name}! You age ${age} years old.`;
}

const greeting1 = greeting("Sam", 22);
console.log(greeting1); 
//output:- Hello, Sam! You age 22 years old.

const greeting2 = greeting("David", 25);
console.log(greeting2);
//output:- Hello, David! You age 25 years old.

//Activity-5: Higher order functions

//Task-9: write a higher order function that takes a function and number and calls the function that many times.

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

//Task-10: Write a higher order function that takes a function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunctions(func1, func2, value) {
    const resultFromFunc1 = func1(value);
    const finalResult = func2(resultFromFunc1);
    return finalResult;
}

const addOne = x => x + 1;
const square1 = x => x * x;

const myResult = applyFunctions(addOne, square1, 3);
console.log(myResult); // Output: 16
