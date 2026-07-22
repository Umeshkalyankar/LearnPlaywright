class car {
    // CAB always class consist these 

    // constructor
    constructor(name, price, model, color) {
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }
    // this - current class object - changed according to object creation
    // Attributes - whatever value gives in the constructor that becomes attributes, whether we create or not

    // Behaviour (Methods of class)
    drive() {
        console.log("I am driving", this.name);
    }
}

// object creation
const c1 = new car("BMW", 100, "520B", "Black");
// console.log(c1.name);
// console.log(c1.price);
// console.log(c1.model);
// console.log(c1.color);
console.log(c1);
c1.drive();

const c2 = new car("Honda", 20, "City", "White");
console.log(c2);
c2.drive();