// every() → Returns true only if all elements satisfy the condition.
// some() → Returns true if at least one element satisfies the condition.

let marks = [75, 80, 90, 70];
let checkEvery = marks.every(s => s >= 70);  // All elements satisfies condition
console.log(checkEvery);

let checkEvery1 = marks.every(s => s < 70); // one element fails to satisfy condition
console.log(checkEvery1);

console.log("------------------")

let statusCode = [200, 201, 202];
let checkrResponse = statusCode.every(response => response >= 200);
console.log(checkrResponse);

console.log("------------------")

let checkSome = marks.some(s => s < 75); // one element fails to satisfy condition
console.log(checkSome);

console.log("-----------Mix------------")

const executionTimes = [5, 10, -2];

console.log(executionTimes.every(time => time > 0));
console.log(executionTimes.some(time => time > 0));