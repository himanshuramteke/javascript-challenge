//1]Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

const book = {
    title: "spiderman",
    author: "marvels",
    year: 2000
}

console.log(book);

console.log(book.title);   
console.log(book.author);

const book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getTitleAndAuthor: function() {
      return `${this.title} by ${this.author}`;
    }
};
console.log(book2.getTitleAndAuthor());

//2]Library object Script: Create a script that defines a library object containing an array of book objects and logs the library details.


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
  

//3]Object iterartion script: Write a script that demonstrates iterating over an objects properties using for...in loop and object.keys/object.values.  

for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}

console.log(Object.keys(book2));
console.log(Object.values(book2));

  
