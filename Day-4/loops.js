//------Day-4[Loops]--------//

//Activity-1[for loop]

//Task-1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task-2

const n = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}
//Activity-2[while loop]

//Task-3

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log("The sum of numbers from 1 to 10 is:", sum);

//Task-4

let num = 10;

while (num >= 1) {
    console.log(num);
    num --;
}

//Activity-3 

//Task-5
let a = 1;

do {
  console.log(a);
  a++;
} while (a <= 5);


//Task-6
const number = 5; 
let result = 1;
let b = number;

do {
  result *= b;
  b--;
} while (b > 0);

console.log(`The factorial of ${number} is:`, result);
