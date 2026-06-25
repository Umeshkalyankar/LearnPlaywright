// Object > key & value

let student1 = { name: "Raj", age: 26 };
let student2 = { name: "Rahul" };
let student3 = { name: "Jiya", age: 25, phone: 97737437 };

// key will not be in double quotes

// JSON - when key is in double qotes its json data
let JSON_student = { "name": "umesh", "age": 29, "phone": 8439067 };

let a = { status: "pass" };
// console.log(a.status); // dot notation
// console.log(a["status"]); // bracket notation

let b = a;  // this is not copy - it will copy by reference
b.status = "fail";
console.log(a.status);
console.log(b.status);