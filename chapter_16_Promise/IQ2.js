// Browser stack question

Promise.resolve("Start")
    .then(function (value) {
        console.log(value);
        throw new Error("Broke at step 2");
    })
    .then(function () {
        console.log("This will not run");
    })
    .catch(function (err) {
        console.log("Caught:", err.message);
    });


// Q.2
Promise.reject("Test Failed")
    .then(function (data) {
        console.log("Data:", data);
    })
    .catch(function (error) {
        console.log("Error:", error);
    })
    .finally(function () {          // will always run
        console.log("Cleanup done");
    })


// Q.3
Promise.resolve("Quick Win").then(function (msg) {
    console.log(msg);
});
Promise.reject("Quick Loss").catch(function (msg) {
    console.log(msg);
});