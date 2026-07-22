class person {

    // constructor - one class is having only one constructor
    constructor() {
        console.log("I will be called automatically when object is created! ")
    }

    //Attributes
    name;
    email;
    salary;
    address;

    //Behaviour
    sleep() { }
    eat() { }
    walk() { }
}

// object creation - new keyword

const obj_ref = new person();

// obj_ref = is called as object reference(address)
// new person() = is the object of class with new keyword
console.log(obj_ref);