function sumOfTwoNumber(a, b) {
    return a + b;
}
let sum = sumOfTwoNumber(4, 9);
console.log(sum);

console.log("------------------"); // return concept >

function DisplayProducts(product1, product2) {
    return product1; // Function exits here  - Function immediately stops executing.
    return product2; // Never executed - because the function has already ended.
}
let buyProduct = DisplayProducts("Iphone", "Laptop");
console.log(buyProduct); // output - Iphone

// Golden Rule:

// A function can execute many console.log() statements, but only one return statement can successfully return a value.

// When JavaScript encounters a return statement,
// it immediately exits the function & Any code written after return in the same function will never execute.
