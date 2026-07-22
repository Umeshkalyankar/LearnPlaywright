// Parent Class

class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}

// Child Class
class Dog extends Animal {

    constructor(name, breed) {

        super(name); // Call Parent Constructor

        this.breed = breed; // Child Property
    }

    bark() {
        console.log(this.name + " is barking"); // Child Method
    }
}

// Create Object
let dog = new Dog("Bruno", "Golden Retriever");

dog.eat(); // Parent Method (Inherited)

dog.bark(); // Child Method

console.log(dog.breed); // Child Property  