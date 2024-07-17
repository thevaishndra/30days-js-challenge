//Function declaration
//check if a no. is odd or even
function checkNum(n){
    if(n % 2 === 0)
       console.log("even");
    else
        console.log("odd");

}
checkNum(197);

//calculate square of number and return result
function squareNum(n){
    const result = n * n;
    return result;
}
console.log(squareNum(96));

//Function expression
//find max of 2 no.s
const maxNum = function max(a , b){
    if(a == b) console.log("both are equal")
    if( a > b) return a;
    else return b;
}
console.log(maxNum(10, 10));

//concatenate 2 strings 
const concatenateStr = function string(a , b){
    return a + b;
}
console.log(concatenateStr("hello" , "kitty"));

//Arrow functions
//calculate sum of 2 no.
const sum = (a, b) => {
    console.log( a + b);
}
sum(6, 8);

//check if a string contains a specific character, return boolean value
const myString = (string , character) => {
    if(string.indexOf(character) > -1)
        return 1;
    else return 0;
}
console.log(myString("vibing to songs <3" , "<"));

//Function Parameters and Default Values
//takes 2 parameters and return their product. give default value for second parameter
function product(a , b = 9){
    return a * b;
}
console.log(product(6 , 2));
console.log(product(6));//when no value is asssigned it takes default value

//takes person's name and age, return greeting message, default value for age
function greetings(name, age = 20){
console.log(`Happy Birthday! ${name} You turned ${age} today. May god bless you`);
}
console.log(greetings("Varun"));

//Higher order functions ->returns another function or can pass another function as an argument
//takes the function and number, and calls that function many times
function higherOrderFunc(callback , a){
    for (let i = 1; i <= a; i++){
        callback();
    }
}
function callbackFunc() {
    console.log("Callback function is executed.");
}
higherOrderFunc(callbackFunc, 2);

//takes 2 function and value, applies first function to value and second function to result
function higherOrderFunction(func1, func2, val){
    const result1 = func1(val);
    const result2 = func2(result1);
    return result2;
}
function func1(val) {
    return val + 2;
}
function func2(val) {
    return val + 3;
}
console.log(higherOrderFunction(func1, func2, 2));