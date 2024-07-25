//Activity-3[Importing Entire Modules]
//Task-5:Create a module that exports multiple constants and functions.Imports the entire module as an object in another script and use its properties.

const PI = 3.14;

function areaOfCircle(radius) {
    return PI * radius * radius;
}

function circumferenceOfCircle(radius) {
    return 2 * PI * radius;
}

module.exports = { PI, areaOfCircle, circumferenceOfCircle };
