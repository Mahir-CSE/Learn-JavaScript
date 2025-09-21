// String Practice

/* 
Question 01: Prompt the user to enter their fullname, Generate a username for them based on the input.

    Conditions:
        -> start username with @
        -> then fullname
        -> end with the stringLength
        -> Example: "Mahir Ahmed Niloy" -> username: @mahirAhmedNiloy15

*/

let fName = prompt("Enter your fullname: ");
fName = fName.replace(/\s+/g , "").trim().toLowerCase();
let username = `@${fName}${fName.length}`
console.log(username);
