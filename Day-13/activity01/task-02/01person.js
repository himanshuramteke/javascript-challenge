//Task-2:Create a module that exports an object representing a person with properties and methods.Import and use this module in another script.

const person = {
    name: 'Himanshu',
    age: 23,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

module.exports = person;