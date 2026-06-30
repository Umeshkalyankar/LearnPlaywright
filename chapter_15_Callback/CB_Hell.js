// Real QA scenario - End-to-End

// openBrowser()
// goToLoginPage()
// enterCredentials()
// clickLogin()

function openBrowser(callback) {
    console.log("Step 1: opening the browser");
    setTimeout(function () {
        callback();
    }, 2000);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login page is loaded");
        callback();
    }, 1000);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Enter credentials");
        callback();
    }, 1000);
}
function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Click on Login button");
        callback();
    }, 1000);
}
// THIS IS CALLBACK HELL >> Pyramid of doom

openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test completed.")

            });
        });
    });
});


// Callback functions can lead to callback hell when multiple asynchronous operations
// depend on each other. They make code difficult to read, maintain, and handle errors.
// Promises and async/await solve these problems.


// To remove this problem javascript introduces a concept of async() & await()