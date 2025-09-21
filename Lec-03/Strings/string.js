// String

//create string
let str1 = "Mahir";
let str2 = 'Niloy';

//inbuild properties
console.log(str1.length);

/*String index/indices

first position - index: 0
M a h i r    A h m e d
0 1 2 3 4  5 6 7 8 9 10   ; here 5 is the index of space

*/
console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
console.log(str1[3]);
console.log(str1[4]);

console.log(str2[0]);
console.log(str2[1]);
console.log(str2[2]);
console.log(str2[3]);
console.log(str2[4]);

//template literals
let specialStr = `This is template literal string`;
console.log(specialStr);
console.log(typeof specialStr);

//use case of template literals
let obj1 = {
    item : "Bat",
    price : 2500
}
let output = `the price of ${obj1.item} is ${obj1.price}`; //to include a variable, use ${reference}
console.log(output);

/*inbuild string functions or methods

-> Methods are basically block of code that execute a certain tasks
-> For example log(); This method actually prints anything based on the given code

Sample Methods:
-> str.toUpperCase() : convert lower case string to uppercase and create a new string by not changing the original string
-> str.toLowerCase() : convert upper case string to lowercase
-> str.trim(): remove whitespaces from start and end of the string
-> str.slice(start, end?): here start is a must have parameter, end is optional + noninclusive
-> str1.concat(str2)
-> str.replace(searchVal, newVal)
-> str.charAt(idx)
-> Strings are immutable; can't change in the original string


*/