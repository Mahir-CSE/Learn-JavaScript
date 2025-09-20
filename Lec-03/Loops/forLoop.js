/* For loop
syntax: 
    for (initialization; stopping condition; updation or iteration)
    
Variables that are initialize inside a loop will only workable inside the loop, need
to redeclare if we want to use the same variable outside the loop

Infinite loops: the never ends/ stopping condition is always true


*/

//basic example
for(let i = 1; i <= 5; i++){
    console.log(i);
}

//sum of 1 to n numbers
let sum = 0;
let n = parseInt(prompt("Enter a range"));
for(let i = 1; i <= n; i++){
    sum = sum + i;
}
console.log("Sum of 1 to ",n, " is ",sum);

// for of loop

let iVar = "Bangladesh";
let size = 0;

for (let i of iVar){
    console.log(i);
    size++;
}
console.log("String Size: ",size);

// for in loop

let student1 = {
    name : "Mahir Ahmed",
    id : "19101114",
    cgpa : 3.70,
    isGraduate : true,
    age : 26
}

for(let j in student1){
    console.log("Key: ", j, "Value: ", student1[j]);
}
