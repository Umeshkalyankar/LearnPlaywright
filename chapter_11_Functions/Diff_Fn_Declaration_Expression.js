// | Feature                          | Function Declaration | Function Expression          |
// | -------------------------------- | -------------------- | ---------------------------- |
// | Syntax                           | `function login(){}` | `const login = function(){}` |
// | Has its own name?                | Yes                  | Stored in variable           |
// | Can be called before definition? | Yes ✅                | No ❌                         |
// | Hoisted?                         | Yes ✅                | No ❌                         |


// Memory Trick:
// Function Declaration > Can be called before definition
// Function Expression >  Cannot be called before definition

// function declaration
function greet1(name) {
    return `Hello, ${name}`;
}

// function expression
const greet2 = function (name1) {
    return `Hi, ${name1}`;
}

let gr1 = greet1("Umesh - its Function Declaration");
console.log(gr1);

// calling
let gr2 = greet2("John - Its Function Expression");
console.log(gr2);