// The typeof operator is used to check the datatype of a value or variable.

let name = "Umesh";
console.log(typeof name);

let age = 25;
console.log(typeof age);

let isLoggedIn = true;
console.log(typeof isLoggedIn);

let city;
console.log(typeof city); // undefined

let data = null;
console.log(typeof data); // object

// Array Example - Arrays are treated as objects in JavaScript.
let fruits = ["apple", "banana"];
console.log(typeof fruits);

// | Value           Output
// | --------------  --------------
// | `"Hello"`       `"string"`
// | `25`            `"number"`
// | `true`          `"boolean"`
// | `undefined`     `"undefined"`
// | `null`          `"object"`
// | `[]`            `"object"`
// | `{}`            `"object"`
// | `function(){}`  `"function"`  
