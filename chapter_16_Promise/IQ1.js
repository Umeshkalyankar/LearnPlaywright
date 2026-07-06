// Q.1
let p = new Promise((resolve, reject) => {
    resolve(42);
});
p.then((value) => {
    console.log("Answer:", value);
});

// Q.2

let p1 = new Promise((resolve, reject) => {
    reject("Something broke");
});
p1.catch((error) => {
    console.log("Caught:", error);
});


// Q.3

let p2 = Promise.resolve(5);

p2.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result:", val);
});

// Q.4
Promise.resolve(1)
    .then(function (vale) {
        console.log(vale);
        return vale + 1;
    })
    .then(function (vale) {
        console.log(vale);
        return vale + 1;
    })
    .then(function (vale) {
        console.log(vale);
    });