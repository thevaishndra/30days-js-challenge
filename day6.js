//Arrays

//Array creation & access
//create array of no.s from 1 - 5
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//access first and last elements of array
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

//Array methods (Basic)
//push -> add a new no. at the end of array
numbers.push(91);
console.log(numbers);

//pop -> remove last element from the array
numbers.pop();
console.log(numbers);

//shift -> remove first element from array
numbers.shift();
console.log(numbers);

//unshift -> add new no. to beginning of array
numbers.unshift(7);
console.log(numbers);//new array = [7, 2, 3, 4, 5] and not numbers,

//Array methods (Intermediate)
//use Map to create a new array where each no. is doubled
const doubled = numbers.map((number) => {
    return number * number
})
console.log(doubled)

//use Filter to create a new array with only even no.
const even = numbers.filter((number) => {
    return number % 2 == 0;
})
console.log(even);

//use Reduce to calculate sum of all no
const sum = numbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0)//0 -> value given to prevValue, currentValue is numbers in array
console.log(sum);

//Array iteration
//for loop to iterate over array
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//forEach method to iterate over array
numbers.forEach((number) => {
    console.log(number);
});

//Multi - dimensional array 
//create 2d array [matrix]
let subjectScores = [
    ["English", 90, "A"],//0, 1 ,2
    ["Maths", 65, "C"],
    ["Science", 75, "B"]
];
console.log(subjectScores);

//access any element
 console.log(subjectScores[0][2]);
  
 //2d array manipulation script
subjectScores.push(["Social Science", 80, "B"]);
console.log(subjectScores);
subjectScores.pop();
console.log(subjectScores);
subjectScores.shift();
console.log(subjectScores);