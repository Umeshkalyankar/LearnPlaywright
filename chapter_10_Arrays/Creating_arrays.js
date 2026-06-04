// Craeting arrays

let browsers = ["Chrome", "Safari", "Firefox"]; // Array Literal - preferred

// Array constructor

let scores = new Array(3);  // size of array 
scores[0] = 3;
scores[1] = 2;
scores[2] = 1;

let scores2 = new Array(1, 2, 3);
console.log(scores);
console.log(scores2);


let numbers = new Array(100, 200, 300, 400); //0-3:4
console.log(numbers);

// Array.of
let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// Array.from
let chars = Array.from("hello");
console.log(chars);

// let numbers1 = Array.from(123456789);
// console.log(numbers1);