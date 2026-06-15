let str = " Hello, World! ";

let upper = str.toUpperCase();
console.log(upper);

let lower = str.toLowerCase();
console.log(lower);

let trim = str.trim();
console.log(trim);

let startTrim = str.trimStart();
console.log(startTrim);

let endTrim = str.trimEnd();
console.log(endTrim);


let msg = "Test: FAIL. Retry: FAIL";
let new_msg = msg.replace("FAIL", "PASS"); // Test: PASS. Retry: FAIL (replace only first)
console.log(new_msg);

let msg_all = msg.replaceAll("FAIL", "PASS");
console.log(msg_all);

console.log(msg.replace(/FAIL/g, "PASS"));

// concatination

"Hello" + " " + "World";

"Hello".concat(" ", "World");

`${"Hello"} ${"World"}`;

// split - will create an array

let r = "pass,fail,skip".split(" ");
console.log(r);

// split & join
let sj = "test_login_pass".split("_").join(" ");
console.log(sj);

// join array
let parts = ["2026", "03", "09"];
let dates = parts.join("-");
console.log(dates);