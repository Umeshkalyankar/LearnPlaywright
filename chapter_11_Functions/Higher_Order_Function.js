// A function that takes another function as an argument
// OR
// returns a function is called a Higher Order Function.

// Case 1: Function as Argument
function executeTest(testCase) {   // executeTest a Higher Order Function & as it receives a function
    testCase();
}
function login() {

    console.log("Login Test");
}
executeTest(login);

// Case 2: Returning a Function
function createLogin() {

    return function () {
        console.log("Login");
    };
}
let test = createLogin();
test();