// ========================================
// JAVASCRIPT IDENTIFIER RULES
// ========================================

// RULES FOR IDENTIFIERS:
// 1. Start with a letter, $ (dollar sign), or _ (underscore)
// 2. Can contain letters, digits, $, and _
// 3. Cannot start with a digit
// 4. Cannot contain spaces or punctuation like -
// 5. Cannot use reserved keywords

// ========================================
// ALLOWED IDENTIFIERS - EXAMPLES
// ========================================

// Starting with letter
let myVar;
let userName;
let tempValue = 10;

// Starting with underscore
let _privateVar;
let _A1 = 100;
let __internal = "private";

// Starting with dollar sign
let $salary = 5000;
let $total = 0;
let $productName = "Laptop";

// With digits (but not at start)
let var1 = "first";
let count2 = 20;
let test123 = true;
let a1b2c3 = "alphanumeric";

// Camel case (common convention)
let firstName = "John";
let lastName = "Doe";
let calculateTotal = function () { };

// Snake case (common convention)
let user_name = "Alice";
let total_amount = 500;
let is_active = true;

// Pascal case (for constructors/classes)
let UserProfile = {};
let DatabaseConnection = {};

// ========================================
// NOT ALLOWED IDENTIFIERS - EXAMPLES
// ========================================

// ❌ Starting with digit
// let 1stValue = 1;           // ERROR: Identifier cannot start with digit
// let 2ndName = "test";       // ERROR: Starts with number
// let 123abc = 10;            // ERROR: Starts with number

// ❌ Containing hyphens
// let user-name = "Bob";      // ERROR: Hyphens not allowed
// let my-var = 5;             // ERROR: Invalid character
// let first-name = "Jane";    // ERROR: Hyphen is not valid

// ❌ Containing spaces
// let my var = 10;            // ERROR: Space not allowed
// let user name = "test";     // ERROR: Spaces are invalid
// let total count = 5;        // ERROR: Cannot have spaces

// ❌ Containing special characters (except $ and _)
// let @name = "test";         // ERROR: @ not allowed
// let #count = 10;            // ERROR: # not allowed
// let user&id = 5;            // ERROR: & not allowed
// let price! = 100;           // ERROR: ! not allowed
// let my.var = "test";        // ERROR: . not allowed (except for object properties)
// let user/id = 1;            // ERROR: / not allowed
// let var* = 10;              // ERROR: * not allowed

// ❌ Reserved keywords
// let let = 5;                // ERROR: 'let' is reserved
// let const = 10;             // ERROR: 'const' is reserved
// let var = 15;               // ERROR: 'var' is reserved
// let if = true;              // ERROR: 'if' is reserved
// let function = () => {};    // ERROR: 'function' is reserved
// let return = 5;             // ERROR: 'return' is reserved
// let class = {};             // ERROR: 'class' is reserved
// let new = 10;               // ERROR: 'new' is reserved
// let this = {};              // ERROR: 'this' is reserved
// let true = 1;               // ERROR: 'true' is reserved

// ========================================
// PRACTICAL EXAMPLES - COMPLETE CODE
// ========================================

// Valid variable declarations
let myVar = "Hello";
let user_name = "John";
let $total = 1000;
let _privateValue = 42;
let count123 = 5;
let isActive = true;

// Valid in different declaration styles
const productName = "Laptop";
var MAX_ATTEMPTS = 3;
let data_2024 = [];

// Using valid identifiers in functions
function calculateSum(num1, num2) {
    let _result = num1 + num2;
    return _result;
}

// Valid in object properties
const user = {
    firstName: "Alice",
    lastName: "Smith",
    $price: 99,
    _id: 123,
    email2024: "alice@example.com"
};

// Valid in class (if supported)
class UserProfile {
    constructor(name, _id) {
        this.name = name;
        this._id = _id;
        this.$status = "active";
    }
}

// ========================================
// SUMMARY TABLE
// ========================================

/*
╔════════════════════════════════════╦═════════════════════════════════╗
║         IDENTIFIER TYPE            ║          EXAMPLE                ║
╠════════════════════════════════════╬═════════════════════════════════╣
║ Valid - starts with letter         ║ myVar, userName, tempValue      ║
║ Valid - starts with underscore     ║ _var, __private, _123           ║
║ Valid - starts with dollar         ║ $total, $salary, $name          ║
║ Valid - with digits (not start)    ║ var1, count2, test123           ║
║ Invalid - starts with digit        ║ 1var, 2test, 123abc (❌)        ║
║ Invalid - contains hyphen          ║ user-name, my-var (❌)          ║
║ Invalid - contains space           ║ my var, user name (❌)          ║
║ Invalid - special chars            ║ @name, #count, user&id (❌)     ║
║ Invalid - reserved keywords        ║ let, const, if, return (❌)     ║
╚════════════════════════════════════╩═════════════════════════════════╝
*/