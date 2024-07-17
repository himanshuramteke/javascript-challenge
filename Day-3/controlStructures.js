//-------Day-3[Control structures]------//

//Activity-1 [If-else statements]
//Task-1 

let num = 5; 

if (num > 0) {
    console.log(num + " is a positive number.");
} else if (num < 0) {
    console.log(num + " is a negative number.");
} else {
    console.log("The number is zero.");
}

//Task-2

let age = 18;

if (age >= 18) {
    console.log("Person is eligible to vote");
} else {
    console.log("Person is not eligible to vote");
}

//Activity-2 [Nested if else statements]
//Task-3

let num1 = 10;
let num2 = 15;
let num3 = 24;

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(num1 + " is the largest number.");
    } else {
        console.log(num3 + " is the largest number.");
    }
} else {
    if (num2 >= num3) {
        console.log(num2 + " is the largest number.");
    } else {
        console.log(num3 + " is the largest number.");
    }
}

//Activity-3 [Switch case statements]
//Task-4

let dayNumber = 3; 

switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number. Please enter a number between 1 and 7.");
}

//Task-5

let grade = 'B'; 

switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Below Average");
        break;
    case 'E':
        console.log("Poor");
        break;
    case 'F':
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade. Please enter a grade between A and F.");
}


//Activity-4 [Ternary operator]
//Task-6

let number = 4;

let result = (number % 2 === 0) ? "even" : "odd";
console.log("The number " + num + " is " + result + ".");

//Activity-5 [Combining conditions]
//Task-7

let year = 2024; 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
