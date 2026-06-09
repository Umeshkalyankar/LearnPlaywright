// function expression normally
const greet = function () {
    console.log("Hello");
}
greet();

// Arrow function
const greet1 = () => {
    console.log("Hi - this is Arrow Function");
}
greet1();

// another way when no parameter
const greet2 = () => console.log("Hi - this is another example of Arrow Function");
greet2();

// arrow function with return
const greet3 = (name) => {
    return name;
}
let g3 = greet3("umesh");
console.log(g3);

// another way of arrow function with return
const greet4 = (name) => "Hi " + name;
let g4 = greet4("umesh");
console.log(g4);

// 
const getUser = () => "admin";
let gu = getUser();
console.log(gu);

// multiple parameter
const add = (a, b) => a + b;

let result = add(10, 20);
console.log(result);

// 
const checkout = product => product;
let item = checkout("iPhone");
console.log(item);