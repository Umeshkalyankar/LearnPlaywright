// let & const are Block scoped

//remember: you cannot use variable before declartion

let x = "Global";
if (true) {

    console.log(x); //ReferenceError: Cannot access 'x' before initialization
    // TDZ is here

    let x = "block";
    console.log(x);
}