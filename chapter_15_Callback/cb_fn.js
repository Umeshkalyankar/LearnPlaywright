// A callback function is a function that is passed as an argument to another function
// and executed by that function.
// Function passed to another function = Callback Function

// Ex. Food delivery

function orderFood(callback) {
    console.log("Food is delivered!");
    callback();
}

function eat() {
    console.log("Eating Food");
}

// first way - Direct name
orderFood(eat);

// Second Way - Anonymous
orderFood(function () {
    console.log("Anonymous Function calling")
});

// Thrid way - Arrow Function
orderFood(() => {
    console.log("Arrow function calling");
});