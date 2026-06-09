// ex-1
const Hi = function () {
    console.log("Hello, learning function expression");
};
Hi();


// ex-2: calling function expression befor initialization

search();  // the variable search has not been initialized yet.
const search = function () {    // Create variable search & Store function inside it
    console.log("Search");
};
// output:ReferenceError: Cannot access 'search' before initialization


// Breakdown - When JavaScript reaches: search();

// the variable search has not been initialized yet.
// So JavaScript says: "Wait... I don't have a usable value for search yet!" and throws an error.