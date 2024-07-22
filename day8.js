//Template Literals
//create a string that includes variables for a person's name and age and log the string to console
let name = "Vaishnavi";
let age = 20;
console.log(`Name: ${name} Age: ${age}`);

//Create multi - line string 
let rhyme = `Twinkle twinkle little star,
How I wonder what you are,
up above the world so high,
like a diamond in the sky.`;
console.log(rhyme);

//Destructing -> unpack values from arrays, or properties from objects, into distinct variables
//use array destructing to extract first and second elements from an array of numbers 
const alphabet = ["a", "b", "c"];
const [one, two, three] = alphabet;
console.log(one, two, three);


//use object destructing to extract title and author from a book object
let book = {
    title: "To All The Boys I've Loved",
    author: "Jenny Han"
};
const {title, author} = book;
console.log(`Title: ${title} Book:${author}`);

//Spread and Rest operator
// create a new array that includes all elements of an existing array plus additional elements 
//spread is used for expanding iterables like arrays into individual elements
const array = [1, 2 ,3];
const newArray = [4, 5, 6, ...array];
console.log(newArray);

//use rest operator in the function to accept an arbitrary number of arguments, sum them, and return the result
//rest is used for extracting specific elements from an array while preserving the rest required manual manipulation or looping
function sum(...numbers){
    return numbers.reduce((total, currentNum)=> total + currentNum,0)
}
console.log(sum(10, 20))

//Default parameters
//it takes 2 parameters and returns and returns their product , second parameter has default value = 1
function product(a, b = 1){
    return a * b;
}
console.log(product(2));

//call the same funcction without default value
console.log(product(2, 3));

//Enhanced Object Literals -> group variables from the global scope and form them into javascript objects
//create object with methods and properties
let reptile = "snake";
let insect = "grasshoper";
let mammal = "whale";
let bird = "sparrow";
const animals = {reptile, insect, mammal, bird};
console.log(animals);

//create an object with computed propertiy names based on variables
let shape = "round";
let color = "black";

let ball = {
    shape: shape,
    color: color,
}
console.log(ball);