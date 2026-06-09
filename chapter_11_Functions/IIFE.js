// Immediately Invoked Function Expression (IIFE):
(function () {          // creation & calling on self
    console.log("Hi");
})();

// Real playwright
(function () {
    // actual playwright code to run test case
})();

(function () {
    console.log("Staging");
})();


// IIFE with Arrow
(() => {
    console.log("IIFE wit Arrow function");
})();