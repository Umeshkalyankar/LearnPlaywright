// Check if Variable is an Array > returns True or False
// syntax: Array.isArray()

let num = [1, 2, 3];
// console.log(Array.isArray(num));
let check = Array.isArray(num); // true
console.log(check);

let num1 = "1,2,3";
console.log(Array.isArray(num1));  // false