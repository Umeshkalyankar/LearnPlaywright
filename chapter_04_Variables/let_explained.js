// let - modern way of chanfing values
// its block- spaced ex. {}, []
// can be Re-assigned but cannot be Re-declared is same scope(block)
// it is Hoisted but not initialized, so accessing its before declartion throes - Reference error

//let - block-scoped

let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;

console.log("retry attempt:", retryCount);

//let retryCount = 5;
// SyntaxError: Identifier 'retryCount' has already been declared
// SyntaxError: Re-declartion not allowed

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside Block:", executionTime); //1200
}

console.log(executionTime); //ReferenceError: executionTime is not defined


//Block examples
/*
{}

if()
{
}

function name  () {
}
*/