function greetByName(name) {
    console.log("Hi", name);
}
greetByName("Umesh");

let result = greetByName("John");  // result has undefined in it - as no return
console.log(result);

console.log("---------------------") // undefined example no return

function begger(money) {
    console.log("Thanks", money);
}
let returnMeSomething = begger(100);
console.log(returnMeSomething);

console.log("---------------------") // function with multiple parameter

function search(product, category) {
    console.log(product);
    console.log(category);
}

search("iPhone", "Mobiles");

console.log("---------------------") // Argument missing for parameter - undefined

function login(user) {
    console.log(user);
}

login();

console.log("-------------------------------"); // another example

function checkout(product, quantity) {
    console.log(product);
    console.log(quantity);
}

checkout("Laptop");  // Argument missing for 2nd parameter - result: undefined