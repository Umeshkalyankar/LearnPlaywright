// Increment operator - increase value by 1
// 1. Pre-increment -> ++a :- first increase the value by 1 then assign

// let a = 10;
// ++a;
// console.log(a);

let b = 15;
let c = ++b;
console.log(b);
console.log(c);

// 2. Post-increment -> x++ :- first assign the value then increase by 1 

let x = 50;
let y = x++;
console.log(x);
console.log(y);

//
let m = 15;
// console.log(++m + m);
// console.log(m++ + m);
console.log(++m - m + m++ + ++m);
console.log(m);