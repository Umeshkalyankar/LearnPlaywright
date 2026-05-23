// The ternary operator is a short way to write if-else condition
// Syntax:  condition ? trueValue : falseValue
// Simple Meaning:
// If condition is true → first value runs
// If condition is false → second value runs

// ex.
let rj_age = 18;
let rj_will_goa = rj_age > 18 ? "RJ will go to goa" : "No goa";
console.log(rj_will_goa);

// ex.
let isLoggedIn = false;
let message = isLoggedIn ? "Welcome User" : "Please Login";
console.log(message);

// ex.
let isCI = true;
let browerMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browerMode, "mode");