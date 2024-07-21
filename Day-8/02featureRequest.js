//1]Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multiline strings.

const name = "John"
const age = "22"

const message = `My name is ${name} and I am ${age} years old.`
console.log(message);  //output:My name is John and I am 22 years old 

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

//2]Destructing Script: Create a script that uses array and object destructuring to extract values and log them.

const numbers = [10, 20, 30, 40, 50];

const [first, second] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);
/*output:
First element: 10
Second element: 20
*/

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

//3]Spread and Rest Operators script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

const existingArray = [1, 2, 3];

const newArray = [...existingArray, 4, 5, 6];

console.log(newArray);
/*output
[1, 2, 3, 4, 5, 6]
*/
function sum(...numbers) {

    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
console.log(sum(8, 9)); // 17

//4]Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2)); // Output: 10

console.log(multiply(5)); // Output: 5

//5]Enhanced Object Literals Scripts:Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

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
const key1 = 'firstName';
const key2 = 'lastName';

const user = {
    [key1]: 'himanshu',
    [key2]: 'ramteke',
    age: 23
};

console.log(user);
//output: { firstName: 'himanshu', lastName: 'ramteke', age: 23 }
