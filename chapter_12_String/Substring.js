let str = "Login_Test_Pass_001";

// slice(start, end) - negative indexes supported
console.log(str.slice(0, 5)); // o, end-1(5-1=4) = Login
console.log(str.slice(11)); // start at 11 till end
console.log(str.slice(-3));

// substring(start, end) - no negative indexes (treat as 0)
console.log(str.substring(6, 10));

console.log(str.at(0));