// slice() is used to extract a portion of an array and return it as a new array.
// ✅ Returns a new array
// ✅ Does NOT modify the original array

// syntax -  array.slice(startIndex, endIndex)
// logic - startIndex → Included  <=> endIndex → Excluded(end-1)

let arr = [1, 2, 3, 4, 5, 6];
let afterSlice = arr.slice(2, 4); // start at index-2 -> value is 3 & end at index-4 (4-1) -> value is 4
console.log(afterSlice);  // slice result
console.log(arr);        // original array as it is no change

console.log("-------------------");

// From a Position to End (end not provided);
let withend = arr.slice(3);  // start provided but end not - so it will take start to end
console.log(withend);
console.log(arr);

console.log("-------------------");

// Negative Indexes - Start counting from end.
let neg = arr.slice(-2); // start at index -2 to end(rigt hand direction)
console.log(neg);

console.log("-------------------");

// Copy an Array
let copy = arr.slice();
console.log(copy);