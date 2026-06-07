// concat() is used to merge (join) two or more arrays.
// ✅ Returns a new array
// ✅ Does NOT modify original arrays

// syntax : array1.concat(array2)

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8];

//1. join 2 arrays
let x = a.concat(b);
console.log(x);

//2. join 3 arrays
let y = a.concat(b, c);
console.log(y);

console.log("-----------------");

// Another way of Array concat is - Spread(...)

let z = [...a, ...b];
console.log(z);

console.log("-------------------------------");

// Interview question:

const smoke = ["Login"];
const regression = ["Checkout"];

const allTests = smoke.concat(regression);
console.log(allTests);