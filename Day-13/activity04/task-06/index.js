//Activity-4[Using Third-Party Modules]
//Task-6:Install a third party module(e.g.,lodash) using npm.Import and use a function from this module in a script.

// Import lodash
const _ = require('lodash');

// Use a function from lodash
const array = [1, 2, 3, 4, 5];
const shuffledArray = _.shuffle(array);
console.log('Shuffled Array:', shuffledArray); 
// Output: Shuffled Array: [3, 5, 1, 2, 4] (output may vary)
