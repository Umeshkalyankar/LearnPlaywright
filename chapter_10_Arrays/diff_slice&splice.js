// Difference Between slice() and splice()

// slice()  → Extracts elements and returns a new array without changing the original array.
// splice() → Adds/removes/replaces elements and modifies the original array.

const testCases = ["Login", "Search", "Checkout", "Logout"];

// Run only first 2 tests - slice
let smokeTests = testCases.slice(0, 2);
console.log(smokeTests);
console.log(testCases);

// Remove Checkout test - splice
console.log(testCases.splice(2, 1)); // at index-2, delete 1 test case