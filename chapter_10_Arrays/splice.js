let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// splice() is used to add, remove, or replace elements in an array.

// syntax - array.splice(startIndex, deleteCount, item1, item2, ...)
// Remove Elements
// arr.splice(2, 1);  // Start at index-2, remove 1 element - at index 2 element value is 2 - so it will remove this
// console.log(arr);

// Add Elements
// arr.splice(2, 0, 99); // Start at index-2, Remove 0 elements & insert 99
// console.log(arr);

// Replace Elements
// arr.splice(2, 1, 99); // Start at index-2, Remove 1 elements & insert 99
// console.log(arr);

arr.splice(1, 2, 10, 20); // at index-1, remove 2 elements and add 10, 20
console.log(arr);