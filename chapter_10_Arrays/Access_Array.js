// Accessing & Modifying
let statues = ["pass", "fail", "skip"];
console.log(statues[0]);
console.log(statues[2]);

console.log(statues.at(-1));   // at - is a function of js
console.log(statues.at(-2));
console.log(statues.at(-3));
// console.log(statues.at(-4));  // undefined

// modify
statues[1] = "blocked";  // at index-1 replace value
console.log(statues);