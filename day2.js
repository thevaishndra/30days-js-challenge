//Arithmetic operators
let num1 = 5;
let num2 = 7;
const sum = num1 + num2;
const subtract = num1 - num2;
const multiply = num1 * num2;
const divide = num1 / num2;
const remainder = num1 % num2;
 console.log(sum);
 console.log(subtract);
 console.log(multiply);
 console.log(divide);
 console.log(remainder);

//Assignment operators
let number = 8;
number += 5;
 console.log(number);
number -= 8;
 console.log(number);

//Comparison operators
if (num1 > num2){
    console.log("num1:", num1);
} else console.log("num2:", num2);

let a = 9;
if(a <=10)
    console.log("less than 10");

let b = 11;
if(b >= 10)
    console.log("more than 10");


let x = 34; let y ="34"
if(x == y)//to check value
    console.log("x is equal to y");
if(x === y){//to check datatype
    console.log("x is equal to y");
} else console.log("x is not equal y");//as number and string can't be equal

//logical operator
if(x === y && x==y){
    console.log("both conditions are true");
} else console.log("both are not true")

if (x === y || x==y)
    console.log("one condition is true");

if (x !== y) console.log("not equal");

//ternary operator
let age = 20;
const adult = (age >= 18)? 'adult':'minor';//can be used instead of if-else
console.log(adult);

//if a number is positive or negative
let n = -8
const integerType = (n > 0)? 'positive':'negative';
console.log(integerType);