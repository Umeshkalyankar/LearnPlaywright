// The ternary operator is a short way to write if-else condition
// Syntax:  condition ? trueValue : falseValue
// Simple Meaning:
// If condition is true → first value runs
// If condition is false → second value runs

// ex.
// let rj_age = 18;
// let rj_will_goa = rj_age > 18 ? "RJ will go to goa" : "No goa";
// console.log(rj_will_goa);

// ex.
// let isLoggedIn = false;
// let message = isLoggedIn ? "Welcome User" : "Please Login";
// console.log(message);

// ex.
// let isCI = true;
// let browerMode = isCI ? "headless" : "headed";
// console.log("Launching browser in:", browerMode, "mode");


// Task - max number between 2 numbers
// let a = 10; b = 5;
// let max_num = a > b ? "a is max" : "a is min";
// console.log(max_num);

// max number between 3 numbers
a = 20, b = 10, c = 5;
let max_no = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(max_no);
