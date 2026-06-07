// sort() is used to arrange array elements in a specific order.

let tests = ["Signup", "Login", "Payment", "Add_to_cart", "Add_Bank"];

tests.sort();      // Alphabetical sorting
console.log(tests);

console.log("----------------");


let numbers = [2, 4, 3, 6, 7, 5, 1];
numbers.sort();
console.log(numbers);

console.log("----------------");


// Lexicographic / Natural sorting order
let nums = [10, 1, 21, 2, 3];
nums.sort();     // JavaScript converts numbers to strings and compares them alphabetically.
console.log(nums);

console.log("----------------");

// Ascending sorting > by using Arrow function (=>) we can perform 
nums.sort((a, b) => a - b);
console.log(nums);

console.log("----------------");

// Descending sorting
nums.sort((a, b) => b - a);
console.log(nums);