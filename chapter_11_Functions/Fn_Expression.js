// Function Expression: storing function into a variable

const login = function () {
    console.log("Admin");
}
login();

// Logic:
// Create variable login
// Store function inside it
// calling is same in both Function Declaration & in Expression

const greet = function (name) {
    return `Hello, ${name}`;
}
let hi = greet("Umesh");
console.log(hi);