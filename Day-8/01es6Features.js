//-------Day-8[ES6+ Features]-------//


//Activity:1[Template Literals]
//Task-1: Use template literals to create a string that include variables for a person's name and age and log the string to the console.

const name = "John"
const age = "22"

const message = `My name is ${name} and I am ${age} years old.`
console.log(message);  //output:My name is John and I am 22 years old 

//Task-2: Create a muliti-line string using template literals and log it to the console.

const multiLineString = `
This is the first line.
This is the second line.
This is the third line.
`;

console.log(multiLineString);
/*output: 
This is the first line.
This is the second line.
This is the third line.
*/

//Activity:2[Destructuring] 
//Task-3: Use array destructuring to extract the first and second elements from an array of numbers and log them in the console.

const numbers = [10, 20, 30, 40, 50];

const [first, second] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);
/*output:
First element: 10
Second element: 20
*/

//Task-4: Use object destucturing to extract the title and author from a book object and log them in the console.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

const { title, author } = book;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
/*output 
Title: The Great Gatsby
Author: F. Scott Fitzgerald
*/

//Activity:3[Spread and Rest Operators]
//Task-5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const existingArray = [1, 2, 3];

const newArray = [...existingArray, 4, 5, 6];

console.log(newArray);
/*output
[1, 2, 3, 4, 5, 6]
*/

//Task-6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.

function sum(...numbers) {

    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
console.log(sum(8, 9)); // 17


//Activity:4[Default Parameters]
//Task-7:Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.Log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2)); // Output: 10

console.log(multiply(5)); // Output: 5


//Activity:5 Enhanced object Literals
//Task-8: Use enhanced object literals to create with methods and properties, and log the object to console.

const myName = 'John';
const myAge = 30;

const person = {
    myName, 
    myAge,  
    greet() { 
        console.log(`Hello, my name is ${this.myName} and I am ${this.myAge} years old.`);
    }
};

console.log(person);

person.greet();
/* 
output: 
{ myName: 'John', myAge: 30, greet: [Function: greet] }
Hello, my name is John and I am 30 years old.
*/

//Task-9: Create an object with computed property names based on variables and log the object to the console.

const key1 = 'firstName';
const key2 = 'lastName';

const user = {
    [key1]: 'himanshu',
    [key2]: 'ramteke',
    age: 23
};

console.log(user);
//output: { firstName: 'himanshu', lastName: 'ramteke', age: 23 }

