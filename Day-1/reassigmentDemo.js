// Using let
let myLetVariable = 10;
console.log("Initial value of myLetVariable:", myLetVariable);

myLetVariable = 20;
console.log("Reassigned value of myLetVariable:", myLetVariable);

// Using const
const myConstVariable = 30;
console.log("Initial value of myConstVariable:", myConstVariable);

try {
    myConstVariable = 40; // This line will cause an error
    console.log("Reassigned value of myConstVariable:", myConstVariable);
} catch (error) {
    console.error("Error when trying to reassign myConstVariable:", error.message);
}
