class TestCase {

    constructor(name, status, priority) {       // Parametrized constructor
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}

let loginTC = new TestCase("Login Test", "Pass", "P0");
let signupTC = new TestCase("Signup Test", "Fail", "P1");

loginTC.display();  // calling > objectName.methodName();
signupTC.display();