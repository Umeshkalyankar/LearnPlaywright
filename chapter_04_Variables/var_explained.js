var browser = "chrome";

var browser = "firefox"; // redeclaration allowed

browser = "edge"; // re-assignement allowed

// var is variable which cannot be trusted, it changes its value according to situation
// in framework design we will not use "var" variables
// real life example: Flipper, who not stick on his commitment

// var == trump, dual-faces, not trust-worthy

// for, functions

var testCases = ["Login", "Logout", "Signup"];
for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("loop counter leaked outside:", i);

// var is a function-scoped

var a = 10;

console.log(a); // global scope - avaialble to every scope

function printHello() {
    console.log("Hi, im learning about var - variable");
    var a = 20; //Local scope - value reassigned
    console.log(a);

    if (true) {
        var a = 30;
        console.log(a); //a=30
    }
}

printHello();