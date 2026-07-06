// Q.1

// let t1 = Promise.resolve("Login: PASS");
// let t2 = Promise.resolve("Search: PASS");
// let t3 = Promise.resolve("Logout: PASS");

// Promise.all([t1, t2, t3]).then(function (results) {
//     console.log(results);
// })

// Q.2 - in promise.all > anyone is fail then result will be fail

let t1 = Promise.resolve("PASS");
let t2 = Promise.reject("FAIL");
let t3 = Promise.resolve("PASS");

Promise.all([t1, t2, t3]).then(function (results) {
    console.log("All:", results);
})
    .catch(function (err) {
        console.log("Stopped:", err);
    });