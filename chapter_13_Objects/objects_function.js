// function inside the object

let user = {        // object
    name: "Admin",
    login() {       // function also called as Method

        console.log("Login Successful");
    }
};
user.login();      // objectName.functionName();


// function with parameters
let user1 = {
    name1: "Admin",
    greet(message) {
        console.log(message + " " + this.name1);  // this means: Current object
    }
};
user1.greet("Welcome");


// multiple parameters
let calculator = {
    add(a, b) {
        console.log(a + b);
    }
};
calculator.add(10, 20);