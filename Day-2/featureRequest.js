//---Arithmetic operations----//

let num1 = 15;
let num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
console.log(`Division: ${num1} / ${num2} = ${num1 / num2}`);
console.log(`Remainder: ${num1} % ${num2} = ${num1 % num2}`);

/*
output:- 
Addition: 15 + 5 = 20
Subtraction: 15 - 5 = 10
Multiplication: 15 * 5 = 75
Division: 15 / 5 = 3
Remainder: 15 % 5 = 0
*/

//-----Comparison and Ternary operators-------//
/*Comparison*/

let a = true;
let b = false;

console.log(`Logical AND (a && b): ${a && b}`);
console.log(`Logical OR (a || b): ${a || b}`);
console.log(`Logical NOT (!a): ${!a}`);
console.log(`Logical NOT (!b): ${!b}`);

/*
Output:-
Logical AND (a && b): false
Logical OR (a || b): true
Logical NOT (!a): false
Logical NOT (!b): true

*/

/*logical*/
let x = 10;
let y = 20;

console.log(`x > y: ${x > y}`);
console.log(`x < y: ${x < y}`);
console.log(`x >= y: ${x >= y}`);
console.log(`x <= y: ${x <= y}`);
console.log(`x == y: ${x == y}`);
console.log(`x === y: ${x === y}`);
console.log(`x != y: ${x != y}`);
console.log(`x !== y: ${x !== y}`);

/*output:-

x > y: false
x < y: true
x >= y: false
x <= y: true
x == y: false
x === y: false
x != y: true
x !== y: true
*/

//-----Ternary operators----//

let number = -10;

let result = (number >= 0) ? "The number is positive" : "The number is negative";
console.log(result);

let isEven = (number % 2 === 0) ? "The number is even" : "The number is odd";
console.log(isEven);

/* output:-
The number is negative
The number is even
*/
