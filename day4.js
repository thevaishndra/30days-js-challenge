//For - loop
//print no.s from 1 - 10
for (let i = 1; i <= 10; i++){
    console.log(i);
};

//print multiplication of 5
let n = 5;
for (let i = 1; i <= 10; i++){
    console.log(`${n} * ${i} = ${n*i}`);
};

//While - loop
//calculate sum of no.s 1 - 10
let number = 1; let sum = 0
while ( number <= 10){
    sum = sum + number;
    number++;
}
console.log(sum);

//print no.s 10 - 1
let num = 10;
while ( num >= 1){
    console.log(num);
    num = num - 1;
}

//Do - while loop
//print no.s 1 - 5
let no = 1;
do {
    console.log(no);
    no = no + 1;
} while ( no <= 5)

//factorial 
let factNumb = 5; let factorial = 1;
do {
    factorial = factorial * factNumb;
    factNumb = factNumb - 1;
} while (factNumb > 0)
    console.log(factorial);

//Nested loops
//left star triangle
let pattern = "";
for(let i = 0; i < 5; i++){
    for(let j = 0; j <= i; j++){
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);

//Loop control statements
//print 1 - 10, skip 5 using continue
for (let i = 1; i <= 10; i++){
    if ( i == 5) continue;
    console.log(i);
};

//print 1 - 10, stop when 7 using break
for (let i = 1; i <= 10; i++){
    if ( i == 7) break;
    console.log(i);
};