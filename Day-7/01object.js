//-------Day-7[Objects]--------//

//Activity-1[Object Creation and access]

//Task-1:Create an object representing a book with properties like title,author and year and log the object to the console.

const book = {
    title: "spiderman",
    author: "marvels",
    year: 2000
}

console.log(book);  
//output:{ title: 'spiderman', author: 'marvels', year: 2000 }

//Task-2:Access and log the title and author properties of the book object.

console.log(book.title);   //output:spiderman
console.log(book.author);  //output:marvels

//Activity-2[Object Methods]

//Task-3: Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

const book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getTitleAndAuthor: function() {
      return `${this.title} by ${this.author}`;
    }
};
  
console.log(book2.getTitleAndAuthor());
//output: To Kill a Mockingbird by Harper Lee 

//Task-4: Add a method to the book object that takes a parameter (year) and updates the books year property then log the updated object.

book2.updateYear = function(newYear) {
    this.year = newYear;
  };
  
book2.updateYear(2024);
console.log(book2);  


//Activity-3[Nested Objects]
//Task-5:Create a nested object representing a library with properties like name and books(an array of books objects) and log the library object to the console.

const library = {
    name: "City Library",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
      }
    ]
};
  
console.log(library);
  

//Task-6:Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
library.books.forEach(book => {
  console.log(book.title);
});


//Activity-4[The 'this' keyword]
//Task-7:Add a method to the book object that uses the this keyword to return a string with the book's title and year and log the result of calling this method.

book.getTitleAndYear = function() {
    return `${this.title}, published in ${this.year}`;
};
  
console.log(book.getTitleAndYear());
  

//Activity-5[Object iteration]
//Task-8:Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}
  

//Task-9:Use object.keys and object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book2));
console.log(Object.values(book2));

