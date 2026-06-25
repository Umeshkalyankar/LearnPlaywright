// alternate way to create object 
let config = {};
config.browser = "chrome";
config.timeout = 3000;
config.testName = "Login_Test_001";

console.log(config);

if (config.browser === "chrome") {
    console.log("I will run my test case.");
}
else {
    console.log("Will not run test case.");
}