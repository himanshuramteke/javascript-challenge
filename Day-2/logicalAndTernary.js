//----Activity-4-----// [Logical operators]

//Task-11

let number1 = 10;
let number2 = 20;

if (number1 > 5 && number2 < 25) {
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}
//output:- Both conditions are true

//Task-12

if (number1 > 15 || number2 < 25) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}
//output:- At least one condition is true

//Task-13

let isTrue = false;
if (!isTrue) {
    console.log("The condition is false");
} else {
    console.log("The condition is true");
}
//output:- The condition is false


//-----Activity-5-------// [Ternary operator]

let number = -10;

let result = (number >= 0) ? "The number is positive" : "The number is negative";
console.log(result);
//output:- The number is negative