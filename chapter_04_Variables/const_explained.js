// const - for values that should not changes
// const - is Block-Scoped but cannot be Re-assigned not Re-declared
// const- must be iniitialized at the time of execution

// this is default choice foe SDET - tes URL's , config values, locators, expected results -
// anything that remain fixed throughout test framework

const BASE_URL = "https://www.facebook.com";
//const BASE_URL = "https://www.twitter.com"; // Re-declaration not allowed

BASE_URL = "https://www.instagram.com";  // Re-assigned not allowed

//TypeError: Assignment to constant variable.

let name = "pending";
name = "complete";

//TypeError: Assignment to constant variable.
