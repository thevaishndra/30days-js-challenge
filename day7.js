//Object

//Object creation and access
//create an object representing a book with properties like title, author, year
let book = {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    year: "1963"
};

console.log(book);
//access title and author properties
console.log(book.title);
console.log(book.author);

//Object methods
//add a method to book object that returns string with books's title and author
book.Details = function () {
    console.log(`Name of the book is ${book.title}. It's written by ${book.author}.`);
};
console.log(book.Details());

//add a method to book object that takes parameter year and updates book's year property
book.updateYear = function (year) {
    book.year = year;
};
book.updateYear(2024);
console.log(book.year);

//Nested objects
//create nested obj representing lib with properties like name & books (an array of book objects)
const library = {
    name: "Public library",
    books: [
        {
            title: "Metamorphosis",
            author: "Franz Kafka",
            year: "1915"
        },
        {
            title: "Norwegian wood",
            author: "Haruki Murakami",
            year: 1987
        }
    ]
}
console.log(library);

//access and log name of library and titles of all books
library.Details = function () {
    console.log(`Library Name: ${library.name}`);
    library.books.forEach(book => {
        console.log(book.title);
    });
}
console.log(library.Details());

//This Keyword
//a method that uses this keyword to return a string with books's title and year
book.Details = function() {
    return "Book Title:" + this.title + "\nRelease Year:" +this.year;
}
console.log(book.Details())

//Object Iteration
//use for in loop to iterate over properties of book objects & log each property and its values
for (const book of library.books) {//first loop to iterate over object
    console.log(`Book: `);
    for (const properties in book) {//second loop to iterate over array
        console.log(`  ${properties}: ${book[properties]}`);
    }
    console.log();
}
//use object.keys and object.values methods to log all the keys and values of the book object
for (const book of library.books) {
    console.log(`Book: `);
    console.log(`  Keys: ${Object.keys(book).join(', ')}`);//join -> to concatenate
    console.log(`  Values: ${Object.values(book).join(', ')}`);
}