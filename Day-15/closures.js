//----------Day-15[Closures]-------------//


//Activity-1[Understanding closures]

//Task-1:Write a function that returns another function,where the inner function access a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const inner = outerFunction();
inner();
//output:"I'm outside!"

//Task-2:Create a closure that maintains a private counter.Implement functions to increment and get the current value of the counter.

function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());
//output:2.

//Activity-2[Practical Closures]
//Task-3:Write a function that generates unique IDs.Use a closure to keep track of the last generated ID and increment it with each call.

function uniqueIdGenerator() {
    let lastId = 0;

    return function() {
        lastId++;
        return lastId;
    };
}

const generateId = uniqueIdGenerator();
console.log(generateId()); //output:1
console.log(generateId()); //output:2

//Task-4:Create a closure that captures a user's name and returns a function that greets the user by name.

function greetUser(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const greetMyName = greetUser("himanshu");
greetMyName(); //output:Hello, himanshu!


//Activity-3[Closure in Loops]
//Task-5:Write a loop that creates an array of functions.Each function should log its index when called.Use a closure to ensure each function logs the correct index.

let functionsArray = [];

for (let i = 0; i < 5; i++) {
    functionsArray[i] = (function(index) {
        return function() {
            console.log(index);
        };
    })(i);
}

functionsArray[0](); // output: 0
functionsArray[1](); // output: 1
functionsArray[2](); // output: 2
functionsArray[3](); // output: 3
functionsArray[4](); // output: 4


//Activity-4[Module Pattern]
//Task-6:Use closures to create a simple module for managing a collection of items.Implement methods to add, remove and list items.

const itemManager = (function() {
    let items = [];
    
    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items.slice(); 
        }
    };
})();

itemManager.addItem("item1");
itemManager.addItem("item2");
console.log(itemManager.listItems()); // output: ["item1", "item2"]
itemManager.removeItem("item1");
console.log(itemManager.listItems()); // output: ["item2"]


//Activity-5[Memoization]
//Task-7:Write a function that memoizes the result of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}


function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // output: 3
console.log(memoizedAdd(1, 2)); // output: 3 (from cache)


//Task-8:Create a memoized version of a function that calculates the factorial of a number.

function memoizedFactorial() {
    const cache = {};
    
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        if (cache[n]) {
            return cache[n];
        } else {
            const result = n * factorial(n - 1);
            cache[n] = result;
            return result;
        }
    }
    
    return factorial;
}

const factorial = memoizedFactorial();
console.log(factorial(5)); // output: 120
console.log(factorial(6)); // output: 720 (uses cached result for factorial(5))

