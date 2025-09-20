// if, else, else if statements

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}
else if (mode === "light") {
    color = "white";
}
else {
    color = "unknown";
}

console.log("Selected color is:", color); // Selected color is: black

//Example of ternary operator
let number = 7;
let result = (number < 0) ? "Negative" : (number > 0) ? "Positive" : "Zero";
console.log("The number is:", result); // The number is: Positive

//switch statement
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

console.log("Day name is:", dayName); // Day name is: Wednesday