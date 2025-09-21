/*## EASY LEVEL (Problems 1-20)

*/

// Variables & Data Types:

// 1. Create variables using `let`, `const`, and `var` to store your name, age, and favorite color. Display them using `console.log()`.

let fName = "Mahir Ahmed Niloy";
const age1 = 26.5;
var color = "Blue";

console.log("Name: ",fName, "\nAge: ",age1, "\nFavourite Color: ",color);

// 2. Write a program that prompts the user for their name and displays "Hello [name]!" using `alert()`.
let fname1 = prompt("Enter your name: ");
alert(`"Hello ${fname1}!"`);

// 3. Create variables to store different data types (string, number, boolean, undefined, null) and use `typeof` to check their types.
let fStr = "Bangladesh";
let districtNo = 64;
let isRich = false;
let undefinedVar;
let nullVar = null;
var undefinedVar1;
const nullVar1 = null;

console.log("Value:",fStr, "Type:", typeof(fStr));
console.log("Value:",districtNo, "Type:", typeof(districtNo));
console.log("Value:",isRich, "Type:", typeof(isRich));
console.log("Value:",undefinedVar, "Type:", typeof(undefinedVar));
console.log("Value:",nullVar, "Type:", typeof(nullVar));
console.log("Value:",undefinedVar1, "Type:", typeof(undefinedVar1));
console.log("Value:",nullVar1, "Type:", typeof(nullVar1));

// 4. Declare a constant for PI (3.14159) and calculate the area of a circle with radius 5.
const pi = 3.14159;
let rad = 5;
let area = pi * rad ** 2;
console.log("Area of a circle is: ",area.toFixed(2));

// Basic Operations

// 5. Create a simple calculator that adds two numbers entered by the user via `prompt()`.
let fNum = parseInt(prompt("Enter first number: "));
let sNum = parseInt(prompt("Enter second number: "));
let result = fNum + sNum;
console.log("The result is: ",result);

// 6. Write a program that converts temperature from Celsius to Fahrenheit using the formula: F = (C × 9/5) + 32.
let cTemp = parseFloat(prompt("Enter temperature in celcuius: "));
let convertToFahrenheit = (cTemp * (9/5)) + 32;
console.log("Temperature in Fahrenheit: ",convertToFahrenheit);

// 7. Calculate the remainder when 17 is divided by 5 using the modulo operator.
let remainder = 17 % 5;
console.log("Remainder: ",remainder);

// 8. Use unary operators to convert a string "25" to a number and increment it by 1.
let var1 = "25";
var1 = parseInt(var1);
var1++;
console.log(var1);

// or solve with unary plus conversion
let var2 = "50";
var2 = +var2; //unary plus conversion 
var2++;
console.log(var2);

// Conditional Statements

// 9. Write a program that checks if a number is positive, negative, or zero.
let number = prompt("Enter a number: ");
if(number>0){
    console.log("Positive Number");
}else if(number < 0){
    console.log("Negative Number");
}else{
    console.log("Zero");
}

//10. Create a program that determines if a person can vote (age >= 18).
let age = parseFloat(prompt("Enter age: "));
if (age > 0) {
  if (age >= 18) {
    console.log("Person can vote");
  } else {
    console.log("Can't vote now.");
  }
}
else{
    console.log("Invalid Age");
}


// 11. Write a program using switch statement to display the day of the week based on a number (1-7).
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log("Day name is:", dayName);

// 12. Check if a year entered by the user is a leap year or not.
let year = prompt("Enter a year:");
year = parseInt(year);

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

