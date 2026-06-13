// A pure function is a function that:
// Gives the same output for the same input
// Does not change anything outside the function

// pure function - predictable - same output everytime does not change anything:
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);
console.log(result);

// Not pure - unpredictable
// let total = 0;
// function add(value) {
//     total = total + value;
//     return total;
// }
// add(10);

console.log("Real testing example")

// pure > Easy to test
function createTestName(module) {
    return module + " Test";
}
let test = createTestName("Login");
console.log(test);


// Not pure > hard to test
let testStatus = "Pending";
function passTest() {
    testStatus = "Passed";
    console.log(testStatus);
}
passTest();


// Pure Utility Function > Imagine you need to create URL based on environment.
function getUrl(environment) {
    return "https://" + environment + ".com";
}
let url = getUrl("qa");
console.log(url);