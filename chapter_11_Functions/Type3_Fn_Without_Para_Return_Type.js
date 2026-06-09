function lightOn() {
    console.log("Press the switch");
    return "Light On";
}
let light = lightOn(); // first lightOn printed & return value given back to function & stored in variable
console.log(light);

console.log("---------------");

function getEnvironment() {
    return "QA";
}

let env = getEnvironment();
console.log(env);



// console.log()  → Show value on screen

// return         → Give value back to caller