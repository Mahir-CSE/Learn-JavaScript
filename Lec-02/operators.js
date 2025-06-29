// Arithmatic Operators
let a = 10;
let b = 5;

console.log("a", a, " & b", b);
console.log("Addition:", a + b); // Addition
console.log("Subtraction:", a - b); // Subtraction
console.log("Multiplication:", a * b); // Multiplication
console.log("Division:", a / b); // Division

console.log("Modulus:", a % b); // Modulus (Remainder)
console.log("Exponentiation:", a ** b); // Exponentiation (Power)

// Unary Operator: increment and decrement operations
console.log("Increment a/(++a):", ++a); // Increment (Pre-increment)
console.log("Decrement b/(--b):", --b); // Decrement (Pre-decrement)
console.log("Increment a/(a++):", a++); // Increment (Post-increment)
console.log("Decrement b/(b--):", b--); // Decrement (Post-decrement)
console.log("Final a:", a, " & Final b:", b); // Final values after

// Assignment Operators
let x = 10;
let y = 5;
console.log("x", x, " & y", y);
x += y; // x = x + y
console.log("After x += y, x:", x); // 15
x -= y; // x = x - y
console.log("After x -= y, x:", x); // 10
x *= y; // x = x * y
console.log("After x *= y, x:", x); // 50
x /= y; // x = x / y
console.log("After x /= y, x:", x); // 10
x %= y; // x = x % y
console.log("After x %= y, x:", x); // 0
x **= y; // x = x ** y
console.log("After x **= y, x:", x); // 0 (since 0 raised to any power is 0)

// Comparison Operators
let p = 10;
let q = 20

console.log("p", p, " & q", q);
console.log("Equal (==):", p == q); // Equal (value)
console.log("Strict Equal (===):", p === q); // Strict Equal (value and type)
console.log("Not Equal (!=):", p != q); // Not Equal (value
console.log("Strict Not Equal (!==):", p !== q); // Strict Not Equal (value and type)
console.log("Greater Than (>):", p > q); // Greater Than
console.log("Less Than (<):", p < q); // Less Than
console.log("Greater Than or Equal (>=):", p >= q); // Greater Than or
console.log("Less Than or Equal (<=):", p <= q); // Less Than or Equal

let var1 = 10;
let var2 = "10";
console.log("var1", var1, " & var2", var2);
console.log("Equal (==):", var1 == var2); // Equal (value)
console.log("Strict Equal (===):", var1 === var2); // Strict Equal (value and type)
console.log("Not Equal (!=):", var1 != var2); // Not Equal (value)
console.log("Strict Not Equal (!==):", var1 !== var2); // Strict Not Equal (value and type) 

// Logical Operators
let condition1 = true;
let condition2 = false;
console.log("condition1", condition1, " & condition2", condition2);
console.log("Logical AND (&&):", condition1 && condition2); // Logical AND
console.log("Logical OR (||):", condition1 || condition2); // Logical OR
console.log("Logical NOT (!):", !condition1); // Logical NOT

// Bitwise Operators
let bit1 = 5; // 0101 in binary
let bit2 = 3; // 0011 in binary
console.log("bit1", bit1, " & bit2", bit2);
console.log("Bitwise AND (&):", bit1 & bit2); // Bitwise AND
console.log("Bitwise OR (|):", bit1 | bit2); // Bitwise
console.log("Bitwise XOR (^):", bit1 ^ bit2); // Bitwise XOR
console.log("Bitwise NOT (~):", ~bit1); // Bitwise NOT
console.log("Left Shift (<<):", bit1 << 1); // Left Shift
console.log("Right Shift (>>):", bit1 >> 1); // Right Shift
console.log("Unsigned Right Shift (>>>):", bit1 >>> 1); // Unsigned Right Shift

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote:", canVote); // Ternary Operator

// Typeof Operator
let variable = "Hello, World!";
console.log("Type of variable:", typeof variable); // Typeof Operator



