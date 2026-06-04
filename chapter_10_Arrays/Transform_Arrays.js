// Transform = Take existing array data and convert it into new data.
// Think of it as: Old Data  --->  New Data

// transformation method is - map()
// map() is an array method used to transform each element of an array and return a new array.
// map() does NOT change the original array. - but changes values as per condition

let scores = [50, 80, 91, 60, 75];
let grades = scores.map(s => s > 70 ? "pass" : "fail"); // ternary operator used as condition
console.log(grades);

// example 
const tests = ["login", "search", "checkout"];
const upperTests = tests.map(test => test.toUpperCase());
console.log(upperTests);

console.log("-------------");

// filter() - selects only the items that match a condition. & fail ones neglect
let passing = scores.filter(s => s > 70);
console.log(passing);

console.log("-------------");

// example
const testso = ["Login", "Search", "Checkout"];
const result = testso.filter(test => test === "Login");
console.log(result);

console.log("-------------");

// reduce() - combines all array elements into a single value.
let total = scores.reduce((a, b) => a + b, 0); // basically its do sum opration
console.log(total);

console.log("-------------");

// example
const testDurations = [{ test: "Login", time: 4 }, { test: "Search", time: 6 }, { test: "Checkout", time: 8 }];
// Calculate total suite execution time.
const totalTime = testDurations.reduce((sum, test) => sum + test.time, 0);
console.log(totalTime);

console.log("-------------");

// flat() - flattens nasted arrays into single
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());