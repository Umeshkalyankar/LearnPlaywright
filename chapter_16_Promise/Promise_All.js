// when all are resolve

let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks are fine!");
});

// Promise.all > if all is resolve then only .then() is called if any one is reject .catch() will execute.

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
]).then(function (r) {
    console.log(r);
}).catch(function (err) {
    console.log(err);
});



// promise.settled() - all will be considered doenot matter resolve or reject
// used in reporting

Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason)
    });
});