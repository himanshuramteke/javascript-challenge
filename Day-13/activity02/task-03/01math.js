//Activity-2[Named and Default Exports]
//Task-3:Create a module that exports multiple functions using named exports.Import and use these functions in another script.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
