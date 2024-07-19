//1]Array Manipulation script: Write a script that demonstrates the creation of an array and removing elements using push,pop,shift and unshift methods.

const myArr = [1, 2, 3, 4, 5];
console.log(myArr); //[ 1, 2, 3, 4, 5 ]


myArr.push(6)
console.log(myArr); //output:- [ 1, 2, 3, 4, 5, 6 ]


myArr.pop()
console.log(myArr); //output:- [ 1, 2, 3, 4, 5 ]


myArr.shift()
console.log(myArr); //output:[ 2, 3, 4, 5 ]


myArr.unshift(0);
console.log(myArr); //output:[0,2,3,4,5]


//2]Array Transformation script:Create a script that uses map,filter and reduce methods to transform and aggregate array data.

let array = [1, 2, 3, 4, 5];

let doubledArray = array.map(number => number * 2);
console.log("Doubled Array:", doubledArray); // Output: [2, 4, 6, 8, 10]


let evenArray = array.filter(number => number % 2 === 0);
console.log("Even Numbers Array:", evenArray); // Output: [2, 4]


let sum = array.reduce((total, number) => total + number, 0);

console.log("Sum of Array:", sum); // Output: 15



//3]Array Iteration script:Write a script that iterates over an array using both for loop and forEach method and logs each element.

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

//4]Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two dimensional array.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);
/*output:
Matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
*/

let specificElement = matrix[0][1];

console.log("Specific Element:", specificElement); 
// Output: Specific Element: 2
