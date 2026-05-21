// undefined → Variable declared but value not assigned yet. - Javascript itself set this automatically
// null → Variable exists but the devloper intentionally kept empty or assigned null value
// it is intentional absence of any value

//1. undefined
let email; // declared but not assigned
console.log(email); //undefined
console.log(typeof email); //undefined

// undefined - with function
function greet() {
    //no return statement
}
console.log(greet); //undefined

//2. null
let profilePicture = null; // developer explicitly says "no profile picture yet" - intentionally
console.log(profilePicture); //undefined
console.log(typeof profilePicture);

// Key Difference
// undefined	                null
// No value assigned	        Empty value assigned intentionally
// Given by JavaScript	        Given by developer



