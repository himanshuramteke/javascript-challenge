//-----------Day-19[Regular Expression]--------------//


//Activity-1[Basic Regular Expressions]
//Task-1:Write a regular expression to match a simple pattern (e.g.,match all occurences of the word "Javascript" in a string).Log the matches.

const text1 = "Javascript is a popular programming language. Many developers love Javascript.";
const regex1 = /Javascript/g;
const matches1 = text1.match(regex1);
console.log(matches1);  
// Output: ["Javascript", "Javascript"]

//Task-2:Write a regular expression to match all digits in a string.Log the matches.

const text2 = "My phone number is 123-456-7890 and my zip code is 90210.";
const regex2 = /\d/g;
const matches2 = text2.match(regex2);
console.log(matches2);  
/* Output:[
  '1', '2', '3', '4',
  '5', '6', '7', '8',
  '9', '0', '9', '0',
  '2', '1', '0'
] 
*/


//Activity-2[Character Classes and Quantifiers]
//Task-3:Write a regular expression to match all words in a string that start with a capital letter.Log the matches.

const text3 = "Hello World! This is a Regular Expression Test.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = text3.match(regex3);
console.log(matches3);  
// Output: ["Hello", "World", "This", "Regular", "Expression", "Test"]


//Task-4:Write a regular expression to match all sequences of the one or more digits in a string.Log the matches.

const text4 = "There are 15 apples and 20 oranges.";
const regex4 = /\d+/g;
const matches4 = text4.match(regex4);
console.log(matches4);  
// Output: ["15", "20"]


//Activity-3:[Grouping and Capturing]
//Task-5:Write a regular expression to capture the area code,central office code, and line number from a US phone number format (e.g.,(123) 456-7890).Log the captures.

const phone = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = phone.match(regex5);
console.log(matches5);  
/*Output: [
  '(123) 456-7890',
  '123',
  '456',
  '7890',
  index: 0,
  input: '(123) 456-7890',
  groups: undefined
]
*/

//Task-6:Write a regular expression to capture the username and domain from an email address.Log the captures.

const email = "himanshu@example.com";
const regex6 = /([^@]+)@([^@]+)/;
const matches6 = email.match(regex6);
console.log(matches6);  
/*Output: [
  'himanshu@example.com',
  'himanshu',
  'example.com',
  index: 0,
  input: 'himanshu@example.com',
  groups: undefined
]
*/
//Activity-4[Assertion and Boundaries]
//Task-7:Write a regular expression to match a word only if it is at the beginning of the string.Log the matches.

const text7 = "Javascript is fun. Javascript is powerful.";
const regex7 = /^\w+/;
const matches7 = text7.match(regex7);
console.log(matches7);  
/*Output: [
  'Javascript',
  index: 0,
  input: 'Javascript is fun. Javascript is powerful.',
  groups: undefined
]
*/

//Task-8:Write a regular expression to match a word only if it is at the end of the string.Log the matches.

const text8 = "Learn Javascript, use Javascript.";
const regex8 = /\w+$/;
const matches8 = text8.match(regex8);
console.log(matches8);  
// Output: ["Javascript"]


//Activity-5:Practical Applications
//Task-9:Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter,one digit, and one special character).Log whether the password is valid.

const password = "Passw0rd!";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValidPassword = regex9.test(password);
console.log(isValidPassword); 
// Output: true or false


//Task-10:Write a regular expression to validate a URL.Log the whether the URL is valid.

const url = "https://www.example.com";
const regex10 = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
const isValidURL = regex10.test(url);
console.log(isValidURL);  
// Output: true or false

