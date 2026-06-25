// primitive = copy the value
// used with - String, number, boolean

let a = 10;
let b = a;  // assign a into b, but a remains same
b = 99;     // b value changed
console.log(a);
console.log(b);


// objects - copied by REFERENCE , call by ref
// References used for - objects, arrays, functions

let obj1 = { val: 10 };
let obj2 = obj1;   // copy by reference
obj2.val = 99;
console.log(obj1.val);