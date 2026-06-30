// Callback runs immediately before moving to the next line.
// if line is not executed it will wait & does not move further

let testResults = ["Pass", "Fail", "Pass", "Skip"];

testResults.forEach(function (result, index) {
    console.log("Test" + index + "=> " + result);
})

// Anonymous function will take item 1 by 1
// it will take the index 1 by 1, it will take the result 1 by 1 & prints 1 by 1

