// Callback runs later after some time or after an event completes.
// Async callback - does not wait/block for step & can be run later

console.log("Test 1: started");

setTimeout(() => {
    console.log("Test 2: API response received!")
}, 2000);

console.log("Test 3: moving to next last");


// "Run timeout callback after 2 seconds." > It does not wait.