
// Hositing: Javascript reads Declartion before Running the code
//         : It means JavaScript moves 'DECLARTION' at top before 'EXECUTION'

console.log(greeting);  // output will be - undefined
var greeting = "Hello Hositing";
console.log(greeting);

//Behind the scenes:

//var greeting; <-- Hosited with undefined
//console.log(greeting);  <-- undefined
//var greeting = "Hello Hoisting"  <-- assignment stays in place
// console.log(greeting);  <-- output console: Hello Hositing


// var a;
console.log(a);
var a = "Umesh";
console.log(a);  