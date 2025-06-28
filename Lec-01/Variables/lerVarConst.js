// Let: Can not be redeclared, can be updated.
// Const: Can not be redeclared, can not be updated.
// Var: Can be redeclared, can be updated.

//By default if a variable is declared without any keyword, it is treated as a global variable.
//By defalut if a variable is declared with var, it is treated as a global variable.
//By default if a variable is declared with let or const, it is treated as a block scoped variable. Block
// scoped variables are only accessible within the block they are defined in, such as within a function or a loop.
// Let and const variables can be redeclared in different blocks, but not in the same block.
// In JavaScript, variables can be declared using var, let, or const keywords.
//By default if a Let variable is declared without any value, it is treated as undefined.
//By default if a const variable is declared, it must be initialized with a value.

let cgpa = 3.4;
cgpa = 3.75; // updating the value of cgpa
console.log("Updated CGPA:", cgpa);

const firstName = "Mahir"; // cannot be updated
// firstName = "John"; // This will throw an error because const cannot be updated
console.log("First Name:", firstName);

var lastName = "Ahmed"; // can be updated
var lastName = "Smith"; // updating the value of lastName
console.log("Last Name:", lastName);