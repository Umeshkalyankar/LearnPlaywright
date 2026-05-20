
let a = 10; //Global scope
console.log(a);

// Defination of the function

function printHello() {
    console.log("Hi, var is function scoped");

    let a = 20; // local scope
    console.log(a);

    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log("F ->:", a);
}

console.log("G ->", a); // global calling

printHello();