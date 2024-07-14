//-------Day-1 Variables and Data Types--------//

//====Activity-1=====// [variable declaration]

//Task-1
var num = 10;
console.log(num);  //Output:-10

//Task-2
let myName = "Himanshu";
console.log(myName); //Output:-Himanshu

//====Activity-2=====// [constant declaration]

//Task-3
const myValue = true;
console.log(myValue); //Output:-true

//====Activity-3=====// [data types]

//Task-4

const num2 = 20;
const myStr = "himanshu"
const value = false;
const myObj = {
    name: "himanshu",
    age: 20
}
const myArr = ["himanshu", 20, true]

console.log(typeof (num2));  //output:-number
console.log(typeof (myStr)); //output:-string
console.log(typeof (value)); //output:-boolean
console.log(typeof (myObj)); //output:-object
console.log(typeof (myArr)); //output:-object

//====Activity-4=====// [reassigning variables]

let myVariable = 20;
console.log("Initial value:", myVariable);
myVariable = 35;
console.log("New value:", myVariable);

//====Activity-5=====// [Understanding const]

const myConstant = 10;
console.log("Initial value:", myConstant);

myConstant = 20;                           
console.log("New value:", myConstant); 
//output:- TypeError: Assignment to constant variable.


