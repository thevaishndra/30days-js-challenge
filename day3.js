//Control structures

//If - else statements
//check if no. is +ve, -ve or 0
let n = -6;
if (n > 0){
    console.log("positive");
}
if (n < 0) {
    console.log("negative");
} else console.log("0");

//check if a person is eligible to vote
let age = 20;
if (age <= 18) 
    console.log("not eligible");
else console.log("eligible");

//Nested if - else statements
//to find the largest of 3 no
let a = 4; let b = 2; let c= 8;
if (a > b && a > c)
    console.log("a is largest");

if ( b > c && b > a)
    console.log("b is largest");

else console.log("c is largest");

//Switch case
// determine day of week based on number
let day = 3; 
switch (day) {
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("INVALID ~ DAY");
        break;
}


//assign grades based on score
let score = 69; 
switch (true) {
    case (score >= 80):
        console.log("A");
        break;
    case (score >= 65 && score < 80):
        console.log("B");
        break;
    case (score >= 50 && score < 65):
        console.log("C");
        break;
    case (score >= 35 && score < 50):
        console.log("D");
        break;
    case (score >= 0 && score < 35):
        console.log("F");
        break;
    default:
        console.log("INVALID ~ SCORE");
        break;
}

//Ternary operator to check if number is odd or even
let number = 7;
const numberType = (number % 2 == 0)? 'even':'odd';
console.log(numberType);

//Combining conditions
//check if a year is leap year
let year = 3003;
if (year % 400 == 0) 
    console.log("leap year");
else if (year % 4 == 0 && year % 100 != 0)
    console.log("leap year");
else console.log("NOT A LEAP YEAR")