/* Question 01: Get user to input a number by using prompt("Enter a number") 
and check if the number is a multiple of 5 or not?
Hint: Multiple of 5 are = 5, 10, 15, 20, 25, ...  */

alert("Question solving");

let var1 = prompt("Enter a number: ");
if(var1 % 5 == 0){
    console.log(var1, "is a multiple of 5");
}
else{
    console.log(var1, "is not a multiple of 5");
}


/* Now write a code which can give grades based on marks
    1. 80 - 100: A
    2. 70 - 79: B
    3. 60 - 69: C
    4. 50 - 59: D
    5. 0 - 49; Fail */

let marks = prompt("Enter marks: ")
let grade;
if(marks >= 80.0 && marks <= 100){
    grade = "A";
}
else if(marks >= 70.0 && marks < 80){
    grade = "B";
}
else if(marks >= 60.0 && marks < 70){
    grade = "C";
}
else if(marks >= 50.0 && marks < 60){
    grade = "D";
}
else if(marks >= 0 && marks < 50){
    grade = "Fail";
}
else{
    grade = "Invalid marks";
}

console.log("Grade: ",grade);
