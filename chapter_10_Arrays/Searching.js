// Searching - Searching means finding whether a value exists in an array and where it is located.

// 1. indexOf() (Most Basic) - Returns the index of the element.
let results = ["pass", "fail", "pass", "error", "fail"];
console.log(results.indexOf("fail")); // 1
console.log(results.indexOf("skip")); // Remember: -1 means "not found".

// lastIndexOf - Searches from end
console.log(results.lastIndexOf("fail")); // 4

// 2. includes() - Returns true or false.
console.log(results.includes("pass")); // true
console.log(results.includes("skip")); // false

// 3. find() - returns first matching element
let nums = [10, 25, 30, 45];
console.log(nums.find(x => x > 20));  // 25

// 4. findIndex() - Returns the index of matching element.
console.log(nums.findIndex(n => n > 20)); // 1

// 5. findLast() - returns last matching element
console.log(nums.findLast(n => n > 20)); // 45

// 6. findLastIndex() - returns index of last matching element
console.log(nums.findLastIndex(n => n > 20)); // 3