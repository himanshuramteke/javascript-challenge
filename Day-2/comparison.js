//----Activity-3-------// [Comparison operators]

//Task-8

let number1 = 10;
let number2 = 20;

if (number1 > number2) {
    console.log(`${number1} is greater than ${number2}`);
} else if (number1 < number2) {
    console.log(`${number1} is less than ${number2}`);
} else {
    console.log(`${number1} is equal to ${number2}`);
}
//output:- 10 is less than 20

//Task-9

if (number1 >= number2) {
    console.log(`${number1} is greater than or equal to ${number2}`);
} else {
    console.log(`${number1} is not greater than or equal to ${number2}`);
}
//output:- 10 is not greater than or equal to 20

if (number1 <= number2) {
    console.log(`${number1} is less than or equal to ${number2}`);
} else {
    console.log(`${number1} is not less than or equal to ${number2}`);
}
//output:- 10 is less than or equal to 20

//Task-10

if (number1 == number2) {
    console.log(`${number1} is loosely equal to ${number2}`);
} else {
    console.log(`${number1} is not loosely equal to ${number2}`);
}
//output:- 10 is not loosely equal to 20

if (number1 === number2) {
    console.log(`${number1} is strictly equal to ${number2}`);
} else {
    console.log(`${number1} is not strictly equal to ${number2}`);
}
//output:- 10 is not strictly equal to 20