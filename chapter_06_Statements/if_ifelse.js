// Nested if > if inside another if.
let driver_age = 22;
let hasLicense = true;

if (driver_age >= 18) {

    if (hasLicense) {
        console.log("Can Drive");
    }
}
else {
    console.log("Driving not allowed!");
}