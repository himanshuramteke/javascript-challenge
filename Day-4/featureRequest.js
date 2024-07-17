//1]Number Printing Script:- Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

//forloop 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//while loop

let i = 1;

while (i <= 10) {
    console.log(i);
    i++
}

//2]Multiplication Table script:-Create a acript that prints the multiplication table of 5 using a for loop.

const number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}


//3] Pattern Printing script:- write a script that prints a pattern of stars using nested loops.

let n = 5;
for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= row; col++) {
        str += "*";
    }
    console.log(str);
}

//4]Sum calculation script:-write a script that calculates the sum of numbers from 1 to 10 using while loop.

let sum = 0;
let a = 1;

while (a <= 10) {
  sum += a;
  a++;
}

console.log("The sum of numbers from 1 to 10 is:", sum);


//5]Factorial calculation script:-Create a script that calculates the factorial of number using a do...while loop.

const j = 5; 
let result = 1;
let b = j;

do {
  result *= b;
  b--;
} while (b > 0);

console.log(`The factorial of ${number} is:`, result);
