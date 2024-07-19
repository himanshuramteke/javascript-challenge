//------Day-6[Arrays]------//

//Activity:1[Array creation and access]
//Task-1:Create an array of numbers from 1 to 5 and log into console.

const myArr = [1, 2, 3, 4, 5];
console.log(myArr); //[ 1, 2, 3, 4, 5 ]

//Task-2:Access the first and last element of the array.

let arr = [1,2,3,4,5]
//accessing the first element

let firstElement = arr[0];
console.log("First Element:", firstElement); //output:1

let lastElement = arr[arr.length - 1];
console.log("Last Element:", lastElement); //output:5

//Activity-2:[Array methods]
//Task3:Use the push method to add a new number to the end of the array and log the updated array.

myArr.push(6)
console.log(myArr); //output:- [ 1, 2, 3, 4, 5, 6 ]
 
//Task-4:Use the pop method to remove the last element from the array and log the updated array.

myArr.pop()
console.log(myArr); //output:- [ 1, 2, 3, 4, 5 ]

//Task-5:Use the shift method to remove the first element from the array and log the updated array.

myArr.shift()
console.log(myArr); //output:[ 2, 3, 4, 5 ]

//Task-6:Use the unshift method to add a new number to the beginning of the array and log the updated.

myArr.unshift(0);
console.log(myArr); //output:[0,2,3,4,5]

//Activity:3 [Array Methods(intermediate)]
//Task-7:Use the map method to create a new array where each number is doubled and log the new array.

let array = [1, 2, 3, 4, 5];

let doubledArray = array.map(number => number * 2);

console.log("Doubled Array:", doubledArray); // Output: [2, 4, 6, 8, 10]


//Task-8:Use the filter method to create a new array with only even numbers and log the new array.

let evenArray = array.filter(number => number % 2 === 0);

console.log("Even Numbers Array:", evenArray); // Output: [2, 4]


//Task-9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let sum = array.reduce((total, number) => total + number, 0);

console.log("Sum of Array:", sum); // Output: 15


//Activity:4 [Array iteration]
//Task-10: Use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < array.length; i++) {
    console.log("Element using for loop:", array[i]);
}
/*output:
Element using for loop: 1
Element using for loop: 2
Element using for loop: 3
Element using for loop: 4
Element using for loop: 5
*/

//Task-11:Use the forEach method to iterate over the array and log each element to the console.

array.forEach(number => {
    console.log("Element using forEach:", number);
});
/*output:
Element using forEach: 1
Element using forEach: 2
Element using forEach: 3
Element using forEach: 4
Element using forEach: 5
*/


//Activity-5: Multi-dimensional Arrays
//Task-12:Create a two dimensional array[matrix] and log the entire array to the console.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);
/*output:
Matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
*/
//Task-13:Access and log a specific element from the two dimensional array.

let specificElement = matrix[0][1];

console.log("Specific Element:", specificElement); 
// Output: Specific Element: 2


