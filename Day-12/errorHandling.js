//--------Day-12[Error Handling]---------//

//Activity-1[Basic Error Handling with Try-catch]
//Task-1:Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
    throw new Error("This is an intentional error.")
}
try {
    throwError();
} catch (error) {
    console.log("Caught an error:", error.message);
}

//Task-2:Create a function that divides two numbers and throws an error if the denominator is zero.Use a try-catch block to handle this error.

function divideNumbers(a,b) {
    if (b == 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a/b;
}

try {
    console.log(divideNumbers(10, 2));
    console.log(divideNumbers(10, 0));
}catch (error) {
    console.log("Caught an error:", error.message);
}

//Activity-2[Finally Block]
//Task-3:Write a script that includes a try-catch block and finally block.Log messages in the try,catch and finally blocks to observe the execution flow.

function testFinallyBlock() {
    try {
        console.log("In the try block");
        throw new Error("Intentional error")
    } catch (error) {
        console.log("In the catch block. Caught an error:", error.message);
    } finally {
        console.log("In the finally block.");
    }
}

testFinallyBlock();

//Activity-3[Custom Error Objects]
//Task-4:Create a custom error class that extends the built-in Error class.Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error.");
}

try {
    throwCustomError();
} catch (error) {
    if (error instanceof CustomError) {
        console.log("Caught a custom error:", error.message);
    } else {
        console.log("Caught an unexpected error:", error);
    }
}


//Task-5:Write a function that validates user input(e.g.,checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (input.trim() === "") {
        throw new ValidationError("Input cannot be empty.");
    }
    return "Valid input: " + input;
}

try {
    console.log(validateInput("Hello World")); // Valid input
    console.log(validateInput("")); // This should throw a validation error
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Caught a validation error:", error.message);
    } else {
        console.log("Caught an unexpected error:", error);
    }
}


//Activity-4[Error Handling in Promises]
//Task-6:Create a promise that randomly resolves or rejects.Use .catch() to handle the rejection and log an appropriate messages to the console.

let randomPromise = new Promise((resolve, reject) => {
    let randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve("Promise resolved successfully.");
    } else {
        reject("Promise rejected.");
    }
});
randomPromise 
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Caught an error:", error);
    });
    
//Task-7:Use try-catch within an async function to handle error from a promise that randomly resolves or rejects, and log the error message.

async function asyncRandomPromise() {
    try {
        let result = await randomPromise;
        console.log(result);
    } catch (error) {
        console.log("Caught an error:", error);
    }
}

asyncRandomPromise();

//Activity-5[Graceful Error Handling in Fetch]
//Task-8:Use the .fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("https://invalidurl.com")
    .then(response => response.json())
    .catch(error => {
        console.log("Fetch error caught:", error);
    })


//Task-9:Use the .fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    try {
        let response = await fetch("https://invalidurl.com");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch error caught:", error);
    }
}

fetchData();
