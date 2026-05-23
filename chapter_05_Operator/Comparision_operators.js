// comparision operator - Used to compare values

//  Operator     Meaning
//  -------- | ------------------
//  `>`      | Greater than
//  `<`      | Less than
//  `==`     | Equal value - loose operator - does not check type
//  `===`    | Equal value + type - Strict operator - check value & type >> Always used in automation 
// `!`       | Not
//  `!=`     | Not equal to
// `!===`   / 

console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 11);
console.log(10 <= 12);
console.log(10 == "10"); // true - loose comaprision
console.log(10 === "10"); // false - strict comparision

console.log(0 == ""); // true
console.log(0 === ""); // false
console.log("" == "0"); // false - transitory broken
console.log(0 == false); // true
console.log(null == 0); // false

console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == "1"); // true
console.log(true == 2); // false

console.log(5 != 5); // false
console.log(5 !== "5"); // true
// console.log(5 !=== "5"); // This doesn't exists