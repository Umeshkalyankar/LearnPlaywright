
//TDZ - Temporarl Dead Zone
//TDZ - its time between Variable creation & Variable declartion
//TDZ -in this zone variable cannot be used - if used > Reference error will come
//TDZ - its related with let & const variables

//let  with TDZ:
console.log(score); //ReferenceError: Cannot access 'score' before initialization 
let score = 100;

// code breakup
//console.log(score); - TDZ here
// let score =100; - TDZ ends here

//const with TDZ:
console.log(number);  //ReferenceError: Cannot access 'number' before initialization
const number = 18;


// Real-Life Analogy

// Imagine a movie ticket counter.
// Your ticket is booked in system ✅
// But movie hall entry is NOT allowed yet ❌
// Until gate opens.

// That waiting period = TDZ.